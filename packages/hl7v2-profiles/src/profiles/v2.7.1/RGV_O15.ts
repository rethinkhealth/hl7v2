// Generated profile automaton for RGV_O15 (v2.7.1)

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
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING", "RGV_O15/ORDER/GIVE"],
  },
  "10:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "10:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "10:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "11:PRT": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/ORDER_DETAIL", "RGV_O15/ORDER/TIMING"],
  },
  "11:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "11:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "11:RXO": {
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
  },
  "11:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "14:PV1": {
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "15:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsClosed: [],
  },
  "16:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "16:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "17:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "18:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "1:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RGV_O15/PATIENT"],
    groupsClosed: [],
  },
  "20:PRT": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/ORDER_DETAIL", "RGV_O15/ORDER/TIMING"],
  },
  "20:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "20:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "20:RXO": {
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
  },
  "20:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "22:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "23:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "23:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "24:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "24:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsClosed: [],
  },
  "25:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
  },
  "26:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "26:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "27:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "27:RXC": {
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "27:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "27:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "28:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "28:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "29:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "29:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "2:PRT": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/ORDER_DETAIL", "RGV_O15/ORDER/TIMING"],
  },
  "2:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "2:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "2:RXO": {
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
    groupsClosed: [],
  },
  "30:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
  },
  "31:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "31:RXC": {
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "31:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "31:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "32:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "32:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "33:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "33:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "34:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "34:RXC": {
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "34:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "34:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "3:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["RGV_O15/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["RGV_O15/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["RGV_O15/PATIENT"],
    groupsClosed: [],
  },
  "7:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsClosed: [],
  },
  "8:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "9:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: ["RGV_O15/ORDER/GIVE"],
  },
  "9:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
