// Generated profile automaton for ADT_A15 (v2.4)

export const start = 0;
export const finals = new Set<number>([4, 7, 8, 9, 10, 11]);
export const alphabet = new Set<string>([
  "DB1",
  "DG1",
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
      ["DB1", 9],
      ["DG1", 7],
      ["OBX", 8],
      ["PV2", 11],
      ["ROL", 10],
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
  [7, new Map([["DG1", 7]])],
  [
    8,
    new Map([
      ["DG1", 7],
      ["OBX", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["DB1", 9],
      ["DG1", 7],
      ["OBX", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["DB1", 9],
      ["DG1", 7],
      ["OBX", 8],
      ["ROL", 10],
    ]),
  ],
  [
    11,
    new Map([
      ["DB1", 9],
      ["DG1", 7],
      ["OBX", 8],
      ["ROL", 10],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
