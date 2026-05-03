// Generated profile automaton for PPT_PCL (v2.5)

export const start = 0;
export const finals = new Set<number>([
  8, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36,
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
  [22, new Map([["Hxx", 29]])],
  [
    23,
    new Map([
      ["GOL", 10],
      ["NTE", 30],
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
      ["VAR", 31],
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
      ["NTE", 34],
      ["OBX", 32],
      ["ORC", 15],
      ["PID", 7],
      ["PTH", 8],
      ["VAR", 33],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 10],
      ["NTE", 30],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 10],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 16],
      ["PTH", 8],
      ["ROL", 24],
      ["VAR", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["GOL", 10],
      ["NTE", 36],
      ["OBX", 32],
      ["ORC", 15],
      ["PID", 7],
      ["PTH", 8],
      ["VAR", 35],
    ]),
  ],
  [
    33,
    new Map([
      ["GOL", 10],
      ["OBX", 32],
      ["ORC", 15],
      ["PID", 7],
      ["PTH", 8],
      ["VAR", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["GOL", 10],
      ["NTE", 34],
      ["OBX", 32],
      ["ORC", 15],
      ["PID", 7],
      ["PTH", 8],
      ["VAR", 33],
    ]),
  ],
  [
    35,
    new Map([
      ["GOL", 10],
      ["OBX", 32],
      ["ORC", 15],
      ["PID", 7],
      ["PTH", 8],
      ["VAR", 35],
    ]),
  ],
  [
    36,
    new Map([
      ["GOL", 10],
      ["NTE", 36],
      ["OBX", 32],
      ["ORC", 15],
      ["PID", 7],
      ["PTH", 8],
      ["VAR", 35],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "10:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "10:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "10:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "10:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "10:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "11:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "11:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "11:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "11:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "12:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "12:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "12:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "12:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "13:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "13:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "13:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "13:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "14:PTH": {
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "15:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "15:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "15:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "15:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "16:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "16:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "16:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "16:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "16:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "16:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "17:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "17:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "17:PRB": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "17:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "18:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "18:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "18:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "18:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "18:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "18:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "19:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "19:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "19:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "19:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "19:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "19:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "20:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "20:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "20:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "20:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "20:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "20:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "21:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "21:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "21:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "21:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "23:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "23:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "23:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "23:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "24:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "24:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "24:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "24:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "24:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "24:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "25:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "25:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "25:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "25:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "25:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "25:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "26:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "26:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "26:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "26:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "26:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "26:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "27:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "27:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "27:PRB": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "27:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "28:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "28:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "28:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "28:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "28:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "28:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "29:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "29:NTE": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "29:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "29:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "29:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "29:VAR": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "30:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "30:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "30:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "30:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "31:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "31:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "31:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "31:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "31:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "31:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "32:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "32:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "32:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "33:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "33:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "33:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "34:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "34:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "34:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "35:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "35:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "35:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "35:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "36:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "36:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "36:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "36:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "36:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "7:PTH": {
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "7:PV1": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
  },
  "8:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "8:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "8:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "8:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "9:PTH": {
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
