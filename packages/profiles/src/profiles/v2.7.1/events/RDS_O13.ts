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
  "10:NTE": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
  },
  "10:PRT": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: [],
  },
  "10:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: [],
  },
  "10:RXE": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "11:PRT": {
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
    groupsOpened: [],
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
  "23:PRT": {
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
    groupsOpened: [],
  },
  "23:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "23:RXE": {
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
  "23:RXO": {
    groupsClosed: ["RDS_O13/ORDER/TIMING"],
    groupsOpened: ["RDS_O13/ORDER/ORDER_DETAIL"],
  },
  "23:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/TIMING"],
  },
  "24:ORC": {
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "25:ORC": {
    groupsClosed: ["RDS_O13/PATIENT", "RDS_O13/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "26:AL1": {
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "26:NTE": {
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "26:ORC": {
    groupsClosed: [
      "RDS_O13/PATIENT",
      "RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RDS_O13/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "26:PV1": {
    groupsClosed: ["RDS_O13/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["RDS_O13/PATIENT/PATIENT_VISIT"],
  },
  "27:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER"],
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
  "29:FT1": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "2:PRT": {
    groupsClosed: ["RDS_O13/ORDER/ORDER_DETAIL", "RDS_O13/ORDER/TIMING"],
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
  "30:RXD": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "31:RXR": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "31:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "32:PRT": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
  },
  "32:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "32:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
  },
  "32:RXE": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
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
  "34:FT1": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/OBSERVATION"],
  },
  "34:ORC": {
    groupsClosed: ["RDS_O13/ORDER/OBSERVATION"],
    groupsOpened: ["RDS_O13/ORDER"],
  },
  "35:RXD": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "36:PRT": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
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
  "37:PRT": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
  },
  "37:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
  },
  "37:RXD": {
    groupsClosed: [
      "RDS_O13/ORDER/ENCODING",
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: [],
  },
  "37:RXE": {
    groupsClosed: [
      "RDS_O13/ORDER/ORDER_DETAIL",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RDS_O13/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENT",
    ],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
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
  "9:RXD": {
    groupsClosed: ["RDS_O13/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "9:RXE": {
    groupsClosed: [],
    groupsOpened: ["RDS_O13/ORDER/ENCODING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
