// Generated profile automaton for MDM_T01 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([6]);
export const alphabet = new Set<string>([
  "EVN",
  "MSH",
  "NTE",
  "OBR",
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
  [6, new Map([])],
  [
    7,
    new Map([
      ["OBR", 8],
      ["TQ1", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 10],
      ["ORC", 7],
      ["TXA", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["OBR", 8],
      ["TQ1", 9],
      ["TQ2", 11],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 10],
      ["ORC", 7],
      ["TXA", 6],
    ]),
  ],
  [
    11,
    new Map([
      ["OBR", 8],
      ["TQ1", 9],
      ["TQ2", 11],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["MDM_T01/COMMON_ORDER"],
  },
  "10:TXA": {
    groupsClosed: ["MDM_T01/COMMON_ORDER"],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: ["MDM_T01/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["MDM_T01/COMMON_ORDER/TIMING"],
  },
  "5:ORC": {
    groupsClosed: [],
    groupsOpened: ["MDM_T01/COMMON_ORDER"],
  },
  "5:TXA": {
    groupsClosed: ["MDM_T01/COMMON_ORDER"],
    groupsOpened: [],
  },
  "7:OBR": {
    groupsClosed: ["MDM_T01/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["MDM_T01/COMMON_ORDER/TIMING"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["MDM_T01/COMMON_ORDER"],
  },
  "8:TXA": {
    groupsClosed: ["MDM_T01/COMMON_ORDER"],
    groupsOpened: [],
  },
  "9:OBR": {
    groupsClosed: ["MDM_T01/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["MDM_T01/COMMON_ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
