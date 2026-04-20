// Generated profile automaton for SRR_S01 (v2.3)

export const start = 0;
export const finals = new Set<number>([2, 4, 5, 8, 9, 10, 11, 15, 16, 17, 18]);
export const alphabet = new Set<string>([
  "AIG",
  "AIL",
  "AIP",
  "AIS",
  "DG1",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "PID",
  "PV1",
  "PV2",
  "RGS",
  "SCH",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 4],
      ["SCH", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["NTE", 7],
      ["PID", 6],
      ["RGS", 5],
    ]),
  ],
  [4, new Map([["SCH", 3]])],
  [
    5,
    new Map([
      ["AIG", 10],
      ["AIL", 9],
      ["AIP", 8],
      ["AIS", 11],
      ["RGS", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["DG1", 12],
      ["PID", 6],
      ["PV1", 14],
      ["PV2", 13],
      ["RGS", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 7],
      ["PID", 6],
      ["RGS", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["AIP", 8],
      ["NTE", 15],
      ["RGS", 5],
    ]),
  ],
  [
    9,
    new Map([
      ["AIL", 9],
      ["AIP", 8],
      ["NTE", 16],
      ["RGS", 5],
    ]),
  ],
  [
    10,
    new Map([
      ["AIG", 10],
      ["AIL", 9],
      ["AIP", 8],
      ["NTE", 17],
      ["RGS", 5],
    ]),
  ],
  [
    11,
    new Map([
      ["AIG", 10],
      ["AIL", 9],
      ["AIP", 8],
      ["AIS", 11],
      ["NTE", 18],
      ["RGS", 5],
    ]),
  ],
  [
    12,
    new Map([
      ["DG1", 12],
      ["PID", 6],
      ["RGS", 5],
    ]),
  ],
  [
    13,
    new Map([
      ["DG1", 12],
      ["PID", 6],
      ["RGS", 5],
    ]),
  ],
  [
    14,
    new Map([
      ["DG1", 12],
      ["PID", 6],
      ["PV2", 13],
      ["RGS", 5],
    ]),
  ],
  [
    15,
    new Map([
      ["AIP", 8],
      ["NTE", 15],
      ["RGS", 5],
    ]),
  ],
  [
    16,
    new Map([
      ["AIL", 9],
      ["AIP", 8],
      ["NTE", 16],
      ["RGS", 5],
    ]),
  ],
  [
    17,
    new Map([
      ["AIG", 10],
      ["AIL", 9],
      ["AIP", 8],
      ["NTE", 17],
      ["RGS", 5],
    ]),
  ],
  [
    18,
    new Map([
      ["AIG", 10],
      ["AIL", 9],
      ["AIP", 8],
      ["AIS", 11],
      ["NTE", 18],
      ["RGS", 5],
    ]),
  ],
]);
export const effects = {
  "2:SCH": {
    groupsOpened: ["SRR_S01/SCHEDULE"],
    groupsClosed: [],
  },
  "3:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: ["SRR_S01/SCHEDULE/PATIENT"],
  },
  "3:PID": {
    groupsOpened: ["SRR_S01/SCHEDULE/PATIENT"],
    groupsClosed: [],
  },
  "4:SCH": {
    groupsOpened: ["SRR_S01/SCHEDULE"],
    groupsClosed: [],
  },
  "5:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "5:AIP": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "5:AIL": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "5:AIG": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
  },
  "5:AIS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["SRR_S01/SCHEDULE/PATIENT"],
    groupsClosed: [],
  },
  "6:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: ["SRR_S01/SCHEDULE/PATIENT"],
  },
  "7:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: ["SRR_S01/SCHEDULE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["SRR_S01/SCHEDULE/PATIENT"],
    groupsClosed: [],
  },
  "8:AIP": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [],
  },
  "8:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "9:AIL": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [],
  },
  "9:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "9:AIP": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "10:AIG": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: [],
  },
  "10:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "10:AIP": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
    ],
  },
  "10:AIL": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "11:AIS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "11:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "11:AIP": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "11:AIL": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "11:AIG": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
  },
  "12:PID": {
    groupsOpened: ["SRR_S01/SCHEDULE/PATIENT"],
    groupsClosed: [],
  },
  "12:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: ["SRR_S01/SCHEDULE/PATIENT"],
  },
  "13:PID": {
    groupsOpened: ["SRR_S01/SCHEDULE/PATIENT"],
    groupsClosed: [],
  },
  "13:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: ["SRR_S01/SCHEDULE/PATIENT"],
  },
  "14:PID": {
    groupsOpened: ["SRR_S01/SCHEDULE/PATIENT"],
    groupsClosed: [],
  },
  "14:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: ["SRR_S01/SCHEDULE/PATIENT"],
  },
  "15:AIP": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [],
  },
  "15:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "16:AIL": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [],
  },
  "16:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "16:AIP": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "17:AIG": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: [],
  },
  "17:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "17:AIP": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
    ],
  },
  "17:AIL": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "18:AIS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "18:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "18:AIP": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "18:AIL": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "18:AIG": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
