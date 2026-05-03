// Generated profile automaton for VXU_V04 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
]);
export const alphabet = new Set<string>([
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["PID", 2]])],
  [
    2,
    new Map([
      ["IN1", 5],
      ["NK1", 7],
      ["ORC", 4],
      ["PD1", 8],
      ["PV1", 6],
      ["RXA", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["OBX", 9],
      ["ORC", 4],
      ["RXA", 3],
      ["RXR", 10],
    ]),
  ],
  [4, new Map([["RXA", 3]])],
  [
    5,
    new Map([
      ["IN1", 5],
      ["IN2", 12],
      ["IN3", 11],
      ["ORC", 4],
      ["RXA", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["IN1", 5],
      ["ORC", 4],
      ["PV2", 13],
      ["RXA", 3],
    ]),
  ],
  [
    7,
    new Map([
      ["IN1", 5],
      ["NK1", 7],
      ["ORC", 4],
      ["PV1", 6],
      ["RXA", 3],
    ]),
  ],
  [
    8,
    new Map([
      ["IN1", 5],
      ["NK1", 7],
      ["ORC", 4],
      ["PV1", 6],
      ["RXA", 3],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 14],
      ["OBX", 9],
      ["ORC", 4],
      ["RXA", 3],
    ]),
  ],
  [
    10,
    new Map([
      ["OBX", 9],
      ["ORC", 4],
      ["RXA", 3],
    ]),
  ],
  [
    11,
    new Map([
      ["IN1", 5],
      ["ORC", 4],
      ["RXA", 3],
    ]),
  ],
  [
    12,
    new Map([
      ["IN1", 5],
      ["IN3", 11],
      ["ORC", 4],
      ["RXA", 3],
    ]),
  ],
  [
    13,
    new Map([
      ["IN1", 5],
      ["ORC", 4],
      ["RXA", 3],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["OBX", 9],
      ["ORC", 4],
      ["RXA", 3],
    ]),
  ],
]);
export const effects = {
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "10:RXA": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "11:RXA": {
    groupsClosed: ["VXU_V04/INSURANCE"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "12:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "12:RXA": {
    groupsClosed: ["VXU_V04/INSURANCE"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "13:IN1": {
    groupsClosed: ["VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "13:RXA": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "14:RXA": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER"],
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
  "2:RXA": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "3:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "3:ORC": {
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "3:RXA": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "5:IN1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "5:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "5:RXA": {
    groupsClosed: ["VXU_V04/INSURANCE"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "6:IN1": {
    groupsClosed: ["VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "6:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "6:RXA": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "7:IN1": {
    groupsClosed: ["VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "7:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "7:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/PATIENT"],
  },
  "7:RXA": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "8:IN1": {
    groupsClosed: ["VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/INSURANCE"],
  },
  "8:ORC": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "8:PV1": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/PATIENT"],
  },
  "8:RXA": {
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
    groupsOpened: ["VXU_V04/ORDER"],
  },
  "9:RXA": {
    groupsClosed: [],
    groupsOpened: ["VXU_V04/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
