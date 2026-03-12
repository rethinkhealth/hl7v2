// Generated profile automaton for PRR_PC5 (v2.5.1)

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
  "anyHL7Segment",
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
  [18, new Map([["anyHL7Segment", 26]])],
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
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/OBRanyHL7Segment_SUPPGRP",
    ],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [],
  },
  "10:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/OBRanyHL7Segment_SUPPGRP",
    ],
  },
  "10:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/OBRanyHL7Segment_SUPPGRP",
    ],
  },
  "11:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "11:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "11:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "11:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "11:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "12:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "12:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "12:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "12:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "13:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "13:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "13:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "13:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "13:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "13:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: [],
  },
  "14:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "14:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "14:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
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
  "15:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
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
  "15:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "15:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "15:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
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
  "16:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
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
  "16:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
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
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
  "19:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "19:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "19:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "20:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "20:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "20:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "20:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "20:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "21:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
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
  "21:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "21:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "22:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
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
  "22:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "22:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "23:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "23:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "23:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "23:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "24:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "24:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
  },
  "24:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "24:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
    ],
  },
  "24:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "24:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: [],
  },
  "25:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "25:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "25:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "25:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "25:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "25:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "25:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "26:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/OBRanyHL7Segment_SUPPGRP",
    ],
  },
  "26:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/OBRanyHL7Segment_SUPPGRP",
    ],
  },
  "26:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/OBRanyHL7Segment_SUPPGRP",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/OBRanyHL7Segment_SUPPGRP",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:VAR": {
    groupsOpened: [],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/OBRanyHL7Segment_SUPPGRP",
    ],
  },
  "27:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "27:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "27:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "28:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "28:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "28:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
    ],
  },
  "28:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "28:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "29:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
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
  "30:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
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
  "31:OBX": {
    groupsOpened: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
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
  "31:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
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
  "32:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
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
  "32:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
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
  "33:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/ORDER/ORDER_DETAIL",
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
  "4:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [],
  },
  "7:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
  "7:PV1": {
    groupsOpened: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "8:GOL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/GOAL"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "8:OBX": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "8:ORC": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/ORDER"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "8:PID": {
    groupsOpened: ["PRR_PC5/PATIENT"],
    groupsClosed: [
      "PRR_PC5/PATIENT/PROBLEM/GOAL",
      "PRR_PC5/PATIENT/PROBLEM/ORDER",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_OBSERVATION",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY",
      "PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "8:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: [],
  },
  "8:PTH": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_PATHWAY"],
    groupsClosed: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
  },
  "8:ROL": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "9:PRB": {
    groupsOpened: ["PRR_PC5/PATIENT/PROBLEM"],
    groupsClosed: ["PRR_PC5/PATIENT/PATIENT_VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
