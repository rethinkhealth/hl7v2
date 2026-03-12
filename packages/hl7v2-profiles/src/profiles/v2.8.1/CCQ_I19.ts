// Generated profile automaton for CCQ_I19 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7]);
export const alphabet = new Set<string>([
  "CTD",
  "MSH",
  "PRD",
  "REL",
  "RF1",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["RF1", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["PRD", 6],
      ["REL", 5],
    ]),
  ],
  [3, new Map([["RF1", 2]])],
  [
    4,
    new Map([
      ["RF1", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["REL", 5]])],
  [
    6,
    new Map([
      ["CTD", 7],
      ["PRD", 6],
      ["REL", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["CTD", 7],
      ["PRD", 6],
      ["REL", 5],
    ]),
  ],
]);
export const effects = {
  "2:PRD": {
    groupsOpened: ["CCQ_I19/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "2:REL": {
    groupsOpened: [],
    groupsClosed: ["CCQ_I19/PROVIDER_CONTACT"],
  },
  "6:PRD": {
    groupsOpened: ["CCQ_I19/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "6:REL": {
    groupsOpened: [],
    groupsClosed: ["CCQ_I19/PROVIDER_CONTACT"],
  },
  "7:PRD": {
    groupsOpened: ["CCQ_I19/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "7:REL": {
    groupsOpened: [],
    groupsClosed: ["CCQ_I19/PROVIDER_CONTACT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
