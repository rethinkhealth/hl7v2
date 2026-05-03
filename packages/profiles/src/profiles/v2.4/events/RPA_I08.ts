// Generated profile automaton for RPA_I08 (v2.4)

export const start = 0;
export const finals = new Set<number>([9, 17, 18, 19, 20, 23, 24, 25, 26, 27]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["AUT", 4],
      ["PRD", 3],
      ["RF1", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["CTD", 7],
      ["PID", 6],
      ["PRD", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["CTD", 8],
      ["PRD", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["AUT", 4],
      ["PRD", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["ACC", 13],
      ["AL1", 10],
      ["DG1", 12],
      ["DRG", 11],
      ["GT1", 15],
      ["IN1", 14],
      ["NK1", 16],
      ["PR1", 9],
    ]),
  ],
  [
    7,
    new Map([
      ["CTD", 7],
      ["PID", 6],
      ["PRD", 3],
    ]),
  ],
  [8, new Map([["PRD", 3]])],
  [
    9,
    new Map([
      ["AUT", 20],
      ["NTE", 17],
      ["OBR", 19],
      ["PR1", 9],
      ["PV1", 18],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 10],
      ["PR1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 10],
      ["DRG", 11],
      ["PR1", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 10],
      ["DG1", 12],
      ["DRG", 11],
      ["PR1", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 10],
      ["DG1", 12],
      ["DRG", 11],
      ["PR1", 9],
    ]),
  ],
  [
    14,
    new Map([
      ["ACC", 13],
      ["AL1", 10],
      ["DG1", 12],
      ["DRG", 11],
      ["IN1", 14],
      ["IN2", 22],
      ["IN3", 21],
      ["PR1", 9],
    ]),
  ],
  [
    15,
    new Map([
      ["ACC", 13],
      ["AL1", 10],
      ["DG1", 12],
      ["DRG", 11],
      ["GT1", 15],
      ["IN1", 14],
      ["PR1", 9],
    ]),
  ],
  [
    16,
    new Map([
      ["ACC", 13],
      ["AL1", 10],
      ["DG1", 12],
      ["DRG", 11],
      ["GT1", 15],
      ["IN1", 14],
      ["NK1", 16],
      ["PR1", 9],
    ]),
  ],
  [17, new Map([["NTE", 17]])],
  [
    18,
    new Map([
      ["NTE", 17],
      ["PV2", 23],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 24],
      ["OBR", 19],
      ["OBX", 25],
      ["PV1", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["CTD", 26],
      ["NTE", 17],
      ["OBR", 19],
      ["PR1", 9],
      ["PV1", 18],
    ]),
  ],
  [
    21,
    new Map([
      ["ACC", 13],
      ["AL1", 10],
      ["DG1", 12],
      ["DRG", 11],
      ["IN1", 14],
      ["PR1", 9],
    ]),
  ],
  [
    22,
    new Map([
      ["ACC", 13],
      ["AL1", 10],
      ["DG1", 12],
      ["DRG", 11],
      ["IN1", 14],
      ["IN3", 21],
      ["PR1", 9],
    ]),
  ],
  [23, new Map([["NTE", 17]])],
  [
    24,
    new Map([
      ["NTE", 24],
      ["OBR", 19],
      ["OBX", 25],
      ["PV1", 18],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 27],
      ["OBR", 19],
      ["OBX", 25],
      ["PV1", 18],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 17],
      ["OBR", 19],
      ["PR1", 9],
      ["PV1", 18],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 27],
      ["OBR", 19],
      ["OBX", 25],
      ["PV1", 18],
    ]),
  ],
]);
export const effects = {
  "10:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "11:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "12:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "13:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "14:ACC": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "14:AL1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "14:DG1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "14:DRG": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/INSURANCE"],
  },
  "14:PR1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "15:ACC": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "15:AL1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "15:DG1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "15:DRG": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/INSURANCE"],
  },
  "15:PR1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
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
  "18:NTE": {
    groupsClosed: ["RPA_I08/VISIT"],
    groupsOpened: [],
  },
  "19:OBR": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
  },
  "19:PV1": {
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RPA_I08/VISIT"],
  },
  "20:NTE": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RPA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "20:OBR": {
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "20:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "20:PV1": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["RPA_I08/VISIT"],
  },
  "21:ACC": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "21:AL1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "21:DG1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "21:DRG": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/INSURANCE"],
  },
  "21:PR1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "22:ACC": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "22:AL1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "22:DG1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "22:DRG": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/INSURANCE"],
  },
  "22:PR1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "23:NTE": {
    groupsClosed: ["RPA_I08/VISIT"],
    groupsOpened: [],
  },
  "24:OBR": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
  },
  "24:PV1": {
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RPA_I08/VISIT"],
  },
  "25:OBR": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
  },
  "25:PV1": {
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RPA_I08/VISIT"],
  },
  "26:NTE": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RPA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "26:OBR": {
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "26:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "26:PV1": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
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
  "2:AUT": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/AUTHORIZATION"],
  },
  "2:PRD": {
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
  "3:PID": {
    groupsClosed: ["RPA_I08/PROVIDER"],
    groupsOpened: [],
  },
  "3:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
  "4:PRD": {
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
  "5:AUT": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/AUTHORIZATION"],
  },
  "5:PRD": {
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
  "6:ACC": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "6:AL1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "6:DG1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "6:DRG": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "6:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/INSURANCE"],
  },
  "6:PR1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "7:PID": {
    groupsClosed: ["RPA_I08/PROVIDER"],
    groupsOpened: [],
  },
  "7:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
  "8:PRD": {
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
  "9:AUT": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "9:NTE": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RPA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "9:OBR": {
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "9:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "9:PV1": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["RPA_I08/VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
