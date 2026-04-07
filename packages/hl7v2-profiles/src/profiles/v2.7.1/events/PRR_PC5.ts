// Generated profile automaton for PRR_PC5 (v2.7.1)

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
  "5:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [],
  },
  "8:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
  "8:PV1": {
    groupsOpened: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "9:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "9:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "9:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "9:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "9:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "9:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "10:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [],
  },
  "11:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "11:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "11:OBR": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "12:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "12:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "12:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "12:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "12:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "12:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "13:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "13:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "13:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "13:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "14:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: [],
  },
  "14:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "14:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "14:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "14:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "14:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "15:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "15:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "15:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "16:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "16:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "16:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "16:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "16:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "16:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "16:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "17:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "17:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "17:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "17:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "17:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "17:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "17:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "18:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
  "20:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "20:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "20:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "20:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "21:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "21:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "21:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "21:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "21:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "22:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "22:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "22:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "22:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "22:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "22:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "23:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "23:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "23:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "23:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "23:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "23:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "24:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "24:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "24:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "24:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "25:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: [],
  },
  "25:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "25:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "25:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "25:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "25:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "26:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "26:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "26:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "26:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "26:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "26:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "26:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "27:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "27:VAR": {
    groupsOpened: [],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "27:NTE": {
    groupsOpened: [],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "28:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "28:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "28:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "28:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "28:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "29:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "29:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "29:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "29:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "29:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "29:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "30:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "30:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "33:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "34:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
