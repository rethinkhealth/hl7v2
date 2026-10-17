import type { Group, Root, Segment } from "@glion/ast";
import { parseHL7v2 } from "@glion/parser";
import { describe, expect, it } from "vitest";

import { parseSendArgs, prepareRequest } from "../../src/commands/send";

describe("parseSendArgs", () => {
  describe("message source", () => {
    it("defaults file to undefined (stdin) when no positional is given", () => {
      const result = parseSendArgs([]);
      expect(result).toEqual({
        args: {
          file: undefined,
          help: false,
          host: undefined,
          json: false,
          port: undefined,
          timeoutMs: undefined,
        },
        ok: true,
      });
    });

    it("captures a positional file path", () => {
      const result = parseSendArgs(["message.hl7"]);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.args.file).toBe("message.hl7");
      }
    });

    it('collapses the "-" stdin sentinel to undefined', () => {
      const result = parseSendArgs(["-"]);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.args.file).toBeUndefined();
      }
    });

    it('treats "-" as a positional, not an unknown flag, with other flags present', () => {
      const result = parseSendArgs(["--json", "-"]);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.args.file).toBeUndefined();
        expect(result.args.json).toBe(true);
      }
    });

    it("accepts a positional that is not the first token", () => {
      const result = parseSendArgs(["--host", "1.2.3.4", "message.hl7"]);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.args.file).toBe("message.hl7");
        expect(result.args.host).toBe("1.2.3.4");
      }
    });
  });

  describe("explicit target", () => {
    it("parses --host and --port", () => {
      const result = parseSendArgs(["--host", "127.0.0.1", "--port", "2575"]);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.args.host).toBe("127.0.0.1");
        expect(result.args.port).toBe(2575);
      }
    });

    it("parses --port as an integer, not a string", () => {
      const result = parseSendArgs(["--port", "2575"]);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.args.port).toBe(2575);
        expect(typeof result.args.port).toBe("number");
      }
    });
  });

  describe("TLS flags", () => {
    it("dials in plaintext when no TLS flag is given", () => {
      const result = parseSendArgs(["--host", "h"]);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.args.tls).toBeUndefined();
      }
    });

    it("asks for TLS on --tls alone, naming no file", () => {
      const result = parseSendArgs(["--tls"]);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.args.tls).toEqual({
          ca: undefined,
          cert: undefined,
          insecure: false,
          key: undefined,
        });
      }
    });

    it("asks for TLS when a certificate file is named without --tls", () => {
      const result = parseSendArgs([
        "--ca",
        "./ca.pem",
        "--cert",
        "./c.pem",
        "--key",
        "./c.key",
      ]);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.args.tls).toEqual({
          ca: "./ca.pem",
          cert: "./c.pem",
          insecure: false,
          key: "./c.key",
        });
      }
    });

    it("asks for TLS on --insecure alone, with verification off", () => {
      const result = parseSendArgs(["--insecure"]);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.args.tls).toEqual({
          ca: undefined,
          cert: undefined,
          insecure: true,
          key: undefined,
        });
      }
    });

    it("rejects a certificate flag without a path", () => {
      expect(parseSendArgs(["--ca"])).toEqual({
        error: "`--ca` takes a value.",
        ok: false,
      });
      expect(parseSendArgs(["--cert", "--json"])).toEqual({
        error: "`--cert` takes a value.",
        ok: false,
      });
      expect(parseSendArgs(["--key", ""])).toEqual({
        error: "`--key` takes a value.",
        ok: false,
      });
    });
  });

  describe("--timeout", () => {
    it("parses --timeout as an integer", () => {
      const result = parseSendArgs(["--timeout", "5000"]);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.args.timeoutMs).toBe(5000);
      }
    });

    it("leaves timeoutMs undefined when omitted", () => {
      const result = parseSendArgs([]);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.args.timeoutMs).toBeUndefined();
      }
    });
  });

  describe("--json", () => {
    it("sets json to true", () => {
      const result = parseSendArgs(["--json"]);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.args.json).toBe(true);
      }
    });
  });

  describe("--help / -h", () => {
    it("sets help for --help", () => {
      const result = parseSendArgs(["--help"]);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.args.help).toBe(true);
      }
    });

    it("sets help for -h", () => {
      const result = parseSendArgs(["-h"]);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.args.help).toBe(true);
      }
    });
  });

  describe("combined happy path", () => {
    it("parses a full explicit-target invocation", () => {
      const result = parseSendArgs([
        "message.hl7",
        "--host",
        "192.168.1.10",
        "--port",
        "2575",
        "--timeout",
        "10000",
        "--json",
      ]);
      expect(result).toEqual({
        args: {
          file: "message.hl7",
          help: false,
          host: "192.168.1.10",
          json: true,
          port: 2575,
          timeoutMs: 10_000,
        },
        ok: true,
      });
    });
  });

  describe("error cases", () => {
    it("rejects --host without a value (end of argv)", () => {
      const result = parseSendArgs(["--host"]);
      expect(result).toEqual({ error: "`--host` takes a value.", ok: false });
    });

    it("rejects --host followed by a flag", () => {
      const result = parseSendArgs(["--host", "--json"]);
      expect(result).toEqual({ error: "`--host` takes a value.", ok: false });
    });

    it("rejects an empty --host: an unset shell variable names no target", () => {
      const result = parseSendArgs(["--host", "", "--port", "2575"]);
      expect(result).toEqual({ error: "`--host` takes a value.", ok: false });
    });

    it("rejects --port without a value", () => {
      const result = parseSendArgs(["--port"]);
      expect(result).toEqual({ error: "`--port` takes a value.", ok: false });
    });

    it("rejects --port followed by a flag", () => {
      const result = parseSendArgs(["--port", "--json"]);
      expect(result).toEqual({ error: "`--port` takes a value.", ok: false });
    });

    it("rejects a non-integer --port", () => {
      const result = parseSendArgs(["--port", "abc"]);
      expect(result).toEqual({
        error: "`--port` takes a whole number.",
        ok: false,
      });
    });

    it("rejects a fractional --port", () => {
      const result = parseSendArgs(["--port", "25.7"]);
      expect(result).toEqual({
        error: "`--port` takes a whole number.",
        ok: false,
      });
    });

    it("rejects --config, which `glion send` does not take", () => {
      const result = parseSendArgs(["--config", "./glion.config.ts"]);
      expect(result).toEqual({
        error: "`--config` is not a `glion send` flag.",
        ok: false,
      });
    });

    it("rejects a port no host can listen on", () => {
      const result = parseSendArgs(["--port", "70000"]);
      expect(result).toEqual({
        error: "`--port` takes a port between 1 and 65535.",
        ok: false,
      });
    });

    it("rejects --timeout without a value", () => {
      const result = parseSendArgs(["--timeout"]);
      expect(result).toEqual({
        error: "`--timeout` takes a value.",
        ok: false,
      });
    });

    it("rejects --timeout followed by a flag", () => {
      const result = parseSendArgs(["--timeout", "--json"]);
      expect(result).toEqual({
        error: "`--timeout` takes a value.",
        ok: false,
      });
    });

    it("rejects a non-integer --timeout", () => {
      const result = parseSendArgs(["--timeout", "soon"]);
      expect(result).toEqual({
        error: "`--timeout` takes a whole number.",
        ok: false,
      });
    });

    it("rejects --port 0", () => {
      const result = parseSendArgs(["--port", "0"]);
      expect(result).toEqual({
        error: "`--port` takes a port between 1 and 65535.",
        ok: false,
      });
    });

    it("rejects --timeout 0", () => {
      const result = parseSendArgs(["--timeout", "0"]);
      expect(result).toEqual({
        error: "`--timeout` takes a number of milliseconds above zero.",
        ok: false,
      });
    });

    it("rejects an unknown flag", () => {
      const result = parseSendArgs(["--raw"]);
      expect(result).toEqual({
        error: "`--raw` is not a `glion send` flag.",
        ok: false,
      });
    });

    it("rejects an unknown short flag", () => {
      const result = parseSendArgs(["-x"]);
      expect(result).toEqual({
        error: "`-x` is not a `glion send` flag.",
        ok: false,
      });
    });

    it("rejects more than one message source", () => {
      const result = parseSendArgs(["a.hl7", "b.hl7"]);
      expect(result).toEqual({
        error: "`glion send` takes one message source.",
        ok: false,
      });
    });

    it("rejects a second source even when the first is the stdin sentinel", () => {
      const result = parseSendArgs(["-", "b.hl7"]);
      expect(result).toEqual({
        error: "`glion send` takes one message source.",
        ok: false,
      });
    });
  });
});

