// Generated profile automaton for REF_I12 (v2.4)

export const start = 0;
export const finals = new Set<number>([
  5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
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
      ["ACC", 15],
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["GT1", 17],
      ["IN1", 16],
      ["NTE", 8],
      ["OBR", 10],
      ["PR1", 11],
      ["PV1", 9],
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
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "10:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "11:AUT": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "11:NTE": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: ["REF_I12/PROCEDURE", "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "11:PR1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "11:PV1": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "12:NTE": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: ["REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "12:PR1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "12:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/PROCEDURE"],
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
  "16:ACC": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "16:AL1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "16:DG1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "16:DRG": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/INSURANCE"],
  },
  "16:NTE": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "16:OBR": {
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "16:PR1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "16:PV1": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
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
  "19:NTE": {
    groupsClosed: ["REF_I12/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "1:AUT": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/AUTHORIZATION_CONTACT"],
  },
  "1:PRD": {
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT"],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
  "20:OBR": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "20:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
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
  "22:NTE": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: ["REF_I12/PROCEDURE", "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "22:PR1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "22:PV1": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "23:ACC": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "23:AL1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "23:DG1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "23:DRG": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/INSURANCE"],
  },
  "23:NTE": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "23:PR1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "23:PV1": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
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
  "25:OBR": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "25:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "26:NTE": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: [],
  },
  "26:OBR": {
    groupsClosed: ["REF_I12/PROCEDURE", "REF_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "26:PR1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "26:PV1": {
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
  "5:ACC": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "5:AL1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "5:DG1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "5:DRG": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "5:IN1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/INSURANCE"],
  },
  "5:NTE": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "5:OBR": {
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "5:PR1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "5:PV1": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "6:PID": {
    groupsClosed: ["REF_I12/PROVIDER_CONTACT"],
    groupsOpened: [],
  },
  "6:PRD": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
  "7:PRD": {
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT"],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
  "9:NTE": {
    groupsClosed: ["REF_I12/PATIENT_VISIT"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
