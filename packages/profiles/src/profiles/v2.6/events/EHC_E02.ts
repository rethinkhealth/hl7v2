// Generated profile automaton for EHC_E02 (v2.6)

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
    groupsClosed: [],
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION/PSG"],
  },
  "10:PSS": {
    groupsClosed: [],
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION"],
  },
  "1:IVC": {
    groupsClosed: [],
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION"],
  },
  "3:IVC": {
    groupsClosed: [],
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION"],
  },
  "4:IVC": {
    groupsClosed: [],
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION"],
  },
  "5:PSS": {
    groupsClosed: [],
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION"],
  },
  "6:PSG": {
    groupsClosed: [],
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION/PSG"],
  },
  "6:PSS": {
    groupsClosed: [],
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION"],
  },
  "7:PSS": {
    groupsClosed: [],
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION"],
  },
  "8:PSS": {
    groupsClosed: [],
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION"],
  },
  "9:PSG": {
    groupsClosed: [],
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION/PSG"],
  },
  "9:PSS": {
    groupsClosed: [],
    groupsOpened: ["EHC_E02/INVOICE_INFORMATION/PRODUCT_SERVICE_SECTION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
