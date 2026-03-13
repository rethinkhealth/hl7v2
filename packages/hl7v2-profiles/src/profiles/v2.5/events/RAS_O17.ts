// Generated profile automaton for RAS_O17 (v2.5)

export const start = 0;
export const finals = new Set<number>([14, 19, 20, 24]);
export const alphabet = new Set<string>([
  "AL1",
  "CTI",
  "MSH",
  "NTE",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "RXA",
  "RXC",
  "RXE",
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
      ["RXA", 6],
      ["RXE", 7],
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
      ["PD1", 13],
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
  [
    6,
    new Map([
      ["RXA", 6],
      ["RXR", 14],
    ]),
  ],
  [7, new Map([["TQ1", 15]])],
  [
    8,
    new Map([
      ["NTE", 16],
      ["RXA", 6],
      ["RXE", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["RXA", 6],
      ["RXE", 7],
      ["RXO", 8],
      ["TQ1", 9],
      ["TQ2", 17],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 2],
      ["PV2", 18],
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
      ["AL1", 11],
      ["NTE", 12],
      ["ORC", 2],
      ["PV1", 10],
    ]),
  ],
  [
    14,
    new Map([
      ["CTI", 19],
      ["OBX", 20],
      ["ORC", 2],
      ["RXA", 6],
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
      ["RXA", 6],
      ["RXE", 7],
      ["RXO", 8],
      ["TQ1", 9],
      ["TQ2", 17],
    ]),
  ],
  [18, new Map([["ORC", 2]])],
  [
    19,
    new Map([
      ["CTI", 19],
      ["ORC", 2],
    ]),
  ],
  [
    20,
    new Map([
      ["CTI", 19],
      ["NTE", 24],
      ["OBX", 20],
      ["ORC", 2],
      ["RXA", 6],
    ]),
  ],
  [
    21,
    new Map([
      ["RXA", 6],
      ["RXC", 25],
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
      ["RXA", 6],
      ["RXC", 26],
      ["RXE", 7],
      ["RXR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["CTI", 19],
      ["NTE", 24],
      ["OBX", 20],
      ["ORC", 2],
      ["RXA", 6],
    ]),
  ],
  [
    25,
    new Map([
      ["RXA", 6],
      ["RXC", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 27],
      ["RXA", 6],
      ["RXC", 26],
      ["RXE", 7],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 27],
      ["RXA", 6],
      ["RXC", 26],
      ["RXE", 7],
    ]),
  ],
]);
export const effects = {
  "1:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RAS_O17/PATIENT"],
    groupsClosed: [],
  },
  "2:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "2:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "2:RXO": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["RAS_O17/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["RAS_O17/PATIENT"],
    groupsClosed: [],
  },
  "7:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "8:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "8:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "8:NTE": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION", "RAS_O17/ORDER/ENCODING"],
  },
  "9:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "9:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "9:RXO": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
  },
  "10:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "12:PV1": {
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "14:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "14:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
  },
  "14:OBX": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "15:RXR": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "17:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
    groupsClosed: [],
  },
  "17:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "17:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "17:RXO": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
  },
  "18:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "19:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsClosed: [],
  },
  "20:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "20:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "20:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
  },
  "21:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
  },
  "22:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "22:RXR": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "23:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "23:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "23:RXC": {
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsClosed: [],
  },
  "24:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "24:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "24:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
  },
  "25:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
  },
  "26:RXC": {
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "26:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "26:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "27:RXC": {
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "27:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "27:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
