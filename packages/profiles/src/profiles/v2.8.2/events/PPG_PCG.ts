// Generated profile automaton for PPG_PCG (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  5, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31, 32, 33, 34, 35, 36,
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
  "PRT",
  "PTH",
  "PV1",
  "PV2",
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
      ["PID", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["PTH", 5],
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
      ["GOL", 7],
      ["NTE", 10],
      ["PTH", 5],
      ["ROL", 8],
      ["VAR", 9],
    ]),
  ],
  [
    6,
    new Map([
      ["PTH", 5],
      ["PV2", 11],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 7],
      ["NTE", 17],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 13],
      ["PTH", 5],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    8,
    new Map([
      ["GOL", 7],
      ["PTH", 5],
      ["ROL", 8],
      ["VAR", 18],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 7],
      ["PTH", 5],
      ["ROL", 8],
      ["VAR", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["GOL", 7],
      ["NTE", 10],
      ["PTH", 5],
      ["ROL", 8],
      ["VAR", 9],
    ]),
  ],
  [11, new Map([["PTH", 5]])],
  [
    12,
    new Map([
      ["GOL", 7],
      ["OBR", 19],
      ["ORC", 12],
      ["PTH", 5],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 7],
      ["NTE", 23],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 13],
      ["PTH", 5],
      ["ROL", 21],
      ["VAR", 22],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 7],
      ["NTE", 24],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 13],
      ["PRT", 25],
      ["PTH", 5],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 7],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 13],
      ["PTH", 5],
      ["ROL", 15],
      ["VAR", 26],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 7],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 13],
      ["PTH", 5],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 7],
      ["NTE", 17],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 13],
      ["PTH", 5],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 7],
      ["PTH", 5],
      ["ROL", 8],
      ["VAR", 18],
    ]),
  ],
  [19, new Map([["Hxx", 27]])],
  [
    20,
    new Map([
      ["GOL", 7],
      ["NTE", 28],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 13],
      ["PRT", 29],
      ["PTH", 5],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 7],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 13],
      ["PTH", 5],
      ["ROL", 21],
      ["VAR", 30],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 7],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 13],
      ["PTH", 5],
      ["ROL", 21],
      ["VAR", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 7],
      ["NTE", 23],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 13],
      ["PTH", 5],
      ["ROL", 21],
      ["VAR", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 7],
      ["NTE", 24],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 13],
      ["PTH", 5],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 7],
      ["NTE", 24],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 13],
      ["PRT", 25],
      ["PTH", 5],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 7],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 13],
      ["PTH", 5],
      ["ROL", 15],
      ["VAR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["GOL", 7],
      ["NTE", 33],
      ["OBX", 31],
      ["ORC", 12],
      ["PTH", 5],
      ["VAR", 32],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 7],
      ["NTE", 28],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 13],
      ["PTH", 5],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 7],
      ["NTE", 28],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 13],
      ["PRT", 29],
      ["PTH", 5],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 7],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 13],
      ["PTH", 5],
      ["ROL", 21],
      ["VAR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 7],
      ["NTE", 35],
      ["OBX", 31],
      ["ORC", 12],
      ["PRT", 36],
      ["PTH", 5],
      ["VAR", 34],
    ]),
  ],
  [
    32,
    new Map([
      ["GOL", 7],
      ["OBX", 31],
      ["ORC", 12],
      ["PTH", 5],
      ["VAR", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["GOL", 7],
      ["NTE", 33],
      ["OBX", 31],
      ["ORC", 12],
      ["PTH", 5],
      ["VAR", 32],
    ]),
  ],
  [
    34,
    new Map([
      ["GOL", 7],
      ["OBX", 31],
      ["ORC", 12],
      ["PTH", 5],
      ["VAR", 34],
    ]),
  ],
  [
    35,
    new Map([
      ["GOL", 7],
      ["NTE", 35],
      ["OBX", 31],
      ["ORC", 12],
      ["PTH", 5],
      ["VAR", 34],
    ]),
  ],
  [
    36,
    new Map([
      ["GOL", 7],
      ["NTE", 35],
      ["OBX", 31],
      ["ORC", 12],
      ["PRT", 36],
      ["PTH", 5],
      ["VAR", 34],
    ]),
  ],
]);
export const effects = {
  "2:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: ["PPG_PCG/PATIENT_VISIT"],
  },
  "2:PV1": {
    groupsOpened: ["PPG_PCG/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "5:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [],
  },
  "5:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
  },
  "5:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "6:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: ["PPG_PCG/PATIENT_VISIT"],
  },
  "7:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "7:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "7:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "7:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "7:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "7:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "8:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "8:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [],
  },
  "8:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
  },
  "9:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [],
  },
  "9:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
  },
  "9:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "10:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [],
  },
  "10:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
  },
  "10:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "11:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: ["PPG_PCG/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [],
  },
  "12:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "12:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "12:OBR": {
    groupsOpened: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "13:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "13:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "13:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "13:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "13:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "13:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "14:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "14:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "14:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "14:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "15:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "15:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "15:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "15:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "15:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "15:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "16:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "16:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "16:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "16:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "16:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "16:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "17:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "17:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "17:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "17:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "17:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "17:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "18:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "18:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [],
  },
  "18:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/PATHWAY_ROLE"],
  },
  "20:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "20:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "20:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "20:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "21:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "21:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "21:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "21:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "22:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "22:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "22:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "23:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "23:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "23:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "23:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "24:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "24:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "24:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "24:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "25:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "25:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "25:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "25:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "25:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
  },
  "26:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "26:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [],
  },
  "26:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "26:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
    ],
  },
  "26:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/GOAL_ROLE",
    ],
  },
  "26:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/GOAL_ROLE"],
  },
  "27:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "27:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "27:VAR": {
    groupsOpened: [],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "27:NTE": {
    groupsOpened: [],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "28:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "28:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "28:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "28:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "28:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "29:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "29:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "29:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "29:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "29:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "30:ROL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "30:PRB": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM"],
    groupsClosed: [],
  },
  "30:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "30:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "30:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/PROBLEM",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION",
      "PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "30:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/PROBLEM/PROBLEM_ROLE"],
  },
  "31:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "31:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "31:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "32:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "32:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "33:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "34:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "34:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "34:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "35:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "35:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "35:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "35:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "36:OBX": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
    groupsClosed: [],
  },
  "36:ORC": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL/ORDER"],
    groupsClosed: ["PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION"],
  },
  "36:GOL": {
    groupsOpened: ["PPG_PCG/PATHWAY/GOAL"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "36:PTH": {
    groupsOpened: ["PPG_PCG/PATHWAY"],
    groupsClosed: [
      "PPG_PCG/PATHWAY/GOAL/ORDER",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL",
      "PPG_PCG/PATHWAY/GOAL/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
