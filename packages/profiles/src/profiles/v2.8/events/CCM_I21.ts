// Generated profile automaton for CCM_I21 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  5, 11, 12, 13, 14, 15, 16, 23, 25, 26, 28, 29, 31, 32, 39, 40, 41, 42, 43, 44,
  45, 46, 47, 51, 52, 53, 54, 55, 56, 57, 58, 61, 62, 63,
]);
export const alphabet = new Set<string>([
  "ACC",
  "AIG",
  "AIL",
  "AIP",
  "AIS",
  "AL1",
  "CTI",
  "DB1",
  "DG1",
  "DRG",
  "GOL",
  "IAM",
  "IN1",
  "IN2",
  "IN3",
  "MSH",
  "NK1",
  "OBR",
  "OBX",
  "ODS",
  "ORC",
  "PD1",
  "PDA",
  "PID",
  "PR1",
  "PRB",
  "PRD",
  "PRT",
  "PTH",
  "PV1",
  "PV2",
  "REL",
  "RF1",
  "RGS",
  "RMI",
  "ROL",
  "RXA",
  "RXC",
  "RXE",
  "RXO",
  "RXR",
  "SCH",
  "SFT",
  "UAC",
  "VAR",
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
      ["IN1", 8],
      ["NK1", 9],
      ["ORC", 6],
      ["PD1", 10],
      ["PV1", 5],
      ["SCH", 7],
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
      ["GOL", 13],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["PV1", 5],
      ["PV2", 16],
      ["REL", 11],
    ]),
  ],
  [
    6,
    new Map([
      ["CTI", 17],
      ["OBR", 19],
      ["ORC", 6],
      ["PV1", 5],
      ["ROL", 18],
    ]),
  ],
  [
    7,
    new Map([
      ["ORC", 6],
      ["PV1", 5],
      ["RGS", 20],
      ["SCH", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["IN1", 8],
      ["IN2", 22],
      ["IN3", 21],
      ["ORC", 6],
      ["PV1", 5],
      ["SCH", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["IN1", 8],
      ["NK1", 9],
      ["ORC", 6],
      ["PV1", 5],
      ["SCH", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["IN1", 8],
      ["NK1", 9],
      ["ORC", 6],
      ["PV1", 5],
      ["SCH", 7],
    ]),
  ],
  [11, new Map([["REL", 11]])],
  [
    12,
    new Map([
      ["OBX", 23],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 24],
      ["VAR", 25],
    ]),
  ],
  [
    13,
    new Map([
      ["GOL", 13],
      ["OBX", 26],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 27],
      ["VAR", 28],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 13],
      ["OBX", 29],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 30],
      ["VAR", 31],
    ]),
  ],
  [
    15,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
      ["RXE", 34],
      ["RXO", 35],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 13],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["PV1", 5],
      ["REL", 11],
    ]),
  ],
  [
    17,
    new Map([
      ["CTI", 17],
      ["ORC", 6],
      ["PV1", 5],
    ]),
  ],
  [18, new Map([["PRD", 36]])],
  [19, new Map([["ODS", 37]])],
  [
    20,
    new Map([
      ["AIS", 38],
      ["ORC", 6],
      ["PV1", 5],
      ["RGS", 20],
      ["SCH", 7],
    ]),
  ],
  [
    21,
    new Map([
      ["IN1", 8],
      ["ORC", 6],
      ["PV1", 5],
      ["SCH", 7],
    ]),
  ],
  [
    22,
    new Map([
      ["IN1", 8],
      ["IN3", 21],
      ["ORC", 6],
      ["PV1", 5],
      ["SCH", 7],
    ]),
  ],
  [
    23,
    new Map([
      ["OBX", 23],
      ["PRT", 39],
      ["PTH", 12],
      ["REL", 11],
    ]),
  ],
  [24, new Map([["PRD", 40]])],
  [
    25,
    new Map([
      ["OBX", 23],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 24],
      ["VAR", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["GOL", 13],
      ["OBX", 26],
      ["PRT", 41],
      ["PTH", 12],
      ["REL", 11],
    ]),
  ],
  [27, new Map([["PRD", 42]])],
  [
    28,
    new Map([
      ["GOL", 13],
      ["OBX", 26],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 27],
      ["VAR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 13],
      ["OBX", 29],
      ["PRB", 14],
      ["PRT", 43],
      ["PTH", 12],
      ["REL", 11],
    ]),
  ],
  [30, new Map([["PRD", 44]])],
  [
    31,
    new Map([
      ["GOL", 13],
      ["OBX", 29],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 30],
      ["VAR", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
    ]),
  ],
  [
    33,
    new Map([
      ["RXA", 33],
      ["RXR", 45],
    ]),
  ],
  [34, new Map([["RXR", 46]])],
  [35, new Map([["RXR", 47]])],
  [
    36,
    new Map([
      ["CTI", 17],
      ["ORC", 6],
      ["PV1", 5],
      ["ROL", 18],
      ["VAR", 48],
    ]),
  ],
  [37, new Map([["PR1", 49]])],
  [38, new Map([["AIG", 50]])],
  [
    39,
    new Map([
      ["OBX", 23],
      ["PRT", 39],
      ["PTH", 12],
      ["REL", 11],
    ]),
  ],
  [
    40,
    new Map([
      ["OBX", 23],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 24],
      ["VAR", 51],
    ]),
  ],
  [
    41,
    new Map([
      ["GOL", 13],
      ["OBX", 26],
      ["PRT", 41],
      ["PTH", 12],
      ["REL", 11],
    ]),
  ],
  [
    42,
    new Map([
      ["GOL", 13],
      ["OBX", 26],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 27],
      ["VAR", 52],
    ]),
  ],
  [
    43,
    new Map([
      ["GOL", 13],
      ["OBX", 29],
      ["PRB", 14],
      ["PRT", 43],
      ["PTH", 12],
      ["REL", 11],
    ]),
  ],
  [
    44,
    new Map([
      ["GOL", 13],
      ["OBX", 29],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 30],
      ["VAR", 53],
    ]),
  ],
  [
    45,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 54],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
    ]),
  ],
  [
    46,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 55],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
      ["RXC", 56],
      ["RXR", 46],
    ]),
  ],
  [
    47,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 57],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
      ["RXC", 58],
      ["RXE", 34],
      ["RXR", 47],
    ]),
  ],
  [
    48,
    new Map([
      ["CTI", 17],
      ["ORC", 6],
      ["PV1", 5],
      ["ROL", 18],
      ["VAR", 48],
    ]),
  ],
  [49, new Map([["RF1", 59]])],
  [50, new Map([["AIL", 60]])],
  [
    51,
    new Map([
      ["OBX", 23],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 24],
      ["VAR", 51],
    ]),
  ],
  [
    52,
    new Map([
      ["GOL", 13],
      ["OBX", 26],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 27],
      ["VAR", 52],
    ]),
  ],
  [
    53,
    new Map([
      ["GOL", 13],
      ["OBX", 29],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 30],
      ["VAR", 53],
    ]),
  ],
  [
    54,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 54],
      ["ORC", 15],
      ["PRB", 14],
      ["PRT", 61],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
    ]),
  ],
  [
    55,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 55],
      ["ORC", 15],
      ["PRB", 14],
      ["PRT", 62],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
    ]),
  ],
  [
    56,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 55],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
      ["RXC", 56],
    ]),
  ],
  [
    57,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 57],
      ["ORC", 15],
      ["PRB", 14],
      ["PRT", 63],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
      ["RXE", 34],
    ]),
  ],
  [
    58,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 57],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
      ["RXC", 58],
      ["RXE", 34],
    ]),
  ],
  [59, new Map([["AL1", 64]])],
  [60, new Map([["AIP", 65]])],
  [
    61,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 54],
      ["ORC", 15],
      ["PRB", 14],
      ["PRT", 61],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
    ]),
  ],
  [
    62,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 55],
      ["ORC", 15],
      ["PRB", 14],
      ["PRT", 62],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
    ]),
  ],
  [
    63,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 57],
      ["ORC", 15],
      ["PRB", 14],
      ["PRT", 63],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
      ["RXE", 34],
    ]),
  ],
  [64, new Map([["IAM", 66]])],
  [
    65,
    new Map([
      ["AIS", 38],
      ["OBX", 67],
      ["ORC", 6],
      ["PV1", 5],
      ["RGS", 20],
      ["SCH", 7],
    ]),
  ],
  [66, new Map([["ACC", 68]])],
  [
    67,
    new Map([
      ["AIS", 38],
      ["OBX", 67],
      ["ORC", 6],
      ["PRT", 69],
      ["PV1", 5],
      ["RGS", 20],
      ["SCH", 7],
    ]),
  ],
  [68, new Map([["RMI", 70]])],
  [
    69,
    new Map([
      ["AIS", 38],
      ["OBX", 67],
      ["ORC", 6],
      ["PRT", 69],
      ["PV1", 5],
      ["RGS", 20],
      ["SCH", 7],
    ]),
  ],
  [70, new Map([["DB1", 71]])],
  [71, new Map([["DG1", 72]])],
  [72, new Map([["DRG", 73]])],
  [73, new Map([["PDA", 74]])],
  [
    74,
    new Map([
      ["CTI", 17],
      ["OBR", 19],
      ["OBX", 75],
      ["ORC", 6],
      ["PV1", 5],
      ["ROL", 18],
    ]),
  ],
  [
    75,
    new Map([
      ["CTI", 17],
      ["OBR", 19],
      ["OBX", 75],
      ["ORC", 6],
      ["PRT", 76],
      ["PV1", 5],
      ["ROL", 18],
    ]),
  ],
  [
    76,
    new Map([
      ["CTI", 17],
      ["OBR", 19],
      ["OBX", 75],
      ["ORC", 6],
      ["PRT", 76],
      ["PV1", 5],
      ["ROL", 18],
    ]),
  ],
]);
export const effects = {
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "10:PV1": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "10:SCH": {
    groupsClosed: ["CCM_I21/INSURANCE"],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
  },
  "12:OBX": {
    groupsClosed: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "12:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "12:REL": {
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/PATHWAY_OBSERVATION",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "12:ROL": {
    groupsClosed: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "13:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "13:OBX": {
    groupsClosed: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCM_I21/GOAL/GOAL_OBSERVATION"],
  },
  "13:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "13:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
    groupsOpened: [],
  },
  "13:ROL": {
    groupsClosed: ["CCM_I21/GOAL/GOAL_OBSERVATION", "CCM_I21/PATHWAY"],
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "14:GOL": {
    groupsClosed: [
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "14:OBX": {
    groupsClosed: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "14:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "14:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "14:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "14:ROL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "15:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "15:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "15:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "15:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "15:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "15:RXA": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "15:RXE": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "15:RXO": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL"],
  },
  "16:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PATIENT_VISITS",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "16:ORC": {
    groupsClosed: ["CCM_I21/PATIENT_VISITS"],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "16:PRB": {
    groupsClosed: ["CCM_I21/MEDICATION_HISTORY", "CCM_I21/PATIENT_VISITS"],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "16:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PATIENT_VISITS",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "16:PV1": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "16:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PATHWAY",
      "CCM_I21/PATIENT_VISITS",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "17:PV1": {
    groupsClosed: ["CCM_I21/CLINICAL_HISTORY"],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "20:AIS": {
    groupsClosed: ["CCM_I21/CLINICAL_HISTORY", "CCM_I21/PATIENT_VISITS"],
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "20:ORC": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "20:PV1": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "20:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "20:SCH": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/INSURANCE"],
  },
  "21:ORC": {
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "21:PV1": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "21:SCH": {
    groupsClosed: ["CCM_I21/INSURANCE"],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
  },
  "22:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/INSURANCE"],
  },
  "22:ORC": {
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "22:PV1": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "22:SCH": {
    groupsClosed: ["CCM_I21/INSURANCE"],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "23:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "23:REL": {
    groupsClosed: ["CCM_I21/PATHWAY", "CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [],
  },
  "25:OBX": {
    groupsClosed: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "25:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "25:REL": {
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/PATHWAY_OBSERVATION",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "25:ROL": {
    groupsClosed: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "26:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/GOAL/GOAL_OBSERVATION"],
  },
  "26:PTH": {
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "26:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/PATHWAY",
    ],
    groupsOpened: [],
  },
  "28:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "28:OBX": {
    groupsClosed: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCM_I21/GOAL/GOAL_OBSERVATION"],
  },
  "28:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "28:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
    groupsOpened: [],
  },
  "28:ROL": {
    groupsClosed: ["CCM_I21/GOAL/GOAL_OBSERVATION", "CCM_I21/PATHWAY"],
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "29:GOL": {
    groupsClosed: ["CCM_I21/PROBLEM", "CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "29:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "29:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "29:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "2:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/INSURANCE"],
  },
  "2:ORC": {
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "2:PV1": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "2:SCH": {
    groupsClosed: ["CCM_I21/INSURANCE"],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
  },
  "31:GOL": {
    groupsClosed: [
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "31:OBX": {
    groupsClosed: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "31:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "31:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "31:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "31:ROL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "32:GOL": {
    groupsClosed: ["CCM_I21/MEDICATION_HISTORY", "CCM_I21/PROBLEM"],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "32:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "32:PRB": {
    groupsClosed: ["CCM_I21/MEDICATION_HISTORY"],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "32:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "32:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "36:CTI": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "36:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "36:PV1": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "36:ROL": {
    groupsClosed: ["CCM_I21/PATIENT_VISITS"],
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "39:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "39:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "39:REL": {
    groupsClosed: ["CCM_I21/PATHWAY", "CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [],
  },
  "40:OBX": {
    groupsClosed: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "40:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "40:REL": {
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/PATHWAY_OBSERVATION",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "40:ROL": {
    groupsClosed: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "41:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "41:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/GOAL/GOAL_OBSERVATION"],
  },
  "41:PTH": {
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "41:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/PATHWAY",
    ],
    groupsOpened: [],
  },
  "42:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "42:OBX": {
    groupsClosed: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCM_I21/GOAL/GOAL_OBSERVATION"],
  },
  "42:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "42:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
    groupsOpened: [],
  },
  "42:ROL": {
    groupsClosed: ["CCM_I21/GOAL/GOAL_OBSERVATION", "CCM_I21/PATHWAY"],
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "43:GOL": {
    groupsClosed: ["CCM_I21/PROBLEM", "CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "43:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "43:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "43:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "43:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "44:GOL": {
    groupsClosed: [
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "44:OBX": {
    groupsClosed: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "44:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "44:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "44:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "44:ROL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "45:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "45:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "45:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "45:ORC": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "45:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "45:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "45:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "45:RXA": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "46:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "46:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "46:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "46:ORC": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "46:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "46:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "46:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "46:RXA": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "47:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "47:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "47:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "47:ORC": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "47:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "47:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "47:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "47:RXA": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "47:RXE": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "48:CTI": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "48:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "48:PV1": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "48:ROL": {
    groupsClosed: ["CCM_I21/PATIENT_VISITS"],
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "51:OBX": {
    groupsClosed: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "51:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "51:REL": {
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/PATHWAY_OBSERVATION",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "51:ROL": {
    groupsClosed: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "52:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "52:OBX": {
    groupsClosed: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCM_I21/GOAL/GOAL_OBSERVATION"],
  },
  "52:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "52:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
    groupsOpened: [],
  },
  "52:ROL": {
    groupsClosed: ["CCM_I21/GOAL/GOAL_OBSERVATION", "CCM_I21/PATHWAY"],
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "53:GOL": {
    groupsClosed: [
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "53:OBX": {
    groupsClosed: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "53:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "53:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "53:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "53:ROL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "54:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "54:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "54:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "54:ORC": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "54:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "54:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "54:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "54:RXA": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "55:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "55:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "55:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "55:ORC": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "55:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "55:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "55:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "55:RXA": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "56:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "56:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "56:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "56:ORC": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "56:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "56:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "56:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "56:RXA": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "57:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "57:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "57:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "57:ORC": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "57:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "57:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "57:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "57:RXA": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "57:RXE": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "58:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "58:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "58:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "58:ORC": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "58:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "58:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "58:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "58:RXA": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "58:RXE": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "5:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PATIENT_VISITS",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "5:ORC": {
    groupsClosed: ["CCM_I21/PATIENT_VISITS"],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "5:PRB": {
    groupsClosed: ["CCM_I21/MEDICATION_HISTORY", "CCM_I21/PATIENT_VISITS"],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "5:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PATIENT_VISITS",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "5:PV1": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "5:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PATHWAY",
      "CCM_I21/PATIENT_VISITS",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "61:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "61:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "61:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "61:ORC": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "61:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "61:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "61:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "61:RXA": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "62:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "62:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "62:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "62:ORC": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "62:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "62:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "62:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "62:RXA": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "63:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "63:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "63:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "63:ORC": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "63:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "63:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "63:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "63:RXA": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "63:RXE": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "65:AIS": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "65:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "65:ORC": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "65:PV1": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "65:RGS": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "65:SCH": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
  },
  "67:AIS": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "67:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "67:ORC": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "67:PV1": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "67:RGS": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "67:SCH": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
  },
  "69:AIS": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "69:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "69:ORC": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "69:PV1": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "69:RGS": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "69:SCH": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
  },
  "6:CTI": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "6:OBR": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCM_I21/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "6:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "6:PV1": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "6:ROL": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "74:CTI": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "74:OBR": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCM_I21/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "74:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "74:ORC": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "74:PV1": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "74:ROL": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "75:CTI": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "75:OBR": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCM_I21/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "75:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "75:ORC": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "75:PV1": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "75:ROL": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "76:CTI": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "76:OBR": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCM_I21/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "76:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "76:ORC": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "76:PV1": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "76:ROL": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "7:ORC": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
    ],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "7:PV1": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "7:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "7:SCH": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
  },
  "8:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/INSURANCE"],
  },
  "8:ORC": {
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "8:PV1": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "8:SCH": {
    groupsClosed: ["CCM_I21/INSURANCE"],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
  },
  "9:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/INSURANCE"],
  },
  "9:ORC": {
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "9:PV1": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "9:SCH": {
    groupsClosed: ["CCM_I21/INSURANCE"],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
