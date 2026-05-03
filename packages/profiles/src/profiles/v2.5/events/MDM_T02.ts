// Generated profile automaton for MDM_T02 (v2.5)

export const start = 0;
export const finals = new Set<number>([8, 11]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EVN", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["PID", 4]])],
  [
    3,
    new Map([
      ["EVN", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([["PV1", 5]])],
  [
    5,
    new Map([
      ["ORC", 7],
      ["TXA", 6],
    ]),
  ],
  [6, new Map([["OBX", 8]])],
  [
    7,
    new Map([
      ["OBR", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 11],
      ["OBX", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 12],
      ["ORC", 7],
      ["TXA", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["OBR", 9],
      ["TQ1", 10],
      ["TQ2", 13],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 11],
      ["OBX", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["ORC", 7],
      ["TXA", 6],
    ]),
  ],
  [
    13,
    new Map([
      ["OBR", 9],
      ["TQ1", 10],
      ["TQ2", 13],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/COMMON_ORDER/TIMING"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
  },
  "12:TXA": {
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/COMMON_ORDER/TIMING"],
  },
  "5:ORC": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
  },
  "5:TXA": {
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
    groupsOpened: [],
  },
  "6:OBX": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/OBSERVATION"],
  },
  "7:OBR": {
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/COMMON_ORDER/TIMING"],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
  },
  "9:TXA": {
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
