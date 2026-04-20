// Generated profile automaton for ADT_A17 (v2.2)

export const start = 0;
export const finals = new Set<number>([8, 9, 10]);
export const alphabet = new Set<string>([
  "EVN",
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
  [3, new Map([["PV1", 4]])],
  [
    4,
    new Map([
      ["OBX", 6],
      ["PID", 5],
      ["PV2", 7],
    ]),
  ],
  [5, new Map([["PV1", 8]])],
  [
    6,
    new Map([
      ["OBX", 6],
      ["PID", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["OBX", 6],
      ["PID", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["OBX", 9],
      ["PV2", 10],
    ]),
  ],
  [9, new Map([["OBX", 9]])],
  [10, new Map([["OBX", 9]])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
