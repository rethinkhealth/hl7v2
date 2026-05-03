// Generated profile automaton for EHC_E04 (v2.6)

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
    groupsClosed: [],
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO"],
  },
  "2:PSS": {
    groupsClosed: [],
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION"],
  },
  "3:IVC": {
    groupsClosed: [],
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO"],
  },
  "4:IVC": {
    groupsClosed: [],
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO"],
  },
  "5:PSG": {
    groupsClosed: [],
    groupsOpened: [
      "EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
    ],
  },
  "5:PSS": {
    groupsClosed: [],
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION"],
  },
  "6:PSS": {
    groupsClosed: [],
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION"],
  },
  "7:PSG": {
    groupsClosed: [],
    groupsOpened: [
      "EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
    ],
  },
  "7:PSS": {
    groupsClosed: [],
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION"],
  },
  "8:PSG": {
    groupsClosed: [],
    groupsOpened: [
      "EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
    ],
  },
  "8:PSS": {
    groupsClosed: [],
    groupsOpened: ["EHC_E04/REASSESSMENT_REQUEST_INFO/PRODUCT_SERVICE_SECTION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
