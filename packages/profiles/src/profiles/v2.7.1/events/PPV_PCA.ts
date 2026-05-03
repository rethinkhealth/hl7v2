// Generated profile automaton for PPV_PCA (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  9, 11, 12, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34,
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
  "UAC",
  "VAR",
  "Hxx",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 7],
      ["QAK", 6],
      ["QRD", 5],
    ]),
  ],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["PID", 8]])],
  [6, new Map([["QRD", 5]])],
  [
    7,
    new Map([
      ["ERR", 7],
      ["QAK", 6],
      ["QRD", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 9],
      ["PV1", 10],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 9],
      ["NTE", 17],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["PTH", 14],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 9],
      ["PV2", 18],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 9],
      ["OBR", 19],
      ["ORC", 11],
      ["PID", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 9],
      ["NTE", 23],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["ROL", 21],
      ["VAR", 22],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 9],
      ["NTE", 24],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 9],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["PTH", 14],
      ["VAR", 25],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 9],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["PTH", 14],
      ["ROL", 15],
      ["VAR", 26],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 9],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["PTH", 14],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 9],
      ["NTE", 17],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["PTH", 14],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [18, new Map([["GOL", 9]])],
  [19, new Map([["Hxx", 27]])],
  [
    20,
    new Map([
      ["GOL", 9],
      ["NTE", 28],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 9],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["ROL", 21],
      ["VAR", 29],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 9],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["ROL", 21],
      ["VAR", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 9],
      ["NTE", 23],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["ROL", 21],
      ["VAR", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 9],
      ["NTE", 24],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 9],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["PTH", 14],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 9],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["PTH", 14],
      ["ROL", 15],
      ["VAR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 9],
      ["NTE", 32],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["VAR", 31],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 9],
      ["NTE", 28],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 9],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 12],
      ["ROL", 21],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 9],
      ["NTE", 34],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["VAR", 33],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 9],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["VAR", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["GOL", 9],
      ["NTE", 32],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["VAR", 31],
    ]),
  ],
  [
    33,
    new Map([
      ["GOL", 9],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["VAR", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["GOL", 9],
      ["NTE", 34],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["VAR", 33],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "11:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "11:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "12:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "12:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "12:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "12:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "12:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "13:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "13:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "13:PRB": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "14:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "14:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "14:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "14:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "14:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "15:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "15:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "15:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "15:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "15:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "15:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "16:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "16:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "16:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "16:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "16:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "16:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "17:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "17:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "17:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "17:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "17:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "17:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "18:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "20:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "20:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "20:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "21:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "21:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "21:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "21:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "21:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "22:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "22:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "22:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "22:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "22:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "23:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "23:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "23:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "23:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "23:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "24:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "24:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "24:PRB": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "25:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "25:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "25:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "25:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "25:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "26:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "26:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "26:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "26:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "26:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "26:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
  "27:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "27:NTE": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "27:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "27:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "27:VAR": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "28:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "28:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "28:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "29:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "29:OBX": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "29:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "29:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "29:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "30:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "30:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "31:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "31:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "32:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "32:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "33:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "33:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "33:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "34:GOL": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "34:ORC": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "34:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL",
      "PPV_PCA/PATIENT/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "8:GOL": {
    groupsClosed: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "8:PV1": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/PATIENT_VISIT"],
  },
  "9:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL"],
  },
  "9:OBX": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/ORDER"],
  },
  "9:PID": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
      "PPV_PCA/PATIENT/GOAL/ORDER",
      "PPV_PCA/PATIENT/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPV_PCA/PATIENT"],
  },
  "9:PRB": {
    groupsClosed: [
      "PPV_PCA/PATIENT/GOAL/GOAL_OBSERVATION",
      "PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY",
      "PPV_PCA/PATIENT/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/PROBLEM"],
  },
  "9:PTH": {
    groupsClosed: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_PATHWAY"],
  },
  "9:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPV_PCA/PATIENT/GOAL/GOAL_ROLE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
