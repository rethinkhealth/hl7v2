// Generated profile automaton for VXU_V04 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  2, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19,
]);
export const alphabet = new Set<string>([
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
      ["GT1", 7],
      ["IN1", 6],
      ["NK1", 9],
      ["ORC", 5],
      ["PD1", 10],
      ["PV1", 8],
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
      ["RXA", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    6,
    new Map([
      ["IN1", 6],
      ["IN2", 14],
      ["IN3", 13],
      ["ORC", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["GT1", 7],
      ["IN1", 6],
      ["ORC", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["GT1", 7],
      ["IN1", 6],
      ["ORC", 5],
      ["PV2", 15],
    ]),
  ],
  [
    9,
    new Map([
      ["GT1", 7],
      ["IN1", 6],
      ["NK1", 9],
      ["ORC", 5],
      ["PV1", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["GT1", 7],
      ["IN1", 6],
      ["NK1", 9],
      ["ORC", 5],
      ["PV1", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["OBX", 16],
      ["ORC", 5],
      ["RXR", 17],
    ]),
  ],
  [
    12,
    new Map([
      ["RXA", 11],
      ["TQ1", 12],
      ["TQ2", 18],
    ]),
  ],
  [
    13,
    new Map([
      ["IN1", 6],
      ["ORC", 5],
    ]),
  ],
  [
    14,
    new Map([
      ["IN1", 6],
      ["IN3", 13],
      ["ORC", 5],
    ]),
  ],
  [
    15,
    new Map([
      ["GT1", 7],
      ["IN1", 6],
      ["ORC", 5],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 19],
      ["OBX", 16],
      ["ORC", 5],
    ]),
  ],
  [
    17,
    new Map([
      ["OBX", 16],
      ["ORC", 5],
    ]),
  ],
  [
    18,
    new Map([
      ["RXA", 11],
      ["TQ1", 12],
      ["TQ2", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 19],
      ["OBX", 16],
      ["ORC", 5],
    ]),
  ],
]);
export const effects = {
  "10:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/PATIENT"],
  },
  "10:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: ["VXU_V04/PATIENT"],
  },
  "10:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
  },
  "10:PV1": {
    groupsOpened: ["VXU_V04/PATIENT"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "12:RXA": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
  },
  "12:TQ1": {
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE"],
  },
  "14:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE"],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/PATIENT"],
  },
  "15:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: ["VXU_V04/PATIENT"],
  },
  "15:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
  },
  "16:OBX": {
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "17:OBX": {
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "18:RXA": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
  },
  "18:TQ1": {
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "2:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/PATIENT"],
  },
  "2:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: ["VXU_V04/PATIENT"],
  },
  "2:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
  },
  "2:PV1": {
    groupsOpened: ["VXU_V04/PATIENT"],
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
  "6:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE"],
  },
  "7:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE"],
  },
  "8:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/PATIENT"],
  },
  "8:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: ["VXU_V04/PATIENT"],
  },
  "8:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
  },
  "9:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/PATIENT"],
  },
  "9:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: ["VXU_V04/PATIENT"],
  },
  "9:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
  },
  "9:PV1": {
    groupsOpened: ["VXU_V04/PATIENT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
