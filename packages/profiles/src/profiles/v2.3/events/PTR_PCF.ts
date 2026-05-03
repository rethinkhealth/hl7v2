// Generated profile automaton for PTR_PCF (v2.3)

export const start = 0;
export const finals = new Set<number>([
  6, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31, 32, 33,
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
  "QRD",
  "ROL",
  "VAR",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 4],
      ["QRD", 3],
    ]),
  ],
  [3, new Map([["PID", 5]])],
  [4, new Map([["QRD", 3]])],
  [
    5,
    new Map([
      ["PTH", 6],
      ["PV1", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 11],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["ROL", 9],
      ["VAR", 10],
    ]),
  ],
  [
    7,
    new Map([
      ["PTH", 6],
      ["PV2", 12],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 14],
      ["NTE", 18],
      ["OBX", 15],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["ROL", 16],
      ["VAR", 17],
    ]),
  ],
  [
    9,
    new Map([
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["ROL", 9],
      ["VAR", 19],
    ]),
  ],
  [
    10,
    new Map([
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["ROL", 9],
      ["VAR", 10],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 11],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["ROL", 9],
      ["VAR", 10],
    ]),
  ],
  [12, new Map([["PTH", 6]])],
  [
    13,
    new Map([
      ["OBR", 20],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 14],
      ["NTE", 24],
      ["OBX", 21],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["ROL", 22],
      ["VAR", 23],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 14],
      ["NTE", 25],
      ["OBX", 15],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 14],
      ["OBX", 15],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["ROL", 16],
      ["VAR", 26],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 14],
      ["OBX", 15],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["ROL", 16],
      ["VAR", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 14],
      ["NTE", 18],
      ["OBX", 15],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["ROL", 16],
      ["VAR", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["ROL", 9],
      ["VAR", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 29],
      ["OBX", 27],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["VAR", 28],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 14],
      ["NTE", 30],
      ["OBX", 21],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 14],
      ["OBX", 21],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["ROL", 22],
      ["VAR", 31],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 14],
      ["OBX", 21],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["ROL", 22],
      ["VAR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 14],
      ["NTE", 24],
      ["OBX", 21],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["ROL", 22],
      ["VAR", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 14],
      ["NTE", 25],
      ["OBX", 15],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 14],
      ["OBX", 15],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["ROL", 16],
      ["VAR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 33],
      ["OBX", 27],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["VAR", 32],
    ]),
  ],
  [
    28,
    new Map([
      ["OBX", 27],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["VAR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["NTE", 29],
      ["OBX", 27],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["VAR", 28],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 14],
      ["NTE", 30],
      ["OBX", 21],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 14],
      ["OBX", 21],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["ROL", 22],
      ["VAR", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["OBX", 27],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["VAR", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["NTE", 33],
      ["OBX", 27],
      ["ORC", 13],
      ["PID", 5],
      ["PRB", 8],
      ["PTH", 6],
      ["VAR", 32],
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
  "12:PTH": {
    groupsClosed: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "13:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "13:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "13:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "14:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "14:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "14:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "14:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "14:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "14:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "15:GOL": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "15:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "15:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "15:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "16:GOL": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "16:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "16:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
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
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "16:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
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
  "19:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "19:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "19:PTH": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "19:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "20:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "20:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "20:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "20:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "21:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "21:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "21:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "21:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "22:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "22:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "22:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "22:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "22:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "22:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
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
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "25:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "25:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "25:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "26:GOL": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "26:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "26:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
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
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "26:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "27:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "27:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "27:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "28:OBX": {
    groupsClosed: [],
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
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "28:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "28:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "29:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "29:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "29:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "30:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "30:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "30:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "30:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "31:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "31:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "31:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "31:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "31:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "31:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
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
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "5:PTH": {
    groupsClosed: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "5:PV1": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
  },
  "6:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "6:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "6:PTH": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "6:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "7:PTH": {
    groupsClosed: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "8:GOL": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "8:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "8:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "8:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "8:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "8:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "9:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "9:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "9:PTH": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "9:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
