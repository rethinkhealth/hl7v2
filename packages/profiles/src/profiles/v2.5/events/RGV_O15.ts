// Generated profile automaton for RGV_O15 (v2.5)

export const start = 0;
export const finals = new Set<number>([18, 23, 24, 25]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["RXE", 7],
      ["RXG", 6],
      ["RXO", 8],
      ["TQ1", 9],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 11],
      ["NTE", 12],
      ["ORC", 2],
      ["PV1", 10],
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
      ["SFT", 5],
    ]),
  ],
  [6, new Map([["TQ1", 13]])],
  [7, new Map([["TQ1", 14]])],
  [
    8,
    new Map([
      ["NTE", 15],
      ["RXE", 7],
      ["RXG", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["RXE", 7],
      ["RXG", 6],
      ["RXO", 8],
      ["TQ1", 9],
      ["TQ2", 16],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 2],
      ["PV2", 17],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 11],
      ["ORC", 2],
      ["PV1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 11],
      ["NTE", 12],
      ["ORC", 2],
      ["PV1", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["RXR", 18],
      ["TQ1", 13],
      ["TQ2", 19],
    ]),
  ],
  [
    14,
    new Map([
      ["RXR", 20],
      ["TQ1", 14],
      ["TQ2", 21],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 15],
      ["RXR", 22],
    ]),
  ],
  [
    16,
    new Map([
      ["RXE", 7],
      ["RXG", 6],
      ["RXO", 8],
      ["TQ1", 9],
      ["TQ2", 16],
    ]),
  ],
  [17, new Map([["ORC", 2]])],
  [
    18,
    new Map([
      ["NTE", 23],
      ["OBX", 24],
      ["ORC", 2],
      ["RXC", 25],
      ["RXG", 6],
      ["RXR", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["RXR", 18],
      ["TQ1", 13],
      ["TQ2", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["RXC", 26],
      ["RXG", 6],
      ["RXR", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["RXR", 20],
      ["TQ1", 14],
      ["TQ2", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["RXC", 27],
      ["RXE", 7],
      ["RXG", 6],
      ["RXR", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["NTE", 23],
      ["OBX", 24],
      ["ORC", 2],
      ["RXG", 6],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 23],
      ["OBX", 24],
      ["ORC", 2],
      ["RXG", 6],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 23],
      ["OBX", 24],
      ["ORC", 2],
      ["RXC", 25],
      ["RXG", 6],
    ]),
  ],
  [
    26,
    new Map([
      ["RXC", 26],
      ["RXG", 6],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 28],
      ["RXC", 27],
      ["RXE", 7],
      ["RXG", 6],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 28],
      ["RXC", 27],
      ["RXE", 7],
      ["RXG", 6],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "11:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "13:RXR": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsOpened: [],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "14:RXR": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "16:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "16:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "16:RXO": {
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
  },
  "17:ORC": {
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "18:NTE": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "18:RXG": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "19:RXR": {
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsOpened: [],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "1:ORC": {
    groupsClosed: ["RGV_O15/PATIENT"],
    groupsOpened: ["RGV_O15/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/PATIENT"],
  },
  "20:RXG": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "21:RXR": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "22:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "22:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "22:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "23:NTE": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
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
  "25:NTE": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
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
  "26:RXG": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
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
  "6:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "8:NTE": {
    groupsClosed: ["RGV_O15/ORDER/ENCODING", "RGV_O15/ORDER/GIVE"],
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
  },
  "8:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "8:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "9:RXE": {
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
  },
  "9:RXG": {
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
  },
  "9:RXO": {
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
