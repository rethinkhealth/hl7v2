// Generated profile automaton for ADT_A24 (v2.5)

export const start = 0;
export const finals = new Set<number>([5, 9, 10, 11]);
export const alphabet = new Set<string>([
  "DB1",
  "EVN",
  "MSH",
  "PD1",
  "PID",
  "PV1",
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
      ["DB1", 6],
      ["PD1", 8],
      ["PID", 5],
      ["PV1", 7],
    ]),
  ],
  [
    5,
    new Map([
      ["DB1", 9],
      ["PD1", 11],
      ["PV1", 10],
    ]),
  ],
  [
    6,
    new Map([
      ["DB1", 6],
      ["PID", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["DB1", 6],
      ["PID", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["DB1", 6],
      ["PID", 5],
      ["PV1", 7],
    ]),
  ],
  [9, new Map([["DB1", 9]])],
  [10, new Map([["DB1", 9]])],
  [
    11,
    new Map([
      ["DB1", 9],
      ["PV1", 10],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
