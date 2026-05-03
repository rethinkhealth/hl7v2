// Generated profile automaton for RDS_O13 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([16, 30, 31, 32, 33, 37, 38]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "CDO",
  "FT1",
  "MSH",
  "NTE",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PRT",
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
      ["PRT", 11],
      ["RXD", 7],
      ["RXE", 8],
      ["RXO", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 13],
      ["NTE", 14],
      ["ORC", 2],
      ["PD1", 15],
      ["PV1", 12],
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
      ["NTE", 17],
      ["PRT", 18],
      ["RXR", 16],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 20],
      ["PRT", 21],
      ["TQ1", 19],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 22],
      ["PRT", 23],
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
      ["TQ2", 24],
    ]),
  ],
  [
    11,
    new Map([
      ["PRT", 11],
      ["RXD", 7],
      ["RXE", 8],
      ["RXO", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["ARV", 25],
      ["ORC", 2],
      ["PRT", 26],
      ["PV2", 27],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 13],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 13],
      ["NTE", 14],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 13],
      ["ARV", 28],
      ["NTE", 14],
      ["ORC", 2],
      ["PRT", 29],
      ["PV1", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["CDO", 32],
      ["FT1", 30],
      ["OBX", 31],
      ["ORC", 2],
      ["RXC", 33],
      ["RXR", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 17],
      ["RXR", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 17],
      ["PRT", 18],
      ["RXR", 16],
    ]),
  ],
  [
    19,
    new Map([
      ["RXR", 34],
      ["TQ1", 19],
      ["TQ2", 35],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 20],
      ["TQ1", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 20],
      ["PRT", 21],
      ["TQ1", 19],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 22],
      ["RXR", 36],
    ]),
  ],
  [
    23,
    new Map([
      ["NTE", 22],
      ["PRT", 23],
      ["RXD", 7],
      ["RXE", 8],
    ]),
  ],
  [
    24,
    new Map([
      ["RXD", 7],
      ["RXE", 8],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["ARV", 25],
      ["ORC", 2],
    ]),
  ],
  [
    26,
    new Map([
      ["ARV", 25],
      ["ORC", 2],
      ["PRT", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["ARV", 25],
      ["ORC", 2],
      ["PRT", 26],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 13],
      ["ARV", 28],
      ["NTE", 14],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 13],
      ["ARV", 28],
      ["NTE", 14],
      ["ORC", 2],
      ["PRT", 29],
      ["PV1", 12],
    ]),
  ],
  [
    30,
    new Map([
      ["FT1", 30],
      ["ORC", 2],
    ]),
  ],
  [
    31,
    new Map([
      ["FT1", 30],
      ["NTE", 37],
      ["OBX", 31],
      ["ORC", 2],
      ["PRT", 38],
    ]),
  ],
  [
    32,
    new Map([
      ["CDO", 32],
      ["FT1", 30],
      ["OBX", 31],
      ["ORC", 2],
    ]),
  ],
  [
    33,
    new Map([
      ["CDO", 32],
      ["FT1", 30],
      ["OBX", 31],
      ["ORC", 2],
      ["RXC", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["RXC", 39],
      ["RXD", 7],
      ["RXR", 34],
    ]),
  ],
  [
    35,
    new Map([
      ["RXR", 34],
      ["TQ1", 19],
      ["TQ2", 35],
    ]),
  ],
  [
    36,
    new Map([
      ["RXC", 40],
      ["RXD", 7],
      ["RXE", 8],
      ["RXR", 36],
    ]),
  ],
  [
    37,
    new Map([
      ["FT1", 30],
      ["NTE", 37],
      ["OBX", 31],
      ["ORC", 2],
    ]),
  ],
  [
    38,
    new Map([
      ["FT1", 30],
      ["NTE", 37],
      ["OBX", 31],
      ["ORC", 2],
      ["PRT", 38],
    ]),
  ],
  [
    39,
    new Map([
      ["RXC", 39],
      ["RXD", 7],
    ]),
  ],
  [
    40,
    new Map([
      ["NTE", 41],
      ["RXC", 40],
      ["RXD", 7],
      ["RXE", 8],
    ]),
  ],
  [
    41,
    new Map([
      ["NTE", 41],
      ["RXC", 40],
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
  "11:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "11:RXE": {
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "11:RXO": {
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O13/ORDER"],
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
  "15:AL1": {
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "15:NTE": {
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "15:ORC": {
    groupsClosed: [
      "RDS_O13/PATIENT",
      "RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RDS_O13/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "15:PV1": {
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "16:FT1": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "19:RXR": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "19:TQ1": {
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
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "23:NTE": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
  },
  "23:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: [],
  },
  "23:RXE": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "24:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "24:RXE": {
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "24:RXO": {
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
  },
  "24:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
  },
  "25:ORC": {
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "26:ORC": {
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "27:ORC": {
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "28:AL1": {
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "28:NTE": {
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "28:ORC": {
    groupsClosed: [
      "RDS_O13/PATIENT",
      "RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RDS_O13/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "28:PV1": {
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "29:AL1": {
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "29:NTE": {
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "29:ORC": {
    groupsClosed: [
      "RDS_O13/PATIENT",
      "RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RDS_O13/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "29:PV1": {
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
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
  "30:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "31:FT1": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "32:FT1": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "33:FT1": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "33:ORC": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "34:RXD": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "35:RXR": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "35:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "36:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "36:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
  },
  "36:RXE": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "37:FT1": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "37:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "37:ORC": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "38:FT1": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "38:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "38:ORC": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "39:RXD": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "3:AL1": {
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "3:NTE": {
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "3:ORC": {
    groupsClosed: [
      "RDS_O13/PATIENT",
      "RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RDS_O13/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "3:PD1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "3:PV1": {
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "40:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "40:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
  },
  "40:RXE": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "41:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "41:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
  },
  "41:RXE": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
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
