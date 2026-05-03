// Generated profile automaton for RSP_K25 (v2.4)

export const start = 0;
export const finals = new Set<number>([7, 8, 9, 10, 11, 12, 13]);
export const alphabet = new Set<string>([
  "AFF",
  "DSC",
  "EDU",
  "ERR",
  "LAN",
  "MSA",
  "MSH",
  "ORG",
  "PRA",
  "QAK",
  "QPD",
  "RCP",
  "STF",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 4],
      ["QAK", 3],
    ]),
  ],
  [3, new Map([["QPD", 5]])],
  [4, new Map([["QAK", 3]])],
  [5, new Map([["RCP", 6]])],
  [6, new Map([["STF", 7]])],
  [
    7,
    new Map([
      ["AFF", 11],
      ["DSC", 8],
      ["EDU", 9],
      ["LAN", 10],
      ["ORG", 12],
      ["PRA", 13],
      ["STF", 7],
    ]),
  ],
  [8, new Map([])],
  [
    9,
    new Map([
      ["DSC", 8],
      ["EDU", 9],
      ["STF", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["DSC", 8],
      ["EDU", 9],
      ["LAN", 10],
      ["STF", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["AFF", 11],
      ["DSC", 8],
      ["EDU", 9],
      ["LAN", 10],
      ["STF", 7],
    ]),
  ],
  [
    12,
    new Map([
      ["AFF", 11],
      ["DSC", 8],
      ["EDU", 9],
      ["LAN", 10],
      ["ORG", 12],
      ["STF", 7],
    ]),
  ],
  [
    13,
    new Map([
      ["AFF", 11],
      ["DSC", 8],
      ["EDU", 9],
      ["LAN", 10],
      ["ORG", 12],
      ["STF", 7],
    ]),
  ],
]);
export const effects = {
  "10:DSC": {
    groupsClosed: ["RSP_K25/STAFF"],
    groupsOpened: [],
  },
  "10:STF": {
    groupsClosed: [],
    groupsOpened: ["RSP_K25/STAFF"],
  },
  "11:DSC": {
    groupsClosed: ["RSP_K25/STAFF"],
    groupsOpened: [],
  },
  "11:STF": {
    groupsClosed: [],
    groupsOpened: ["RSP_K25/STAFF"],
  },
  "12:DSC": {
    groupsClosed: ["RSP_K25/STAFF"],
    groupsOpened: [],
  },
  "12:STF": {
    groupsClosed: [],
    groupsOpened: ["RSP_K25/STAFF"],
  },
  "13:DSC": {
    groupsClosed: ["RSP_K25/STAFF"],
    groupsOpened: [],
  },
  "13:STF": {
    groupsClosed: [],
    groupsOpened: ["RSP_K25/STAFF"],
  },
  "6:STF": {
    groupsClosed: [],
    groupsOpened: ["RSP_K25/STAFF"],
  },
  "7:DSC": {
    groupsClosed: ["RSP_K25/STAFF"],
    groupsOpened: [],
  },
  "7:STF": {
    groupsClosed: [],
    groupsOpened: ["RSP_K25/STAFF"],
  },
  "9:DSC": {
    groupsClosed: ["RSP_K25/STAFF"],
    groupsOpened: [],
  },
  "9:STF": {
    groupsClosed: [],
    groupsOpened: ["RSP_K25/STAFF"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
