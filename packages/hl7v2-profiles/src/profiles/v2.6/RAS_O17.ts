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
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "10:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "10:RXO": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
  },
  "10:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
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
  "14:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "14:PV1": {
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
  },
  "15:OBX": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "15:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "16:RXR": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "16:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "18:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "18:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "18:RXO": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
  },
  "18:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "1:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RAS_O17/PATIENT"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: [],
  },
  "21:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
  },
  "21:OBX": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "21:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "22:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
  },
  "23:RXR": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "23:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "24:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "24:RXC": {
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "24:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "25:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
  },
  "25:OBX": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "25:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "26:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
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
  "27:RXC": {
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
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
  "28:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "28:RXC": {
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "28:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
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
  "6:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["RAS_O17/PATIENT"],
    groupsClosed: [],
  },
  "8:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "9:NTE": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION", "RAS_O17/ORDER/ENCODING"],
  },
  "9:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "9:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
