// Generated profile automaton for RRE_O12 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 8, 10, 11, 16, 17, 19]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "PRT",
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
      ["PRT", 11],
      ["RXE", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 12],
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
      ["NTE", 14],
      ["PRT", 15],
      ["TQ1", 13],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 3],
      ["RXE", 9],
      ["TQ1", 10],
      ["TQ2", 16],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 3],
      ["PRT", 11],
      ["RXE", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["ORC", 3],
    ]),
  ],
  [
    13,
    new Map([
      ["RXR", 17],
      ["TQ1", 13],
      ["TQ2", 18],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["TQ1", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 14],
      ["PRT", 15],
      ["TQ1", 13],
    ]),
  ],
  [
    16,
    new Map([
      ["ORC", 3],
      ["RXE", 9],
      ["TQ1", 10],
      ["TQ2", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["ORC", 3],
      ["RXC", 19],
      ["RXR", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["RXR", 17],
      ["TQ1", 13],
      ["TQ2", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["ORC", 3],
      ["RXC", 19],
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
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "11:RXE": {
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "13:RXR": {
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "16:RXE": {
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/TIMING"],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "18:RXR": {
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "19:ORC": {
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
