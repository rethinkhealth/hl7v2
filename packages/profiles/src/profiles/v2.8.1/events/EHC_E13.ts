// Generated profile automaton for EHC_E13 (v2.8.1)

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
  "10:CTD": {
    groupsClosed: [],
    groupsOpened: ["EHC_E13/REQUEST"],
  },
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: ["EHC_E13/REQUEST"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["EHC_E13/REQUEST/RESPONSE"],
  },
  "13:CTD": {
    groupsClosed: [],
    groupsOpened: ["EHC_E13/REQUEST"],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["EHC_E13/REQUEST"],
  },
  "14:CTD": {
    groupsClosed: [],
    groupsOpened: ["EHC_E13/REQUEST"],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: ["EHC_E13/REQUEST"],
  },
  "15:CTD": {
    groupsClosed: ["EHC_E13/REQUEST/RESPONSE"],
    groupsOpened: ["EHC_E13/REQUEST"],
  },
  "15:OBR": {
    groupsClosed: [],
    groupsOpened: ["EHC_E13/REQUEST"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["EHC_E13/REQUEST/RESPONSE"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["EHC_E13/REQUEST/RESPONSE"],
  },
  "17:CTD": {
    groupsClosed: ["EHC_E13/REQUEST/RESPONSE"],
    groupsOpened: ["EHC_E13/REQUEST"],
  },
  "17:OBR": {
    groupsClosed: [],
    groupsOpened: ["EHC_E13/REQUEST"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["EHC_E13/REQUEST/RESPONSE"],
  },
  "18:CTD": {
    groupsClosed: ["EHC_E13/REQUEST/RESPONSE"],
    groupsOpened: ["EHC_E13/REQUEST"],
  },
  "18:OBR": {
    groupsClosed: [],
    groupsOpened: ["EHC_E13/REQUEST"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["EHC_E13/REQUEST/RESPONSE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
