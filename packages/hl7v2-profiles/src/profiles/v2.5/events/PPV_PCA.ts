// Generated profile automaton for PPV_PCA (v2.5)

export const start = 0;
export const finals = new Set<number>([
  8, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33,
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
  "Hxx",
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
      ["GOL", 8],
      ["PV1", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 8],
      ["NTE", 16],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["PTH", 13],
      ["ROL", 14],
      ["VAR", 15],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 8],
      ["PV2", 17],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 8],
      ["OBR", 18],
      ["ORC", 10],
      ["PID", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 8],
      ["NTE", 22],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["ROL", 20],
      ["VAR", 21],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 8],
      ["NTE", 23],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 8],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["PTH", 13],
      ["VAR", 24],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 8],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["PTH", 13],
      ["ROL", 14],
      ["VAR", 25],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 8],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["PTH", 13],
      ["ROL", 14],
      ["VAR", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 8],
      ["NTE", 16],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["PTH", 13],
      ["ROL", 14],
      ["VAR", 15],
    ]),
  ],
  [17, new Map([["GOL", 8]])],
  [18, new Map([["Hxx", 26]])],
  [
    19,
    new Map([
      ["GOL", 8],
      ["NTE", 27],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 8],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["ROL", 20],
      ["VAR", 28],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 8],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["ROL", 20],
      ["VAR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 8],
      ["NTE", 22],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["ROL", 20],
      ["VAR", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 8],
      ["NTE", 23],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 8],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["PTH", 13],
      ["VAR", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 8],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["PTH", 13],
      ["ROL", 14],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 8],
      ["NTE", 31],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["VAR", 30],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 8],
      ["NTE", 27],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 8],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 11],
      ["ROL", 20],
      ["VAR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 8],
      ["NTE", 33],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["VAR", 32],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 8],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["VAR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 8],
      ["NTE", 31],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["VAR", 30],
    ]),
  ],
  [
    32,
    new Map([
      ["GOL", 8],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["VAR", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["GOL", 8],
      ["NTE", 33],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["VAR", 32],
    ]),
  ],
]);
export const effects = {
  "4:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [],
  },
  "7:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "7:PV1": {
    groupsOpened: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "8:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "8:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "8:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "8:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "8:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "8:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "8:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "9:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "10:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [],
  },
  "10:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/OBRHxx_SUPPGRP",
    ],
  },
  "10:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/OBRHxx_SUPPGRP",
    ],
  },
  "10:OBR": {
    groupsOpened: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/OBRHxx_SUPPGRP",
    ],
    groupsClosed: [],
  },
  "11:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "11:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "11:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "11:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "11:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "11:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "12:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "12:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "12:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "12:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "13:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: [],
  },
  "13:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "13:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "13:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "13:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
  },
  "13:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "14:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "14:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "14:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "14:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "14:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "14:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "14:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "15:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "15:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "15:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "15:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "15:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "15:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "15:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "16:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "16:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "16:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "16:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "16:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "16:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "16:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "17:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "19:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "19:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "19:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "19:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "19:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "20:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "20:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "21:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "21:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "22:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "22:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "23:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "23:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "23:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "23:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "24:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: [],
  },
  "24:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "24:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "24:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "24:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
  },
  "24:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "25:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "25:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [],
  },
  "25:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "25:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
  },
  "25:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "25:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
  },
  "25:PTH": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "26:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "26:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/OBRHxx_SUPPGRP",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/OBRHxx_SUPPGRP",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/OBRHxx_SUPPGRP"],
  },
  "26:VAR": {
    groupsOpened: [],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/OBRHxx_SUPPGRP"],
  },
  "26:NTE": {
    groupsOpened: [],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/OBRHxx_SUPPGRP"],
  },
  "27:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "27:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "27:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "27:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "27:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "28:ROL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "28:PRB": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "28:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "28:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "28:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "28:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "29:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "29:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "30:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "31:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "32:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "32:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:OBX": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "33:GOL": {
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:PID": {
    groupsOpened: ["PPV_PCA/PATIENT"],
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
