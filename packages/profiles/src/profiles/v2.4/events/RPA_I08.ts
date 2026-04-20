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
  "2:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
  },
  "2:AUT": {
    groupsOpened: ["RPA_I08/AUTHORIZATION"],
    groupsClosed: [],
  },
  "3:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: [],
  },
  "3:PID": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/PROVIDER"],
  },
  "4:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
  },
  "5:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
  },
  "5:AUT": {
    groupsOpened: ["RPA_I08/AUTHORIZATION"],
    groupsClosed: [],
  },
  "6:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "6:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "6:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "6:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "6:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "6:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "7:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: [],
  },
  "7:PID": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/PROVIDER"],
  },
  "8:PRD": {
    groupsOpened: ["RPA_I08/PROVIDER"],
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
  },
  "9:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "9:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RPA_I08/VISIT",
    ],
  },
  "9:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "9:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "9:AUT": {
    groupsOpened: ["RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsClosed: [],
  },
  "10:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: [],
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
  "14:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "14:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "14:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "14:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "14:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "14:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "15:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "15:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "15:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "15:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "15:IN1": {
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
  "16:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "18:NTE": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/VISIT"],
  },
  "19:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "19:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
  },
  "19:OBX": {
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "20:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "20:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RPA_I08/VISIT",
    ],
  },
  "20:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "20:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "21:IN1": {
    groupsOpened: ["RPA_I08/INSURANCE"],
    groupsClosed: [],
  },
  "21:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "21:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "21:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "21:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "21:ACC": {
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
  "22:AL1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "22:DRG": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "22:DG1": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "22:ACC": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/INSURANCE"],
  },
  "23:NTE": {
    groupsOpened: [],
    groupsClosed: ["RPA_I08/VISIT"],
  },
  "24:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "24:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
  },
  "24:OBX": {
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "25:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "25:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
  },
  "26:PR1": {
    groupsOpened: ["RPA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "26:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RPA_I08/VISIT",
    ],
  },
  "26:PV1": {
    groupsOpened: ["RPA_I08/VISIT"],
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "26:OBR": {
    groupsOpened: ["RPA_I08/OBSERVATION"],
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
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
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
