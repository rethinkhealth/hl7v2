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
  "10:ORC": {
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "11:ORC": {
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
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
  "14:FT1": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "16:RXR": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "19:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "19:RXE": {
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "19:RXO": {
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
  },
  "1:ORC": {
    groupsClosed: ["RDS_O13/PATIENT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/PATIENT"],
  },
  "20:ORC": {
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "22:FT1": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
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
  "24:RXD": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "25:RXR": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "25:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "26:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "26:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
  },
  "26:RXE": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "27:FT1": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "28:RXD": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "29:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "29:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
  },
  "29:RXE": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
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
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "8:NTE": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
  },
  "8:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: [],
  },
  "8:RXE": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "9:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "9:RXE": {
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "9:RXO": {
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
