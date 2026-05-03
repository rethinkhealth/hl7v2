// Generated profile automaton for PPV_PCA (v2.3.1)

export const start = 0;
export const finals = new Set<number>([
  7, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  30, 31, 32,
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
  "RXO",
  "VAR",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 5],
      ["QAK", 4],
      ["QRD", 3],
    ]),
  ],
  [3, new Map([["PID", 6]])],
  [4, new Map([["QRD", 3]])],
  [
    5,
    new Map([
      ["QAK", 4],
      ["QRD", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["GOL", 7],
      ["PV1", 8],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 7],
      ["NTE", 15],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
      ["PTH", 12],
      ["ROL", 13],
      ["VAR", 14],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 7],
      ["PV2", 16],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 7],
      ["OBR", 17],
      ["ORC", 9],
      ["PID", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 7],
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 7],
      ["NTE", 22],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 7],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
      ["PTH", 12],
      ["VAR", 23],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 7],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
      ["PTH", 12],
      ["ROL", 13],
      ["VAR", 24],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 7],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
      ["PTH", 12],
      ["ROL", 13],
      ["VAR", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 7],
      ["NTE", 15],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
      ["PTH", 12],
      ["ROL", 13],
      ["VAR", 14],
    ]),
  ],
  [16, new Map([["GOL", 7]])],
  [17, new Map([["RXO", 25]])],
  [
    18,
    new Map([
      ["GOL", 7],
      ["NTE", 26],
      ["OBX", 18],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 7],
      ["OBX", 18],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
      ["ROL", 19],
      ["VAR", 27],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 7],
      ["OBX", 18],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 7],
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 7],
      ["NTE", 22],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 7],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
      ["PTH", 12],
      ["VAR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 7],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
      ["PTH", 12],
      ["ROL", 13],
      ["VAR", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 7],
      ["NTE", 30],
      ["OBX", 28],
      ["ORC", 9],
      ["PID", 6],
      ["VAR", 29],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 7],
      ["NTE", 26],
      ["OBX", 18],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 7],
      ["OBX", 18],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 10],
      ["ROL", 19],
      ["VAR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 7],
      ["NTE", 32],
      ["OBX", 28],
      ["ORC", 9],
      ["PID", 6],
      ["VAR", 31],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 7],
      ["OBX", 28],
      ["ORC", 9],
      ["PID", 6],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 7],
      ["NTE", 30],
      ["OBX", 28],
      ["ORC", 9],
      ["PID", 6],
      ["VAR", 29],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 7],
      ["OBX", 28],
      ["ORC", 9],
      ["PID", 6],
      ["VAR", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["GOL", 7],
      ["NTE", 32],
      ["OBX", 28],
      ["ORC", 9],
      ["PID", 6],
      ["VAR", 31],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "10:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "10:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "10:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "10:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "11:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "11:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "11:PRB": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "12:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "12:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "12:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "12:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "12:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
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
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "18:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "18:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "18:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
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
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "22:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "22:PRB": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "23:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "23:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "23:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "23:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "23:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "24:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "24:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "24:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "24:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "24:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "24:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "25:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "25:NTE": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "25:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
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
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "25:VAR": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "26:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "26:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "26:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "27:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "27:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "27:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "27:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "27:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "28:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "28:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
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
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "6:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "6:PV1": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "7:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "7:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "7:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "7:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "7:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "7:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "8:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "9:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "9:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "9:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
