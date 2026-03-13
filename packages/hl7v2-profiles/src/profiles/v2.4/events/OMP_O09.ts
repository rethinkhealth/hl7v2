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
  "1:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OMP_O09/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
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
  "6:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT"],
  },
  "7:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT"],
  },
  "8:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
  },
  "8:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "8:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "9:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "9:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "9:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "9:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "10:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "10:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "10:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "10:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "10:PV1": {
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "12:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "12:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "12:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
  },
  "12:RXC": {
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
    groupsClosed: [],
  },
  "14:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
  },
  "14:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "15:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "17:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "19:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "19:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "20:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "20:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "20:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "20:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
  },
  "21:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "21:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "21:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "22:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "22:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "22:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "22:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
