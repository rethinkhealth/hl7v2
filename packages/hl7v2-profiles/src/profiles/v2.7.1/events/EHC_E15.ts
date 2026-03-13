// Generated profile automaton for EHC_E15 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([5, 6, 8, 12, 13]);
export const alphabet = new Set<string>([
  "ADJ",
  "IPR",
  "IVC",
  "MSH",
  "PMT",
  "PSG",
  "PSL",
  "PSS",
  "PYE",
  "ROL",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["PMT", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["PYE", 5]])],
  [
    3,
    new Map([
      ["PMT", 2],
      ["UAC", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["PMT", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["ADJ", 6],
      ["IPR", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["ADJ", 6],
      ["ROL", 8],
    ]),
  ],
  [7, new Map([["IVC", 9]])],
  [8, new Map([["ADJ", 6]])],
  [9, new Map([["PSS", 10]])],
  [10, new Map([["PSG", 11]])],
  [11, new Map([["PSL", 12]])],
  [
    12,
    new Map([
      ["ADJ", 13],
      ["IPR", 7],
      ["PSG", 11],
      ["PSL", 12],
      ["PSS", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["ADJ", 13],
      ["IPR", 7],
      ["PSG", 11],
      ["PSL", 12],
      ["PSS", 10],
      ["ROL", 8],
    ]),
  ],
]);
export const effects = {
  "1:PMT": {
    groupsOpened: ["EHC_E15/PAYMENT_REMITTANCE_HEADER_INFO"],
    groupsClosed: [],
  },
  "3:PMT": {
    groupsOpened: ["EHC_E15/PAYMENT_REMITTANCE_HEADER_INFO"],
    groupsClosed: [],
  },
  "4:PMT": {
    groupsOpened: ["EHC_E15/PAYMENT_REMITTANCE_HEADER_INFO"],
    groupsClosed: [],
  },
  "5:ADJ": {
    groupsOpened: ["EHC_E15/ADJUSTMENT_PAYEE"],
    groupsClosed: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO",
      "EHC_E15/PAYMENT_REMITTANCE_HEADER_INFO",
    ],
  },
  "5:IPR": {
    groupsOpened: ["EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO"],
    groupsClosed: [
      "EHC_E15/ADJUSTMENT_PAYEE",
      "EHC_E15/PAYMENT_REMITTANCE_HEADER_INFO",
    ],
  },
  "6:ADJ": {
    groupsOpened: ["EHC_E15/ADJUSTMENT_PAYEE"],
    groupsClosed: [],
  },
  "8:ADJ": {
    groupsOpened: ["EHC_E15/ADJUSTMENT_PAYEE"],
    groupsClosed: [],
  },
  "9:PSS": {
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION",
    ],
    groupsClosed: [],
  },
  "10:PSG": {
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
    ],
    groupsClosed: [],
  },
  "11:PSL": {
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
    groupsClosed: [],
  },
  "12:PSL": {
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
    groupsClosed: [],
  },
  "12:PSG": {
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
    ],
    groupsClosed: ["EHC_E15/ADJUSTMENT_PAYEE"],
  },
  "12:PSS": {
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION",
    ],
    groupsClosed: [
      "EHC_E15/ADJUSTMENT_PAYEE",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
  },
  "12:IPR": {
    groupsOpened: ["EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO"],
    groupsClosed: [
      "EHC_E15/ADJUSTMENT_PAYEE",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
  },
  "12:ADJ": {
    groupsOpened: ["EHC_E15/ADJUSTMENT_PAYEE"],
    groupsClosed: [],
  },
  "13:ADJ": {
    groupsOpened: ["EHC_E15/ADJUSTMENT_PAYEE"],
    groupsClosed: [],
  },
  "13:PSL": {
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
    groupsClosed: [],
  },
  "13:PSG": {
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
    ],
    groupsClosed: ["EHC_E15/ADJUSTMENT_PAYEE"],
  },
  "13:PSS": {
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION",
    ],
    groupsClosed: [
      "EHC_E15/ADJUSTMENT_PAYEE",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
  },
  "13:IPR": {
    groupsOpened: ["EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO"],
    groupsClosed: [
      "EHC_E15/ADJUSTMENT_PAYEE",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
  },
  "13:ROL": {
    groupsOpened: [],
    groupsClosed: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
