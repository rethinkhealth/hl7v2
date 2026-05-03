// Generated profile automaton for PPT_PCL (v2.3)

export const start = 0;
export const finals = new Set<number>([
  6, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31, 32, 33,
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
      ["PTH", 6],
      ["PV1", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["GOL", 8],
      ["NTE", 11],
      ["PID", 5],
      ["PTH", 6],
      ["ROL", 9],
      ["VAR", 10],
    ]),
  ],
  [
    7,
    new Map([
      ["PTH", 6],
      ["PV2", 12],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 8],
      ["NTE", 18],
      ["OBX", 15],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 14],
      ["PTH", 6],
      ["ROL", 16],
      ["VAR", 17],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 8],
      ["PID", 5],
      ["PTH", 6],
      ["ROL", 9],
      ["VAR", 19],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 8],
      ["PID", 5],
      ["PTH", 6],
      ["ROL", 9],
      ["VAR", 10],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 8],
      ["NTE", 11],
      ["PID", 5],
      ["PTH", 6],
      ["ROL", 9],
      ["VAR", 10],
    ]),
  ],
  [12, new Map([["PTH", 6]])],
  [
    13,
    new Map([
      ["GOL", 8],
      ["OBR", 20],
      ["ORC", 13],
      ["PID", 5],
      ["PTH", 6],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 8],
      ["NTE", 24],
      ["OBX", 21],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 14],
      ["PTH", 6],
      ["ROL", 22],
      ["VAR", 23],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 8],
      ["NTE", 25],
      ["OBX", 15],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 14],
      ["PTH", 6],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 8],
      ["OBX", 15],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 14],
      ["PTH", 6],
      ["ROL", 16],
      ["VAR", 26],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 8],
      ["OBX", 15],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 14],
      ["PTH", 6],
      ["ROL", 16],
      ["VAR", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 8],
      ["NTE", 18],
      ["OBX", 15],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 14],
      ["PTH", 6],
      ["ROL", 16],
      ["VAR", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 8],
      ["PID", 5],
      ["PTH", 6],
      ["ROL", 9],
      ["VAR", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 8],
      ["NTE", 29],
      ["OBX", 27],
      ["ORC", 13],
      ["PID", 5],
      ["PTH", 6],
      ["VAR", 28],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 8],
      ["NTE", 30],
      ["OBX", 21],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 14],
      ["PTH", 6],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 8],
      ["OBX", 21],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 14],
      ["PTH", 6],
      ["ROL", 22],
      ["VAR", 31],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 8],
      ["OBX", 21],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 14],
      ["PTH", 6],
      ["ROL", 22],
      ["VAR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 8],
      ["NTE", 24],
      ["OBX", 21],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 14],
      ["PTH", 6],
      ["ROL", 22],
      ["VAR", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 8],
      ["NTE", 25],
      ["OBX", 15],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 14],
      ["PTH", 6],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 8],
      ["OBX", 15],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 14],
      ["PTH", 6],
      ["ROL", 16],
      ["VAR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 8],
      ["NTE", 33],
      ["OBX", 27],
      ["ORC", 13],
      ["PID", 5],
      ["PTH", 6],
      ["VAR", 32],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 8],
      ["OBX", 27],
      ["ORC", 13],
      ["PID", 5],
      ["PTH", 6],
      ["VAR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 8],
      ["NTE", 29],
      ["OBX", 27],
      ["ORC", 13],
      ["PID", 5],
      ["PTH", 6],
      ["VAR", 28],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 8],
      ["NTE", 30],
      ["OBX", 21],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 14],
      ["PTH", 6],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 8],
      ["OBX", 21],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 14],
      ["PTH", 6],
      ["ROL", 22],
      ["VAR", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["GOL", 8],
      ["OBX", 27],
      ["ORC", 13],
      ["PID", 5],
      ["PTH", 6],
      ["VAR", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["GOL", 8],
      ["NTE", 33],
      ["OBX", 27],
      ["ORC", 13],
      ["PID", 5],
      ["PTH", 6],
      ["VAR", 32],
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
  "12:PTH": {
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "13:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "13:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "13:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "14:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "14:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "14:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "14:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "14:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "14:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "15:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "15:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "15:PRB": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "15:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "16:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "16:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "16:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "16:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "16:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "16:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
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
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "19:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "19:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "19:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "20:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "20:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "20:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "20:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "21:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "21:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "21:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "21:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "22:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "22:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "22:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
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
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "22:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
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
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "25:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "25:PRB": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "25:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "26:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "26:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "26:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "26:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "26:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "26:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "27:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "27:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "27:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "28:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "28:OBX": {
    groupsClosed: [],
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
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "28:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "29:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "29:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "29:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "30:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "30:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
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
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "31:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "31:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "31:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "31:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "31:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "31:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
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
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "5:PTH": {
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "5:PV1": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
  },
  "6:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "6:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "6:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "6:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "7:PTH": {
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "8:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "8:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "8:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "8:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "8:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "8:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "9:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "9:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "9:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "9:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
