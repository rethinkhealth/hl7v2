// Generated profile automaton for PRR_PC5 (v2.3.1)

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
      ["PRB", 7],
      ["PV1", 8],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 10],
      ["NTE", 15],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["PTH", 12],
      ["ROL", 13],
      ["VAR", 14],
    ]),
  ],
  [
    8,
    new Map([
      ["PRB", 7],
      ["PV2", 16],
    ]),
  ],
  [
    9,
    new Map([
      ["OBR", 17],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 10],
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 10],
      ["NTE", 22],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 10],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["PTH", 12],
      ["VAR", 23],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 10],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["PTH", 12],
      ["ROL", 13],
      ["VAR", 24],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 10],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["PTH", 12],
      ["ROL", 13],
      ["VAR", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 10],
      ["NTE", 15],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["PTH", 12],
      ["ROL", 13],
      ["VAR", 14],
    ]),
  ],
  [16, new Map([["PRB", 7]])],
  [17, new Map([["RXO", 25]])],
  [
    18,
    new Map([
      ["GOL", 10],
      ["NTE", 26],
      ["OBX", 18],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 10],
      ["OBX", 18],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["ROL", 19],
      ["VAR", 27],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 10],
      ["OBX", 18],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 10],
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 10],
      ["NTE", 22],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 10],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["PTH", 12],
      ["VAR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 10],
      ["OBX", 11],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["PTH", 12],
      ["ROL", 13],
      ["VAR", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 30],
      ["OBX", 28],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["VAR", 29],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 10],
      ["NTE", 26],
      ["OBX", 18],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 10],
      ["OBX", 18],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["ROL", 19],
      ["VAR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 32],
      ["OBX", 28],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["VAR", 31],
    ]),
  ],
  [
    29,
    new Map([
      ["OBX", 28],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["NTE", 30],
      ["OBX", 28],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["VAR", 29],
    ]),
  ],
  [
    31,
    new Map([
      ["OBX", 28],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["VAR", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["NTE", 32],
      ["OBX", 28],
      ["ORC", 9],
      ["PID", 6],
      ["PRB", 7],
      ["VAR", 31],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "10:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "10:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "10:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "10:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "11:GOL": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "11:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "11:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "12:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "12:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "12:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "12:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "12:PTH": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "13:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "13:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "13:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "13:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "13:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "13:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "14:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "14:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "14:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "14:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "14:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "14:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "15:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "15:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "15:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "15:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "15:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "15:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "16:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "18:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "18:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "18:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "19:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "19:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "19:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "19:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "19:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "20:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "20:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "20:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "20:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "20:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "21:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "21:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "21:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "21:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "21:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "22:GOL": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "22:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "22:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "23:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "23:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "23:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "23:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "23:PTH": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "24:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "24:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "24:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "24:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "24:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "24:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "25:NTE": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "25:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "25:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "25:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "25:VAR": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "26:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "26:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "26:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "27:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "27:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "27:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "27:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "27:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "28:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "28:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "29:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "29:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "30:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "30:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "31:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "31:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "32:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "32:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "6:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "6:PV1": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
  "7:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "7:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "7:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "7:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "7:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "7:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "8:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "9:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "9:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "9:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
