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
    groupsClosed: ["MDM_T01/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["MDM_T01/COMMON_ORDER/TIMING"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["MDM_T01/COMMON_ORDER"],
  },
  "11:TXA": {
    groupsClosed: ["MDM_T01/COMMON_ORDER"],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: ["MDM_T01/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["MDM_T01/COMMON_ORDER/TIMING"],
  },
  "6:ORC": {
    groupsClosed: [],
    groupsOpened: ["MDM_T01/COMMON_ORDER"],
  },
  "6:TXA": {
    groupsClosed: ["MDM_T01/COMMON_ORDER"],
    groupsOpened: [],
  },
  "8:OBR": {
    groupsClosed: ["MDM_T01/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["MDM_T01/COMMON_ORDER/TIMING"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["MDM_T01/COMMON_ORDER"],
  },
  "9:TXA": {
    groupsClosed: ["MDM_T01/COMMON_ORDER"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
