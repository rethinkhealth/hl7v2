// Generated profile automaton for RRE_O12 (v2.5)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 9, 13, 14, 16]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "RXC",
  "RXE",
  "RXR",
  "SFT",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 7],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 6],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 3],
      ["RXE", 8],
      ["TQ1", 9],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 10],
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
      ["SFT", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["ERR", 7],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 12],
      ["TQ1", 11],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 3],
      ["RXE", 8],
      ["TQ1", 9],
      ["TQ2", 13],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 10],
      ["ORC", 3],
    ]),
  ],
  [
    11,
    new Map([
      ["RXR", 14],
      ["TQ1", 11],
      ["TQ2", 15],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["TQ1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["ORC", 3],
      ["RXE", 8],
      ["TQ1", 9],
      ["TQ2", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["ORC", 3],
      ["RXC", 16],
      ["RXR", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["RXR", 14],
      ["TQ1", 11],
      ["TQ2", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["ORC", 3],
      ["RXC", 16],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
  },
  "11:RXR": {
    groupsOpened: [],
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "11:TQ1": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "13:RXE": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/TIMING"],
  },
  "13:TQ1": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:RXR": {
    groupsOpened: [],
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "15:TQ1": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/ORDER"],
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:RXE": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/TIMING"],
  },
  "3:TQ1": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/ORDER"],
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/ORDER"],
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/ORDER"],
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:TQ1": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "9:RXE": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/TIMING"],
  },
  "9:TQ1": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
