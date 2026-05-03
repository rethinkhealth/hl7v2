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
  "17:RXO": {
    groupsClosed: ["OMP_O09/ORDER/TIMING"],
    groupsOpened: [],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/TIMING"],
  },
  "18:AL1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "18:GT1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "18:ORC": {
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: ["OMP_O09/ORDER"],
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
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "20:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "20:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "22:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "23:BLG": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "23:FT1": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "24:BLG": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "24:FT1": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "24:OBX": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "24:RXC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
  },
  "25:BLG": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "25:FT1": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "26:BLG": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "26:FT1": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "26:OBX": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "26:RXC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
  },
  "2:RXO": {
    groupsClosed: ["OMP_O09/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/TIMING"],
  },
  "3:AL1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
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
