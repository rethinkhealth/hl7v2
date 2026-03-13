// Generated profile automaton for ADT_A54 (v2.5)

export const start = 0;
export const finals = new Set<number>([5, 8, 9]);
export const alphabet = new Set<string>([
  "EVN",
  "MSH",
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
      ["PV2", 9],
      ["ROL", 8],
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
  [8, new Map([["ROL", 8]])],
  [9, new Map([["ROL", 8]])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
