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
  "10:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "11:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "14:CTI": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "14:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "15:RXR": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "17:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "17:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "17:RXO": {
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
  },
  "18:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "1:ORC": {
    groupsClosed: ["RAS_O17/PATIENT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT"],
  },
  "20:CTI": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "20:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "21:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "22:RXR": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "23:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "23:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "23:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "24:CTI": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "24:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "25:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "26:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "26:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "26:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "27:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "27:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "27:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "2:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "2:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "2:RXO": {
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
  },
  "3:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["RAS_O17/PATIENT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: ["RAS_O17/PATIENT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT"],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "8:NTE": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION", "RAS_O17/ORDER/ENCODING"],
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
  },
  "8:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "8:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "9:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "9:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "9:RXO": {
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
