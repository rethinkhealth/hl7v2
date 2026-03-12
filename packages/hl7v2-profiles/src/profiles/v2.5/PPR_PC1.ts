// Generated profile automaton for PPR_PC1 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  4, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29,
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
  "anyHL7Segment",
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
      ["PRB", 4],
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
      ["GOL", 7],
      ["NTE", 12],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
      ["PTH", 9],
      ["ROL", 10],
      ["VAR", 11],
    ]),
  ],
  [
    5,
    new Map([
      ["PRB", 4],
      ["PV2", 13],
    ]),
  ],
  [
    6,
    new Map([
      ["OBR", 14],
      ["ORC", 6],
      ["PRB", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 7],
      ["NTE", 18],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 4],
      ["ROL", 16],
      ["VAR", 17],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 7],
      ["NTE", 19],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 7],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
      ["PTH", 9],
      ["VAR", 20],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 7],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
      ["PTH", 9],
      ["ROL", 10],
      ["VAR", 21],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 7],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
      ["PTH", 9],
      ["ROL", 10],
      ["VAR", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 7],
      ["NTE", 12],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
      ["PTH", 9],
      ["ROL", 10],
      ["VAR", 11],
    ]),
  ],
  [13, new Map([["PRB", 4]])],
  [14, new Map([["anyHL7Segment", 22]])],
  [
    15,
    new Map([
      ["GOL", 7],
      ["NTE", 23],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 4],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 7],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 4],
      ["ROL", 16],
      ["VAR", 24],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 7],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 4],
      ["ROL", 16],
      ["VAR", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 7],
      ["NTE", 18],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 4],
      ["ROL", 16],
      ["VAR", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 7],
      ["NTE", 19],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 7],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
      ["PTH", 9],
      ["VAR", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 7],
      ["OBX", 8],
      ["ORC", 6],
      ["PRB", 4],
      ["PTH", 9],
      ["ROL", 10],
      ["VAR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 27],
      ["OBX", 25],
      ["ORC", 6],
      ["PRB", 4],
      ["VAR", 26],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 7],
      ["NTE", 23],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 4],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 7],
      ["OBX", 15],
      ["ORC", 6],
      ["PRB", 4],
      ["ROL", 16],
      ["VAR", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 29],
      ["OBX", 25],
      ["ORC", 6],
      ["PRB", 4],
      ["VAR", 28],
    ]),
  ],
  [
    26,
    new Map([
      ["OBX", 25],
      ["ORC", 6],
      ["PRB", 4],
      ["VAR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 27],
      ["OBX", 25],
      ["ORC", 6],
      ["PRB", 4],
      ["VAR", 26],
    ]),
  ],
  [
    28,
    new Map([
      ["OBX", 25],
      ["ORC", 6],
      ["PRB", 4],
      ["VAR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["NTE", 29],
      ["OBX", 25],
      ["ORC", 6],
      ["PRB", 4],
      ["VAR", 28],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "10:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "10:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "10:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "10:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "10:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "11:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "11:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "11:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "11:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "11:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "11:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "12:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "12:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "12:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "12:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "12:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "12:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "13:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: ["PPR_PC1/PATIENT_VISIT"],
  },
  "15:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "15:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "16:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "16:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "16:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "16:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "17:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "17:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "17:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "17:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "18:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "18:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "18:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "18:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "19:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "19:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "19:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "20:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "20:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "20:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "20:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "21:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "21:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "21:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "22:NTE": {
    groupsOpened: [],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "22:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "22:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "22:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "22:VAR": {
    groupsOpened: [],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "23:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "23:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "24:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "24:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "24:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "24:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "25:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "26:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "26:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "27:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "28:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "28:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "29:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "29:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "2:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: ["PPR_PC1/PATIENT_VISIT"],
  },
  "2:PV1": {
    groupsOpened: ["PPR_PC1/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "4:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "4:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "4:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "4:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "4:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "5:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: ["PPR_PC1/PATIENT_VISIT"],
  },
  "6:OBR": {
    groupsOpened: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [],
  },
  "6:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "7:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "7:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "7:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "7:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "7:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "8:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "8:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "8:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "9:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "9:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "9:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "9:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "9:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
