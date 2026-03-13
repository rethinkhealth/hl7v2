// Generated profile automaton for EHC_E24 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([7, 8, 9]);
export const alphabet = new Set<string>([
  "ADJ",
  "AUT",
  "ERR",
  "IVC",
  "MSA",
  "MSH",
  "PSL",
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
      ["IVC", 5],
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
  [5, new Map([["PSL", 7]])],
  [
    6,
    new Map([
      ["ERR", 6],
      ["IVC", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["ADJ", 8],
      ["AUT", 9],
      ["PSL", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["ADJ", 8],
      ["PSL", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["ADJ", 8],
      ["PSL", 7],
    ]),
  ],
]);
export const effects = {
  "2:IVC": {
    groupsOpened: ["EHC_E24/AUTHORIZATION_RESPONSE_INFO"],
    groupsClosed: [],
  },
  "5:PSL": {
    groupsOpened: ["EHC_E24/AUTHORIZATION_RESPONSE_INFO/PSL_ITEM_INFO"],
    groupsClosed: [],
  },
  "6:IVC": {
    groupsOpened: ["EHC_E24/AUTHORIZATION_RESPONSE_INFO"],
    groupsClosed: [],
  },
  "7:PSL": {
    groupsOpened: ["EHC_E24/AUTHORIZATION_RESPONSE_INFO/PSL_ITEM_INFO"],
    groupsClosed: [],
  },
  "8:PSL": {
    groupsOpened: ["EHC_E24/AUTHORIZATION_RESPONSE_INFO/PSL_ITEM_INFO"],
    groupsClosed: [],
  },
  "9:PSL": {
    groupsOpened: ["EHC_E24/AUTHORIZATION_RESPONSE_INFO/PSL_ITEM_INFO"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
