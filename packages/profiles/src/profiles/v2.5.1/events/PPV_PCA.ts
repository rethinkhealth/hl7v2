// Generated profile automaton for PPV_PCA (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  8, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33,
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
  "VAR",
  "Hxx",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
      ["QRD", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([["PID", 7]])],
  [5, new Map([["QRD", 4]])],
  [
    6,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
      ["QRD", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 8],
      ["PV1", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 8],
      ["NTE", 16],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["PTH", 13],
      ["ROL", 14],
      ["VAR", 15],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 8],
      ["PV2", 17],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 8],
      ["OBR", 18],
      ["ORC", 10],
      ["PID", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 8],
      ["NTE", 22],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["ROL", 20],
      ["VAR", 21],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 8],
      ["NTE", 23],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 8],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["PTH", 13],
      ["VAR", 24],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 8],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["PTH", 13],
      ["ROL", 14],
      ["VAR", 25],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 8],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["PTH", 13],
      ["ROL", 14],
      ["VAR", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 8],
      ["NTE", 16],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["PTH", 13],
      ["ROL", 14],
      ["VAR", 15],
    ]),
  ],
  [17, new Map([["GOL", 8]])],
  [18, new Map([["Hxx", 26]])],
  [
    19,
    new Map([
      ["GOL", 8],
      ["NTE", 27],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 8],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["ROL", 20],
      ["VAR", 28],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 8],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["ROL", 20],
      ["VAR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 8],
      ["NTE", 22],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["ROL", 20],
      ["VAR", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 8],
      ["NTE", 23],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 8],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["PTH", 13],
      ["VAR", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 8],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["PTH", 13],
      ["ROL", 14],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 8],
      ["NTE", 31],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["VAR", 30],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 8],
      ["NTE", 27],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 8],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["ROL", 20],
      ["VAR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 8],
      ["NTE", 33],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["VAR", 32],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 8],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["VAR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 8],
      ["NTE", 31],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["VAR", 30],
    ]),
  ],
  [
    32,
    new Map([
      ["GOL", 8],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["VAR", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["GOL", 8],
      ["NTE", 33],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["VAR", 32],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_CHOICE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_CHOICE",
    ],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "10:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_CHOICE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "11:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "11:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "11:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "11:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "11:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "12:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "12:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "12:PRB": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "13:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "13:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "13:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "13:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "13:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "14:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "14:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "14:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "14:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "14:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "14:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "15:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "15:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "15:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "15:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "15:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "15:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "16:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "16:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "16:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "16:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "16:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "16:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "17:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "19:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "19:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "19:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "20:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "20:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "20:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "20:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "20:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "21:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "21:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "21:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "21:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "21:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "22:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "22:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "22:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "22:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "22:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "23:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "23:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "23:PRB": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "24:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "24:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "24:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "24:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "24:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "25:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "25:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "25:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "25:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "25:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "25:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "26:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_CHOICE",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "26:NTE": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_CHOICE"],
    groupsOpened: [],
  },
  "26:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_CHOICE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "26:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_CHOICE",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "26:VAR": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_CHOICE"],
    groupsOpened: [],
  },
  "27:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "27:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "27:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "28:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "28:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "28:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "28:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "28:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "29:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "29:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "30:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "30:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "31:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "31:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "32:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "32:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "33:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "33:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "33:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "7:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "7:PV1": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "8:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "8:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "8:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "8:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "8:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "8:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "9:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
