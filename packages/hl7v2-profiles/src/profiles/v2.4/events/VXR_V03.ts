// Generated profile automaton for VXR_V03 (v2.4)

export const start = 0;
export const finals = new Set<number>([
  4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
]);
export const alphabet = new Set<string>([
  "GT1",
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
      ["GT1", 9],
      ["IN1", 8],
      ["NK1", 11],
      ["ORC", 7],
      ["PD1", 12],
      ["PV1", 10],
      ["RXA", 6],
    ]),
  ],
  [5, new Map([["PID", 4]])],
  [
    6,
    new Map([
      ["OBX", 13],
      ["ORC", 7],
      ["RXA", 6],
      ["RXR", 14],
    ]),
  ],
  [7, new Map([["RXA", 6]])],
  [
    8,
    new Map([
      ["IN1", 8],
      ["IN2", 16],
      ["IN3", 15],
      ["ORC", 7],
      ["RXA", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["GT1", 9],
      ["IN1", 8],
      ["ORC", 7],
      ["RXA", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["GT1", 9],
      ["IN1", 8],
      ["ORC", 7],
      ["PV2", 17],
      ["RXA", 6],
    ]),
  ],
  [
    11,
    new Map([
      ["GT1", 9],
      ["IN1", 8],
      ["NK1", 11],
      ["ORC", 7],
      ["PV1", 10],
      ["RXA", 6],
    ]),
  ],
  [
    12,
    new Map([
      ["GT1", 9],
      ["IN1", 8],
      ["NK1", 11],
      ["ORC", 7],
      ["PV1", 10],
      ["RXA", 6],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 18],
      ["OBX", 13],
      ["ORC", 7],
      ["RXA", 6],
    ]),
  ],
  [
    14,
    new Map([
      ["OBX", 13],
      ["ORC", 7],
      ["RXA", 6],
    ]),
  ],
  [
    15,
    new Map([
      ["IN1", 8],
      ["ORC", 7],
      ["RXA", 6],
    ]),
  ],
  [
    16,
    new Map([
      ["IN1", 8],
      ["IN3", 15],
      ["ORC", 7],
      ["RXA", 6],
    ]),
  ],
  [
    17,
    new Map([
      ["GT1", 9],
      ["IN1", 8],
      ["ORC", 7],
      ["RXA", 6],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 18],
      ["OBX", 13],
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
  "4:GT1": {
    groupsOpened: [],
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
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "9:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "9:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: [],
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
  "10:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
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
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "12:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "12:PV1": {
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "13:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "14:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "14:OBX": {
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
    groupsClosed: [],
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
  "16:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: [],
  },
  "16:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "16:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "17:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "17:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "17:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "18:OBX": {
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:RXA": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
