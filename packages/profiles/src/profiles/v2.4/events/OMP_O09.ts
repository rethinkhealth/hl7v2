// Generated profile automaton for OMP_O09 (v2.4)

export const start = 0;
export const finals = new Set<number>([12, 17, 18, 19, 20, 21, 22]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
    ]),
  ],
  [2, new Map([["RXO", 5]])],
  [
    3,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["NTE", 10],
      ["ORC", 2],
      ["PD1", 11],
      ["PV1", 9],
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
      ["NTE", 13],
      ["RXR", 12],
    ]),
  ],
  [
    6,
    new Map([
      ["AL1", 6],
      ["ORC", 2],
    ]),
  ],
  [
    7,
    new Map([
      ["AL1", 6],
      ["ORC", 2],
    ]),
  ],
  [
    8,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["IN2", 15],
      ["IN3", 14],
      ["ORC", 2],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["ORC", 2],
      ["PV2", 16],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["NTE", 10],
      ["ORC", 2],
      ["PV1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["NTE", 10],
      ["ORC", 2],
      ["PV1", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["BLG", 17],
      ["FT1", 18],
      ["OBX", 19],
      ["ORC", 2],
      ["RXC", 20],
      ["RXR", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["RXR", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["ORC", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["IN3", 14],
      ["ORC", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 6],
      ["GT1", 7],
      ["IN1", 8],
      ["ORC", 2],
    ]),
  ],
  [17, new Map([["ORC", 2]])],
  [
    18,
    new Map([
      ["BLG", 17],
      ["FT1", 18],
      ["ORC", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["BLG", 17],
      ["FT1", 18],
      ["NTE", 21],
      ["OBX", 19],
      ["ORC", 2],
    ]),
  ],
  [
    20,
    new Map([
      ["BLG", 17],
      ["FT1", 18],
      ["NTE", 22],
      ["OBX", 19],
      ["ORC", 2],
      ["RXC", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["BLG", 17],
      ["FT1", 18],
      ["NTE", 21],
      ["OBX", 19],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["BLG", 17],
      ["FT1", 18],
      ["NTE", 22],
      ["OBX", 19],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "10:AL1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "10:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "11:AL1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "12:BLG": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "12:FT1": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "12:OBX": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "12:RXC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
  },
  "14:AL1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "15:AL1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "16:AL1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "19:BLG": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "19:FT1": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
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
  "20:BLG": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "20:FT1": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "20:OBX": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "21:BLG": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "21:FT1": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "22:BLG": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "22:FT1": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "22:OBX": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
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
  "6:ORC": {
    groupsClosed: ["OMP_O09/PATIENT"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "7:ORC": {
    groupsClosed: ["OMP_O09/PATIENT"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "8:AL1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "8:GT1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "8:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "8:ORC": {
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "9:AL1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "9:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "9:IN1": {
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "9:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OMP_O09/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
