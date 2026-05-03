// Generated profile automaton for PPR_PC1 (v2.5.1)

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
      ["PRB", 4],
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
      ["GOL", 7],
      ["NTE", 12],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
      ["PTH", 9],
      ["ROL", 10],
      ["VAR", 11],
    ]),
  ],
  [
    5,
    new Map([
      ["PRB", 4],
      ["PV2", 13],
    ]),
  ],
  [
    6,
    new Map([
      ["OBR", 14],
      ["ORC", 6],
      ["PRB", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 7],
      ["NTE", 18],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 4],
      ["ROL", 16],
      ["VAR", 17],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 7],
      ["NTE", 19],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 7],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
      ["PTH", 9],
      ["VAR", 20],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 7],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
      ["PTH", 9],
      ["ROL", 10],
      ["VAR", 21],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 7],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
      ["PTH", 9],
      ["ROL", 10],
      ["VAR", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 7],
      ["NTE", 12],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
      ["PTH", 9],
      ["ROL", 10],
      ["VAR", 11],
    ]),
  ],
  [13, new Map([["PRB", 4]])],
  [
    14,
    new Map([
      ["NTE", 24],
      ["OBX", 22],
      ["ORC", 6],
      ["PRB", 4],
      ["VAR", 23],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 7],
      ["NTE", 25],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 4],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 7],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 4],
      ["ROL", 16],
      ["VAR", 26],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 7],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 4],
      ["ROL", 16],
      ["VAR", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 7],
      ["NTE", 18],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 4],
      ["ROL", 16],
      ["VAR", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 7],
      ["NTE", 19],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 7],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
      ["PTH", 9],
      ["VAR", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 7],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
      ["PTH", 9],
      ["ROL", 10],
      ["VAR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 28],
      ["OBX", 22],
      ["ORC", 6],
      ["PRB", 4],
      ["VAR", 27],
    ]),
  ],
  [
    23,
    new Map([
      ["OBX", 22],
      ["ORC", 6],
      ["PRB", 4],
      ["VAR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 24],
      ["OBX", 22],
      ["ORC", 6],
      ["PRB", 4],
      ["VAR", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 7],
      ["NTE", 25],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 4],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 7],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 4],
      ["ROL", 16],
      ["VAR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["OBX", 22],
      ["ORC", 6],
      ["PRB", 4],
      ["VAR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 28],
      ["OBX", 22],
      ["ORC", 6],
      ["PRB", 4],
      ["VAR", 27],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "10:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
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
  "13:PRB": {
    groupsClosed: ["PPR_PC1/PATIENT_VISIT"],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "14:NTE": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP"],
    groupsOpened: [],
  },
  "14:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "14:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "14:VAR": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP"],
    groupsOpened: [],
  },
  "15:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "15:PRB": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM"],
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
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "19:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "20:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "20:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "20:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "20:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "21:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "21:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "21:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "21:PTH": {
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "21:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "22:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "23:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
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
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "26:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "26:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
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
  "4:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "4:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "4:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "4:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "4:PTH": {
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "4:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "5:PRB": {
    groupsClosed: ["PPR_PC1/PATIENT_VISIT"],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "6:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
  },
  "6:ORC": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "6:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "7:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "7:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "7:PRB": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "7:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "8:GOL": {
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "8:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "9:GOL": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
  },
  "9:OBX": {
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
  },
  "9:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM"],
  },
  "9:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
