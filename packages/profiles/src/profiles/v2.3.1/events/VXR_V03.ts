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
  "4:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "4:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "4:PV1": {
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "6:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "6:OBX": {
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "8:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: [],
  },
  "8:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "8:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "9:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "9:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "9:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "10:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "10:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "10:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "10:PV1": {
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "11:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "11:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "12:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "13:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "13:OBX": {
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "14:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: [],
  },
  "14:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "14:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "15:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: [],
  },
  "15:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "15:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "16:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "16:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "16:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "17:OBX": {
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
