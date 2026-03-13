import { runner } from "../../src/automata/runner";
import type { Definition } from "../../src/automata/types";

describe("runner - incremental API", () => {
  describe("basic functionality", () => {
    it("should create a runner with consume method and state properties", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([[0, new Map([["MSH", 1]])]]),
        finals: new Set([1]),
      };
      const r = runner(dfa);

      expect(r.consume).toBeInstanceOf(Function);
      expectTypeOf(r.accepted).toBeBoolean();
      expect(Array.isArray(r.expected)).toBe(true);
    });

    it("should process valid transitions and return step events", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([
          [0, new Map([["MSH", 1]])],
          [1, new Map([["PID", 2]])],
        ]),
        finals: new Set([2]),
      };
      const r = runner(dfa);

      const event1 = r.consume("MSH");
      expect(event1.type).toBe("step");

      const event2 = r.consume("PID");
      expect(event2.type).toBe("step");

      expect(r.accepted).toBe(true);
    });

    it("should return invalid event when no transition exists", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([[0, new Map([["MSH", 1]])]]),
        finals: new Set([1]),
      };
      const r = runner(dfa);

      const event = r.consume("INVALID");
      expect(event.type).toBe("invalid");
      if (event.type === "invalid") {
        expect(event.symbol).toBe("INVALID");
        expect(event.expected).toEqual(["MSH"]);
      }

      expect(r.accepted).toBe(false);
    });

    it("should accept empty message when start state is final", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map(),
        finals: new Set([0]),
      };
      const r = runner(dfa);

      expect(r.accepted).toBe(true);
    });

    it("should reject empty message when start state is not final", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([[0, new Map([["MSH", 1]])]]),
        finals: new Set([1]),
      };
      const r = runner(dfa);

      expect(r.accepted).toBe(false);
      expect(r.expected).toEqual(["MSH"]);
    });
  });

  describe("invalid state handling", () => {
    it("should stop processing after first invalid symbol", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([
          [0, new Map([["MSH", 1]])],
          [1, new Map([["PID", 2]])],
        ]),
        finals: new Set([2]),
      };
      const r = runner(dfa);

      r.consume("MSH");
      const invalidEvent = r.consume("WRONG");
      expect(invalidEvent.type).toBe("invalid");

      // Subsequent consumes return invalid event (state machine is in Failed state)
      const event2 = r.consume("PID");
      expect(event2.type).toBe("invalid");
      if (event2.type === "invalid") {
        expect(event2.expected).toEqual([]); // Empty because already failed
      }

      expect(r.accepted).toBe(false);
    });

    it("should provide expected symbols in invalid event", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([
          [
            0,
            new Map([
              ["MSH", 1],
              ["FHS", 2],
            ]),
          ],
        ]),
        finals: new Set([1, 2]),
      };
      const r = runner(dfa);

      const event = r.consume("INVALID");
      expect(event.type).toBe("invalid");
      if (event.type === "invalid") {
        expect(event.expected).toContain("MSH");
        expect(event.expected).toContain("FHS");
      }
    });
  });

  describe("effects handling", () => {
    it("should include effects in step event when available", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([[0, new Map([["MSH", 1]])]]),
        finals: new Set([1]),
        effects: {
          "0:MSH": {
            groupsOpened: ["MESSAGE"],
            groupsClosed: [],
          },
        },
      };
      const r = runner(dfa);

      const event = r.consume("MSH");
      expect(event.type).toBe("step");
      if (event.type === "step") {
        expect(event.effects).toBeDefined();
        expect(event.effects?.groupsOpened).toEqual(["MESSAGE"]);
        expect(event.effects?.groupsClosed).toEqual([]);
      }
    });

    it("should not include effects when not defined", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([[0, new Map([["MSH", 1]])]]),
        finals: new Set([1]),
      };
      const r = runner(dfa);

      const event = r.consume("MSH");
      expect(event.type).toBe("step");
      if (event.type === "step") {
        expect(event.effects).toBeUndefined();
      }
    });

    it("should handle multiple effects on different transitions", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([
          [0, new Map([["MSH", 1]])],
          [1, new Map([["PID", 2]])],
        ]),
        finals: new Set([2]),
        effects: {
          "0:MSH": {
            groupsOpened: ["MESSAGE"],
            groupsClosed: [],
          },
          "1:PID": {
            groupsOpened: ["PATIENT"],
            groupsClosed: [],
          },
        },
      };
      const r = runner(dfa);

      const e1 = r.consume("MSH");
      const e2 = r.consume("PID");

      expect(e1.type === "step" && e1.effects?.groupsOpened).toEqual([
        "MESSAGE",
      ]);
      expect(e2.type === "step" && e2.effects?.groupsOpened).toEqual([
        "PATIENT",
      ]);
    });
  });

  describe("instance creation", () => {
    it("should create independent runner instances", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([
          [0, new Map([["MSH", 1]])],
          [1, new Map([["PID", 2]])],
        ]),
        finals: new Set([2]),
      };

      // First run
      const r1 = runner(dfa);
      r1.consume("MSH");
      r1.consume("PID");
      expect(r1.accepted).toBe(true);

      // Second run with new instance
      const r2 = runner(dfa);
      const event = r2.consume("MSH");
      expect(event.type).toBe("step");

      expect(r2.accepted).toBe(false);
    });

    it("should create fresh state for each instance", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([[0, new Map([["MSH", 1]])]]),
        finals: new Set([1]),
      };

      // First instance fails
      const r1 = runner(dfa);
      const invalid = r1.consume("WRONG");
      expect(invalid.type).toBe("invalid");

      // New instance starts fresh
      const r2 = runner(dfa);
      const event = r2.consume("MSH");
      expect(event.type).toBe("step");

      expect(r2.accepted).toBe(true);
    });
  });

  describe("complex automata", () => {
    it("should handle repeating segments (loops)", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([
          [0, new Map([["MSH", 1]])],
          [
            1,
            new Map([
              ["OBX", 1], // Loop back
              ["END", 2],
            ]),
          ],
        ]),
        finals: new Set([2]),
      };
      const r = runner(dfa);

      r.consume("MSH");
      r.consume("OBX");
      r.consume("OBX");
      r.consume("OBX");
      const lastEvent = r.consume("END");

      expect(lastEvent.type).toBe("step");
      expect(r.accepted).toBe(true);
    });

    it("should handle optional segments", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([
          [
            0,
            new Map([
              ["MSH", 1],
              ["PID", 2], // Skip directly to PID
            ]),
          ],
          [1, new Map([["PID", 2]])],
        ]),
        finals: new Set([2]),
      };

      // Path 1: Skip MSH
      const r1 = runner(dfa);
      const e1 = r1.consume("PID");
      expect(e1.type).toBe("step");
      expect(r1.accepted).toBe(true);

      // Path 2: Include MSH
      const r2 = runner(dfa);
      const e2 = r2.consume("MSH");
      const e3 = r2.consume("PID");
      expect(e2.type).toBe("step");
      expect(e3.type).toBe("step");
      expect(r2.accepted).toBe(true);
    });

    it("should handle branching paths", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([
          [
            0,
            new Map([
              ["MSH", 1],
              ["FHS", 2],
            ]),
          ],
          [1, new Map([["PID", 3]])],
          [2, new Map([["BHS", 3]])],
        ]),
        finals: new Set([3]),
      };

      // Path 1: MSH -> PID
      const r1 = runner(dfa);
      r1.consume("MSH");
      r1.consume("PID");
      expect(r1.accepted).toBe(true);

      // Path 2: FHS -> BHS
      const r2 = runner(dfa);
      r2.consume("FHS");
      r2.consume("BHS");
      expect(r2.accepted).toBe(true);
    });

    it("should provide correct expected symbols at each state", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([
          [
            0,
            new Map([
              ["MSH", 1],
              ["FHS", 1],
            ]),
          ],
          [
            1,
            new Map([
              ["PID", 2],
              ["PV1", 2],
              ["OBX", 2],
            ]),
          ],
        ]),
        finals: new Set([2]),
      };
      const r = runner(dfa);

      // At start, expect MSH or FHS
      expect(r.expected).toContain("MSH");
      expect(r.expected).toContain("FHS");

      // After MSH, expect PID, PV1, or OBX
      r.consume("MSH");
      expect(r.expected).toContain("PID");
      expect(r.expected).toContain("PV1");
      expect(r.expected).toContain("OBX");

      // After PID, no more transitions
      r.consume("PID");
      expect(r.expected).toEqual([]);
    });
  });

  describe("finish state reporting", () => {
    it("should report accepted when ending in final state", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([[0, new Map([["MSH", 1]])]]),
        finals: new Set([1]),
      };
      const r = runner(dfa);

      r.consume("MSH");

      expect(r.accepted).toBe(true);
      expect(r.expected).toEqual([]);
    });

    it("should report not accepted when not in final state", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([
          [0, new Map([["MSH", 1]])],
          [1, new Map([["PID", 2]])],
        ]),
        finals: new Set([2]),
      };
      const r = runner(dfa);

      r.consume("MSH");

      expect(r.accepted).toBe(false);
      expect(r.expected).toEqual(["PID"]);
    });

    it("should report not accepted when invalid occurred", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([[0, new Map([["MSH", 1]])]]),
        finals: new Set([1]),
      };
      const r = runner(dfa);

      r.consume("WRONG");

      expect(r.accepted).toBe(false);
    });
  });

  describe("edge cases", () => {
    it("should handle DFA with no transitions", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map(),
        finals: new Set([0]),
      };
      const r = runner(dfa);

      const event = r.consume("ANY");
      expect(event.type).toBe("invalid");

      expect(r.accepted).toBe(false);
    });

    it("should handle DFA with no final states", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([[0, new Map([["MSH", 1]])]]),
        finals: new Set(),
      };
      const r = runner(dfa);

      r.consume("MSH");

      expect(r.accepted).toBe(false);
    });

    it("should handle state with no outgoing transitions", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([
          [0, new Map([["MSH", 1]])],
          // State 1 has no transitions
        ]),
        finals: new Set([1]),
      };
      const r = runner(dfa);

      r.consume("MSH");
      expect(r.accepted).toBe(true);
      expect(r.expected).toEqual([]);

      // Try to consume more
      const event = r.consume("PID");
      expect(event.type).toBe("invalid");
      if (event.type === "invalid") {
        expect(event.expected).toEqual([]);
      }
    });

    it("should handle multiple final states", () => {
      const dfa: Definition = {
        start: 0,
        transitions: new Map([
          [0, new Map([["MSH", 1]])],
          [1, new Map([["PID", 2]])],
        ]),
        finals: new Set([1, 2]),
      };
      const r = runner(dfa);

      // Stop at first final state
      r.consume("MSH");
      expect(r.accepted).toBe(true);

      // Continue to second final state
      r.consume("PID");
      expect(r.accepted).toBe(true);
    });
  });
});
