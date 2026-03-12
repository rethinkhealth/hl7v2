// Generated profile automaton for SQR_S25 (v2.5.1)

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
    groupsOpened: ["SQR_S25/SCHEDULE/PATIENT"],
    groupsClosed: [],
  },
  "10:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: ["SQR_S25/SCHEDULE/PATIENT"],
  },
  "11:AIL": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
    ],
  },
  "11:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "11:SCH": {
    groupsOpened: ["SQR_S25/SCHEDULE"],
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "12:AIL": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "12:AIP": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "12:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "12:SCH": {
    groupsOpened: ["SQR_S25/SCHEDULE"],
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "13:AIG": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: [],
  },
  "13:AIL": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "13:AIP": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "13:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "13:SCH": {
    groupsOpened: ["SQR_S25/SCHEDULE"],
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "14:AIG": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/SERVICE"],
  },
  "14:AIL": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "14:AIP": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "14:AIS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "14:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "14:SCH": {
    groupsOpened: ["SQR_S25/SCHEDULE"],
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "15:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: ["SQR_S25/SCHEDULE/PATIENT"],
  },
  "16:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: ["SQR_S25/SCHEDULE/PATIENT"],
  },
  "17:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: ["SQR_S25/SCHEDULE/PATIENT"],
  },
  "18:AIL": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
    ],
  },
  "18:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "18:SCH": {
    groupsOpened: ["SQR_S25/SCHEDULE"],
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
  },
  "19:AIL": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "19:AIP": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "19:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "19:SCH": {
    groupsOpened: ["SQR_S25/SCHEDULE"],
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "20:AIG": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: [],
  },
  "20:AIL": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "20:AIP": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "20:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "20:SCH": {
    groupsOpened: ["SQR_S25/SCHEDULE"],
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "21:AIG": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/SERVICE"],
  },
  "21:AIL": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "21:AIP": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "21:AIS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "21:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "21:SCH": {
    groupsOpened: ["SQR_S25/SCHEDULE"],
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "3:DSC": {
    groupsOpened: [],
    groupsClosed: ["SQR_S25/SCHEDULE"],
  },
  "3:SCH": {
    groupsOpened: ["SQR_S25/SCHEDULE"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["SQR_S25/SCHEDULE/PATIENT"],
    groupsClosed: [],
  },
  "6:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: ["SQR_S25/SCHEDULE/PATIENT"],
  },
  "7:AIG": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SQR_S25/SCHEDULE/RESOURCES/SERVICE"],
  },
  "7:AIL": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "7:AIP": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "7:AIS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "7:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQR_S25/SCHEDULE",
      "SQR_S25/SCHEDULE/RESOURCES",
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "7:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: [],
  },
  "7:SCH": {
    groupsOpened: ["SQR_S25/SCHEDULE"],
    groupsClosed: [
      "SQR_S25/SCHEDULE/RESOURCES/GENERAL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/LOCATION_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/PERSONNEL_RESOURCE",
      "SQR_S25/SCHEDULE/RESOURCES/SERVICE",
    ],
  },
  "8:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: ["SQR_S25/SCHEDULE/PATIENT"],
  },
  "9:PID": {
    groupsOpened: ["SQR_S25/SCHEDULE/PATIENT"],
    groupsClosed: [],
  },
  "9:RGS": {
    groupsOpened: ["SQR_S25/SCHEDULE/RESOURCES"],
    groupsClosed: ["SQR_S25/SCHEDULE/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
