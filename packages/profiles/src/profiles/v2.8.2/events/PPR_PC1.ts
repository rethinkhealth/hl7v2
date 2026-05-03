// Generated profile automaton for PPR_PC1 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  5, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31, 32, 33,
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
  "PRT",
  "PTH",
  "PV1",
  "PV2",
  "ROL",
  "SFT",
  "UAC",
  "VAR",
  "Hxx",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["PID", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["PRB", 5],
      ["PV1", 6],
    ]),
  ],
  [3, new Map([["PID", 2]])],
  [
    4,
    new Map([
      ["PID", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["GOL", 8],
      ["NTE", 13],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 12],
    ]),
  ],
  [
    6,
    new Map([
      ["PRB", 5],
      ["PV2", 14],
    ]),
  ],
  [
    7,
    new Map([
      ["OBR", 15],
      ["ORC", 7],
      ["PRB", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 8],
      ["NTE", 19],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 5],
      ["ROL", 17],
      ["VAR", 18],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 8],
      ["NTE", 20],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PRT", 21],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 8],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PTH", 10],
      ["VAR", 22],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 8],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 23],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 8],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 8],
      ["NTE", 13],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 12],
    ]),
  ],
  [14, new Map([["PRB", 5]])],
  [15, new Map([["Hxx", 24]])],
  [
    16,
    new Map([
      ["GOL", 8],
      ["NTE", 25],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 5],
      ["PRT", 26],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 8],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 5],
      ["ROL", 17],
      ["VAR", 27],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 8],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 5],
      ["ROL", 17],
      ["VAR", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 8],
      ["NTE", 19],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 5],
      ["ROL", 17],
      ["VAR", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 8],
      ["NTE", 20],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 8],
      ["NTE", 20],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PRT", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 8],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PTH", 10],
      ["VAR", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 8],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 30],
      ["OBX", 28],
      ["ORC", 7],
      ["PRB", 5],
      ["VAR", 29],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 8],
      ["NTE", 25],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 5],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 8],
      ["NTE", 25],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 5],
      ["PRT", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 8],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 5],
      ["ROL", 17],
      ["VAR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 32],
      ["OBX", 28],
      ["ORC", 7],
      ["PRB", 5],
      ["PRT", 33],
      ["VAR", 31],
    ]),
  ],
  [
    29,
    new Map([
      ["OBX", 28],
      ["ORC", 7],
      ["PRB", 5],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["NTE", 30],
      ["OBX", 28],
      ["ORC", 7],
      ["PRB", 5],
      ["VAR", 29],
    ]),
  ],
  [
    31,
    new Map([
      ["OBX", 28],
      ["ORC", 7],
      ["PRB", 5],
      ["VAR", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["NTE", 32],
      ["OBX", 28],
      ["ORC", 7],
      ["PRB", 5],
      ["VAR", 31],
    ]),
  ],
  [
    33,
    new Map([
      ["NTE", 32],
      ["OBX", 28],
      ["ORC", 7],
      ["PRB", 5],
      ["PRT", 33],
      ["VAR", 31],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "10:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "10:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "10:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "11:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "11:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
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
  "12:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "12:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "12:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "12:PTH": {
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "12:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "13:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "13:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "13:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "13:PTH": {
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "13:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "14:PRB": {
    groupsClosed: ["PPR_PC1/PATIENT_VISIT"],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "16:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "16:PRB": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM"],
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
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "18:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "18:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "18:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "19:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "19:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "19:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "19:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "20:GOL": {
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "20:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "21:GOL": {
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "21:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "22:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "22:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "22:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "22:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "23:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "23:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "23:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "23:PTH": {
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "23:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "24:NTE": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "24:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "24:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "24:VAR": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "25:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "25:PRB": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "26:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "26:PRB": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "27:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "27:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "27:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "27:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
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
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "29:PRB": {
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
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "30:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "31:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "32:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "33:ORC": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "33:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "5:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "5:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "5:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "5:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "5:PTH": {
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "5:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "6:PRB": {
    groupsClosed: ["PPR_PC1/PATIENT_VISIT"],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "7:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "7:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "8:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "8:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "8:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "8:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "9:GOL": {
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "9:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
