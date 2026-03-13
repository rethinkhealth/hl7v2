// Generated profile automaton for ADT_A16 (v2.4)

export const start = 0;
export const finals = new Set<number>([4, 7, 8, 9, 10, 11, 12]);
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
  "ROL",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [
    3,
    new Map([
      ["PD1", 6],
      ["PV1", 4],
      ["ROL", 5],
    ]),
  ],
  [
    4,
    new Map([
      ["DB1", 10],
      ["DG1", 8],
      ["DRG", 7],
      ["OBX", 9],
      ["PV2", 12],
      ["ROL", 11],
    ]),
  ],
  [
    5,
    new Map([
      ["PV1", 4],
      ["ROL", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["PV1", 4],
      ["ROL", 5],
    ]),
  ],
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
      ["ROL", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["DB1", 10],
      ["DG1", 8],
      ["DRG", 7],
      ["OBX", 9],
      ["ROL", 11],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
