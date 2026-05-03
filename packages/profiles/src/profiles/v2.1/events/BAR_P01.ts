// Generated profile automaton for BAR_P01 (v2.1)

export const start = 0;
export const finals = new Set<number>([3, 4, 5, 6, 7, 8, 9, 10, 11]);
export const alphabet = new Set<string>([
  "ACC",
  "DG1",
  "EVN",
  "GT1",
  "IN1",
  "MSH",
  "NK1",
  "PID",
  "PR1",
  "PV1",
  "UB1",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [
    3,
    new Map([
      ["ACC", 5],
      ["DG1", 10],
      ["GT1", 8],
      ["IN1", 6],
      ["NK1", 7],
      ["PR1", 9],
      ["PV1", 11],
      ["UB1", 4],
    ]),
  ],
  [
    4,
    new Map([
      ["ACC", 5],
      ["DG1", 10],
      ["GT1", 8],
      ["IN1", 6],
      ["NK1", 7],
      ["PR1", 9],
      ["PV1", 11],
      ["UB1", 4],
    ]),
  ],
  [
    5,
    new Map([
      ["ACC", 5],
      ["DG1", 10],
      ["GT1", 8],
      ["IN1", 6],
      ["NK1", 7],
      ["PR1", 9],
      ["PV1", 11],
      ["UB1", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["ACC", 5],
      ["DG1", 10],
      ["GT1", 8],
      ["IN1", 6],
      ["NK1", 7],
      ["PR1", 9],
      ["PV1", 11],
      ["UB1", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["ACC", 5],
      ["DG1", 10],
      ["GT1", 8],
      ["IN1", 6],
      ["NK1", 7],
      ["PR1", 9],
      ["PV1", 11],
      ["UB1", 4],
    ]),
  ],
  [
    8,
    new Map([
      ["ACC", 5],
      ["DG1", 10],
      ["GT1", 8],
      ["IN1", 6],
      ["NK1", 7],
      ["PR1", 9],
      ["PV1", 11],
      ["UB1", 4],
    ]),
  ],
  [
    9,
    new Map([
      ["ACC", 5],
      ["DG1", 10],
      ["GT1", 8],
      ["IN1", 6],
      ["NK1", 7],
      ["PR1", 9],
      ["PV1", 11],
      ["UB1", 4],
    ]),
  ],
  [
    10,
    new Map([
      ["ACC", 5],
      ["DG1", 10],
      ["GT1", 8],
      ["IN1", 6],
      ["NK1", 7],
      ["PR1", 9],
      ["PV1", 11],
      ["UB1", 4],
    ]),
  ],
  [
    11,
    new Map([
      ["ACC", 5],
      ["DG1", 10],
      ["GT1", 8],
      ["IN1", 6],
      ["NK1", 7],
      ["PR1", 9],
      ["PV1", 11],
      ["UB1", 4],
    ]),
  ],
]);
export const effects = {
  "10:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "3:ACC": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "3:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "3:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "3:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "3:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "3:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "3:UB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:ACC": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "4:UB1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:ACC": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "5:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:IN1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "6:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:NK1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "7:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "8:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "8:GT1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "8:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "8:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "9:DG1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "9:PR1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
  "9:PV1": {
    groupsClosed: [],
    groupsOpened: ["BAR_P01/VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
