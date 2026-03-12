// Generated profile automaton for VXR_V03 (v2.5)

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
    groupsOpened: [],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "10:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "10:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "11:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "12:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "12:PV1": {
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "14:RXA": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/ORDER/TIMING"],
  },
  "14:TQ1": {
    groupsOpened: ["VXR_V03/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "16:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "17:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "17:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "18:OBX": {
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "19:OBX": {
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "20:RXA": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/ORDER/TIMING"],
  },
  "20:TQ1": {
    groupsOpened: ["VXR_V03/ORDER/TIMING"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "5:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "5:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "5:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "5:PV1": {
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "7:RXA": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/ORDER/TIMING"],
  },
  "7:TQ1": {
    groupsOpened: ["VXR_V03/ORDER/TIMING"],
    groupsClosed: [],
  },
  "8:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "9:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
