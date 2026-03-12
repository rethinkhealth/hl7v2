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
    groupsOpened: ["CCU_I20/INSURANCE"],
    groupsClosed: ["CCU_I20/PATIENT"],
  },
  "10:NK1": {
    groupsOpened: [],
    groupsClosed: ["CCU_I20/PATIENT"],
  },
  "10:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
    ],
  },
  "10:PID": {
    groupsOpened: ["CCU_I20/PATIENT"],
    groupsClosed: [],
  },
  "10:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
    ],
  },
  "10:SCH": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCU_I20/INSURANCE", "CCU_I20/PATIENT"],
  },
  "11:IN1": {
    groupsOpened: ["CCU_I20/INSURANCE"],
    groupsClosed: ["CCU_I20/PATIENT", "CCU_I20/PROVIDER_CONTACT"],
  },
  "11:NK1": {
    groupsOpened: [],
    groupsClosed: ["CCU_I20/PATIENT", "CCU_I20/PROVIDER_CONTACT"],
  },
  "11:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
  },
  "11:PID": {
    groupsOpened: ["CCU_I20/PATIENT"],
    groupsClosed: ["CCU_I20/PROVIDER_CONTACT"],
  },
  "11:PRD": {
    groupsOpened: ["CCU_I20/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "11:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
  },
  "11:SCH": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
  },
  "13:OBX": {
    groupsOpened: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "13:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [],
  },
  "13:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/PATHWAY",
      "CCU_I20/PATHWAY/PATHWAY_OBSERVATION",
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "13:ROL": {
    groupsOpened: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "14:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: ["CCU_I20/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "14:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "14:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCU_I20/PATHWAY",
    ],
  },
  "14:ROL": {
    groupsOpened: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCU_I20/GOAL/GOAL_OBSERVATION", "CCU_I20/PATHWAY"],
  },
  "15:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "15:OBX": {
    groupsOpened: ["CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "15:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [],
  },
  "15:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "15:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "15:ROL": {
    groupsOpened: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "16:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "16:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PROBLEM",
    ],
  },
  "16:ORC": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "16:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "16:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PROBLEM",
    ],
  },
  "16:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "16:RXA": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "16:RXE": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "16:RXO": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "17:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PATIENT_VISITS",
      "CCU_I20/PROBLEM",
    ],
  },
  "17:ORC": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
    groupsClosed: ["CCU_I20/PATIENT_VISITS"],
  },
  "17:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: ["CCU_I20/MEDICATION_HISTORY", "CCU_I20/PATIENT_VISITS"],
  },
  "17:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PATIENT_VISITS",
      "CCU_I20/PROBLEM",
    ],
  },
  "17:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [],
  },
  "17:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PATHWAY",
      "CCU_I20/PATIENT_VISITS",
      "CCU_I20/PROBLEM",
    ],
  },
  "18:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "18:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "21:AIS": {
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CCU_I20/CLINICAL_HISTORY", "CCU_I20/PATIENT_VISITS"],
  },
  "21:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "21:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/CLINICAL_HISTORY",
    ],
  },
  "21:RGS": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "21:SCH": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "22:IN1": {
    groupsOpened: ["CCU_I20/INSURANCE"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: ["CCU_I20/APPOINTMENT_HISTORY", "CCU_I20/INSURANCE"],
  },
  "22:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
    ],
  },
  "22:SCH": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCU_I20/INSURANCE"],
  },
  "23:IN1": {
    groupsOpened: ["CCU_I20/INSURANCE"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: ["CCU_I20/APPOINTMENT_HISTORY", "CCU_I20/INSURANCE"],
  },
  "23:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
    ],
  },
  "23:SCH": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCU_I20/INSURANCE"],
  },
  "24:IN1": {
    groupsOpened: ["CCU_I20/INSURANCE"],
    groupsClosed: ["CCU_I20/PATIENT"],
  },
  "24:NK1": {
    groupsOpened: [],
    groupsClosed: ["CCU_I20/PATIENT"],
  },
  "24:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
    ],
  },
  "24:PID": {
    groupsOpened: ["CCU_I20/PATIENT"],
    groupsClosed: [],
  },
  "24:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
    ],
  },
  "24:SCH": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCU_I20/INSURANCE", "CCU_I20/PATIENT"],
  },
  "25:IN1": {
    groupsOpened: ["CCU_I20/INSURANCE"],
    groupsClosed: ["CCU_I20/PATIENT", "CCU_I20/PROVIDER_CONTACT"],
  },
  "25:NK1": {
    groupsOpened: [],
    groupsClosed: ["CCU_I20/PATIENT", "CCU_I20/PROVIDER_CONTACT"],
  },
  "25:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
  },
  "25:PID": {
    groupsOpened: ["CCU_I20/PATIENT"],
    groupsClosed: ["CCU_I20/PROVIDER_CONTACT"],
  },
  "25:PRD": {
    groupsOpened: ["CCU_I20/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "25:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
  },
  "25:SCH": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
  },
  "26:OBX": {
    groupsOpened: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [],
  },
  "26:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [],
  },
  "26:REL": {
    groupsOpened: [],
    groupsClosed: ["CCU_I20/PATHWAY", "CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "28:OBX": {
    groupsOpened: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "28:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [],
  },
  "28:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/PATHWAY",
      "CCU_I20/PATHWAY/PATHWAY_OBSERVATION",
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "28:ROL": {
    groupsOpened: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "29:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [],
  },
  "29:OBX": {
    groupsOpened: ["CCU_I20/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "29:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: ["CCU_I20/GOAL", "CCU_I20/GOAL/GOAL_OBSERVATION"],
  },
  "29:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/PATHWAY",
    ],
  },
  "2:IN1": {
    groupsOpened: ["CCU_I20/INSURANCE"],
    groupsClosed: ["CCU_I20/PATIENT", "CCU_I20/PROVIDER_CONTACT"],
  },
  "2:NK1": {
    groupsOpened: [],
    groupsClosed: ["CCU_I20/PATIENT", "CCU_I20/PROVIDER_CONTACT"],
  },
  "2:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
  },
  "2:PID": {
    groupsOpened: ["CCU_I20/PATIENT"],
    groupsClosed: ["CCU_I20/PROVIDER_CONTACT"],
  },
  "2:PRD": {
    groupsOpened: ["CCU_I20/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "2:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
  },
  "2:SCH": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCU_I20/INSURANCE",
      "CCU_I20/PATIENT",
      "CCU_I20/PROVIDER_CONTACT",
    ],
  },
  "31:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [],
  },
  "31:OBX": {
    groupsOpened: ["CCU_I20/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "31:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "31:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCU_I20/PATHWAY",
    ],
  },
  "31:ROL": {
    groupsOpened: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCU_I20/GOAL/GOAL_OBSERVATION", "CCU_I20/PATHWAY"],
  },
  "32:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: ["CCU_I20/PROBLEM", "CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "32:OBX": {
    groupsOpened: ["CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "32:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [],
  },
  "32:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "32:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "34:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "34:OBX": {
    groupsOpened: ["CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "34:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [],
  },
  "34:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "34:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "34:ROL": {
    groupsOpened: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "35:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: ["CCU_I20/MEDICATION_HISTORY", "CCU_I20/PROBLEM"],
  },
  "35:ORC": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "35:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "35:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PROBLEM",
    ],
  },
  "35:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "39:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "39:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "39:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "39:ROL": {
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CCU_I20/PATIENT_VISITS"],
  },
  "42:OBX": {
    groupsOpened: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [],
  },
  "42:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [],
  },
  "42:REL": {
    groupsOpened: [],
    groupsClosed: ["CCU_I20/PATHWAY", "CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "43:OBX": {
    groupsOpened: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "43:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [],
  },
  "43:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/PATHWAY",
      "CCU_I20/PATHWAY/PATHWAY_OBSERVATION",
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "43:ROL": {
    groupsOpened: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "44:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [],
  },
  "44:OBX": {
    groupsOpened: ["CCU_I20/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "44:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: ["CCU_I20/GOAL", "CCU_I20/GOAL/GOAL_OBSERVATION"],
  },
  "44:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/PATHWAY",
    ],
  },
  "45:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [],
  },
  "45:OBX": {
    groupsOpened: ["CCU_I20/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "45:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "45:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCU_I20/PATHWAY",
    ],
  },
  "45:ROL": {
    groupsOpened: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCU_I20/GOAL/GOAL_OBSERVATION", "CCU_I20/PATHWAY"],
  },
  "46:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: ["CCU_I20/PROBLEM", "CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "46:OBX": {
    groupsOpened: ["CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "46:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [],
  },
  "46:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "46:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "47:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "47:OBX": {
    groupsOpened: ["CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "47:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [],
  },
  "47:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "47:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "47:ROL": {
    groupsOpened: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "48:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "48:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "48:OBX": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "48:ORC": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "48:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "48:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "48:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "48:RXA": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "49:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "49:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "49:OBX": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "49:ORC": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "49:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "49:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "49:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "49:RXA": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "50:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "50:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "50:OBX": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "50:ORC": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "50:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "50:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "50:REL": {
    groupsOpened: [],
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
  },
  "50:RXA": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "50:RXE": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "51:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "51:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "51:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "51:ROL": {
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CCU_I20/PATIENT_VISITS"],
  },
  "54:OBX": {
    groupsOpened: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "54:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [],
  },
  "54:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/PATHWAY",
      "CCU_I20/PATHWAY/PATHWAY_OBSERVATION",
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "54:ROL": {
    groupsOpened: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CCU_I20/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "55:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [],
  },
  "55:OBX": {
    groupsOpened: ["CCU_I20/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "55:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "55:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/GOAL_OBSERVATION",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCU_I20/PATHWAY",
    ],
  },
  "55:ROL": {
    groupsOpened: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCU_I20/GOAL/GOAL_OBSERVATION", "CCU_I20/PATHWAY"],
  },
  "56:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "56:OBX": {
    groupsOpened: ["CCU_I20/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "56:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [],
  },
  "56:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "56:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "56:ROL": {
    groupsOpened: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "57:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "57:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "57:OBX": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "57:ORC": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "57:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "57:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "57:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "57:RXA": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "58:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "58:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "58:OBX": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "58:ORC": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "58:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "58:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "58:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "58:RXA": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "59:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "59:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "59:OBX": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "59:ORC": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "59:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "59:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "59:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "59:RXA": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "5:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PATIENT_VISITS",
      "CCU_I20/PROBLEM",
    ],
  },
  "5:ORC": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
    groupsClosed: ["CCU_I20/PATIENT_VISITS"],
  },
  "5:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: ["CCU_I20/MEDICATION_HISTORY", "CCU_I20/PATIENT_VISITS"],
  },
  "5:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PATIENT_VISITS",
      "CCU_I20/PROBLEM",
    ],
  },
  "5:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [],
  },
  "5:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/PATHWAY",
      "CCU_I20/PATIENT_VISITS",
      "CCU_I20/PROBLEM",
    ],
  },
  "60:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "60:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "60:OBX": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "60:ORC": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "60:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "60:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "60:REL": {
    groupsOpened: [],
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
  },
  "60:RXA": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "60:RXE": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "61:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "61:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "61:OBX": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "61:ORC": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "61:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "61:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "61:REL": {
    groupsOpened: [],
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
  },
  "61:RXA": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "61:RXE": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "64:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "64:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "64:OBX": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "64:ORC": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "64:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "64:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "64:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "64:RXA": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "65:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "65:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "65:OBX": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "65:ORC": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "65:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "65:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "65:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "65:RXA": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "66:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "66:GOL": {
    groupsOpened: ["CCU_I20/GOAL"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "66:OBX": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "66:ORC": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "66:PRB": {
    groupsOpened: ["CCU_I20/PROBLEM"],
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "66:PTH": {
    groupsOpened: ["CCU_I20/PATHWAY"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PROBLEM",
    ],
  },
  "66:REL": {
    groupsOpened: [],
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
  },
  "66:RXA": {
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "66:RXE": {
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
  },
  "68:AIS": {
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/PATIENT_VISITS",
    ],
  },
  "68:OBX": {
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "68:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "68:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY",
    ],
  },
  "68:RGS": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "68:SCH": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "6:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "6:OBR": {
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCU_I20/PATIENT_VISITS",
    ],
  },
  "6:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "6:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "6:ROL": {
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/PATIENT_VISITS",
    ],
  },
  "70:AIS": {
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/PATIENT_VISITS",
    ],
  },
  "70:OBX": {
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "70:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "70:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY",
    ],
  },
  "70:RGS": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "70:SCH": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "72:AIS": {
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/PATIENT_VISITS",
    ],
  },
  "72:OBX": {
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "72:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "72:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY",
    ],
  },
  "72:RGS": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "72:SCH": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "77:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "77:OBR": {
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCU_I20/PATIENT_VISITS",
    ],
  },
  "77:OBX": {
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "77:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "77:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "77:ROL": {
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/PATIENT_VISITS",
    ],
  },
  "78:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "78:OBR": {
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCU_I20/PATIENT_VISITS",
    ],
  },
  "78:OBX": {
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "78:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "78:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "78:ROL": {
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/PATIENT_VISITS",
    ],
  },
  "79:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "79:OBR": {
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCU_I20/PATIENT_VISITS",
    ],
  },
  "79:OBX": {
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "79:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "79:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "79:ROL": {
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCU_I20/PATIENT_VISITS",
    ],
  },
  "7:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
    ],
  },
  "7:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/CLINICAL_HISTORY",
    ],
  },
  "7:RGS": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "7:SCH": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
    groupsClosed: [],
  },
  "8:IN1": {
    groupsOpened: ["CCU_I20/INSURANCE"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: ["CCU_I20/APPOINTMENT_HISTORY", "CCU_I20/INSURANCE"],
  },
  "8:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
    ],
  },
  "8:SCH": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCU_I20/INSURANCE"],
  },
  "9:IN1": {
    groupsOpened: ["CCU_I20/INSURANCE"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
    groupsClosed: ["CCU_I20/APPOINTMENT_HISTORY", "CCU_I20/INSURANCE"],
  },
  "9:PV1": {
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/INSURANCE",
    ],
  },
  "9:SCH": {
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCU_I20/INSURANCE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
