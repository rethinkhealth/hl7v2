// Generated profile automaton for RSP_K25 (v2.6)

export const start = 0;
export const finals = new Set<number>([9, 10, 11, 12, 13, 14, 15, 16]);
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
    ]),
  ],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["QPD", 7]])],
  [
    6,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
    ]),
  ],
  [7, new Map([["RCP", 8]])],
  [8, new Map([["STF", 9]])],
  [
    9,
    new Map([
      ["AFF", 14],
      ["CER", 11],
      ["DSC", 10],
      ["EDU", 12],
      ["LAN", 13],
      ["ORG", 15],
      ["PRA", 16],
      ["STF", 9],
    ]),
  ],
  [10, new Map([])],
  [
    11,
    new Map([
      ["CER", 11],
      ["DSC", 10],
      ["STF", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["CER", 11],
      ["DSC", 10],
      ["EDU", 12],
      ["STF", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["CER", 11],
      ["DSC", 10],
      ["EDU", 12],
      ["LAN", 13],
      ["STF", 9],
    ]),
  ],
  [
    14,
    new Map([
      ["AFF", 14],
      ["CER", 11],
      ["DSC", 10],
      ["EDU", 12],
      ["LAN", 13],
      ["STF", 9],
    ]),
  ],
  [
    15,
    new Map([
      ["AFF", 14],
      ["CER", 11],
      ["DSC", 10],
      ["EDU", 12],
      ["LAN", 13],
      ["ORG", 15],
      ["STF", 9],
    ]),
  ],
  [
    16,
    new Map([
      ["AFF", 14],
      ["CER", 11],
      ["DSC", 10],
      ["EDU", 12],
      ["LAN", 13],
      ["ORG", 15],
      ["PRA", 16],
      ["STF", 9],
    ]),
  ],
]);
export const effects = {
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
  "16:DSC": {
    groupsClosed: ["RSP_K25/STAFF"],
    groupsOpened: [],
  },
  "16:STF": {
    groupsClosed: [],
    groupsOpened: ["RSP_K25/STAFF"],
  },
  "8:STF": {
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
