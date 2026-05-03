// Generated profile automaton for PRR_PC5 (v2.7)

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
      ["PRB", 9],
      ["PV1", 10],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 12],
      ["NTE", 17],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["PTH", 14],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    10,
    new Map([
      ["PRB", 9],
      ["PV2", 18],
    ]),
  ],
  [
    11,
    new Map([
      ["OBR", 19],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 12],
      ["NTE", 23],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["ROL", 21],
      ["VAR", 22],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 12],
      ["NTE", 24],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 12],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["PTH", 14],
      ["VAR", 25],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 12],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["PTH", 14],
      ["ROL", 15],
      ["VAR", 26],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 12],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["PTH", 14],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 12],
      ["NTE", 17],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["PTH", 14],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [18, new Map([["PRB", 9]])],
  [19, new Map([["Hxx", 27]])],
  [
    20,
    new Map([
      ["GOL", 12],
      ["NTE", 28],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 12],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["ROL", 21],
      ["VAR", 29],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 12],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["ROL", 21],
      ["VAR", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 12],
      ["NTE", 23],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["ROL", 21],
      ["VAR", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 12],
      ["NTE", 24],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 12],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["PTH", 14],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 12],
      ["OBX", 13],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["PTH", 14],
      ["ROL", 15],
      ["VAR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 32],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["VAR", 31],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 12],
      ["NTE", 28],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 12],
      ["OBX", 20],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["ROL", 21],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["NTE", 34],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["VAR", 33],
    ]),
  ],
  [
    31,
    new Map([
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["VAR", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["NTE", 32],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["VAR", 31],
    ]),
  ],
  [
    33,
    new Map([
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["VAR", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["NTE", 34],
      ["OBX", 30],
      ["ORC", 11],
      ["PID", 8],
      ["PRB", 9],
      ["VAR", 33],
    ]),
  ],
]);
export const effects = {
  "10:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "11:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "11:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "12:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "12:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "12:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "12:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "12:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "13:GOL": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "13:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "13:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "14:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "14:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "14:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "14:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "14:PTH": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
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
  "17:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "17:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "17:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "17:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "17:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "17:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "18:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "20:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "20:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "20:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
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
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "23:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "23:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "23:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "23:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "24:GOL": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "24:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "24:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "25:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "25:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "25:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "25:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "25:PTH": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "26:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "26:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "26:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "26:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "26:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "26:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "27:NTE": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "27:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "27:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "27:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "27:VAR": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "28:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "28:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "28:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "29:GOL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "29:OBX": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "29:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "29:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "29:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
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
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "34:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "34:PRB": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "8:PRB": {
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "8:PV1": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
  "9:GOL": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
  },
  "9:OBX": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
  },
  "9:PID": {
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PRR_PC5/PATIENT"],
  },
  "9:PRB": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
  },
  "9:PTH": {
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "9:ROL": {
    groupsClosed: [],
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
