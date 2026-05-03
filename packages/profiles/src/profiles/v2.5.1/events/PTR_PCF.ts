// Generated profile automaton for PTR_PCF (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  8, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
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
  "SFT",
  "VAR",
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
      ["NTE", 13],
      ["PID", 7],
      ["PRB", 10],
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
      ["GOL", 16],
      ["NTE", 20],
      ["OBX", 17],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["ROL", 18],
      ["VAR", 19],
    ]),
  ],
  [
    11,
    new Map([
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["ROL", 11],
      ["VAR", 21],
    ]),
  ],
  [
    12,
    new Map([
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["ROL", 11],
      ["VAR", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["ROL", 11],
      ["VAR", 12],
    ]),
  ],
  [14, new Map([["PTH", 8]])],
  [
    15,
    new Map([
      ["OBR", 22],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 16],
      ["NTE", 26],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["ROL", 24],
      ["VAR", 25],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 16],
      ["NTE", 27],
      ["OBX", 17],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 16],
      ["OBX", 17],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["ROL", 18],
      ["VAR", 28],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 16],
      ["OBX", 17],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["ROL", 18],
      ["VAR", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 16],
      ["NTE", 20],
      ["OBX", 17],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["ROL", 18],
      ["VAR", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["ROL", 11],
      ["VAR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 31],
      ["OBX", 29],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["VAR", 30],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 16],
      ["NTE", 32],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 16],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["ROL", 24],
      ["VAR", 33],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 16],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["ROL", 24],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 16],
      ["NTE", 26],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["ROL", 24],
      ["VAR", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 16],
      ["NTE", 27],
      ["OBX", 17],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 16],
      ["OBX", 17],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["ROL", 18],
      ["VAR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["NTE", 35],
      ["OBX", 29],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["VAR", 34],
    ]),
  ],
  [
    30,
    new Map([
      ["OBX", 29],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["VAR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["NTE", 31],
      ["OBX", 29],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["VAR", 30],
    ]),
  ],
  [
    32,
    new Map([
      ["GOL", 16],
      ["NTE", 32],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
    ]),
  ],
  [
    33,
    new Map([
      ["GOL", 16],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["ROL", 24],
      ["VAR", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["OBX", 29],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["VAR", 34],
    ]),
  ],
  [
    35,
    new Map([
      ["NTE", 35],
      ["OBX", 29],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["VAR", 34],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "10:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "10:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "10:PRB": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "10:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "10:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
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
  "14:PTH": {
    groupsClosed: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "15:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "15:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "15:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "15:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "16:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "16:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "16:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "16:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "16:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "16:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "17:GOL": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "17:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
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
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
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
  "21:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "21:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "21:PTH": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "21:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "22:NTE": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
    groupsOpened: [],
  },
  "22:OBX": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "22:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "22:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "22:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "22:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "22:VAR": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/OBR_SUPPGRP",
    ],
    groupsOpened: [],
  },
  "23:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "23:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "23:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "23:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
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
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "27:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
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
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "28:GOL": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "28:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "28:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
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
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "28:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
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
  "30:OBX": {
    groupsClosed: [],
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
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "30:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "30:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
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
  "32:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "32:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "32:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "32:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "33:GOL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
  },
  "33:OBX": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "33:ORC": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
  },
  "33:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "33:PRB": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "33:PTH": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "33:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
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
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "7:PTH": {
    groupsClosed: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "7:PV1": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
  },
  "8:PID": {
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
    groupsOpened: ["PTR_PCF/PATIENT"],
  },
  "8:PRB": {
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
  },
  "8:PTH": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
  "8:ROL": {
    groupsClosed: [],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "9:PTH": {
    groupsClosed: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
