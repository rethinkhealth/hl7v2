// Generated profile automaton for ORD_O04 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
  27,
]);
export const alphabet = new Set<string>([
  "ARV",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ODS",
  "ODT",
  "ORC",
  "PID",
  "PRT",
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
      ["PRT", 13],
      ["TQ1", 12],
    ]),
  ],
  [
    4,
    new Map([
      ["ARV", 15],
      ["NTE", 14],
      ["ORC", 3],
      ["PRT", 16],
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
      ["NTE", 17],
      ["ODS", 11],
      ["ODT", 18],
      ["ORC", 9],
      ["PRT", 20],
      ["TQ1", 19],
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
      ["TQ2", 21],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 10],
      ["ODS", 11],
      ["ORC", 9],
      ["PRT", 13],
      ["TQ1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["ORC", 3],
    ]),
  ],
  [
    15,
    new Map([
      ["ARV", 15],
      ["NTE", 14],
      ["ORC", 3],
    ]),
  ],
  [
    16,
    new Map([
      ["ARV", 15],
      ["NTE", 14],
      ["ORC", 3],
      ["PRT", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 17],
      ["ORC", 9],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 23],
      ["ODT", 18],
      ["ORC", 22],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 17],
      ["ODS", 11],
      ["ODT", 18],
      ["ORC", 9],
      ["TQ1", 19],
      ["TQ2", 24],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 17],
      ["ODS", 11],
      ["ODT", 18],
      ["ORC", 9],
      ["PRT", 20],
      ["TQ1", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 10],
      ["ODS", 11],
      ["ORC", 9],
      ["TQ1", 12],
      ["TQ2", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 23],
      ["ODT", 18],
      ["ORC", 22],
      ["PRT", 26],
      ["TQ1", 25],
    ]),
  ],
  [
    23,
    new Map([
      ["NTE", 23],
      ["ORC", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 17],
      ["ODS", 11],
      ["ODT", 18],
      ["ORC", 9],
      ["TQ1", 19],
      ["TQ2", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 23],
      ["ODT", 18],
      ["ORC", 22],
      ["TQ1", 25],
      ["TQ2", 27],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 23],
      ["ODT", 18],
      ["ORC", 22],
      ["PRT", 26],
      ["TQ1", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 23],
      ["ODT", 18],
      ["ORC", 22],
      ["TQ1", 25],
      ["TQ2", 27],
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
  "13:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "13:ODS": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "13:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "13:TQ1": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
  },
  "15:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
  },
  "16:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET"],
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
  },
  "17:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "19:NTE": {
    groupsOpened: [],
    groupsClosed: [
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
  "19:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "19:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "19:TQ1": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
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
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "21:ODS": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "21:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "21:TQ1": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
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
  "23:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "24:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "24:ODS": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "24:ODT": {
    groupsOpened: [],
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "24:ORC": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
    groupsClosed: [],
  },
  "24:TQ1": {
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsClosed: [],
  },
  "25:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "25:ODT": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "25:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "25:TQ1": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "26:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "26:ODT": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "26:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "26:TQ1": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsClosed: [],
  },
  "27:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "27:ODT": {
    groupsOpened: [],
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "27:ORC": {
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
    groupsClosed: [],
  },
  "27:TQ1": {
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
