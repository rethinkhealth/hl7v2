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
    groupsClosed: ["RRI_I12/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "12:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "13:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "13:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "13:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "13:PV1": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "14:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "14:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "14:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "14:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "15:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "15:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "15:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "15:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "16:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "16:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "16:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "16:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "17:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "17:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "17:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "17:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "18:NTE": {
    groupsClosed: ["RRI_I12/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "19:OBR": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "19:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "1:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT"],
  },
  "1:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT"],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "20:OBR": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "20:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "21:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "21:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "21:PV1": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "22:OBR": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "22:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "23:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "23:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "23:PV1": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "2:PID": {
    groupsClosed: ["RRI_I12/PROVIDER_CONTACT"],
    groupsOpened: [],
  },
  "2:PRD": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "3:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT"],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "4:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT"],
  },
  "4:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT"],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "5:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT"],
  },
  "5:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT"],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "6:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT"],
  },
  "6:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT"],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "7:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "7:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "7:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "7:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "8:PID": {
    groupsClosed: ["RRI_I12/PROVIDER_CONTACT"],
    groupsOpened: [],
  },
  "8:PRD": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "9:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT"],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
