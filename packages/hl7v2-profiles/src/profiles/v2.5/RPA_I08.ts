// Generated profile automaton for RPA_I08 (v2.5)

export const start = 0;
export const finals = new Set<number>([10, 18, 19, 20, 21, 24, 25, 26, 27, 28]);
export const alphabet = new Set<string>([
  "ACC",
  "AL1",
  "AUT",
  "CTD",
  "DG1",
  "DRG",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
  "MSA",
  "MSH",
  "NK1",
  "NTE",
  "OBR",
  "OBX",
  "PID",
  "PR1",
  "PRD",
  "PV1",
  "PV2",
  "RF1",
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["AUT", 5],
      ["PRD", 4],
      ["RF1", 6],
    ]),
  ],
  [
    3,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["CTD", 8],
      ["PID", 7],
      ["PRD", 4],
    ]),
  ],
  [
    5,
    new Map([
      ["CTD", 9],
      ["PRD", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["AUT", 5],
      ["PRD", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["ACC", 14],
      ["AL1", 11],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 16],
      ["IN1", 15],
      ["NK1", 17],
      ["PR1", 10],
    ]),
  ],
  [
    8,
    new Map([
      ["CTD", 8],
      ["PID", 7],
      ["PRD", 4],
    ]),
  ],
  [9, new Map([["PRD", 4]])],
  [
    10,
    new Map([
      ["AUT", 21],
      ["NTE", 18],
      ["OBR", 20],
      ["PR1", 10],
      ["PV1", 19],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 11],
      ["PR1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 11],
      ["DRG", 12],
      ["PR1", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 11],
      ["DG1", 13],
      ["DRG", 12],
      ["PR1", 10],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 11],
      ["DG1", 13],
      ["DRG", 12],
      ["PR1", 10],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 14],
      ["AL1", 11],
      ["DG1", 13],
      ["DRG", 12],
      ["IN1", 15],
      ["IN2", 23],
      ["IN3", 22],
      ["PR1", 10],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 14],
      ["AL1", 11],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 16],
      ["IN1", 15],
      ["PR1", 10],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 14],
      ["AL1", 11],
      ["DG1", 13],
      ["DRG", 12],
      ["GT1", 16],
      ["IN1", 15],
      ["NK1", 17],
      ["PR1", 10],
    ]),
  ],
  [18, new Map([["NTE", 18]])],
  [
    19,
    new Map([
      ["NTE", 18],
      ["PV2", 24],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 25],
      ["OBR", 20],
      ["OBX", 26],
      ["PV1", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["CTD", 27],
      ["NTE", 18],
      ["OBR", 20],
      ["PR1", 10],
      ["PV1", 19],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 14],
      ["AL1", 11],
      ["DG1", 13],
      ["DRG", 12],
      ["IN1", 15],
      ["PR1", 10],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 14],
      ["AL1", 11],
      ["DG1", 13],
      ["DRG", 12],
      ["IN1", 15],
      ["IN3", 22],
      ["PR1", 10],
    ]),
  ],
  [24, new Map([["NTE", 18]])],
  [
    25,
    new Map([
      ["NTE", 25],
      ["OBR", 20],
      ["OBX", 26],
      ["PV1", 19],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 28],
      ["OBR", 20],
      ["OBX", 26],
      ["PV1", 19],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 18],
      ["OBR", 20],
      ["PR1", 10],
      ["PV1", 19],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 28],
      ["OBR", 20],
      ["OBX", 26],
      ["PV1", 19],
    ]),
  ],
]);
export const effects = {
  "10:AUT": {
    groupsOpened: ["RPA_I08/PROCEDURE/AUTHORIZATION_2"],
    groupsClosed: [],
  },
  "10:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION_2",
      "RPA_I08/VISIT",
    ],
  },
  "10:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTHORIZATION_2"],
  },
  "10:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "10:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION_2",
    ],
  },
  "11:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "12:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "13:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "14:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "15:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "15:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "15:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "15:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "16:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "16:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "16:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "16:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "17:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "17:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "17:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "17:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "19:NTE": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/VISIT"],
  },
  "20:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "20:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
  },
  "21:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION_2",
      "RPA_I08/VISIT",
    ],
  },
  "21:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTHORIZATION_2"],
  },
  "21:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "21:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION_2",
    ],
  },
  "22:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "22:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "22:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "22:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "22:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "22:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "23:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "23:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "23:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "23:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "23:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "23:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "24:NTE": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/VISIT"],
  },
  "25:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "25:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
  },
  "26:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "26:OBX": {
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "26:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
  },
  "27:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION_2",
      "RPA_I08/VISIT",
    ],
  },
  "27:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTHORIZATION_2"],
  },
  "27:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "27:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION_2",
    ],
  },
  "28:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "28:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
  },
  "2:AUT": {
    groupsOpened: ["RPA_I08/AUTHORIZATION_1"],
    groupsClosed: [],
  },
  "2:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: ["RPA_I08/AUTHORIZATION_1"],
  },
  "4:PID": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/PROVIDER"],
  },
  "4:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: [],
  },
  "5:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: ["RPA_I08/AUTHORIZATION_1"],
  },
  "6:AUT": {
    groupsOpened: ["RPA_I08/AUTHORIZATION_1"],
    groupsClosed: [],
  },
  "6:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: ["RPA_I08/AUTHORIZATION_1"],
  },
  "7:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "7:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "7:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "7:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "7:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "7:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "8:PID": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/PROVIDER"],
  },
  "8:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: [],
  },
  "9:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: ["RPA_I08/AUTHORIZATION_1"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
