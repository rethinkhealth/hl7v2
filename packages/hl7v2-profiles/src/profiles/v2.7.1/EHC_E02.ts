// Generated profile automaton for EHC_E02 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8, 9, 10]);
export const alphabet = new Set<string>([
  "CTD",
  "IVC",
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
      ["IVC", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["PYE", 5]])],
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
      ["CTD", 8],
      ["NTE", 7],
      ["PSS", 6],
    ]),
  ],
  [
    6,
    new Map([
      ["PSG", 9],
      ["PSS", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 7],
      ["PSS", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["CTD", 8],
      ["NTE", 7],
      ["PSS", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["PSG", 9],
      ["PSL", 10],
      ["PSS", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["PSG", 9],
      ["PSL", 10],
      ["PSS", 6],
    ]),
  ],
]);
export const effects = {
  "10:PSG": {
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION/PSG"],
    groupsClosed: [],
  },
  "10:PSS": {
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION"],
    groupsClosed: [],
  },
  "1:IVC": {
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION"],
    groupsClosed: [],
  },
  "3:IVC": {
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION"],
    groupsClosed: [],
  },
  "4:IVC": {
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION"],
    groupsClosed: [],
  },
  "5:PSS": {
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION"],
    groupsClosed: [],
  },
  "6:PSG": {
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION/PSG"],
    groupsClosed: [],
  },
  "6:PSS": {
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION"],
    groupsClosed: [],
  },
  "7:PSS": {
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION"],
    groupsClosed: [],
  },
  "8:PSS": {
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION"],
    groupsClosed: [],
  },
  "9:PSG": {
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION/PSG"],
    groupsClosed: [],
  },
  "9:PSS": {
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
