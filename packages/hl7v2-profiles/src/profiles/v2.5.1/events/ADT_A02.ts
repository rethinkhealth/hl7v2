// Generated profile automaton for ADT_A02 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([5, 8, 9, 10, 11, 12]);
export const alphabet = new Set<string>([
  "DB1",
  "EVN",
  "MSH",
  "OBX",
  "PD1",
  "PDA",
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
      ["OBX", 9],
      ["PDA", 8],
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
  [8, new Map([])],
  [
    9,
    new Map([
      ["OBX", 9],
      ["PDA", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["DB1", 10],
      ["OBX", 9],
      ["PDA", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["DB1", 10],
      ["OBX", 9],
      ["PDA", 8],
      ["ROL", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["DB1", 10],
      ["OBX", 9],
      ["PDA", 8],
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
