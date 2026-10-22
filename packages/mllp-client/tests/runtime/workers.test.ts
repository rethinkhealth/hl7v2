import { describe, expect, it } from "vitest";

import { workersSocket } from "../../src/runtime/workers";

describe("workersSocket", () => {
  it("does not dial until connect() is called", () => {
    let dials = 0;
    const dial = () => {
      dials += 1;
      throw new Error("dialed");
    };

    workersSocket(dial);

    expect(dials).toBe(0);
  });

  it("throws INVALID_OPTION when dial is not a function", () => {
    const legacy = { host: "hl7.example.org", port: 2575 };

    expect(() => workersSocket(legacy as never)).toThrow(
      expect.objectContaining({
        code: "INVALID_OPTION",
        message:
          "`dial` is not a function; it must open a connection to the remote system.",
      })
    );
  });
});
