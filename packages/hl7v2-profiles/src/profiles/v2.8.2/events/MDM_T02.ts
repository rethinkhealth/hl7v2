// Generated profile automaton for MDM_T02 (v2.8.2)

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
  "10:OBX": {
    groupsOpened: ["MDM_T02/OBSERVATION"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
    groupsClosed: [],
  },
  "11:TXA": {
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
  },
  "12:TQ1": {
    groupsOpened: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
  },
  "13:OBX": {
    groupsOpened: ["MDM_T02/OBSERVATION"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
    groupsClosed: [],
  },
  "14:TXA": {
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
  },
  "15:TQ1": {
    groupsOpened: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
