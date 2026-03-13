// Generated profile automaton for QBP_E22 (v2.8)

export const start = 0;
export const finals = new Set<number>([5]);
export const alphabet = new Set<string>(["MSH", "QPD", "RCP", "SFT", "UAC"]);
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
  [2, new Map([["RCP", 5]])],
  [
    3,
    new Map([
      ["QPD", 2],
      ["UAC", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["QPD", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([])],
]);
export const effects = {
  "1:QPD": {
    groupsOpened: ["QBP_E22/QUERY"],
    groupsClosed: [],
  },
  "3:QPD": {
    groupsOpened: ["QBP_E22/QUERY"],
    groupsClosed: [],
  },
  "4:QPD": {
    groupsOpened: ["QBP_E22/QUERY"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