/** A segment with no fields: only its Segment ID is read here. */
function segment(name: string): Segment {
  return { children: [], name, type: "segment" };
}

describe("prepareRequest", () => {
  it("summarizes the message it will put on the wire", () => {
    const tree = parseHL7v2(
      "MSH|^~\\&|APP|FAC|||20260101||ADT^A01|MSG1|P|2.5\rPID|||1"
    );
    expect(prepareRequest(tree)).toMatchObject({
      ok: true,
      request: { controlId: "MSG1", segmentCount: 2 },
    });
  });

  it("counts the segments inside a group, with the rest", () => {
    // A tree grouped by `@glion/transform-profile-groups` holds its segments
    // inside `group` nodes; the segments of the message are the same ones, so
    // a grouped message is one message and its count includes them.
    const group: Group = {
      children: [segment("OBR"), segment("OBX")],
      id: "ORDER_OBSERVATION",
      name: "Order Observation",
      type: "group",
    };
    const tree: Root = {
      children: [segment("MSH"), group, segment("PID")],
      type: "root",
    };
    expect(prepareRequest(tree)).toMatchObject({
      ok: true,
      request: { segmentCount: 4 },
    });
  });

  it("refuses a source with no segments", () => {
    expect(prepareRequest({ children: [], type: "root" })).toMatchObject({
      hint: "A message begins with its message header segment; check what comes before it in the source.",
      ok: false,
      reason:
        "The source does not begin with a message header segment (`MSH`).",
    });
  });

  it("refuses a source holding a second message header segment", () => {
    const tree: Root = {
      children: [segment("MSH"), segment("PID"), segment("MSH")],
      type: "root",
    };
    expect(prepareRequest(tree)).toMatchObject({
      ok: false,
      reason: "The source holds more than one message.",
    });
  });

  it("refuses a message its own delimiters cannot write", () => {
    // MSH-1 `X` and MSH-2 `E~\&`: the escape character in MSH-3 is written
    // `\E\` or `\X5C\`, and both hold a delimiter.
    const tree = parseHL7v2("MSHXE~\\&XAPP\\bXFAC");
    expect(prepareRequest(tree)).toMatchObject({
      ok: false,
      reason:
        "The value holds a character that must be written as an escape sequence, and every escape sequence for it holds one of the message's delimiters. With delimiters that are ASCII punctuation, every character can be written.",
    });
  });
});
