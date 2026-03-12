// Generated profile automaton for VXU_V04 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  2, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18,
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["PID", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["GT1", 6],
      ["IN1", 5],
      ["NK1", 8],
      ["ORC", 4],
      ["PD1", 9],
      ["PV1", 7],
    ]),
  ],
  [
    3,
    new Map([
      ["PID", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["RXA", 10],
      ["TQ1", 11],
    ]),
  ],
  [
    5,
    new Map([
      ["IN1", 5],
      ["IN2", 13],
      ["IN3", 12],
      ["ORC", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["GT1", 6],
      ["IN1", 5],
      ["ORC", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["GT1", 6],
      ["IN1", 5],
      ["ORC", 4],
      ["PV2", 14],
    ]),
  ],
  [
    8,
    new Map([
      ["GT1", 6],
      ["IN1", 5],
      ["NK1", 8],
      ["ORC", 4],
      ["PV1", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["GT1", 6],
      ["IN1", 5],
      ["NK1", 8],
      ["ORC", 4],
      ["PV1", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["OBX", 15],
      ["ORC", 4],
      ["RXR", 16],
    ]),
  ],
  [
    11,
    new Map([
      ["RXA", 10],
      ["TQ1", 11],
      ["TQ2", 17],
    ]),
  ],
  [
    12,
    new Map([
      ["IN1", 5],
      ["ORC", 4],
    ]),
  ],
  [
    13,
    new Map([
      ["IN1", 5],
      ["IN3", 12],
      ["ORC", 4],
    ]),
  ],
  [
    14,
    new Map([
      ["GT1", 6],
      ["IN1", 5],
      ["ORC", 4],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 18],
      ["OBX", 15],
      ["ORC", 4],
    ]),
  ],
  [
    16,
    new Map([
      ["OBX", 15],
      ["ORC", 4],
    ]),
  ],
  [
    17,
    new Map([
      ["RXA", 10],
      ["TQ1", 11],
      ["TQ2", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 18],
      ["OBX", 15],
      ["ORC", 4],
    ]),
  ],
]);
export const effects = {
  "10:OBX": {
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "11:RXA": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
  },
  "11:TQ1": {
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE"],
  },
  "13:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE"],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/PATIENT"],
  },
  "14:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: ["VXU_V04/PATIENT"],
  },
  "14:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
  },
  "15:OBX": {
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "16:OBX": {
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "17:RXA": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
  },
  "17:TQ1": {
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:ORC": {
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
  "4:RXA": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/ORDER/TIMING"],
  },
  "4:TQ1": {
    groupsOpened: ["VXU_V04/ORDER/TIMING"],
    groupsClosed: [],
  },
  "5:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE"],
  },
  "6:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE"],
  },
  "7:GT1": {
    groupsOpened: [],
    groupsClosed: ["VXU_V04/PATIENT"],
  },
  "7:IN1": {
    groupsOpened: ["VXU_V04/INSURANCE"],
    groupsClosed: ["VXU_V04/PATIENT"],
  },
  "7:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
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
  "8:PV1": {
    groupsOpened: ["VXU_V04/PATIENT"],
    groupsClosed: [],
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
