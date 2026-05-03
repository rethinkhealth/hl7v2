// Generated profile automaton for EHC_E15 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([5, 6, 8, 9, 13, 14]);
export const alphabet = new Set<string>([
  "ADJ",
  "IPR",
  "IVC",
  "MSH",
  "PMT",
  "PRT",
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
      ["PRT", 9],
      ["ROL", 8],
    ]),
  ],
  [7, new Map([["IVC", 10]])],
  [8, new Map([["ADJ", 6]])],
  [
    9,
    new Map([
      ["ADJ", 6],
      ["ROL", 8],
    ]),
  ],
  [10, new Map([["PSS", 11]])],
  [11, new Map([["PSG", 12]])],
  [12, new Map([["PSL", 13]])],
  [
    13,
    new Map([
      ["ADJ", 14],
      ["IPR", 7],
      ["PSG", 12],
      ["PSL", 13],
      ["PSS", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["ADJ", 14],
      ["IPR", 7],
      ["PRT", 9],
      ["PSG", 12],
      ["PSL", 13],
      ["PSS", 11],
      ["ROL", 8],
    ]),
  ],
]);
export const effects = {
  "10:PSS": {
    groupsClosed: [],
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION",
    ],
  },
  "11:PSG": {
    groupsClosed: [],
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
    ],
  },
  "12:PSL": {
    groupsClosed: [],
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
  },
  "13:ADJ": {
    groupsClosed: [],
    groupsOpened: ["EHC_E15/ADJUSTMENT_PAYEE"],
  },
  "13:IPR": {
    groupsClosed: [
      "EHC_E15/ADJUSTMENT_PAYEE",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
    groupsOpened: ["EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO"],
  },
  "13:PSG": {
    groupsClosed: ["EHC_E15/ADJUSTMENT_PAYEE"],
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
    ],
  },
  "13:PSL": {
    groupsClosed: [],
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
  },
  "13:PSS": {
    groupsClosed: [
      "EHC_E15/ADJUSTMENT_PAYEE",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION",
    ],
  },
  "14:ADJ": {
    groupsClosed: [],
    groupsOpened: ["EHC_E15/ADJUSTMENT_PAYEE"],
  },
  "14:IPR": {
    groupsClosed: [
      "EHC_E15/ADJUSTMENT_PAYEE",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
    groupsOpened: ["EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO"],
  },
  "14:PRT": {
    groupsClosed: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
    groupsOpened: [],
  },
  "14:PSG": {
    groupsClosed: ["EHC_E15/ADJUSTMENT_PAYEE"],
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
    ],
  },
  "14:PSL": {
    groupsClosed: [],
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
  },
  "14:PSS": {
    groupsClosed: [
      "EHC_E15/ADJUSTMENT_PAYEE",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
    groupsOpened: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION",
    ],
  },
  "14:ROL": {
    groupsClosed: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP",
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO/PRODUCT_SERVICE_SECTION/PRODUCT_SERVICE_GROUP/PSL_ITEM_INFO",
    ],
    groupsOpened: [],
  },
  "1:PMT": {
    groupsClosed: [],
    groupsOpened: ["EHC_E15/PAYMENT_REMITTANCE_HEADER_INFO"],
  },
  "3:PMT": {
    groupsClosed: [],
    groupsOpened: ["EHC_E15/PAYMENT_REMITTANCE_HEADER_INFO"],
  },
  "4:PMT": {
    groupsClosed: [],
    groupsOpened: ["EHC_E15/PAYMENT_REMITTANCE_HEADER_INFO"],
  },
  "5:ADJ": {
    groupsClosed: [
      "EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO",
      "EHC_E15/PAYMENT_REMITTANCE_HEADER_INFO",
    ],
    groupsOpened: ["EHC_E15/ADJUSTMENT_PAYEE"],
  },
  "5:IPR": {
    groupsClosed: [
      "EHC_E15/ADJUSTMENT_PAYEE",
      "EHC_E15/PAYMENT_REMITTANCE_HEADER_INFO",
    ],
    groupsOpened: ["EHC_E15/PAYMENT_REMITTANCE_DETAIL_INFO"],
  },
  "6:ADJ": {
    groupsClosed: [],
    groupsOpened: ["EHC_E15/ADJUSTMENT_PAYEE"],
  },
  "8:ADJ": {
    groupsClosed: [],
    groupsOpened: ["EHC_E15/ADJUSTMENT_PAYEE"],
  },
  "9:ADJ": {
    groupsClosed: [],
    groupsOpened: ["EHC_E15/ADJUSTMENT_PAYEE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
