// Generated profile automaton for PPP_PCB (v2.5)

export const start = 0;
export const finals = new Set<number>([
  4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31, 32,
]);
export const alphabet = new Set<string>([
  "GOL",
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
      ["PID", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["PTH", 4],
      ["PV1", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["PID", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 9],
      ["PRB", 6],
      ["PTH", 4],
      ["ROL", 7],
      ["VAR", 8],
    ]),
  ],
  [
    5,
    new Map([
      ["PTH", 4],
      ["PV2", 10],
    ]),
  ],
  [
    6,
    new Map([
      ["GOL", 12],
      ["NTE", 16],
      ["OBX", 13],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["ROL", 14],
      ["VAR", 15],
    ]),
  ],
  [
    7,
    new Map([
      ["PRB", 6],
      ["PTH", 4],
      ["ROL", 7],
      ["VAR", 17],
    ]),
  ],
  [
    8,
    new Map([
      ["PRB", 6],
      ["PTH", 4],
      ["ROL", 7],
      ["VAR", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 9],
      ["PRB", 6],
      ["PTH", 4],
      ["ROL", 7],
      ["VAR", 8],
    ]),
  ],
  [10, new Map([["PTH", 4]])],
  [
    11,
    new Map([
      ["OBR", 18],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 12],
      ["NTE", 22],
      ["OBX", 19],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["ROL", 20],
      ["VAR", 21],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 12],
      ["NTE", 23],
      ["OBX", 13],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 12],
      ["OBX", 13],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["ROL", 14],
      ["VAR", 24],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 12],
      ["OBX", 13],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["ROL", 14],
      ["VAR", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 12],
      ["NTE", 16],
      ["OBX", 13],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["ROL", 14],
      ["VAR", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["PRB", 6],
      ["PTH", 4],
      ["ROL", 7],
      ["VAR", 17],
    ]),
  ],
  [18, new Map([["Hxx", 25]])],
  [
    19,
    new Map([
      ["GOL", 12],
      ["NTE", 26],
      ["OBX", 19],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 12],
      ["OBX", 19],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["ROL", 20],
      ["VAR", 27],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 12],
      ["OBX", 19],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["ROL", 20],
      ["VAR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 12],
      ["NTE", 22],
      ["OBX", 19],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["ROL", 20],
      ["VAR", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 12],
      ["NTE", 23],
      ["OBX", 13],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 12],
      ["OBX", 13],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["ROL", 14],
      ["VAR", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 30],
      ["OBX", 28],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["VAR", 29],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 12],
      ["NTE", 26],
      ["OBX", 19],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 12],
      ["OBX", 19],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["ROL", 20],
      ["VAR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 32],
      ["OBX", 28],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["VAR", 31],
    ]),
  ],
  [
    29,
    new Map([
      ["OBX", 28],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["NTE", 30],
      ["OBX", 28],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["VAR", 29],
    ]),
  ],
  [
    31,
    new Map([
      ["OBX", 28],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["VAR", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["NTE", 32],
      ["OBX", 28],
      ["ORC", 11],
      ["PRB", 6],
      ["PTH", 4],
      ["VAR", 31],
    ]),
  ],
]);
export const effects = {
  "2:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: ["PPP_PCB/PATIENT_VISIT"],
  },
  "2:PV1": {
    groupsOpened: ["PPP_PCB/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [],
  },
  "4:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
  },
  "4:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "5:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: ["PPP_PCB/PATIENT_VISIT"],
  },
  "6:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "6:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "6:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "6:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "6:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "6:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "7:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "7:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [],
  },
  "7:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
  },
  "8:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [],
  },
  "8:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
  },
  "8:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "9:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [],
  },
  "9:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
  },
  "9:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "10:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: ["PPP_PCB/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [],
  },
  "11:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "11:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "11:OBR": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "12:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "12:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "12:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "12:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "12:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "12:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "13:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "13:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "13:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "13:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "14:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "14:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "14:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "14:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "15:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "15:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "15:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "15:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "16:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "16:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "16:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "16:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "16:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "16:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "17:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "17:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [],
  },
  "17:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
  },
  "19:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "19:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "19:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "19:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "19:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "20:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "20:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "20:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "20:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "20:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "21:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "21:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "21:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "21:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "21:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "21:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "22:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "22:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "22:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "22:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "22:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "23:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "23:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "23:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "23:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "24:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "24:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "24:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "24:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "25:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "25:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "25:VAR": {
    groupsOpened: [],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "25:NTE": {
    groupsOpened: [],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "26:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "26:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "26:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "26:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "26:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "27:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "27:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "27:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "27:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "27:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "27:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "28:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "30:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "30:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "31:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
