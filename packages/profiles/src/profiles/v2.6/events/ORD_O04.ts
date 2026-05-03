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
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "12:NTE": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsOpened: [],
  },
  "12:ODS": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsOpened: [],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "13:ORC": {
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
  },
  "16:NTE": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "16:ODS": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "16:ODT": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "17:NTE": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsOpened: [],
  },
  "17:ODS": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsOpened: [],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "18:NTE": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "18:ODT": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
  },
  "20:NTE": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "20:ODS": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "20:ODT": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "21:NTE": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "21:ODT": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "22:NTE": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "22:ODT": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "22:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "2:ORC": {
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/ORDER_DIET"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/PATIENT"],
  },
  "3:NTE": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsOpened: [],
  },
  "3:ODS": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsOpened: [],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "3:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "4:ORC": {
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET"],
  },
  "5:ORC": {
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/ORDER_DIET"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/ORDER_DIET"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/PATIENT"],
  },
  "7:ORC": {
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/ORDER_DIET"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/ORDER_DIET"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/PATIENT"],
  },
  "9:NTE": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "9:ODS": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "9:ODT": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
