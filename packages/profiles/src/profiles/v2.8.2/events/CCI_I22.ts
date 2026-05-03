// Generated profile automaton for CCI_I22 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  7, 13, 14, 15, 16, 17, 18, 25, 27, 28, 30, 31, 33, 34, 41, 42, 43, 44, 45, 46,
  47, 48, 49, 53, 54, 55, 56, 57, 58, 59, 60, 63, 64, 65,
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
      ["PID", 5],
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
      ["PD1", 12],
      ["PV1", 7],
      ["SCH", 9],
    ]),
  ],
  [
    6,
    new Map([
      ["ERR", 6],
      ["PID", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["GOL", 15],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["PV1", 7],
      ["PV2", 18],
      ["REL", 13],
    ]),
  ],
  [
    8,
    new Map([
      ["CTI", 19],
      ["OBR", 21],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 20],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 8],
      ["PV1", 7],
      ["RGS", 22],
      ["SCH", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["IN1", 10],
      ["IN2", 24],
      ["IN3", 23],
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
      ["PV1", 7],
      ["SCH", 9],
    ]),
  ],
  [13, new Map([["REL", 13]])],
  [
    14,
    new Map([
      ["OBX", 25],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 26],
      ["VAR", 27],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 15],
      ["OBX", 28],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 29],
      ["VAR", 30],
    ]),
  ],
  [
    16,
    new Map([
      ["GOL", 15],
      ["OBX", 31],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 32],
      ["VAR", 33],
    ]),
  ],
  [
    17,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
      ["RXE", 36],
      ["RXO", 37],
    ]),
  ],
  [
    18,
    new Map([
      ["GOL", 15],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["PV1", 7],
      ["REL", 13],
    ]),
  ],
  [
    19,
    new Map([
      ["CTI", 19],
      ["ORC", 8],
      ["PV1", 7],
    ]),
  ],
  [20, new Map([["PRD", 38]])],
  [21, new Map([["ODS", 39]])],
  [
    22,
    new Map([
      ["AIS", 40],
      ["ORC", 8],
      ["PV1", 7],
      ["RGS", 22],
      ["SCH", 9],
    ]),
  ],
  [
    23,
    new Map([
      ["IN1", 10],
      ["ORC", 8],
      ["PV1", 7],
      ["SCH", 9],
    ]),
  ],
  [
    24,
    new Map([
      ["IN1", 10],
      ["IN3", 23],
      ["ORC", 8],
      ["PV1", 7],
      ["SCH", 9],
    ]),
  ],
  [
    25,
    new Map([
      ["OBX", 25],
      ["PRT", 41],
      ["PTH", 14],
      ["REL", 13],
    ]),
  ],
  [26, new Map([["PRD", 42]])],
  [
    27,
    new Map([
      ["OBX", 25],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 26],
      ["VAR", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["GOL", 15],
      ["OBX", 28],
      ["PRT", 43],
      ["PTH", 14],
      ["REL", 13],
    ]),
  ],
  [29, new Map([["PRD", 44]])],
  [
    30,
    new Map([
      ["GOL", 15],
      ["OBX", 28],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 29],
      ["VAR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["GOL", 15],
      ["OBX", 31],
      ["PRB", 16],
      ["PRT", 45],
      ["PTH", 14],
      ["REL", 13],
    ]),
  ],
  [32, new Map([["PRD", 46]])],
  [
    33,
    new Map([
      ["GOL", 15],
      ["OBX", 31],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 32],
      ["VAR", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
    ]),
  ],
  [
    35,
    new Map([
      ["RXA", 35],
      ["RXR", 47],
    ]),
  ],
  [36, new Map([["RXR", 48]])],
  [37, new Map([["RXR", 49]])],
  [
    38,
    new Map([
      ["CTI", 19],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 20],
      ["VAR", 50],
    ]),
  ],
  [39, new Map([["PR1", 51]])],
  [40, new Map([["AIG", 52]])],
  [
    41,
    new Map([
      ["OBX", 25],
      ["PRT", 41],
      ["PTH", 14],
      ["REL", 13],
    ]),
  ],
  [
    42,
    new Map([
      ["OBX", 25],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 26],
      ["VAR", 53],
    ]),
  ],
  [
    43,
    new Map([
      ["GOL", 15],
      ["OBX", 28],
      ["PRT", 43],
      ["PTH", 14],
      ["REL", 13],
    ]),
  ],
  [
    44,
    new Map([
      ["GOL", 15],
      ["OBX", 28],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 29],
      ["VAR", 54],
    ]),
  ],
  [
    45,
    new Map([
      ["GOL", 15],
      ["OBX", 31],
      ["PRB", 16],
      ["PRT", 45],
      ["PTH", 14],
      ["REL", 13],
    ]),
  ],
  [
    46,
    new Map([
      ["GOL", 15],
      ["OBX", 31],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 32],
      ["VAR", 55],
    ]),
  ],
  [
    47,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 56],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
    ]),
  ],
  [
    48,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 57],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
      ["RXC", 58],
      ["RXR", 48],
    ]),
  ],
  [
    49,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 59],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
      ["RXC", 60],
      ["RXE", 36],
      ["RXR", 49],
    ]),
  ],
  [
    50,
    new Map([
      ["CTI", 19],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 20],
      ["VAR", 50],
    ]),
  ],
  [51, new Map([["RF1", 61]])],
  [52, new Map([["AIL", 62]])],
  [
    53,
    new Map([
      ["OBX", 25],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 26],
      ["VAR", 53],
    ]),
  ],
  [
    54,
    new Map([
      ["GOL", 15],
      ["OBX", 28],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 29],
      ["VAR", 54],
    ]),
  ],
  [
    55,
    new Map([
      ["GOL", 15],
      ["OBX", 31],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 32],
      ["VAR", 55],
    ]),
  ],
  [
    56,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 56],
      ["ORC", 17],
      ["PRB", 16],
      ["PRT", 63],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
    ]),
  ],
  [
    57,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 57],
      ["ORC", 17],
      ["PRB", 16],
      ["PRT", 64],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
    ]),
  ],
  [
    58,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 57],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
      ["RXC", 58],
    ]),
  ],
  [
    59,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 59],
      ["ORC", 17],
      ["PRB", 16],
      ["PRT", 65],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
      ["RXE", 36],
    ]),
  ],
  [
    60,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 59],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
      ["RXC", 60],
      ["RXE", 36],
    ]),
  ],
  [61, new Map([["AL1", 66]])],
  [62, new Map([["AIP", 67]])],
  [
    63,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 56],
      ["ORC", 17],
      ["PRB", 16],
      ["PRT", 63],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
    ]),
  ],
  [
    64,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 57],
      ["ORC", 17],
      ["PRB", 16],
      ["PRT", 64],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
    ]),
  ],
  [
    65,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 59],
      ["ORC", 17],
      ["PRB", 16],
      ["PRT", 65],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
      ["RXE", 36],
    ]),
  ],
  [66, new Map([["IAM", 68]])],
  [
    67,
    new Map([
      ["AIS", 40],
      ["OBX", 69],
      ["ORC", 8],
      ["PV1", 7],
      ["RGS", 22],
      ["SCH", 9],
    ]),
  ],
  [68, new Map([["ACC", 70]])],
  [
    69,
    new Map([
      ["AIS", 40],
      ["OBX", 69],
      ["ORC", 8],
      ["PRT", 71],
      ["PV1", 7],
      ["RGS", 22],
      ["SCH", 9],
    ]),
  ],
  [70, new Map([["RMI", 72]])],
  [
    71,
    new Map([
      ["AIS", 40],
      ["OBX", 69],
      ["ORC", 8],
      ["PRT", 71],
      ["PV1", 7],
      ["RGS", 22],
      ["SCH", 9],
    ]),
  ],
  [72, new Map([["DB1", 73]])],
  [73, new Map([["DG1", 74]])],
  [74, new Map([["DRG", 75]])],
  [75, new Map([["PDA", 76]])],
  [
    76,
    new Map([
      ["CTI", 19],
      ["OBR", 21],
      ["OBX", 77],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 20],
    ]),
  ],
  [
    77,
    new Map([
      ["CTI", 19],
      ["OBR", 21],
      ["OBX", 77],
      ["ORC", 8],
      ["PRT", 78],
      ["PV1", 7],
      ["ROL", 20],
    ]),
  ],
  [
    78,
    new Map([
      ["CTI", 19],
      ["OBR", 21],
      ["OBX", 77],
      ["ORC", 8],
      ["PRT", 78],
      ["PV1", 7],
      ["ROL", 20],
    ]),
  ],
]);
export const effects = {
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: ["CCI_I22/APPOINTMENT_HISTORY", "CCI_I22/INSURANCE"],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "10:PV1": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/INSURANCE",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "10:SCH": {
    groupsClosed: ["CCI_I22/INSURANCE"],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: ["CCI_I22/APPOINTMENT_HISTORY", "CCI_I22/INSURANCE"],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "11:PV1": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/INSURANCE",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "11:SCH": {
    groupsClosed: ["CCI_I22/INSURANCE"],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
  },
  "12:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: ["CCI_I22/APPOINTMENT_HISTORY", "CCI_I22/INSURANCE"],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "12:PV1": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/INSURANCE",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "12:SCH": {
    groupsClosed: ["CCI_I22/INSURANCE"],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
  },
  "14:OBX": {
    groupsClosed: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "14:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "14:REL": {
    groupsClosed: [
      "CCI_I22/PATHWAY",
      "CCI_I22/PATHWAY/PATHWAY_OBSERVATION",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "14:ROL": {
    groupsClosed: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "15:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "15:OBX": {
    groupsClosed: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCI_I22/GOAL/GOAL_OBSERVATION"],
  },
  "15:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "15:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
    groupsOpened: [],
  },
  "15:ROL": {
    groupsClosed: ["CCI_I22/GOAL/GOAL_OBSERVATION", "CCI_I22/PATHWAY"],
    groupsOpened: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "16:GOL": {
    groupsClosed: [
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "16:OBX": {
    groupsClosed: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "16:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "16:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "16:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "16:ROL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "17:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "17:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "17:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "17:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "17:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "17:RXA": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "17:RXE": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "17:RXO": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL"],
  },
  "18:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PATIENT_VISITS",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "18:ORC": {
    groupsClosed: ["CCI_I22/PATIENT_VISITS"],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "18:PRB": {
    groupsClosed: ["CCI_I22/MEDICATION_HISTORY", "CCI_I22/PATIENT_VISITS"],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "18:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PATIENT_VISITS",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "18:PV1": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "18:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PATHWAY",
      "CCI_I22/PATIENT_VISITS",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "19:PV1": {
    groupsClosed: ["CCI_I22/CLINICAL_HISTORY"],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "22:AIS": {
    groupsClosed: ["CCI_I22/CLINICAL_HISTORY", "CCI_I22/PATIENT_VISITS"],
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "22:ORC": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "22:PV1": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "22:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "22:SCH": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
  },
  "23:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/INSURANCE"],
  },
  "23:ORC": {
    groupsClosed: ["CCI_I22/APPOINTMENT_HISTORY", "CCI_I22/INSURANCE"],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "23:PV1": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/INSURANCE",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "23:SCH": {
    groupsClosed: ["CCI_I22/INSURANCE"],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
  },
  "24:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/INSURANCE"],
  },
  "24:ORC": {
    groupsClosed: ["CCI_I22/APPOINTMENT_HISTORY", "CCI_I22/INSURANCE"],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "24:PV1": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/INSURANCE",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "24:SCH": {
    groupsClosed: ["CCI_I22/INSURANCE"],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "25:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "25:REL": {
    groupsClosed: ["CCI_I22/PATHWAY", "CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [],
  },
  "27:OBX": {
    groupsClosed: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "27:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "27:REL": {
    groupsClosed: [
      "CCI_I22/PATHWAY",
      "CCI_I22/PATHWAY/PATHWAY_OBSERVATION",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "27:ROL": {
    groupsClosed: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "28:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/GOAL/GOAL_OBSERVATION"],
  },
  "28:PTH": {
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "28:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/PATHWAY",
    ],
    groupsOpened: [],
  },
  "30:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "30:OBX": {
    groupsClosed: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCI_I22/GOAL/GOAL_OBSERVATION"],
  },
  "30:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "30:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
    groupsOpened: [],
  },
  "30:ROL": {
    groupsClosed: ["CCI_I22/GOAL/GOAL_OBSERVATION", "CCI_I22/PATHWAY"],
    groupsOpened: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "31:GOL": {
    groupsClosed: ["CCI_I22/PROBLEM", "CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "31:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "31:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "31:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "33:GOL": {
    groupsClosed: [
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "33:OBX": {
    groupsClosed: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "33:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "33:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "33:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "33:ROL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "34:GOL": {
    groupsClosed: ["CCI_I22/MEDICATION_HISTORY", "CCI_I22/PROBLEM"],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "34:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "34:PRB": {
    groupsClosed: ["CCI_I22/MEDICATION_HISTORY"],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "34:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "34:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "38:CTI": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "38:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "38:PV1": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "38:ROL": {
    groupsClosed: ["CCI_I22/PATIENT_VISITS"],
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "41:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "41:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "41:REL": {
    groupsClosed: ["CCI_I22/PATHWAY", "CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [],
  },
  "42:OBX": {
    groupsClosed: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "42:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "42:REL": {
    groupsClosed: [
      "CCI_I22/PATHWAY",
      "CCI_I22/PATHWAY/PATHWAY_OBSERVATION",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "42:ROL": {
    groupsClosed: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "43:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "43:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/GOAL/GOAL_OBSERVATION"],
  },
  "43:PTH": {
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "43:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/PATHWAY",
    ],
    groupsOpened: [],
  },
  "44:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "44:OBX": {
    groupsClosed: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCI_I22/GOAL/GOAL_OBSERVATION"],
  },
  "44:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "44:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
    groupsOpened: [],
  },
  "44:ROL": {
    groupsClosed: ["CCI_I22/GOAL/GOAL_OBSERVATION", "CCI_I22/PATHWAY"],
    groupsOpened: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "45:GOL": {
    groupsClosed: ["CCI_I22/PROBLEM", "CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "45:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "45:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "45:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "45:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "46:GOL": {
    groupsClosed: [
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "46:OBX": {
    groupsClosed: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "46:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "46:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "46:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "46:ROL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "47:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "47:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "47:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "47:ORC": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "47:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "47:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "47:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "47:RXA": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "48:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "48:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "48:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "48:ORC": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "48:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "48:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "48:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "48:RXA": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "49:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "49:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "49:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "49:ORC": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "49:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "49:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "49:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "49:RXA": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "49:RXE": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "50:CTI": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "50:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "50:PV1": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "50:ROL": {
    groupsClosed: ["CCI_I22/PATIENT_VISITS"],
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "53:OBX": {
    groupsClosed: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "53:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "53:REL": {
    groupsClosed: [
      "CCI_I22/PATHWAY",
      "CCI_I22/PATHWAY/PATHWAY_OBSERVATION",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "53:ROL": {
    groupsClosed: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "54:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "54:OBX": {
    groupsClosed: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCI_I22/GOAL/GOAL_OBSERVATION"],
  },
  "54:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "54:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
    groupsOpened: [],
  },
  "54:ROL": {
    groupsClosed: ["CCI_I22/GOAL/GOAL_OBSERVATION", "CCI_I22/PATHWAY"],
    groupsOpened: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "55:GOL": {
    groupsClosed: [
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "55:OBX": {
    groupsClosed: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "55:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "55:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "55:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "55:ROL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "56:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "56:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "56:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "56:ORC": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "56:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "56:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "56:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "56:RXA": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "57:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "57:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "57:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "57:ORC": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "57:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "57:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "57:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "57:RXA": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "58:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "58:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "58:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "58:ORC": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "58:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "58:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "58:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "58:RXA": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "59:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "59:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "59:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "59:ORC": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "59:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "59:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "59:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "59:RXA": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "59:RXE": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "5:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/INSURANCE"],
  },
  "5:ORC": {
    groupsClosed: ["CCI_I22/APPOINTMENT_HISTORY", "CCI_I22/INSURANCE"],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "5:PV1": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/INSURANCE",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "5:SCH": {
    groupsClosed: ["CCI_I22/INSURANCE"],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
  },
  "60:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "60:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "60:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "60:ORC": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "60:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "60:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "60:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "60:RXA": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "60:RXE": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "63:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "63:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "63:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "63:ORC": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "63:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "63:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "63:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "63:RXA": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "64:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "64:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "64:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "64:ORC": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "64:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "64:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "64:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "64:RXA": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "65:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "65:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "65:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "65:ORC": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "65:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "65:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "65:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "65:RXA": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "65:RXE": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "67:AIS": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "67:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "67:ORC": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "67:PV1": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "67:RGS": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "67:SCH": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
  },
  "69:AIS": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "69:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "69:ORC": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "69:PV1": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "69:RGS": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "69:SCH": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
  },
  "71:AIS": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "71:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "71:ORC": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "71:PV1": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "71:RGS": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "71:SCH": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
  },
  "76:CTI": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "76:OBR": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCI_I22/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "76:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "76:ORC": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "76:PV1": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "76:ROL": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "77:CTI": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "77:OBR": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCI_I22/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "77:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "77:ORC": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "77:PV1": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "77:ROL": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "78:CTI": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "78:OBR": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCI_I22/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "78:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "78:ORC": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "78:PV1": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "78:ROL": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "7:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PATIENT_VISITS",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "7:ORC": {
    groupsClosed: ["CCI_I22/PATIENT_VISITS"],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "7:PRB": {
    groupsClosed: ["CCI_I22/MEDICATION_HISTORY", "CCI_I22/PATIENT_VISITS"],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "7:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PATIENT_VISITS",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "7:PV1": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "7:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PATHWAY",
      "CCI_I22/PATIENT_VISITS",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "8:CTI": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "8:OBR": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCI_I22/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "8:PV1": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "8:ROL": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "9:ORC": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
    ],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "9:PV1": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "9:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "9:SCH": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
