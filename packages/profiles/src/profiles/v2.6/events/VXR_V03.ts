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
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE"],
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
  "13:GT1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "15:RXA": {
    groupsClosed: ["VXR_V03/ORDER/TIMING"],
    groupsOpened: [],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/TIMING"],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "17:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "18:GT1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "18:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
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
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "21:RXA": {
    groupsClosed: ["VXR_V03/ORDER/TIMING"],
    groupsOpened: [],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/TIMING"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: ["VXR_V03/ORDER/OBSERVATION"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "6:GT1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "6:IN1": {
    groupsClosed: ["VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/INSURANCE"],
  },
  "6:ORC": {
    groupsClosed: ["VXR_V03/INSURANCE", "VXR_V03/PATIENT_VISIT"],
    groupsOpened: ["VXR_V03/ORDER"],
  },
  "6:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/PATIENT_VISIT"],
  },
  "8:RXA": {
    groupsClosed: ["VXR_V03/ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["VXR_V03/ORDER/TIMING"],
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
