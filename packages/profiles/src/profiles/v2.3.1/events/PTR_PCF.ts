// Generated profile automaton for PTR_PCF (v2.3.1)

export const start = 0;
export const finals = new Set<number>([
  7, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29,
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
  "RXO",
  "VAR",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 5],
      ["QAK", 4],
      ["QRD", 3],
    ]),
  ],
  [3, new Map([["PID", 6]])],
  [4, new Map([["QRD", 3]])],
  [
    5,
    new Map([
      ["QAK", 4],
      ["QRD", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["PTH", 7],
      ["PV1", 8],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 12],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["ROL", 10],
      ["VAR", 11],
    ]),
  ],
  [
    8,
    new Map([
      ["PTH", 7],
      ["PV2", 13],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 15],
      ["NTE", 19],
      ["OBX", 16],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["ROL", 17],
      ["VAR", 18],
    ]),
  ],
  [
    10,
    new Map([
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["ROL", 10],
      ["VAR", 20],
    ]),
  ],
  [
    11,
    new Map([
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["ROL", 10],
      ["VAR", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["ROL", 10],
      ["VAR", 11],
    ]),
  ],
  [13, new Map([["PTH", 7]])],
  [
    14,
    new Map([
      ["OBR", 21],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 15],
      ["NTE", 25],
      ["OBX", 22],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["ROL", 23],
      ["VAR", 24],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 15],
      ["NTE", 26],
      ["OBX", 16],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 15],
      ["OBX", 16],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["ROL", 17],
      ["VAR", 27],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 15],
      ["OBX", 16],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["ROL", 17],
      ["VAR", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 15],
      ["NTE", 19],
      ["OBX", 16],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["ROL", 17],
      ["VAR", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["ROL", 10],
      ["VAR", 20],
    ]),
  ],
  [21, new Map([["RXO", 28]])],
  [
    22,
    new Map([
      ["GOL", 15],
      ["NTE", 29],
      ["OBX", 22],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 15],
      ["OBX", 22],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["ROL", 23],
      ["VAR", 30],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 15],
      ["OBX", 22],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["ROL", 23],
      ["VAR", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 15],
      ["NTE", 25],
      ["OBX", 22],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["ROL", 23],
      ["VAR", 24],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 15],
      ["NTE", 26],
      ["OBX", 16],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 15],
      ["OBX", 16],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["ROL", 17],
      ["VAR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 33],
      ["OBX", 31],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["VAR", 32],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 15],
      ["NTE", 29],
      ["OBX", 22],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 15],
      ["OBX", 22],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["ROL", 23],
      ["VAR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["NTE", 35],
      ["OBX", 31],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["VAR", 34],
    ]),
  ],
  [
    32,
    new Map([
      ["OBX", 31],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["VAR", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["NTE", 33],
      ["OBX", 31],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["VAR", 32],
    ]),
  ],
  [
    34,
    new Map([
      ["OBX", 31],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["VAR", 34],
    ]),
  ],
  [
    35,
    new Map([
      ["NTE", 35],
      ["OBX", 31],
      ["ORC", 14],
      ["PID", 6],
      ["PRB", 9],
      ["PTH", 7],
      ["VAR", 34],
    ]),
  ],
]);
export const effects = {
  "10:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "10:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "10:PTH": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "10:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "11:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "11:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "11:PTH": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "11:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "12:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "12:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "12:PTH": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "12:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "13:PTH": {
    groupsClosed: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "14:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "14:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "14:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "15:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "15:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "15:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "15:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "15:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "15:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "16:GOL": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "16:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "16:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "16:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "17:GOL": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "17:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "17:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "17:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "17:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "17:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "18:GOL": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "18:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "18:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "18:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "18:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "18:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "19:GOL": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "19:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "19:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "19:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "19:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "19:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "20:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "20:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "20:PTH": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "20:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "22:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "22:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "22:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "22:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "23:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "23:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "23:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "23:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "23:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "23:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "24:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "24:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "24:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "24:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "24:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "24:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "25:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "25:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "25:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "25:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "25:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "25:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "26:GOL": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "26:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "26:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "26:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "27:GOL": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "27:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "27:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "27:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "27:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "27:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "28:NTE": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "28:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "28:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "28:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "28:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "28:VAR": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "29:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "29:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "29:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "29:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "30:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "30:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "30:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "30:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "30:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "30:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "31:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "31:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "31:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "32:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "32:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "32:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "33:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "33:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "33:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "34:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "34:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "34:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "35:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "35:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "35:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "35:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "6:PTH": {
    groupsClosed: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "6:PV1": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
  },
  "7:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "7:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "7:PTH": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "7:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "8:PTH": {
    groupsClosed: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "9:GOL": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "9:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "9:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "9:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "9:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "9:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
