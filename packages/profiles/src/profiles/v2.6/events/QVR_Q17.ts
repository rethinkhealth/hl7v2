// Generated profile automaton for QVR_Q17 (v2.6)

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
  "2:Hxx": {
    groupsClosed: [],
    groupsOpened: ["QVR_Q17/QBP"],
  },
  "2:RCP": {
    groupsClosed: ["QVR_Q17/QBP"],
    groupsOpened: [],
  },
  "6:RCP": {
    groupsClosed: ["QVR_Q17/QBP"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
