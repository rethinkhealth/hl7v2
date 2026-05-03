// Generated profile automaton for ADT_A43 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([5]);
export const alphabet = new Set<string>([
  "EVN",
  "MRG",
  "MSH",
  "PD1",
  "PID",
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
      ["MRG", 5],
      ["PD1", 6],
    ]),
  ],
  [5, new Map([["PID", 4]])],
  [6, new Map([["MRG", 5]])],
]);
export const effects = {
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ADT_A43/PATIENT"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ADT_A43/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
