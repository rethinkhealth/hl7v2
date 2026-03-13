// Generated profile automaton for SRR_S01 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([2, 4, 5, 9, 10, 11, 12, 16, 17, 18, 19]);
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
  "TQ1",
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
      ["TQ1", 8],
    ]),
  ],
  [
    4,
    new Map([
      ["ERR", 4],
      ["SCH", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["AIG", 11],
      ["AIL", 10],
      ["AIP", 9],
      ["AIS", 12],
      ["RGS", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["DG1", 13],
      ["PID", 6],
      ["PV1", 15],
      ["PV2", 14],
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
      ["NTE", 7],
      ["PID", 6],
      ["RGS", 5],
      ["TQ1", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["AIP", 9],
      ["NTE", 16],
      ["RGS", 5],
    ]),
  ],
  [
    10,
    new Map([
      ["AIL", 10],
      ["AIP", 9],
      ["NTE", 17],
      ["RGS", 5],
    ]),
  ],
  [
    11,
    new Map([
      ["AIG", 11],
      ["AIL", 10],
      ["AIP", 9],
      ["NTE", 18],
      ["RGS", 5],
    ]),
  ],
  [
    12,
    new Map([
      ["AIG", 11],
      ["AIL", 10],
      ["AIP", 9],
      ["AIS", 12],
      ["NTE", 19],
      ["RGS", 5],
    ]),
  ],
  [
    13,
    new Map([
      ["DG1", 13],
      ["PID", 6],
      ["RGS", 5],
    ]),
  ],
  [
    14,
    new Map([
      ["DG1", 13],
      ["PID", 6],
      ["RGS", 5],
    ]),
  ],
  [
    15,
    new Map([
      ["DG1", 13],
      ["PID", 6],
      ["PV2", 14],
      ["RGS", 5],
    ]),
  ],
  [
    16,
    new Map([
      ["AIP", 9],
      ["NTE", 16],
      ["RGS", 5],
    ]),
  ],
  [
    17,
    new Map([
      ["AIL", 10],
      ["AIP", 9],
      ["NTE", 17],
      ["RGS", 5],
    ]),
  ],
  [
    18,
    new Map([
      ["AIG", 11],
      ["AIL", 10],
      ["AIP", 9],
      ["NTE", 18],
      ["RGS", 5],
    ]),
  ],
  [
    19,
    new Map([
      ["AIG", 11],
      ["AIL", 10],
      ["AIP", 9],
      ["AIS", 12],
      ["NTE", 19],
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
  "8:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: ["SRR_S01/SCHEDULE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["SRR_S01/SCHEDULE/PATIENT"],
    groupsClosed: [],
  },
  "9:AIP": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [],
  },
  "9:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "10:AIL": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [],
  },
  "10:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "10:AIP": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "11:AIG": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
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
    ],
  },
  "11:AIL": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "12:AIS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "12:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "12:AIP": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "12:AIL": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "12:AIG": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
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
  "15:PID": {
    groupsOpened: ["SRR_S01/SCHEDULE/PATIENT"],
    groupsClosed: [],
  },
  "15:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: ["SRR_S01/SCHEDULE/PATIENT"],
  },
  "16:AIP": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [],
  },
  "16:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "17:AIL": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [],
  },
  "17:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "17:AIP": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "18:AIG": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
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
    ],
  },
  "18:AIL": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "19:AIS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "19:RGS": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "19:AIP": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "19:AIL": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "19:AIG": {
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
