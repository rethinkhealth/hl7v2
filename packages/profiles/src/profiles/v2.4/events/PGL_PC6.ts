// Generated profile automaton for PGL_PC6 (v2.4)

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
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "14:GOL": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "14:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "15:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "15:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "15:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "15:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
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
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PROBLEM"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "18:PRB": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "19:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "19:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "19:PRB": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "19:PTH": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "20:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "20:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "20:PRB": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "20:PTH": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "20:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "21:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/OBRRXO_SUPPGRP",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "21:NTE": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/OBRRXO_SUPPGRP"],
    groupsOpened: [],
  },
  "21:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/OBRRXO_SUPPGRP"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "21:VAR": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/OBRRXO_SUPPGRP"],
    groupsOpened: [],
  },
  "22:GOL": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "22:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "23:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "23:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "23:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "23:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
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
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
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
  "2:GOL": {
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "2:PV1": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/PATIENT_VISIT"],
  },
  "3:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "3:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "3:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "3:PRB": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "3:PTH": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "3:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
  "4:GOL": {
    groupsClosed: ["PGL_PC6/PATIENT_VISIT"],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "5:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/OBRRXO_SUPPGRP",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "5:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL",
      "PGL_PC6/GOAL/ORDER/ORDER_DETAIL/OBRRXO_SUPPGRP",
    ],
  },
  "5:ORC": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "6:GOL": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "6:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/PROBLEM",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "6:PRB": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "6:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "7:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PROBLEM"],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "7:PRB": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "8:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "8:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "8:PRB": {
    groupsClosed: ["PGL_PC6/GOAL/OBSERVATION", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "8:PTH": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "9:GOL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL"],
  },
  "9:OBX": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE", "PGL_PC6/GOAL/PATHWAY"],
    groupsOpened: ["PGL_PC6/GOAL/OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
      "PGL_PC6/GOAL/PROBLEM",
    ],
    groupsOpened: ["PGL_PC6/GOAL/ORDER"],
  },
  "9:PRB": {
    groupsClosed: [
      "PGL_PC6/GOAL/GOAL_ROLE",
      "PGL_PC6/GOAL/OBSERVATION",
      "PGL_PC6/GOAL/PATHWAY",
    ],
    groupsOpened: ["PGL_PC6/GOAL/PROBLEM"],
  },
  "9:PTH": {
    groupsClosed: ["PGL_PC6/GOAL/GOAL_ROLE"],
    groupsOpened: ["PGL_PC6/GOAL/PATHWAY"],
  },
  "9:ROL": {
    groupsClosed: [],
    groupsOpened: ["PGL_PC6/GOAL/GOAL_ROLE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
