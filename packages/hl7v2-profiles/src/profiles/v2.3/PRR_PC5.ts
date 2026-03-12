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
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "10:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "10:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "10:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "11:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "11:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "11:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "11:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "11:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "11:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: [],
  },
  "12:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "12:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "12:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "12:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "12:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "12:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "12:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
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
  "15:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
  "16:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "16:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "16:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "17:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "17:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "17:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "18:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "18:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "18:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "18:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "18:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
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
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "21:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "21:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "21:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "22:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "22:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "22:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "22:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "22:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: [],
  },
  "23:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "23:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "23:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "24:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "24:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
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
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "27:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "27:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "28:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "28:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "28:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "28:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "28:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
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
  "3:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [],
  },
  "5:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
  "5:PV1": {
    groupsOpened: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "6:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "6:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "6:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "6:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "6:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "6:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "6:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "7:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
  "8:OBR": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [],
  },
  "8:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
    ],
  },
  "8:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL"],
  },
  "9:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "9:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "9:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "9:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "9:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "9:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
