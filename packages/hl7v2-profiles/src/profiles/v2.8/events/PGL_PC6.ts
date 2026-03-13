// Generated profile automaton for PGL_PC6 (v2.8)

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
  "anyHL7Segment",
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
      ["PRT", 21],
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
      ["VAR", 22],
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
      ["VAR", 23],
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
  [15, new Map([["anyHL7Segment", 24]])],
  [
    16,
    new Map([
      ["GOL", 5],
      ["NTE", 25],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 8],
      ["PRT", 26],
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
      ["VAR", 27],
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
      ["NTE", 20],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 8],
      ["PRT", 21],
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
      ["VAR", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 5],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 8],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 5],
      ["NTE", 30],
      ["OBX", 28],
      ["ORC", 7],
      ["VAR", 29],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 5],
      ["NTE", 25],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 8],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 5],
      ["NTE", 25],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 8],
      ["PRT", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 5],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 8],
      ["ROL", 17],
      ["VAR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 5],
      ["NTE", 32],
      ["OBX", 28],
      ["ORC", 7],
      ["PRT", 33],
      ["VAR", 31],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 5],
      ["OBX", 28],
      ["ORC", 7],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 5],
      ["NTE", 30],
      ["OBX", 28],
      ["ORC", 7],
      ["VAR", 29],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 5],
      ["OBX", 28],
      ["ORC", 7],
      ["VAR", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["GOL", 5],
      ["NTE", 32],
      ["OBX", 28],
      ["ORC", 7],
      ["VAR", 31],
    ]),
  ],
  [
    33,
    new Map([
      ["GOL", 5],
      ["NTE", 32],
      ["OBX", 28],
      ["ORC", 7],
      ["PRT", 33],
      ["VAR", 31],
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
  "5:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "5:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
  },
  "5:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
  },
  "5:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "5:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "6:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
  },
  "7:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [],
  },
  "7:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "7:OBR": {
    groupsOpened: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "8:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "8:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "8:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "8:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "8:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "9:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: [],
  },
  "9:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PROBLEM"],
  },
  "9:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "10:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: [],
  },
  "10:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "10:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PATHWAY"],
  },
  "10:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "11:ROL": {
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
  "12:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
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
  "12:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
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
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "13:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
  },
  "13:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
  },
  "13:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "13:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "14:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
  },
  "16:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "16:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "16:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "16:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "17:ROL": {
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
  "18:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "18:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "18:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "18:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "18:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "19:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "19:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "19:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "19:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "19:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PROBLEM"],
  },
  "20:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "21:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PROBLEM"],
  },
  "21:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "22:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "22:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PATHWAY"],
  },
  "22:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "23:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "23:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
  },
  "23:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
  },
  "23:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
  },
  "23:PTH": {
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "24:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "24:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "24:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "24:VAR": {
    groupsOpened: [],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "24:NTE": {
    groupsOpened: [],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "25:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "25:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "25:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "25:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "26:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "26:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "26:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "26:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "27:ROL": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "27:PRB": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "27:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "27:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "27:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
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
  "29:ORC": {
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
  "30:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "30:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "31:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "31:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "32:GOL": {
    groupsOpened: ["PGL_PC6/GOAL"],
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:OBX": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "33:GOL": {
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
