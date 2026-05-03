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
  "10:NTE": {
    groupsClosed: ["REF_I12/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "11:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "12:AUT": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "12:NTE": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: ["REF_I12/PROCEDURE", "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "12:PR1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "12:PV1": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "13:NTE": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: ["REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "13:PR1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "13:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "14:NTE": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "14:OBR": {
    groupsClosed: ["REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "14:PR1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "14:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "15:NTE": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "15:OBR": {
    groupsClosed: ["REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "15:PR1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "15:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "16:NTE": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "16:OBR": {
    groupsClosed: ["REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "16:PR1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "16:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "17:ACC": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "17:AL1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "17:DG1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "17:DRG": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/INSURANCE"],
  },
  "17:NTE": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "17:OBR": {
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "17:PR1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "17:PV1": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "18:ACC": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "18:AL1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "18:DG1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "18:DRG": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/INSURANCE"],
  },
  "18:NTE": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "18:OBR": {
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "18:PR1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "18:PV1": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "19:ACC": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "19:AL1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "19:DG1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "19:DRG": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/INSURANCE"],
  },
  "19:NTE": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "19:OBR": {
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "19:PR1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "19:PV1": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "1:AUT": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/AUTHORIZATION_CONTACT"],
  },
  "1:PRD": {
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT"],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
  "20:NTE": {
    groupsClosed: ["REF_I12/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "21:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "22:OBR": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "22:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "23:NTE": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: ["REF_I12/PROCEDURE", "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "23:PR1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "23:PV1": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "24:ACC": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "24:AL1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "24:DG1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "24:DRG": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "24:IN1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/INSURANCE"],
  },
  "24:NTE": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "24:OBR": {
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "24:PR1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "24:PV1": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "25:ACC": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "25:AL1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "25:DG1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "25:DRG": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "25:IN1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/INSURANCE"],
  },
  "25:NTE": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "25:OBR": {
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "25:PR1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "25:PV1": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "26:OBR": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "26:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "27:NTE": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: [],
  },
  "27:OBR": {
    groupsClosed: ["REF_I12/PROCEDURE", "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "27:PR1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "27:PV1": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "2:PID": {
    groupsClosed: ["REF_I12/PROVIDER_CONTACT"],
    groupsOpened: [],
  },
  "2:PRD": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
  "3:PRD": {
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT"],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
  "4:AUT": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/AUTHORIZATION_CONTACT"],
  },
  "4:PRD": {
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT"],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
  "5:AUT": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/AUTHORIZATION_CONTACT"],
  },
  "5:PRD": {
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT"],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
  "6:ACC": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "6:AL1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "6:DG1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "6:DRG": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "6:IN1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/INSURANCE"],
  },
  "6:NTE": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "6:OBR": {
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "6:PR1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "6:PV1": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "7:PID": {
    groupsClosed: ["REF_I12/PROVIDER_CONTACT"],
    groupsOpened: [],
  },
  "7:PRD": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
  "8:PRD": {
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT"],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
