// Generated profile automaton for QBP_Q11 (v2.7)

export const start = 0;
export const finals = new Set<number>([5, 7]);
export const alphabet = new Set<string>([
  "DSC",
  "MSH",
  "QPD",
  "RCP",
  "SFT",
  "UAC",
  "anyHL7Segment",
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
      ["anyHL7Segment", 6],
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
    groupsClosed: ["QBP_Q11/QBP"],
    groupsOpened: [],
  },
  "2:anyHL7Segment": {
    groupsClosed: [],
    groupsOpened: ["QBP_Q11/QBP"],
  },
  "6:RCP": {
    groupsClosed: ["QBP_Q11/QBP"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
