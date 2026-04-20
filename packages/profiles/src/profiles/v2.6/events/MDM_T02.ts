// Generated profile automaton for MDM_T02 (v2.6)

export const start = 0;
export const finals = new Set<number>([9, 12]);
export const alphabet = new Set<string>([
  "EVN",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PID",
  "PV1",
  "SFT",
  "TQ1",
  "TQ2",
  "TXA",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["PID", 5]])],
  [3, new Map([["EVN", 2]])],
  [
    4,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["PV1", 6]])],
  [
    6,
    new Map([
      ["ORC", 8],
      ["TXA", 7],
    ]),
  ],
  [7, new Map([["OBX", 9]])],
  [
    8,
    new Map([
      ["OBR", 10],
      ["TQ1", 11],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 12],
      ["OBX", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 13],
      ["ORC", 8],
      ["TXA", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["OBR", 10],
      ["TQ1", 11],
      ["TQ2", 14],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["OBX", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["ORC", 8],
      ["TXA", 7],
    ]),
  ],
  [
    14,
    new Map([
      ["OBR", 10],
      ["TQ1", 11],
      ["TQ2", 14],
    ]),
  ],
]);
export const effects = {
  "6:TXA": {
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
  },
  "6:ORC": {
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
    groupsClosed: [],
  },
  "7:OBX": {
    groupsOpened: ["MDM_T02/OBSERVATION"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
  },
  "8:TQ1": {
    groupsOpened: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:OBX": {
    groupsOpened: ["MDM_T02/OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
    groupsClosed: [],
  },
  "10:TXA": {
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
  },
  "11:TQ1": {
    groupsOpened: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
  },
  "12:OBX": {
    groupsOpened: ["MDM_T02/OBSERVATION"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
    groupsClosed: [],
  },
  "13:TXA": {
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
  },
  "14:TQ1": {
    groupsOpened: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:OBR": {
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
