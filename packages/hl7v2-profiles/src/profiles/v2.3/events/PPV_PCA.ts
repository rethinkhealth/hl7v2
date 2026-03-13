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
  "3:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [],
  },
  "5:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "5:PV1": {
    groupsOpened: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "6:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "6:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "6:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "6:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "6:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "6:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "7:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "8:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [],
  },
  "8:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL"],
  },
  "8:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
    ],
  },
  "8:OBR": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL"],
    groupsClosed: [],
  },
  "9:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "9:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "9:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "9:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "9:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "9:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "10:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "10:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "10:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "10:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "10:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "11:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: [],
  },
  "11:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "11:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "11:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "11:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
  },
  "11:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "12:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "12:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "12:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "12:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "12:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "12:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "12:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "13:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "13:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "13:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "13:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "13:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "13:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "13:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
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
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "14:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "14:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "14:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "14:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "14:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "15:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "16:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "16:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "16:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "16:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "17:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "17:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "17:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "17:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "18:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "18:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "18:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "18:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "18:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "18:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "19:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "19:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "19:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "19:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "19:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "19:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "20:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "20:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "21:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "21:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "21:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "22:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "22:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "22:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "22:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
  },
  "22:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "23:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "23:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "23:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "23:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "23:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "23:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "23:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "24:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "24:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "24:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "25:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "26:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "27:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "27:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "27:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "27:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "28:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "28:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "28:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "28:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "28:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "28:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "29:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "29:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
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
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
