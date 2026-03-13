// Generated profile automaton for ADT_A38 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([5, 7, 8, 9, 10, 11]);
export const alphabet = new Set<string>([
  "DB1",
  "DG1",
  "DRG",
  "EVN",
  "MSH",
  "OBX",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EVN", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["PID", 4]])],
  [
    3,
    new Map([
      ["EVN", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["PD1", 6],
      ["PV1", 5],
    ]),
  ],
  [
    5,
    new Map([
      ["DB1", 10],
      ["DG1", 8],
      ["DRG", 7],
      ["OBX", 9],
      ["PV2", 11],
    ]),
  ],
  [6, new Map([["PV1", 5]])],
  [7, new Map([])],
  [
    8,
    new Map([
      ["DG1", 8],
      ["DRG", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["DG1", 8],
      ["DRG", 7],
      ["OBX", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["DB1", 10],
      ["DG1", 8],
      ["DRG", 7],
      ["OBX", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["DB1", 10],
      ["DG1", 8],
      ["DRG", 7],
      ["OBX", 9],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
