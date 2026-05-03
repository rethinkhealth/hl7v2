// Generated profile automaton for RPA_I08 (v2.5.1)

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
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "10:NTE": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RPA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "10:OBR": {
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "10:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "10:PV1": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["RPA_I08/VISIT"],
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
  "14:PR1": {
    groupsClosed: [],
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
  "19:NTE": {
    groupsClosed: ["RPA_I08/VISIT"],
    groupsOpened: [],
  },
  "20:OBR": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
  },
  "20:PV1": {
    groupsClosed: ["RPA_I08/OBSERVATION", "RPA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RPA_I08/VISIT"],
  },
  "21:NTE": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RPA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "21:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "21:PV1": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["RPA_I08/VISIT"],
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
  "24:NTE": {
    groupsClosed: ["RPA_I08/VISIT"],
    groupsOpened: [],
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
  "27:NTE": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RPA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "27:OBR": {
    groupsClosed: ["RPA_I08/PROCEDURE", "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "27:PR1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "27:PV1": {
    groupsClosed: [
      "RPA_I08/OBSERVATION",
      "RPA_I08/PROCEDURE",
      "RPA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["RPA_I08/VISIT"],
  },
  "28:OBR": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/OBSERVATION/RESULTS"],
  },
  "28:PV1": {
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
  "4:PID": {
    groupsClosed: ["RPA_I08/PROVIDER"],
    groupsOpened: [],
  },
  "4:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
  "5:PRD": {
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
  "6:AUT": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/AUTHORIZATION"],
  },
  "6:PRD": {
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
  "7:ACC": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "7:AL1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "7:DG1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "7:DRG": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: [],
  },
  "7:IN1": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/INSURANCE"],
  },
  "7:PR1": {
    groupsClosed: ["RPA_I08/INSURANCE"],
    groupsOpened: ["RPA_I08/PROCEDURE"],
  },
  "8:PID": {
    groupsClosed: ["RPA_I08/PROVIDER"],
    groupsOpened: [],
  },
  "8:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
  "9:PRD": {
    groupsClosed: ["RPA_I08/AUTHORIZATION"],
    groupsOpened: ["RPA_I08/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
