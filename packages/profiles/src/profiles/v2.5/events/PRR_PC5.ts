// Generated profile automaton for PRR_PC5 (v2.5)

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
      ["PRB", 8],
      ["PV1", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 11],
      ["NTE", 16],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["PTH", 13],
      ["ROL", 14],
      ["VAR", 15],
    ]),
  ],
  [
    9,
    new Map([
      ["PRB", 8],
      ["PV2", 17],
    ]),
  ],
  [
    10,
    new Map([
      ["OBR", 18],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 11],
      ["NTE", 22],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["ROL", 20],
      ["VAR", 21],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 11],
      ["NTE", 23],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 11],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["PTH", 13],
      ["VAR", 24],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 11],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["PTH", 13],
      ["ROL", 14],
      ["VAR", 25],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 11],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["PTH", 13],
      ["ROL", 14],
      ["VAR", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 11],
      ["NTE", 16],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["PTH", 13],
      ["ROL", 14],
      ["VAR", 15],
    ]),
  ],
  [17, new Map([["PRB", 8]])],
  [18, new Map([["Hxx", 26]])],
  [
    19,
    new Map([
      ["GOL", 11],
      ["NTE", 27],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 11],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["ROL", 20],
      ["VAR", 28],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 11],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["ROL", 20],
      ["VAR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 11],
      ["NTE", 22],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["ROL", 20],
      ["VAR", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 11],
      ["NTE", 23],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 11],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["PTH", 13],
      ["VAR", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 11],
      ["OBX", 12],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["PTH", 13],
      ["ROL", 14],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 31],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["VAR", 30],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 11],
      ["NTE", 27],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 11],
      ["OBX", 19],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["ROL", 20],
      ["VAR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["NTE", 33],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["VAR", 32],
    ]),
  ],
  [
    30,
    new Map([
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["VAR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["NTE", 31],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["VAR", 30],
    ]),
  ],
  [
    32,
    new Map([
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["VAR", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["NTE", 33],
      ["OBX", 29],
      ["ORC", 10],
      ["PID", 7],
      ["PRB", 8],
      ["VAR", 32],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "10:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "10:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "11:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "11:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "11:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "11:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "11:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "12:GOL": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "12:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "12:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "13:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "13:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "13:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "13:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "13:PTH": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "14:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "14:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "14:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "14:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "14:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "14:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "15:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "15:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "15:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "15:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "15:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "15:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "16:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "16:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "16:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "16:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "16:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "16:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "17:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "19:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "19:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "19:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "20:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "20:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "20:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "20:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "20:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "21:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "21:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "21:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "21:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "21:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "22:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "22:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "22:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "22:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "22:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "23:GOL": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "23:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "23:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "24:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "24:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "24:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "24:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "24:PTH": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "25:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "25:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "25:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "25:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "25:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "25:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "26:NTE": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "26:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "26:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "26:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "26:VAR": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "27:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "27:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "27:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "28:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "28:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "28:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "28:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "28:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "29:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "29:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "30:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "30:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "31:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "31:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "32:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "32:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "33:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "33:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "7:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "7:PV1": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
  "8:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "8:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "8:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "8:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "8:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "8:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "9:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
