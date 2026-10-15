/**
 * Regression for https://github.com/rethinkhealth/glion/issues/981.
 *
 * Date: 2026-10-15
 * Symptom: an empty path threw "Path `` does not follow the path grammar…",
 * printing the empty value as empty backticks.
 * Cause: an empty path shared the `INVALID_PATH` sentence, which quotes the
 * path.
 * Resolution: an empty path is its own cause, `EMPTY_PATH`, with a sentence
 * that describes it in words (ADR 0026).
 */

import { m, s } from "@glion/builder";
import { describe, expect, it } from "vitest";

import { parse, select } from "../../src";

describe("an empty path", () => {
  it("throws EMPTY_PATH with a sentence that names no value", () => {
    expect(() => parse("")).toThrow(
      expect.objectContaining({
        code: "EMPTY_PATH",
        message:
          "The path is empty; a path is `[GROUP[N].]...NAME[N][.FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]` with positions from 1, such as `PID.5.1`.",
        path: "",
      })
    );
  });

  it("throws EMPTY_PATH from select()", () => {
    expect(() => select(m(s("MSH")), "")).toThrow(
      expect.objectContaining({ code: "EMPTY_PATH" })
    );
  });
});
