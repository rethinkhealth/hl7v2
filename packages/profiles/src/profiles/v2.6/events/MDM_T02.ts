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
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
  },
  "10:TXA": {
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/COMMON_ORDER/TIMING"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
  },
  "13:TXA": {
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
    groupsOpened: [],
  },
  "14:OBR": {
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/COMMON_ORDER/TIMING"],
  },
  "6:ORC": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
  },
  "6:TXA": {
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
    groupsOpened: [],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/OBSERVATION"],
  },
  "8:OBR": {
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/COMMON_ORDER/TIMING"],
  },
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
