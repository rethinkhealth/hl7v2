// Generated profile automaton for RGV_O15 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([26, 31, 32, 33, 36, 37]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "CDO",
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
      ["PRT", 11],
      ["RXE", 8],
      ["RXG", 7],
      ["RXO", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 14],
      ["ARV", 13],
      ["NTE", 15],
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
  [7, new Map([["TQ1", 16]])],
  [
    8,
    new Map([
      ["NTE", 18],
      ["PRT", 19],
      ["TQ1", 17],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 20],
      ["PRT", 21],
      ["RXE", 8],
      ["RXG", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["RXE", 8],
      ["RXG", 7],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 22],
    ]),
  ],
  [
    11,
    new Map([
      ["PRT", 11],
      ["RXE", 8],
      ["RXG", 7],
      ["RXO", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["ARV", 23],
      ["ORC", 2],
      ["PRT", 24],
      ["PV2", 25],
    ]),
  ],
  [
    13,
    new Map([
      ["ARV", 13],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 14],
      ["ARV", 13],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 14],
      ["ARV", 13],
      ["NTE", 15],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["RXR", 26],
      ["TQ1", 16],
      ["TQ2", 27],
    ]),
  ],
  [
    17,
    new Map([
      ["RXR", 28],
      ["TQ1", 17],
      ["TQ2", 29],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 18],
      ["TQ1", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 18],
      ["PRT", 19],
      ["TQ1", 17],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 20],
      ["RXR", 30],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 20],
      ["PRT", 21],
      ["RXE", 8],
      ["RXG", 7],
    ]),
  ],
  [
    22,
    new Map([
      ["RXE", 8],
      ["RXG", 7],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["ARV", 23],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["ARV", 23],
      ["ORC", 2],
      ["PRT", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["ARV", 23],
      ["ORC", 2],
      ["PRT", 24],
    ]),
  ],
  [
    26,
    new Map([
      ["CDO", 32],
      ["OBX", 31],
      ["ORC", 2],
      ["RXC", 33],
      ["RXG", 7],
      ["RXR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["RXR", 26],
      ["TQ1", 16],
      ["TQ2", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["RXC", 34],
      ["RXG", 7],
      ["RXR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["RXR", 28],
      ["TQ1", 17],
      ["TQ2", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["RXC", 35],
      ["RXE", 8],
      ["RXG", 7],
      ["RXR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["NTE", 36],
      ["OBX", 31],
      ["ORC", 2],
      ["PRT", 37],
      ["RXG", 7],
    ]),
  ],
  [
    32,
    new Map([
      ["CDO", 32],
      ["OBX", 31],
      ["ORC", 2],
      ["RXG", 7],
    ]),
  ],
  [
    33,
    new Map([
      ["CDO", 32],
      ["OBX", 31],
      ["ORC", 2],
      ["RXC", 33],
      ["RXG", 7],
    ]),
  ],
  [
    34,
    new Map([
      ["RXC", 34],
      ["RXG", 7],
    ]),
  ],
  [
    35,
    new Map([
      ["NTE", 38],
      ["RXC", 35],
      ["RXE", 8],
      ["RXG", 7],
    ]),
  ],
  [
    36,
    new Map([
      ["NTE", 36],
      ["OBX", 31],
      ["ORC", 2],
      ["RXG", 7],
    ]),
  ],
  [
    37,
    new Map([
      ["NTE", 36],
      ["OBX", 31],
      ["ORC", 2],
      ["PRT", 37],
      ["RXG", 7],
    ]),
  ],
  [
    38,
    new Map([
      ["NTE", 38],
      ["RXC", 35],
      ["RXE", 8],
      ["RXG", 7],
    ]),
  ],
]);
export const effects = {
  "10:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "10:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "10:RXO": {
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
  },
  "10:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
    groupsClosed: [],
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
  "15:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "15:PV1": {
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "16:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsClosed: [],
  },
  "17:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "17:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "18:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "19:TQ1": {
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
  "21:NTE": {
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING", "RGV_O15/ORDER/GIVE"],
  },
  "21:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "21:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "22:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "22:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "22:RXO": {
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
  },
  "22:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "24:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "25:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "26:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "26:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "27:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "27:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsClosed: [],
  },
  "28:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
  },
  "29:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "29:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
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
  "30:RXC": {
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "30:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "30:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "31:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "31:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
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
  "34:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
  },
  "35:RXC": {
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "35:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "35:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "36:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "36:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "36:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "37:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "37:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "37:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "38:RXC": {
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "38:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "38:RXG": {
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
  "9:NTE": {
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING", "RGV_O15/ORDER/GIVE"],
  },
  "9:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "9:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
