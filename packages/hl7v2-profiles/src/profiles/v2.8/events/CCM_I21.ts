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
  "2:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
  },
  "2:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
  },
  "2:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCM_I21/INSURANCE"],
  },
  "2:IN1": {
    groupsOpened: ["CCM_I21/INSURANCE"],
    groupsClosed: [],
  },
  "5:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [],
  },
  "5:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PATHWAY",
      "CCM_I21/PATIENT_VISITS",
      "CCM_I21/PROBLEM",
    ],
  },
  "5:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PATIENT_VISITS",
      "CCM_I21/PROBLEM",
    ],
  },
  "5:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PATIENT_VISITS",
      "CCM_I21/PROBLEM",
    ],
  },
  "5:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: ["CCM_I21/MEDICATION_HISTORY", "CCM_I21/PATIENT_VISITS"],
  },
  "5:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: ["CCM_I21/PATIENT_VISITS"],
  },
  "6:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "6:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "6:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "6:ROL": {
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/PATIENT_VISITS",
    ],
  },
  "6:OBR": {
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCM_I21/PATIENT_VISITS",
    ],
  },
  "7:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: [],
  },
  "7:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/CLINICAL_HISTORY",
    ],
  },
  "7:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
    ],
  },
  "7:RGS": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "8:IN1": {
    groupsOpened: ["CCM_I21/INSURANCE"],
    groupsClosed: [],
  },
  "8:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
  },
  "8:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
  },
  "8:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCM_I21/INSURANCE"],
  },
  "9:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
  },
  "9:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
  },
  "9:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCM_I21/INSURANCE"],
  },
  "9:IN1": {
    groupsOpened: ["CCM_I21/INSURANCE"],
    groupsClosed: [],
  },
  "10:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
  },
  "10:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
  },
  "10:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCM_I21/INSURANCE"],
  },
  "10:IN1": {
    groupsOpened: ["CCM_I21/INSURANCE"],
    groupsClosed: [],
  },
  "12:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [],
  },
  "12:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/PATHWAY_OBSERVATION",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "12:OBX": {
    groupsOpened: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "12:ROL": {
    groupsOpened: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "13:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [],
  },
  "13:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
  },
  "13:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "13:OBX": {
    groupsOpened: ["CCM_I21/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "13:ROL": {
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCM_I21/GOAL/GOAL_OBSERVATION", "CCM_I21/PATHWAY"],
  },
  "14:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [],
  },
  "14:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "14:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "14:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "14:OBX": {
    groupsOpened: ["CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "14:ROL": {
    groupsOpened: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "15:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "15:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "15:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PROBLEM",
    ],
  },
  "15:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PROBLEM",
    ],
  },
  "15:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "15:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "15:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "15:RXE": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "15:RXO": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "16:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [],
  },
  "16:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PATHWAY",
      "CCM_I21/PATIENT_VISITS",
      "CCM_I21/PROBLEM",
    ],
  },
  "16:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PATIENT_VISITS",
      "CCM_I21/PROBLEM",
    ],
  },
  "16:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PATIENT_VISITS",
      "CCM_I21/PROBLEM",
    ],
  },
  "16:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: ["CCM_I21/MEDICATION_HISTORY", "CCM_I21/PATIENT_VISITS"],
  },
  "16:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: ["CCM_I21/PATIENT_VISITS"],
  },
  "17:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "17:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "20:RGS": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "20:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "20:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/CLINICAL_HISTORY",
    ],
  },
  "20:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "20:AIS": {
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CCM_I21/CLINICAL_HISTORY", "CCM_I21/PATIENT_VISITS"],
  },
  "21:IN1": {
    groupsOpened: ["CCM_I21/INSURANCE"],
    groupsClosed: [],
  },
  "21:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
  },
  "21:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
  },
  "21:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCM_I21/INSURANCE"],
  },
  "22:IN1": {
    groupsOpened: ["CCM_I21/INSURANCE"],
    groupsClosed: [],
  },
  "22:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
  },
  "22:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
  },
  "22:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCM_I21/INSURANCE"],
  },
  "23:OBX": {
    groupsOpened: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [],
  },
  "23:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [],
  },
  "23:REL": {
    groupsOpened: [],
    groupsClosed: ["CCM_I21/PATHWAY", "CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "25:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [],
  },
  "25:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/PATHWAY_OBSERVATION",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "25:OBX": {
    groupsOpened: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "25:ROL": {
    groupsOpened: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "26:OBX": {
    groupsOpened: ["CCM_I21/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "26:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [],
  },
  "26:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/PATHWAY",
    ],
  },
  "26:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/GOAL/GOAL_OBSERVATION"],
  },
  "28:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [],
  },
  "28:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
  },
  "28:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "28:OBX": {
    groupsOpened: ["CCM_I21/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "28:ROL": {
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCM_I21/GOAL/GOAL_OBSERVATION", "CCM_I21/PATHWAY"],
  },
  "29:OBX": {
    groupsOpened: ["CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "29:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [],
  },
  "29:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "29:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "29:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: ["CCM_I21/PROBLEM", "CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "31:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [],
  },
  "31:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "31:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "31:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "31:OBX": {
    groupsOpened: ["CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "31:ROL": {
    groupsOpened: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "32:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "32:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "32:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PROBLEM",
    ],
  },
  "32:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: ["CCM_I21/MEDICATION_HISTORY", "CCM_I21/PROBLEM"],
  },
  "32:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "36:ROL": {
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CCM_I21/PATIENT_VISITS"],
  },
  "36:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "36:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "36:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "39:OBX": {
    groupsOpened: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [],
  },
  "39:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [],
  },
  "39:REL": {
    groupsOpened: [],
    groupsClosed: ["CCM_I21/PATHWAY", "CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "40:ROL": {
    groupsOpened: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "40:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [],
  },
  "40:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/PATHWAY_OBSERVATION",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "40:OBX": {
    groupsOpened: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "41:OBX": {
    groupsOpened: ["CCM_I21/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "41:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [],
  },
  "41:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/PATHWAY",
    ],
  },
  "41:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/GOAL/GOAL_OBSERVATION"],
  },
  "42:ROL": {
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCM_I21/GOAL/GOAL_OBSERVATION", "CCM_I21/PATHWAY"],
  },
  "42:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [],
  },
  "42:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
  },
  "42:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "42:OBX": {
    groupsOpened: ["CCM_I21/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "43:OBX": {
    groupsOpened: ["CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "43:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [],
  },
  "43:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "43:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "43:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: ["CCM_I21/PROBLEM", "CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "44:ROL": {
    groupsOpened: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "44:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [],
  },
  "44:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "44:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "44:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "44:OBX": {
    groupsOpened: ["CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "45:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "45:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "45:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "45:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "45:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "45:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "45:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "45:OBX": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "46:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "46:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "46:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "46:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "46:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "46:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "46:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "46:OBX": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "47:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "47:REL": {
    groupsOpened: [],
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
  },
  "47:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "47:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "47:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "47:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "47:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "47:RXE": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "47:OBX": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "48:ROL": {
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CCM_I21/PATIENT_VISITS"],
  },
  "48:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "48:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "48:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "51:ROL": {
    groupsOpened: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "51:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [],
  },
  "51:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/PATHWAY_OBSERVATION",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "51:OBX": {
    groupsOpened: ["CCM_I21/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "52:ROL": {
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCM_I21/GOAL/GOAL_OBSERVATION", "CCM_I21/PATHWAY"],
  },
  "52:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [],
  },
  "52:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
  },
  "52:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/GOAL_OBSERVATION",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "52:OBX": {
    groupsOpened: ["CCM_I21/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "53:ROL": {
    groupsOpened: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "53:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [],
  },
  "53:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "53:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "53:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/PROBLEM_OBSERVATION",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "53:OBX": {
    groupsOpened: ["CCM_I21/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "54:OBX": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "54:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "54:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "54:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "54:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "54:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "54:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "54:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "55:OBX": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "55:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "55:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "55:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "55:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "55:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "55:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "55:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "56:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "56:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "56:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "56:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "56:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "56:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "56:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "56:OBX": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "57:OBX": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "57:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "57:REL": {
    groupsOpened: [],
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
  },
  "57:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "57:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "57:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "57:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "57:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "57:RXE": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "58:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "58:REL": {
    groupsOpened: [],
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
  },
  "58:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "58:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "58:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "58:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "58:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "58:RXE": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "58:OBX": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "61:OBX": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "61:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "61:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "61:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "61:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "61:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "61:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "61:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "62:OBX": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "62:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "62:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "62:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "62:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "62:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "62:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "62:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "63:OBX": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "63:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "63:REL": {
    groupsOpened: [],
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
  },
  "63:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "63:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PROBLEM",
    ],
  },
  "63:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "63:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "63:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "63:RXE": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "65:AIS": {
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/PATIENT_VISITS",
    ],
  },
  "65:RGS": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "65:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "65:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY",
    ],
  },
  "65:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "65:OBX": {
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "67:OBX": {
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "67:AIS": {
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/PATIENT_VISITS",
    ],
  },
  "67:RGS": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "67:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "67:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY",
    ],
  },
  "67:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "69:OBX": {
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "69:AIS": {
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/PATIENT_VISITS",
    ],
  },
  "69:RGS": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "69:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "69:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY",
    ],
  },
  "69:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "74:OBR": {
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCM_I21/PATIENT_VISITS",
    ],
  },
  "74:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "74:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "74:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "74:ROL": {
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/PATIENT_VISITS",
    ],
  },
  "74:OBX": {
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "75:OBX": {
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "75:OBR": {
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCM_I21/PATIENT_VISITS",
    ],
  },
  "75:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "75:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "75:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "75:ROL": {
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/PATIENT_VISITS",
    ],
  },
  "76:OBX": {
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "76:OBR": {
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCM_I21/PATIENT_VISITS",
    ],
  },
  "76:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "76:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "76:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "76:ROL": {
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCM_I21/PATIENT_VISITS",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
