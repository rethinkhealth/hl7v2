// Generated profile automaton for QBP_Q13 (v2.7)

export const start = 0;
export const finals = new Set<number>([5, 8]);
export const alphabet = new Set<string>([
  "DSC",
  "MSH",
  "QPD",
  "RCP",
  "RDF",
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
      ["Hxx", 7],
      ["RCP", 5],
      ["RDF", 6],
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
  [5, new Map([["DSC", 8]])],
  [6, new Map([["RCP", 5]])],
  [
    7,
    new Map([
      ["RCP", 5],
      ["RDF", 6],
    ]),
  ],
  [8, new Map([])],
]);
export const effects = {
  "2:RCP": {
    groupsOpened: [],
    groupsClosed: ["QBP_Q13/QBP"],
  },
  "2:RDF": {
    groupsOpened: [],
    groupsClosed: ["QBP_Q13/QBP"],
  },
  "2:Hxx": {
    groupsOpened: ["QBP_Q13/QBP"],
    groupsClosed: [],
  },
  "7:RCP": {
    groupsOpened: [],
    groupsClosed: ["QBP_Q13/QBP"],
  },
  "7:RDF": {
    groupsOpened: [],
    groupsClosed: ["QBP_Q13/QBP"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
