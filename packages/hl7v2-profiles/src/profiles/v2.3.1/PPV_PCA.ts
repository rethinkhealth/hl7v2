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
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "10:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "10:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "10:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "10:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "10:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "11:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "11:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "11:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "12:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "12:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "12:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "12:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
  },
  "12:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: [],
  },
  "13:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
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
  "13:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
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
  "14:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
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
  "14:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
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
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
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
  "15:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "15:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "15:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "16:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "18:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "18:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "18:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "18:PRB": {
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
  "19:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "19:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
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
  "19:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "19:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "20:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
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
  "20:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "20:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "21:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
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
  "21:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "21:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "22:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "22:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "23:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "23:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "23:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "23:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
  },
  "23:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: [],
  },
  "24:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "24:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "24:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "24:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "24:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "24:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "25:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:NTE": {
    groupsOpened: [],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "25:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "25:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "25:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:VAR": {
    groupsOpened: [],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "26:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "26:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "26:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "26:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "27:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "27:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "27:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "27:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "27:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "27:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "28:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "28:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "29:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
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
  "30:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "31:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "32:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "3:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [],
  },
  "6:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "6:PV1": {
    groupsOpened: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "7:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "7:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "7:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "7:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "7:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "7:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "7:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "8:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "9:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "9:OBR": {
    groupsOpened: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
