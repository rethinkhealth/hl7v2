// Generated profile automaton for EHC_E21 (v2.7)

export const start = 0;
export const finals = new Set<number>([5, 6, 7]);
export const alphabet = new Set<string>([
  "AUT",
  "IVC",
  "MSH",
  "NTE",
  "PSL",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["IVC", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["PSL", 5]])],
  [
    3,
    new Map([
      ["IVC", 2],
      ["UAC", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["IVC", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["AUT", 6],
      ["NTE", 7],
      ["PSL", 5],
    ]),
  ],
  [6, new Map([["PSL", 5]])],
  [
    7,
    new Map([
      ["AUT", 6],
      ["NTE", 7],
      ["PSL", 5],
    ]),
  ],
]);
export const effects = {
  "1:IVC": {
    groupsClosed: [],
    groupsOpened: ["EHC_E21/AUTHORIZATION_REQUEST"],
  },
  "2:PSL": {
    groupsClosed: [],
    groupsOpened: ["EHC_E21/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
  },
  "3:IVC": {
    groupsClosed: [],
    groupsOpened: ["EHC_E21/AUTHORIZATION_REQUEST"],
  },
  "4:IVC": {
    groupsClosed: [],
    groupsOpened: ["EHC_E21/AUTHORIZATION_REQUEST"],
  },
  "5:PSL": {
    groupsClosed: [],
    groupsOpened: ["EHC_E21/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
  },
  "6:PSL": {
    groupsClosed: [],
    groupsOpened: ["EHC_E21/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
  },
  "7:PSL": {
    groupsClosed: [],
    groupsOpened: ["EHC_E21/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
