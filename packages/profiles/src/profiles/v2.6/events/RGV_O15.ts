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
  "11:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "12:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "14:RXR": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsOpened: [],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "15:RXR": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "17:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "17:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "17:RXO": {
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
  },
  "18:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "19:NTE": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "19:RXG": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "1:ORC": {
    groupsClosed: ["RGV_O15/PATIENT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/PATIENT"],
  },
  "20:RXR": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsOpened: [],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "21:RXG": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "22:RXR": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "23:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "23:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "23:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "24:NTE": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "24:RXG": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "25:RXG": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "26:NTE": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
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
  "27:RXG": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "28:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "28:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "28:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "29:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "29:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "29:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
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
