// Generated profile automaton for PPV_PCA (v2.3)

export const start = 0;
export const finals = new Set<number>([
  6, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30,
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
  "QRD",
  "ROL",
  "VAR",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 4],
      ["QRD", 3],
    ]),
  ],
  [3, new Map([["PID", 5]])],
  [4, new Map([["QRD", 3]])],
  [
    5,
    new Map([
      ["GOL", 6],
      ["PV1", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["GOL", 6],
      ["NTE", 14],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
      ["PTH", 11],
      ["ROL", 12],
      ["VAR", 13],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 6],
      ["PV2", 15],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 6],
      ["OBR", 16],
      ["ORC", 8],
      ["PID", 5],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 6],
      ["NTE", 20],
      ["OBX", 17],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
      ["ROL", 18],
      ["VAR", 19],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 6],
      ["NTE", 21],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 6],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
      ["PTH", 11],
      ["VAR", 22],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 6],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
      ["PTH", 11],
      ["ROL", 12],
      ["VAR", 23],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 6],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
      ["PTH", 11],
      ["ROL", 12],
      ["VAR", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 6],
      ["NTE", 14],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
      ["PTH", 11],
      ["ROL", 12],
      ["VAR", 13],
    ]),
  ],
  [15, new Map([["GOL", 6]])],
  [
    16,
    new Map([
      ["GOL", 6],
      ["NTE", 26],
      ["OBX", 24],
      ["ORC", 8],
      ["PID", 5],
      ["VAR", 25],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 6],
      ["NTE", 27],
      ["OBX", 17],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 6],
      ["OBX", 17],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
      ["ROL", 18],
      ["VAR", 28],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 6],
      ["OBX", 17],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
      ["ROL", 18],
      ["VAR", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 6],
      ["NTE", 20],
      ["OBX", 17],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
      ["ROL", 18],
      ["VAR", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 6],
      ["NTE", 21],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 6],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
      ["PTH", 11],
      ["VAR", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 6],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
      ["PTH", 11],
      ["ROL", 12],
      ["VAR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 6],
      ["NTE", 30],
      ["OBX", 24],
      ["ORC", 8],
      ["PID", 5],
      ["VAR", 29],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 6],
      ["OBX", 24],
      ["ORC", 8],
      ["PID", 5],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 6],
      ["NTE", 26],
      ["OBX", 24],
      ["ORC", 8],
      ["PID", 5],
      ["VAR", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 6],
      ["NTE", 27],
      ["OBX", 17],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 6],
      ["OBX", 17],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 9],
      ["ROL", 18],
      ["VAR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 6],
      ["OBX", 24],
      ["ORC", 8],
      ["PID", 5],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 6],
      ["NTE", 30],
      ["OBX", 24],
      ["ORC", 8],
      ["PID", 5],
      ["VAR", 29],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "10:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "10:PRB": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "11:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "11:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "11:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "11:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "11:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "12:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "12:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "12:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "12:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "12:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "12:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "13:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "13:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "13:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "13:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "13:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "13:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
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
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "16:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "16:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "17:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "17:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "17:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "18:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "18:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "18:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "18:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "18:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "19:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "19:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "19:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "19:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "19:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
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
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "21:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "21:PRB": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "22:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "22:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "22:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "22:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "22:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "23:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "23:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "23:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "23:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "23:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "23:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "24:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "24:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "25:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "25:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "26:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "26:OBX": {
    groupsClosed: [],
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
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
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
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "5:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "5:PV1": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "6:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "6:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "6:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "6:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "6:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "6:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "7:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "8:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "8:OBR": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "8:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "9:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "9:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "9:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "9:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "9:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
