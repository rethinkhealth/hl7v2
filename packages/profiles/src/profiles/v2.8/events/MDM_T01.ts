// Generated profile automaton for MDM_T01 (v2.8)

export const start = 0;
export const finals = new Set<number>([7, 9]);
export const alphabet = new Set<string>([
  "CON",
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
  [7, new Map([["CON", 9]])],
  [
    8,
    new Map([
      ["OBR", 10],
      ["TQ1", 11],
    ]),
  ],
  [9, new Map([["CON", 9]])],
  [
    10,
    new Map([
      ["NTE", 12],
      ["ORC", 8],
      ["TXA", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["OBR", 10],
      ["TQ1", 11],
      ["TQ2", 13],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["ORC", 8],
      ["TXA", 7],
    ]),
  ],
  [
    13,
    new Map([
      ["OBR", 10],
      ["TQ1", 11],
      ["TQ2", 13],
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
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["MDM_T01/COMMON_ORDER"],
  },
  "12:TXA": {
    groupsClosed: ["MDM_T01/COMMON_ORDER"],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: ["MDM_T01/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "13:TQ1": {
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
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
