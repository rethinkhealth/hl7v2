// Generated profile automaton for VXR_V03 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([
  4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
]);
export const alphabet = new Set<string>([
  "IN1",
  "IN2",
  "IN3",
  "MSA",
  "MSH",
  "NK1",
  "NTE",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "QRD",
  "QRF",
  "RXA",
  "RXR",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [2, new Map([["QRD", 3]])],
  [
    3,
    new Map([
      ["PID", 4],
      ["QRF", 5],
    ]),
  ],
  [
    4,
    new Map([
      ["IN1", 8],
      ["NK1", 10],
      ["ORC", 7],
      ["PD1", 11],
      ["PV1", 9],
      ["RXA", 6],
    ]),
  ],
  [5, new Map([["PID", 4]])],
  [
    6,
    new Map([
      ["OBX", 12],
      ["ORC", 7],
      ["RXA", 6],
      ["RXR", 13],
    ]),
  ],
  [7, new Map([["RXA", 6]])],
  [
    8,
    new Map([
      ["IN1", 8],
      ["IN2", 15],
      ["IN3", 14],
      ["ORC", 7],
      ["RXA", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["IN1", 8],
      ["ORC", 7],
      ["PV2", 16],
      ["RXA", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["IN1", 8],
      ["NK1", 10],
      ["ORC", 7],
      ["PV1", 9],
      ["RXA", 6],
    ]),
  ],
  [
    11,
    new Map([
      ["IN1", 8],
      ["NK1", 10],
      ["ORC", 7],
      ["PV1", 9],
      ["RXA", 6],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 17],
      ["OBX", 12],
      ["ORC", 7],
      ["RXA", 6],
    ]),
  ],
  [
    13,
    new Map([
      ["OBX", 12],
      ["ORC", 7],
      ["RXA", 6],
    ]),
  ],
  [
    14,
    new Map([
      ["IN1", 8],
      ["ORC", 7],
      ["RXA", 6],
    ]),
  ],
  [
    15,
    new Map([
      ["IN1", 8],
      ["IN3", 14],
      ["ORC", 7],
      ["RXA", 6],
    ]),
  ],
  [
    16,
    new Map([
      ["IN1", 8],
      ["ORC", 7],
      ["RXA", 6],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 17],
      ["OBX", 12],
      ["ORC", 7],
      ["RXA", 6],
    ]),
  ],
]);
export const effects = {
  "10:IN1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
  },
  "10:RXA": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "11:IN1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
  },
  "11:RXA": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "12:RXA": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "13:RXA": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "14:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "14:RXA": {
    groupsClosed: ["VXR_V03/INSURANCE"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "15:RXA": {
    groupsClosed: ["VXR_V03/INSURANCE"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "16:IN1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "16:RXA": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "17:RXA": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "4:IN1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "4:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "4:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
  },
  "4:RXA": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "6:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "6:RXA": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "8:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "8:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "8:RXA": {
    groupsClosed: ["VXR_V03/INSURANCE"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "9:IN1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "9:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "9:RXA": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
