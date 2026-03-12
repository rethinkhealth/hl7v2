// Generated profile automaton for ADT_A24 (v2.7)

export const start = 0;
export const finals = new Set<number>([6, 10, 11, 12]);
export const alphabet = new Set<string>([
  "DB1",
  "EVN",
  "MSH",
  "PD1",
  "PID",
  "PV1",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["PID", 5]])],
  [3, new Map([["EVN", 2]])],
  [
    4,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["DB1", 7],
      ["PD1", 9],
      ["PID", 6],
      ["PV1", 8],
    ]),
  ],
  [
    6,
    new Map([
      ["DB1", 10],
      ["PD1", 12],
      ["PV1", 11],
    ]),
  ],
  [
    7,
    new Map([
      ["DB1", 7],
      ["PID", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["DB1", 7],
      ["PID", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["DB1", 7],
      ["PID", 6],
      ["PV1", 8],
    ]),
  ],
  [10, new Map([["DB1", 10]])],
  [11, new Map([["DB1", 10]])],
  [
    12,
    new Map([
      ["DB1", 10],
      ["PV1", 11],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
