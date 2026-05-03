// Generated profile automaton for PGL_PC6 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
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
  "SFT",
  "VAR",
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
  [
    14,
    new Map([
      ["GOL", 4],
      ["NTE", 24],
      ["OBX", 22],
      ["ORC", 6],
      ["VAR", 23],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 4],
      ["NTE", 25],
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
      ["VAR", 26],
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
      ["NTE", 28],
      ["OBX", 22],
      ["ORC", 6],
      ["VAR", 27],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 4],
      ["OBX", 22],
      ["ORC", 6],
      ["VAR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 4],
      ["NTE", 24],
      ["OBX", 22],
      ["ORC", 6],
      ["VAR", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 4],
      ["NTE", 25],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 7],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 4],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 7],
      ["ROL", 16],
      ["VAR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 4],
      ["OBX", 22],
      ["ORC", 6],
      ["VAR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 4],
      ["NTE", 28],
      ["OBX", 22],
      ["ORC", 6],
      ["VAR", 27],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "10:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "10:PRB": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "10:PTH": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "10:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
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
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "14:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "14:NTE": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP"],
    groupsOpened: [],
  },
  "14:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "14:VAR": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP"],
    groupsOpened: [],
  },
  "15:GOL": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "15:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "16:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "16:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "16:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "16:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
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
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PROBLEM"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "19:PRB": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "20:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "20:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "20:PRB": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "20:PTH": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "21:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "21:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "21:PRB": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "21:PTH": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "21:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "22:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "23:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "24:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "25:GOL": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "25:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "26:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "26:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "26:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "26:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
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
  "2:GOL": {
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "2:PV1": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/PATIENT_VISIT"],
  },
  "4:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "4:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "4:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "4:PRB": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "4:PTH": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "4:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "5:GOL": {
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "6:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "6:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
  },
  "6:ORC": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "7:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "7:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "7:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "7:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "8:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PROBLEM"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "8:PRB": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "9:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "9:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "9:PRB": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "9:PTH": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
