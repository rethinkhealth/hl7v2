// Generated profile automaton for REF_I12 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
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
      ["ACC", 16],
      ["AL1", 13],
      ["DG1", 15],
      ["DRG", 14],
      ["GT1", 18],
      ["IN1", 17],
      ["NTE", 9],
      ["OBR", 11],
      ["PR1", 12],
      ["PV1", 10],
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
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT"],
  },
  "1:AUT": {
    groupsOpened: ["REF_I12/AUTHORIZATION_CONTACT"],
    groupsClosed: [],
  },
  "2:PRD": {
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "2:PID": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/PROVIDER_CONTACT"],
  },
  "3:PRD": {
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT"],
  },
  "4:PRD": {
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT"],
  },
  "4:AUT": {
    groupsOpened: ["REF_I12/AUTHORIZATION_CONTACT"],
    groupsClosed: [],
  },
  "5:PRD": {
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT"],
  },
  "5:AUT": {
    groupsOpened: ["REF_I12/AUTHORIZATION_CONTACT"],
    groupsClosed: [],
  },
  "6:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
  },
  "6:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
  },
  "6:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
  },
  "6:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "6:AL1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "6:DRG": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "6:DG1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "6:ACC": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "6:IN1": {
    groupsOpened: ["REF_I12/INSURANCE"],
    groupsClosed: [],
  },
  "7:PRD": {
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "7:PID": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/PROVIDER_CONTACT"],
  },
  "8:PRD": {
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT"],
  },
  "10:NTE": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/PATIENT_VISIT"],
  },
  "11:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "11:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "11:OBX": {
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "12:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "12:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "12:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "12:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/PROCEDURE", "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "12:AUT": {
    groupsOpened: ["REF_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsClosed: [],
  },
  "13:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
  },
  "13:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/PROCEDURE"],
  },
  "13:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/PROCEDURE"],
  },
  "13:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "14:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
  },
  "14:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/PROCEDURE"],
  },
  "14:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/PROCEDURE"],
  },
  "14:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "15:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
  },
  "15:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/PROCEDURE"],
  },
  "15:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/PROCEDURE"],
  },
  "15:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "16:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
  },
  "16:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/PROCEDURE"],
  },
  "16:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/PROCEDURE"],
  },
  "16:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "17:IN1": {
    groupsOpened: ["REF_I12/INSURANCE"],
    groupsClosed: [],
  },
  "17:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
  },
  "17:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
  },
  "17:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
  },
  "17:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "17:DRG": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "17:DG1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "17:ACC": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "18:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
  },
  "18:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
  },
  "18:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
  },
  "18:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "18:AL1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "18:DRG": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "18:DG1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "18:ACC": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "18:IN1": {
    groupsOpened: ["REF_I12/INSURANCE"],
    groupsClosed: [],
  },
  "19:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
  },
  "19:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
  },
  "19:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
  },
  "19:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "19:AL1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "19:DRG": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "19:DG1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "19:ACC": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "19:IN1": {
    groupsOpened: ["REF_I12/INSURANCE"],
    groupsClosed: [],
  },
  "20:NTE": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/PATIENT_VISIT"],
  },
  "21:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "21:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "21:OBX": {
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "22:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "22:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "23:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "23:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "23:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "23:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/PROCEDURE", "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "24:IN1": {
    groupsOpened: ["REF_I12/INSURANCE"],
    groupsClosed: [],
  },
  "24:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
  },
  "24:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
  },
  "24:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
  },
  "24:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "24:AL1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "24:DRG": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "24:DG1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "24:ACC": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "25:IN1": {
    groupsOpened: ["REF_I12/INSURANCE"],
    groupsClosed: [],
  },
  "25:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
  },
  "25:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
  },
  "25:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
  },
  "25:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "25:AL1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "25:DRG": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "25:DG1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "25:ACC": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "26:OBX": {
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "26:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "26:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "27:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "27:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "27:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "27:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/PROCEDURE", "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
