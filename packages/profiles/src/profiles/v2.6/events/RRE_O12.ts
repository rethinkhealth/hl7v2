// Generated profile automaton for RRE_O12 (v2.6)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 8, 10, 14, 15, 17]);
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 8],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 3],
      ["RXE", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 11],
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
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ERR", 8],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 13],
      ["TQ1", 12],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 3],
      ["RXE", 9],
      ["TQ1", 10],
      ["TQ2", 14],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 11],
      ["ORC", 3],
    ]),
  ],
  [
    12,
    new Map([
      ["RXR", 15],
      ["TQ1", 12],
      ["TQ2", 16],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["TQ1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["ORC", 3],
      ["RXE", 9],
      ["TQ1", 10],
      ["TQ2", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["ORC", 3],
      ["RXC", 17],
      ["RXR", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["RXR", 15],
      ["TQ1", 12],
      ["TQ2", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["ORC", 3],
      ["RXC", 17],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "10:RXE": {
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "12:RXR": {
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "14:RXE": {
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/TIMING"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "16:RXR": {
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "2:ORC": {
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/PATIENT"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "3:RXE": {
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
  },
  "3:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/TIMING"],
  },
  "4:ORC": {
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/PATIENT"],
  },
  "7:ORC": {
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/PATIENT"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
