// Generated profile automaton for OMP_O09 (v2.5)

export const start = 0;
export const finals = new Set<number>([14, 20, 21, 22, 23, 24, 25]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["RXO", 6],
      ["TQ1", 7],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["NTE", 12],
      ["ORC", 2],
      ["PD1", 13],
      ["PV1", 11],
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
      ["SFT", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 15],
      ["RXR", 14],
    ]),
  ],
  [
    7,
    new Map([
      ["RXO", 6],
      ["TQ1", 7],
      ["TQ2", 16],
    ]),
  ],
  [
    8,
    new Map([
      ["AL1", 8],
      ["ORC", 2],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 8],
      ["ORC", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["IN2", 18],
      ["IN3", 17],
      ["ORC", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["ORC", 2],
      ["PV2", 19],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["NTE", 12],
      ["ORC", 2],
      ["PV1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["NTE", 12],
      ["ORC", 2],
      ["PV1", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["BLG", 20],
      ["FT1", 21],
      ["OBX", 22],
      ["ORC", 2],
      ["RXC", 23],
      ["RXR", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 15],
      ["RXR", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["RXO", 6],
      ["TQ1", 7],
      ["TQ2", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["ORC", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["IN3", 17],
      ["ORC", 2],
    ]),
  ],
  [
    19,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["ORC", 2],
    ]),
  ],
  [20, new Map([["ORC", 2]])],
  [
    21,
    new Map([
      ["BLG", 20],
      ["FT1", 21],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["BLG", 20],
      ["FT1", 21],
      ["NTE", 24],
      ["OBX", 22],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["BLG", 20],
      ["FT1", 21],
      ["NTE", 25],
      ["OBX", 22],
      ["ORC", 2],
      ["RXC", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["BLG", 20],
      ["FT1", 21],
      ["NTE", 24],
      ["OBX", 22],
      ["ORC", 2],
    ]),
  ],
  [
    25,
    new Map([
      ["BLG", 20],
      ["FT1", 21],
      ["NTE", 25],
      ["OBX", 22],
      ["ORC", 2],
      ["RXC", 23],
    ]),
  ],
]);
export const effects = {
  "10:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "10:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "10:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
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
  "11:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
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
  "12:PV1": {
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
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
  "14:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "14:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "14:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
  },
  "14:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "14:RXC": {
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
    groupsClosed: [],
  },
  "16:RXO": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/TIMING"],
  },
  "16:TQ1": {
    groupsOpened: ["OMP_O09/ORDER/TIMING"],
    groupsClosed: [],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "17:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
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
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "19:IN1": {
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
  },
  "19:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
  },
  "1:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OMP_O09/PATIENT"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: [],
  },
  "22:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "22:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "22:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "23:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "23:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "23:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
  },
  "23:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "23:RXC": {
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
    groupsClosed: [],
  },
  "24:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "24:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "24:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "25:BLG": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "25:FT1": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "25:OBX": {
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
  },
  "25:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
  },
  "25:RXC": {
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
  "7:RXO": {
    groupsOpened: [],
    groupsClosed: ["OMP_O09/ORDER/TIMING"],
  },
  "7:TQ1": {
    groupsOpened: ["OMP_O09/ORDER/TIMING"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["OMP_O09/ORDER"],
    groupsClosed: ["OMP_O09/PATIENT"],
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
