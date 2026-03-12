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
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
  },
  "10:TQ1": {
    groupsOpened: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["MDM_T02/OBSERVATION"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
    groupsClosed: [],
  },
  "12:TXA": {
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
  },
  "13:OBR": {
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
  },
  "13:TQ1": {
    groupsOpened: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
    groupsClosed: [],
  },
  "5:TXA": {
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
  },
  "6:OBX": {
    groupsOpened: ["MDM_T02/OBSERVATION"],
    groupsClosed: [],
  },
  "7:OBR": {
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER/TIMING"],
  },
  "7:TQ1": {
    groupsOpened: ["MDM_T02/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "8:OBX": {
    groupsOpened: ["MDM_T02/OBSERVATION"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["MDM_T02/COMMON_ORDER"],
    groupsClosed: [],
  },
  "9:TXA": {
    groupsOpened: [],
    groupsClosed: ["MDM_T02/COMMON_ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
