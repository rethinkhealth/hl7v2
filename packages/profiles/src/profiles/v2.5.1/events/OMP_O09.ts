// Generated profile automaton for OMP_O09 (v2.5.1)

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
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "10:GT1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: ["OMP_O09/ORDER"],
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
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/PATIENT_VISIT"],
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
  "14:BLG": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "14:FT1": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "14:OBX": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "14:RXC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
  },
  "16:RXO": {
    groupsClosed: ["OMP_O09/ORDER/TIMING"],
    groupsOpened: [],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/TIMING"],
  },
  "17:AL1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: ["OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: ["OMP_O09/PATIENT", "OMP_O09/PATIENT/INSURANCE"],
    groupsOpened: ["OMP_O09/ORDER"],
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
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "19:GT1": {
    groupsClosed: [
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: ["OMP_O09/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OMP_O09/PATIENT/INSURANCE"],
  },
  "19:ORC": {
    groupsClosed: [
      "OMP_O09/PATIENT",
      "OMP_O09/PATIENT/INSURANCE",
      "OMP_O09/PATIENT/PATIENT_VISIT",
    ],
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
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "22:BLG": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "22:FT1": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "23:BLG": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "23:FT1": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "23:OBX": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "23:RXC": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/COMPONENT"],
  },
  "24:BLG": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "24:FT1": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: ["OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "25:BLG": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "25:FT1": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "25:OBX": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT"],
    groupsOpened: ["OMP_O09/ORDER/OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: ["OMP_O09/ORDER/COMPONENT", "OMP_O09/ORDER/OBSERVATION"],
    groupsOpened: ["OMP_O09/ORDER"],
  },
  "25:RXC": {
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
  "7:RXO": {
    groupsClosed: ["OMP_O09/ORDER/TIMING"],
    groupsOpened: [],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OMP_O09/ORDER/TIMING"],
  },
  "8:ORC": {
    groupsClosed: ["OMP_O09/PATIENT"],
    groupsOpened: ["OMP_O09/ORDER"],
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
