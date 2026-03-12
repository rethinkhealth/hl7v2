// Generated profile automaton for OMP_O09 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([15, 24, 25, 26, 27, 28, 29, 30]);
export const alphabet = new Set<string>([
  "AL1",
  "BLG",
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
      ["GT1", 10],
      ["IN1", 11],
      ["NTE", 13],
      ["ORC", 2],
      ["PD1", 14],
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
      ["NTE", 16],
      ["PRT", 17],
      ["RXR", 15],
    ]),
  ],
  [
    8,
    new Map([
      ["RXO", 7],
      ["TQ1", 8],
      ["TQ2", 18],
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
      ["IN2", 20],
      ["IN3", 19],
      ["ORC", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
      ["PRT", 21],
      ["PV2", 22],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NTE", 13],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NTE", 13],
      ["ORC", 2],
      ["PRT", 23],
      ["PV1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["BLG", 24],
      ["FT1", 25],
      ["OBX", 26],
      ["ORC", 2],
      ["RXC", 27],
      ["RXR", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 16],
      ["RXR", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 16],
      ["PRT", 17],
      ["RXR", 15],
    ]),
  ],
  [
    18,
    new Map([
      ["RXO", 7],
      ["TQ1", 8],
      ["TQ2", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN3", 19],
      ["ORC", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
      ["PRT", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
      ["PRT", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NTE", 13],
      ["ORC", 2],
      ["PRT", 23],
      ["PV1", 12],
    ]),
  ],
  [24, new Map([["ORC", 2]])],
  [
    25,
    new Map([
      ["BLG", 24],
      ["FT1", 25],
      ["ORC", 2],
    ]),
  ],
  [
    26,
    new Map([
      ["BLG", 24],
      ["FT1", 25],
      ["NTE", 28],
      ["OBX", 26],
      ["ORC", 2],
      ["PRT", 29],
    ]),
  ],
  [
    27,
    new Map([
      ["BLG", 24],
      ["FT1", 25],
      ["NTE", 30],
      ["OBX", 26],
      ["ORC", 2],
      ["RXC", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["BLG", 24],
      ["FT1", 25],
      ["NTE", 28],
      ["OBX", 26],
      ["ORC", 2],
    ]),
  ],
  [
    29,
    new Map([
      ["BLG", 24],
      ["FT1", 25],
      ["NTE", 28],
      ["OBX", 26],
      ["ORC", 2],
      ["PRT", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["BLG", 24],
      ["FT1", 25],
      ["NTE", 30],
      ["OBX", 26],
      ["ORC", 2],
      ["RXC", 27],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT"],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "11:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:PV1": {
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:NTE": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "14:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:PV1": {
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "15:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "15:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "15:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
  },
  "15:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "15:RXC": {
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
    groupsClosed: [],
  },
  "18:RXO": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/TIMING"],
  },
  "18:TQ1": {
    groupsOpened: ["OMP_O09/ORDER/TIMING"],
    groupsClosed: [],
  },
  "19:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "19:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
  },
  "1:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OMP_O09/PATIENT"],
    groupsClosed: [],
  },
  "20:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "20:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
  },
  "21:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "21:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "21:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "22:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:NTE": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "23:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:PV1": {
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "24:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [],
  },
  "26:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "26:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "26:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "27:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "27:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "27:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
  },
  "27:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "27:RXC": {
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
    groupsClosed: [],
  },
  "28:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "28:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "28:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "29:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "29:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "29:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "2:RXO": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["OMP_O09/ORDER/TIMING"],
    groupsClosed: [],
  },
  "30:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "30:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "30:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
  },
  "30:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "30:RXC": {
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
    groupsClosed: [],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:NTE": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "3:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:PD1": {
    groupsOpened: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsClosed: [],
  },
  "3:PV1": {
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "4:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["OMP_O09/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OMP_O09/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OMP_O09/PATIENT"],
    groupsClosed: [],
  },
  "8:RXO": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/TIMING"],
  },
  "8:TQ1": {
    groupsOpened: ["OMP_O09/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
