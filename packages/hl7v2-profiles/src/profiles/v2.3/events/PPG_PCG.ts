// Generated profile automaton for PPG_PCG (v2.3)

export const start = 0;
export const finals = new Set<number>([
  3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30,
]);
export const alphabet = new Set<string>([
  "GOL",
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
  "ROL",
  "VAR",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["PID", 2]])],
  [
    2,
    new Map([
      ["PTH", 3],
      ["PV1", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["GOL", 5],
      ["NTE", 8],
      ["PTH", 3],
      ["ROL", 6],
      ["VAR", 7],
    ]),
  ],
  [
    4,
    new Map([
      ["PTH", 3],
      ["PV2", 9],
    ]),
  ],
  [
    5,
    new Map([
      ["GOL", 5],
      ["NTE", 15],
      ["OBX", 12],
      ["ORC", 10],
      ["PRB", 11],
      ["PTH", 3],
      ["ROL", 13],
      ["VAR", 14],
    ]),
  ],
  [
    6,
    new Map([
      ["GOL", 5],
      ["PTH", 3],
      ["ROL", 6],
      ["VAR", 16],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 5],
      ["PTH", 3],
      ["ROL", 6],
      ["VAR", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 5],
      ["NTE", 8],
      ["PTH", 3],
      ["ROL", 6],
      ["VAR", 7],
    ]),
  ],
  [9, new Map([["PTH", 3]])],
  [
    10,
    new Map([
      ["GOL", 5],
      ["OBR", 17],
      ["ORC", 10],
      ["PTH", 3],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 5],
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 10],
      ["PRB", 11],
      ["PTH", 3],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 5],
      ["NTE", 22],
      ["OBX", 12],
      ["ORC", 10],
      ["PRB", 11],
      ["PTH", 3],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 5],
      ["OBX", 12],
      ["ORC", 10],
      ["PRB", 11],
      ["PTH", 3],
      ["ROL", 13],
      ["VAR", 23],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 5],
      ["OBX", 12],
      ["ORC", 10],
      ["PRB", 11],
      ["PTH", 3],
      ["ROL", 13],
      ["VAR", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 5],
      ["NTE", 15],
      ["OBX", 12],
      ["ORC", 10],
      ["PRB", 11],
      ["PTH", 3],
      ["ROL", 13],
      ["VAR", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 5],
      ["PTH", 3],
      ["ROL", 6],
      ["VAR", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 5],
      ["NTE", 26],
      ["OBX", 24],
      ["ORC", 10],
      ["PTH", 3],
      ["VAR", 25],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 5],
      ["NTE", 27],
      ["OBX", 18],
      ["ORC", 10],
      ["PRB", 11],
      ["PTH", 3],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 5],
      ["OBX", 18],
      ["ORC", 10],
      ["PRB", 11],
      ["PTH", 3],
      ["ROL", 19],
      ["VAR", 28],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 5],
      ["OBX", 18],
      ["ORC", 10],
      ["PRB", 11],
      ["PTH", 3],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 5],
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 10],
      ["PRB", 11],
      ["PTH", 3],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 5],
      ["NTE", 22],
      ["OBX", 12],
      ["ORC", 10],
      ["PRB", 11],
      ["PTH", 3],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 5],
      ["OBX", 12],
      ["ORC", 10],
      ["PRB", 11],
      ["PTH", 3],
      ["ROL", 13],
      ["VAR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 5],
      ["NTE", 30],
      ["OBX", 24],
      ["ORC", 10],
      ["PTH", 3],
      ["VAR", 29],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 5],
      ["OBX", 24],
      ["ORC", 10],
      ["PTH", 3],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 5],
      ["NTE", 26],
      ["OBX", 24],
      ["ORC", 10],
      ["PTH", 3],
      ["VAR", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 5],
      ["NTE", 27],
      ["OBX", 18],
      ["ORC", 10],
      ["PRB", 11],
      ["PTH", 3],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 5],
      ["OBX", 18],
      ["ORC", 10],
      ["PRB", 11],
      ["PTH", 3],
      ["ROL", 19],
      ["VAR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 5],
      ["OBX", 24],
      ["ORC", 10],
      ["PTH", 3],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 5],
      ["NTE", 30],
      ["OBX", 24],
      ["ORC", 10],
      ["PTH", 3],
      ["VAR", 29],
    ]),
  ],
]);
export const effects = {
  "2:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: ["PPG_PCG/PATIENT_VISIT"],
  },
  "2:PV1": {
    groupsOpened: ["PPG_PCG/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "3:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [],
  },
  "3:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
  },
  "3:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "4:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: ["PPG_PCG/PATIENT_VISIT"],
  },
  "5:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "5:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "5:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "5:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "5:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "5:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "6:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "6:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [],
  },
  "6:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
  },
  "7:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [],
  },
  "7:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
  },
  "7:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "8:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [],
  },
  "8:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
  },
  "8:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "9:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: ["PPG_PCG/PATIENT_VISIT"],
  },
  "10:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [],
  },
  "10:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL"],
  },
  "10:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
    ],
  },
  "10:OBR": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL"],
    groupsClosed: [],
  },
  "11:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "11:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "11:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "11:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "11:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "11:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "12:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "12:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "12:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "12:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "13:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "13:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "13:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "13:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "13:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "13:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "14:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "14:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "14:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "14:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "14:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "14:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "15:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "15:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "15:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "15:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "15:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "15:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "16:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "16:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [],
  },
  "16:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
  },
  "17:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "17:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "17:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "17:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "18:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "18:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "18:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "18:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "19:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "19:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "19:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "19:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "19:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "19:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "20:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "20:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "21:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "21:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "22:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "22:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "22:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "23:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "23:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "23:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "23:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "23:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "23:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "24:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "24:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "24:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "25:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "26:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "27:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "27:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "27:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "27:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "28:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "28:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "28:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "28:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "28:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "28:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "29:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "29:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "30:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "30:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
