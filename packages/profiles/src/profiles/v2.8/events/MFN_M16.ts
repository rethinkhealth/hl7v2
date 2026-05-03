// Generated profile automaton for MFN_M16 (v2.8)

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
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
  },
  "10:MFE": {
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
  },
  "10:STZ": {
    groupsClosed: [],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
  },
  "10:VND": {
    groupsClosed: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR"],
  },
  "11:IVT": {
    groupsClosed: [],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
  },
  "11:MFE": {
    groupsClosed: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
  },
  "12:IVT": {
    groupsClosed: [],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
  },
  "12:MFE": {
    groupsClosed: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
  },
  "13:IVT": {
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING",
    ],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
  },
  "13:MFE": {
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING",
    ],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
  },
  "13:PKG": {
    groupsClosed: [],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING"],
  },
  "13:VND": {
    groupsClosed: [],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR"],
  },
  "14:IVT": {
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
  },
  "14:MFE": {
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
  },
  "14:STZ": {
    groupsClosed: [],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
  },
  "14:VND": {
    groupsClosed: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR"],
  },
  "15:IVT": {
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING",
    ],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
  },
  "15:MFE": {
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING",
    ],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
  },
  "15:PKG": {
    groupsClosed: [],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING"],
  },
  "15:VND": {
    groupsClosed: [],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR"],
  },
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
  },
  "6:IVT": {
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
  },
  "6:MFE": {
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
  },
  "6:STZ": {
    groupsClosed: [],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
  },
  "6:VND": {
    groupsClosed: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR"],
  },
  "7:IVT": {
    groupsClosed: [],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
  },
  "7:MFE": {
    groupsClosed: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
  },
  "8:IVT": {
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING",
    ],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
  },
  "8:MFE": {
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING",
    ],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
  },
  "8:PKG": {
    groupsClosed: [],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR/PACKAGING"],
  },
  "8:VND": {
    groupsClosed: [],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR"],
  },
  "9:IVT": {
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION"],
  },
  "9:MFE": {
    groupsClosed: [
      "MFN_M16/MATERIAL_ITEM_RECORD/MATERIAL_LOCATION",
      "MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR",
      "MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION",
    ],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD"],
  },
  "9:STZ": {
    groupsClosed: [],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
  },
  "9:VND": {
    groupsClosed: ["MFN_M16/MATERIAL_ITEM_RECORD/STERILIZATION"],
    groupsOpened: ["MFN_M16/MATERIAL_ITEM_RECORD/PURCHASING_VENDOR"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
