// Generated profile automaton for RDS_O13 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([14, 21, 22, 23, 27]);
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
      ["RXD", 6],
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
      ["NTE", 15],
      ["RXR", 14],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 17],
      ["TQ1", 16],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 18],
      ["RXD", 6],
      ["RXE", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["RXD", 6],
      ["RXE", 7],
      ["RXO", 8],
      ["TQ1", 9],
      ["TQ2", 19],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 2],
      ["PV2", 20],
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
      ["FT1", 21],
      ["OBX", 22],
      ["ORC", 2],
      ["RXC", 23],
      ["RXR", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 15],
      ["RXR", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["RXR", 24],
      ["TQ1", 16],
      ["TQ2", 25],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 17],
      ["TQ1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 18],
      ["RXR", 26],
    ]),
  ],
  [
    19,
    new Map([
      ["RXD", 6],
      ["RXE", 7],
      ["RXO", 8],
      ["TQ1", 9],
      ["TQ2", 19],
    ]),
  ],
  [20, new Map([["ORC", 2]])],
  [
    21,
    new Map([
      ["FT1", 21],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["FT1", 21],
      ["NTE", 27],
      ["OBX", 22],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["FT1", 21],
      ["OBX", 22],
      ["ORC", 2],
      ["RXC", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["RXC", 28],
      ["RXD", 6],
      ["RXR", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["RXR", 24],
      ["TQ1", 16],
      ["TQ2", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["RXC", 29],
      ["RXD", 6],
      ["RXE", 7],
      ["RXR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["FT1", 21],
      ["NTE", 27],
      ["OBX", 22],
      ["ORC", 2],
    ]),
  ],
  [
    28,
    new Map([
      ["RXC", 28],
      ["RXD", 6],
    ]),
  ],
  [
    29,
    new Map([
      ["NTE", 30],
      ["RXC", 29],
      ["RXD", 6],
      ["RXE", 7],
    ]),
  ],
  [
    30,
    new Map([
      ["NTE", 30],
      ["RXC", 29],
      ["RXD", 6],
      ["RXE", 7],
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
  "7:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "8:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "8:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "8:NTE": {
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "9:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
  },
  "9:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
  },
  "9:RXO": {
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
  },
  "10:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
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
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "14:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "14:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "16:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "16:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "17:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "19:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
    groupsClosed: [],
  },
  "19:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
  },
  "19:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
  },
  "19:RXO": {
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
  },
  "20:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "21:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "22:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "23:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "23:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "23:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "24:RXD": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "25:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "25:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "26:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "26:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "26:RXC": {
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "27:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "28:RXD": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "29:RXC": {
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsClosed: [],
  },
  "29:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "29:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
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
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
