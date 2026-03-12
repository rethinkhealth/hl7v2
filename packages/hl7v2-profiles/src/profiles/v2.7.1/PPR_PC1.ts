// Generated profile automaton for PPR_PC1 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  5, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30,
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
  "UAC",
  "VAR",
  "anyHL7Segment",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["PID", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["PRB", 5],
      ["PV1", 6],
    ]),
  ],
  [3, new Map([["PID", 2]])],
  [
    4,
    new Map([
      ["PID", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["GOL", 8],
      ["NTE", 13],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 12],
    ]),
  ],
  [
    6,
    new Map([
      ["PRB", 5],
      ["PV2", 14],
    ]),
  ],
  [
    7,
    new Map([
      ["OBR", 15],
      ["ORC", 7],
      ["PRB", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 8],
      ["NTE", 19],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 5],
      ["ROL", 17],
      ["VAR", 18],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 8],
      ["NTE", 20],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 8],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PTH", 10],
      ["VAR", 21],
    ]),
  ],
  [
    11,
    new Map([
      ["GOL", 8],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 22],
    ]),
  ],
  [
    12,
    new Map([
      ["GOL", 8],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 8],
      ["NTE", 13],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 12],
    ]),
  ],
  [14, new Map([["PRB", 5]])],
  [15, new Map([["anyHL7Segment", 23]])],
  [
    16,
    new Map([
      ["GOL", 8],
      ["NTE", 24],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 5],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 8],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 5],
      ["ROL", 17],
      ["VAR", 25],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 8],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 5],
      ["ROL", 17],
      ["VAR", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 8],
      ["NTE", 19],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 5],
      ["ROL", 17],
      ["VAR", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 8],
      ["NTE", 20],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 8],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PTH", 10],
      ["VAR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 8],
      ["OBX", 9],
      ["ORC", 7],
      ["PRB", 5],
      ["PTH", 10],
      ["ROL", 11],
      ["VAR", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["NTE", 28],
      ["OBX", 26],
      ["ORC", 7],
      ["PRB", 5],
      ["VAR", 27],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 8],
      ["NTE", 24],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 5],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 8],
      ["OBX", 16],
      ["ORC", 7],
      ["PRB", 5],
      ["ROL", 17],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 30],
      ["OBX", 26],
      ["ORC", 7],
      ["PRB", 5],
      ["VAR", 29],
    ]),
  ],
  [
    27,
    new Map([
      ["OBX", 26],
      ["ORC", 7],
      ["PRB", 5],
      ["VAR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 28],
      ["OBX", 26],
      ["ORC", 7],
      ["PRB", 5],
      ["VAR", 27],
    ]),
  ],
  [
    29,
    new Map([
      ["OBX", 26],
      ["ORC", 7],
      ["PRB", 5],
      ["VAR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["NTE", 30],
      ["OBX", 26],
      ["ORC", 7],
      ["PRB", 5],
      ["VAR", 29],
    ]),
  ],
]);
export const effects = {
  "10:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "10:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "10:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "10:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "10:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
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
  "13:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "13:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "13:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "13:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "13:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "13:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "14:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: ["PPR_PC1/PATIENT_VISIT"],
  },
  "16:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "16:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
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
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "19:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "19:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "19:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "20:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "20:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "21:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY"],
  },
  "21:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "21:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "21:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "22:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "22:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "22:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "23:NTE": {
    groupsOpened: [],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "23:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "23:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "23:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "23:VAR": {
    groupsOpened: [],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "24:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "24:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "25:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "25:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "25:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "25:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
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
  "30:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "30:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: ["PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "30:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "5:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "5:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/PATHWAY", "PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "5:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PATHWAY",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
      "PPR_PC1/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "5:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
  "5:PTH": {
    groupsOpened: ["PPR_PC1/PROBLEM/PATHWAY"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
  },
  "5:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "6:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: ["PPR_PC1/PATIENT_VISIT"],
  },
  "7:OBR": {
    groupsOpened: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [],
  },
  "7:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL",
      "PPR_PC1/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "8:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "8:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "8:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "8:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPR_PC1/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "8:ROL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "9:GOL": {
    groupsOpened: ["PPR_PC1/PROBLEM/GOAL"],
    groupsClosed: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "9:OBX": {
    groupsOpened: ["PPR_PC1/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["PPR_PC1/PROBLEM/ORDER"],
    groupsClosed: [
      "PPR_PC1/PROBLEM/GOAL",
      "PPR_PC1/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "9:PRB": {
    groupsOpened: ["PPR_PC1/PROBLEM"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
