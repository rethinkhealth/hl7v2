// Generated profile automaton for ADT_A03 (v2.3)

export const start = 0;
export const finals = new Set<number>([4, 6, 7, 8, 9, 10, 11, 12]);
export const alphabet = new Set<string>([
  "DB1",
  "DG1",
  "DRG",
  "EVN",
  "MSH",
  "OBX",
  "PD1",
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
      ["PD1", 5],
      ["PV1", 4],
    ]),
  ],
  [
    4,
    new Map([
      ["DB1", 10],
      ["DG1", 9],
      ["DRG", 8],
      ["OBX", 6],
      ["PR1", 7],
      ["PV2", 11],
    ]),
  ],
  [5, new Map([["PV1", 4]])],
  [6, new Map([["OBX", 6]])],
  [
    7,
    new Map([
      ["OBX", 6],
      ["PR1", 7],
      ["ROL", 12],
    ]),
  ],
  [
    8,
    new Map([
      ["OBX", 6],
      ["PR1", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["DG1", 9],
      ["DRG", 8],
      ["OBX", 6],
      ["PR1", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["DB1", 10],
      ["DG1", 9],
      ["DRG", 8],
      ["OBX", 6],
      ["PR1", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["DB1", 10],
      ["DG1", 9],
      ["DRG", 8],
      ["OBX", 6],
      ["PR1", 7],
    ]),
  ],
  [
    12,
    new Map([
      ["OBX", 6],
      ["PR1", 7],
      ["ROL", 12],
    ]),
  ],
]);
export const effects = {
  "4:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "4:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "7:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "7:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "8:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "8:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "9:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
  "9:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "10:OBX": {
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
  "11:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "12:PR1": {
    groupsOpened: ["ADT_A03/PROCEDURE"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: [],
    groupsClosed: ["ADT_A03/PROCEDURE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
