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
    groupsClosed: ["RRI_I12/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "11:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "12:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
  },
  "12:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "12:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "12:PV1": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "13:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "13:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "13:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
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
    groupsClosed: ["RRI_I12/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "18:OBR": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "18:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
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
  "20:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: [],
  },
  "20:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "20:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "20:PV1": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "21:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "22:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE", "RRI_I12/PROCEDURE/AUTCTD_SUPPGRP2"],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "22:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "22:PV1": {
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
  "6:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "6:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "6:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "6:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "7:PID": {
    groupsClosed: ["RRI_I12/PROVIDER_CONTACT"],
    groupsOpened: [],
  },
  "7:PRD": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "8:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT"],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
