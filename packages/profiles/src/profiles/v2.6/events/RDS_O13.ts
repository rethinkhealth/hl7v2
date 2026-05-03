// Generated profile automaton for RDS_O13 (v2.6)

export const start = 0;
export const finals = new Set<number>([15, 22, 23, 24, 28]);
export const alphabet = new Set<string>([
  "AL1",
  "FT1",
  "MSH",
  "NTE",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "RXC",
  "RXD",
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
      ["RXD", 7],
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
      ["NTE", 16],
      ["RXR", 15],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 18],
      ["TQ1", 17],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 19],
      ["RXD", 7],
      ["RXE", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["RXD", 7],
      ["RXE", 8],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 20],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 2],
      ["PV2", 21],
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
      ["FT1", 22],
      ["OBX", 23],
      ["ORC", 2],
      ["RXC", 24],
      ["RXR", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 16],
      ["RXR", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["RXR", 25],
      ["TQ1", 17],
      ["TQ2", 26],
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
      ["NTE", 19],
      ["RXR", 27],
    ]),
  ],
  [
    20,
    new Map([
      ["RXD", 7],
      ["RXE", 8],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 20],
    ]),
  ],
  [21, new Map([["ORC", 2]])],
  [
    22,
    new Map([
      ["FT1", 22],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["FT1", 22],
      ["NTE", 28],
      ["OBX", 23],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["FT1", 22],
      ["OBX", 23],
      ["ORC", 2],
      ["RXC", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["RXC", 29],
      ["RXD", 7],
      ["RXR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["RXR", 25],
      ["TQ1", 17],
      ["TQ2", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["RXC", 30],
      ["RXD", 7],
      ["RXE", 8],
      ["RXR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["FT1", 22],
      ["NTE", 28],
      ["OBX", 23],
      ["ORC", 2],
    ]),
  ],
  [
    29,
    new Map([
      ["RXC", 29],
      ["RXD", 7],
    ]),
  ],
  [
    30,
    new Map([
      ["NTE", 31],
      ["RXC", 30],
      ["RXD", 7],
      ["RXE", 8],
    ]),
  ],
  [
    31,
    new Map([
      ["NTE", 31],
      ["RXC", 30],
      ["RXD", 7],
      ["RXE", 8],
    ]),
  ],
]);
export const effects = {
  "10:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "10:RXE": {
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "10:RXO": {
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "12:ORC": {
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "14:ORC": {
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "15:FT1": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "17:RXR": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "1:ORC": {
    groupsClosed: ["RDS_O13/PATIENT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/PATIENT"],
  },
  "20:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "20:RXE": {
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "20:RXO": {
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
  },
  "21:ORC": {
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "22:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "23:FT1": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "24:FT1": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "25:RXD": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "26:RXR": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "26:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "27:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "27:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
  },
  "27:RXE": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "28:FT1": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "29:RXD": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "2:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "2:RXE": {
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "2:RXO": {
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
  },
  "30:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "30:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
  },
  "30:RXE": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "31:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "31:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
  },
  "31:RXE": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "3:ORC": {
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["RDS_O13/PATIENT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: ["RDS_O13/PATIENT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["RDS_O13/PATIENT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/PATIENT"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "9:NTE": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
  },
  "9:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: [],
  },
  "9:RXE": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
