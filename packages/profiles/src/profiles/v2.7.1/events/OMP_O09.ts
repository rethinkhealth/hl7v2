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
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "14:NTE": {
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "14:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "14:PV1": {
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "15:BLG": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "15:FT1": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "15:OBX": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "15:RXC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
  },
  "18:RXO": {
    groupsClosed: ["OMP_O09/ORDER/TIMING"],
    groupsOpened: [],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/TIMING"],
  },
  "19:AL1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "19:GT1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "19:ORC": {
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: ["OMP_O09/ORDER"],
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
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "21:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
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
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "23:NTE": {
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "23:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "23:PV1": {
    groupsClosed: ["OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "24:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "25:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "26:BLG": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "26:FT1": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "27:BLG": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "27:FT1": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "27:OBX": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "27:RXC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
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
  "3:AL1": {
    groupsClosed: [
      "OMP_O09/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
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
