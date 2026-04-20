// Generated profile automaton for REF_I12 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  29,
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
      ["ACC", 17],
      ["AL1", 14],
      ["DG1", 16],
      ["DRG", 15],
      ["GT1", 19],
      ["IN1", 18],
      ["NTE", 10],
      ["OBR", 12],
      ["PR1", 13],
      ["PV1", 11],
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
      ["PRT", 28],
      ["PV1", 11],
    ]),
  ],
  [
    24,
    new Map([
      ["CTD", 29],
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
      ["NTE", 27],
      ["OBR", 12],
      ["OBX", 23],
      ["PRT", 28],
      ["PV1", 11],
    ]),
  ],
  [
    29,
    new Map([
      ["NTE", 10],
      ["OBR", 12],
      ["PR1", 13],
      ["PV1", 11],
    ]),
  ],
]);
export const effects = {
  "1:PRD": {
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT2"],
  },
  "1:AUT": {
    groupsOpened: ["REF_I12/AUTHORIZATION_CONTACT2"],
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
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT2"],
  },
  "4:PRD": {
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT2"],
  },
  "4:AUT": {
    groupsOpened: ["REF_I12/AUTHORIZATION_CONTACT2"],
    groupsClosed: [],
  },
  "5:PRD": {
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT2"],
  },
  "5:AUT": {
    groupsOpened: ["REF_I12/AUTHORIZATION_CONTACT2"],
    groupsClosed: [],
  },
  "6:PRD": {
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT2"],
  },
  "6:AUT": {
    groupsOpened: ["REF_I12/AUTHORIZATION_CONTACT2"],
    groupsClosed: [],
  },
  "7:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
  },
  "7:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
  },
  "7:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
  },
  "7:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "7:AL1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "7:DRG": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "7:DG1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "7:ACC": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "7:IN1": {
    groupsOpened: ["REF_I12/INSURANCE"],
    groupsClosed: [],
  },
  "8:PRD": {
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "8:PID": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/PROVIDER_CONTACT"],
  },
  "9:PRD": {
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT2"],
  },
  "11:NTE": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/PATIENT_VISIT"],
  },
  "12:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "12:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "12:OBX": {
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "13:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "13:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
  "13:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
  "13:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: [
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
  "13:AUT": {
    groupsOpened: ["REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2"],
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
  "17:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
  },
  "17:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/PROCEDURE"],
  },
  "17:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/PROCEDURE"],
  },
  "17:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "18:IN1": {
    groupsOpened: ["REF_I12/INSURANCE"],
    groupsClosed: [],
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
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
  },
  "20:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
  },
  "20:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
  },
  "20:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "20:AL1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "20:DRG": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "20:DG1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "20:ACC": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "20:IN1": {
    groupsOpened: ["REF_I12/INSURANCE"],
    groupsClosed: [],
  },
  "21:NTE": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/PATIENT_VISIT"],
  },
  "22:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "22:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "22:OBX": {
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "23:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "23:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "24:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "24:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
  "24:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
  "24:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: [
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
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
  "26:IN1": {
    groupsOpened: ["REF_I12/INSURANCE"],
    groupsClosed: [],
  },
  "26:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
  },
  "26:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
  },
  "26:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
  },
  "26:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "26:AL1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "26:DRG": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "26:DG1": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "26:ACC": {
    groupsOpened: [],
    groupsClosed: ["REF_I12/INSURANCE"],
  },
  "27:OBX": {
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "27:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "27:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "28:OBX": {
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsClosed: [],
  },
  "28:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: [],
  },
  "28:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "29:PR1": {
    groupsOpened: ["REF_I12/PROCEDURE"],
    groupsClosed: [],
  },
  "29:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
  "29:PV1": {
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
  "29:OBR": {
    groupsOpened: ["REF_I12/OBSERVATION"],
    groupsClosed: [
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
