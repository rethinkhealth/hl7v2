// Generated profile automaton for VXU_V04 (v2.4)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["PID", 2]])],
  [
    2,
    new Map([
      ["GT1", 6],
      ["IN1", 5],
      ["NK1", 8],
      ["ORC", 4],
      ["PD1", 9],
      ["PV1", 7],
      ["RXA", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["OBX", 10],
      ["ORC", 4],
      ["RXA", 3],
      ["RXR", 11],
    ]),
  ],
  [4, new Map([["RXA", 3]])],
  [
    5,
    new Map([
      ["IN1", 5],
      ["IN2", 13],
      ["IN3", 12],
      ["ORC", 4],
      ["RXA", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["GT1", 6],
      ["IN1", 5],
      ["ORC", 4],
      ["RXA", 3],
    ]),
  ],
  [
    7,
    new Map([
      ["GT1", 6],
      ["IN1", 5],
      ["ORC", 4],
      ["PV2", 14],
      ["RXA", 3],
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
      ["RXA", 3],
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
      ["RXA", 3],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 15],
      ["OBX", 10],
      ["ORC", 4],
      ["RXA", 3],
    ]),
  ],
  [
    11,
    new Map([
      ["OBX", 10],
      ["ORC", 4],
      ["RXA", 3],
    ]),
  ],
  [
    12,
    new Map([
      ["IN1", 5],
      ["ORC", 4],
      ["RXA", 3],
    ]),
  ],
  [
    13,
    new Map([
      ["IN1", 5],
      ["IN3", 12],
      ["ORC", 4],
      ["RXA", 3],
    ]),
  ],
  [
    14,
    new Map([
      ["GT1", 6],
      ["IN1", 5],
      ["ORC", 4],
      ["RXA", 3],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 15],
      ["OBX", 10],
      ["ORC", 4],
      ["RXA", 3],
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
  "10:RXA": {
    groupsOpened: ["VXU_V04/ORDER"],
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
  "11:RXA": {
    groupsOpened: ["VXU_V04/ORDER"],
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
  "12:RXA": {
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
  "13:RXA": {
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
  "14:RXA": {
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
  "15:RXA": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: [],
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
  "2:RXA": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
  },
  "3:OBX": {
    groupsOpened: ["VXU_V04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/ORDER/OBSERVATION"],
  },
  "3:RXA": {
    groupsOpened: ["VXU_V04/ORDER"],
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
  "5:RXA": {
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
  "6:RXA": {
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
  "7:RXA": {
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
  "8:RXA": {
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
  "9:RXA": {
    groupsOpened: ["VXU_V04/ORDER"],
    groupsClosed: ["VXU_V04/INSURANCE", "VXU_V04/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
