// Generated profile automaton for PTR_PCF (v2.7)

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
      ["NTE", 14],
      ["PID", 8],
      ["PRB", 11],
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
      ["GOL", 17],
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    12,
    new Map([
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["ROL", 12],
      ["VAR", 22],
    ]),
  ],
  [
    13,
    new Map([
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["ROL", 12],
      ["VAR", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["ROL", 12],
      ["VAR", 13],
    ]),
  ],
  [15, new Map([["PTH", 9]])],
  [
    16,
    new Map([
      ["OBR", 23],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 17],
      ["NTE", 27],
      ["OBX", 24],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["ROL", 25],
      ["VAR", 26],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 17],
      ["NTE", 28],
      ["OBX", 18],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 17],
      ["OBX", 18],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["ROL", 19],
      ["VAR", 29],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 17],
      ["OBX", 18],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 17],
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["ROL", 19],
      ["VAR", 20],
    ]),
  ],
  [
    22,
    new Map([
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["ROL", 12],
      ["VAR", 22],
    ]),
  ],
  [23, new Map([["Hxx", 30]])],
  [
    24,
    new Map([
      ["GOL", 17],
      ["NTE", 31],
      ["OBX", 24],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 17],
      ["OBX", 24],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["ROL", 25],
      ["VAR", 32],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 17],
      ["OBX", 24],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["ROL", 25],
      ["VAR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 17],
      ["NTE", 27],
      ["OBX", 24],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["ROL", 25],
      ["VAR", 26],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 17],
      ["NTE", 28],
      ["OBX", 18],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 17],
      ["OBX", 18],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["ROL", 19],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["NTE", 35],
      ["OBX", 33],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["VAR", 34],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 17],
      ["NTE", 31],
      ["OBX", 24],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
    ]),
  ],
  [
    32,
    new Map([
      ["GOL", 17],
      ["OBX", 24],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["ROL", 25],
      ["VAR", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["NTE", 37],
      ["OBX", 33],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["VAR", 36],
    ]),
  ],
  [
    34,
    new Map([
      ["OBX", 33],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["VAR", 34],
    ]),
  ],
  [
    35,
    new Map([
      ["NTE", 35],
      ["OBX", 33],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["VAR", 34],
    ]),
  ],
  [
    36,
    new Map([
      ["OBX", 33],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["VAR", 36],
    ]),
  ],
  [
    37,
    new Map([
      ["NTE", 37],
      ["OBX", 33],
      ["ORC", 16],
      ["PID", 8],
      ["PRB", 11],
      ["PTH", 9],
      ["VAR", 36],
    ]),
  ],
]);
export const effects = {
  "10:PTH": {
    groupsClosed: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "11:GOL": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "11:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "11:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "11:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "11:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "11:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
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
  "13:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "13:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "13:PTH": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "13:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "14:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "14:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "14:PTH": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "14:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "15:PTH": {
    groupsClosed: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "16:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "16:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "16:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "16:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "17:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "17:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "17:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "17:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "17:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "17:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "18:GOL": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "18:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
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
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
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
  "20:GOL": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "20:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "20:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "20:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "20:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "20:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "21:GOL": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "21:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "21:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "21:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "21:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "21:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "22:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "22:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "22:PTH": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "22:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "24:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "24:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "24:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "24:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
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
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "26:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "26:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "26:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "26:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "26:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "27:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "27:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "27:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "27:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "27:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "27:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "28:GOL": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "28:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "28:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "28:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "29:GOL": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "29:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "29:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "29:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "29:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "29:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "30:NTE": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "30:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "30:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "30:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "30:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "30:VAR": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "31:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "31:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "31:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "31:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "32:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "32:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "32:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "32:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "32:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "32:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
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
  "36:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "36:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "36:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "36:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "36:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "37:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "37:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "37:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "37:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "37:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "8:PTH": {
    groupsClosed: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "8:PV1": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
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
