// Generated profile automaton for VXR_V03 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  6, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 22,
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["QRD", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["PID", 6],
      ["QRF", 7],
    ]),
  ],
  [4, new Map([["QRD", 3]])],
  [
    5,
    new Map([
      ["QRD", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["GT1", 10],
      ["IN1", 9],
      ["NK1", 12],
      ["ORC", 8],
      ["PD1", 13],
      ["PV1", 11],
    ]),
  ],
  [7, new Map([["PID", 6]])],
  [
    8,
    new Map([
      ["RXA", 14],
      ["TQ1", 15],
    ]),
  ],
  [
    9,
    new Map([
      ["IN1", 9],
      ["IN2", 17],
      ["IN3", 16],
      ["ORC", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["GT1", 10],
      ["IN1", 9],
      ["ORC", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["GT1", 10],
      ["IN1", 9],
      ["ORC", 8],
      ["PV2", 18],
    ]),
  ],
  [
    12,
    new Map([
      ["GT1", 10],
      ["IN1", 9],
      ["NK1", 12],
      ["ORC", 8],
      ["PV1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["GT1", 10],
      ["IN1", 9],
      ["NK1", 12],
      ["ORC", 8],
      ["PV1", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["OBX", 19],
      ["ORC", 8],
      ["RXR", 20],
    ]),
  ],
  [
    15,
    new Map([
      ["RXA", 14],
      ["TQ1", 15],
      ["TQ2", 21],
    ]),
  ],
  [
    16,
    new Map([
      ["IN1", 9],
      ["ORC", 8],
    ]),
  ],
  [
    17,
    new Map([
      ["IN1", 9],
      ["IN3", 16],
      ["ORC", 8],
    ]),
  ],
  [
    18,
    new Map([
      ["GT1", 10],
      ["IN1", 9],
      ["ORC", 8],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 22],
      ["OBX", 19],
      ["ORC", 8],
    ]),
  ],
  [
    20,
    new Map([
      ["OBX", 19],
      ["ORC", 8],
    ]),
  ],
  [
    21,
    new Map([
      ["RXA", 14],
      ["TQ1", 15],
      ["TQ2", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 22],
      ["OBX", 19],
      ["ORC", 8],
    ]),
  ],
]);
export const effects = {
  "6:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "6:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "6:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "6:PV1": {
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "8:RXA": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/ORDER/TIMING"],
  },
  "8:TQ1": {
    groupsOpened: ["VXR_V03/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "10:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "10:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: [],
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
  "13:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "13:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
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
  "15:TQ1": {
    groupsOpened: ["VXR_V03/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:RXA": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/ORDER/TIMING"],
  },
  "16:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "17:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE"],
  },
  "18:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
  },
  "18:IN1": {
    groupsOpened: ["VXR_V03/INSURANCE"],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
  },
  "19:OBX": {
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "20:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "20:OBX": {
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "21:TQ1": {
    groupsOpened: ["VXR_V03/ORDER/TIMING"],
    groupsClosed: [],
  },
  "21:RXA": {
    groupsOpened: [],
    groupsClosed: ["VXR_V03/ORDER/TIMING"],
  },
  "22:OBX": {
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["VXR_V03/ORDER"],
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
