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
  "7:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "8:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "10:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "11:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "12:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "13:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "14:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "15:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
