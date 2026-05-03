// Generated profile automaton for EHC_E12 (v2.7)

export const start = 0;
export const finals = new Set<number>([9, 13, 14]);
export const alphabet = new Set<string>([
  "CTD",
  "IVC",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "PID",
  "PSG",
  "PSL",
  "PSS",
  "RFI",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["RFI", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["CTD", 6],
      ["IVC", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["RFI", 2],
      ["UAC", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["RFI", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["PSS", 7]])],
  [
    6,
    new Map([
      ["CTD", 6],
      ["IVC", 5],
    ]),
  ],
  [7, new Map([["PSG", 8]])],
  [
    8,
    new Map([
      ["CTD", 10],
      ["OBR", 9],
      ["PID", 12],
      ["PSL", 11],
    ]),
  ],
  [
    9,
    new Map([
      ["CTD", 10],
      ["NTE", 14],
      ["OBR", 9],
      ["OBX", 13],
    ]),
  ],
  [10, new Map([["OBR", 9]])],
  [
    11,
    new Map([
      ["CTD", 10],
      ["OBR", 9],
      ["PSL", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["CTD", 10],
      ["OBR", 9],
      ["PSL", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["CTD", 10],
      ["OBR", 9],
      ["OBX", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["CTD", 10],
      ["OBR", 9],
      ["OBX", 13],
    ]),
  ],
]);
export const effects = {
  "11:CTD": {
    groupsClosed: [],
    groupsOpened: ["EHC_E12/REQUEST"],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: ["EHC_E12/REQUEST"],
  },
  "12:CTD": {
    groupsClosed: [],
    groupsOpened: ["EHC_E12/REQUEST"],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["EHC_E12/REQUEST"],
  },
  "13:CTD": {
    groupsClosed: [],
    groupsOpened: ["EHC_E12/REQUEST"],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["EHC_E12/REQUEST"],
  },
  "14:CTD": {
    groupsClosed: [],
    groupsOpened: ["EHC_E12/REQUEST"],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: ["EHC_E12/REQUEST"],
  },
  "8:CTD": {
    groupsClosed: [],
    groupsOpened: ["EHC_E12/REQUEST"],
  },
  "8:OBR": {
    groupsClosed: [],
    groupsOpened: ["EHC_E12/REQUEST"],
  },
  "9:CTD": {
    groupsClosed: [],
    groupsOpened: ["EHC_E12/REQUEST"],
  },
  "9:OBR": {
    groupsClosed: [],
    groupsOpened: ["EHC_E12/REQUEST"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
