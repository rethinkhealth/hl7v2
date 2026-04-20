// Generated profile automaton for ADT_A02 (v2.3)

export const start = 0;
export const finals = new Set<number>([4, 6, 7, 8]);
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
      ["DB1", 7],
      ["OBX", 6],
      ["PV2", 8],
    ]),
  ],
  [5, new Map([["PV1", 4]])],
  [6, new Map([["OBX", 6]])],
  [
    7,
    new Map([
      ["DB1", 7],
      ["OBX", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["DB1", 7],
      ["OBX", 6],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
