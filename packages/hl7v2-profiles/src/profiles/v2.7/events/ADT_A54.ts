// Generated profile automaton for ADT_A54 (v2.7)

export const start = 0;
export const finals = new Set<number>([6, 9, 10]);
export const alphabet = new Set<string>([
  "EVN",
  "MSH",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "ROL",
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
      ["PD1", 8],
      ["PV1", 6],
      ["ROL", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["PV2", 10],
      ["ROL", 9],
    ]),
  ],
  [
    7,
    new Map([
      ["PV1", 6],
      ["ROL", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["PV1", 6],
      ["ROL", 7],
    ]),
  ],
  [9, new Map([["ROL", 9]])],
  [10, new Map([["ROL", 9]])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
