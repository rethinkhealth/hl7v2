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
    groupsClosed: ["VXU_V04/PATIENT"],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: ["VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/PATIENT"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "12:RXA": {
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
  },
  "13:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "14:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "15:GT1": {
    groupsClosed: ["VXU_V04/PATIENT"],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: ["VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "18:RXA": {
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
    groupsOpened: [],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "2:GT1": {
    groupsClosed: ["VXU_V04/PATIENT"],
    groupsOpened: [],
  },
  "2:IN1": {
    groupsClosed: ["VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "2:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "2:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/PATIENT"],
  },
  "5:RXA": {
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
    groupsOpened: [],
  },
  "5:TQ1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
  },
  "6:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "6:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "7:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "7:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "8:GT1": {
    groupsClosed: ["VXU_V04/PATIENT"],
    groupsOpened: [],
  },
  "8:IN1": {
    groupsClosed: ["VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "8:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "9:GT1": {
    groupsClosed: ["VXU_V04/PATIENT"],
    groupsOpened: [],
  },
  "9:IN1": {
    groupsClosed: ["VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "9:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "9:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
