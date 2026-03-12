// Generated profile automaton for RSP_K25 (v2.7)

export const start = 0;
export const finals = new Set<number>([9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
export const alphabet = new Set<string>([
  "AFF",
  "CER",
  "DSC",
  "EDU",
  "ERR",
  "LAN",
  "MSA",
  "MSH",
  "NK1",
  "ORG",
  "PRA",
  "QAK",
  "QPD",
  "RCP",
  "ROL",
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
      ["AFF", 16],
      ["CER", 13],
      ["DSC", 10],
      ["EDU", 14],
      ["LAN", 15],
      ["NK1", 12],
      ["ORG", 17],
      ["PRA", 18],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
  [10, new Map([])],
  [
    11,
    new Map([
      ["DSC", 10],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["DSC", 10],
      ["NK1", 12],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["CER", 13],
      ["DSC", 10],
      ["NK1", 12],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
  [
    14,
    new Map([
      ["CER", 13],
      ["DSC", 10],
      ["EDU", 14],
      ["NK1", 12],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
  [
    15,
    new Map([
      ["CER", 13],
      ["DSC", 10],
      ["EDU", 14],
      ["LAN", 15],
      ["NK1", 12],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
  [
    16,
    new Map([
      ["AFF", 16],
      ["CER", 13],
      ["DSC", 10],
      ["EDU", 14],
      ["LAN", 15],
      ["NK1", 12],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
  [
    17,
    new Map([
      ["AFF", 16],
      ["CER", 13],
      ["DSC", 10],
      ["EDU", 14],
      ["LAN", 15],
      ["NK1", 12],
      ["ORG", 17],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
  [
    18,
    new Map([
      ["AFF", 16],
      ["CER", 13],
      ["DSC", 10],
      ["EDU", 14],
      ["LAN", 15],
      ["NK1", 12],
      ["ORG", 17],
      ["PRA", 18],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
]);
export const effects = {
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "11:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "12:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "13:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "14:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "15:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "16:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "17:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "18:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "8:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "9:STF": {
    groupsOpened: ["RSP_K25/STAFF"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
