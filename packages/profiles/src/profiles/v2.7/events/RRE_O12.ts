// Generated profile automaton for RRE_O12 (v2.7)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 8, 9, 11, 15, 16, 18]);
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
      ["PRT", 9],
      ["RXE", 10],
      ["TQ1", 11],
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
      ["ORC", 3],
      ["PRT", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 14],
      ["TQ1", 13],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 3],
      ["PRT", 9],
      ["RXE", 10],
      ["TQ1", 11],
      ["TQ2", 15],
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
      ["RXR", 16],
      ["TQ1", 13],
      ["TQ2", 17],
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
      ["ORC", 3],
      ["PRT", 9],
      ["RXE", 10],
      ["TQ1", 11],
      ["TQ2", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["ORC", 3],
      ["PRT", 9],
      ["RXC", 18],
      ["RXR", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["RXR", 16],
      ["TQ1", 13],
      ["TQ2", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["ORC", 3],
      ["PRT", 9],
      ["RXC", 18],
    ]),
  ],
]);
export const effects = {
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "11:PRT": {
    groupsClosed: [
      "RRE_O12/RESPONSE/ORDER/ENCODING",
      "RRE_O12/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
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
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "15:PRT": {
    groupsClosed: [
      "RRE_O12/RESPONSE/ORDER/ENCODING",
      "RRE_O12/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "15:RXE": {
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/TIMING"],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "16:PRT": {
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "17:RXR": {
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "18:PRT": {
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
    groupsOpened: [],
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
  "3:PRT": {
    groupsClosed: [
      "RRE_O12/RESPONSE/ORDER/ENCODING",
      "RRE_O12/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
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
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
