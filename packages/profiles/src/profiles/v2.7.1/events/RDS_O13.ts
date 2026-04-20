// Generated profile automaton for RDS_O13 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([16, 27, 28, 29, 33, 34]);
export const alphabet = new Set<string>([
  "AL1",
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
      ["PRT", 9],
      ["RXD", 7],
      ["RXE", 8],
      ["RXO", 10],
      ["TQ1", 11],
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
      ["PRT", 9],
      ["RXD", 7],
      ["RXE", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 22],
      ["PRT", 9],
      ["RXD", 7],
      ["RXE", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["PRT", 9],
      ["RXD", 7],
      ["RXE", 8],
      ["RXO", 10],
      ["TQ1", 11],
      ["TQ2", 23],
    ]),
  ],
  [
    12,
    new Map([
      ["ORC", 2],
      ["PRT", 24],
      ["PV2", 25],
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
      ["NTE", 14],
      ["ORC", 2],
      ["PRT", 26],
      ["PV1", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["FT1", 27],
      ["OBX", 28],
      ["ORC", 2],
      ["RXC", 29],
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
      ["RXR", 30],
      ["TQ1", 19],
      ["TQ2", 31],
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
      ["RXR", 32],
    ]),
  ],
  [
    23,
    new Map([
      ["PRT", 9],
      ["RXD", 7],
      ["RXE", 8],
      ["RXO", 10],
      ["TQ1", 11],
      ["TQ2", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["ORC", 2],
      ["PRT", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["ORC", 2],
      ["PRT", 24],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 13],
      ["NTE", 14],
      ["ORC", 2],
      ["PRT", 26],
      ["PV1", 12],
    ]),
  ],
  [
    27,
    new Map([
      ["FT1", 27],
      ["ORC", 2],
    ]),
  ],
  [
    28,
    new Map([
      ["FT1", 27],
      ["NTE", 33],
      ["OBX", 28],
      ["ORC", 2],
      ["PRT", 34],
    ]),
  ],
  [
    29,
    new Map([
      ["FT1", 27],
      ["OBX", 28],
      ["ORC", 2],
      ["RXC", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["RXC", 35],
      ["RXD", 7],
      ["RXR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["RXR", 30],
      ["TQ1", 19],
      ["TQ2", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["PRT", 9],
      ["RXC", 36],
      ["RXD", 7],
      ["RXE", 8],
      ["RXR", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["FT1", 27],
      ["NTE", 33],
      ["OBX", 28],
      ["ORC", 2],
    ]),
  ],
  [
    34,
    new Map([
      ["FT1", 27],
      ["NTE", 33],
      ["OBX", 28],
      ["ORC", 2],
      ["PRT", 34],
    ]),
  ],
  [
    35,
    new Map([
      ["RXC", 35],
      ["RXD", 7],
    ]),
  ],
  [
    36,
    new Map([
      ["NTE", 37],
      ["PRT", 9],
      ["RXC", 36],
      ["RXD", 7],
      ["RXE", 8],
    ]),
  ],
  [
    37,
    new Map([
      ["NTE", 37],
      ["PRT", 9],
      ["RXC", 36],
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
  "2:PRT": {
    groupsOpened: [],
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
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "9:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [],
  },
  "10:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "10:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "10:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "10:NTE": {
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "11:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
    groupsClosed: [],
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
  "11:PRT": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
  },
  "11:RXO": {
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
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
  "23:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
    groupsClosed: [],
  },
  "23:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
  },
  "23:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
  },
  "23:PRT": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
  },
  "23:RXO": {
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
  },
  "24:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "25:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "26:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: [
      "RDS_O13/PATIENT",
      "RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RDS_O13/PATIENT/PATIENT_VISIT",
    ],
  },
  "26:PV1": {
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "26:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "26:NTE": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "27:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
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
  "29:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "29:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "29:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "30:RXD": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "31:TQ1": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "31:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "32:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "32:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "32:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "32:RXC": {
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsClosed: [],
  },
  "33:OBX": {
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
  "34:OBX": {
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "34:ORC": {
    groupsOpened: ["RDS_O13/ORDER"],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "34:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "35:RXD": {
    groupsOpened: [],
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
  },
  "36:RXC": {
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsClosed: [],
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
  "36:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "37:RXC": {
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsClosed: [],
  },
  "37:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "37:RXE": {
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "37:PRT": {
    groupsOpened: [],
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
