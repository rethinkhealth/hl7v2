// Generated profile automaton for PPT_PCL (v2.4)

export const start = 0;
export const finals = new Set<number>([
  7, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29,
  30, 31, 32, 33, 34, 35,
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
      ["PTH", 7],
      ["PV1", 8],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 9],
      ["NTE", 12],
      ["PID", 6],
      ["PTH", 7],
      ["ROL", 10],
      ["VAR", 11],
    ]),
  ],
  [
    8,
    new Map([
      ["PTH", 7],
      ["PV2", 13],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 9],
      ["NTE", 19],
      ["OBX", 16],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 15],
      ["PTH", 7],
      ["ROL", 17],
      ["VAR", 18],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 9],
      ["PID", 6],
      ["PTH", 7],
      ["ROL", 10],
      ["VAR", 20],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 9],
      ["PID", 6],
      ["PTH", 7],
      ["ROL", 10],
      ["VAR", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 9],
      ["NTE", 12],
      ["PID", 6],
      ["PTH", 7],
      ["ROL", 10],
      ["VAR", 11],
    ]),
  ],
  [13, new Map([["PTH", 7]])],
  [
    14,
    new Map([
      ["GOL", 9],
      ["OBR", 21],
      ["ORC", 14],
      ["PID", 6],
      ["PTH", 7],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 9],
      ["NTE", 25],
      ["OBX", 22],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 15],
      ["PTH", 7],
      ["ROL", 23],
      ["VAR", 24],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 9],
      ["NTE", 26],
      ["OBX", 16],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 15],
      ["PTH", 7],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 9],
      ["OBX", 16],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 15],
      ["PTH", 7],
      ["ROL", 17],
      ["VAR", 27],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 9],
      ["OBX", 16],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 15],
      ["PTH", 7],
      ["ROL", 17],
      ["VAR", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 9],
      ["NTE", 19],
      ["OBX", 16],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 15],
      ["PTH", 7],
      ["ROL", 17],
      ["VAR", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 9],
      ["PID", 6],
      ["PTH", 7],
      ["ROL", 10],
      ["VAR", 20],
    ]),
  ],
  [21, new Map([["RXO", 28]])],
  [
    22,
    new Map([
      ["GOL", 9],
      ["NTE", 29],
      ["OBX", 22],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 15],
      ["PTH", 7],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 9],
      ["OBX", 22],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 15],
      ["PTH", 7],
      ["ROL", 23],
      ["VAR", 30],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 9],
      ["OBX", 22],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 15],
      ["PTH", 7],
      ["ROL", 23],
      ["VAR", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 9],
      ["NTE", 25],
      ["OBX", 22],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 15],
      ["PTH", 7],
      ["ROL", 23],
      ["VAR", 24],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 9],
      ["NTE", 26],
      ["OBX", 16],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 15],
      ["PTH", 7],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 9],
      ["OBX", 16],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 15],
      ["PTH", 7],
      ["ROL", 17],
      ["VAR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 9],
      ["NTE", 33],
      ["OBX", 31],
      ["ORC", 14],
      ["PID", 6],
      ["PTH", 7],
      ["VAR", 32],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 9],
      ["NTE", 29],
      ["OBX", 22],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 15],
      ["PTH", 7],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 9],
      ["OBX", 22],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 15],
      ["PTH", 7],
      ["ROL", 23],
      ["VAR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 9],
      ["NTE", 35],
      ["OBX", 31],
      ["ORC", 14],
      ["PID", 6],
      ["PTH", 7],
      ["VAR", 34],
    ]),
  ],
  [
    32,
    new Map([
      ["GOL", 9],
      ["OBX", 31],
      ["ORC", 14],
      ["PID", 6],
      ["PTH", 7],
      ["VAR", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["GOL", 9],
      ["NTE", 33],
      ["OBX", 31],
      ["ORC", 14],
      ["PID", 6],
      ["PTH", 7],
      ["VAR", 32],
    ]),
  ],
  [
    34,
    new Map([
      ["GOL", 9],
      ["OBX", 31],
      ["ORC", 14],
      ["PID", 6],
      ["PTH", 7],
      ["VAR", 34],
    ]),
  ],
  [
    35,
    new Map([
      ["GOL", 9],
      ["NTE", 35],
      ["OBX", 31],
      ["ORC", 14],
      ["PID", 6],
      ["PTH", 7],
      ["VAR", 34],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "10:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "10:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "10:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "11:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "11:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "11:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "11:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "12:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "12:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "12:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "12:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "13:PTH": {
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "14:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "14:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "14:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "15:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "15:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "15:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "15:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "15:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "15:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "16:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "16:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "16:PRB": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "16:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "17:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "17:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "17:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "17:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "17:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "17:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "18:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "18:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "18:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "18:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "18:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "18:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "19:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "19:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "19:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "19:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "19:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "19:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "20:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "20:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "20:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "20:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "22:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "22:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "22:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "22:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "23:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "23:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "23:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "23:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "23:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "23:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "24:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "24:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "24:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "24:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "24:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "24:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "25:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "25:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "25:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "25:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "25:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "25:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "26:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "26:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "26:PRB": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "26:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "27:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "27:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "27:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "27:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "27:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "27:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "28:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "28:NTE": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "28:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "28:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "28:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "28:VAR": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "29:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "29:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "29:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "29:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "30:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "30:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "30:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "30:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "30:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "30:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "31:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "31:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "31:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "32:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "32:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "32:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "33:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "33:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "33:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "34:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "34:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "34:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "35:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "35:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "35:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "35:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "6:PTH": {
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "6:PV1": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
  },
  "7:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "7:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "7:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "7:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "8:PTH": {
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "9:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "9:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "9:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "9:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "9:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "9:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
