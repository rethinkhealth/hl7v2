// Generated profile automaton for RDE_O11 (v2.7.1)

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
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
  },
  "10:RXE": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
  },
  "10:RXO": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
  },
  "10:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "12:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "13:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "13:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
  },
  "14:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "14:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "15:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:PV1": {
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "16:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:PV1": {
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "17:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:PV1": {
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "18:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "18:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "19:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "1:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RDE_O11/PATIENT"],
    groupsClosed: [],
  },
  "20:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "21:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "21:RXC": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "21:RXE": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "23:PRT": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
  },
  "23:RXE": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
  },
  "23:RXO": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
  },
  "23:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
    groupsClosed: [],
  },
  "24:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "24:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "24:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
  },
  "25:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "25:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "25:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
  },
  "26:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "26:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "26:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "26:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "27:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "27:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "27:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "27:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "28:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "28:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "28:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "29:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "29:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "2:PRT": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
  },
  "2:RXE": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
  },
  "2:RXO": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
    groupsClosed: [],
  },
  "30:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "30:RXC": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "30:RXE": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "31:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [],
  },
  "34:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "34:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "34:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "34:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "34:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "35:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "35:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "35:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "35:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "35:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "36:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "36:RXC": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "36:RXE": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "37:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "37:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "37:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "37:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "37:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "38:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "38:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "38:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "38:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "38:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "3:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:PV1": {
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["RDE_O11/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["RDE_O11/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["RDE_O11/PATIENT"],
    groupsClosed: [],
  },
  "7:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
