// Generated profile automaton for MDM_T02 (v2.8)

export const start = 0;
export const finals = new Set<number>([9, 13]);
export const alphabet = new Set<string>([
  "CON",
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
  [
    7,
    new Map([
      ["CON", 10],
      ["OBX", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["OBR", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 13],
      ["OBX", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["CON", 10],
      ["OBX", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 14],
      ["ORC", 8],
      ["TXA", 7],
    ]),
  ],
  [
    12,
    new Map([
      ["OBR", 11],
      ["TQ1", 12],
      ["TQ2", 15],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["OBX", 9],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["ORC", 8],
      ["TXA", 7],
    ]),
  ],
  [
    15,
    new Map([
      ["OBR", 11],
      ["TQ1", 12],
      ["TQ2", 15],
    ]),
  ],
]);
export const effects = {
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
  },
  "11:TXA": {
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/COMMON_ORDER/TIMING"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
  },
  "14:TXA": {
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
    groupsOpened: [],
  },
  "15:OBR": {
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "15:TQ1": {
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
