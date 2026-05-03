// Generated profile automaton for RSP_K25 (v2.5)

export const start = 0;
export const finals = new Set<number>([8, 9, 10, 11, 12, 13, 14, 15]);
export const alphabet = new Set<string>([
  "AFF",
  "CER",
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
  "SFT",
  "STF",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 5],
      ["QAK", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([["QPD", 6]])],
  [
    5,
    new Map([
      ["ERR", 5],
      ["QAK", 4],
    ]),
  ],
  [6, new Map([["RCP", 7]])],
  [7, new Map([["STF", 8]])],
  [
    8,
    new Map([
      ["AFF", 13],
      ["CER", 10],
      ["DSC", 9],
      ["EDU", 11],
      ["LAN", 12],
      ["ORG", 14],
      ["PRA", 15],
      ["STF", 8],
    ]),
  ],
  [9, new Map([])],
  [
    10,
    new Map([
      ["CER", 10],
      ["DSC", 9],
      ["STF", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["CER", 10],
      ["DSC", 9],
      ["EDU", 11],
      ["STF", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["CER", 10],
      ["DSC", 9],
      ["EDU", 11],
      ["LAN", 12],
      ["STF", 8],
    ]),
  ],
  [
    13,
    new Map([
      ["AFF", 13],
      ["CER", 10],
      ["DSC", 9],
      ["EDU", 11],
      ["LAN", 12],
      ["STF", 8],
    ]),
  ],
  [
    14,
    new Map([
      ["AFF", 13],
      ["CER", 10],
      ["DSC", 9],
      ["EDU", 11],
      ["LAN", 12],
      ["ORG", 14],
      ["STF", 8],
    ]),
  ],
  [
    15,
    new Map([
      ["AFF", 13],
      ["CER", 10],
      ["DSC", 9],
      ["EDU", 11],
      ["LAN", 12],
      ["ORG", 14],
      ["PRA", 15],
      ["STF", 8],
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
  "14:DSC": {
    groupsClosed: ["RSP_K25/STAFF"],
    groupsOpened: [],
  },
  "14:STF": {
    groupsClosed: [],
    groupsOpened: ["RSP_K25/STAFF"],
  },
  "15:DSC": {
    groupsClosed: ["RSP_K25/STAFF"],
    groupsOpened: [],
  },
  "15:STF": {
    groupsClosed: [],
    groupsOpened: ["RSP_K25/STAFF"],
  },
  "7:STF": {
    groupsClosed: [],
    groupsOpened: ["RSP_K25/STAFF"],
  },
  "8:DSC": {
    groupsClosed: ["RSP_K25/STAFF"],
    groupsOpened: [],
  },
  "8:STF": {
    groupsClosed: [],
    groupsOpened: ["RSP_K25/STAFF"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
