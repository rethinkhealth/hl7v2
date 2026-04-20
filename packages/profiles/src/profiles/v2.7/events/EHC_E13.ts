// Generated profile automaton for EHC_E13 (v2.7)

export const start = 0;
export const finals = new Set<number>([15, 17, 18]);
export const alphabet = new Set<string>([
  "CTD",
  "ERR",
  "IVC",
  "MSA",
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
  "TXA",
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
      ["RFI", 5],
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
      ["CTD", 8],
      ["IVC", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["ERR", 6],
      ["RFI", 5],
    ]),
  ],
  [7, new Map([["PSS", 9]])],
  [
    8,
    new Map([
      ["CTD", 8],
      ["IVC", 7],
    ]),
  ],
  [9, new Map([["PSG", 10]])],
  [
    10,
    new Map([
      ["CTD", 12],
      ["OBR", 11],
      ["PID", 14],
      ["PSL", 13],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 16],
      ["OBX", 15],
    ]),
  ],
  [12, new Map([["OBR", 11]])],
  [
    13,
    new Map([
      ["CTD", 12],
      ["OBR", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["CTD", 12],
      ["OBR", 11],
      ["PSL", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["CTD", 12],
      ["NTE", 18],
      ["OBR", 11],
      ["OBX", 15],
      ["TXA", 17],
    ]),
  ],
  [16, new Map([["OBX", 15]])],
  [
    17,
    new Map([
      ["CTD", 12],
      ["OBR", 11],
      ["OBX", 15],
    ]),
  ],
  [
    18,
    new Map([
      ["CTD", 12],
      ["OBR", 11],
      ["OBX", 15],
      ["TXA", 17],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsOpened: ["EHC_E13/REQUEST"],
    groupsClosed: [],
  },
  "10:CTD": {
    groupsOpened: ["EHC_E13/REQUEST"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["EHC_E13/REQUEST/RESPONSE"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: ["EHC_E13/REQUEST"],
    groupsClosed: [],
  },
  "13:CTD": {
    groupsOpened: ["EHC_E13/REQUEST"],
    groupsClosed: [],
  },
  "14:OBR": {
    groupsOpened: ["EHC_E13/REQUEST"],
    groupsClosed: [],
  },
  "14:CTD": {
    groupsOpened: ["EHC_E13/REQUEST"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["EHC_E13/REQUEST/RESPONSE"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["EHC_E13/REQUEST"],
    groupsClosed: [],
  },
  "15:CTD": {
    groupsOpened: ["EHC_E13/REQUEST"],
    groupsClosed: ["EHC_E13/REQUEST/RESPONSE"],
  },
  "16:OBX": {
    groupsOpened: ["EHC_E13/REQUEST/RESPONSE"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["EHC_E13/REQUEST/RESPONSE"],
    groupsClosed: [],
  },
  "17:OBR": {
    groupsOpened: ["EHC_E13/REQUEST"],
    groupsClosed: [],
  },
  "17:CTD": {
    groupsOpened: ["EHC_E13/REQUEST"],
    groupsClosed: ["EHC_E13/REQUEST/RESPONSE"],
  },
  "18:OBX": {
    groupsOpened: ["EHC_E13/REQUEST/RESPONSE"],
    groupsClosed: [],
  },
  "18:OBR": {
    groupsOpened: ["EHC_E13/REQUEST"],
    groupsClosed: [],
  },
  "18:CTD": {
    groupsOpened: ["EHC_E13/REQUEST"],
    groupsClosed: ["EHC_E13/REQUEST/RESPONSE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
