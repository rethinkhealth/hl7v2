// Generated profile automaton for RSP_E22 (v2.6)

export const start = 0;
export const finals = new Set<number>([7, 10]);
export const alphabet = new Set<string>([
  "ERR",
  "IVC",
  "MSA",
  "MSH",
  "PSG",
  "PSL",
  "QAK",
  "QPD",
  "SFT",
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
  [
    3,
    new Map([
      ["MSA", 2],
      ["UAC", 3],
    ]),
  ],
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
  [7, new Map([["IVC", 8]])],
  [8, new Map([["PSG", 9]])],
  [9, new Map([["PSL", 10]])],
  [10, new Map([["PSL", 10]])],
]);
export const effects = {
  "2:QAK": {
    groupsOpened: ["RSP_E22/QUERY_ACK"],
    groupsClosed: [],
  },
  "6:QAK": {
    groupsOpened: ["RSP_E22/QUERY_ACK"],
    groupsClosed: [],
  },
  "7:IVC": {
    groupsOpened: ["RSP_E22/QUERY_ACK/AUTHORIZATION_INFO"],
    groupsClosed: [],
  },
  "9:PSL": {
    groupsOpened: ["RSP_E22/QUERY_ACK/AUTHORIZATION_INFO/PSL_ITEM_INFO"],
    groupsClosed: [],
  },
  "10:PSL": {
    groupsOpened: ["RSP_E22/QUERY_ACK/AUTHORIZATION_INFO/PSL_ITEM_INFO"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
