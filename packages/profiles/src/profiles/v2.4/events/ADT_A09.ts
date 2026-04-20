// Generated profile automaton for ADT_A09 (v2.4)

export const start = 0;
export const finals = new Set<number>([4, 6, 7, 8, 9]);
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
      ["DG1", 6],
      ["OBX", 7],
      ["PV2", 9],
    ]),
  ],
  [5, new Map([["PV1", 4]])],
  [6, new Map([["DG1", 6]])],
  [
    7,
    new Map([
      ["DG1", 6],
      ["OBX", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["DB1", 8],
      ["DG1", 6],
      ["OBX", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["DB1", 8],
      ["DG1", 6],
      ["OBX", 7],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
