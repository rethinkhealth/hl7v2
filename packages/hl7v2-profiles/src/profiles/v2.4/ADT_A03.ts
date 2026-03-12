// Generated profile automaton for ADT_A03 (v2.4)

export const start = 0;
export const finals = new Set<number>([4, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
export const alphabet = new Set<string>([
  "DB1",
  "DG1",
  "DRG",
  "EVN",
  "MSH",
  "OBX",
  "PD1",
  "PDA",
  "PID",
  "PR1",
  "PV1",
  "PV2",
  "ROL",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [
    3,
    new Map([
      ["PD1", 6],
      ["PV1", 4],
      ["ROL", 5],
    ]),
  ],
  [
    4,
    new Map([
      ["DB1", 12],
      ["DG1", 11],
      ["DRG", 10],
      ["OBX", 8],
      ["PDA", 7],
      ["PR1", 9],
      ["PV2", 14],
      ["ROL", 13],
    ]),
  ],
  [
    5,
    new Map([
      ["PV1", 4],
      ["ROL", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["PV1", 4],
      ["ROL", 5],
    ]),
  ],
  [7, new Map([])],
  [
    8,
    new Map([
      ["OBX", 8],
      ["PDA", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["OBX", 8],
      ["PDA", 7],
      ["PR1", 9],
      ["ROL", 15],
    ]),
  ],
  [
    10,
    new Map([
      ["OBX", 8],
      ["PDA", 7],
      ["PR1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["DG1", 11],
      ["DRG", 10],
      ["OBX", 8],
      ["PDA", 7],
      ["PR1", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["DB1", 12],
      ["DG1", 11],
      ["DRG", 10],
      ["OBX", 8],
      ["PDA", 7],
      ["PR1", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["DB1", 12],
      ["DG1", 11],
      ["DRG", 10],
      ["OBX", 8],
      ["PDA", 7],
      ["PR1", 9],
      ["ROL", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["DB1", 12],
      ["DG1", 11],
      ["DRG", 10],
      ["OBX", 8],
      ["PDA", 7],
      ["PR1", 9],
      ["ROL", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["OBX", 8],
      ["PDA", 7],
      ["PR1", 9],
      ["ROL", 15],
    ]),
  ],
]);
export const effects = {
  "10:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "10:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "10:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "11:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "11:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "12:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "12:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "13:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "13:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "14:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "14:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "15:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "15:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "4:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "4:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "4:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "9:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "9:PDA": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "9:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
