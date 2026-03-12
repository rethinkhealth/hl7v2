// Generated profile automaton for EHC_E10 (v2.8)

export const start = 0;
export const finals = new Set<number>([14, 15]);
export const alphabet = new Set<string>([
  "ADJ",
  "ERR",
  "IN1",
  "IN2",
  "IPR",
  "IVC",
  "MSA",
  "MSH",
  "NTE",
  "PSG",
  "PSL",
  "PSS",
  "PYE",
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
      ["IPR", 5],
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
  [
    5,
    new Map([
      ["NTE", 8],
      ["PYE", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["ERR", 6],
      ["IPR", 5],
    ]),
  ],
  [7, new Map([["IN1", 9]])],
  [
    8,
    new Map([
      ["NTE", 8],
      ["PYE", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["IN2", 11],
      ["IVC", 10],
    ]),
  ],
  [10, new Map([["PSS", 12]])],
  [11, new Map([["IVC", 10]])],
  [12, new Map([["PSG", 13]])],
  [13, new Map([["PSL", 14]])],
  [
    14,
    new Map([
      ["ADJ", 15],
      ["IPR", 5],
      ["PSG", 13],
      ["PSL", 14],
      ["PSS", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["ADJ", 15],
      ["IPR", 5],
      ["PSG", 13],
      ["PSL", 14],
      ["PSS", 12],
    ]),
  ],
]);
export const effects = {
  "10:PSS": {
    groupsOpened: [
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION",
    ],
    groupsClosed: [],
  },
  "12:PSG": {
    groupsOpened: [
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
    ],
    groupsClosed: [],
  },
  "13:PSL": {
    groupsOpened: [
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PRODUCT_SERVICE_LINE_INFO",
    ],
    groupsClosed: [],
  },
  "14:IPR": {
    groupsOpened: ["EHC_E10/INVOICE_PROCESSING_RESULTS_INFO"],
    groupsClosed: [
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION",
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PRODUCT_SERVICE_LINE_INFO",
    ],
  },
  "14:PSG": {
    groupsOpened: [
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
    ],
    groupsClosed: [],
  },
  "14:PSL": {
    groupsOpened: [
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PRODUCT_SERVICE_LINE_INFO",
    ],
    groupsClosed: [],
  },
  "14:PSS": {
    groupsOpened: [
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION",
    ],
    groupsClosed: [
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PRODUCT_SERVICE_LINE_INFO",
    ],
  },
  "15:IPR": {
    groupsOpened: ["EHC_E10/INVOICE_PROCESSING_RESULTS_INFO"],
    groupsClosed: [
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION",
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PRODUCT_SERVICE_LINE_INFO",
    ],
  },
  "15:PSG": {
    groupsOpened: [
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
    ],
    groupsClosed: [],
  },
  "15:PSL": {
    groupsOpened: [
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PRODUCT_SERVICE_LINE_INFO",
    ],
    groupsClosed: [],
  },
  "15:PSS": {
    groupsOpened: [
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION",
    ],
    groupsClosed: [
      "EHC_E10/INVOICE_PROCESSING_RESULTS_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PRODUCT_SERVICE_LINE_INFO",
    ],
  },
  "2:IPR": {
    groupsOpened: ["EHC_E10/INVOICE_PROCESSING_RESULTS_INFO"],
    groupsClosed: [],
  },
  "6:IPR": {
    groupsOpened: ["EHC_E10/INVOICE_PROCESSING_RESULTS_INFO"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
