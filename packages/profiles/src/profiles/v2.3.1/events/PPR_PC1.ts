// Generated profile automaton for PPR_PC1 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([
  3, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
  27, 28,
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
  "RXO",
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
  [13, new Map([["RXO", 21]])],
  [
    14,
    new Map([
      ["GOL", 6],
      ["NTE", 22],
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
      ["VAR", 23],
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
      ["NTE", 26],
      ["OBX", 24],
      ["ORC", 5],
      ["PRB", 3],
      ["VAR", 25],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 6],
      ["NTE", 22],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 3],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 6],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 3],
      ["ROL", 15],
      ["VAR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 28],
      ["OBX", 24],
      ["ORC", 5],
      ["PRB", 3],
      ["VAR", 27],
    ]),
  ],
  [
    25,
    new Map([
      ["OBX", 24],
      ["ORC", 5],
      ["PRB", 3],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 26],
      ["OBX", 24],
      ["ORC", 5],
      ["PRB", 3],
      ["VAR", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["OBX", 24],
      ["ORC", 5],
      ["PRB", 3],
      ["VAR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 28],
      ["OBX", 24],
      ["ORC", 5],
      ["PRB", 3],
      ["VAR", 27],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "10:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY_OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "10:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "10:PTH": {
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "10:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "11:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "11:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY_OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "11:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "11:PTH": {
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "11:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "12:PRB": {
    groupsClosed: ["PPR_PC1/PATIENT_VISIT"],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "14:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "14:PRB": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "15:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "15:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "15:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "15:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "16:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "16:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "16:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "16:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "17:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "17:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "17:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "17:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "18:GOL": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "18:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "19:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "19:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY_OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "19:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "19:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "20:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "20:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY_OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "20:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "20:PTH": {
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "20:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "21:NTE": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "21:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "21:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "21:VAR": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "22:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "22:PRB": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "23:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "23:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "23:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "23:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "24:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "25:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "26:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "27:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "28:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "2:PRB": {
    groupsClosed: ["PPR_PC1/PATIENT_VISIT"],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "2:PV1": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PATIENT_VISIT"],
  },
  "3:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "3:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY_OBSERVATION"],
  },
  "3:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "3:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "3:PTH": {
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "3:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "4:PRB": {
    groupsClosed: ["PPR_PC1/PATIENT_VISIT"],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "5:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "5:ORC": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "5:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "6:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "6:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "6:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "6:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "7:GOL": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY_OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "7:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "8:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "8:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "8:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "8:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "9:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "9:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PATHWAY_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "9:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "9:PTH": {
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "9:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
