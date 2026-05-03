// Generated profile automaton for VXR_V03 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  5, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 21,
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
  "SFT",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["QRD", 3],
      ["SFT", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["PID", 5],
      ["QRF", 6],
    ]),
  ],
  [
    4,
    new Map([
      ["QRD", 3],
      ["SFT", 4],
    ]),
  ],
  [
    5,
    new Map([
      ["GT1", 9],
      ["IN1", 8],
      ["NK1", 11],
      ["ORC", 7],
      ["PD1", 12],
      ["PV1", 10],
    ]),
  ],
  [6, new Map([["PID", 5]])],
  [
    7,
    new Map([
      ["RXA", 13],
      ["TQ1", 14],
    ]),
  ],
  [
    8,
    new Map([
      ["IN1", 8],
      ["IN2", 16],
      ["IN3", 15],
      ["ORC", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["GT1", 9],
      ["IN1", 8],
      ["ORC", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["GT1", 9],
      ["IN1", 8],
      ["ORC", 7],
      ["PV2", 17],
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
    ]),
  ],
  [
    13,
    new Map([
      ["OBX", 18],
      ["ORC", 7],
      ["RXR", 19],
    ]),
  ],
  [
    14,
    new Map([
      ["RXA", 13],
      ["TQ1", 14],
      ["TQ2", 20],
    ]),
  ],
  [
    15,
    new Map([
      ["IN1", 8],
      ["ORC", 7],
    ]),
  ],
  [
    16,
    new Map([
      ["IN1", 8],
      ["IN3", 15],
      ["ORC", 7],
    ]),
  ],
  [
    17,
    new Map([
      ["GT1", 9],
      ["IN1", 8],
      ["ORC", 7],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 7],
    ]),
  ],
  [
    19,
    new Map([
      ["OBX", 18],
      ["ORC", 7],
    ]),
  ],
  [
    20,
    new Map([
      ["RXA", 13],
      ["TQ1", 14],
      ["TQ2", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 7],
    ]),
  ],
]);
export const effects = {
  "10:GT1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "11:GT1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: [],
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
  "12:GT1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "14:RXA": {
    groupsClosed: ["VXR_V03/ORDER/TIMING"],
    groupsOpened: [],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/TIMING"],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "17:GT1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "20:RXA": {
    groupsClosed: ["VXR_V03/ORDER/TIMING"],
    groupsOpened: [],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/TIMING"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "5:GT1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "5:IN1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "5:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "5:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
  },
  "7:RXA": {
    groupsClosed: ["VXR_V03/ORDER/TIMING"],
    groupsOpened: [],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/TIMING"],
  },
  "8:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "8:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "9:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "9:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
