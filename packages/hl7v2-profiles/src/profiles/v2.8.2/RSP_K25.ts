// Generated profile automaton for RSP_K25 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]);
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
  "PRT",
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
      ["AFF", 17],
      ["CER", 14],
      ["DSC", 10],
      ["EDU", 15],
      ["LAN", 16],
      ["NK1", 13],
      ["ORG", 18],
      ["PRA", 19],
      ["PRT", 12],
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
      ["PRT", 12],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["DSC", 10],
      ["NK1", 13],
      ["PRT", 12],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
  [
    14,
    new Map([
      ["CER", 14],
      ["DSC", 10],
      ["NK1", 13],
      ["PRT", 12],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
  [
    15,
    new Map([
      ["CER", 14],
      ["DSC", 10],
      ["EDU", 15],
      ["NK1", 13],
      ["PRT", 12],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
  [
    16,
    new Map([
      ["CER", 14],
      ["DSC", 10],
      ["EDU", 15],
      ["LAN", 16],
      ["NK1", 13],
      ["PRT", 12],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
  [
    17,
    new Map([
      ["AFF", 17],
      ["CER", 14],
      ["DSC", 10],
      ["EDU", 15],
      ["LAN", 16],
      ["NK1", 13],
      ["PRT", 12],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
  [
    18,
    new Map([
      ["AFF", 17],
      ["CER", 14],
      ["DSC", 10],
      ["EDU", 15],
      ["LAN", 16],
      ["NK1", 13],
      ["ORG", 18],
      ["PRT", 12],
      ["ROL", 11],
      ["STF", 9],
    ]),
  ],
  [
    19,
    new Map([
      ["AFF", 17],
      ["CER", 14],
      ["DSC", 10],
      ["EDU", 15],
      ["LAN", 16],
      ["NK1", 13],
      ["ORG", 18],
      ["PRA", 19],
      ["PRT", 12],
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
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K25/STAFF"],
  },
  "19:STF": {
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
