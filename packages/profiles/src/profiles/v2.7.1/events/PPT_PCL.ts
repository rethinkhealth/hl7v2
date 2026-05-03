// Generated profile automaton for PPT_PCL (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  9, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34, 35, 36, 37,
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
      ["PTH", 9],
      ["PV1", 10],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 11],
      ["NTE", 14],
      ["PID", 8],
      ["PTH", 9],
      ["ROL", 12],
      ["VAR", 13],
    ]),
  ],
  [
    10,
    new Map([
      ["PTH", 9],
      ["PV2", 15],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 11],
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 17],
      ["PTH", 9],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 11],
      ["PID", 8],
      ["PTH", 9],
      ["ROL", 12],
      ["VAR", 22],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 11],
      ["PID", 8],
      ["PTH", 9],
      ["ROL", 12],
      ["VAR", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 11],
      ["NTE", 14],
      ["PID", 8],
      ["PTH", 9],
      ["ROL", 12],
      ["VAR", 13],
    ]),
  ],
  [15, new Map([["PTH", 9]])],
  [
    16,
    new Map([
      ["GOL", 11],
      ["OBR", 23],
      ["ORC", 16],
      ["PID", 8],
      ["PTH", 9],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 11],
      ["NTE", 27],
      ["OBX", 24],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 17],
      ["PTH", 9],
      ["ROL", 25],
      ["VAR", 26],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 11],
      ["NTE", 28],
      ["OBX", 18],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 17],
      ["PTH", 9],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 11],
      ["OBX", 18],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 17],
      ["PTH", 9],
      ["ROL", 19],
      ["VAR", 29],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 11],
      ["OBX", 18],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 17],
      ["PTH", 9],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 11],
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 17],
      ["PTH", 9],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 11],
      ["PID", 8],
      ["PTH", 9],
      ["ROL", 12],
      ["VAR", 22],
    ]),
  ],
  [23, new Map([["Hxx", 30]])],
  [
    24,
    new Map([
      ["GOL", 11],
      ["NTE", 31],
      ["OBX", 24],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 17],
      ["PTH", 9],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 11],
      ["OBX", 24],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 17],
      ["PTH", 9],
      ["ROL", 25],
      ["VAR", 32],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 11],
      ["OBX", 24],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 17],
      ["PTH", 9],
      ["ROL", 25],
      ["VAR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 11],
      ["NTE", 27],
      ["OBX", 24],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 17],
      ["PTH", 9],
      ["ROL", 25],
      ["VAR", 26],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 11],
      ["NTE", 28],
      ["OBX", 18],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 17],
      ["PTH", 9],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 11],
      ["OBX", 18],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 17],
      ["PTH", 9],
      ["ROL", 19],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 11],
      ["NTE", 35],
      ["OBX", 33],
      ["ORC", 16],
      ["PID", 8],
      ["PTH", 9],
      ["VAR", 34],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 11],
      ["NTE", 31],
      ["OBX", 24],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 17],
      ["PTH", 9],
    ]),
  ],
  [
    32,
    new Map([
      ["GOL", 11],
      ["OBX", 24],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 17],
      ["PTH", 9],
      ["ROL", 25],
      ["VAR", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["GOL", 11],
      ["NTE", 37],
      ["OBX", 33],
      ["ORC", 16],
      ["PID", 8],
      ["PTH", 9],
      ["VAR", 36],
    ]),
  ],
  [
    34,
    new Map([
      ["GOL", 11],
      ["OBX", 33],
      ["ORC", 16],
      ["PID", 8],
      ["PTH", 9],
      ["VAR", 34],
    ]),
  ],
  [
    35,
    new Map([
      ["GOL", 11],
      ["NTE", 35],
      ["OBX", 33],
      ["ORC", 16],
      ["PID", 8],
      ["PTH", 9],
      ["VAR", 34],
    ]),
  ],
  [
    36,
    new Map([
      ["GOL", 11],
      ["OBX", 33],
      ["ORC", 16],
      ["PID", 8],
      ["PTH", 9],
      ["VAR", 36],
    ]),
  ],
  [
    37,
    new Map([
      ["GOL", 11],
      ["NTE", 37],
      ["OBX", 33],
      ["ORC", 16],
      ["PID", 8],
      ["PTH", 9],
      ["VAR", 36],
    ]),
  ],
]);
export const effects = {
  "10:PTH": {
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "11:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "11:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "11:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "11:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "11:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "11:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
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
  "14:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "14:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "14:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "14:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "15:PTH": {
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "16:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "16:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "16:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "16:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "17:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "17:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "17:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "17:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "17:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "17:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "18:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "18:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "18:PRB": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "18:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
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
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "21:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "21:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "21:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "21:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "21:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "22:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "22:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "22:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "22:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "24:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "24:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
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
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
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
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "27:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "27:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "27:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "27:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "27:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "28:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "28:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "28:PRB": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "28:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "29:GOL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "29:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "29:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "29:PRB": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "29:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "29:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "30:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "30:NTE": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "30:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "30:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "30:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "30:VAR": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "31:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "31:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
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
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "32:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "32:OBX": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "32:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "32:PRB": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
  },
  "32:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "32:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
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
  "37:GOL": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "37:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "37:ORC": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
  },
  "37:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "37:PTH": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "8:PTH": {
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "8:PV1": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
  },
  "9:GOL": {
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
  },
  "9:PID": {
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
    groupsOpened: ["PPT_PCL/PATIENT"],
  },
  "9:PTH": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
  },
  "9:ROL": {
    groupsClosed: [],
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
