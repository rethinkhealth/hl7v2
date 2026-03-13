// Generated profile automaton for PPV_PCA (v2.6)

export const start = 0;
export const finals = new Set<number>([
  9, 11, 12, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34,
]);
export const alphabet = new Set<string>([
  "ERR",
  "GOL",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PID",
  "PRB",
  "PTH",
  "PV1",
  "PV2",
  "QAK",
  "QRD",
  "ROL",
  "SFT",
  "UAC",
  "VAR",
  "anyHL7Segment",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 7],
      ["QAK", 6],
      ["QRD", 5],
    ]),
  ],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["PID", 8]])],
  [6, new Map([["QRD", 5]])],
  [
    7,
    new Map([
      ["ERR", 7],
      ["QAK", 6],
      ["QRD", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 9],
      ["PV1", 10],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 9],
      ["NTE", 17],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["PTH", 14],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 9],
      ["PV2", 18],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 9],
      ["OBR", 19],
      ["ORC", 11],
      ["PID", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 9],
      ["NTE", 23],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["ROL", 21],
      ["VAR", 22],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 9],
      ["NTE", 24],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 9],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["PTH", 14],
      ["VAR", 25],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 9],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["PTH", 14],
      ["ROL", 15],
      ["VAR", 26],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 9],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["PTH", 14],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 9],
      ["NTE", 17],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["PTH", 14],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [18, new Map([["GOL", 9]])],
  [19, new Map([["anyHL7Segment", 27]])],
  [
    20,
    new Map([
      ["GOL", 9],
      ["NTE", 28],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 9],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["ROL", 21],
      ["VAR", 29],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 9],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["ROL", 21],
      ["VAR", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 9],
      ["NTE", 23],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["ROL", 21],
      ["VAR", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 9],
      ["NTE", 24],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 9],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["PTH", 14],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 9],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["PTH", 14],
      ["ROL", 15],
      ["VAR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 9],
      ["NTE", 32],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["VAR", 31],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 9],
      ["NTE", 28],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 9],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["ROL", 21],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 9],
      ["NTE", 34],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["VAR", 33],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 9],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["VAR", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["GOL", 9],
      ["NTE", 32],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["VAR", 31],
    ]),
  ],
  [
    33,
    new Map([
      ["GOL", 9],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["VAR", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["GOL", 9],
      ["NTE", 34],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["VAR", 33],
    ]),
  ],
]);
export const effects = {
  "5:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [],
  },
  "8:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "8:PV1": {
    groupsOpened: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "9:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "9:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "9:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "9:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "9:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "9:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "10:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [],
  },
  "11:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "11:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "11:OBR": {
    groupsOpened: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "12:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "12:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "12:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "12:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "12:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "12:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "13:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "13:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "13:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "13:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "14:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: [],
  },
  "14:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "14:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "14:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "14:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
  },
  "14:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "15:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "15:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "15:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "15:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "15:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "15:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "15:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "16:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "16:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "16:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "16:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "16:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "16:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "16:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "17:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "17:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "17:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "17:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "17:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "17:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "17:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "18:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "20:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "20:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "20:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "20:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "21:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "21:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "22:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "22:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "23:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "23:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "23:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "24:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "24:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "24:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "24:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "25:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: [],
  },
  "25:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "25:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "25:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "25:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
  },
  "25:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "26:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "26:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "26:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "26:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "26:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "26:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "26:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "27:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "27:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "27:VAR": {
    groupsOpened: [],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "27:NTE": {
    groupsOpened: [],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "28:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "28:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "28:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "28:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "28:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "29:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "29:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "29:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "29:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "29:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "29:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "30:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "30:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "30:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "31:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "32:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "33:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "33:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "34:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "34:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
