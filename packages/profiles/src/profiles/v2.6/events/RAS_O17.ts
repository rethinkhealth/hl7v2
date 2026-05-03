// Generated profile automaton for RAS_O17 (v2.6)

export const start = 0;
export const finals = new Set<number>([15, 20, 21, 25]);
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
      ["RXA", 7],
      ["RXE", 8],
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
      ["PD1", 14],
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
  [
    7,
    new Map([
      ["RXA", 7],
      ["RXR", 15],
    ]),
  ],
  [8, new Map([["TQ1", 16]])],
  [
    9,
    new Map([
      ["NTE", 17],
      ["RXA", 7],
      ["RXE", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["RXA", 7],
      ["RXE", 8],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 18],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 2],
      ["PV2", 19],
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
      ["AL1", 12],
      ["NTE", 13],
      ["ORC", 2],
      ["PV1", 11],
    ]),
  ],
  [
    15,
    new Map([
      ["CTI", 20],
      ["OBX", 21],
      ["ORC", 2],
      ["RXA", 7],
    ]),
  ],
  [
    16,
    new Map([
      ["RXR", 22],
      ["TQ1", 16],
      ["TQ2", 23],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 17],
      ["RXR", 24],
    ]),
  ],
  [
    18,
    new Map([
      ["RXA", 7],
      ["RXE", 8],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 18],
    ]),
  ],
  [19, new Map([["ORC", 2]])],
  [
    20,
    new Map([
      ["CTI", 20],
      ["ORC", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 20],
      ["NTE", 25],
      ["OBX", 21],
      ["ORC", 2],
      ["RXA", 7],
    ]),
  ],
  [
    22,
    new Map([
      ["RXA", 7],
      ["RXC", 26],
      ["RXR", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["RXR", 22],
      ["TQ1", 16],
      ["TQ2", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["RXA", 7],
      ["RXC", 27],
      ["RXE", 8],
      ["RXR", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["CTI", 20],
      ["NTE", 25],
      ["OBX", 21],
      ["ORC", 2],
      ["RXA", 7],
    ]),
  ],
  [
    26,
    new Map([
      ["RXA", 7],
      ["RXC", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 28],
      ["RXA", 7],
      ["RXC", 27],
      ["RXE", 8],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 28],
      ["RXA", 7],
      ["RXC", 27],
      ["RXE", 8],
    ]),
  ],
]);
export const effects = {
  "10:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "10:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "10:RXO": {
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
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
  "14:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "15:CTI": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "15:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "16:RXR": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "18:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "18:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "18:RXO": {
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
  },
  "19:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
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
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "21:CTI": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "21:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "22:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "23:RXR": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "23:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "24:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "24:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "24:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "25:CTI": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "25:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "26:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
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
  "28:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "28:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "28:RXE": {
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
  "6:ORC": {
    groupsClosed: ["RAS_O17/PATIENT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "9:NTE": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION", "RAS_O17/ORDER/ENCODING"],
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
  },
  "9:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "9:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
