// Generated profile automaton for CQU_I19 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  7, 14, 15, 16, 17, 18, 19, 28, 30, 31, 33, 34, 36, 37, 44, 45, 46, 47, 48, 49,
  50, 51, 52, 56, 57, 58, 59, 60, 61, 62, 63, 66, 67, 68,
]);
export const alphabet = new Set<string>([
  "ACC",
  "AIG",
  "AIL",
  "AIP",
  "AIS",
  "AL1",
  "CTD",
  "CTI",
  "DB1",
  "DG1",
  "DRG",
  "ERR",
  "GOL",
  "IAM",
  "IN1",
  "IN2",
  "IN3",
  "MSA",
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
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 6],
      ["RF1", 5],
    ]),
  ],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["IN1", 10],
      ["NK1", 11],
      ["ORC", 8],
      ["PID", 12],
      ["PRD", 13],
      ["PV1", 7],
      ["SCH", 9],
    ]),
  ],
  [
    6,
    new Map([
      ["ERR", 6],
      ["RF1", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 16],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["PV1", 7],
      ["PV2", 19],
      ["REL", 14],
    ]),
  ],
  [
    8,
    new Map([
      ["CTI", 20],
      ["OBR", 22],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 21],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 8],
      ["PV1", 7],
      ["RGS", 23],
      ["SCH", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["IN1", 10],
      ["IN2", 25],
      ["IN3", 24],
      ["ORC", 8],
      ["PV1", 7],
      ["SCH", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["IN1", 10],
      ["NK1", 11],
      ["ORC", 8],
      ["PV1", 7],
      ["SCH", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["IN1", 10],
      ["NK1", 11],
      ["ORC", 8],
      ["PD1", 26],
      ["PID", 12],
      ["PV1", 7],
      ["SCH", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["CTD", 27],
      ["IN1", 10],
      ["NK1", 11],
      ["ORC", 8],
      ["PID", 12],
      ["PRD", 13],
      ["PV1", 7],
      ["SCH", 9],
    ]),
  ],
  [14, new Map([["REL", 14]])],
  [
    15,
    new Map([
      ["OBX", 28],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 29],
      ["VAR", 30],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 16],
      ["OBX", 31],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 32],
      ["VAR", 33],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 16],
      ["OBX", 34],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 35],
      ["VAR", 36],
    ]),
  ],
  [
    18,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXE", 39],
      ["RXO", 40],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 16],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["PV1", 7],
      ["REL", 14],
    ]),
  ],
  [
    20,
    new Map([
      ["CTI", 20],
      ["ORC", 8],
      ["PV1", 7],
    ]),
  ],
  [21, new Map([["PRD", 41]])],
  [22, new Map([["ODS", 42]])],
  [
    23,
    new Map([
      ["AIS", 43],
      ["ORC", 8],
      ["PV1", 7],
      ["RGS", 23],
      ["SCH", 9],
    ]),
  ],
  [
    24,
    new Map([
      ["IN1", 10],
      ["ORC", 8],
      ["PV1", 7],
      ["SCH", 9],
    ]),
  ],
  [
    25,
    new Map([
      ["IN1", 10],
      ["IN3", 24],
      ["ORC", 8],
      ["PV1", 7],
      ["SCH", 9],
    ]),
  ],
  [
    26,
    new Map([
      ["IN1", 10],
      ["NK1", 11],
      ["ORC", 8],
      ["PID", 12],
      ["PV1", 7],
      ["SCH", 9],
    ]),
  ],
  [
    27,
    new Map([
      ["CTD", 27],
      ["IN1", 10],
      ["NK1", 11],
      ["ORC", 8],
      ["PID", 12],
      ["PRD", 13],
      ["PV1", 7],
      ["SCH", 9],
    ]),
  ],
  [
    28,
    new Map([
      ["OBX", 28],
      ["PRT", 44],
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [29, new Map([["PRD", 45]])],
  [
    30,
    new Map([
      ["OBX", 28],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 29],
      ["VAR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 16],
      ["OBX", 31],
      ["PRT", 46],
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [32, new Map([["PRD", 47]])],
  [
    33,
    new Map([
      ["GOL", 16],
      ["OBX", 31],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 32],
      ["VAR", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["GOL", 16],
      ["OBX", 34],
      ["PRB", 17],
      ["PRT", 48],
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [35, new Map([["PRD", 49]])],
  [
    36,
    new Map([
      ["GOL", 16],
      ["OBX", 34],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 35],
      ["VAR", 36],
    ]),
  ],
  [
    37,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [
    38,
    new Map([
      ["RXA", 38],
      ["RXR", 50],
    ]),
  ],
  [39, new Map([["RXR", 51]])],
  [40, new Map([["RXR", 52]])],
  [
    41,
    new Map([
      ["CTI", 20],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 21],
      ["VAR", 53],
    ]),
  ],
  [42, new Map([["PR1", 54]])],
  [43, new Map([["AIG", 55]])],
  [
    44,
    new Map([
      ["OBX", 28],
      ["PRT", 44],
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [
    45,
    new Map([
      ["OBX", 28],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 29],
      ["VAR", 56],
    ]),
  ],
  [
    46,
    new Map([
      ["GOL", 16],
      ["OBX", 31],
      ["PRT", 46],
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [
    47,
    new Map([
      ["GOL", 16],
      ["OBX", 31],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 32],
      ["VAR", 57],
    ]),
  ],
  [
    48,
    new Map([
      ["GOL", 16],
      ["OBX", 34],
      ["PRB", 17],
      ["PRT", 48],
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [
    49,
    new Map([
      ["GOL", 16],
      ["OBX", 34],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 35],
      ["VAR", 58],
    ]),
  ],
  [
    50,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 59],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
    ]),
  ],
  [
    51,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 60],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXC", 61],
      ["RXR", 51],
    ]),
  ],
  [
    52,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 62],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXC", 63],
      ["RXE", 39],
      ["RXR", 52],
    ]),
  ],
  [
    53,
    new Map([
      ["CTI", 20],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 21],
      ["VAR", 53],
    ]),
  ],
  [54, new Map([["RF1", 64]])],
  [55, new Map([["AIL", 65]])],
  [
    56,
    new Map([
      ["OBX", 28],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 29],
      ["VAR", 56],
    ]),
  ],
  [
    57,
    new Map([
      ["GOL", 16],
      ["OBX", 31],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 32],
      ["VAR", 57],
    ]),
  ],
  [
    58,
    new Map([
      ["GOL", 16],
      ["OBX", 34],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 35],
      ["VAR", 58],
    ]),
  ],
  [
    59,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 59],
      ["ORC", 18],
      ["PRB", 17],
      ["PRT", 66],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
    ]),
  ],
  [
    60,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 60],
      ["ORC", 18],
      ["PRB", 17],
      ["PRT", 67],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
    ]),
  ],
  [
    61,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 60],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXC", 61],
    ]),
  ],
  [
    62,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 62],
      ["ORC", 18],
      ["PRB", 17],
      ["PRT", 68],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXE", 39],
    ]),
  ],
  [
    63,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 62],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXC", 63],
      ["RXE", 39],
    ]),
  ],
  [64, new Map([["AL1", 69]])],
  [65, new Map([["AIP", 70]])],
  [
    66,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 59],
      ["ORC", 18],
      ["PRB", 17],
      ["PRT", 66],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
    ]),
  ],
  [
    67,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 60],
      ["ORC", 18],
      ["PRB", 17],
      ["PRT", 67],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
    ]),
  ],
  [
    68,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 62],
      ["ORC", 18],
      ["PRB", 17],
      ["PRT", 68],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXE", 39],
    ]),
  ],
  [69, new Map([["IAM", 71]])],
  [
    70,
    new Map([
      ["AIS", 43],
      ["OBX", 72],
      ["ORC", 8],
      ["PV1", 7],
      ["RGS", 23],
      ["SCH", 9],
    ]),
  ],
  [71, new Map([["ACC", 73]])],
  [
    72,
    new Map([
      ["AIS", 43],
      ["OBX", 72],
      ["ORC", 8],
      ["PRT", 74],
      ["PV1", 7],
      ["RGS", 23],
      ["SCH", 9],
    ]),
  ],
  [73, new Map([["RMI", 75]])],
  [
    74,
    new Map([
      ["AIS", 43],
      ["OBX", 72],
      ["ORC", 8],
      ["PRT", 74],
      ["PV1", 7],
      ["RGS", 23],
      ["SCH", 9],
    ]),
  ],
  [75, new Map([["DB1", 76]])],
  [76, new Map([["DG1", 77]])],
  [77, new Map([["DRG", 78]])],
  [78, new Map([["PDA", 79]])],
  [
    79,
    new Map([
      ["CTI", 20],
      ["OBR", 22],
      ["OBX", 80],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 21],
    ]),
  ],
  [
    80,
    new Map([
      ["CTI", 20],
      ["OBR", 22],
      ["OBX", 80],
      ["ORC", 8],
      ["PRT", 81],
      ["PV1", 7],
      ["ROL", 21],
    ]),
  ],
  [
    81,
    new Map([
      ["CTI", 20],
      ["OBR", 22],
      ["OBX", 80],
      ["ORC", 8],
      ["PRT", 81],
      ["PV1", 7],
      ["ROL", 21],
    ]),
  ],
]);
export const effects = {
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: ["CQU_I19/APPOINTMENT_HISTORY", "CQU_I19/INSURANCE"],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "10:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "10:SCH": {
    groupsClosed: ["CQU_I19/INSURANCE"],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: ["CQU_I19/APPOINTMENT_HISTORY", "CQU_I19/INSURANCE"],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "11:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "11:SCH": {
    groupsClosed: ["CQU_I19/INSURANCE"],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
  "12:IN1": {
    groupsClosed: ["CQU_I19/PATIENT"],
    groupsOpened: ["CQU_I19/INSURANCE"],
  },
  "12:NK1": {
    groupsClosed: ["CQU_I19/PATIENT"],
    groupsOpened: [],
  },
  "12:ORC": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
    ],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "12:PID": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATIENT"],
  },
  "12:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "12:SCH": {
    groupsClosed: ["CQU_I19/INSURANCE", "CQU_I19/PATIENT"],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
  "13:IN1": {
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
    groupsOpened: ["CQU_I19/INSURANCE"],
  },
  "13:NK1": {
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
    groupsOpened: [],
  },
  "13:ORC": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "13:PID": {
    groupsClosed: ["CQU_I19/PROVIDER_CONTACT"],
    groupsOpened: ["CQU_I19/PATIENT"],
  },
  "13:PRD": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROVIDER_CONTACT"],
  },
  "13:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "13:SCH": {
    groupsClosed: [
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
  "15:OBX": {
    groupsClosed: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "15:PTH": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "15:REL": {
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/PATHWAY_OBSERVATION",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "15:ROL": {
    groupsClosed: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "16:GOL": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "16:OBX": {
    groupsClosed: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CQU_I19/GOAL/GOAL_OBSERVATION"],
  },
  "16:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "16:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
    groupsOpened: [],
  },
  "16:ROL": {
    groupsClosed: ["CQU_I19/GOAL/GOAL_OBSERVATION", "CQU_I19/PATHWAY"],
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "17:GOL": {
    groupsClosed: [
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "17:OBX": {
    groupsClosed: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "17:PRB": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "17:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "17:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "17:ROL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "18:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "18:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "18:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "18:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "18:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "18:RXA": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "18:RXE": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "18:RXO": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL"],
  },
  "19:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATIENT_VISITS",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "19:ORC": {
    groupsClosed: ["CQU_I19/PATIENT_VISITS"],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "19:PRB": {
    groupsClosed: ["CQU_I19/MEDICATION_HISTORY", "CQU_I19/PATIENT_VISITS"],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "19:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATIENT_VISITS",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "19:PV1": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "19:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATHWAY",
      "CQU_I19/PATIENT_VISITS",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "20:PV1": {
    groupsClosed: ["CQU_I19/CLINICAL_HISTORY"],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "23:AIS": {
    groupsClosed: ["CQU_I19/CLINICAL_HISTORY", "CQU_I19/PATIENT_VISITS"],
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "23:ORC": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "23:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "23:RGS": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "23:SCH": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
  "24:IN1": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/INSURANCE"],
  },
  "24:ORC": {
    groupsClosed: ["CQU_I19/APPOINTMENT_HISTORY", "CQU_I19/INSURANCE"],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "24:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "24:SCH": {
    groupsClosed: ["CQU_I19/INSURANCE"],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
  "25:IN1": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/INSURANCE"],
  },
  "25:ORC": {
    groupsClosed: ["CQU_I19/APPOINTMENT_HISTORY", "CQU_I19/INSURANCE"],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "25:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "25:SCH": {
    groupsClosed: ["CQU_I19/INSURANCE"],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
  "26:IN1": {
    groupsClosed: ["CQU_I19/PATIENT"],
    groupsOpened: ["CQU_I19/INSURANCE"],
  },
  "26:NK1": {
    groupsClosed: ["CQU_I19/PATIENT"],
    groupsOpened: [],
  },
  "26:ORC": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
    ],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "26:PID": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATIENT"],
  },
  "26:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "26:SCH": {
    groupsClosed: ["CQU_I19/INSURANCE", "CQU_I19/PATIENT"],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
  "27:IN1": {
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
    groupsOpened: ["CQU_I19/INSURANCE"],
  },
  "27:NK1": {
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
    groupsOpened: [],
  },
  "27:ORC": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "27:PID": {
    groupsClosed: ["CQU_I19/PROVIDER_CONTACT"],
    groupsOpened: ["CQU_I19/PATIENT"],
  },
  "27:PRD": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROVIDER_CONTACT"],
  },
  "27:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "27:SCH": {
    groupsClosed: [
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "28:PTH": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "28:REL": {
    groupsClosed: ["CQU_I19/PATHWAY", "CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [],
  },
  "30:OBX": {
    groupsClosed: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "30:PTH": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "30:REL": {
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/PATHWAY_OBSERVATION",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "30:ROL": {
    groupsClosed: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "31:GOL": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/GOAL/GOAL_OBSERVATION"],
  },
  "31:PTH": {
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "31:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/PATHWAY",
    ],
    groupsOpened: [],
  },
  "33:GOL": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "33:OBX": {
    groupsClosed: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CQU_I19/GOAL/GOAL_OBSERVATION"],
  },
  "33:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "33:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
    groupsOpened: [],
  },
  "33:ROL": {
    groupsClosed: ["CQU_I19/GOAL/GOAL_OBSERVATION", "CQU_I19/PATHWAY"],
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "34:GOL": {
    groupsClosed: ["CQU_I19/PROBLEM", "CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "34:PRB": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "34:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "34:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "36:GOL": {
    groupsClosed: [
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "36:OBX": {
    groupsClosed: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "36:PRB": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "36:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "36:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "36:ROL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "37:GOL": {
    groupsClosed: ["CQU_I19/MEDICATION_HISTORY", "CQU_I19/PROBLEM"],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "37:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "37:PRB": {
    groupsClosed: ["CQU_I19/MEDICATION_HISTORY"],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "37:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "37:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "41:CTI": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "41:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "41:PV1": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "41:ROL": {
    groupsClosed: ["CQU_I19/PATIENT_VISITS"],
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "44:OBX": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "44:PTH": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "44:REL": {
    groupsClosed: ["CQU_I19/PATHWAY", "CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [],
  },
  "45:OBX": {
    groupsClosed: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "45:PTH": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "45:REL": {
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/PATHWAY_OBSERVATION",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "45:ROL": {
    groupsClosed: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "46:GOL": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "46:OBX": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/GOAL/GOAL_OBSERVATION"],
  },
  "46:PTH": {
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "46:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/PATHWAY",
    ],
    groupsOpened: [],
  },
  "47:GOL": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "47:OBX": {
    groupsClosed: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CQU_I19/GOAL/GOAL_OBSERVATION"],
  },
  "47:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "47:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
    groupsOpened: [],
  },
  "47:ROL": {
    groupsClosed: ["CQU_I19/GOAL/GOAL_OBSERVATION", "CQU_I19/PATHWAY"],
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "48:GOL": {
    groupsClosed: ["CQU_I19/PROBLEM", "CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "48:OBX": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "48:PRB": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "48:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "48:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "49:GOL": {
    groupsClosed: [
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "49:OBX": {
    groupsClosed: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "49:PRB": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "49:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "49:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "49:ROL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "50:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "50:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "50:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "50:ORC": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "50:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "50:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "50:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "50:RXA": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "51:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "51:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "51:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "51:ORC": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "51:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "51:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "51:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "51:RXA": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "52:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "52:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "52:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "52:ORC": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "52:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "52:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "52:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "52:RXA": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "52:RXE": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "53:CTI": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "53:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "53:PV1": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "53:ROL": {
    groupsClosed: ["CQU_I19/PATIENT_VISITS"],
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "56:OBX": {
    groupsClosed: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "56:PTH": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "56:REL": {
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/PATHWAY_OBSERVATION",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "56:ROL": {
    groupsClosed: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "57:GOL": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "57:OBX": {
    groupsClosed: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CQU_I19/GOAL/GOAL_OBSERVATION"],
  },
  "57:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "57:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
    groupsOpened: [],
  },
  "57:ROL": {
    groupsClosed: ["CQU_I19/GOAL/GOAL_OBSERVATION", "CQU_I19/PATHWAY"],
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "58:GOL": {
    groupsClosed: [
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "58:OBX": {
    groupsClosed: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "58:PRB": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "58:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "58:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "58:ROL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "59:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "59:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "59:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "59:ORC": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "59:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "59:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "59:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "59:RXA": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "5:IN1": {
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
    groupsOpened: ["CQU_I19/INSURANCE"],
  },
  "5:NK1": {
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
    groupsOpened: [],
  },
  "5:ORC": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "5:PID": {
    groupsClosed: ["CQU_I19/PROVIDER_CONTACT"],
    groupsOpened: ["CQU_I19/PATIENT"],
  },
  "5:PRD": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROVIDER_CONTACT"],
  },
  "5:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "5:SCH": {
    groupsClosed: [
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
  "60:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "60:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "60:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "60:ORC": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "60:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "60:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "60:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "60:RXA": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "61:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "61:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "61:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "61:ORC": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "61:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "61:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "61:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "61:RXA": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "62:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "62:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "62:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "62:ORC": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "62:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "62:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "62:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "62:RXA": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "62:RXE": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "63:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "63:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "63:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "63:ORC": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "63:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "63:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "63:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "63:RXA": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "63:RXE": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "66:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "66:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "66:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "66:ORC": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "66:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "66:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "66:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "66:RXA": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "67:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "67:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "67:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "67:ORC": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "67:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "67:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "67:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "67:RXA": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "68:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "68:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "68:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "68:ORC": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "68:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "68:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "68:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "68:RXA": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "68:RXE": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "70:AIS": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "70:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "70:ORC": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "70:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "70:RGS": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "70:SCH": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
  "72:AIS": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "72:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "72:ORC": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "72:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "72:RGS": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "72:SCH": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
  "74:AIS": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "74:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "74:ORC": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "74:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "74:RGS": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "74:SCH": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
  "79:CTI": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "79:OBR": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CQU_I19/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "79:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "79:ORC": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "79:PV1": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "79:ROL": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "7:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATIENT_VISITS",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "7:ORC": {
    groupsClosed: ["CQU_I19/PATIENT_VISITS"],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "7:PRB": {
    groupsClosed: ["CQU_I19/MEDICATION_HISTORY", "CQU_I19/PATIENT_VISITS"],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "7:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATIENT_VISITS",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "7:PV1": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "7:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATHWAY",
      "CQU_I19/PATIENT_VISITS",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "80:CTI": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "80:OBR": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CQU_I19/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "80:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "80:ORC": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "80:PV1": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "80:ROL": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "81:CTI": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "81:OBR": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CQU_I19/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "81:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "81:ORC": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "81:PV1": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "81:ROL": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "8:CTI": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "8:OBR": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CQU_I19/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "8:PV1": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "8:ROL": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "9:ORC": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
    ],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "9:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "9:RGS": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "9:SCH": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
