// Generated profile automaton for ORD_O04 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21,
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
      ["NTE", 9],
      ["ODS", 10],
      ["ORC", 8],
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
      ["NTE", 13],
      ["ODS", 10],
      ["ODT", 14],
      ["ORC", 8],
      ["TQ1", 15],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 9],
      ["ORC", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 9],
      ["ODS", 10],
      ["ORC", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 9],
      ["ODS", 10],
      ["ORC", 8],
      ["TQ1", 11],
      ["TQ2", 16],
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
      ["NTE", 13],
      ["ORC", 8],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 18],
      ["ODT", 14],
      ["ORC", 17],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 13],
      ["ODS", 10],
      ["ODT", 14],
      ["ORC", 8],
      ["TQ1", 15],
      ["TQ2", 19],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 9],
      ["ODS", 10],
      ["ORC", 8],
      ["TQ1", 11],
      ["TQ2", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 18],
      ["ODT", 14],
      ["ORC", 17],
      ["TQ1", 20],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 18],
      ["ORC", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 13],
      ["ODS", 10],
      ["ODT", 14],
      ["ORC", 8],
      ["TQ1", 15],
      ["TQ2", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 18],
      ["ODT", 14],
      ["ORC", 17],
      ["TQ1", 20],
      ["TQ2", 21],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 18],
      ["ODT", 14],
      ["ORC", 17],
      ["TQ1", 20],
      ["TQ2", 21],
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
  "11:NTE": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsOpened: [],
  },
  "11:ODS": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsOpened: [],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "12:ORC": {
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
  },
  "15:NTE": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "15:ODS": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "15:ODT": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "16:NTE": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsOpened: [],
  },
  "16:ODS": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
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
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "17:NTE": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "17:ODT": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
  },
  "19:NTE": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "19:ODS": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "19:ODT": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "20:NTE": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "20:ODT": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
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
  "8:NTE": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "8:ODS": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "8:ODT": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
