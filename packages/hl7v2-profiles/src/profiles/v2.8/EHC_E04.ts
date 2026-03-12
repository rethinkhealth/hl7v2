// Generated profile automaton for EHC_E04 (v2.8)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 8]);
export const alphabet = new Set<string>([
  "IVC",
  "MSH",
  "NTE",
  "PSG",
  "PSL",
  "PSS",
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
  [
    2,
    new Map([
      ["NTE", 6],
      ["PSS", 5],
    ]),
  ],
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
      ["PSG", 7],
      ["PSS", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 6],
      ["PSS", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["PSG", 7],
      ["PSL", 8],
      ["PSS", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["PSG", 7],
      ["PSL", 8],
      ["PSS", 5],
    ]),
  ],
]);
export const effects = {
  "1:IVC": {
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO"],
    groupsClosed: [],
  },
  "2:PSS": {
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION"],
    groupsClosed: [],
  },
  "3:IVC": {
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO"],
    groupsClosed: [],
  },
  "4:IVC": {
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO"],
    groupsClosed: [],
  },
  "5:PSG": {
    groupsOpened: [
      "EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
    ],
    groupsClosed: [],
  },
  "5:PSS": {
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION"],
    groupsClosed: [],
  },
  "6:PSS": {
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION"],
    groupsClosed: [],
  },
  "7:PSG": {
    groupsOpened: [
      "EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
    ],
    groupsClosed: [],
  },
  "7:PSS": {
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION"],
    groupsClosed: [],
  },
  "8:PSG": {
    groupsOpened: [
      "EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
    ],
    groupsClosed: [],
  },
  "8:PSS": {
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
