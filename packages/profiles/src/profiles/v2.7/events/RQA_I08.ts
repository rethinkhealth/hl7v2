// Generated profile automaton for RQA_I08 (v2.7)

export const start = 0;
export const finals = new Set<number>([
  7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28,
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["AUT", 3],
      ["PRD", 2],
      ["RF1", 4],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["CTD", 8],
      ["PID", 7],
      ["PRD", 2],
    ]),
  ],
  [
    3,
    new Map([
      ["CTD", 9],
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
      ["AUT", 3],
      ["PRD", 2],
      ["RF1", 4],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["ACC", 17],
      ["AL1", 14],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 19],
      ["IN1", 18],
      ["NK1", 20],
      ["NTE", 10],
      ["OBR", 12],
      ["PR1", 13],
      ["PV1", 11],
    ]),
  ],
  [
    8,
    new Map([
      ["CTD", 8],
      ["PID", 7],
      ["PRD", 2],
    ]),
  ],
  [9, new Map([["PRD", 2]])],
  [10, new Map([["NTE", 10]])],
  [
    11,
    new Map([
      ["NTE", 10],
      ["PV2", 21],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 22],
      ["OBR", 12],
      ["OBX", 23],
      ["PV1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["AUT", 24],
      ["NTE", 10],
      ["OBR", 12],
      ["PR1", 13],
      ["PV1", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 14],
      ["NTE", 10],
      ["OBR", 12],
      ["PR1", 13],
      ["PV1", 11],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 14],
      ["DRG", 15],
      ["NTE", 10],
      ["OBR", 12],
      ["PR1", 13],
      ["PV1", 11],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 14],
      ["DG1", 16],
      ["DRG", 15],
      ["NTE", 10],
      ["OBR", 12],
      ["PR1", 13],
      ["PV1", 11],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 14],
      ["DG1", 16],
      ["DRG", 15],
      ["NTE", 10],
      ["OBR", 12],
      ["PR1", 13],
      ["PV1", 11],
    ]),
  ],
  [
    18,
    new Map([
      ["ACC", 17],
      ["AL1", 14],
      ["DG1", 16],
      ["DRG", 15],
      ["IN1", 18],
      ["IN2", 26],
      ["IN3", 25],
      ["NTE", 10],
      ["OBR", 12],
      ["PR1", 13],
      ["PV1", 11],
    ]),
  ],
  [
    19,
    new Map([
      ["GT1", 19],
      ["IN1", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["ACC", 17],
      ["AL1", 14],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 19],
      ["IN1", 18],
      ["NK1", 20],
      ["NTE", 10],
      ["OBR", 12],
      ["PR1", 13],
      ["PV1", 11],
    ]),
  ],
  [21, new Map([["NTE", 10]])],
  [
    22,
    new Map([
      ["NTE", 22],
      ["OBR", 12],
      ["OBX", 23],
      ["PV1", 11],
    ]),
  ],
  [
    23,
    new Map([
      ["NTE", 27],
      ["OBR", 12],
      ["OBX", 23],
      ["PV1", 11],
    ]),
  ],
  [
    24,
    new Map([
      ["CTD", 28],
      ["NTE", 10],
      ["OBR", 12],
      ["PR1", 13],
      ["PV1", 11],
    ]),
  ],
  [
    25,
    new Map([
      ["ACC", 17],
      ["AL1", 14],
      ["DG1", 16],
      ["DRG", 15],
      ["IN1", 18],
      ["NTE", 10],
      ["OBR", 12],
      ["PR1", 13],
      ["PV1", 11],
    ]),
  ],
  [
    26,
    new Map([
      ["ACC", 17],
      ["AL1", 14],
      ["DG1", 16],
      ["DRG", 15],
      ["IN1", 18],
      ["IN3", 25],
      ["NTE", 10],
      ["OBR", 12],
      ["PR1", 13],
      ["PV1", 11],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 27],
      ["OBR", 12],
      ["OBX", 23],
      ["PV1", 11],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 10],
      ["OBR", 12],
      ["PR1", 13],
      ["PV1", 11],
    ]),
  ],
]);
export const effects = {
  "11:NTE": {
    groupsClosed: ["RQA_I08/VISIT"],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/OBSERVATION/RESULTS"],
  },
  "12:PV1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "13:AUT": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROCEDURE/AUTHORIZATION2"],
  },
  "13:NTE": {
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTHORIZATION2",
      "RQA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: ["RQA_I08/PROCEDURE", "RQA_I08/PROCEDURE/AUTHORIZATION2"],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "13:PR1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "13:PV1": {
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTHORIZATION2",
    ],
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
  "17:NTE": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
    groupsOpened: [],
  },
  "17:OBR": {
    groupsClosed: ["RQA_I08/PROCEDURE"],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "17:PR1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "17:PV1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE"],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "18:ACC": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "18:AL1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "18:DG1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "18:DRG": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "18:NTE": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "18:OBR": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "18:PR1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "18:PV1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "19:IN1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "1:AUT": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/AUTHORIZATION"],
  },
  "1:PRD": {
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
    groupsOpened: ["RQA_I08/PROVIDER"],
  },
  "20:ACC": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "20:AL1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "20:DG1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "20:DRG": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "20:GT1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE"],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "20:NTE": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "20:OBR": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "20:PR1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "20:PV1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "21:NTE": {
    groupsClosed: ["RQA_I08/VISIT"],
    groupsOpened: [],
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
  "23:OBR": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/OBSERVATION/RESULTS"],
  },
  "23:PV1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "24:NTE": {
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTHORIZATION2",
      "RQA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "24:OBR": {
    groupsClosed: ["RQA_I08/PROCEDURE", "RQA_I08/PROCEDURE/AUTHORIZATION2"],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "24:PR1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "24:PV1": {
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTHORIZATION2",
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
  "26:ACC": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "26:AL1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "26:DG1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "26:DRG": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE/INSURANCE"],
  },
  "26:NTE": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "26:OBR": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "26:PR1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "26:PV1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "27:OBR": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/OBSERVATION/RESULTS"],
  },
  "27:PV1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/OBSERVATION/RESULTS"],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "28:NTE": {
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTHORIZATION2",
      "RQA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "28:OBR": {
    groupsClosed: ["RQA_I08/PROCEDURE", "RQA_I08/PROCEDURE/AUTHORIZATION2"],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "28:PR1": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "28:PV1": {
    groupsClosed: [
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/PROCEDURE/AUTHORIZATION2",
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
  "6:AUT": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/AUTHORIZATION"],
  },
  "6:PRD": {
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
    groupsOpened: ["RQA_I08/PROVIDER"],
  },
  "7:ACC": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "7:AL1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "7:DG1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "7:DRG": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: [],
  },
  "7:GT1": {
    groupsClosed: ["RQA_I08/OBSERVATION", "RQA_I08/PROCEDURE", "RQA_I08/VISIT"],
    groupsOpened: ["RQA_I08/GUARANTOR_INSURANCE"],
  },
  "7:IN1": {
    groupsClosed: [],
    groupsOpened: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
  },
  "7:NTE": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
      "RQA_I08/VISIT",
    ],
    groupsOpened: [],
  },
  "7:OBR": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/OBSERVATION"],
  },
  "7:PR1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
    ],
    groupsOpened: ["RQA_I08/PROCEDURE"],
  },
  "7:PV1": {
    groupsClosed: [
      "RQA_I08/GUARANTOR_INSURANCE",
      "RQA_I08/GUARANTOR_INSURANCE/INSURANCE",
      "RQA_I08/OBSERVATION",
      "RQA_I08/PROCEDURE",
    ],
    groupsOpened: ["RQA_I08/VISIT"],
  },
  "8:PID": {
    groupsClosed: ["RQA_I08/PROVIDER"],
    groupsOpened: [],
  },
  "8:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQA_I08/PROVIDER"],
  },
  "9:PRD": {
    groupsClosed: ["RQA_I08/AUTHORIZATION"],
    groupsOpened: ["RQA_I08/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
