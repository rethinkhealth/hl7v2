// Generated profile automaton for DFT_P03 (v2.2)

export const start = 0;
export const finals = new Set<number>([4]);
export const alphabet = new Set<string>([
  "EVN",
  "FT1",
  "MSH",
  "OBX",
  "PID",
  "PV1",
  "PV2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [
    3,
    new Map([
      ["FT1", 4],
      ["OBX", 5],
      ["PV1", 7],
      ["PV2", 6],
    ]),
  ],
  [4, new Map([["FT1", 4]])],
  [
    5,
    new Map([
      ["FT1", 4],
      ["OBX", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["FT1", 4],
      ["OBX", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["FT1", 4],
      ["OBX", 5],
      ["PV2", 6],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
