// Generated profile automaton for CCU_I20 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  5, 12, 13, 14, 15, 16, 17, 26, 28, 29, 31, 32, 34, 35, 42, 43, 44, 45, 46, 47,
  48, 49, 50, 54, 55, 56, 57, 58, 59, 60, 61, 64, 65, 66,
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
      ["RF1", 2],
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
      ["PID", 10],
      ["PRD", 11],
      ["PV1", 5],
      ["SCH", 7],
    ]),
  ],
  [3, new Map([["RF1", 2]])],
  [
    4,
    new Map([
      ["RF1", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["GOL", 14],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["PV1", 5],
      ["PV2", 17],
      ["REL", 12],
    ]),
  ],
  [
    6,
    new Map([
      ["CTI", 18],
      ["OBR", 20],
      ["ORC", 6],
      ["PV1", 5],
      ["ROL", 19],
    ]),
  ],
  [
    7,
    new Map([
      ["ORC", 6],
      ["PV1", 5],
      ["RGS", 21],
      ["SCH", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["IN1", 8],
      ["IN2", 23],
      ["IN3", 22],
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
      ["PD1", 24],
      ["PID", 10],
      ["PV1", 5],
      ["SCH", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["CTD", 25],
      ["IN1", 8],
      ["NK1", 9],
      ["ORC", 6],
      ["PID", 10],
      ["PRD", 11],
      ["PV1", 5],
      ["SCH", 7],
    ]),
  ],
  [12, new Map([["REL", 12]])],
  [
    13,
    new Map([
      ["OBX", 26],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 27],
      ["VAR", 28],
    ]),
  ],
  [
    14,
    new Map([
      ["GOL", 14],
      ["OBX", 29],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 30],
      ["VAR", 31],
    ]),
  ],
  [
    15,
    new Map([
      ["GOL", 14],
      ["OBX", 32],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 33],
      ["VAR", 34],
    ]),
  ],
  [
    16,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
      ["RXE", 37],
      ["RXO", 38],
    ]),
  ],
  [
    17,
    new Map([
      ["GOL", 14],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["PV1", 5],
      ["REL", 12],
    ]),
  ],
  [
    18,
    new Map([
      ["CTI", 18],
      ["ORC", 6],
      ["PV1", 5],
    ]),
  ],
  [19, new Map([["PRD", 39]])],
  [20, new Map([["ODS", 40]])],
  [
    21,
    new Map([
      ["AIS", 41],
      ["ORC", 6],
      ["PV1", 5],
      ["RGS", 21],
      ["SCH", 7],
    ]),
  ],
  [
    22,
    new Map([
      ["IN1", 8],
      ["ORC", 6],
      ["PV1", 5],
      ["SCH", 7],
    ]),
  ],
  [
    23,
    new Map([
      ["IN1", 8],
      ["IN3", 22],
      ["ORC", 6],
      ["PV1", 5],
      ["SCH", 7],
    ]),
  ],
  [
    24,
    new Map([
      ["IN1", 8],
      ["NK1", 9],
      ["ORC", 6],
      ["PID", 10],
      ["PV1", 5],
      ["SCH", 7],
    ]),
  ],
  [
    25,
    new Map([
      ["CTD", 25],
      ["IN1", 8],
      ["NK1", 9],
      ["ORC", 6],
      ["PID", 10],
      ["PRD", 11],
      ["PV1", 5],
      ["SCH", 7],
    ]),
  ],
  [
    26,
    new Map([
      ["OBX", 26],
      ["PRT", 42],
      ["PTH", 13],
      ["REL", 12],
    ]),
  ],
  [27, new Map([["PRD", 43]])],
  [
    28,
    new Map([
      ["OBX", 26],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 27],
      ["VAR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["GOL", 14],
      ["OBX", 29],
      ["PRT", 44],
      ["PTH", 13],
      ["REL", 12],
    ]),
  ],
  [30, new Map([["PRD", 45]])],
  [
    31,
    new Map([
      ["GOL", 14],
      ["OBX", 29],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 30],
      ["VAR", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["GOL", 14],
      ["OBX", 32],
      ["PRB", 15],
      ["PRT", 46],
      ["PTH", 13],
      ["REL", 12],
    ]),
  ],
  [33, new Map([["PRD", 47]])],
  [
    34,
    new Map([
      ["GOL", 14],
      ["OBX", 32],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 33],
      ["VAR", 34],
    ]),
  ],
  [
    35,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
    ]),
  ],
  [
    36,
    new Map([
      ["RXA", 36],
      ["RXR", 48],
    ]),
  ],
  [37, new Map([["RXR", 49]])],
  [38, new Map([["RXR", 50]])],
  [
    39,
    new Map([
      ["CTI", 18],
      ["ORC", 6],
      ["PV1", 5],
      ["ROL", 19],
      ["VAR", 51],
    ]),
  ],
  [40, new Map([["PR1", 52]])],
  [41, new Map([["AIG", 53]])],
  [
    42,
    new Map([
      ["OBX", 26],
      ["PRT", 42],
      ["PTH", 13],
      ["REL", 12],
    ]),
  ],
  [
    43,
    new Map([
      ["OBX", 26],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 27],
      ["VAR", 54],
    ]),
  ],
  [
    44,
    new Map([
      ["GOL", 14],
      ["OBX", 29],
      ["PRT", 44],
      ["PTH", 13],
      ["REL", 12],
    ]),
  ],
  [
    45,
    new Map([
      ["GOL", 14],
      ["OBX", 29],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 30],
      ["VAR", 55],
    ]),
  ],
  [
    46,
    new Map([
      ["GOL", 14],
      ["OBX", 32],
      ["PRB", 15],
      ["PRT", 46],
      ["PTH", 13],
      ["REL", 12],
    ]),
  ],
  [
    47,
    new Map([
      ["GOL", 14],
      ["OBX", 32],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 33],
      ["VAR", 56],
    ]),
  ],
  [
    48,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 57],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
    ]),
  ],
  [
    49,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 58],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
      ["RXC", 59],
      ["RXR", 49],
    ]),
  ],
  [
    50,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 60],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
      ["RXC", 61],
      ["RXE", 37],
      ["RXR", 50],
    ]),
  ],
  [
    51,
    new Map([
      ["CTI", 18],
      ["ORC", 6],
      ["PV1", 5],
      ["ROL", 19],
      ["VAR", 51],
    ]),
  ],
  [52, new Map([["RF1", 62]])],
  [53, new Map([["AIL", 63]])],
  [
    54,
    new Map([
      ["OBX", 26],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 27],
      ["VAR", 54],
    ]),
  ],
  [
    55,
    new Map([
      ["GOL", 14],
      ["OBX", 29],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 30],
      ["VAR", 55],
    ]),
  ],
  [
    56,
    new Map([
      ["GOL", 14],
      ["OBX", 32],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 33],
      ["VAR", 56],
    ]),
  ],
  [
    57,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 57],
      ["ORC", 16],
      ["PRB", 15],
      ["PRT", 64],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
    ]),
  ],
  [
    58,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 58],
      ["ORC", 16],
      ["PRB", 15],
      ["PRT", 65],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
    ]),
  ],
  [
    59,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 58],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
      ["RXC", 59],
    ]),
  ],
  [
    60,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 60],
      ["ORC", 16],
      ["PRB", 15],
      ["PRT", 66],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
      ["RXE", 37],
    ]),
  ],
  [
    61,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 60],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
      ["RXC", 61],
      ["RXE", 37],
    ]),
  ],
  [62, new Map([["AL1", 67]])],
  [63, new Map([["AIP", 68]])],
  [
    64,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 57],
      ["ORC", 16],
      ["PRB", 15],
      ["PRT", 64],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
    ]),
  ],
  [
    65,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 58],
      ["ORC", 16],
      ["PRB", 15],
      ["PRT", 65],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
    ]),
  ],
  [
    66,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 60],
      ["ORC", 16],
      ["PRB", 15],
      ["PRT", 66],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
      ["RXE", 37],
    ]),
  ],
  [67, new Map([["IAM", 69]])],
  [
    68,
    new Map([
      ["AIS", 41],
      ["OBX", 70],
      ["ORC", 6],
      ["PV1", 5],
      ["RGS", 21],
      ["SCH", 7],
    ]),
  ],
  [69, new Map([["ACC", 71]])],
  [
    70,
    new Map([
      ["AIS", 41],
      ["OBX", 70],
      ["ORC", 6],
      ["PRT", 72],
      ["PV1", 5],
      ["RGS", 21],
      ["SCH", 7],
    ]),
  ],
  [71, new Map([["RMI", 73]])],
  [
    72,
    new Map([
      ["AIS", 41],
      ["OBX", 70],
      ["ORC", 6],
      ["PRT", 72],
      ["PV1", 5],
      ["RGS", 21],
      ["SCH", 7],
    ]),
  ],
  [73, new Map([["DB1", 74]])],
  [74, new Map([["DG1", 75]])],
  [75, new Map([["DRG", 76]])],
  [76, new Map([["PDA", 77]])],
  [
    77,
    new Map([
      ["CTI", 18],
      ["OBR", 20],
      ["OBX", 78],
      ["ORC", 6],
      ["PV1", 5],
      ["ROL", 19],
    ]),
  ],
  [
    78,
    new Map([
      ["CTI", 18],
      ["OBR", 20],
      ["OBX", 78],
      ["ORC", 6],
      ["PRT", 79],
      ["PV1", 5],
      ["ROL", 19],
    ]),
  ],
  [
    79,
    new Map([
      ["CTI", 18],
      ["OBR", 20],
      ["OBX", 78],
      ["ORC", 6],
      ["PRT", 79],
      ["PV1", 5],
      ["ROL", 19],
    ]),
  ],
]);
export const effects = {
  "10:IN1": {
    groupsClosed: ["CCU_I20/PATIENT"],
    groupsOpened: ["CCU_I20/INSURANCE"],
  },
  "10:NK1": {
    groupsClosed: ["CCU_I20/PATIENT"],
    groupsOpened: [],
  },
  "10:ORC": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
    ],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "10:PID": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATIENT"],
  },
  "10:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "10:SCH": {
    groupsClosed: ["CCU_I20/INSURANCE", "CCU_I20/PATIENT"],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
  },
  "11:IN1": {
    groupsClosed: ["CCU_I20/PATIENT", "CCU_I20/PROVIDER_CONTACT"],
    groupsOpened: ["CCU_I20/INSURANCE"],
  },
  "11:NK1": {
    groupsClosed: ["CCU_I20/PATIENT", "CCU_I20/PROVIDER_CONTACT"],
    groupsOpened: [],
  },
  "11:ORC": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "11:PID": {
    groupsClosed: ["CCU_I20/PROVIDER_CONTACT"],
    groupsOpened: ["CCU_I20/PATIENT"],
  },
  "11:PRD": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROVIDER_CONTACT"],
  },
  "11:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "11:SCH": {
    groupsClosed: [
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
  },
  "13:OBX": {
    groupsClosed: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "13:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "13:REL": {
    groupsClosed: [
      "CCU_I20/PATHWAY",
      "CCU_I20/PATHWAY/PATHWAY_OBSERVATION",
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "13:ROL": {
    groupsClosed: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "14:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "14:OBX": {
    groupsClosed: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCU_I20/GOAL/GOAL_OBSERVATION"],
  },
  "14:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "14:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCU_I20/PATHWAY",
    ],
    groupsOpened: [],
  },
  "14:ROL": {
    groupsClosed: ["CCU_I20/GOAL/GOAL_OBSERVATION", "CCU_I20/PATHWAY"],
    groupsOpened: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "15:GOL": {
    groupsClosed: [
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "15:OBX": {
    groupsClosed: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "15:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "15:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "15:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "15:ROL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "16:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "16:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "16:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "16:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "16:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "16:RXA": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "16:RXE": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "16:RXO": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL"],
  },
  "17:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PATIENT_VISITS",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "17:ORC": {
    groupsClosed: ["CCU_I20/PATIENT_VISITS"],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "17:PRB": {
    groupsClosed: ["CCU_I20/MEDICATION_HISTORY", "CCU_I20/PATIENT_VISITS"],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "17:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PATIENT_VISITS",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "17:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PATHWAY",
      "CCU_I20/PATIENT_VISITS",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "18:PV1": {
    groupsClosed: ["CCU_I20/CLINICAL_HISTORY"],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "21:AIS": {
    groupsClosed: ["CCU_I20/CLINICAL_HISTORY", "CCU_I20/PATIENT_VISITS"],
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "21:ORC": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "21:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "21:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "21:SCH": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
  },
  "22:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/INSURANCE"],
  },
  "22:ORC": {
    groupsClosed: ["CCU_I20/APPOINTMENT_HISTORY", "CCU_I20/INSURANCE"],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "22:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "22:SCH": {
    groupsClosed: ["CCU_I20/INSURANCE"],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
  },
  "23:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/INSURANCE"],
  },
  "23:ORC": {
    groupsClosed: ["CCU_I20/APPOINTMENT_HISTORY", "CCU_I20/INSURANCE"],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "23:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "23:SCH": {
    groupsClosed: ["CCU_I20/INSURANCE"],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
  },
  "24:IN1": {
    groupsClosed: ["CCU_I20/PATIENT"],
    groupsOpened: ["CCU_I20/INSURANCE"],
  },
  "24:NK1": {
    groupsClosed: ["CCU_I20/PATIENT"],
    groupsOpened: [],
  },
  "24:ORC": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
    ],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "24:PID": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATIENT"],
  },
  "24:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "24:SCH": {
    groupsClosed: ["CCU_I20/INSURANCE", "CCU_I20/PATIENT"],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
  },
  "25:IN1": {
    groupsClosed: ["CCU_I20/PATIENT", "CCU_I20/PROVIDER_CONTACT"],
    groupsOpened: ["CCU_I20/INSURANCE"],
  },
  "25:NK1": {
    groupsClosed: ["CCU_I20/PATIENT", "CCU_I20/PROVIDER_CONTACT"],
    groupsOpened: [],
  },
  "25:ORC": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "25:PID": {
    groupsClosed: ["CCU_I20/PROVIDER_CONTACT"],
    groupsOpened: ["CCU_I20/PATIENT"],
  },
  "25:PRD": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROVIDER_CONTACT"],
  },
  "25:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "25:SCH": {
    groupsClosed: [
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "26:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "26:REL": {
    groupsClosed: ["CCU_I20/PATHWAY", "CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [],
  },
  "28:OBX": {
    groupsClosed: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "28:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "28:REL": {
    groupsClosed: [
      "CCU_I20/PATHWAY",
      "CCU_I20/PATHWAY/PATHWAY_OBSERVATION",
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "28:ROL": {
    groupsClosed: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "29:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/GOAL/GOAL_OBSERVATION"],
  },
  "29:PTH": {
    groupsClosed: ["CCU_I20/GOAL", "CCU_I20/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "29:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/PATHWAY",
    ],
    groupsOpened: [],
  },
  "2:IN1": {
    groupsClosed: ["CCU_I20/PATIENT", "CCU_I20/PROVIDER_CONTACT"],
    groupsOpened: ["CCU_I20/INSURANCE"],
  },
  "2:NK1": {
    groupsClosed: ["CCU_I20/PATIENT", "CCU_I20/PROVIDER_CONTACT"],
    groupsOpened: [],
  },
  "2:ORC": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "2:PID": {
    groupsClosed: ["CCU_I20/PROVIDER_CONTACT"],
    groupsOpened: ["CCU_I20/PATIENT"],
  },
  "2:PRD": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROVIDER_CONTACT"],
  },
  "2:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "2:SCH": {
    groupsClosed: [
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
  },
  "31:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "31:OBX": {
    groupsClosed: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCU_I20/GOAL/GOAL_OBSERVATION"],
  },
  "31:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "31:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCU_I20/PATHWAY",
    ],
    groupsOpened: [],
  },
  "31:ROL": {
    groupsClosed: ["CCU_I20/GOAL/GOAL_OBSERVATION", "CCU_I20/PATHWAY"],
    groupsOpened: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "32:GOL": {
    groupsClosed: ["CCU_I20/PROBLEM", "CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "32:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "32:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "32:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "34:GOL": {
    groupsClosed: [
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "34:OBX": {
    groupsClosed: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "34:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "34:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "34:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "34:ROL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "35:GOL": {
    groupsClosed: ["CCU_I20/MEDICATION_HISTORY", "CCU_I20/PROBLEM"],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "35:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "35:PRB": {
    groupsClosed: ["CCU_I20/MEDICATION_HISTORY"],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "35:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "35:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "39:CTI": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "39:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "39:PV1": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "39:ROL": {
    groupsClosed: ["CCU_I20/PATIENT_VISITS"],
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "42:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "42:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "42:REL": {
    groupsClosed: ["CCU_I20/PATHWAY", "CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [],
  },
  "43:OBX": {
    groupsClosed: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "43:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "43:REL": {
    groupsClosed: [
      "CCU_I20/PATHWAY",
      "CCU_I20/PATHWAY/PATHWAY_OBSERVATION",
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "43:ROL": {
    groupsClosed: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "44:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "44:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/GOAL/GOAL_OBSERVATION"],
  },
  "44:PTH": {
    groupsClosed: ["CCU_I20/GOAL", "CCU_I20/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "44:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/PATHWAY",
    ],
    groupsOpened: [],
  },
  "45:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "45:OBX": {
    groupsClosed: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCU_I20/GOAL/GOAL_OBSERVATION"],
  },
  "45:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "45:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCU_I20/PATHWAY",
    ],
    groupsOpened: [],
  },
  "45:ROL": {
    groupsClosed: ["CCU_I20/GOAL/GOAL_OBSERVATION", "CCU_I20/PATHWAY"],
    groupsOpened: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "46:GOL": {
    groupsClosed: ["CCU_I20/PROBLEM", "CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "46:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "46:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "46:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "46:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "47:GOL": {
    groupsClosed: [
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "47:OBX": {
    groupsClosed: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "47:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "47:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "47:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "47:ROL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "48:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "48:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "48:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "48:ORC": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "48:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "48:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "48:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "48:RXA": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "49:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "49:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "49:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "49:ORC": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "49:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "49:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "49:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "49:RXA": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "50:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "50:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "50:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "50:ORC": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "50:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "50:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "50:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "50:RXA": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "50:RXE": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "51:CTI": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "51:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "51:PV1": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "51:ROL": {
    groupsClosed: ["CCU_I20/PATIENT_VISITS"],
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "54:OBX": {
    groupsClosed: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "54:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "54:REL": {
    groupsClosed: [
      "CCU_I20/PATHWAY",
      "CCU_I20/PATHWAY/PATHWAY_OBSERVATION",
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "54:ROL": {
    groupsClosed: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "55:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "55:OBX": {
    groupsClosed: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCU_I20/GOAL/GOAL_OBSERVATION"],
  },
  "55:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "55:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCU_I20/PATHWAY",
    ],
    groupsOpened: [],
  },
  "55:ROL": {
    groupsClosed: ["CCU_I20/GOAL/GOAL_OBSERVATION", "CCU_I20/PATHWAY"],
    groupsOpened: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "56:GOL": {
    groupsClosed: [
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "56:OBX": {
    groupsClosed: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "56:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "56:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "56:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "56:ROL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
    groupsOpened: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "57:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "57:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "57:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "57:ORC": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "57:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "57:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "57:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "57:RXA": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "58:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "58:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "58:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "58:ORC": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "58:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "58:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "58:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "58:RXA": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "59:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "59:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "59:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "59:ORC": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "59:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "59:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "59:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "59:RXA": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "5:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PATIENT_VISITS",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "5:ORC": {
    groupsClosed: ["CCU_I20/PATIENT_VISITS"],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "5:PRB": {
    groupsClosed: ["CCU_I20/MEDICATION_HISTORY", "CCU_I20/PATIENT_VISITS"],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "5:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PATIENT_VISITS",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "5:PV1": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "5:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PATHWAY",
      "CCU_I20/PATIENT_VISITS",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "60:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "60:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "60:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "60:ORC": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "60:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "60:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "60:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "60:RXA": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "60:RXE": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "61:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "61:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "61:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "61:ORC": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "61:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "61:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "61:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "61:RXA": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "61:RXE": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "64:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "64:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "64:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "64:ORC": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "64:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "64:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "64:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "64:RXA": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "65:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "65:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "65:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "65:ORC": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "65:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "65:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "65:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "65:RXA": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "66:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "66:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "66:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "66:ORC": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "66:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "66:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "66:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "66:RXA": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "66:RXE": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "68:AIS": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "68:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "68:ORC": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "68:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "68:RGS": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "68:SCH": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
  },
  "6:CTI": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "6:OBR": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCU_I20/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "6:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "6:PV1": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "6:ROL": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "70:AIS": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "70:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "70:ORC": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "70:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "70:RGS": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "70:SCH": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
  },
  "72:AIS": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "72:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "72:ORC": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "72:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "72:RGS": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "72:SCH": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
  },
  "77:CTI": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "77:OBR": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCU_I20/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "77:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "77:ORC": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "77:PV1": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "77:ROL": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "78:CTI": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "78:OBR": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCU_I20/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "78:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "78:ORC": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "78:PV1": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "78:ROL": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "79:CTI": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "79:OBR": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCU_I20/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "79:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "79:ORC": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "79:PV1": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "79:ROL": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "7:ORC": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
    ],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "7:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "7:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "7:SCH": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
  },
  "8:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/INSURANCE"],
  },
  "8:ORC": {
    groupsClosed: ["CCU_I20/APPOINTMENT_HISTORY", "CCU_I20/INSURANCE"],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "8:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "8:SCH": {
    groupsClosed: ["CCU_I20/INSURANCE"],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
  },
  "9:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/INSURANCE"],
  },
  "9:ORC": {
    groupsClosed: ["CCU_I20/APPOINTMENT_HISTORY", "CCU_I20/INSURANCE"],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "9:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "9:SCH": {
    groupsClosed: ["CCU_I20/INSURANCE"],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
