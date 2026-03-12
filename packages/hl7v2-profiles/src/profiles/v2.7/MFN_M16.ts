// Generated profile automaton for MFN_M16 (v2.7)

export const start = 0;
export const finals = new Set<number>([6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
export const alphabet = new Set<string>([
  "ILT",
  "ITM",
  "IVT",
  "MFE",
  "MFI",
  "MSH",
  "NTE",
  "PCE",
  "PKG",
  "SFT",
  "STZ",
  "UAC",
  "VND",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MFI", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["MFE", 5]])],
  [3, new Map([["MFI", 2]])],
  [
    4,
    new Map([
      ["MFI", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["ITM", 6]])],
  [
    6,
    new Map([
      ["IVT", 7],
      ["MFE", 5],
      ["NTE", 10],
      ["STZ", 9],
      ["VND", 8],
    ]),
  ],
  [
    7,
    new Map([
      ["ILT", 12],
      ["IVT", 7],
      ["MFE", 5],
      ["NTE", 11],
    ]),
  ],
  [
    8,
    new Map([
      ["IVT", 7],
      ["MFE", 5],
      ["PKG", 13],
      ["VND", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["IVT", 7],
      ["MFE", 5],
      ["NTE", 14],
      ["STZ", 9],
      ["VND", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["IVT", 7],
      ["MFE", 5],
      ["NTE", 10],
      ["STZ", 9],
      ["VND", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["IVT", 7],
      ["MFE", 5],
      ["NTE", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["ILT", 12],
      ["IVT", 7],
      ["MFE", 5],
      ["NTE", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["IVT", 7],
      ["MFE", 5],
      ["PCE", 15],
      ["PKG", 13],
      ["VND", 8],
    ]),
  ],
  [
    14,
    new Map([
      ["IVT", 7],
      ["MFE", 5],
      ["NTE", 14],
      ["STZ", 9],
      ["VND", 8],
    ]),
  ],
  [
    15,
    new Map([
      ["IVT", 7],
      ["MFE", 5],
      ["PCE", 15],
      ["PKG", 13],
      ["VND", 8],
    ]),
  ],
]);
export const effects = {
  "10:IVT": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
  },
  "10:MFE": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
  },
  "10:STZ": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
    groupsClosed: [],
  },
  "10:VND": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR"],
    groupsClosed: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
  },
  "11:IVT": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
    groupsClosed: [],
  },
  "11:MFE": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
    groupsClosed: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
  },
  "12:IVT": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
    groupsClosed: [],
  },
  "12:MFE": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
    groupsClosed: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
  },
  "13:IVT": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING",
    ],
  },
  "13:MFE": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING",
    ],
  },
  "13:PKG": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING"],
    groupsClosed: [],
  },
  "13:VND": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR"],
    groupsClosed: [],
  },
  "14:IVT": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
  },
  "14:MFE": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
  },
  "14:STZ": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
    groupsClosed: [],
  },
  "14:VND": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR"],
    groupsClosed: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
  },
  "15:IVT": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING",
    ],
  },
  "15:MFE": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING",
    ],
  },
  "15:PKG": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING"],
    groupsClosed: [],
  },
  "15:VND": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR"],
    groupsClosed: [],
  },
  "2:MFE": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
    groupsClosed: [],
  },
  "6:IVT": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
  },
  "6:STZ": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
    groupsClosed: [],
  },
  "6:VND": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR"],
    groupsClosed: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
  },
  "7:IVT": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
    groupsClosed: [],
  },
  "7:MFE": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
    groupsClosed: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
  },
  "8:IVT": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING",
    ],
  },
  "8:MFE": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING",
    ],
  },
  "8:PKG": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING"],
    groupsClosed: [],
  },
  "8:VND": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR"],
    groupsClosed: [],
  },
  "9:IVT": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
  },
  "9:MFE": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
  },
  "9:STZ": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
    groupsClosed: [],
  },
  "9:VND": {
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR"],
    groupsClosed: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
