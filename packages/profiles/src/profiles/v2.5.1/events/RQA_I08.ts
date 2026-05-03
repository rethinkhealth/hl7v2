// Generated profile automaton for RQA_I08 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27,
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
      ["AUT", 3],
      ["PRD", 2],
      ["RF1", 4],
      ["SFT", 5],
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
      ["SFT", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["ACC", 16],
      ["AL1", 13],
      ["DG1", 15],
      ["DRG", 14],
      ["GT1", 18],
      ["IN1", 17],
      ["NK1", 19],
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
      ["PV2", 20],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 21],
      ["OBR", 11],
      ["OBX", 22],
      ["PV1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["AUT", 23],
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
  [
    17,
    new Map([
      ["ACC", 16],
      ["AL1", 13],
      ["DG1", 15],
      ["DRG", 14],
      ["IN1", 17],
      ["IN2", 25],
      ["IN3", 24],
      ["NTE", 9],
      ["OBR", 11],
      ["PR1", 12],
      ["PV1", 10],
    ]),
  ],
  [
    18,
    new Map([
      ["GT1", 18],
      ["IN1", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["ACC", 16],
      ["AL1", 13],
      ["DG1", 15],
      ["DRG", 14],
      ["GT1", 18],
      ["IN1", 17],
      ["NK1", 19],
      ["NTE", 9],
      ["OBR", 11],
      ["PR1", 12],
      ["PV1", 10],
    ]),
  ],
  [20, new Map([["NTE", 9]])],
  [
    21,
    new Map([
      ["NTE", 21],
      ["OBR", 11],
      ["OBX", 22],
      ["PV1", 10],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 26],
      ["OBR", 11],
      ["OBX", 22],
      ["PV1", 10],
    ]),
  ],
  [
    23,
    new Map([
      ["CTD", 27],
      ["NTE", 9],
      ["OBR", 11],
      ["PR1", 12],
      ["PV1", 10],
    ]),
  ],
  [
    24,
    new Map([
      ["ACC", 16],
      ["AL1", 13],
      ["DG1", 15],
      ["DRG", 14],
      ["IN1", 17],
      ["NTE", 9],
      ["OBR", 11],
      ["PR1", 12],
      ["PV1", 10],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 16],
      ["AL1", 13],
      ["DG1", 15],
      ["DRG", 14],
      ["IN1", 17],
      ["IN3", 24],
      ["NTE", 9],
      ["OBR", 11],
      ["PR1", 12],
      ["PV1", 10],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 26],
      ["OBR", 11],
      ["OBX", 22],
      ["PV1", 10],
    ]),
  ],
  [
    27,
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
    groupsClosed: ["RQA_I08/VISIT"],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/OBSERVATION/RESULTS"],
  },
  "11:PV1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "12:AUT": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "12:NTE": {
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RQA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: ["RQA_I08/PROCEDURE", "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "12:PR1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "12:PV1": {
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "13:NTE": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: ["RQA_I08/PROCEDURE"],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "13:PR1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "13:PV1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE"],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "14:NTE": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
    groupsOpened: [],
  },
  "14:OBR": {
    groupsClosed: ["RQA_I08/PROCEDURE"],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "14:PR1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "14:PV1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE"],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "15:NTE": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
    groupsOpened: [],
  },
  "15:OBR": {
    groupsClosed: ["RQA_I08/PROCEDURE"],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "15:PR1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "15:PV1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE"],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "16:NTE": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
    groupsOpened: [],
  },
  "16:OBR": {
    groupsClosed: ["RQA_I08/PROCEDURE"],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "16:PR1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "16:PV1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE"],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "17:ACC": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "17:AL1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "17:DG1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "17:DRG": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "17:NTE": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "17:OBR": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "17:PR1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "17:PV1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "18:IN1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "19:ACC": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "19:AL1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "19:DG1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "19:DRG": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "19:GT1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE"],
  },
  "19:IN1": {
    groupsClosed: [],
    groupsOpened: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "19:NTE": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "19:OBR": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "19:PR1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "19:PV1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "1:AUT": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/AUTHORIZATION"],
  },
  "1:PRD": {
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
    groupsOpened: ["RQA_I08/PROVIDER"],
  },
  "20:NTE": {
    groupsClosed: ["RQA_I08/VISIT"],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/OBSERVATION/RESULTS"],
  },
  "21:PV1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "22:OBR": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/OBSERVATION/RESULTS"],
  },
  "22:PV1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "23:NTE": {
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RQA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: ["RQA_I08/PROCEDURE", "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "23:PR1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "23:PV1": {
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "24:ACC": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "24:AL1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "24:DG1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "24:DRG": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "24:NTE": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "24:OBR": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "24:PR1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "24:PV1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "25:ACC": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "25:AL1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "25:DG1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "25:DRG": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "25:NTE": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "25:OBR": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "25:PR1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "25:PV1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "26:OBR": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/OBSERVATION/RESULTS"],
  },
  "26:PV1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "27:NTE": {
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RQA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "27:OBR": {
    groupsClosed: ["RQA_I08/PROCEDURE", "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "27:PR1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "27:PV1": {
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "2:PID": {
    groupsClosed: ["RQA_I08/PROVIDER"],
    groupsOpened: [],
  },
  "2:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROVIDER"],
  },
  "3:PRD": {
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
    groupsOpened: ["RQA_I08/PROVIDER"],
  },
  "4:AUT": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/AUTHORIZATION"],
  },
  "4:PRD": {
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
    groupsOpened: ["RQA_I08/PROVIDER"],
  },
  "5:AUT": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/AUTHORIZATION"],
  },
  "5:PRD": {
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
    groupsOpened: ["RQA_I08/PROVIDER"],
  },
  "6:ACC": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "6:AL1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "6:DG1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "6:DRG": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "6:GT1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE"],
  },
  "6:IN1": {
    groupsClosed: [],
    groupsOpened: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "6:NTE": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "6:OBR": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "6:PR1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "6:PV1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "7:PID": {
    groupsClosed: ["RQA_I08/PROVIDER"],
    groupsOpened: [],
  },
  "7:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROVIDER"],
  },
  "8:PRD": {
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
    groupsOpened: ["RQA_I08/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
