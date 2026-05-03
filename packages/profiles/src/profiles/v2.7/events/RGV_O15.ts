// Generated profile automaton for RGV_O15 (v2.7)

export const start = 0;
export const finals = new Set<number>([23, 28, 29, 32, 33]);
export const alphabet = new Set<string>([
  "AL1",
  "MSH",
  "NTE",
  "OBX",
  "ORC",
  "PID",
  "PRT",
  "PV1",
  "PV2",
  "RXC",
  "RXE",
  "RXG",
  "RXO",
  "RXR",
  "SFT",
  "TQ1",
  "TQ2",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["PRT", 9],
      ["RXE", 8],
      ["RXG", 7],
      ["RXO", 10],
      ["TQ1", 11],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 13],
      ["NTE", 14],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [7, new Map([["TQ1", 15]])],
  [
    8,
    new Map([
      ["NTE", 17],
      ["PRT", 18],
      ["TQ1", 16],
    ]),
  ],
  [
    9,
    new Map([
      ["PRT", 9],
      ["RXE", 8],
      ["RXG", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 19],
      ["PRT", 9],
      ["RXE", 8],
      ["RXG", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["PRT", 9],
      ["RXE", 8],
      ["RXG", 7],
      ["RXO", 10],
      ["TQ1", 11],
      ["TQ2", 20],
    ]),
  ],
  [
    12,
    new Map([
      ["ORC", 2],
      ["PRT", 21],
      ["PV2", 22],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 13],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 13],
      ["NTE", 14],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["RXR", 23],
      ["TQ1", 15],
      ["TQ2", 24],
    ]),
  ],
  [
    16,
    new Map([
      ["RXR", 25],
      ["TQ1", 16],
      ["TQ2", 26],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 17],
      ["TQ1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 17],
      ["PRT", 18],
      ["TQ1", 16],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 19],
      ["RXR", 27],
    ]),
  ],
  [
    20,
    new Map([
      ["PRT", 9],
      ["RXE", 8],
      ["RXG", 7],
      ["RXO", 10],
      ["TQ1", 11],
      ["TQ2", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["ORC", 2],
      ["PRT", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["ORC", 2],
      ["PRT", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["OBX", 28],
      ["ORC", 2],
      ["RXC", 29],
      ["RXG", 7],
      ["RXR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["RXR", 23],
      ["TQ1", 15],
      ["TQ2", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["RXC", 30],
      ["RXG", 7],
      ["RXR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["RXR", 25],
      ["TQ1", 16],
      ["TQ2", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["PRT", 9],
      ["RXC", 31],
      ["RXE", 8],
      ["RXG", 7],
      ["RXR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 32],
      ["OBX", 28],
      ["ORC", 2],
      ["PRT", 33],
      ["RXG", 7],
    ]),
  ],
  [
    29,
    new Map([
      ["OBX", 28],
      ["ORC", 2],
      ["RXC", 29],
      ["RXG", 7],
    ]),
  ],
  [
    30,
    new Map([
      ["RXC", 30],
      ["RXG", 7],
    ]),
  ],
  [
    31,
    new Map([
      ["NTE", 34],
      ["PRT", 9],
      ["RXC", 31],
      ["RXE", 8],
      ["RXG", 7],
    ]),
  ],
  [
    32,
    new Map([
      ["NTE", 32],
      ["OBX", 28],
      ["ORC", 2],
      ["RXG", 7],
    ]),
  ],
  [
    33,
    new Map([
      ["NTE", 32],
      ["OBX", 28],
      ["ORC", 2],
      ["PRT", 33],
      ["RXG", 7],
    ]),
  ],
  [
    34,
    new Map([
      ["NTE", 34],
      ["PRT", 9],
      ["RXC", 31],
      ["RXE", 8],
      ["RXG", 7],
    ]),
  ],
]);
export const effects = {
  "10:NTE": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING", "RGV_O15/ORDER/GIVE"],
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
  },
  "10:PRT": {
    groupsClosed: [
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: [],
  },
  "10:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "10:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "11:PRT": {
    groupsClosed: ["RGV_O15/ORDER/ORDER_DETAIL", "RGV_O15/ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "11:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "11:RXO": {
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "13:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "14:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "15:RXR": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsOpened: [],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "16:RXR": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "1:ORC": {
    groupsClosed: ["RGV_O15/PATIENT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/PATIENT"],
  },
  "20:PRT": {
    groupsClosed: ["RGV_O15/ORDER/ORDER_DETAIL", "RGV_O15/ORDER/TIMING"],
    groupsOpened: [],
  },
  "20:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "20:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "20:RXO": {
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
  },
  "21:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "22:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "23:RXG": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "24:RXR": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsOpened: [],
  },
  "24:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "25:RXG": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "26:RXR": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "26:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "27:PRT": {
    groupsClosed: [
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "27:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "27:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "27:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "28:RXG": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "29:RXG": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "2:PRT": {
    groupsClosed: ["RGV_O15/ORDER/ORDER_DETAIL", "RGV_O15/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "2:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "2:RXO": {
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
  },
  "30:RXG": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "31:PRT": {
    groupsClosed: [
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "31:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "31:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "31:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "32:RXG": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "33:ORC": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "33:RXG": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "34:PRT": {
    groupsClosed: [
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "34:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "34:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "34:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "3:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["RGV_O15/PATIENT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: ["RGV_O15/PATIENT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["RGV_O15/PATIENT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/PATIENT"],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "9:RXE": {
    groupsClosed: ["RGV_O15/ORDER/GIVE"],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "9:RXG": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
