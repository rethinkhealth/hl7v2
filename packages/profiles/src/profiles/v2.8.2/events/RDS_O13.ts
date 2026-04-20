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
    groupsClosed: [
      "RDS_O13/PATIENT",
      "RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RDS_O13/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:PV1": {
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "3:NTE": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "3:PD1": {
    groupsOpened: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
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
  "11:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
  },
  "11:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
  },
  "11:RXO": {
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
  },
  "11:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
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
    groupsClosed: [
      "RDS_O13/PATIENT",
      "RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RDS_O13/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:PV1": {
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "15:NTE": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "16:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "16:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "16:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "19:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "20:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "21:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "23:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "23:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "23:NTE": {
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "24:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
    groupsClosed: [],
  },
  "24:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
  },
  "24:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
  },
  "24:RXO": {
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
  },
  "25:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "26:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "27:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "28:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: [
      "RDS_O13/PATIENT",
      "RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RDS_O13/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:PV1": {
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "28:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "28:NTE": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "29:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: [
      "RDS_O13/PATIENT",
      "RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RDS_O13/PATIENT/PATIENT_VISIT",
    ],
  },
  "29:PV1": {
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "29:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "29:NTE": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "30:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: [],
  },
  "31:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "31:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "32:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "32:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "32:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "33:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "33:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "34:RXD": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "35:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "35:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "36:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "36:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "36:RXC": {
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsClosed: [],
  },
  "37:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "37:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "37:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "38:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "38:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "38:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "39:RXD": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "40:RXC": {
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsClosed: [],
  },
  "40:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "40:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "41:RXC": {
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsClosed: [],
  },
  "41:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "41:RXE": {
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
