// Generated profile automaton for PTR_PCF (v2.5)

export const start = 0;
export const finals = new Set<number>([
  8, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36,
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
  [22, new Map([["Hxx", 29]])],
  [
    23,
    new Map([
      ["GOL", 16],
      ["NTE", 30],
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
      ["VAR", 31],
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
      ["NTE", 34],
      ["OBX", 32],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["VAR", 33],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 16],
      ["NTE", 30],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 16],
      ["OBX", 23],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["ROL", 24],
      ["VAR", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["NTE", 36],
      ["OBX", 32],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["VAR", 35],
    ]),
  ],
  [
    33,
    new Map([
      ["OBX", 32],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["VAR", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["NTE", 34],
      ["OBX", 32],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["VAR", 33],
    ]),
  ],
  [
    35,
    new Map([
      ["OBX", 32],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["VAR", 35],
    ]),
  ],
  [
    36,
    new Map([
      ["NTE", 36],
      ["OBX", 32],
      ["ORC", 15],
      ["PID", 7],
      ["PRB", 10],
      ["PTH", 8],
      ["VAR", 35],
    ]),
  ],
]);
export const effects = {
  "4:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [],
  },
  "7:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
  },
  "7:PV1": {
    groupsOpened: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "8:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "8:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
  },
  "8:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "8:ROL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "9:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
  },
  "10:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "10:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "10:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "10:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "10:GOL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "10:OBX": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "10:ROL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "11:ROL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "11:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "11:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
  },
  "11:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "12:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "12:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
  },
  "12:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "12:ROL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "13:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "13:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
  },
  "13:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "13:ROL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "14:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: ["PTR_PCF/PATIENT/PATIENT_VISIT"],
  },
  "15:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [],
  },
  "15:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "15:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "15:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "15:OBR": {
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "16:GOL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "16:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "16:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "16:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "16:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "16:OBX": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "16:ROL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "17:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "17:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "17:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "17:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "17:GOL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "18:ROL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "18:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "18:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "18:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "18:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "18:GOL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "18:OBX": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "19:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "19:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "19:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "19:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "19:GOL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "19:OBX": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "19:ROL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "20:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "20:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:GOL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "20:OBX": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "20:ROL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "21:ROL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "21:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [],
  },
  "21:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
    ],
  },
  "21:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PATHWAY_ROLE"],
  },
  "23:OBX": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "23:GOL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "23:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "23:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "23:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "23:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "24:ROL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "24:GOL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "24:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "24:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "24:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "24:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "24:OBX": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "25:GOL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "25:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "25:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "25:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "25:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "25:OBX": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "25:ROL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "26:GOL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "26:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "26:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "26:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "26:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "26:OBX": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "26:ROL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "27:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "27:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "27:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "27:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "27:GOL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "28:ROL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "28:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "28:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "28:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "28:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "28:GOL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "28:OBX": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "29:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:OBX": {
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "29:VAR": {
    groupsOpened: [],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "29:NTE": {
    groupsOpened: [],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "30:OBX": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "30:GOL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "30:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "30:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "30:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "30:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "31:ROL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "31:GOL": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "31:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "31:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "31:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "31:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "31:OBX": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "32:OBX": {
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:OBX": {
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "34:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:OBX": {
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "35:OBX": {
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "35:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "35:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "35:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "35:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "36:OBX": {
    groupsOpened: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "36:ORC": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "36:PRB": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "36:PTH": {
    groupsOpened: ["PTR_PCF/PATIENT/PATHWAY"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "36:PID": {
    groupsOpened: ["PTR_PCF/PATIENT"],
    groupsClosed: [
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PTR_PCF/PATIENT/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
