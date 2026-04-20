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
  "1:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT2"],
  },
  "1:AUT": {
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT2"],
    groupsClosed: [],
  },
  "2:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "2:PID": {
    groupsOpened: [],
    groupsClosed: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "3:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT2"],
  },
  "4:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT2"],
  },
  "4:AUT": {
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT2"],
    groupsClosed: [],
  },
  "5:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT2"],
  },
  "5:AUT": {
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT2"],
    groupsClosed: [],
  },
  "6:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT2"],
  },
  "6:AUT": {
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT2"],
    groupsClosed: [],
  },
  "7:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT2"],
  },
  "7:AUT": {
    groupsOpened: ["RRI_I12/AUTHORIZATION_CONTACT2"],
    groupsClosed: [],
  },
  "8:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
  },
  "8:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
  },
  "8:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE"],
  },
  "8:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "9:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: [],
    groupsClosed: ["RRI_I12/PROVIDER_CONTACT"],
  },
  "10:PRD": {
    groupsOpened: ["RRI_I12/PROVIDER_CONTACT"],
    groupsClosed: ["RRI_I12/AUTHORIZATION_CONTACT2"],
  },
  "12:NTE": {
    groupsOpened: [],
    groupsClosed: ["RRI_I12/PATIENT_VISIT"],
  },
  "13:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "13:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "13:OBX": {
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "14:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "14:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
  "14:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
  "14:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: [
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
  "14:AUT": {
    groupsOpened: ["RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2"],
    groupsClosed: [],
  },
  "15:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
  },
  "15:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
  },
  "15:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE"],
  },
  "15:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "16:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
  },
  "16:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
  },
  "16:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE"],
  },
  "16:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "17:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
  },
  "17:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
  },
  "17:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE"],
  },
  "17:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "18:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
    ],
  },
  "18:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/PROCEDURE"],
  },
  "18:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: ["RRI_I12/PROCEDURE"],
  },
  "18:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "19:NTE": {
    groupsOpened: [],
    groupsClosed: ["RRI_I12/PATIENT_VISIT"],
  },
  "20:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "20:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "20:OBX": {
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "21:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "21:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "22:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "22:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
  "22:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
  "22:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: [
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
  "23:OBX": {
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "23:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "23:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "24:OBX": {
    groupsOpened: ["RRI_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "24:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "24:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: ["RRI_I12/OBSERVATION", "RRI_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "25:PR1": {
    groupsOpened: ["RRI_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "25:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PATIENT_VISIT",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
  "25:PV1": {
    groupsOpened: ["RRI_I12/PATIENT_VISIT"],
    groupsClosed: [
      "RRI_I12/OBSERVATION",
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
  "25:OBR": {
    groupsOpened: ["RRI_I12/OBSERVATION"],
    groupsClosed: [
      "RRI_I12/PROCEDURE",
      "RRI_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
