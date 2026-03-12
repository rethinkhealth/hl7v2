// Generated profile automaton for PRR_PC5 (v2.4)

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
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "10:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "10:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "10:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "10:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "10:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "11:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "11:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "11:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "11:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "12:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "12:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "12:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "12:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "12:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "12:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: [],
  },
  "13:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "13:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "13:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "13:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "13:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "13:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "13:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "14:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "14:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "14:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "15:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "15:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "15:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "16:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
  "18:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "18:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "18:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "19:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "19:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "19:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "19:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "19:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "20:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "20:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "20:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "20:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "21:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "21:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "21:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "21:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "22:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "22:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "22:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "23:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "23:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "23:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "23:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "23:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "23:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: [],
  },
  "24:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "24:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "24:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "25:NTE": {
    groupsOpened: [],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "25:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "25:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:VAR": {
    groupsOpened: [],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "26:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "26:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "26:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "26:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "27:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "27:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "27:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "27:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "27:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "30:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "3:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [],
  },
  "6:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
  "6:PV1": {
    groupsOpened: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "7:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "7:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "7:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "7:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "7:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "7:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "7:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "8:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
  "9:OBR": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "9:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
