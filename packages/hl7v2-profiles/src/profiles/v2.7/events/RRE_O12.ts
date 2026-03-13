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
  "3:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RRE_O12/RESPONSE/ORDER/ENCODING",
      "RRE_O12/RESPONSE/ORDER/TIMING",
    ],
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
  "8:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/ORDER"],
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "10:TQ1": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "11:TQ1": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RRE_O12/RESPONSE/ORDER/ENCODING",
      "RRE_O12/RESPONSE/ORDER/TIMING",
    ],
  },
  "11:RXE": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
  },
  "13:TQ1": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "13:RXR": {
    groupsOpened: [],
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "14:TQ1": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RRE_O12/RESPONSE/ORDER/ENCODING",
      "RRE_O12/RESPONSE/ORDER/TIMING",
    ],
  },
  "15:RXE": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/TIMING"],
  },
  "16:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "16:PRT": {
    groupsOpened: [],
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
  },
  "17:TQ1": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "17:RXR": {
    groupsOpened: [],
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "18:ORC": {
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "18:PRT": {
    groupsOpened: [],
    groupsClosed: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
