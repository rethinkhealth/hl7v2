// Generated profile automaton for RPA_I08 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  11, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30,
]);
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
  "PRT",
  "PV1",
  "PV2",
  "RF1",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["AUT", 6],
      ["PRD", 5],
      ["RF1", 7],
    ]),
  ],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["CTD", 9],
      ["PID", 8],
      ["PRD", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["CTD", 10],
      ["PRD", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["AUT", 6],
      ["PRD", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["ACC", 15],
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 17],
      ["IN1", 16],
      ["NK1", 18],
      ["PR1", 11],
    ]),
  ],
  [
    9,
    new Map([
      ["CTD", 9],
      ["PID", 8],
      ["PRD", 5],
    ]),
  ],
  [10, new Map([["PRD", 5]])],
  [
    11,
    new Map([
      ["AUT", 22],
      ["NTE", 19],
      ["OBR", 21],
      ["PR1", 11],
      ["PV1", 20],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 12],
      ["PR1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 12],
      ["DRG", 13],
      ["PR1", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["PR1", 11],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["PR1", 11],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 15],
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["IN1", 16],
      ["IN2", 24],
      ["IN3", 23],
      ["PR1", 11],
    ]),
  ],
  [
    17,
    new Map([
      ["ACC", 15],
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 17],
      ["IN1", 16],
      ["PR1", 11],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 15],
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 17],
      ["IN1", 16],
      ["NK1", 18],
      ["PR1", 11],
    ]),
  ],
  [19, new Map([["NTE", 19]])],
  [
    20,
    new Map([
      ["NTE", 19],
      ["PV2", 25],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 26],
      ["OBR", 21],
      ["OBX", 27],
      ["PV1", 20],
    ]),
  ],
  [
    22,
    new Map([
      ["CTD", 28],
      ["NTE", 19],
      ["OBR", 21],
      ["PR1", 11],
      ["PV1", 20],
    ]),
  ],
  [
    23,
    new Map([
      ["ACC", 15],
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["IN1", 16],
      ["PR1", 11],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 15],
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["IN1", 16],
      ["IN3", 23],
      ["PR1", 11],
    ]),
  ],
  [25, new Map([["NTE", 19]])],
  [
    26,
    new Map([
      ["NTE", 26],
      ["OBR", 21],
      ["OBX", 27],
      ["PV1", 20],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 29],
      ["OBR", 21],
      ["OBX", 27],
      ["PRT", 30],
      ["PV1", 20],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 19],
      ["OBR", 21],
      ["PR1", 11],
      ["PV1", 20],
    ]),
  ],
  [
    29,
    new Map([
      ["NTE", 29],
      ["OBR", 21],
      ["OBX", 27],
      ["PV1", 20],
    ]),
  ],
  [
    30,
    new Map([
      ["NTE", 29],
      ["OBR", 21],
      ["OBX", 27],
      ["PRT", 30],
      ["PV1", 20],
    ]),
  ],
]);
export const effects = {
  "2:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
  },
  "2:AUT": {
    groupsOpened: ["RPA_I08/AUTHORIZATION"],
    groupsClosed: [],
  },
  "5:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/PROVIDER"],
  },
  "6:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
  },
  "7:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
  },
  "7:AUT": {
    groupsOpened: ["RPA_I08/AUTHORIZATION"],
    groupsClosed: [],
  },
  "8:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "8:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "8:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "8:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "8:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "8:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "9:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/PROVIDER"],
  },
  "10:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
  },
  "11:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "11:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION",
      "RPA_I08/VISIT",
    ],
  },
  "11:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION",
    ],
  },
  "11:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTHORIZATION"],
  },
  "11:AUT": {
    groupsOpened: ["RPA_I08/PROCEDURE/AUTHORIZATION"],
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
  "15:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "16:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "16:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "16:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "16:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "17:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "17:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "17:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "17:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "18:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "18:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "18:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "18:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "18:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "20:NTE": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/VISIT"],
  },
  "21:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "21:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
  },
  "21:OBX": {
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "22:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "22:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION",
      "RPA_I08/VISIT",
    ],
  },
  "22:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION",
    ],
  },
  "22:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTHORIZATION"],
  },
  "23:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "23:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "23:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "23:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "23:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "23:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "24:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "24:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "24:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "24:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "24:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "24:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "25:NTE": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/VISIT"],
  },
  "26:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "26:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
  },
  "26:OBX": {
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "27:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "27:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
  },
  "28:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "28:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION",
      "RPA_I08/VISIT",
    ],
  },
  "28:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION",
    ],
  },
  "28:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTHORIZATION"],
  },
  "29:OBX": {
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "29:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "29:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
  },
  "30:OBX": {
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "30:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "30:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
