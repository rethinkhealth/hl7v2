// Generated profile automaton for REF_I12 (v2.8)

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
  "11:NTE": {
    groupsClosed: ["REF_I12/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "12:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "13:AUT": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2"],
  },
  "13:NTE": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: [
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "13:PR1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "13:PV1": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
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
  "17:NTE": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "17:OBR": {
    groupsClosed: ["REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "17:PR1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "17:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/PROCEDURE"],
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
    groupsOpened: ["REF_I12/AUTHORIZATION_CONTACT1"],
  },
  "1:PRD": {
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT1"],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
  "20:ACC": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "20:AL1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "20:DG1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "20:DRG": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/INSURANCE"],
  },
  "20:NTE": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "20:OBR": {
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "20:PR1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "20:PV1": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "21:NTE": {
    groupsClosed: ["REF_I12/PATIENT_VISIT"],
    groupsOpened: [],
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
  "23:OBR": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "23:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "24:NTE": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
    groupsOpened: [],
  },
  "24:OBR": {
    groupsClosed: [
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "24:PR1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "24:PV1": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
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
  "26:ACC": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "26:AL1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "26:DG1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "26:DRG": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "26:IN1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/INSURANCE"],
  },
  "26:NTE": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "26:OBR": {
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "26:PR1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "26:PV1": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "27:OBR": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "27:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "28:OBR": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/OBSERVATION/RESULTS_NOTES"],
  },
  "28:PV1": {
    groupsClosed: ["REF_I12/OBSERVATION", "REF_I12/OBSERVATION/RESULTS_NOTES"],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "29:NTE": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
    groupsOpened: [],
  },
  "29:OBR": {
    groupsClosed: [
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
    ],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "29:PR1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "29:PV1": {
    groupsClosed: [
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
      "REF_I12/PROCEDURE/AUTHORIZATION_CONTACT2",
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
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT1"],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
  "4:AUT": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/AUTHORIZATION_CONTACT1"],
  },
  "4:PRD": {
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT1"],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
  "5:AUT": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/AUTHORIZATION_CONTACT1"],
  },
  "5:PRD": {
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT1"],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
  "6:AUT": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/AUTHORIZATION_CONTACT1"],
  },
  "6:PRD": {
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT1"],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
  "7:ACC": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "7:AL1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "7:DG1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "7:DRG": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: [],
  },
  "7:IN1": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/INSURANCE"],
  },
  "7:NTE": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PATIENT_VISIT",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: [],
  },
  "7:OBR": {
    groupsClosed: ["REF_I12/INSURANCE", "REF_I12/PROCEDURE"],
    groupsOpened: ["REF_I12/OBSERVATION"],
  },
  "7:PR1": {
    groupsClosed: ["REF_I12/INSURANCE"],
    groupsOpened: ["REF_I12/PROCEDURE"],
  },
  "7:PV1": {
    groupsClosed: [
      "REF_I12/INSURANCE",
      "REF_I12/OBSERVATION",
      "REF_I12/PROCEDURE",
    ],
    groupsOpened: ["REF_I12/PATIENT_VISIT"],
  },
  "8:PID": {
    groupsClosed: ["REF_I12/PROVIDER_CONTACT"],
    groupsOpened: [],
  },
  "8:PRD": {
    groupsClosed: [],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
  "9:PRD": {
    groupsClosed: ["REF_I12/AUTHORIZATION_CONTACT1"],
    groupsOpened: ["REF_I12/PROVIDER_CONTACT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
