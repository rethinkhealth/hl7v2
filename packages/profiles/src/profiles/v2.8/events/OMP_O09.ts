// Generated profile automaton for OMP_O09 (v2.8)

export const start = 0;
export const finals = new Set<number>([16, 26, 27, 28, 29, 30, 31, 32, 33]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "BLG",
  "CDO",
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
      ["RXO", 7],
      ["TQ1", 8],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 9],
      ["ARV", 13],
      ["GT1", 10],
      ["IN1", 11],
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
      ["RXO", 7],
      ["TQ1", 8],
      ["TQ2", 19],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 9],
      ["ORC", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 9],
      ["ORC", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN2", 21],
      ["IN3", 20],
      ["ORC", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 9],
      ["ARV", 22],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
      ["PRT", 23],
      ["PV2", 24],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 9],
      ["ARV", 13],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 9],
      ["ARV", 13],
      ["GT1", 10],
      ["IN1", 11],
      ["NTE", 14],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 9],
      ["ARV", 13],
      ["GT1", 10],
      ["IN1", 11],
      ["NTE", 14],
      ["ORC", 2],
      ["PRT", 25],
      ["PV1", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["BLG", 26],
      ["CDO", 29],
      ["FT1", 27],
      ["OBX", 28],
      ["ORC", 2],
      ["RXC", 30],
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
      ["RXO", 7],
      ["TQ1", 8],
      ["TQ2", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN3", 20],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 9],
      ["ARV", 22],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 9],
      ["ARV", 22],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
      ["PRT", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["AL1", 9],
      ["ARV", 22],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
      ["PRT", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 9],
      ["ARV", 13],
      ["GT1", 10],
      ["IN1", 11],
      ["NTE", 14],
      ["ORC", 2],
      ["PRT", 25],
      ["PV1", 12],
    ]),
  ],
  [26, new Map([["ORC", 2]])],
  [
    27,
    new Map([
      ["BLG", 26],
      ["FT1", 27],
      ["ORC", 2],
    ]),
  ],
  [
    28,
    new Map([
      ["BLG", 26],
      ["FT1", 27],
      ["NTE", 31],
      ["OBX", 28],
      ["ORC", 2],
      ["PRT", 32],
    ]),
  ],
  [
    29,
    new Map([
      ["BLG", 26],
      ["CDO", 29],
      ["FT1", 27],
      ["OBX", 28],
      ["ORC", 2],
    ]),
  ],
  [
    30,
    new Map([
      ["BLG", 26],
      ["CDO", 29],
      ["FT1", 27],
      ["NTE", 33],
      ["OBX", 28],
      ["ORC", 2],
      ["RXC", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["BLG", 26],
      ["FT1", 27],
      ["NTE", 31],
      ["OBX", 28],
      ["ORC", 2],
    ]),
  ],
  [
    32,
    new Map([
      ["BLG", 26],
      ["FT1", 27],
      ["NTE", 31],
      ["OBX", 28],
      ["ORC", 2],
      ["PRT", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["BLG", 26],
      ["CDO", 29],
      ["FT1", 27],
      ["NTE", 33],
      ["OBX", 28],
      ["ORC", 2],
      ["RXC", 30],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["OMP_O09/PATIENT"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "11:AL1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "12:AL1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "13:AL1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "14:AL1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "15:AL1": {
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:ARV": {
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "15:NTE": {
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "15:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "15:PV1": {
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "16:BLG": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "16:CDO": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: [],
  },
  "16:FT1": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "16:OBX": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "16:RXC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
  },
  "19:RXO": {
    groupsClosed: ["OMP_O09/ORDER/TIMING"],
    groupsOpened: [],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/TIMING"],
  },
  "1:ORC": {
    groupsClosed: ["OMP_O09/PATIENT"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT"],
  },
  "20:AL1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "20:GT1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "20:ORC": {
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "21:AL1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "21:ORC": {
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "22:AL1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "22:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "23:AL1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "23:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "24:AL1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "24:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "24:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "25:AL1": {
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "25:ARV": {
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "25:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "25:NTE": {
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "25:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "25:PV1": {
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "26:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "27:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "28:BLG": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "28:FT1": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "29:BLG": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "29:FT1": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "2:RXO": {
    groupsClosed: ["OMP_O09/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/TIMING"],
  },
  "30:BLG": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "30:CDO": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: [],
  },
  "30:FT1": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "30:OBX": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "30:RXC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
  },
  "31:BLG": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "31:FT1": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "32:BLG": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "32:FT1": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "33:BLG": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "33:CDO": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "33:OBX": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "33:ORC": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "33:RXC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
  },
  "3:AL1": {
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:ARV": {
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "3:NTE": {
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "3:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "3:PD1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "3:PV1": {
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["OMP_O09/PATIENT"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: ["OMP_O09/PATIENT"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["OMP_O09/PATIENT"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT"],
  },
  "8:RXO": {
    groupsClosed: ["OMP_O09/ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/TIMING"],
  },
  "9:ORC": {
    groupsClosed: ["OMP_O09/PATIENT"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
