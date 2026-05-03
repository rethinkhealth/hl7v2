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
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "10:PDA": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "10:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "11:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "11:PDA": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "11:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "12:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "12:PDA": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "12:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "13:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "13:PDA": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "13:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "14:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "14:PDA": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "14:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "15:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "15:PDA": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "15:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "4:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "4:PDA": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "4:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
  "9:OBX": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "9:PDA": {
    groupsClosed: ["ADT_A03/PROCEDURE"],
    groupsOpened: [],
  },
  "9:PR1": {
    groupsClosed: [],
    groupsOpened: ["ADT_A03/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
