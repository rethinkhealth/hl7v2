// Generated profile automaton for PRR_PC5 (v2.3)

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
      ["PRB", 6],
      ["PV1", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["GOL", 9],
      ["NTE", 14],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["PTH", 11],
      ["ROL", 12],
      ["VAR", 13],
    ]),
  ],
  [
    7,
    new Map([
      ["PRB", 6],
      ["PV2", 15],
    ]),
  ],
  [
    8,
    new Map([
      ["OBR", 16],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 9],
      ["NTE", 20],
      ["OBX", 17],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["ROL", 18],
      ["VAR", 19],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 9],
      ["NTE", 21],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 9],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["PTH", 11],
      ["VAR", 22],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 9],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["PTH", 11],
      ["ROL", 12],
      ["VAR", 23],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 9],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["PTH", 11],
      ["ROL", 12],
      ["VAR", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 9],
      ["NTE", 14],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["PTH", 11],
      ["ROL", 12],
      ["VAR", 13],
    ]),
  ],
  [15, new Map([["PRB", 6]])],
  [
    16,
    new Map([
      ["NTE", 26],
      ["OBX", 24],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["VAR", 25],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 9],
      ["NTE", 27],
      ["OBX", 17],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 9],
      ["OBX", 17],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["ROL", 18],
      ["VAR", 28],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 9],
      ["OBX", 17],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["ROL", 18],
      ["VAR", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 9],
      ["NTE", 20],
      ["OBX", 17],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["ROL", 18],
      ["VAR", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 9],
      ["NTE", 21],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 9],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["PTH", 11],
      ["VAR", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 9],
      ["OBX", 10],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["PTH", 11],
      ["ROL", 12],
      ["VAR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 30],
      ["OBX", 24],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["VAR", 29],
    ]),
  ],
  [
    25,
    new Map([
      ["OBX", 24],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 26],
      ["OBX", 24],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["VAR", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 9],
      ["NTE", 27],
      ["OBX", 17],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 9],
      ["OBX", 17],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["ROL", 18],
      ["VAR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["OBX", 24],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["NTE", 30],
      ["OBX", 24],
      ["ORC", 8],
      ["PID", 5],
      ["PRB", 6],
      ["VAR", 29],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "10:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "10:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "11:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "11:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "11:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "11:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "11:PTH": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "12:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "12:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "12:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "12:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "12:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "12:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
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
  "15:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "16:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "16:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "16:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "17:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "17:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "17:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "18:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "18:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "18:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "18:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "18:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
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
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "21:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "21:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "22:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "22:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "22:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "22:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "22:PTH": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "23:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "23:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "23:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "23:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "23:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "23:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "24:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "24:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "24:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "25:OBX": {
    groupsClosed: [],
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
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "25:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "26:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "26:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "27:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "27:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "27:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "28:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "28:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "28:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "28:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "28:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
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
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "5:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "5:PV1": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
  "6:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "6:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "6:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "6:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "6:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "6:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "7:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "8:OBR": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "8:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "8:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "9:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "9:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "9:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "9:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "9:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
