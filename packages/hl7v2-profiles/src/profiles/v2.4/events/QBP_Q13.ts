// Generated profile automaton for QBP_Q13 (v2.4)

export const start = 0;
export const finals = new Set<number>([3, 6]);
export const alphabet = new Set<string>([
  "DSC",
  "MSH",
  "QPD",
  "RCP",
  "RDF",
  "anyZSegment",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["QPD", 2]])],
  [
    2,
    new Map([
      ["anyZSegment", 5],
      ["RCP", 3],
      ["RDF", 4],
    ]),
  ],
  [3, new Map([["DSC", 6]])],
  [4, new Map([["RCP", 3]])],
  [
    5,
    new Map([
      ["RCP", 3],
      ["RDF", 4],
    ]),
  ],
  [6, new Map([])],
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
  "2:anyZSegment": {
    groupsOpened: ["QBP_Q13/QBP"],
    groupsClosed: [],
  },
  "5:RCP": {
    groupsOpened: [],
    groupsClosed: ["QBP_Q13/QBP"],
  },
  "5:RDF": {
    groupsOpened: [],
    groupsClosed: ["QBP_Q13/QBP"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
