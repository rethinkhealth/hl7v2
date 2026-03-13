// Generated profile automaton for ADT_A38 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([6, 8, 9, 10, 11, 12]);
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["PID", 5]])],
  [3, new Map([["EVN", 2]])],
  [
    4,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["PD1", 7],
      ["PV1", 6],
    ]),
  ],
  [
    6,
    new Map([
      ["DB1", 11],
      ["DG1", 9],
      ["DRG", 8],
      ["OBX", 10],
      ["PV2", 12],
    ]),
  ],
  [7, new Map([["PV1", 6]])],
  [8, new Map([])],
  [
    9,
    new Map([
      ["DG1", 9],
      ["DRG", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["DG1", 9],
      ["DRG", 8],
      ["OBX", 10],
    ]),
  ],
  [
    11,
    new Map([
      ["DB1", 11],
      ["DG1", 9],
      ["DRG", 8],
      ["OBX", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["DB1", 11],
      ["DG1", 9],
      ["DRG", 8],
      ["OBX", 10],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
