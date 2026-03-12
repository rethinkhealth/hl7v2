// Generated profile automaton for MDM_T01 (v2.6)

export const start = 0;
export const finals = new Set<number>([7]);
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
  [7, new Map([])],
  [
    8,
    new Map([
      ["OBR", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 11],
      ["ORC", 8],
      ["TXA", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["OBR", 9],
      ["TQ1", 10],
      ["TQ2", 12],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 11],
      ["ORC", 8],
      ["TXA", 7],
    ]),
  ],
  [
    12,
    new Map([
      ["OBR", 9],
      ["TQ1", 10],
      ["TQ2", 12],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsOpened: [],
    groupsClosed: ["MDM_T01/COMMON_ORDER/TIMING"],
  },
  "10:TQ1": {
    groupsOpened: ["MDM_T01/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["MDM_T01/COMMON_ORDER"],
    groupsClosed: [],
  },
  "11:TXA": {
    groupsOpened: [],
    groupsClosed: ["MDM_T01/COMMON_ORDER"],
  },
  "12:OBR": {
    groupsOpened: [],
    groupsClosed: ["MDM_T01/COMMON_ORDER/TIMING"],
  },
  "12:TQ1": {
    groupsOpened: ["MDM_T01/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["MDM_T01/COMMON_ORDER"],
    groupsClosed: [],
  },
  "6:TXA": {
    groupsOpened: [],
    groupsClosed: ["MDM_T01/COMMON_ORDER"],
  },
  "8:OBR": {
    groupsOpened: [],
    groupsClosed: ["MDM_T01/COMMON_ORDER/TIMING"],
  },
  "8:TQ1": {
    groupsOpened: ["MDM_T01/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["MDM_T01/COMMON_ORDER"],
    groupsClosed: [],
  },
  "9:TXA": {
    groupsOpened: [],
    groupsClosed: ["MDM_T01/COMMON_ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
