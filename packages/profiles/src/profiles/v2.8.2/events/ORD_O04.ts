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
  "13:NTE": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsOpened: [],
  },
  "13:ODS": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsOpened: [],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
  },
  "14:ORC": {
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET"],
  },
  "15:ORC": {
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET"],
  },
  "16:ORC": {
    groupsClosed: ["ORD_O04/RESPONSE/PATIENT"],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET"],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
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
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsOpened: [],
  },
  "21:ODS": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
    groupsOpened: [],
  },
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET"],
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
  "23:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
  },
  "24:NTE": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "24:ODS": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "24:ODT": {
    groupsClosed: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
    groupsOpened: [],
  },
  "24:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY",
    ],
  },
  "24:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "ORD_O04/RESPONSE/ORDER_DIET/TIMING_DIET",
      "ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY",
    ],
  },
  "25:NTE": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "25:ODT": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "25:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
  },
  "25:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "26:NTE": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "26:ODT": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "26:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
  },
  "26:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
  },
  "27:NTE": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "27:ODT": {
    groupsClosed: ["ORD_O04/RESPONSE/ORDER_TRAY/TIMING_TRAY"],
    groupsOpened: [],
  },
  "27:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORD_O04/RESPONSE/ORDER_TRAY"],
  },
  "27:TQ1": {
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
