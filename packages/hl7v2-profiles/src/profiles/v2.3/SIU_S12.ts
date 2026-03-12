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
    groupsOpened: ["SIU_S12/PATIENT"],
    groupsClosed: [],
  },
  "10:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: ["SIU_S12/PATIENT"],
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
  "14:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [],
  },
  "14:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: [],
  },
  "15:AIL": {
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [],
  },
  "15:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
  },
  "15:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: [],
  },
  "16:AIG": {
    groupsOpened: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: [],
  },
  "16:AIL": {
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
  },
  "16:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/LOCATION_RESOURCE",
    ],
  },
  "16:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: [],
  },
  "17:AIG": {
    groupsOpened: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SIU_S12/RESOURCES/SERVICE"],
  },
  "17:AIL": {
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
  },
  "17:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/LOCATION_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
  },
  "17:AIS": {
    groupsOpened: ["SIU_S12/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "17:RGS": {
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
  "6:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [],
  },
  "6:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: [],
  },
  "7:AIL": {
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [],
  },
  "7:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
  },
  "7:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: [],
  },
  "8:AIG": {
    groupsOpened: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: [],
  },
  "8:AIL": {
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
  },
  "8:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/LOCATION_RESOURCE",
    ],
  },
  "8:RGS": {
    groupsOpened: ["SIU_S12/RESOURCES"],
    groupsClosed: [],
  },
  "9:AIG": {
    groupsOpened: ["SIU_S12/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SIU_S12/RESOURCES/SERVICE"],
  },
  "9:AIL": {
    groupsOpened: ["SIU_S12/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
  },
  "9:AIP": {
    groupsOpened: ["SIU_S12/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SIU_S12/RESOURCES/GENERAL_RESOURCE",
      "SIU_S12/RESOURCES/LOCATION_RESOURCE",
      "SIU_S12/RESOURCES/SERVICE",
    ],
  },
  "9:AIS": {
    groupsOpened: ["SIU_S12/RESOURCES/SERVICE"],
    groupsClosed: [],
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
