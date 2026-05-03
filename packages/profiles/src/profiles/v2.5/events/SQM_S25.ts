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
    groupsClosed: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
  },
  "10:AIP": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "10:DSC": {
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: [],
  },
  "10:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
  },
  "11:AIG": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE"],
  },
  "11:AIL": {
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
  },
  "11:AIP": {
    groupsClosed: ["SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE"],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "11:DSC": {
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: [],
  },
  "11:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
  },
  "12:AIG": {
    groupsClosed: ["SQM_S25/REQUEST/RESOURCES/SERVICE"],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE"],
  },
  "12:AIL": {
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
  },
  "12:AIP": {
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "12:AIS": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/SERVICE"],
  },
  "12:DSC": {
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
    groupsOpened: [],
  },
  "12:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
  },
  "13:AIL": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
  },
  "13:DSC": {
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
    ],
    groupsOpened: [],
  },
  "13:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
  },
  "14:AIL": {
    groupsClosed: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
  },
  "14:AIP": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "14:DSC": {
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: [],
  },
  "14:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
  },
  "15:AIG": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE"],
  },
  "15:AIL": {
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
  },
  "15:AIP": {
    groupsClosed: ["SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE"],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "15:DSC": {
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
    ],
    groupsOpened: [],
  },
  "15:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
  },
  "16:AIG": {
    groupsClosed: ["SQM_S25/REQUEST/RESOURCES/SERVICE"],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE"],
  },
  "16:AIL": {
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
  },
  "16:AIP": {
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "16:AIS": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/SERVICE"],
  },
  "16:DSC": {
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
    groupsOpened: [],
  },
  "16:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
  },
  "2:ARQ": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST"],
  },
  "2:DSC": {
    groupsClosed: ["SQM_S25/REQUEST"],
    groupsOpened: [],
  },
  "4:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
  },
  "5:ARQ": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST"],
  },
  "5:DSC": {
    groupsClosed: ["SQM_S25/REQUEST"],
    groupsOpened: [],
  },
  "6:AIG": {
    groupsClosed: ["SQM_S25/REQUEST/RESOURCES/SERVICE"],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE"],
  },
  "6:AIL": {
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
  },
  "6:AIP": {
    groupsClosed: [
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE"],
  },
  "6:AIS": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/SERVICE"],
  },
  "6:DSC": {
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/GENERAL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/PERSONNEL_RESOURCE",
      "SQM_S25/REQUEST/RESOURCES/SERVICE",
    ],
    groupsOpened: [],
  },
  "6:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
  },
  "7:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
  },
  "8:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
  },
  "9:AIL": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE"],
  },
  "9:DSC": {
    groupsClosed: [
      "SQM_S25/REQUEST",
      "SQM_S25/REQUEST/RESOURCES",
      "SQM_S25/REQUEST/RESOURCES/LOCATION_RESOURCE",
    ],
    groupsOpened: [],
  },
  "9:RGS": {
    groupsClosed: [],
    groupsOpened: ["SQM_S25/REQUEST/RESOURCES"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
