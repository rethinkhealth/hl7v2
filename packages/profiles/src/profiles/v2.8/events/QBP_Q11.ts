// Generated profile automaton for QBP_Q11 (v2.8)

export const start = 0;
export const finals = new Set<number>([5, 7]);
export const alphabet = new Set<string>([
  "DSC",
  "MSH",
  "QPD",
  "RCP",
  "SFT",
  "UAC",
  "Hxx",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["QPD", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["Hxx", 6],
      ["RCP", 5],
    ]),
  ],
  [3, new Map([["QPD", 2]])],
  [
    4,
    new Map([
      ["QPD", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["DSC", 7]])],
  [6, new Map([["RCP", 5]])],
  [7, new Map([])],
]);
export const effects = {
  "2:RCP": {
    groupsOpened: [],
    groupsClosed: ["QBP_Q11/QBP"],
  },
  "2:Hxx": {
    groupsOpened: ["QBP_Q11/QBP"],
    groupsClosed: [],
  },
  "6:RCP": {
    groupsOpened: [],
    groupsClosed: ["QBP_Q11/QBP"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
