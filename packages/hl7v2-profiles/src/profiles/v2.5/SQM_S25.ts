// Generated profile automaton for SQM_S25 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16,
]);
export const alphabet = new Set<string>([
  "AIG",
  "AIL",
  "AIP",
  "AIS",
  "APR",
  "ARQ",
  "DSC",
  "MSH",
  "PID",
  "QRD",
  "QRF",
  "RGS",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["QRD", 2]])],
  [
    2,
    new Map([
      ["ARQ", 4],
      ["DSC", 3],
      ["QRF", 5],
    ]),
  ],
  [3, new Map([])],
  [
    4,
    new Map([
      ["APR", 8],
      ["PID", 7],
      ["RGS", 6],
    ]),
  ],
  [
    5,
    new Map([
      ["ARQ", 4],
      ["DSC", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["AIG", 11],
      ["AIL", 9],
      ["AIP", 10],
      ["AIS", 12],
      ["DSC", 3],
      ["RGS", 6],
    ]),
  ],
  [7, new Map([["RGS", 6]])],
  [
    8,
    new Map([
      ["PID", 7],
      ["RGS", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["AIL", 9],
      ["APR", 13],
      ["DSC", 3],
      ["RGS", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["AIL", 9],
      ["AIP", 10],
      ["APR", 14],
      ["DSC", 3],
      ["RGS", 6],
    ]),
  ],
  [
    11,
    new Map([
      ["AIG", 11],
      ["AIL", 9],
      ["AIP", 10],
      ["APR", 15],
      ["DSC", 3],
      ["RGS", 6],
    ]),
  ],
  [
    12,
    new Map([
      ["AIG", 11],
      ["AIL", 9],
      ["AIP", 10],
      ["AIS", 12],
      ["APR", 16],
      ["DSC", 3],
      ["RGS", 6],
    ]),
  ],
  [
    13,
    new Map([
      ["AIL", 9],
      ["DSC", 3],
      ["RGS", 6],
    ]),
  ],
  [
    14,
    new Map([
      ["AIL", 9],
      ["AIP", 10],
      ["DSC", 3],
      ["RGS", 6],
    ]),
  ],
  [
    15,
    new Map([
      ["AIG", 11],
      ["AIL", 9],
      ["AIP", 10],
      ["DSC", 3],
      ["RGS", 6],
    ]),
  ],
  [
    16,
    new Map([
      ["AIG", 11],
      ["AIL", 9],
      ["AIP", 10],
      ["AIS", 12],
      ["DSC", 3],
      ["RGS", 6],
    ]),
  ],
]);
export const effects = {
  "10:AIL": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "10:AIP": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "10:RGS": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
    groupsClosed: [],
  },
  "11:AIG": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: [],
  },
  "11:AIL": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "11:AIP": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: ["SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE"],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "11:RGS": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
    groupsClosed: [],
  },
  "12:AIG": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SQM_S25/REQUEST/RESOURCES/SERVICE"],
  },
  "12:AIL": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
  },
  "12:AIP": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
  },
  "12:AIS": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
  },
  "12:RGS": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
    groupsClosed: [],
  },
  "13:AIL": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
    ],
  },
  "13:RGS": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
    groupsClosed: [],
  },
  "14:AIL": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "14:AIP": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "14:RGS": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
    groupsClosed: [],
  },
  "15:AIG": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: [],
  },
  "15:AIL": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "15:AIP": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: ["SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE"],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
    ],
  },
  "15:RGS": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
    groupsClosed: [],
  },
  "16:AIG": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SQM_S25/REQUEST/RESOURCES/SERVICE"],
  },
  "16:AIL": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
  },
  "16:AIP": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
  },
  "16:AIS": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
  },
  "16:RGS": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
    groupsClosed: [],
  },
  "2:ARQ": {
    groupsOpened: ["SQM_S25/REQUEST"],
    groupsClosed: [],
  },
  "2:DSC": {
    groupsOpened: [],
    groupsClosed: ["SQM_S25/REQUEST"],
  },
  "4:RGS": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
    groupsClosed: [],
  },
  "5:ARQ": {
    groupsOpened: ["SQM_S25/REQUEST"],
    groupsClosed: [],
  },
  "5:DSC": {
    groupsOpened: [],
    groupsClosed: ["SQM_S25/REQUEST"],
  },
  "6:AIG": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE"],
    groupsClosed: ["SQM_S25/REQUEST/RESOURCES/SERVICE"],
  },
  "6:AIL": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
  },
  "6:AIP": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
  },
  "6:AIS": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/SERVICE"],
    groupsClosed: [],
  },
  "6:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
  },
  "6:RGS": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
    groupsClosed: [],
  },
  "7:RGS": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
    groupsClosed: [],
  },
  "8:RGS": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
    groupsClosed: [],
  },
  "9:AIL": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
    groupsClosed: [],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
    ],
  },
  "9:RGS": {
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
