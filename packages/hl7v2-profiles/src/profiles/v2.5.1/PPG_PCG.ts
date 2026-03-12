// Generated profile automaton for PPG_PCG (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31,
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
      ["PTH", 4],
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
      ["GOL", 6],
      ["NTE", 9],
      ["PTH", 4],
      ["ROL", 7],
      ["VAR", 8],
    ]),
  ],
  [
    5,
    new Map([
      ["PTH", 4],
      ["PV2", 10],
    ]),
  ],
  [
    6,
    new Map([
      ["GOL", 6],
      ["NTE", 16],
      ["OBX", 13],
      ["ORC", 11],
      ["PRB", 12],
      ["PTH", 4],
      ["ROL", 14],
      ["VAR", 15],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 6],
      ["PTH", 4],
      ["ROL", 7],
      ["VAR", 17],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 6],
      ["PTH", 4],
      ["ROL", 7],
      ["VAR", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 6],
      ["NTE", 9],
      ["PTH", 4],
      ["ROL", 7],
      ["VAR", 8],
    ]),
  ],
  [10, new Map([["PTH", 4]])],
  [
    11,
    new Map([
      ["GOL", 6],
      ["OBR", 18],
      ["ORC", 11],
      ["PTH", 4],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 6],
      ["NTE", 22],
      ["OBX", 19],
      ["ORC", 11],
      ["PRB", 12],
      ["PTH", 4],
      ["ROL", 20],
      ["VAR", 21],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 6],
      ["NTE", 23],
      ["OBX", 13],
      ["ORC", 11],
      ["PRB", 12],
      ["PTH", 4],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 6],
      ["OBX", 13],
      ["ORC", 11],
      ["PRB", 12],
      ["PTH", 4],
      ["ROL", 14],
      ["VAR", 24],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 6],
      ["OBX", 13],
      ["ORC", 11],
      ["PRB", 12],
      ["PTH", 4],
      ["ROL", 14],
      ["VAR", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 6],
      ["NTE", 16],
      ["OBX", 13],
      ["ORC", 11],
      ["PRB", 12],
      ["PTH", 4],
      ["ROL", 14],
      ["VAR", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 6],
      ["PTH", 4],
      ["ROL", 7],
      ["VAR", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 6],
      ["NTE", 27],
      ["OBX", 25],
      ["ORC", 11],
      ["PTH", 4],
      ["VAR", 26],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 6],
      ["NTE", 28],
      ["OBX", 19],
      ["ORC", 11],
      ["PRB", 12],
      ["PTH", 4],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 6],
      ["OBX", 19],
      ["ORC", 11],
      ["PRB", 12],
      ["PTH", 4],
      ["ROL", 20],
      ["VAR", 29],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 6],
      ["OBX", 19],
      ["ORC", 11],
      ["PRB", 12],
      ["PTH", 4],
      ["ROL", 20],
      ["VAR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 6],
      ["NTE", 22],
      ["OBX", 19],
      ["ORC", 11],
      ["PRB", 12],
      ["PTH", 4],
      ["ROL", 20],
      ["VAR", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 6],
      ["NTE", 23],
      ["OBX", 13],
      ["ORC", 11],
      ["PRB", 12],
      ["PTH", 4],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 6],
      ["OBX", 13],
      ["ORC", 11],
      ["PRB", 12],
      ["PTH", 4],
      ["ROL", 14],
      ["VAR", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 6],
      ["NTE", 31],
      ["OBX", 25],
      ["ORC", 11],
      ["PTH", 4],
      ["VAR", 30],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 6],
      ["OBX", 25],
      ["ORC", 11],
      ["PTH", 4],
      ["VAR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 6],
      ["NTE", 27],
      ["OBX", 25],
      ["ORC", 11],
      ["PTH", 4],
      ["VAR", 26],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 6],
      ["NTE", 28],
      ["OBX", 19],
      ["ORC", 11],
      ["PRB", 12],
      ["PTH", 4],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 6],
      ["OBX", 19],
      ["ORC", 11],
      ["PRB", 12],
      ["PTH", 4],
      ["ROL", 20],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 6],
      ["OBX", 25],
      ["ORC", 11],
      ["PTH", 4],
      ["VAR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 6],
      ["NTE", 31],
      ["OBX", 25],
      ["ORC", 11],
      ["PTH", 4],
      ["VAR", 30],
    ]),
  ],
]);
export const effects = {
  "10:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: ["PPG_PCG/PATIENT_VISIT"],
  },
  "11:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
  },
  "11:OBR": {
    groupsOpened: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [],
  },
  "11:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
  },
  "12:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "12:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "12:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "12:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "12:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "12:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "13:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "13:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "13:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "14:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "14:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "14:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "14:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "14:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "15:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "15:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "15:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "15:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "15:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "16:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "16:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "16:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "16:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "16:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "17:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
  },
  "17:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [],
  },
  "17:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "18:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "18:NTE": {
    groupsOpened: [],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP"],
  },
  "18:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP"],
  },
  "18:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "18:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "18:VAR": {
    groupsOpened: [],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP"],
  },
  "19:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "19:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "19:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "19:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "20:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "20:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "20:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "21:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "21:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "22:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "22:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "23:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "23:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "23:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "24:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "24:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "24:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "24:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "24:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "25:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "25:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "26:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "27:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "28:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "28:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "28:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "29:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "29:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "29:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "29:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "29:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "29:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "2:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: ["PPG_PCG/PATIENT_VISIT"],
  },
  "2:PV1": {
    groupsOpened: ["PPG_PCG/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "30:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "30:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "30:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "31:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "4:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
  },
  "4:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [],
  },
  "4:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "5:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: ["PPG_PCG/PATIENT_VISIT"],
  },
  "6:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "6:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "6:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "6:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "6:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "6:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "7:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
  },
  "7:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [],
  },
  "7:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "8:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
  },
  "8:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [],
  },
  "8:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "9:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
  },
  "9:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [],
  },
  "9:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
