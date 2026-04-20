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
  "3:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [],
  },
  "5:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
  },
  "5:PV1": {
    groupsOpened: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "6:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
  },
  "6:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "6:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "7:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
  },
  "8:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "8:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "8:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "8:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "8:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "8:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "8:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "9:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "9:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
  },
  "9:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "10:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "10:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
  },
  "10:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "10:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "11:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "11:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
  },
  "11:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "11:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "12:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [],
  },
  "13:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL"],
  },
  "13:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
    ],
  },
  "13:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
    ],
  },
  "13:OBR": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL"],
    groupsClosed: [],
  },
  "14:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "14:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "14:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "15:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "15:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "15:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "15:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "15:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "16:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "16:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "16:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "16:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "16:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "16:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "16:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "17:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "17:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "17:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "17:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "17:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "17:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "17:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "18:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "18:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "18:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "18:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "18:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "18:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "18:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "19:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "19:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "19:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
  },
  "19:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "20:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "20:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "20:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "20:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "20:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "21:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "21:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "21:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "21:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "22:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "22:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "23:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "23:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "23:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "24:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "24:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "24:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "25:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "25:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "25:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "25:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "25:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "26:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "26:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "26:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "26:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "26:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "26:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "26:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "27:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "30:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "30:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "30:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "30:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "30:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "30:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "31:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "31:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "31:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "31:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "31:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "31:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "31:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "32:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
