// Generated profile automaton for RRI_I12 (v2.3.1)

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
    groupsOpened: [],
    groupsClosed: ["RRI_I12/PATIENT_VISIT"],
  },
  "11:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "11:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "12:AUT": {
    groupsOpened: ["RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsClosed: [],
  },
  "12:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "12:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "12:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "12:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "13:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
  },
  "13:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE"],
  },
  "13:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "13:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
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
    groupsClosed: ["RRI_I12/PATIENT_VISIT"],
  },
  "18:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "18:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
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
  "20:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "20:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "20:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "20:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "21:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "21:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "22:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
  },
  "22:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "22:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "22:PV1": {
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
  "6:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
  },
  "6:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE"],
  },
  "6:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "6:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
  },
  "7:PID": {
    groupsOpened: [],
    groupsClosed: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "7:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "8:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
