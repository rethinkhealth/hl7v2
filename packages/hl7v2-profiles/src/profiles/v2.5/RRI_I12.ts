// Generated profile automaton for RRI_I12 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
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
  "SFT",
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
      ["SFT", 6],
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
      ["MSA", 5],
      ["PRD", 2],
      ["RF1", 4],
      ["SFT", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["ACC", 17],
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
      ["PV2", 18],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 19],
      ["OBR", 12],
      ["OBX", 20],
      ["PV1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["AUT", 21],
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
  [18, new Map([["NTE", 10]])],
  [
    19,
    new Map([
      ["NTE", 19],
      ["OBR", 12],
      ["OBX", 20],
      ["PV1", 11],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 22],
      ["OBR", 12],
      ["OBX", 20],
      ["PV1", 11],
    ]),
  ],
  [
    21,
    new Map([
      ["CTD", 23],
      ["NTE", 10],
      ["OBR", 12],
      ["PR1", 13],
      ["PV1", 11],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 22],
      ["OBR", 12],
      ["OBX", 20],
      ["PV1", 11],
    ]),
  ],
  [
    23,
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
    groupsOpened: [],
    groupsClosed: ["RRI_I12/PATIENT_VISIT"],
  },
  "12:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "12:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "13:AUT": {
    groupsOpened: ["RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsClosed: [],
  },
  "13:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "13:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "13:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "13:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "14:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
  },
  "14:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE"],
  },
  "14:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "14:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
  },
  "15:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
  },
  "15:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE"],
  },
  "15:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "15:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
  },
  "16:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
  },
  "16:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE"],
  },
  "16:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "16:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
  },
  "17:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
  },
  "17:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE"],
  },
  "17:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "17:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
  },
  "18:NTE": {
    groupsOpened: [],
    groupsClosed: ["RRI_I12/PATIENT_VISIT"],
  },
  "19:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "19:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "1:AUT": {
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT"],
    groupsClosed: [],
  },
  "1:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT"],
  },
  "20:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "20:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "21:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "21:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "21:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "21:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "22:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "22:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "23:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "23:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "23:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "23:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "2:PID": {
    groupsOpened: [],
    groupsClosed: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "2:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "3:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT"],
  },
  "4:AUT": {
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT"],
    groupsClosed: [],
  },
  "4:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT"],
  },
  "5:AUT": {
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT"],
    groupsClosed: [],
  },
  "5:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT"],
  },
  "6:AUT": {
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT"],
    groupsClosed: [],
  },
  "6:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT"],
  },
  "7:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
  },
  "7:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE"],
  },
  "7:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "7:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
  },
  "8:PID": {
    groupsOpened: [],
    groupsClosed: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "8:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "9:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
