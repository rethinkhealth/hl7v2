// Generated profile automaton for SRM_S01 (v2.3.1)

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
]);
export const effects = {
  "10:AIG": {
    groupsOpened: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SRM_S01/RESOURCES/SERVICE"],
  },
  "10:AIL": {
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
  },
  "10:AIP": {
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/LOCATION_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
  },
  "10:AIS": {
    groupsOpened: ["SRM_S01/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "10:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: [],
  },
  "11:PID": {
    groupsOpened: ["SRM_S01/PATIENT"],
    groupsClosed: [],
  },
  "11:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: ["SRM_S01/PATIENT"],
  },
  "12:PID": {
    groupsOpened: ["SRM_S01/PATIENT"],
    groupsClosed: [],
  },
  "12:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: ["SRM_S01/PATIENT"],
  },
  "13:PID": {
    groupsOpened: ["SRM_S01/PATIENT"],
    groupsClosed: [],
  },
  "13:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: ["SRM_S01/PATIENT"],
  },
  "14:PID": {
    groupsOpened: ["SRM_S01/PATIENT"],
    groupsClosed: [],
  },
  "14:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: ["SRM_S01/PATIENT"],
  },
  "15:AIP": {
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [],
  },
  "15:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: [],
  },
  "16:AIP": {
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [],
  },
  "16:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: [],
  },
  "17:AIL": {
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [],
  },
  "17:AIP": {
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
  },
  "17:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: [],
  },
  "18:AIL": {
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [],
  },
  "18:AIP": {
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
  },
  "18:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: [],
  },
  "19:AIG": {
    groupsOpened: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: [],
  },
  "19:AIL": {
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
  },
  "19:AIP": {
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/LOCATION_RESOURCE",
    ],
  },
  "19:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: [],
  },
  "20:AIG": {
    groupsOpened: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: [],
  },
  "20:AIL": {
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
  },
  "20:AIP": {
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/LOCATION_RESOURCE",
    ],
  },
  "20:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: [],
  },
  "21:AIG": {
    groupsOpened: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SRM_S01/RESOURCES/SERVICE"],
  },
  "21:AIL": {
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
  },
  "21:AIP": {
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/LOCATION_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
  },
  "21:AIS": {
    groupsOpened: ["SRM_S01/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "21:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: [],
  },
  "22:AIG": {
    groupsOpened: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SRM_S01/RESOURCES/SERVICE"],
  },
  "22:AIL": {
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
  },
  "22:AIP": {
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/LOCATION_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
  },
  "22:AIS": {
    groupsOpened: ["SRM_S01/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "22:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: [],
  },
  "2:PID": {
    groupsOpened: ["SRM_S01/PATIENT"],
    groupsClosed: [],
  },
  "2:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: ["SRM_S01/PATIENT"],
  },
  "3:AIG": {
    groupsOpened: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SRM_S01/RESOURCES/SERVICE"],
  },
  "3:AIL": {
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
  },
  "3:AIP": {
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/LOCATION_RESOURCE",
      "SRM_S01/RESOURCES/SERVICE",
    ],
  },
  "3:AIS": {
    groupsOpened: ["SRM_S01/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "3:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["SRM_S01/PATIENT"],
    groupsClosed: [],
  },
  "4:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: ["SRM_S01/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["SRM_S01/PATIENT"],
    groupsClosed: [],
  },
  "5:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: ["SRM_S01/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["SRM_S01/PATIENT"],
    groupsClosed: [],
  },
  "6:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: ["SRM_S01/PATIENT"],
  },
  "7:AIP": {
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [],
  },
  "7:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: [],
  },
  "8:AIL": {
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [],
  },
  "8:AIP": {
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
  },
  "8:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: [],
  },
  "9:AIG": {
    groupsOpened: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: [],
  },
  "9:AIL": {
    groupsOpened: ["SRM_S01/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: ["SRM_S01/RESOURCES/GENERAL_RESOURCE"],
  },
  "9:AIP": {
    groupsOpened: ["SRM_S01/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SRM_S01/RESOURCES/GENERAL_RESOURCE",
      "SRM_S01/RESOURCES/LOCATION_RESOURCE",
    ],
  },
  "9:RGS": {
    groupsOpened: ["SRM_S01/RESOURCES"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
