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
  "10:PRD": {
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
  "11:AUT": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE/AUTHORIZATION"],
  },
  "11:NTE": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION",
      "RPA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTHORIZATION"],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "11:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "11:PV1": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION",
    ],
    groupsOpened: ["RPA_I08/VISIT"],
  },
  "12:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "13:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "14:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "15:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "16:ACC": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "16:AL1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "16:DG1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "16:DRG": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/INSURANCE"],
  },
  "16:PR1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "17:ACC": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "17:AL1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "17:DG1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "17:DRG": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/INSURANCE"],
  },
  "17:PR1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "18:ACC": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "18:AL1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "18:DG1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "18:DRG": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/INSURANCE"],
  },
  "18:PR1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "20:NTE": {
    groupsClosed: ["RPA_I08/VISIT"],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
  },
  "21:PV1": {
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RPA_I08/VISIT"],
  },
  "22:NTE": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION",
      "RPA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTHORIZATION"],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "22:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "22:PV1": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION",
    ],
    groupsOpened: ["RPA_I08/VISIT"],
  },
  "23:ACC": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "23:AL1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "23:DG1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "23:DRG": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/INSURANCE"],
  },
  "23:PR1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "24:ACC": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "24:AL1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "24:DG1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "24:DRG": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/INSURANCE"],
  },
  "24:PR1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "25:NTE": {
    groupsClosed: ["RPA_I08/VISIT"],
    groupsOpened: [],
  },
  "26:OBR": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
  },
  "26:PV1": {
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RPA_I08/VISIT"],
  },
  "27:OBR": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
  },
  "27:PV1": {
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RPA_I08/VISIT"],
  },
  "28:NTE": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION",
      "RPA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "28:OBR": {
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTHORIZATION"],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "28:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "28:PV1": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTHORIZATION",
    ],
    groupsOpened: ["RPA_I08/VISIT"],
  },
  "29:OBR": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
  },
  "29:PV1": {
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RPA_I08/VISIT"],
  },
  "2:AUT": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/AUTHORIZATION"],
  },
  "2:PRD": {
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
  "30:OBR": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
  },
  "30:PV1": {
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RPA_I08/VISIT"],
  },
  "5:PID": {
    groupsClosed: ["RPA_I08/PROVIDER"],
    groupsOpened: [],
  },
  "5:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
  "6:PRD": {
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
  "7:AUT": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/AUTHORIZATION"],
  },
  "7:PRD": {
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
  "8:ACC": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "8:AL1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "8:DG1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "8:DRG": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "8:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/INSURANCE"],
  },
  "8:PR1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "9:PID": {
    groupsClosed: ["RPA_I08/PROVIDER"],
    groupsOpened: [],
  },
  "9:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
