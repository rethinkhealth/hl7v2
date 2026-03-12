// Generated profile automaton for VXU_V04 (v2.8.2)

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
    groupsOpened: [],
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
  },
  "10:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
  },
  "10:OBX": {
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT_VISIT"],
  },
  "10:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: [
      "VXU_V04/INSURANCE",
      "VXU_V04/PATIENT_VISIT",
      "VXU_V04/PERSON_OBSERVATION",
    ],
  },
  "10:PV1": {
    groupsOpened: ["VXU_V04/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
  },
  "11:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
  },
  "11:OBX": {
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: [
      "VXU_V04/INSURANCE",
      "VXU_V04/PATIENT_VISIT",
      "VXU_V04/PERSON_OBSERVATION",
    ],
  },
  "11:PV1": {
    groupsOpened: ["VXU_V04/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
  },
  "12:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
  },
  "12:OBX": {
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: [
      "VXU_V04/INSURANCE",
      "VXU_V04/PATIENT_VISIT",
      "VXU_V04/PERSON_OBSERVATION",
    ],
  },
  "12:PV1": {
    groupsOpened: ["VXU_V04/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "14:RXA": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
  },
  "14:TQ1": {
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:RXA": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
  },
  "15:TQ1": {
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "17:OBX": {
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "18:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
    groupsClosed: ["VXU_V04/INSURANCE"],
  },
  "18:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PERSON_OBSERVATION"],
  },
  "19:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
    groupsClosed: ["VXU_V04/INSURANCE"],
  },
  "19:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PERSON_OBSERVATION"],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
  },
  "20:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
  },
  "20:OBX": {
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT_VISIT"],
  },
  "20:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: [
      "VXU_V04/INSURANCE",
      "VXU_V04/PATIENT_VISIT",
      "VXU_V04/PERSON_OBSERVATION",
    ],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
  },
  "21:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
  },
  "21:OBX": {
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT_VISIT"],
  },
  "21:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: [
      "VXU_V04/INSURANCE",
      "VXU_V04/PATIENT_VISIT",
      "VXU_V04/PERSON_OBSERVATION",
    ],
  },
  "22:OBX": {
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "23:OBX": {
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "24:RXA": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
  },
  "24:TQ1": {
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "26:OBX": {
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "2:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
  },
  "2:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
  },
  "2:OBX": {
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT_VISIT"],
  },
  "2:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: [
      "VXU_V04/INSURANCE",
      "VXU_V04/PATIENT_VISIT",
      "VXU_V04/PERSON_OBSERVATION",
    ],
  },
  "2:PV1": {
    groupsOpened: ["VXU_V04/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "5:RXA": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
  },
  "5:TQ1": {
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
    groupsClosed: [],
  },
  "6:OBX": {
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/PERSON_OBSERVATION"],
  },
  "7:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: [],
  },
  "7:OBX": {
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
    groupsClosed: ["VXU_V04/INSURANCE"],
  },
  "7:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PERSON_OBSERVATION"],
  },
  "8:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: [],
  },
  "8:OBX": {
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
    groupsClosed: ["VXU_V04/INSURANCE"],
  },
  "8:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PERSON_OBSERVATION"],
  },
  "9:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
  },
  "9:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: ["VXU_V04/PATIENT_VISIT"],
  },
  "9:OBX": {
    groupsOpened: ["VXU_V04/PERSON_OBSERVATION"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT_VISIT"],
  },
  "9:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: [
      "VXU_V04/INSURANCE",
      "VXU_V04/PATIENT_VISIT",
      "VXU_V04/PERSON_OBSERVATION",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
