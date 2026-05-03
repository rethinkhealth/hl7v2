// Generated profile automaton for RRI_I12 (v2.3)

export const start = 0;
export const finals = new Set<number>([
  6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
]);
export const alphabet = new Set<string>([
  "ACC",
  "AL1",
  "AUT",
  "CTD",
  "DG1",
  "DRG",
  "MSA",
  "MSH",
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
  [
    1,
    new Map([
      ["AUT", 3],
      ["MSA", 5],
      ["PRD", 2],
      ["RF1", 4],
    ]),
  ],
  [
    2,
    new Map([
      ["CTD", 7],
      ["PID", 6],
      ["PRD", 2],
    ]),
  ],
  [
    3,
    new Map([
      ["CTD", 8],
      ["PRD", 2],
    ]),
  ],
  [
    4,
    new Map([
      ["AUT", 3],
      ["PRD", 2],
    ]),
  ],
  [
    5,
    new Map([
      ["AUT", 3],
      ["PRD", 2],
      ["RF1", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["ACC", 16],
      ["AL1", 13],
      ["DG1", 15],
      ["DRG", 14],
      ["NTE", 9],
      ["OBR", 11],
      ["PR1", 12],
      ["PV1", 10],
    ]),
  ],
  [
    7,
    new Map([
      ["CTD", 7],
      ["PID", 6],
      ["PRD", 2],
    ]),
  ],
  [8, new Map([["PRD", 2]])],
  [9, new Map([["NTE", 9]])],
  [
    10,
    new Map([
      ["NTE", 9],
      ["PV2", 17],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 18],
      ["OBR", 11],
      ["OBX", 19],
      ["PV1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["AUT", 20],
      ["NTE", 9],
      ["OBR", 11],
      ["PR1", 12],
      ["PV1", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 13],
      ["NTE", 9],
      ["OBR", 11],
      ["PR1", 12],
      ["PV1", 10],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 13],
      ["DRG", 14],
      ["NTE", 9],
      ["OBR", 11],
      ["PR1", 12],
      ["PV1", 10],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 13],
      ["DG1", 15],
      ["DRG", 14],
      ["NTE", 9],
      ["OBR", 11],
      ["PR1", 12],
      ["PV1", 10],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 13],
      ["DG1", 15],
      ["DRG", 14],
      ["NTE", 9],
      ["OBR", 11],
      ["PR1", 12],
      ["PV1", 10],
    ]),
  ],
  [17, new Map([["NTE", 9]])],
  [
    18,
    new Map([
      ["NTE", 18],
      ["OBR", 11],
      ["OBX", 19],
      ["PV1", 10],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 21],
      ["OBR", 11],
      ["OBX", 19],
      ["PV1", 10],
    ]),
  ],
  [
    20,
    new Map([
      ["CTD", 22],
      ["NTE", 9],
      ["OBR", 11],
      ["PR1", 12],
      ["PV1", 10],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 21],
      ["OBR", 11],
      ["OBX", 19],
      ["PV1", 10],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 9],
      ["OBR", 11],
      ["PR1", 12],
      ["PV1", 10],
    ]),
  ],
]);
export const effects = {
  "10:NTE": {
    groupsClosed: ["RRI_I12/VISIT"],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/RESULTS"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/RESULTS/OBSERVATION"],
  },
  "11:PV1": {
    groupsClosed: ["RRI_I12/RESULTS", "RRI_I12/RESULTS/OBSERVATION"],
    groupsOpened: ["RRI_I12/VISIT"],
  },
  "12:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "12:NTE": {
    groupsClosed: [
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
      "RRI_I12/RESULTS",
      "RRI_I12/VISIT",
    ],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RRI_I12/RESULTS"],
  },
  "12:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "12:PV1": {
    groupsClosed: [
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
      "RRI_I12/RESULTS",
    ],
    groupsOpened: ["RRI_I12/VISIT"],
  },
  "13:NTE": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/RESULTS", "RRI_I12/VISIT"],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/RESULTS"],
  },
  "13:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "13:PV1": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/RESULTS"],
    groupsOpened: ["RRI_I12/VISIT"],
  },
  "14:NTE": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/RESULTS", "RRI_I12/VISIT"],
    groupsOpened: [],
  },
  "14:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/RESULTS"],
  },
  "14:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "14:PV1": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/RESULTS"],
    groupsOpened: ["RRI_I12/VISIT"],
  },
  "15:NTE": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/RESULTS", "RRI_I12/VISIT"],
    groupsOpened: [],
  },
  "15:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/RESULTS"],
  },
  "15:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "15:PV1": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/RESULTS"],
    groupsOpened: ["RRI_I12/VISIT"],
  },
  "16:NTE": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/RESULTS", "RRI_I12/VISIT"],
    groupsOpened: [],
  },
  "16:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/RESULTS"],
  },
  "16:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "16:PV1": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/RESULTS"],
    groupsOpened: ["RRI_I12/VISIT"],
  },
  "17:NTE": {
    groupsClosed: ["RRI_I12/VISIT"],
    groupsOpened: [],
  },
  "18:OBR": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/RESULTS"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/RESULTS/OBSERVATION"],
  },
  "18:PV1": {
    groupsClosed: ["RRI_I12/RESULTS", "RRI_I12/RESULTS/OBSERVATION"],
    groupsOpened: ["RRI_I12/VISIT"],
  },
  "19:OBR": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/RESULTS"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/RESULTS/OBSERVATION"],
  },
  "19:PV1": {
    groupsClosed: ["RRI_I12/RESULTS", "RRI_I12/RESULTS/OBSERVATION"],
    groupsOpened: ["RRI_I12/VISIT"],
  },
  "1:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/AUTHORIZATION"],
  },
  "1:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION"],
    groupsOpened: ["RRI_I12/PROVIDER"],
  },
  "20:NTE": {
    groupsClosed: [
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
      "RRI_I12/RESULTS",
      "RRI_I12/VISIT",
    ],
    groupsOpened: [],
  },
  "20:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RRI_I12/RESULTS"],
  },
  "20:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "20:PV1": {
    groupsClosed: [
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
      "RRI_I12/RESULTS",
    ],
    groupsOpened: ["RRI_I12/VISIT"],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/RESULTS"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/RESULTS/OBSERVATION"],
  },
  "21:PV1": {
    groupsClosed: ["RRI_I12/RESULTS", "RRI_I12/RESULTS/OBSERVATION"],
    groupsOpened: ["RRI_I12/VISIT"],
  },
  "22:NTE": {
    groupsClosed: [
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
      "RRI_I12/RESULTS",
      "RRI_I12/VISIT",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RRI_I12/RESULTS"],
  },
  "22:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "22:PV1": {
    groupsClosed: [
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
      "RRI_I12/RESULTS",
    ],
    groupsOpened: ["RRI_I12/VISIT"],
  },
  "2:PID": {
    groupsClosed: ["RRI_I12/PROVIDER"],
    groupsOpened: [],
  },
  "2:PRD": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROVIDER"],
  },
  "3:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION"],
    groupsOpened: ["RRI_I12/PROVIDER"],
  },
  "4:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/AUTHORIZATION"],
  },
  "4:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION"],
    groupsOpened: ["RRI_I12/PROVIDER"],
  },
  "5:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/AUTHORIZATION"],
  },
  "5:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION"],
    groupsOpened: ["RRI_I12/PROVIDER"],
  },
  "6:NTE": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/RESULTS", "RRI_I12/VISIT"],
    groupsOpened: [],
  },
  "6:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/RESULTS"],
  },
  "6:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "6:PV1": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/RESULTS"],
    groupsOpened: ["RRI_I12/VISIT"],
  },
  "7:PID": {
    groupsClosed: ["RRI_I12/PROVIDER"],
    groupsOpened: [],
  },
  "7:PRD": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROVIDER"],
  },
  "8:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION"],
    groupsOpened: ["RRI_I12/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
