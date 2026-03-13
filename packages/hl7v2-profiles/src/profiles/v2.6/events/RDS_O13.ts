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
  "1:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RDS_O13/PATIENT"],
    groupsClosed: [],
  },
  "2:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
  },
  "2:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
  },
  "2:RXO": {
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["RDS_O13/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["RDS_O13/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["RDS_O13/PATIENT"],
    groupsClosed: [],
  },
  "8:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "9:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "9:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "9:NTE": {
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "10:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
    groupsClosed: [],
  },
  "10:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
  },
  "10:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
  },
  "10:RXO": {
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "12:PV1": {
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "14:PV1": {
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "15:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "15:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "17:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "18:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "20:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
    groupsClosed: [],
  },
  "20:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
  },
  "20:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
  },
  "20:RXO": {
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
  },
  "21:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "22:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "23:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "24:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "24:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "24:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "25:RXD": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "26:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "26:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "27:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "27:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "27:RXC": {
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "28:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "29:RXD": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "30:RXC": {
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsClosed: [],
  },
  "30:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "30:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "31:RXC": {
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsClosed: [],
  },
  "31:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "31:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
