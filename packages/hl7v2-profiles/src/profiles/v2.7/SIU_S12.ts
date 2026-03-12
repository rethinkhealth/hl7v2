// Generated profile automaton for SIU_S12 (v2.7)

export const start = 0;
export const finals = new Set<number>([3, 7, 8, 9, 10, 16, 17, 18, 19]);
export const alphabet = new Set<string>([
  "AIG",
  "AIL",
  "AIP",
  "AIS",
  "DG1",
  "MSH",
  "NTE",
  "OBX",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "RGS",
  "SCH",
  "TQ1",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["SCH", 2]])],
  [
    2,
    new Map([
      ["NTE", 5],
      ["PID", 4],
      ["RGS", 3],
      ["TQ1", 6],
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
      ["PD1", 15],
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
      ["TQ1", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["AIP", 7],
      ["NTE", 16],
      ["RGS", 3],
    ]),
  ],
  [
    8,
    new Map([
      ["AIL", 8],
      ["AIP", 7],
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
      ["NTE", 18],
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
      ["NTE", 19],
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
      ["DG1", 11],
      ["OBX", 12],
      ["PID", 4],
      ["PV1", 14],
      ["PV2", 13],
      ["RGS", 3],
    ]),
  ],
  [
    16,
    new Map([
      ["AIP", 7],
      ["NTE", 16],
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
      ["AIG", 9],
      ["AIL", 8],
      ["AIP", 7],
      ["NTE", 18],
      ["RGS", 3],
    ]),
  ],
  [
    19,
    new Map([
      ["AIG", 9],
      ["AIL", 8],
      ["AIP", 7],
      ["AIS", 10],
      ["NTE", 19],
      ["RGS", 3],
    ]),
  ],
]);
export const effects = {
  "10:AIG": {
    groupsOpened: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SIU_S12/RESOURCES/SERVICE"],
  },
  "10:AIL": {
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
  },
  "10:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/LOCATION_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
  },
  "10:AIS": {
    groupsOpened: ["SIU_S12/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "10:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: [],
  },
  "11:PID": {
    groupsOpened: ["SIU_S12/PATIENT"],
    groupsClosed: [],
  },
  "11:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: ["SIU_S12/PATIENT"],
  },
  "12:PID": {
    groupsOpened: ["SIU_S12/PATIENT"],
    groupsClosed: [],
  },
  "12:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: ["SIU_S12/PATIENT"],
  },
  "13:PID": {
    groupsOpened: ["SIU_S12/PATIENT"],
    groupsClosed: [],
  },
  "13:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: ["SIU_S12/PATIENT"],
  },
  "14:PID": {
    groupsOpened: ["SIU_S12/PATIENT"],
    groupsClosed: [],
  },
  "14:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: ["SIU_S12/PATIENT"],
  },
  "15:PID": {
    groupsOpened: ["SIU_S12/PATIENT"],
    groupsClosed: [],
  },
  "15:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: ["SIU_S12/PATIENT"],
  },
  "16:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [],
  },
  "16:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: [],
  },
  "17:AIL": {
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [],
  },
  "17:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
  },
  "17:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: [],
  },
  "18:AIG": {
    groupsOpened: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: [],
  },
  "18:AIL": {
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
  },
  "18:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/LOCATION_RESOURCE",
    ],
  },
  "18:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: [],
  },
  "19:AIG": {
    groupsOpened: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SIU_S12/RESOURCES/SERVICE"],
  },
  "19:AIL": {
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
  },
  "19:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/LOCATION_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
  },
  "19:AIS": {
    groupsOpened: ["SIU_S12/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "19:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: [],
  },
  "2:PID": {
    groupsOpened: ["SIU_S12/PATIENT"],
    groupsClosed: [],
  },
  "2:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: ["SIU_S12/PATIENT"],
  },
  "3:AIG": {
    groupsOpened: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SIU_S12/RESOURCES/SERVICE"],
  },
  "3:AIL": {
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
  },
  "3:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/LOCATION_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
  },
  "3:AIS": {
    groupsOpened: ["SIU_S12/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "3:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["SIU_S12/PATIENT"],
    groupsClosed: [],
  },
  "4:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: ["SIU_S12/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["SIU_S12/PATIENT"],
    groupsClosed: [],
  },
  "5:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: ["SIU_S12/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["SIU_S12/PATIENT"],
    groupsClosed: [],
  },
  "6:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: ["SIU_S12/PATIENT"],
  },
  "7:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [],
  },
  "7:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: [],
  },
  "8:AIL": {
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [],
  },
  "8:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
  },
  "8:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: [],
  },
  "9:AIG": {
    groupsOpened: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: [],
  },
  "9:AIL": {
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
  },
  "9:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/LOCATION_RESOURCE",
    ],
  },
  "9:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
