// Generated profile automaton for ORD_O04 (v2.5)

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
  "2:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["ORD_O04/RESPONSE", "ORD_O04/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
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
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "8:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "8:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "8:TQ1": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "8:ODS": {
    groupsOpened: [],
    groupsClosed: [
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
  "10:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "11:TQ1": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "11:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "11:ODS": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "12:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
  },
  "13:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "15:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "15:ODS": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "15:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "16:TQ1": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "16:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "16:ODS": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "17:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "17:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "17:ODT": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "17:TQ1": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "19:TQ1": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "19:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "19:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "19:ODS": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "20:TQ1": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "20:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "20:ODT": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "21:TQ1": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
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
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
