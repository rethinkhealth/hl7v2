// Generated profile automaton for PGL_PC6 (v2.3.1)

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
      ["GOL", 3],
      ["PV1", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["GOL", 3],
      ["NTE", 11],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 6],
      ["PTH", 8],
      ["ROL", 9],
      ["VAR", 10],
    ]),
  ],
  [
    4,
    new Map([
      ["GOL", 3],
      ["PV2", 12],
    ]),
  ],
  [
    5,
    new Map([
      ["GOL", 3],
      ["OBR", 13],
      ["ORC", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["GOL", 3],
      ["NTE", 17],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 6],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 3],
      ["NTE", 18],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 3],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 6],
      ["PTH", 8],
      ["VAR", 19],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 3],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 6],
      ["PTH", 8],
      ["ROL", 9],
      ["VAR", 20],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 3],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 6],
      ["PTH", 8],
      ["ROL", 9],
      ["VAR", 10],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 3],
      ["NTE", 11],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 6],
      ["PTH", 8],
      ["ROL", 9],
      ["VAR", 10],
    ]),
  ],
  [12, new Map([["GOL", 3]])],
  [13, new Map([["RXO", 21]])],
  [
    14,
    new Map([
      ["GOL", 3],
      ["NTE", 22],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 6],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 3],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 6],
      ["ROL", 15],
      ["VAR", 23],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 3],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 6],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 3],
      ["NTE", 17],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 6],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 3],
      ["NTE", 18],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 6],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 3],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 6],
      ["PTH", 8],
      ["VAR", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 3],
      ["OBX", 7],
      ["ORC", 5],
      ["PRB", 6],
      ["PTH", 8],
      ["ROL", 9],
      ["VAR", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 3],
      ["NTE", 26],
      ["OBX", 24],
      ["ORC", 5],
      ["VAR", 25],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 3],
      ["NTE", 22],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 6],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 3],
      ["OBX", 14],
      ["ORC", 5],
      ["PRB", 6],
      ["ROL", 15],
      ["VAR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 3],
      ["NTE", 28],
      ["OBX", 24],
      ["ORC", 5],
      ["VAR", 27],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 3],
      ["OBX", 24],
      ["ORC", 5],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 3],
      ["NTE", 26],
      ["OBX", 24],
      ["ORC", 5],
      ["VAR", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 3],
      ["OBX", 24],
      ["ORC", 5],
      ["VAR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 3],
      ["NTE", 28],
      ["OBX", 24],
      ["ORC", 5],
      ["VAR", 27],
    ]),
  ],
]);
export const effects = {
  "2:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
  },
  "2:PV1": {
    groupsOpened: ["PGL_PC6/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "3:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "3:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
  },
  "3:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
  },
  "3:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "3:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "4:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
  },
  "5:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [],
  },
  "5:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "5:OBR": {
    groupsOpened: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "6:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "6:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "6:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "6:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "6:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "7:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: [],
  },
  "7:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PROBLEM"],
  },
  "7:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "8:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: [],
  },
  "8:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "8:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PATHWAY"],
  },
  "8:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "9:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "9:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "9:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
  },
  "9:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
  },
  "9:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "10:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "10:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
  },
  "10:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
  },
  "10:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "10:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "11:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "11:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
  },
  "11:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
  },
  "11:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "11:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "12:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
  },
  "14:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "14:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "14:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "14:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "15:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "15:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "15:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "16:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "16:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "16:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "16:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "16:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "17:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "17:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "17:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "17:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "17:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: [],
  },
  "18:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PROBLEM"],
  },
  "18:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "19:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: [],
  },
  "19:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "19:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PATHWAY"],
  },
  "19:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "20:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "20:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
  },
  "20:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
  },
  "20:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "21:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "21:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "21:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "21:VAR": {
    groupsOpened: [],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "21:NTE": {
    groupsOpened: [],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "22:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "22:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "22:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "23:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "23:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "23:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "24:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "24:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "25:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "26:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "27:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "28:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
