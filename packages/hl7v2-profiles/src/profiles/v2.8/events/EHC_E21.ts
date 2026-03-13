// Generated profile automaton for EHC_E21 (v2.8)

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
    groupsOpened: ["EHC_E21/AUTHORIZATION_REQUEST"],
    groupsClosed: [],
  },
  "2:PSL": {
    groupsOpened: ["EHC_E21/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
    groupsClosed: [],
  },
  "3:IVC": {
    groupsOpened: ["EHC_E21/AUTHORIZATION_REQUEST"],
    groupsClosed: [],
  },
  "4:IVC": {
    groupsOpened: ["EHC_E21/AUTHORIZATION_REQUEST"],
    groupsClosed: [],
  },
  "5:PSL": {
    groupsOpened: ["EHC_E21/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
    groupsClosed: [],
  },
  "6:PSL": {
    groupsOpened: ["EHC_E21/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
    groupsClosed: [],
  },
  "7:PSL": {
    groupsOpened: ["EHC_E21/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
