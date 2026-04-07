// Generated profile automaton for PPT_PCL (v2.6)

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
  "5:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [],
  },
  "8:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
  },
  "8:PV1": {
    groupsOpened: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "9:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
  },
  "9:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "9:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "10:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
  },
  "11:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "11:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "11:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "11:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "11:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "11:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "11:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "12:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "12:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "12:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
  },
  "12:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "13:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "13:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
  },
  "13:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "13:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "14:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "14:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
  },
  "14:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "14:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "15:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: ["PPT_PCL/PATIENT/PATIENT_VISIT"],
  },
  "16:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [],
  },
  "16:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "16:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "16:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "16:OBR": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "17:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "17:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "17:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "17:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "17:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "17:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "17:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "18:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "18:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "18:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "18:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "18:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "19:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "19:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
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
  "19:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
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
  "19:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "20:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
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
  "20:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
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
  "20:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "20:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "21:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "21:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "21:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "21:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "21:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "21:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "22:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "22:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "22:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE",
    ],
  },
  "22:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "24:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "24:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "24:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "24:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "24:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "24:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "25:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "25:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "25:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
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
  "25:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "25:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "26:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "26:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
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
  "26:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "26:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "26:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "27:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "27:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "27:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "27:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "27:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "27:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "27:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "28:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "28:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "28:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "28:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "28:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "29:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "29:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "29:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "29:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "29:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "29:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "29:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "30:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "30:VAR": {
    groupsOpened: [],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "30:NTE": {
    groupsOpened: [],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "31:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "31:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "31:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "31:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "31:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "31:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "32:ROL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "32:PRB": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "32:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "32:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "32:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "32:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "32:OBX": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPT_PCL/PATIENT/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "33:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
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
  "34:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
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
  "35:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
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
  "35:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
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
  "35:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "36:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "36:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "36:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "36:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "36:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "37:OBX": {
    groupsOpened: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "37:ORC": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "37:GOL": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY/GOAL"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "37:PTH": {
    groupsOpened: ["PPT_PCL/PATIENT/PATHWAY"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "37:PID": {
    groupsOpened: ["PPT_PCL/PATIENT"],
    groupsClosed: [
      "PPT_PCL/PATIENT/PATHWAY/GOAL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPT_PCL/PATIENT/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
