// Generated profile automaton for VXU_V04 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([
  2, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26,
]);
export const alphabet = new Set<string>([
  "ARV",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
  "MSH",
  "NK1",
  "NTE",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PRT",
  "PV1",
  "PV2",
  "RXA",
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
      ["PID", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ARV", 10],
      ["GT1", 8],
      ["IN1", 7],
      ["NK1", 11],
      ["OBX", 6],
      ["ORC", 5],
      ["PD1", 12],
      ["PV1", 9],
    ]),
  ],
  [3, new Map([["PID", 2]])],
  [
    4,
    new Map([
      ["PID", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["PRT", 15],
      ["RXA", 13],
      ["TQ1", 14],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 16],
      ["OBX", 6],
      ["ORC", 5],
      ["PRT", 17],
    ]),
  ],
  [
    7,
    new Map([
      ["IN1", 7],
      ["IN2", 19],
      ["IN3", 18],
      ["OBX", 6],
      ["ORC", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["GT1", 8],
      ["IN1", 7],
      ["OBX", 6],
      ["ORC", 5],
    ]),
  ],
  [
    9,
    new Map([
      ["ARV", 20],
      ["GT1", 8],
      ["IN1", 7],
      ["OBX", 6],
      ["ORC", 5],
      ["PV2", 21],
    ]),
  ],
  [
    10,
    new Map([
      ["ARV", 10],
      ["GT1", 8],
      ["IN1", 7],
      ["OBX", 6],
      ["ORC", 5],
      ["PV1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["ARV", 10],
      ["GT1", 8],
      ["IN1", 7],
      ["NK1", 11],
      ["OBX", 6],
      ["ORC", 5],
      ["PV1", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["ARV", 10],
      ["GT1", 8],
      ["IN1", 7],
      ["NK1", 11],
      ["OBX", 6],
      ["ORC", 5],
      ["PV1", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["OBX", 22],
      ["ORC", 5],
      ["RXR", 23],
    ]),
  ],
  [
    14,
    new Map([
      ["RXA", 13],
      ["TQ1", 14],
      ["TQ2", 24],
    ]),
  ],
  [
    15,
    new Map([
      ["PRT", 15],
      ["RXA", 13],
      ["TQ1", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 16],
      ["OBX", 6],
      ["ORC", 5],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 16],
      ["OBX", 6],
      ["ORC", 5],
      ["PRT", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["IN1", 7],
      ["OBX", 6],
      ["ORC", 5],
    ]),
  ],
  [
    19,
    new Map([
      ["IN1", 7],
      ["IN3", 18],
      ["OBX", 6],
      ["ORC", 5],
    ]),
  ],
  [
    20,
    new Map([
      ["ARV", 20],
      ["GT1", 8],
      ["IN1", 7],
      ["OBX", 6],
      ["ORC", 5],
    ]),
  ],
  [
    21,
    new Map([
      ["ARV", 20],
      ["GT1", 8],
      ["IN1", 7],
      ["OBX", 6],
      ["ORC", 5],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 25],
      ["OBX", 22],
      ["ORC", 5],
      ["PRT", 26],
    ]),
  ],
  [
    23,
    new Map([
      ["OBX", 22],
      ["ORC", 5],
    ]),
  ],
  [
    24,
    new Map([
      ["RXA", 13],
      ["TQ1", 14],
      ["TQ2", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 25],
      ["OBX", 22],
      ["ORC", 5],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 25],
      ["OBX", 22],
      ["ORC", 5],
      ["PRT", 26],
    ]),
  ],
]);
export const effects = {
  "10:GT1": {
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "10:OBX": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT_VISIT"],
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "VXU_V04/INSURANCE",
      "VXU_V04/PATIENT_VISIT",
      "VXU_V04/PERSON_OBSERVATION",
    ],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/PATIENT_VISIT"],
  },
  "11:GT1": {
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "11:OBX": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT_VISIT"],
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "VXU_V04/INSURANCE",
      "VXU_V04/PATIENT_VISIT",
      "VXU_V04/PERSON_OBSERVATION",
    ],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/PATIENT_VISIT"],
  },
  "12:GT1": {
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "12:OBX": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT_VISIT"],
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "VXU_V04/INSURANCE",
      "VXU_V04/PATIENT_VISIT",
      "VXU_V04/PERSON_OBSERVATION",
    ],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/PATIENT_VISIT"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "14:RXA": {
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
    groupsOpened: [],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
  },
  "15:RXA": {
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
    groupsOpened: [],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: ["VXU_V04/PERSON_OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: ["VXU_V04/PERSON_OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "18:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "18:OBX": {
    groupsClosed: ["VXU_V04/INSURANCE"],
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PERSON_OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "19:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "19:OBX": {
    groupsClosed: ["VXU_V04/INSURANCE"],
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PERSON_OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "20:GT1": {
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "20:OBX": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT_VISIT"],
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "VXU_V04/INSURANCE",
      "VXU_V04/PATIENT_VISIT",
      "VXU_V04/PERSON_OBSERVATION",
    ],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "21:GT1": {
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "21:OBX": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT_VISIT"],
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "VXU_V04/INSURANCE",
      "VXU_V04/PATIENT_VISIT",
      "VXU_V04/PERSON_OBSERVATION",
    ],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "24:RXA": {
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
    groupsOpened: [],
  },
  "24:TQ1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "2:GT1": {
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "2:IN1": {
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "2:OBX": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT_VISIT"],
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "2:ORC": {
    groupsClosed: [
      "VXU_V04/INSURANCE",
      "VXU_V04/PATIENT_VISIT",
      "VXU_V04/PERSON_OBSERVATION",
    ],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "2:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/PATIENT_VISIT"],
  },
  "5:RXA": {
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
    groupsOpened: [],
  },
  "5:TQ1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
  },
  "6:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: ["VXU_V04/PERSON_OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "7:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "7:OBX": {
    groupsClosed: ["VXU_V04/INSURANCE"],
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PERSON_OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "8:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "8:OBX": {
    groupsClosed: ["VXU_V04/INSURANCE"],
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PERSON_OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "9:GT1": {
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "9:IN1": {
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "9:OBX": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT_VISIT"],
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "VXU_V04/INSURANCE",
      "VXU_V04/PATIENT_VISIT",
      "VXU_V04/PERSON_OBSERVATION",
    ],
    groupsOpened: ["VXU_V04/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
