// Generated profile automaton for RGV_O15 (v2.8)

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
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "10:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "10:RXO": {
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
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
  "15:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "16:RXR": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsOpened: [],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "17:RXR": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "19:TQ1": {
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
  "21:NTE": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING", "RGV_O15/ORDER/GIVE"],
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
  },
  "21:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "21:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "22:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "22:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "22:RXO": {
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
  },
  "23:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "24:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "25:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "26:RXG": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "27:RXR": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsOpened: [],
  },
  "27:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "28:RXG": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "29:RXR": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "29:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
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
  "30:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "30:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "30:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "31:RXG": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
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
  "34:RXG": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "35:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "35:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "35:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "36:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "36:ORC": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "36:RXG": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "37:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "37:ORC": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "37:RXG": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "38:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "38:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "38:RXG": {
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
  "9:NTE": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING", "RGV_O15/ORDER/GIVE"],
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
  },
  "9:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "9:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
