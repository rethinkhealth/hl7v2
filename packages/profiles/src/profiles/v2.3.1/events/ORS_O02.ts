// Generated profile automaton for ORS_O02 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 9]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "RQD",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 6],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [3, new Map([["RQD", 7]])],
  [
    4,
    new Map([
      ["NTE", 8],
      ["ORC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 9],
      ["ORC", 3],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 8],
      ["ORC", 3],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 9],
      ["ORC", 3],
    ]),
  ],
]);
export const effects = {
  "2:ORC": {
    groupsOpened: ["ORS_O02/RESPONSE", "ORS_O02/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O02/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["ORS_O02/RESPONSE", "ORS_O02/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORS_O02/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O02/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["ORS_O02/RESPONSE", "ORS_O02/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O02/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORS_O02/RESPONSE", "ORS_O02/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORS_O02/RESPONSE", "ORS_O02/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O02/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORS_O02/RESPONSE", "ORS_O02/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORS_O02/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORS_O02/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O02/RESPONSE/PATIENT"],
  },
  "9:ORC": {
    groupsOpened: ["ORS_O02/RESPONSE/ORDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
