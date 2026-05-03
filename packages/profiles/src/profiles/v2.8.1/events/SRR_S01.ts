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
  "10:AIL": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "10:AIP": {
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "10:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
  "11:AIG": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "11:AIL": {
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "11:AIP": {
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
    ],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "11:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
  "12:AIG": {
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "12:AIL": {
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "12:AIP": {
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "12:AIS": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
  },
  "12:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
  "13:PID": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/PATIENT"],
  },
  "13:RGS": {
    groupsClosed: ["SRR_S01/SCHEDULE/PATIENT"],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
  "14:PID": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/PATIENT"],
  },
  "14:RGS": {
    groupsClosed: ["SRR_S01/SCHEDULE/PATIENT"],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
  "15:PID": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/PATIENT"],
  },
  "15:RGS": {
    groupsClosed: ["SRR_S01/SCHEDULE/PATIENT"],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
  "16:AIP": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "16:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
  "17:AIL": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "17:AIP": {
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "17:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
  "18:AIG": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "18:AIL": {
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "18:AIP": {
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
    ],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "18:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
  "19:AIG": {
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "19:AIL": {
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "19:AIP": {
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "19:AIS": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
  },
  "19:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
  "2:SCH": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/PATIENT"],
  },
  "3:RGS": {
    groupsClosed: ["SRR_S01/SCHEDULE/PATIENT"],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
  "4:SCH": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE"],
  },
  "5:AIG": {
    groupsClosed: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "5:AIL": {
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "5:AIP": {
    groupsClosed: [
      "SRR_S01/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SRR_S01/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "5:AIS": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/SERVICE"],
  },
  "5:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/PATIENT"],
  },
  "6:RGS": {
    groupsClosed: ["SRR_S01/SCHEDULE/PATIENT"],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/PATIENT"],
  },
  "7:RGS": {
    groupsClosed: ["SRR_S01/SCHEDULE/PATIENT"],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/PATIENT"],
  },
  "8:RGS": {
    groupsClosed: ["SRR_S01/SCHEDULE/PATIENT"],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
  "9:AIP": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "9:RGS": {
    groupsClosed: [],
    groupsOpened: ["SRR_S01/SCHEDULE/RESOURCES"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
