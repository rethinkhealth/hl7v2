// Generated profile automaton for PGL_PC6 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  4, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29,
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
  "VAR",
  "anyHL7Segment",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["PID", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["GOL", 4],
      ["PV1", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["PID", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["GOL", 4],
      ["NTE", 12],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 7],
      ["PTH", 9],
      ["ROL", 10],
      ["VAR", 11],
    ]),
  ],
  [
    5,
    new Map([
      ["GOL", 4],
      ["PV2", 13],
    ]),
  ],
  [
    6,
    new Map([
      ["GOL", 4],
      ["OBR", 14],
      ["ORC", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 4],
      ["NTE", 18],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 7],
      ["ROL", 16],
      ["VAR", 17],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 4],
      ["NTE", 19],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 4],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 7],
      ["PTH", 9],
      ["VAR", 20],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 4],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 7],
      ["PTH", 9],
      ["ROL", 10],
      ["VAR", 21],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 4],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 7],
      ["PTH", 9],
      ["ROL", 10],
      ["VAR", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 4],
      ["NTE", 12],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 7],
      ["PTH", 9],
      ["ROL", 10],
      ["VAR", 11],
    ]),
  ],
  [13, new Map([["GOL", 4]])],
  [14, new Map([["anyHL7Segment", 22]])],
  [
    15,
    new Map([
      ["GOL", 4],
      ["NTE", 23],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 7],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 4],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 7],
      ["ROL", 16],
      ["VAR", 24],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 4],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 7],
      ["ROL", 16],
      ["VAR", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 4],
      ["NTE", 18],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 7],
      ["ROL", 16],
      ["VAR", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 4],
      ["NTE", 19],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 7],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 4],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 7],
      ["PTH", 9],
      ["VAR", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 4],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 7],
      ["PTH", 9],
      ["ROL", 10],
      ["VAR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 4],
      ["NTE", 27],
      ["OBX", 25],
      ["ORC", 6],
      ["VAR", 26],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 4],
      ["NTE", 23],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 7],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 4],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 7],
      ["ROL", 16],
      ["VAR", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 4],
      ["NTE", 29],
      ["OBX", 25],
      ["ORC", 6],
      ["VAR", 28],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 4],
      ["OBX", 25],
      ["ORC", 6],
      ["VAR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 4],
      ["NTE", 27],
      ["OBX", 25],
      ["ORC", 6],
      ["VAR", 26],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 4],
      ["OBX", 25],
      ["ORC", 6],
      ["VAR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 4],
      ["NTE", 29],
      ["OBX", 25],
      ["ORC", 6],
      ["VAR", 28],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "10:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
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
  "11:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
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
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
  },
  "12:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "12:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
  },
  "12:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "12:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "13:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
  },
  "15:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "15:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "15:PRB": {
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
  "16:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "16:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "16:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "16:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "17:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "17:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "17:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "17:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "17:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "18:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "18:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "18:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "18:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "18:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "19:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PROBLEM"],
  },
  "19:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "20:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "20:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "20:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PATHWAY"],
  },
  "20:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
  },
  "21:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "21:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
  },
  "21:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "21:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "22:NTE": {
    groupsOpened: [],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "22:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "22:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "22:VAR": {
    groupsOpened: [],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "23:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "23:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "23:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "24:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "24:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "24:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
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
  "25:ORC": {
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
  "26:ORC": {
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
  "27:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
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
  "28:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "29:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "2:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
  },
  "2:PV1": {
    groupsOpened: ["PGL_PC6/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "4:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
  },
  "4:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "4:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
  },
  "4:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "4:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "5:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
  },
  "6:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "6:OBR": {
    groupsOpened: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [],
  },
  "7:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "7:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "7:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "7:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "7:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "8:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "8:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PROBLEM"],
  },
  "8:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "9:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "9:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "9:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "9:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PATHWAY"],
  },
  "9:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
