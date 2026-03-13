// Generated profile automaton for RQA_I08 (v2.5)

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
  "1:PRD": {
    groupsOpened: ["RQA_I08/PROVIDER"],
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
  },
  "1:AUT": {
    groupsOpened: ["RQA_I08/AUTHORIZATION"],
    groupsClosed: [],
  },
  "2:PRD": {
    groupsOpened: ["RQA_I08/PROVIDER"],
    groupsClosed: [],
  },
  "2:PID": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/PROVIDER"],
  },
  "3:PRD": {
    groupsOpened: ["RQA_I08/PROVIDER"],
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
  },
  "4:PRD": {
    groupsOpened: ["RQA_I08/PROVIDER"],
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
  },
  "4:AUT": {
    groupsOpened: ["RQA_I08/AUTHORIZATION"],
    groupsClosed: [],
  },
  "5:PRD": {
    groupsOpened: ["RQA_I08/PROVIDER"],
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
  },
  "5:AUT": {
    groupsOpened: ["RQA_I08/AUTHORIZATION"],
    groupsClosed: [],
  },
  "6:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
  },
  "6:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
  },
  "6:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
  },
  "6:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "6:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "6:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "6:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "6:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "6:IN1": {
    groupsOpened: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsClosed: [],
  },
  "6:GT1": {
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
  },
  "7:PRD": {
    groupsOpened: ["RQA_I08/PROVIDER"],
    groupsClosed: [],
  },
  "7:PID": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/PROVIDER"],
  },
  "8:PRD": {
    groupsOpened: ["RQA_I08/PROVIDER"],
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
  },
  "10:NTE": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/VISIT"],
  },
  "11:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "11:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/OBSERVATION/RESULTS"],
  },
  "11:OBX": {
    groupsOpened: ["RQA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "12:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "12:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RQA_I08/VISIT",
    ],
  },
  "12:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "12:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: ["RQA_I08/PROCEDURE", "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "12:AUT": {
    groupsOpened: ["RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsClosed: [],
  },
  "13:NTE": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE"],
  },
  "13:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: ["RQA_I08/PROCEDURE"],
  },
  "13:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "14:NTE": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
  },
  "14:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE"],
  },
  "14:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: ["RQA_I08/PROCEDURE"],
  },
  "14:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "15:NTE": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
  },
  "15:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE"],
  },
  "15:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: ["RQA_I08/PROCEDURE"],
  },
  "15:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "16:NTE": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
  },
  "16:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE"],
  },
  "16:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: ["RQA_I08/PROCEDURE"],
  },
  "16:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "17:IN1": {
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE/INSURANCE"],
    groupsClosed: [],
  },
  "17:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
  },
  "17:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
  },
  "17:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
  },
  "17:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "17:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "17:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "18:IN1": {
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE/INSURANCE"],
    groupsClosed: [],
  },
  "19:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
  },
  "19:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
  },
  "19:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
  },
  "19:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "19:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "19:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "19:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "19:IN1": {
    groupsOpened: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsClosed: [],
  },
  "19:GT1": {
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
  },
  "20:NTE": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/VISIT"],
  },
  "21:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "21:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/OBSERVATION/RESULTS"],
  },
  "21:OBX": {
    groupsOpened: ["RQA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["RQA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "22:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "22:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/OBSERVATION/RESULTS"],
  },
  "23:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "23:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RQA_I08/VISIT",
    ],
  },
  "23:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "23:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: ["RQA_I08/PROCEDURE", "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "24:IN1": {
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE/INSURANCE"],
    groupsClosed: [],
  },
  "24:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
  },
  "24:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
  },
  "24:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
  },
  "24:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "24:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "24:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "24:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "24:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "25:IN1": {
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE/INSURANCE"],
    groupsClosed: [],
  },
  "25:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
  },
  "25:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
  },
  "25:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
  },
  "25:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "25:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "25:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "25:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "25:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "26:OBX": {
    groupsOpened: ["RQA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "26:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "26:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/OBSERVATION/RESULTS"],
  },
  "27:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "27:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RQA_I08/VISIT",
    ],
  },
  "27:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "27:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: ["RQA_I08/PROCEDURE", "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
