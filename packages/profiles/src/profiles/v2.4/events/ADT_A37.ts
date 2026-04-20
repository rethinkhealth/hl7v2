// Generated profile automaton for ADT_A37 (v2.4)

export const start = 0;
export const finals = new Set<number>([4, 8, 9, 10]);
export const alphabet = new Set<string>([
  "DB1",
  "EVN",
  "MSH",
  "PD1",
  "PID",
  "PV1",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [
    3,
    new Map([
      ["DB1", 5],
      ["PD1", 7],
      ["PID", 4],
      ["PV1", 6],
    ]),
  ],
  [
    4,
    new Map([
      ["DB1", 8],
      ["PD1", 10],
      ["PV1", 9],
    ]),
  ],
  [
    5,
    new Map([
      ["DB1", 5],
      ["PID", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["DB1", 5],
      ["PID", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["DB1", 5],
      ["PID", 4],
      ["PV1", 6],
    ]),
  ],
  [8, new Map([["DB1", 8]])],
  [9, new Map([["DB1", 8]])],
  [
    10,
    new Map([
      ["DB1", 8],
      ["PV1", 9],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
