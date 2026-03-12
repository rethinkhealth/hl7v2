// Generated profile automaton for RQA_I08 (v2.4)

export const start = 0;
export const finals = new Set<number>([
  5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26,
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["AUT", 3],
      ["PRD", 2],
      ["RF1", 4],
    ]),
  ],
  [
    2,
    new Map([
      ["CTD", 6],
      ["PID", 5],
      ["PRD", 2],
    ]),
  ],
  [
    3,
    new Map([
      ["CTD", 7],
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
      ["ACC", 15],
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 17],
      ["IN1", 16],
      ["NK1", 18],
      ["NTE", 8],
      ["OBR", 10],
      ["PR1", 11],
      ["PV1", 9],
    ]),
  ],
  [
    6,
    new Map([
      ["CTD", 6],
      ["PID", 5],
      ["PRD", 2],
    ]),
  ],
  [7, new Map([["PRD", 2]])],
  [8, new Map([["NTE", 8]])],
  [
    9,
    new Map([
      ["NTE", 8],
      ["PV2", 19],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 20],
      ["OBR", 10],
      ["OBX", 21],
      ["PV1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["AUT", 22],
      ["NTE", 8],
      ["OBR", 10],
      ["PR1", 11],
      ["PV1", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 12],
      ["NTE", 8],
      ["OBR", 10],
      ["PR1", 11],
      ["PV1", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 12],
      ["DRG", 13],
      ["NTE", 8],
      ["OBR", 10],
      ["PR1", 11],
      ["PV1", 9],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["NTE", 8],
      ["OBR", 10],
      ["PR1", 11],
      ["PV1", 9],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["NTE", 8],
      ["OBR", 10],
      ["PR1", 11],
      ["PV1", 9],
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
      ["NTE", 8],
      ["OBR", 10],
      ["PR1", 11],
      ["PV1", 9],
    ]),
  ],
  [
    17,
    new Map([
      ["GT1", 17],
      ["IN1", 16],
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
      ["NTE", 8],
      ["OBR", 10],
      ["PR1", 11],
      ["PV1", 9],
    ]),
  ],
  [19, new Map([["NTE", 8]])],
  [
    20,
    new Map([
      ["NTE", 20],
      ["OBR", 10],
      ["OBX", 21],
      ["PV1", 9],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 25],
      ["OBR", 10],
      ["OBX", 21],
      ["PV1", 9],
    ]),
  ],
  [
    22,
    new Map([
      ["CTD", 26],
      ["NTE", 8],
      ["OBR", 10],
      ["PR1", 11],
      ["PV1", 9],
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
      ["NTE", 8],
      ["OBR", 10],
      ["PR1", 11],
      ["PV1", 9],
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
      ["NTE", 8],
      ["OBR", 10],
      ["PR1", 11],
      ["PV1", 9],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 25],
      ["OBR", 10],
      ["OBX", 21],
      ["PV1", 9],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 8],
      ["OBR", 10],
      ["PR1", 11],
      ["PV1", 9],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBX": {
    groupsOpened: ["RQA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "10:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/OBSERVATION/RESULTS"],
  },
  "11:AUT": {
    groupsOpened: ["RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsClosed: [],
  },
  "11:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RQA_I08/VISIT",
    ],
  },
  "11:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: ["RQA_I08/PROCEDURE", "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "11:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "11:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "12:NTE": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
  },
  "12:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: ["RQA_I08/PROCEDURE"],
  },
  "12:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "12:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE"],
  },
  "13:NTE": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
  },
  "13:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: ["RQA_I08/PROCEDURE"],
  },
  "13:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "13:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE"],
  },
  "14:NTE": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
  },
  "14:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: ["RQA_I08/PROCEDURE"],
  },
  "14:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "14:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE"],
  },
  "15:NTE": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
  },
  "15:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: ["RQA_I08/PROCEDURE"],
  },
  "15:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "15:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE"],
  },
  "16:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "16:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "16:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "16:IN1": {
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE/INSURANCE"],
    groupsClosed: [],
  },
  "16:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
  },
  "16:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
  },
  "16:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "16:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
  },
  "17:IN1": {
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE/INSURANCE"],
    groupsClosed: [],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "18:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "18:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "18:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "18:GT1": {
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
  },
  "18:IN1": {
    groupsOpened: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsClosed: [],
  },
  "18:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
  },
  "18:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
  },
  "18:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "18:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
  },
  "19:NTE": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/VISIT"],
  },
  "1:AUT": {
    groupsOpened: ["RQA_I08/AUTHORIZATION"],
    groupsClosed: [],
  },
  "1:PRD": {
    groupsOpened: ["RQA_I08/PROVIDER"],
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
  },
  "20:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["RQA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "20:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/OBSERVATION/RESULTS"],
  },
  "21:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["RQA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "21:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/OBSERVATION/RESULTS"],
  },
  "22:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RQA_I08/VISIT",
    ],
  },
  "22:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: ["RQA_I08/PROCEDURE", "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "22:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "22:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "23:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "23:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "23:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "23:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "23:IN1": {
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE/INSURANCE"],
    groupsClosed: [],
  },
  "23:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
  },
  "23:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
  },
  "23:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "23:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
  },
  "24:ACC": {
    groupsOpened: [],
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
  "24:DG1": {
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
  "24:PV1": {
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
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["RQA_I08/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "25:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/OBSERVATION/RESULTS"],
  },
  "26:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
      "RQA_I08/VISIT",
    ],
  },
  "26:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: ["RQA_I08/PROCEDURE", "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "26:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [],
  },
  "26:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "2:PID": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/PROVIDER"],
  },
  "2:PRD": {
    groupsOpened: ["RQA_I08/PROVIDER"],
    groupsClosed: [],
  },
  "3:PRD": {
    groupsOpened: ["RQA_I08/PROVIDER"],
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
  },
  "4:AUT": {
    groupsOpened: ["RQA_I08/AUTHORIZATION"],
    groupsClosed: [],
  },
  "4:PRD": {
    groupsOpened: ["RQA_I08/PROVIDER"],
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
  },
  "5:ACC": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "5:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "5:DG1": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "5:DRG": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "5:GT1": {
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE"],
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
  },
  "5:IN1": {
    groupsOpened: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsClosed: [],
  },
  "5:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
  },
  "5:OBR": {
    groupsOpened: ["RQA_I08/OBSERVATION"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
  },
  "5:PR1": {
    groupsOpened: ["RQA_I08/PROCEDURE"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "5:PV1": {
    groupsOpened: ["RQA_I08/VISIT"],
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
  },
  "6:PID": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/PROVIDER"],
  },
  "6:PRD": {
    groupsOpened: ["RQA_I08/PROVIDER"],
    groupsClosed: [],
  },
  "7:PRD": {
    groupsOpened: ["RQA_I08/PROVIDER"],
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
  },
  "9:NTE": {
    groupsOpened: [],
    groupsClosed: ["RQA_I08/VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
