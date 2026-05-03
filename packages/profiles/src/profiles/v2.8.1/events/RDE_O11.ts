// Generated profile automaton for RDE_O11 (v2.8.1)

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
  "18:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "18:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "18:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "19:RXR": {
    groupsClosed: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER",
      "RDE_O11/ORDER/TIMING_ENCODED",
    ],
    groupsOpened: [],
  },
  "19:RXV": {
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsOpened: ["RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER"],
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
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "22:RXC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "22:RXE": {
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: [],
  },
  "25:RXE": {
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
    groupsOpened: [],
  },
  "25:RXO": {
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
  },
  "25:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
  },
  "26:AL1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "26:GT1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "26:ORC": {
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "27:AL1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "27:GT1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "27:IN1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "27:ORC": {
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "28:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "28:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "28:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "28:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "29:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "29:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "29:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "29:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
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
  "30:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "30:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "30:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "30:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "31:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "31:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "31:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "32:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER/TIMING_ENCODED",
    ],
  },
  "33:RXR": {
    groupsClosed: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER",
      "RDE_O11/ORDER/TIMING_ENCODED",
    ],
    groupsOpened: [],
  },
  "33:RXV": {
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsOpened: ["RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER"],
  },
  "33:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "34:RXC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "34:RXE": {
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: [],
  },
  "35:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "36:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "37:ORC": {
    groupsClosed: [],
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
  "39:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "39:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "39:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "39:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "39:ORC": {
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
  "40:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "40:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "40:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "40:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "40:ORC": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "41:RXR": {
    groupsClosed: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER",
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER/TIMING_ENCODED",
    ],
    groupsOpened: [],
  },
  "41:RXV": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER"],
  },
  "41:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER/TIMING_ENCODED",
    ],
  },
  "42:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER/TIMING_ENCODED",
    ],
  },
  "43:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER/TIMING_ENCODED",
    ],
  },
  "44:RXC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "44:RXE": {
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: [],
  },
  "45:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "45:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "45:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "45:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "45:ORC": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "46:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "46:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "46:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "46:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "46:ORC": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "47:RXR": {
    groupsClosed: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER",
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER/TIMING_ENCODED",
    ],
    groupsOpened: [],
  },
  "47:RXV": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER"],
  },
  "47:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "RDE_O11/ORDER/PHARMACY_TREATMENT_INFUSION_ORDER/TIMING_ENCODED",
    ],
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
  "9:RXE": {
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
    groupsOpened: [],
  },
  "9:RXO": {
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
