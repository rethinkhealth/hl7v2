// Generated profile automaton for SQR_S25 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  3, 5, 7, 11, 12, 13, 14, 18, 19, 20, 21,
]);
export const alphabet = new Set<string>([
  "AIG",
  "AIL",
  "AIP",
  "AIS",
  "DG1",
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "PID",
  "PV1",
  "PV2",
  "QAK",
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
      ["QAK", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["DSC", 5],
      ["SCH", 6],
    ]),
  ],
  [
    4,
    new Map([
      ["ERR", 4],
      ["QAK", 3],
    ]),
  ],
  [5, new Map([])],
  [
    6,
    new Map([
      ["NTE", 9],
      ["PID", 8],
      ["RGS", 7],
      ["TQ1", 10],
    ]),
  ],
  [
    7,
    new Map([
      ["AIG", 13],
      ["AIL", 11],
      ["AIP", 12],
      ["AIS", 14],
      ["DSC", 5],
      ["RGS", 7],
      ["SCH", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["DG1", 15],
      ["PV1", 17],
      ["PV2", 16],
      ["RGS", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 9],
      ["PID", 8],
      ["RGS", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 9],
      ["PID", 8],
      ["RGS", 7],
      ["TQ1", 10],
    ]),
  ],
  [
    11,
    new Map([
      ["AIL", 11],
      ["DSC", 5],
      ["NTE", 18],
      ["RGS", 7],
      ["SCH", 6],
    ]),
  ],
  [
    12,
    new Map([
      ["AIL", 11],
      ["AIP", 12],
      ["DSC", 5],
      ["NTE", 19],
      ["RGS", 7],
      ["SCH", 6],
    ]),
  ],
  [
    13,
    new Map([
      ["AIG", 13],
      ["AIL", 11],
      ["AIP", 12],
      ["DSC", 5],
      ["NTE", 20],
      ["RGS", 7],
      ["SCH", 6],
    ]),
  ],
  [
    14,
    new Map([
      ["AIG", 13],
      ["AIL", 11],
      ["AIP", 12],
      ["AIS", 14],
      ["DSC", 5],
      ["NTE", 21],
      ["RGS", 7],
      ["SCH", 6],
    ]),
  ],
  [15, new Map([["RGS", 7]])],
  [
    16,
    new Map([
      ["DG1", 15],
      ["RGS", 7],
    ]),
  ],
  [
    17,
    new Map([
      ["DG1", 15],
      ["PV2", 16],
      ["RGS", 7],
    ]),
  ],
  [
    18,
    new Map([
      ["AIL", 11],
      ["DSC", 5],
      ["NTE", 18],
      ["RGS", 7],
      ["SCH", 6],
    ]),
  ],
  [
    19,
    new Map([
      ["AIL", 11],
      ["AIP", 12],
      ["DSC", 5],
      ["NTE", 19],
      ["RGS", 7],
      ["SCH", 6],
    ]),
  ],
  [
    20,
    new Map([
      ["AIG", 13],
      ["AIL", 11],
      ["AIP", 12],
      ["DSC", 5],
      ["NTE", 20],
      ["RGS", 7],
      ["SCH", 6],
    ]),
  ],
  [
    21,
    new Map([
      ["AIG", 13],
      ["AIL", 11],
      ["AIP", 12],
      ["AIS", 14],
      ["DSC", 5],
      ["NTE", 21],
      ["RGS", 7],
      ["SCH", 6],
    ]),
  ],
]);
export const effects = {
  "10:PID": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/PATIENT"],
  },
  "10:RGS": {
    groupsClosed: ["SQR_S25/SCHEDULE/PATIENT"],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
  "11:AIL": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "11:DSC": {
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
    ],
    groupsOpened: [],
  },
  "11:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
  "11:SCH": {
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsOpened: ["SQR_S25/SCHEDULE"],
  },
  "12:AIL": {
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "12:AIP": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "12:DSC": {
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: [],
  },
  "12:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
  "12:SCH": {
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: ["SQR_S25/SCHEDULE"],
  },
  "13:AIG": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "13:AIL": {
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "13:AIP": {
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "13:DSC": {
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: [],
  },
  "13:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
  "13:SCH": {
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: ["SQR_S25/SCHEDULE"],
  },
  "14:AIG": {
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/SERVICE"],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "14:AIL": {
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "14:AIP": {
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "14:AIS": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/SERVICE"],
  },
  "14:DSC": {
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: [],
  },
  "14:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
  "14:SCH": {
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SQR_S25/SCHEDULE"],
  },
  "15:RGS": {
    groupsClosed: ["SQR_S25/SCHEDULE/PATIENT"],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
  "16:RGS": {
    groupsClosed: ["SQR_S25/SCHEDULE/PATIENT"],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
  "17:RGS": {
    groupsClosed: ["SQR_S25/SCHEDULE/PATIENT"],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
  "18:AIL": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "18:DSC": {
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
    ],
    groupsOpened: [],
  },
  "18:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
  "18:SCH": {
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsOpened: ["SQR_S25/SCHEDULE"],
  },
  "19:AIL": {
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "19:AIP": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "19:DSC": {
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: [],
  },
  "19:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
  "19:SCH": {
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: ["SQR_S25/SCHEDULE"],
  },
  "20:AIG": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "20:AIL": {
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "20:AIP": {
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "20:DSC": {
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: [],
  },
  "20:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
  "20:SCH": {
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: ["SQR_S25/SCHEDULE"],
  },
  "21:AIG": {
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/SERVICE"],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "21:AIL": {
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "21:AIP": {
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "21:AIS": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/SERVICE"],
  },
  "21:DSC": {
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: [],
  },
  "21:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
  "21:SCH": {
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SQR_S25/SCHEDULE"],
  },
  "3:DSC": {
    groupsClosed: ["SQR_S25/SCHEDULE"],
    groupsOpened: [],
  },
  "3:SCH": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/PATIENT"],
  },
  "6:RGS": {
    groupsClosed: ["SQR_S25/SCHEDULE/PATIENT"],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
  "7:AIG": {
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/SERVICE"],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "7:AIL": {
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "7:AIP": {
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "7:AIS": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/SERVICE"],
  },
  "7:DSC": {
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: [],
  },
  "7:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
  "7:SCH": {
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SQR_S25/SCHEDULE"],
  },
  "8:RGS": {
    groupsClosed: ["SQR_S25/SCHEDULE/PATIENT"],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
  "9:PID": {
    groupsClosed: [],
    groupsOpened: ["SQR_S25/SCHEDULE/PATIENT"],
  },
  "9:RGS": {
    groupsClosed: ["SQR_S25/SCHEDULE/PATIENT"],
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
