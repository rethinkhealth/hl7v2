// Generated profile automaton for PPP_PCB (v2.8.2)

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
      ["NTE", 10],
      ["PRB", 7],
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
      ["GOL", 13],
      ["NTE", 17],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    8,
    new Map([
      ["PRB", 7],
      ["PTH", 5],
      ["ROL", 8],
      ["VAR", 18],
    ]),
  ],
  [
    9,
    new Map([
      ["PRB", 7],
      ["PTH", 5],
      ["ROL", 8],
      ["VAR", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 10],
      ["PRB", 7],
      ["PTH", 5],
      ["ROL", 8],
      ["VAR", 9],
    ]),
  ],
  [11, new Map([["PTH", 5]])],
  [
    12,
    new Map([
      ["OBR", 19],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 13],
      ["NTE", 23],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
      ["ROL", 21],
      ["VAR", 22],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 13],
      ["NTE", 24],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 7],
      ["PRT", 25],
      ["PTH", 5],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 13],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
      ["ROL", 15],
      ["VAR", 26],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 13],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 13],
      ["NTE", 17],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
      ["ROL", 15],
      ["VAR", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["PRB", 7],
      ["PTH", 5],
      ["ROL", 8],
      ["VAR", 18],
    ]),
  ],
  [19, new Map([["anyHL7Segment", 27]])],
  [
    20,
    new Map([
      ["GOL", 13],
      ["NTE", 28],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 7],
      ["PRT", 29],
      ["PTH", 5],
    ]),
  ],
  [
    21,
    new Map([
      ["GOL", 13],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
      ["ROL", 21],
      ["VAR", 30],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 13],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
      ["ROL", 21],
      ["VAR", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["GOL", 13],
      ["NTE", 23],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
      ["ROL", 21],
      ["VAR", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["GOL", 13],
      ["NTE", 24],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
    ]),
  ],
  [
    25,
    new Map([
      ["GOL", 13],
      ["NTE", 24],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 7],
      ["PRT", 25],
      ["PTH", 5],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 13],
      ["OBX", 14],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
      ["ROL", 15],
      ["VAR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 33],
      ["OBX", 31],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
      ["VAR", 32],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 13],
      ["NTE", 28],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 13],
      ["NTE", 28],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 7],
      ["PRT", 29],
      ["PTH", 5],
    ]),
  ],
  [
    30,
    new Map([
      ["GOL", 13],
      ["OBX", 20],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
      ["ROL", 21],
      ["VAR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["NTE", 35],
      ["OBX", 31],
      ["ORC", 12],
      ["PRB", 7],
      ["PRT", 36],
      ["PTH", 5],
      ["VAR", 34],
    ]),
  ],
  [
    32,
    new Map([
      ["OBX", 31],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
      ["VAR", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["NTE", 33],
      ["OBX", 31],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
      ["VAR", 32],
    ]),
  ],
  [
    34,
    new Map([
      ["OBX", 31],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
      ["VAR", 34],
    ]),
  ],
  [
    35,
    new Map([
      ["NTE", 35],
      ["OBX", 31],
      ["ORC", 12],
      ["PRB", 7],
      ["PTH", 5],
      ["VAR", 34],
    ]),
  ],
  [
    36,
    new Map([
      ["NTE", 35],
      ["OBX", 31],
      ["ORC", 12],
      ["PRB", 7],
      ["PRT", 36],
      ["PTH", 5],
      ["VAR", 34],
    ]),
  ],
]);
export const effects = {
  "10:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
  },
  "10:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [],
  },
  "10:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "11:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: ["PPP_PCB/PATIENT_VISIT"],
  },
  "12:OBR": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [],
  },
  "12:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "12:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "13:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "13:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "13:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "13:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "13:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "14:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "14:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
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
  "15:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
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
  "15:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
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
  "16:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
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
  "16:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "17:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "17:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "17:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "17:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "17:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "17:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "18:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
  },
  "18:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [],
  },
  "18:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "20:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "20:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "20:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "21:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "21:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
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
  "21:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "22:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "22:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
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
  "22:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "23:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "23:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "23:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "23:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "23:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
    groupsClosed: [],
  },
  "24:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "24:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
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
    ],
  },
  "25:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "25:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "25:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "25:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "26:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "26:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "26:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "26:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "26:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "26:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "27:NTE": {
    groupsOpened: [],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "27:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "27:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "27:VAR": {
    groupsOpened: [],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "28:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "28:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "28:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "29:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "29:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
    ],
  },
  "29:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
  },
  "29:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "2:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: ["PPP_PCB/PATIENT_VISIT"],
  },
  "2:PV1": {
    groupsOpened: ["PPP_PCB/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "30:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [],
  },
  "30:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
  },
  "30:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "30:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
    ],
  },
  "30:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
    ],
  },
  "30:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL/GOAL_ROLE"],
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
  "33:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "33:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "34:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "34:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "35:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "35:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "35:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "35:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "36:OBX": {
    groupsOpened: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "36:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "36:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "36:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER/ORDER_DETAIL/ORDER_OBSERVATION",
    ],
  },
  "5:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
  },
  "5:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [],
  },
  "5:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "6:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: ["PPP_PCB/PATIENT_VISIT"],
  },
  "7:GOL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/GOAL"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "7:OBX": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
  },
  "7:ORC": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/ORDER"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "7:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: [],
  },
  "7:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [
      "PPP_PCB/PATHWAY/PROBLEM/GOAL",
      "PPP_PCB/PATHWAY/PROBLEM/ORDER",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_OBSERVATION",
      "PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE",
    ],
  },
  "7:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM/PROBLEM_ROLE"],
    groupsClosed: [],
  },
  "8:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
  },
  "8:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [],
  },
  "8:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
  "9:PRB": {
    groupsOpened: ["PPP_PCB/PATHWAY/PROBLEM"],
    groupsClosed: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
  },
  "9:PTH": {
    groupsOpened: ["PPP_PCB/PATHWAY"],
    groupsClosed: [],
  },
  "9:ROL": {
    groupsOpened: ["PPP_PCB/PATHWAY/PATHWAY_ROLE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
