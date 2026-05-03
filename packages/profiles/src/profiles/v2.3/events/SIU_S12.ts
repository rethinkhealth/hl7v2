// Generated profile automaton for SIU_S12 (v2.3)

export const start = 0;
export const finals = new Set<number>([3, 6, 7, 8, 9, 14, 15, 16, 17]);
export const alphabet = new Set<string>([
  "AIG",
  "AIL",
  "AIP",
  "AIS",
  "DG1",
  "MSH",
  "NTE",
  "OBX",
  "PID",
  "PV1",
  "PV2",
  "RGS",
  "SCH",
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
    ]),
  ],
  [
    3,
    new Map([
      ["AIG", 8],
      ["AIL", 7],
      ["AIP", 6],
      ["AIS", 9],
      ["RGS", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["DG1", 10],
      ["OBX", 11],
      ["PID", 4],
      ["PV1", 13],
      ["PV2", 12],
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
      ["AIP", 6],
      ["NTE", 14],
      ["RGS", 3],
    ]),
  ],
  [
    7,
    new Map([
      ["AIL", 7],
      ["AIP", 6],
      ["NTE", 15],
      ["RGS", 3],
    ]),
  ],
  [
    8,
    new Map([
      ["AIG", 8],
      ["AIL", 7],
      ["AIP", 6],
      ["NTE", 16],
      ["RGS", 3],
    ]),
  ],
  [
    9,
    new Map([
      ["AIG", 8],
      ["AIL", 7],
      ["AIP", 6],
      ["AIS", 9],
      ["NTE", 17],
      ["RGS", 3],
    ]),
  ],
  [
    10,
    new Map([
      ["DG1", 10],
      ["PID", 4],
      ["RGS", 3],
    ]),
  ],
  [
    11,
    new Map([
      ["DG1", 10],
      ["OBX", 11],
      ["PID", 4],
      ["RGS", 3],
    ]),
  ],
  [
    12,
    new Map([
      ["DG1", 10],
      ["OBX", 11],
      ["PID", 4],
      ["RGS", 3],
    ]),
  ],
  [
    13,
    new Map([
      ["DG1", 10],
      ["OBX", 11],
      ["PID", 4],
      ["PV2", 12],
      ["RGS", 3],
    ]),
  ],
  [
    14,
    new Map([
      ["AIP", 6],
      ["NTE", 14],
      ["RGS", 3],
    ]),
  ],
  [
    15,
    new Map([
      ["AIL", 7],
      ["AIP", 6],
      ["NTE", 15],
      ["RGS", 3],
    ]),
  ],
  [
    16,
    new Map([
      ["AIG", 8],
      ["AIL", 7],
      ["AIP", 6],
      ["NTE", 16],
      ["RGS", 3],
    ]),
  ],
  [
    17,
    new Map([
      ["AIG", 8],
      ["AIL", 7],
      ["AIP", 6],
      ["AIS", 9],
      ["NTE", 17],
      ["RGS", 3],
    ]),
  ],
]);
export const effects = {
  "10:PID": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/PATIENT"],
  },
  "10:RGS": {
    groupsClosed: ["SIU_S12/PATIENT"],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
  "11:PID": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/PATIENT"],
  },
  "11:RGS": {
    groupsClosed: ["SIU_S12/PATIENT"],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
  "12:PID": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/PATIENT"],
  },
  "12:RGS": {
    groupsClosed: ["SIU_S12/PATIENT"],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
  "13:PID": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/PATIENT"],
  },
  "13:RGS": {
    groupsClosed: ["SIU_S12/PATIENT"],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
  "14:AIP": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "14:RGS": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
  "15:AIL": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
  },
  "15:AIP": {
    groupsClosed: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "15:RGS": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
  "16:AIG": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
  },
  "16:AIL": {
    groupsClosed: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
  },
  "16:AIP": {
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/LOCATION_RESOURCE",
    ],
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "16:RGS": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
  "17:AIG": {
    groupsClosed: ["SIU_S12/RESOURCES/SERVICE"],
    groupsOpened: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
  },
  "17:AIL": {
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
  },
  "17:AIP": {
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/LOCATION_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "17:AIS": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES/SERVICE"],
  },
  "17:RGS": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/PATIENT"],
  },
  "2:RGS": {
    groupsClosed: ["SIU_S12/PATIENT"],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
  "3:AIG": {
    groupsClosed: ["SIU_S12/RESOURCES/SERVICE"],
    groupsOpened: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
  },
  "3:AIL": {
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
  },
  "3:AIP": {
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/LOCATION_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "3:AIS": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES/SERVICE"],
  },
  "3:RGS": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/PATIENT"],
  },
  "4:RGS": {
    groupsClosed: ["SIU_S12/PATIENT"],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/PATIENT"],
  },
  "5:RGS": {
    groupsClosed: ["SIU_S12/PATIENT"],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
  "6:AIP": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "6:RGS": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
  "7:AIL": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
  },
  "7:AIP": {
    groupsClosed: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "7:RGS": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
  "8:AIG": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
  },
  "8:AIL": {
    groupsClosed: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
  },
  "8:AIP": {
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/LOCATION_RESOURCE",
    ],
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "8:RGS": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
  "9:AIG": {
    groupsClosed: ["SIU_S12/RESOURCES/SERVICE"],
    groupsOpened: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
  },
  "9:AIL": {
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
  },
  "9:AIP": {
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/LOCATION_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "9:AIS": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES/SERVICE"],
  },
  "9:RGS": {
    groupsClosed: [],
    groupsOpened: ["SIU_S12/RESOURCES"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
