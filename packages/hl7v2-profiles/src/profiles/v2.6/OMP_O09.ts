// Generated profile automaton for OMP_O09 (v2.6)

export const start = 0;
export const finals = new Set<number>([15, 21, 22, 23, 24, 25, 26]);
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
      ["RXR", 15],
    ]),
  ],
  [
    8,
    new Map([
      ["RXO", 7],
      ["TQ1", 8],
      ["TQ2", 17],
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
      ["IN2", 19],
      ["IN3", 18],
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
      ["PV2", 20],
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
      ["PV1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["BLG", 21],
      ["FT1", 22],
      ["OBX", 23],
      ["ORC", 2],
      ["RXC", 24],
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
      ["RXO", 7],
      ["TQ1", 8],
      ["TQ2", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN3", 18],
      ["ORC", 2],
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
  [21, new Map([["ORC", 2]])],
  [
    22,
    new Map([
      ["BLG", 21],
      ["FT1", 22],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["BLG", 21],
      ["FT1", 22],
      ["NTE", 25],
      ["OBX", 23],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["BLG", 21],
      ["FT1", 22],
      ["NTE", 26],
      ["OBX", 23],
      ["ORC", 2],
      ["RXC", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["BLG", 21],
      ["FT1", 22],
      ["NTE", 25],
      ["OBX", 23],
      ["ORC", 2],
    ]),
  ],
  [
    26,
    new Map([
      ["BLG", 21],
      ["FT1", 22],
      ["NTE", 26],
      ["OBX", 23],
      ["ORC", 2],
      ["RXC", 24],
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
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "14:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:PV1": {
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
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
  "17:RXO": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/TIMING"],
  },
  "17:TQ1": {
    groupsOpened: ["OMP_O09/ORDER/TIMING"],
    groupsClosed: [],
  },
  "18:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "18:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
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
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "20:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "20:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "21:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [],
  },
  "23:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "23:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "23:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "24:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "24:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "24:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
  },
  "24:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "24:RXC": {
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
    groupsClosed: [],
  },
  "25:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "25:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "25:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "26:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "26:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "26:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
  },
  "26:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "26:RXC": {
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
    groupsClosed: [],
  },
  "2:RXO": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["OMP_O09/ORDER/TIMING"],
    groupsClosed: [],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "3:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:PV1": {
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
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
