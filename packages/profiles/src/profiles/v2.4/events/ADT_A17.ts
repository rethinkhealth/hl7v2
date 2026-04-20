// Generated profile automaton for ADT_A17 (v2.4)

export const start = 0;
export const finals = new Set<number>([10, 12, 13, 14]);
export const alphabet = new Set<string>([
  "DB1",
  "EVN",
  "MSH",
  "OBX",
  "PD1",
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
      ["PD1", 5],
      ["PV1", 4],
    ]),
  ],
  [
    4,
    new Map([
      ["DB1", 8],
      ["OBX", 7],
      ["PID", 6],
      ["PV2", 9],
    ]),
  ],
  [5, new Map([["PV1", 4]])],
  [
    6,
    new Map([
      ["PD1", 11],
      ["PV1", 10],
    ]),
  ],
  [
    7,
    new Map([
      ["OBX", 7],
      ["PID", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["DB1", 8],
      ["OBX", 7],
      ["PID", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["DB1", 8],
      ["OBX", 7],
      ["PID", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["DB1", 13],
      ["OBX", 12],
      ["PV2", 14],
    ]),
  ],
  [11, new Map([["PV1", 10]])],
  [12, new Map([["OBX", 12]])],
  [
    13,
    new Map([
      ["DB1", 13],
      ["OBX", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["DB1", 13],
      ["OBX", 12],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
