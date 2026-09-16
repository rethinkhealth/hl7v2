import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Readable } from "node:stream";

import { afterEach, describe, expect, it } from "vitest";

import { readMessages, splitMessages } from "../../src/commands/send-messages";
import { adt } from "../fixtures/send";

const ONE = adt("MSG00001");
const TWO = adt("MSG00002");

describe("splitMessages", () => {
  it("keeps one message whole", () => {
    expect(splitMessages(ONE)).toEqual([ONE]);
  });

  it("starts a message at every line beginning with MSH, whatever the line break", () => {
    for (const br of ["\r", "\n", "\r\n"]) {
      expect(splitMessages(`${ONE}${br}${TWO}`)).toEqual([`${ONE}${br}`, TWO]);
    }
  });

  it("drops whitespace-only chunks between and around messages", () => {
    expect(splitMessages(`\n\n${ONE}\r\n\r\n${TWO}\n\n`)).toEqual([
      `${ONE}\r\n\r\n`,
      `${TWO}\n\n`,
    ]);
  });

  it("does not split on MSH in the middle of a line", () => {
    const text = "MSH|^~\\&|A||||||ADT^A01|X|P|2.5\rNTE|1||see MSH-10";
    expect(splitMessages(text)).toEqual([text]);
  });

  it("keeps text before the first MSH line as a message of its own", () => {
    expect(splitMessages(`PID|1\r${ONE}`)).toEqual(["PID|1\r", ONE]);
  });

  it("returns nothing for empty or blank text", () => {
    expect(splitMessages("")).toEqual([]);
    expect(splitMessages(" \n\r\n")).toEqual([]);
  });
});

describe("readMessages", () => {
  const dirs: string[] = [];

  afterEach(async () => {
    for (const dir of dirs.splice(0)) {
      await rm(dir, { force: true, recursive: true });
    }
  });

  async function file(name: string, contents: string): Promise<string> {
    const dir = await mkdtemp(join(tmpdir(), "glion-send-messages-"));
    dirs.push(dir);
    const path = join(dir, name);
    await writeFile(path, contents, "utf8");
    return path;
  }

  it("reads files and stdin in source order and splits each", async () => {
    const a = await file("a.hl7", `${ONE}\n${TWO}\n`);
    const b = await file("b.hl7", adt("MSG00004"));
    const result = await readMessages(
      [a, "-", b],
      Readable.from(adt("MSG00003"))
    );
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.messages).toEqual([
        `${ONE}\n`,
        `${TWO}\n`,
        adt("MSG00003"),
        adt("MSG00004"),
      ]);
    }
  });

  it("names the source that could not be read", async () => {
    const result = await readMessages(["/no/such/file.hl7"], Readable.from(""));
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("Could not read /no/such/file.hl7");
    }
  });
});
