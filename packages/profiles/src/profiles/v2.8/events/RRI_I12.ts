// Generated profile automaton for RRI_I12 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
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
  "PRT",
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
      ["MSA", 5],
      ["PRD", 2],
      ["RF1", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    2,
    new Map([
      ["CTD", 9],
      ["PID", 8],
      ["PRD", 2],
    ]),
  ],
  [
    3,
    new Map([
      ["CTD", 10],
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
    ]),
  ],
  [
    7,
    new Map([
      ["AUT", 3],
      ["MSA", 5],
      ["PRD", 2],
      ["RF1", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ACC", 18],
      ["AL1", 15],
      ["DG1", 17],
      ["DRG", 16],
      ["NTE", 11],
      ["OBR", 13],
      ["PR1", 14],
      ["PV1", 12],
    ]),
  ],
  [
    9,
    new Map([
      ["CTD", 9],
      ["PID", 8],
      ["PRD", 2],
    ]),
  ],
  [10, new Map([["PRD", 2]])],
  [11, new Map([["NTE", 11]])],
  [
    12,
    new Map([
      ["NTE", 11],
      ["PV2", 19],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 20],
      ["OBR", 13],
      ["OBX", 21],
      ["PV1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["AUT", 22],
      ["NTE", 11],
      ["OBR", 13],
      ["PR1", 14],
      ["PV1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 15],
      ["NTE", 11],
      ["OBR", 13],
      ["PR1", 14],
      ["PV1", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 15],
      ["DRG", 16],
      ["NTE", 11],
      ["OBR", 13],
      ["PR1", 14],
      ["PV1", 12],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 15],
      ["DG1", 17],
      ["DRG", 16],
      ["NTE", 11],
      ["OBR", 13],
      ["PR1", 14],
      ["PV1", 12],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 15],
      ["DG1", 17],
      ["DRG", 16],
      ["NTE", 11],
      ["OBR", 13],
      ["PR1", 14],
      ["PV1", 12],
    ]),
  ],
  [19, new Map([["NTE", 11]])],
  [
    20,
    new Map([
      ["NTE", 20],
      ["OBR", 13],
      ["OBX", 21],
      ["PV1", 12],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 23],
      ["OBR", 13],
      ["OBX", 21],
      ["PRT", 24],
      ["PV1", 12],
    ]),
  ],
  [
    22,
    new Map([
      ["CTD", 25],
      ["NTE", 11],
      ["OBR", 13],
      ["PR1", 14],
      ["PV1", 12],
    ]),
  ],
  [
    23,
    new Map([
      ["NTE", 23],
      ["OBR", 13],
      ["OBX", 21],
      ["PV1", 12],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 23],
      ["OBR", 13],
      ["OBX", 21],
      ["PRT", 24],
      ["PV1", 12],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 11],
      ["OBR", 13],
      ["PR1", 14],
      ["PV1", 12],
    ]),
  ],
]);
export const effects = {
  "10:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT2"],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "12:NTE": {
    groupsClosed: ["RRI_I12/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "13:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "14:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2"],
  },
  "14:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
    groupsOpened: [],
  },
  "14:OBR": {
    groupsClosed: [
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "14:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "14:PV1": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
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
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "18:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "18:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "18:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "19:NTE": {
    groupsClosed: ["RRI_I12/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "1:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT2"],
  },
  "1:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT2"],
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
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: [
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
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
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "23:OBR": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "23:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "24:OBR": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "24:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "25:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
    groupsOpened: [],
  },
  "25:OBR": {
    groupsClosed: [
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "25:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "25:PV1": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
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
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT2"],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "4:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT2"],
  },
  "4:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT2"],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "5:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT2"],
  },
  "5:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT2"],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "6:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT2"],
  },
  "6:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT2"],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "7:AUT": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT2"],
  },
  "7:PRD": {
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT2"],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "8:NTE": {
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "8:OBR": {
    groupsClosed: ["RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/OBSERVATION"],
  },
  "8:PR1": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROCEDURE"],
  },
  "8:PV1": {
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
  },
  "9:PID": {
    groupsClosed: ["RRI_I12/PROVIDER_CONTACT"],
    groupsOpened: [],
  },
  "9:PRD": {
    groupsClosed: [],
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
