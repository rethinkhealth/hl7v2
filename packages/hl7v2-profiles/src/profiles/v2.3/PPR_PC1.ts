// Generated profile automaton for PPR_PC1 (v2.3)

export const start = 0;
export const finals = new Set<number>([
  3, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27,
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
      ["PRB", 3],
      ["PV1", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["GOL", 6],
      ["NTE", 11],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 3],
      ["PTH", 8],
      ["ROL", 9],
      ["VAR", 10],
    ]),
  ],
  [
    4,
    new Map([
      ["PRB", 3],
      ["PV2", 12],
    ]),
  ],
  [
    5,
    new Map([
      ["OBR", 13],
      ["ORC", 5],
      ["PRB", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["GOL", 6],
      ["NTE", 17],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 3],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 6],
      ["NTE", 18],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 3],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 6],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 3],
      ["PTH", 8],
      ["VAR", 19],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 6],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 3],
      ["PTH", 8],
      ["ROL", 9],
      ["VAR", 20],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 6],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 3],
      ["PTH", 8],
      ["ROL", 9],
      ["VAR", 10],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 6],
      ["NTE", 11],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 3],
      ["PTH", 8],
      ["ROL", 9],
      ["VAR", 10],
    ]),
  ],
  [12, new Map([["PRB", 3]])],
  [
    13,
    new Map([
      ["NTE", 23],
      ["OBX", 21],
      ["ORC", 5],
      ["PRB", 3],
      ["VAR", 22],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 6],
      ["NTE", 24],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 3],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 6],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 3],
      ["ROL", 15],
      ["VAR", 25],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 6],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 3],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 6],
      ["NTE", 17],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 3],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 6],
      ["NTE", 18],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 3],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 6],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 3],
      ["PTH", 8],
      ["VAR", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 6],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 3],
      ["PTH", 8],
      ["ROL", 9],
      ["VAR", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 27],
      ["OBX", 21],
      ["ORC", 5],
      ["PRB", 3],
      ["VAR", 26],
    ]),
  ],
  [
    22,
    new Map([
      ["OBX", 21],
      ["ORC", 5],
      ["PRB", 3],
      ["VAR", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["NTE", 23],
      ["OBX", 21],
      ["ORC", 5],
      ["PRB", 3],
      ["VAR", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 6],
      ["NTE", 24],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 3],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 6],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 3],
      ["ROL", 15],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["OBX", 21],
      ["ORC", 5],
      ["PRB", 3],
      ["VAR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 27],
      ["OBX", 21],
      ["ORC", 5],
      ["PRB", 3],
      ["VAR", 26],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "10:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "10:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "10:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "10:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "10:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "11:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "11:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "11:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "11:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "11:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "11:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "12:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: ["PPR_PC1/PATIENT_VISIT"],
  },
  "13:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "13:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "14:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "14:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "15:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "15:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "15:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "15:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "16:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "16:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "16:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "16:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "17:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "17:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "17:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "17:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "18:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "18:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "18:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "19:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "19:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "19:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "19:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "19:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "20:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "20:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "20:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "21:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "22:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "22:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "23:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "23:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "24:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "24:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "25:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "25:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "25:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "25:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "26:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "26:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "27:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "2:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: ["PPR_PC1/PATIENT_VISIT"],
  },
  "2:PV1": {
    groupsOpened: ["PPR_PC1/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "3:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "3:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "3:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "3:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "3:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "3:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "4:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: ["PPR_PC1/PATIENT_VISIT"],
  },
  "5:OBR": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [],
  },
  "5:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL"],
  },
  "6:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "6:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "6:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "6:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "6:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "7:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "7:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "7:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "8:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "8:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "8:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "8:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "8:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: [],
  },
  "9:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "9:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "9:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "9:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "9:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "9:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
