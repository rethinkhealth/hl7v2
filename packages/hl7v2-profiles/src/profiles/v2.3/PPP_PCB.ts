// Generated profile automaton for PPP_PCB (v2.3)

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
      ["NTE", 8],
      ["PRB", 5],
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
      ["GOL", 11],
      ["NTE", 15],
      ["OBX", 12],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["ROL", 13],
      ["VAR", 14],
    ]),
  ],
  [
    6,
    new Map([
      ["PRB", 5],
      ["PTH", 3],
      ["ROL", 6],
      ["VAR", 16],
    ]),
  ],
  [
    7,
    new Map([
      ["PRB", 5],
      ["PTH", 3],
      ["ROL", 6],
      ["VAR", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 8],
      ["PRB", 5],
      ["PTH", 3],
      ["ROL", 6],
      ["VAR", 7],
    ]),
  ],
  [9, new Map([["PTH", 3]])],
  [
    10,
    new Map([
      ["OBR", 17],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 11],
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 11],
      ["NTE", 22],
      ["OBX", 12],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 11],
      ["OBX", 12],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["ROL", 13],
      ["VAR", 23],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 11],
      ["OBX", 12],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["ROL", 13],
      ["VAR", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 11],
      ["NTE", 15],
      ["OBX", 12],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["ROL", 13],
      ["VAR", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["PRB", 5],
      ["PTH", 3],
      ["ROL", 6],
      ["VAR", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 26],
      ["OBX", 24],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["VAR", 25],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 11],
      ["NTE", 27],
      ["OBX", 18],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 11],
      ["OBX", 18],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["ROL", 19],
      ["VAR", 28],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 11],
      ["OBX", 18],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 11],
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 11],
      ["NTE", 22],
      ["OBX", 12],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 11],
      ["OBX", 12],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["ROL", 13],
      ["VAR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 30],
      ["OBX", 24],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["VAR", 29],
    ]),
  ],
  [
    25,
    new Map([
      ["OBX", 24],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 26],
      ["OBX", 24],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["VAR", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 11],
      ["NTE", 27],
      ["OBX", 18],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 11],
      ["OBX", 18],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["ROL", 19],
      ["VAR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["OBX", 24],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["NTE", 30],
      ["OBX", 24],
      ["ORC", 10],
      ["PRB", 5],
      ["PTH", 3],
      ["VAR", 29],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [],
  },
  "10:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL"],
  },
  "10:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
    ],
  },
  "11:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "11:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "11:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "11:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "11:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "12:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "12:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "12:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "12:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "13:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "13:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "13:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "13:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "13:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "13:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "14:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "14:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "14:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "15:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "15:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "15:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "16:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
  },
  "16:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [],
  },
  "16:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "17:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "17:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "18:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "18:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "18:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "19:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "19:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "19:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "19:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "19:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "20:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "20:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "20:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "20:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "21:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "21:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "21:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "21:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "22:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "22:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "22:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "23:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "23:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "23:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "24:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "24:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "27:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "27:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "28:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "28:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "28:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "28:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "28:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "29:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "2:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: ["PPP_PCB/PATIENT_VISIT"],
  },
  "2:PV1": {
    groupsOpened: ["PPP_PCB/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "30:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "30:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "3:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
  },
  "3:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [],
  },
  "3:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "4:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: ["PPP_PCB/PATIENT_VISIT"],
  },
  "5:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "5:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "5:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "5:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "5:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "5:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "6:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
  },
  "6:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [],
  },
  "6:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "7:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
  },
  "7:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [],
  },
  "7:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "8:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
  },
  "8:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [],
  },
  "8:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "9:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: ["PPP_PCB/PATIENT_VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
