import type { Definition } from "../../src/automata/types";
import { expectedSymbols } from "../../src/automata/utils";

describe("expectedSymbols", () => {
  it("should return empty array for non-existent state", () => {
    const definition: Definition = {
      finals: new Set([1]),
      start: 0,
      transitions: new Map([[0, new Map([["MSH", 1]])]]),
    };

    const result = expectedSymbols(definition, 999);

    expect(result).toEqual([]);
  });

  it("should return single symbol for state with one transition", () => {
    const definition: Definition = {
      finals: new Set([1]),
      start: 0,
      transitions: new Map([[0, new Map([["MSH", 1]])]]),
    };

    const result = expectedSymbols(definition, 0);

    expect(result).toEqual(["MSH"]);
  });

  it("should return multiple symbols for state with multiple transitions", () => {
    const definition: Definition = {
      finals: new Set([1, 2, 3]),
      start: 0,
      transitions: new Map([
        [
          0,
          new Map([
            ["MSH", 1],
            ["PID", 2],
            ["PV1", 3],
          ]),
        ],
      ]),
    };

    const result = expectedSymbols(definition, 0);

    expect(result).toHaveLength(3);
    expect(result).toEqual(["MSH", "PID", "PV1"]);
  });

  it("should return empty array for state with empty transitions map", () => {
    const definition: Definition = {
      finals: new Set([1]),
      start: 0,
      transitions: new Map([[0, new Map()]]),
    };

    const result = expectedSymbols(definition, 0);

    expect(result).toEqual([]);
  });

  it("should handle complex DFA with multiple states", () => {
    const definition: Definition = {
      finals: new Set([3]),
      start: 0,
      transitions: new Map([
        [0, new Map([["MSH", 1]])],
        [
          1,
          new Map([
            ["PID", 2],
            ["PV1", 2],
          ]),
        ],
        [2, new Map([["OBX", 3]])],
      ]),
    };

    expect(expectedSymbols(definition, 0)).toEqual(["MSH"]);
    expect(expectedSymbols(definition, 1)).toEqual(["PID", "PV1"]);
    expect(expectedSymbols(definition, 2)).toEqual(["OBX"]);
    expect(expectedSymbols(definition, 3)).toEqual([]);
  });

  it("should return readonly array", () => {
    const definition: Definition = {
      finals: new Set([1]),
      start: 0,
      transitions: new Map([
        [
          0,
          new Map([
            ["MSH", 1],
            ["PID", 1],
          ]),
        ],
      ]),
    };

    const result = expectedSymbols(definition, 0);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });
});
