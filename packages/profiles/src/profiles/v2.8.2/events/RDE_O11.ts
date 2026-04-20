// Generated profile automaton for RDE_O11 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([31, 35, 36, 37, 38, 39, 40, 45, 46]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "BLG",
  "CDO",
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
  "RXV",
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
      ["PRT", 10],
      ["RXE", 7],
      ["RXO", 8],
      ["TQ1", 9],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 11],
      ["ARV", 15],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 16],
      ["ORC", 2],
      ["PD1", 18],
      ["PRT", 17],
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
      ["NTE", 20],
      ["PRT", 21],
      ["TQ1", 19],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 23],
      ["PRT", 24],
      ["RXR", 22],
    ]),
  ],
  [
    9,
    new Map([
      ["RXE", 7],
      ["RXO", 8],
      ["TQ1", 9],
      ["TQ2", 25],
    ]),
  ],
  [
    10,
    new Map([
      ["PRT", 10],
      ["RXE", 7],
      ["RXO", 8],
      ["TQ1", 9],
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
      ["IN2", 27],
      ["IN3", 26],
      ["ORC", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 11],
      ["ARV", 28],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
      ["PRT", 29],
      ["PV2", 30],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 11],
      ["ARV", 15],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
      ["PV1", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 11],
      ["ARV", 15],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 16],
      ["ORC", 2],
      ["PV1", 14],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 11],
      ["ARV", 15],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 16],
      ["ORC", 2],
      ["PRT", 17],
      ["PV1", 14],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 11],
      ["ARV", 15],
      ["GT1", 12],
      ["IN1", 13],
      ["NTE", 16],
      ["ORC", 2],
      ["PRT", 17],
      ["PV1", 14],
    ]),
  ],
  [
    19,
    new Map([
      ["RXR", 31],
      ["RXV", 32],
      ["TQ1", 19],
      ["TQ2", 33],
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
      ["RXC", 34],
      ["RXE", 7],
      ["RXR", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["NTE", 23],
      ["RXR", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 23],
      ["PRT", 24],
      ["RXR", 22],
    ]),
  ],
  [
    25,
    new Map([
      ["RXE", 7],
      ["RXO", 8],
      ["TQ1", 9],
      ["TQ2", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 11],
      ["GT1", 12],
      ["IN1", 13],
      ["IN3", 26],
      ["ORC", 2],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 11],
      ["ARV", 28],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 11],
      ["ARV", 28],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
      ["PRT", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 11],
      ["ARV", 28],
      ["GT1", 12],
      ["IN1", 13],
      ["ORC", 2],
      ["PRT", 29],
    ]),
  ],
  [
    31,
    new Map([
      ["BLG", 36],
      ["CDO", 39],
      ["CTI", 35],
      ["FT1", 37],
      ["OBX", 38],
      ["ORC", 2],
      ["RXC", 40],
      ["RXR", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["NTE", 42],
      ["PRT", 43],
      ["TQ1", 41],
    ]),
  ],
  [
    33,
    new Map([
      ["RXR", 31],
      ["RXV", 32],
      ["TQ1", 19],
      ["TQ2", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["NTE", 44],
      ["RXC", 34],
      ["RXE", 7],
    ]),
  ],
  [
    35,
    new Map([
      ["CTI", 35],
      ["ORC", 2],
    ]),
  ],
  [
    36,
    new Map([
      ["CTI", 35],
      ["ORC", 2],
    ]),
  ],
  [
    37,
    new Map([
      ["BLG", 36],
      ["CTI", 35],
      ["FT1", 37],
      ["ORC", 2],
    ]),
  ],
  [
    38,
    new Map([
      ["BLG", 36],
      ["CTI", 35],
      ["FT1", 37],
      ["NTE", 45],
      ["OBX", 38],
      ["ORC", 2],
      ["PRT", 46],
    ]),
  ],
  [
    39,
    new Map([
      ["BLG", 36],
      ["CDO", 39],
      ["CTI", 35],
      ["FT1", 37],
      ["OBX", 38],
      ["ORC", 2],
    ]),
  ],
  [
    40,
    new Map([
      ["BLG", 36],
      ["CDO", 39],
      ["CTI", 35],
      ["FT1", 37],
      ["OBX", 38],
      ["ORC", 2],
      ["RXC", 40],
    ]),
  ],
  [
    41,
    new Map([
      ["RXR", 31],
      ["RXV", 32],
      ["TQ1", 41],
      ["TQ2", 47],
    ]),
  ],
  [
    42,
    new Map([
      ["NTE", 42],
      ["TQ1", 41],
    ]),
  ],
  [
    43,
    new Map([
      ["NTE", 42],
      ["PRT", 43],
      ["TQ1", 41],
    ]),
  ],
  [
    44,
    new Map([
      ["NTE", 44],
      ["RXC", 34],
      ["RXE", 7],
    ]),
  ],
  [
    45,
    new Map([
      ["BLG", 36],
      ["CTI", 35],
      ["FT1", 37],
      ["NTE", 45],
      ["OBX", 38],
      ["ORC", 2],
    ]),
  ],
  [
    46,
    new Map([
      ["BLG", 36],
      ["CTI", 35],
      ["FT1", 37],
      ["NTE", 45],
      ["OBX", 38],
      ["ORC", 2],
      ["PRT", 46],
    ]),
  ],
  [
    47,
    new Map([
      ["RXR", 31],
      ["RXV", 32],
      ["TQ1", 41],
      ["TQ2", 47],
    ]),
  ],
]);
export const effects = {
  "1:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RDE_O11/PATIENT"],
    groupsClosed: [],
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
  "3:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
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
  "9:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:RXE": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
  },
  "9:RXO": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
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
  "13:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
  },
  "13:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
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
  "15:ORC": {
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
  "15:PV1": {
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
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
  "16:PV1": {
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
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
  "17:PV1": {
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "18:PV1": {
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "19:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "19:RXR": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER",
      "RDE_O11/ORDER/TIMING_ENCODED",
    ],
  },
  "19:RXV": {
    groupsOpened: ["RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER"],
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "20:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "21:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "22:RXE": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "22:RXC": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "25:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
    groupsClosed: [],
  },
  "25:RXE": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
  },
  "25:RXO": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
  },
  "26:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
  },
  "26:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "26:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "27:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
  },
  "27:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "27:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "28:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "29:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "29:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "29:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "29:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "30:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "30:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "30:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "30:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "31:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "31:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "31:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "31:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "31:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "32:TQ1": {
    groupsOpened: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER/TIMING_ENCODED",
    ],
    groupsClosed: [],
  },
  "33:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "33:RXR": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER",
      "RDE_O11/ORDER/TIMING_ENCODED",
    ],
  },
  "33:RXV": {
    groupsOpened: ["RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER"],
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "34:RXC": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "34:RXE": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "35:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [],
  },
  "36:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [],
  },
  "37:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [],
  },
  "38:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "38:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "38:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "38:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "38:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "39:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "39:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "39:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "39:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "39:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "40:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "40:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "40:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "40:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "40:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "41:TQ1": {
    groupsOpened: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER/TIMING_ENCODED",
    ],
    groupsClosed: [],
  },
  "41:RXV": {
    groupsOpened: ["RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER"],
    groupsClosed: [],
  },
  "41:RXR": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER",
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER/TIMING_ENCODED",
    ],
  },
  "42:TQ1": {
    groupsOpened: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER/TIMING_ENCODED",
    ],
    groupsClosed: [],
  },
  "43:TQ1": {
    groupsOpened: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER/TIMING_ENCODED",
    ],
    groupsClosed: [],
  },
  "44:RXC": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "44:RXE": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "45:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "45:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "45:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "45:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "45:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "46:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "46:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "46:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "46:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "46:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "47:TQ1": {
    groupsOpened: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER/TIMING_ENCODED",
    ],
    groupsClosed: [],
  },
  "47:RXV": {
    groupsOpened: ["RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER"],
    groupsClosed: [],
  },
  "47:RXR": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER",
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER/TIMING_ENCODED",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
