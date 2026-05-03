// Generated profile automaton for SRM_S01 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([
  3, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22,
]);
export const alphabet = new Set<string>([
  "AIG",
  "AIL",
  "AIP",
  "AIS",
  "APR",
  "ARQ",
  "DG1",
  "MSH",
  "NTE",
  "OBX",
  "PID",
  "PRT",
  "PV1",
  "PV2",
  "RGS",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["ARQ", 2]])],
  [
    2,
    new Map([
      ["APR", 6],
      ["NTE", 5],
      ["PID", 4],
      ["RGS", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["AIG", 9],
      ["AIL", 8],
      ["AIP", 7],
      ["AIS", 10],
      ["RGS", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["DG1", 11],
      ["OBX", 12],
      ["PID", 4],
      ["PV1", 14],
      ["PV2", 13],
      ["RGS", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 5],
      ["PID", 4],
      ["RGS", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 5],
      ["PID", 4],
      ["RGS", 3],
    ]),
  ],
  [
    7,
    new Map([
      ["AIP", 7],
      ["APR", 16],
      ["NTE", 15],
      ["RGS", 3],
    ]),
  ],
  [
    8,
    new Map([
      ["AIL", 8],
      ["AIP", 7],
      ["APR", 18],
      ["NTE", 17],
      ["RGS", 3],
    ]),
  ],
  [
    9,
    new Map([
      ["AIG", 9],
      ["AIL", 8],
      ["AIP", 7],
      ["APR", 20],
      ["NTE", 19],
      ["RGS", 3],
    ]),
  ],
  [
    10,
    new Map([
      ["AIG", 9],
      ["AIL", 8],
      ["AIP", 7],
      ["AIS", 10],
      ["APR", 22],
      ["NTE", 21],
      ["RGS", 3],
    ]),
  ],
  [
    11,
    new Map([
      ["DG1", 11],
      ["PID", 4],
      ["RGS", 3],
    ]),
  ],
  [
    12,
    new Map([
      ["DG1", 11],
      ["OBX", 12],
      ["PID", 4],
      ["PRT", 23],
      ["RGS", 3],
    ]),
  ],
  [
    13,
    new Map([
      ["DG1", 11],
      ["OBX", 12],
      ["PID", 4],
      ["RGS", 3],
    ]),
  ],
  [
    14,
    new Map([
      ["DG1", 11],
      ["OBX", 12],
      ["PID", 4],
      ["PV2", 13],
      ["RGS", 3],
    ]),
  ],
  [
    15,
    new Map([
      ["AIP", 7],
      ["NTE", 15],
      ["RGS", 3],
    ]),
  ],
  [
    16,
    new Map([
      ["AIP", 7],
      ["NTE", 15],
      ["RGS", 3],
    ]),
  ],
  [
    17,
    new Map([
      ["AIL", 8],
      ["AIP", 7],
      ["NTE", 17],
      ["RGS", 3],
    ]),
  ],
  [
    18,
    new Map([
      ["AIL", 8],
      ["AIP", 7],
      ["NTE", 17],
      ["RGS", 3],
    ]),
  ],
  [
    19,
    new Map([
      ["AIG", 9],
      ["AIL", 8],
      ["AIP", 7],
      ["NTE", 19],
      ["RGS", 3],
    ]),
  ],
  [
    20,
    new Map([
      ["AIG", 9],
      ["AIL", 8],
      ["AIP", 7],
      ["NTE", 19],
      ["RGS", 3],
    ]),
  ],
  [
    21,
    new Map([
      ["AIG", 9],
      ["AIL", 8],
      ["AIP", 7],
      ["AIS", 10],
      ["NTE", 21],
      ["RGS", 3],
    ]),
  ],
  [
    22,
    new Map([
      ["AIG", 9],
      ["AIL", 8],
      ["AIP", 7],
      ["AIS", 10],
      ["NTE", 21],
      ["RGS", 3],
    ]),
  ],
  [
    23,
    new Map([
      ["DG1", 11],
      ["OBX", 12],
      ["PID", 4],
      ["PRT", 23],
      ["RGS", 3],
    ]),
  ],
]);
export const effects = {
  "10:AIG": {
    groupsClosed: ["SRM_S01/RESOURCES/SERVICE"],
    groupsOpened: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
  },
  "10:AIL": {
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
  },
  "10:AIP": {
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/LOCATION_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "10:AIS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES/SERVICE"],
  },
  "10:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "11:PID": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/PATIENT"],
  },
  "11:RGS": {
    groupsClosed: ["SRM_S01/PATIENT"],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "12:DG1": {
    groupsClosed: ["SRM_S01/PATIENT/OBSERVATION"],
    groupsOpened: [],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/PATIENT/OBSERVATION"],
  },
  "12:PID": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/PATIENT"],
  },
  "12:RGS": {
    groupsClosed: ["SRM_S01/PATIENT", "SRM_S01/PATIENT/OBSERVATION"],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "13:DG1": {
    groupsClosed: ["SRM_S01/PATIENT/OBSERVATION"],
    groupsOpened: [],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/PATIENT/OBSERVATION"],
  },
  "13:PID": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/PATIENT"],
  },
  "13:RGS": {
    groupsClosed: ["SRM_S01/PATIENT", "SRM_S01/PATIENT/OBSERVATION"],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "14:DG1": {
    groupsClosed: ["SRM_S01/PATIENT/OBSERVATION"],
    groupsOpened: [],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/PATIENT/OBSERVATION"],
  },
  "14:PID": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/PATIENT"],
  },
  "14:RGS": {
    groupsClosed: ["SRM_S01/PATIENT", "SRM_S01/PATIENT/OBSERVATION"],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "15:AIP": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "15:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "16:AIP": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "16:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "17:AIL": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
  },
  "17:AIP": {
    groupsClosed: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "17:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "18:AIL": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
  },
  "18:AIP": {
    groupsClosed: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "18:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "19:AIG": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
  },
  "19:AIL": {
    groupsClosed: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
  },
  "19:AIP": {
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/LOCATION_RESOURCE",
    ],
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "19:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "20:AIG": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
  },
  "20:AIL": {
    groupsClosed: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
  },
  "20:AIP": {
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/LOCATION_RESOURCE",
    ],
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "20:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "21:AIG": {
    groupsClosed: ["SRM_S01/RESOURCES/SERVICE"],
    groupsOpened: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
  },
  "21:AIL": {
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
  },
  "21:AIP": {
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/LOCATION_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "21:AIS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES/SERVICE"],
  },
  "21:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "22:AIG": {
    groupsClosed: ["SRM_S01/RESOURCES/SERVICE"],
    groupsOpened: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
  },
  "22:AIL": {
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
  },
  "22:AIP": {
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/LOCATION_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "22:AIS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES/SERVICE"],
  },
  "22:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "23:DG1": {
    groupsClosed: ["SRM_S01/PATIENT/OBSERVATION"],
    groupsOpened: [],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/PATIENT/OBSERVATION"],
  },
  "23:PID": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/PATIENT"],
  },
  "23:RGS": {
    groupsClosed: ["SRM_S01/PATIENT", "SRM_S01/PATIENT/OBSERVATION"],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/PATIENT"],
  },
  "2:RGS": {
    groupsClosed: ["SRM_S01/PATIENT"],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "3:AIG": {
    groupsClosed: ["SRM_S01/RESOURCES/SERVICE"],
    groupsOpened: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
  },
  "3:AIL": {
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
  },
  "3:AIP": {
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/LOCATION_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "3:AIS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES/SERVICE"],
  },
  "3:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "4:DG1": {
    groupsClosed: ["SRM_S01/PATIENT/OBSERVATION"],
    groupsOpened: [],
  },
  "4:OBX": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/PATIENT/OBSERVATION"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/PATIENT"],
  },
  "4:RGS": {
    groupsClosed: ["SRM_S01/PATIENT", "SRM_S01/PATIENT/OBSERVATION"],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/PATIENT"],
  },
  "5:RGS": {
    groupsClosed: ["SRM_S01/PATIENT"],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/PATIENT"],
  },
  "6:RGS": {
    groupsClosed: ["SRM_S01/PATIENT"],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "7:AIP": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "7:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "8:AIL": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
  },
  "8:AIP": {
    groupsClosed: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "8:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
  "9:AIG": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
  },
  "9:AIL": {
    groupsClosed: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
  },
  "9:AIP": {
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/LOCATION_RESOURCE",
    ],
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "9:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRM_S01/RESOURCES"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
