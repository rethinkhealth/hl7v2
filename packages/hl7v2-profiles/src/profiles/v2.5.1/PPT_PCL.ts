// Generated profile automaton for PPT_PCL (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  8, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  30, 31, 32, 33, 34, 35,
]);
export const alphabet = new Set<string>([
  "ERR",
  "GOL",
  "MSA",
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
  "QAK",
  "QRD",
  "ROL",
  "SFT",
  "VAR",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
      ["QRD", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([["PID", 7]])],
  [5, new Map([["QRD", 4]])],
  [
    6,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
      ["QRD", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["PTH", 8],
      ["PV1", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 10],
      ["NTE", 13],
      ["PID", 7],
      ["PTH", 8],
      ["ROL", 11],
      ["VAR", 12],
    ]),
  ],
  [
    9,
    new Map([
      ["PTH", 8],
      ["PV2", 14],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 10],
      ["NTE", 20],
      ["OBX", 17],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
      ["ROL", 18],
      ["VAR", 19],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 10],
      ["PID", 7],
      ["PTH", 8],
      ["ROL", 11],
      ["VAR", 21],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 10],
      ["PID", 7],
      ["PTH", 8],
      ["ROL", 11],
      ["VAR", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 10],
      ["NTE", 13],
      ["PID", 7],
      ["PTH", 8],
      ["ROL", 11],
      ["VAR", 12],
    ]),
  ],
  [14, new Map([["PTH", 8]])],
  [
    15,
    new Map([
      ["GOL", 10],
      ["OBR", 22],
      ["ORC", 15],
      ["PID", 7],
      ["PTH", 8],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 10],
      ["NTE", 26],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
      ["ROL", 24],
      ["VAR", 25],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 10],
      ["NTE", 27],
      ["OBX", 17],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 10],
      ["OBX", 17],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
      ["ROL", 18],
      ["VAR", 28],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 10],
      ["OBX", 17],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
      ["ROL", 18],
      ["VAR", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 10],
      ["NTE", 20],
      ["OBX", 17],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
      ["ROL", 18],
      ["VAR", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 10],
      ["PID", 7],
      ["PTH", 8],
      ["ROL", 11],
      ["VAR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 10],
      ["NTE", 31],
      ["OBX", 29],
      ["ORC", 15],
      ["PID", 7],
      ["PTH", 8],
      ["VAR", 30],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 10],
      ["NTE", 32],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 10],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
      ["ROL", 24],
      ["VAR", 33],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 10],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
      ["ROL", 24],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 10],
      ["NTE", 26],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
      ["ROL", 24],
      ["VAR", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 10],
      ["NTE", 27],
      ["OBX", 17],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 10],
      ["OBX", 17],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
      ["ROL", 18],
      ["VAR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 10],
      ["NTE", 35],
      ["OBX", 29],
      ["ORC", 15],
      ["PID", 7],
      ["PTH", 8],
      ["VAR", 34],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 10],
      ["OBX", 29],
      ["ORC", 15],
      ["PID", 7],
      ["PTH", 8],
      ["VAR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 10],
      ["NTE", 31],
      ["OBX", 29],
      ["ORC", 15],
      ["PID", 7],
      ["PTH", 8],
      ["VAR", 30],
    ]),
  ],
  [
    32,
    new Map([
      ["GOL", 10],
      ["NTE", 32],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
    ]),
  ],
  [
    33,
    new Map([
      ["GOL", 10],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
      ["ROL", 24],
      ["VAR", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["GOL", 10],
      ["OBX", 29],
      ["ORC", 15],
      ["PID", 7],
      ["PTH", 8],
      ["VAR", 34],
    ]),
  ],
  [
    35,
    new Map([
      ["GOL", 10],
      ["NTE", 35],
      ["OBX", 29],
      ["ORC", 15],
      ["PID", 7],
      ["PTH", 8],
      ["VAR", 34],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "10:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "10:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "10:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "10:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "10:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "10:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "11:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "11:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
  },
  "11:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "11:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "12:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "12:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
  },
  "12:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "12:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "13:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "13:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
  },
  "13:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "13:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "14:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
  },
  "15:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
  },
  "15:OBR": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [],
  },
  "15:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
  },
  "15:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
  },
  "16:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "16:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "16:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "16:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "16:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "16:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "16:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "17:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "17:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "17:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "17:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "18:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "18:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "18:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "18:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "18:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "18:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "19:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "19:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "19:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "19:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "19:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "19:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "20:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "20:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "20:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "20:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "20:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "21:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
  },
  "21:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "21:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "22:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
  },
  "22:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
  },
  "22:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "22:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "22:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "22:VAR": {
    groupsOpened: [],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
  },
  "23:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "23:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "23:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "23:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "23:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "24:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "24:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "24:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "25:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "25:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "25:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "25:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "25:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "25:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "25:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "26:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "26:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "26:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "26:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "26:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "26:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "26:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "27:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "27:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "27:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "27:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "28:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "28:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "28:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "28:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "28:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "28:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "29:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "30:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "32:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "32:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "32:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "32:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "33:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "33:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "33:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "33:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "33:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "33:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "33:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "34:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "34:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "35:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "35:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "35:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "35:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "35:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "4:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [],
  },
  "7:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
  },
  "7:PV1": {
    groupsOpened: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "8:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "8:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
  },
  "8:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "8:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "9:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
