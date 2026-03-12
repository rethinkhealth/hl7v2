// Generated profile automaton for ORD_O04 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22,
]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ODS",
  "ODT",
  "ORC",
  "PID",
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
      ["NTE", 10],
      ["ODS", 11],
      ["ORC", 9],
      ["TQ1", 12],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 13],
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
      ["ODS", 11],
      ["ODT", 15],
      ["ORC", 9],
      ["TQ1", 16],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 10],
      ["ORC", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 10],
      ["ODS", 11],
      ["ORC", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 10],
      ["ODS", 11],
      ["ORC", 9],
      ["TQ1", 12],
      ["TQ2", 17],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["ORC", 3],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["ORC", 9],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 19],
      ["ODT", 15],
      ["ORC", 18],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 14],
      ["ODS", 11],
      ["ODT", 15],
      ["ORC", 9],
      ["TQ1", 16],
      ["TQ2", 20],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 10],
      ["ODS", 11],
      ["ORC", 9],
      ["TQ1", 12],
      ["TQ2", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 19],
      ["ODT", 15],
      ["ORC", 18],
      ["TQ1", 21],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 19],
      ["ORC", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 14],
      ["ODS", 11],
      ["ODT", 15],
      ["ORC", 9],
      ["TQ1", 16],
      ["TQ2", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 19],
      ["ODT", 15],
      ["ORC", 18],
      ["TQ1", 21],
      ["TQ2", 22],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 19],
      ["ODT", 15],
      ["ORC", 18],
      ["TQ1", 21],
      ["TQ2", 22],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "12:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "12:ODS": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "12:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
  },
  "14:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "16:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "16:ODS": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "16:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "16:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "16:TQ1": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "17:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "17:ODS": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "17:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "17:TQ1": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsClosed: [],
  },
  "18:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "18:ODT": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "18:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "18:TQ1": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "20:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "20:ODS": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "20:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "20:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "20:TQ1": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "21:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "21:ODT": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "21:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "21:TQ1": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "22:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "22:ODT": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "22:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "22:TQ1": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "3:ODS": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "3:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "3:TQ1": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "9:ODS": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "9:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "9:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "9:TQ1": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
