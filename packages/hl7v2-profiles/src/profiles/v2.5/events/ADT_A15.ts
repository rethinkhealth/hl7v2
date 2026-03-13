// Generated profile automaton for ADT_A15 (v2.5)

export const start = 0;
export const finals = new Set<number>([5, 8, 9, 10, 11, 12]);
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
      ["PD1", 7],
      ["PV1", 5],
      ["ROL", 6],
    ]),
  ],
  [
    5,
    new Map([
      ["DB1", 10],
      ["DG1", 8],
      ["OBX", 9],
      ["PV2", 12],
      ["ROL", 11],
    ]),
  ],
  [
    6,
    new Map([
      ["PV1", 5],
      ["ROL", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["PV1", 5],
      ["ROL", 6],
    ]),
  ],
  [8, new Map([["DG1", 8]])],
  [
    9,
    new Map([
      ["DG1", 8],
      ["OBX", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["DB1", 10],
      ["DG1", 8],
      ["OBX", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["DB1", 10],
      ["DG1", 8],
      ["OBX", 9],
      ["ROL", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["DB1", 10],
      ["DG1", 8],
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
