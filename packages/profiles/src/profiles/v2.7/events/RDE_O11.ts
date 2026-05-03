// Generated profile automaton for RDE_O11 (v2.7)

export const start = 0;
export const finals = new Set<number>([28, 31, 32, 33, 34, 35, 37, 38]);
export const alphabet = new Set<string>([
  "AL1",
  "BLG",
  "CTI",
  "FT1",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
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
      ["PRT", 8],
      ["RXE", 7],
      ["RXO", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 15],
      ["ORC", 2],
      ["PD1", 17],
      ["PRT", 16],
      ["PV1", 14],
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
      ["NTE", 19],
      ["PRT", 20],
      ["TQ1", 18],
    ]),
  ],
  [
    8,
    new Map([
      ["PRT", 8],
      ["RXE", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 22],
      ["RXR", 21],
    ]),
  ],
  [
    10,
    new Map([
      ["PRT", 8],
      ["RXE", 7],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 23],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["IN2", 25],
      ["IN3", 24],
      ["ORC", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
      ["PRT", 26],
      ["PV2", 27],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 15],
      ["ORC", 2],
      ["PV1", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 15],
      ["ORC", 2],
      ["PRT", 16],
      ["PV1", 14],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 15],
      ["ORC", 2],
      ["PRT", 16],
      ["PV1", 14],
    ]),
  ],
  [
    18,
    new Map([
      ["RXR", 28],
      ["TQ1", 18],
      ["TQ2", 29],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 19],
      ["TQ1", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 19],
      ["PRT", 20],
      ["TQ1", 18],
    ]),
  ],
  [
    21,
    new Map([
      ["PRT", 8],
      ["RXC", 30],
      ["RXE", 7],
      ["RXR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 22],
      ["RXR", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["PRT", 8],
      ["RXE", 7],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["IN3", 24],
      ["ORC", 2],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
      ["PRT", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
      ["PRT", 26],
    ]),
  ],
  [
    28,
    new Map([
      ["BLG", 32],
      ["CTI", 31],
      ["FT1", 33],
      ["OBX", 34],
      ["ORC", 2],
      ["RXC", 35],
      ["RXR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["RXR", 28],
      ["TQ1", 18],
      ["TQ2", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["NTE", 36],
      ["PRT", 8],
      ["RXC", 30],
      ["RXE", 7],
    ]),
  ],
  [
    31,
    new Map([
      ["CTI", 31],
      ["ORC", 2],
    ]),
  ],
  [
    32,
    new Map([
      ["CTI", 31],
      ["ORC", 2],
    ]),
  ],
  [
    33,
    new Map([
      ["BLG", 32],
      ["CTI", 31],
      ["FT1", 33],
      ["ORC", 2],
    ]),
  ],
  [
    34,
    new Map([
      ["BLG", 32],
      ["CTI", 31],
      ["FT1", 33],
      ["NTE", 37],
      ["OBX", 34],
      ["ORC", 2],
      ["PRT", 38],
    ]),
  ],
  [
    35,
    new Map([
      ["BLG", 32],
      ["CTI", 31],
      ["FT1", 33],
      ["OBX", 34],
      ["ORC", 2],
      ["RXC", 35],
    ]),
  ],
  [
    36,
    new Map([
      ["NTE", 36],
      ["PRT", 8],
      ["RXC", 30],
      ["RXE", 7],
    ]),
  ],
  [
    37,
    new Map([
      ["BLG", 32],
      ["CTI", 31],
      ["FT1", 33],
      ["NTE", 37],
      ["OBX", 34],
      ["ORC", 2],
    ]),
  ],
  [
    38,
    new Map([
      ["BLG", 32],
      ["CTI", 31],
      ["FT1", 33],
      ["NTE", 37],
      ["OBX", 34],
      ["ORC", 2],
      ["PRT", 38],
    ]),
  ],
]);
export const effects = {
  "10:PRT": {
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
    groupsOpened: [],
  },
  "10:RXE": {
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
    groupsOpened: [],
  },
  "10:RXO": {
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsClosed: ["RDE_O11/PATIENT"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "12:ORC": {
    groupsClosed: ["RDE_O11/PATIENT"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "13:AL1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "14:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "15:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "16:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "16:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "17:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "18:RXR": {
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "1:ORC": {
    groupsClosed: ["RDE_O11/PATIENT"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "21:PRT": {
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: [],
  },
  "21:RXC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "21:RXE": {
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: [],
  },
  "23:PRT": {
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
    groupsOpened: [],
  },
  "23:RXE": {
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
    groupsOpened: [],
  },
  "23:RXO": {
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
  },
  "23:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
  },
  "24:AL1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "24:GT1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "24:ORC": {
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "25:AL1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "25:GT1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "25:ORC": {
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "26:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "26:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "26:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "27:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "27:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "27:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "27:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "28:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "28:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "28:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "29:RXR": {
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "29:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "2:PRT": {
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:RXE": {
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:RXO": {
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
  },
  "30:PRT": {
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: [],
  },
  "30:RXC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "30:RXE": {
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: [],
  },
  "31:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "32:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "33:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "34:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "34:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "34:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "34:ORC": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "35:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "35:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "35:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "35:ORC": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "36:PRT": {
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: [],
  },
  "36:RXC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "36:RXE": {
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: [],
  },
  "37:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "37:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "37:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "37:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "37:ORC": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "38:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "38:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "38:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "38:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "38:ORC": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "3:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["RDE_O11/PATIENT"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: ["RDE_O11/PATIENT"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["RDE_O11/PATIENT"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT"],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
