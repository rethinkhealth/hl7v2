// Generated profile automaton for RGV_O15 (v2.5.1)

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
  "1:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RGV_O15/PATIENT"],
    groupsClosed: [],
  },
  "2:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
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
  "6:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsClosed: [],
  },
  "7:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "8:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "8:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "8:NTE": {
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING", "RGV_O15/ORDER/GIVE"],
  },
  "9:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "9:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "9:RXO": {
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
  },
  "10:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "12:PV1": {
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "13:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsClosed: [],
  },
  "13:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "14:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "14:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "16:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/TIMING"],
    groupsClosed: [],
  },
  "16:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "16:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/TIMING",
    ],
  },
  "16:RXO": {
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RGV_O15/ORDER/TIMING"],
  },
  "17:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "18:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "18:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "18:NTE": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "19:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
    groupsClosed: [],
  },
  "19:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/GIVE/TIMING_GIVE"],
  },
  "20:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
  },
  "21:TQ1": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "21:RXR": {
    groupsOpened: [],
    groupsClosed: ["RGV_O15/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "22:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "22:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "22:RXC": {
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "23:NTE": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "23:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "23:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "24:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "24:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "24:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "25:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "25:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "25:NTE": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "26:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
  },
  "27:RXC": {
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
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
  "27:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "28:RXC": {
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
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
  "28:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
