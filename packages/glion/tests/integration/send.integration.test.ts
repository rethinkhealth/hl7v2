import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Readable } from "node:stream";

import { afterEach, describe, expect, it } from "vitest";

import { runSend } from "../../src/commands/send";
import {
  ADT,
  ackFrame,
  capture,
  fakeSocket,
  flakySocket,
  refusingSocket,
} from "../fixtures/send";

describe("runSend (integration, fake socket)", () => {
  const tempDirs: string[] = [];

  afterEach(async () => {
    while (tempDirs.length > 0) {
      const dir = tempDirs.pop();
      if (dir) {
        await rm(dir, { force: true, recursive: true });
      }
    }
  });

  /** A project directory holding a `glion.config.ts` with `fields`. */
  async function project(fields: string): Promise<string> {
    const dir = await mkdtemp(join(tmpdir(), "glion-send-project-"));
    tempDirs.push(dir);
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { entry: "./app.ts", ${fields} };`,
      "utf8"
    );
    return dir;
  }

  async function writeMessageFile(contents: string): Promise<string> {
    const dir = await mkdtemp(join(tmpdir(), "glion-send-int-"));
    tempDirs.push(dir);
    const file = join(dir, "msg.hl7");
    await writeFile(file, contents, "utf8");
    return file;
  }

  it("exits 0 and reports AA on accept", async () => {
    const { state, stderr, stdout } = capture();
    const code = await runSend({
      argv: ["--host", "h", "--port", "1"],
      cwd: "/tmp",
      socket: fakeSocket(ackFrame("AA")),
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(0);
    const json = JSON.parse(state.out);
    expect(json.ok).toBe(true);
    expect(json.code).toBe("AA");
    expect(json.requestControlId).toBe("MSG00001");
    expect(json.controlId).toBe("MSG00001");
    // MSA-3 of the acknowledgment, as the client read it off the wire.
    expect(json.text).toBe("the peer says hi");
  });

  it("sends to the MLLP standard port when only --host is given", async () => {
    const { state, stderr, stdout } = capture();
    const code = await runSend({
      argv: ["--host", "mllp.test"],
      cwd: "/tmp",
      socket: fakeSocket(ackFrame("AA")),
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(0);
    expect(JSON.parse(state.out)).toMatchObject({
      host: "mllp.test",
      ok: true,
      port: 2575,
    });
  });

  it("exits 1 and reports the NAK on AE", async () => {
    const { state, stderr, stdout } = capture();
    const code = await runSend({
      argv: ["--host", "h", "--port", "1"],
      cwd: "/tmp",
      socket: fakeSocket(ackFrame("AE", true)),
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(1);
    const json = JSON.parse(state.out);
    expect(json.ok).toBe(false);
    expect(json.kind).toBe("nak");
    expect(json.code).toBe("AE");
    expect(json.errorCode).toBe("207");
  });

  it("exits 2 on a connection failure", async () => {
    const { state, stderr, stdout } = capture();
    const code = await runSend({
      argv: ["--host", "h", "--port", "1"],
      cwd: await project("client: { reconnect: false }"),
      socket: refusingSocket,
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(2);
    const json = JSON.parse(state.out);
    expect(json.ok).toBe(false);
    expect(json.kind).toBe("transport");
  });

  it("reconnects when the first dial is refused, and reports the accept", async () => {
    const { state, stderr, stdout } = capture();
    const code = await runSend({
      argv: ["--host", "h", "--port", "1"],
      cwd: await project(
        "client: { reconnect: { attempts: 1, delay: () => 0 } }"
      ),
      socket: flakySocket(1, ackFrame("AA")),
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(0);
    const json = JSON.parse(state.out);
    expect(json.ok).toBe(true);
    expect(json.code).toBe("AA");
  });

  it("gives up after the configured attempts", async () => {
    const { state, stderr, stdout } = capture();
    const code = await runSend({
      argv: ["--host", "h", "--port", "1"],
      cwd: await project(
        "client: { reconnect: { attempts: 1, delay: () => 0 } }"
      ),
      socket: flakySocket(2, ackFrame("AA")),
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(2);
    expect(JSON.parse(state.out).code).toBe("CONNECTION_FAILED");
  });

  it("reads the target from the config under --local", async () => {
    const { state, stderr, stdout } = capture();
    const code = await runSend({
      argv: ["--local"],
      cwd: await project('hostname: "0.0.0.0", port: 2600'),
      socket: fakeSocket(ackFrame("AA")),
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(0);
    const json = JSON.parse(state.out);
    expect(json.host).toBe("127.0.0.1");
    expect(json.port).toBe(2600);
  });

  it("errors (exit 2) under --local when the project has no config", async () => {
    const dir = await mkdtemp(join(tmpdir(), "glion-send-empty-"));
    tempDirs.push(dir);
    const { state, stderr, stdout } = capture();
    const code = await runSend({
      argv: ["--local"],
      cwd: dir,
      socket: fakeSocket(ackFrame("AA")),
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(2);
    const json = JSON.parse(state.out);
    expect(json.kind).toBe("invalid");
    expect(json.message).toContain("No glion config file found");
  });

  it("errors (exit 2) when the config is invalid", async () => {
    const { state, stderr, stdout } = capture();
    const code = await runSend({
      argv: ["--host", "h", "--port", "1"],
      cwd: await project("client: { sendTimeoutMs: 0 }"),
      socket: fakeSocket(ackFrame("AA")),
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(2);
    const json = JSON.parse(state.out);
    expect(json.kind).toBe("invalid");
    expect(json.message).toContain("client.sendTimeoutMs");
  });

  it("loads the config named before the send token, outside cwd", async () => {
    const elsewhere = await mkdtemp(join(tmpdir(), "glion-send-nowhere-"));
    tempDirs.push(elsewhere);
    const dir = await project('hostname: "0.0.0.0", port: 2600');
    const { state, stderr, stdout } = capture();
    const code = await runSend({
      argv: ["--local"],
      // What `glion --config <path> send --local` forwards.
      configPath: join(dir, "glion.config.ts"),
      cwd: elsewhere,
      socket: fakeSocket(ackFrame("AA")),
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(0);
    expect(JSON.parse(state.out).port).toBe(2600);
  });

  it("errors (exit 2) when the cache directory cannot be created", async () => {
    const dir = await project('hostname: "0.0.0.0", port: 2600');
    // A file where .glion/ belongs, so the compiled config has nowhere to go.
    await writeFile(join(dir, ".glion"), "", "utf8");
    const { state, stderr, stdout } = capture();
    const code = await runSend({
      argv: ["--local"],
      cwd: dir,
      socket: fakeSocket(ackFrame("AA")),
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(2);
    const json = JSON.parse(state.out);
    expect(json.kind).toBe("invalid");
    expect(json.message).toContain("Failed to create the cache directory");
  });

  it("errors (exit 2) when no target is given", async () => {
    const { state, stderr, stdout } = capture();
    const code = await runSend({
      argv: [],
      cwd: "/tmp",
      socket: fakeSocket(ackFrame("AA")),
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(2);
    expect(JSON.parse(state.out).kind).toBe("invalid");
  });

  it("prints help and exits 0 for --help", async () => {
    const { state, stdout, stderr } = capture();
    const code = await runSend({
      argv: ["--help"],
      cwd: "/tmp",
      socket: fakeSocket(ackFrame("AA")),
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(0);
    expect(state.out).toContain("glion send");
    expect(state.out).toContain("--local");
  });

  it("prints the parse error and help to stderr and exits 2", async () => {
    const { state, stdout, stderr } = capture();
    const code = await runSend({
      argv: ["--nope"],
      cwd: "/tmp",
      socket: fakeSocket(ackFrame("AA")),
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(2);
    expect(state.err).toContain("Unknown flag: --nope");
  });

  it("reads the message from a file argument", async () => {
    const file = await writeMessageFile(ADT);
    const { state, stdout, stderr } = capture();
    const code = await runSend({
      argv: [file, "--host", "h", "--port", "1"],
      cwd: "/tmp",
      socket: fakeSocket(ackFrame("AA")),
      stderr,
      stdout,
    });

    expect(code).toBe(0);
    expect(JSON.parse(state.out).code).toBe("AA");
  });

  it("reports an invalid outcome when the file cannot be read", async () => {
    const { state, stdout, stderr } = capture();
    const code = await runSend({
      argv: ["/no/such/file.hl7", "--host", "h", "--port", "1"],
      cwd: "/tmp",
      socket: fakeSocket(ackFrame("AA")),
      stderr,
      stdout,
    });

    expect(code).toBe(2);
    const json = JSON.parse(state.out);
    expect(json.kind).toBe("invalid");
    expect(json.message).toContain("Could not read the message");
  });

  it("reports an invalid outcome (exit 2) when the message has no MSH-10", async () => {
    const noControlId = ADT.replace("|MSG00001|", "||");
    const { state, stderr, stdout } = capture();
    const code = await runSend({
      argv: ["--host", "h", "--port", "1"],
      cwd: "/tmp",
      socket: fakeSocket(ackFrame("AA")),
      stderr,
      stdin: Readable.from(noControlId),
      stdout,
    });

    expect(code).toBe(2);
    const json = JSON.parse(state.out);
    expect(json.kind).toBe("invalid");
    expect(json.code).toBe("INVALID_MESSAGE");
    expect(json.cause).toContain("MSH-10");
  });

  it("reports an invalid outcome (exit 2) when the message contains a reserved VT byte", async () => {
    const withVt = `${ADT}\rNTE|1||free\u000Btext`;
    const { state, stderr, stdout } = capture();
    const code = await runSend({
      argv: ["--host", "h", "--port", "1"],
      cwd: "/tmp",
      socket: fakeSocket(ackFrame("AA")),
      stderr,
      stdin: Readable.from(withVt),
      stdout,
    });

    expect(code).toBe(2);
    const json = JSON.parse(state.out);
    expect(json.kind).toBe("invalid");
    expect(json.code).toBe("INVALID_MESSAGE");
  });

  it("renders the human exchange view on a TTY (accept)", async () => {
    const { state, stdout, stderr } = capture(true);
    const code = await runSend({
      argv: ["--host", "h", "--port", "1"],
      cwd: "/tmp",
      socket: fakeSocket(ackFrame("AA")),
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(0);
    // Human output, not JSON.
    expect(state.out).toContain("ACK");
    expect(state.out).toContain("MSG00001");
    expect(() => JSON.parse(state.out)).toThrow();
  });

  it("writes human transport errors to stderr on a TTY", async () => {
    const { state, stdout, stderr } = capture(true);
    const code = await runSend({
      argv: ["--host", "h", "--port", "1"],
      cwd: await project("client: { reconnect: false }"),
      socket: refusingSocket,
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });

    expect(code).toBe(2);
    expect(state.err.length).toBeGreaterThan(0);
    expect(state.out).toBe("");
  });
});
