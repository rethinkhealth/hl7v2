// Generated profile automaton for RGV_O15 (v2.6)

export const start = 0;
export const finals = new Set<number>([19, 24, 25, 26]);
export const alphabet = new Set<string>([
  "AL1",
  "MSH",
  "NTE",
  "OBX",
  "ORC",
  "PID",
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
      ["RXE", 8],
      ["RXG", 7],
      ["RXO", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 12],
      ["NTE", 13],
      ["ORC", 2],
      ["PV1", 11],
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
  [7, new Map([["TQ1", 14]])],
  [8, new Map([["TQ1", 15]])],
  [
    9,
    new Map([
      ["NTE", 16],
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
      ["TQ2", 17],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 2],
      ["PV2", 18],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 12],
      ["ORC", 2],
      ["PV1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 12],
      ["NTE", 13],
      ["ORC", 2],
      ["PV1", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["RXR", 19],
      ["TQ1", 14],
      ["TQ2", 20],
    ]),
  ],
  [
    15,
    new Map([
      ["RXR", 21],
      ["TQ1", 15],
      ["TQ2", 22],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 16],
      ["RXR", 23],
    ]),
  ],
  [
    17,
    new Map([
      ["RXE", 8],
      ["RXG", 7],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 17],
    ]),
  ],
  [18, new Map([["ORC", 2]])],
  [
    19,
    new Map([
      ["NTE", 24],
      ["OBX", 25],
      ["ORC", 2],
      ["RXC", 26],
      ["RXG", 7],
      ["RXR", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["RXR", 19],
      ["TQ1", 14],
      ["TQ2", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["RXC", 27],
      ["RXG", 7],
      ["RXR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["RXR", 21],
      ["TQ1", 15],
      ["TQ2", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["RXC", 28],
      ["RXE", 8],
      ["RXG", 7],
      ["RXR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 24],
      ["OBX", 25],
      ["ORC", 2],
      ["RXG", 7],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 24],
      ["OBX", 25],
      ["ORC", 2],
      ["RXG", 7],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 24],
      ["OBX", 25],
      ["ORC", 2],
      ["RXC", 26],
      ["RXG", 7],
    ]),
  ],
  [
    27,
    new Map([
      ["RXC", 27],
      ["RXG", 7],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 29],
      ["RXC", 28],
      ["RXE", 8],
      ["RXG", 7],
    ]),
  ],
  [
    29,
    new Map([
      ["NTE", 29],
      ["RXC", 28],
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
  "11:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "12:PV1": {
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "14:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsClosed: [],
  },
  "15:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "15:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "17:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "17:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "17:RXO": {
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
  },
  "17:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "19:NTE": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "19:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "1:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RGV_O15/PATIENT"],
    groupsClosed: [],
  },
  "20:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "20:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsClosed: [],
  },
  "21:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
  },
  "22:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "22:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "23:RXC": {
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "23:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "23:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "24:NTE": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "24:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "25:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "25:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "26:NTE": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
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
  "27:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
  },
  "28:RXC": {
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "28:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "28:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "29:RXC": {
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "29:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "29:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
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
