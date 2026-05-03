// Generated profile automaton for PGL_PC6 (v2.7)

export const start = 0;
export const finals = new Set<number>([
  5, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30,
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
      ["GOL", 5],
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
      ["GOL", 5],
      ["NTE", 13],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 8],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 12],
    ]),
  ],
  [
    6,
    new Map([
      ["GOL", 5],
      ["PV2", 14],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 5],
      ["OBR", 15],
      ["ORC", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 5],
      ["NTE", 19],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 8],
      ["ROL", 17],
      ["VAR", 18],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 5],
      ["NTE", 20],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 5],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 8],
      ["PTH", 10],
      ["VAR", 21],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 5],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 8],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 22],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 5],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 8],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 5],
      ["NTE", 13],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 8],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 12],
    ]),
  ],
  [14, new Map([["GOL", 5]])],
  [15, new Map([["Hxx", 23]])],
  [
    16,
    new Map([
      ["GOL", 5],
      ["NTE", 24],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 8],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 5],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 8],
      ["ROL", 17],
      ["VAR", 25],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 5],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 8],
      ["ROL", 17],
      ["VAR", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 5],
      ["NTE", 19],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 8],
      ["ROL", 17],
      ["VAR", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 5],
      ["NTE", 20],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 8],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 5],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 8],
      ["PTH", 10],
      ["VAR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 5],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 8],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 5],
      ["NTE", 28],
      ["OBX", 26],
      ["ORC", 7],
      ["VAR", 27],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 5],
      ["NTE", 24],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 8],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 5],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 8],
      ["ROL", 17],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 5],
      ["NTE", 30],
      ["OBX", 26],
      ["ORC", 7],
      ["VAR", 29],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 5],
      ["OBX", 26],
      ["ORC", 7],
      ["VAR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 5],
      ["NTE", 28],
      ["OBX", 26],
      ["ORC", 7],
      ["VAR", 27],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 5],
      ["OBX", 26],
      ["ORC", 7],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 5],
      ["NTE", 30],
      ["OBX", 26],
      ["ORC", 7],
      ["VAR", 29],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "10:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "10:PRB": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "10:PTH": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "11:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "11:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "11:PRB": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "11:PTH": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "11:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "12:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "12:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "12:PRB": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "12:PTH": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "12:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "13:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "13:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "13:PRB": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "13:PTH": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "13:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "14:GOL": {
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "16:GOL": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "16:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "17:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "17:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "17:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "17:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "18:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "18:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "18:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "18:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "19:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "19:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "19:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "19:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "20:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PROBLEM"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "20:PRB": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "21:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "21:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "21:PRB": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "21:PTH": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "22:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "22:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "22:PRB": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "22:PTH": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "22:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "23:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "23:NTE": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "23:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "23:VAR": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "24:GOL": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "24:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "25:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "25:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "25:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "25:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "26:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "27:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "28:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "29:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "2:GOL": {
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "2:PV1": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/PATIENT_VISIT"],
  },
  "30:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "5:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "5:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "5:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "5:PRB": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "5:PTH": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "5:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "6:GOL": {
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "7:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "7:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "8:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "8:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "8:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "8:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "9:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PROBLEM"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "9:PRB": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
