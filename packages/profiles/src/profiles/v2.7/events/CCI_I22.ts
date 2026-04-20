// Generated profile automaton for CCI_I22 (v2.7)

export const start = 0;
export const finals = new Set<number>([
  7, 13, 14, 15, 16, 17, 18, 25, 27, 28, 30, 31, 33, 34, 41, 42, 43, 44, 45, 46,
  50, 51, 52, 53, 54, 55, 56, 57,
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
      ["PTH", 14],
      ["REL", 13],
    ]),
  ],
  [26, new Map([["PRD", 41]])],
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
      ["PTH", 14],
      ["REL", 13],
    ]),
  ],
  [29, new Map([["PRD", 42]])],
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
      ["PTH", 14],
      ["REL", 13],
    ]),
  ],
  [32, new Map([["PRD", 43]])],
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
      ["RXR", 44],
    ]),
  ],
  [36, new Map([["RXR", 45]])],
  [37, new Map([["RXR", 46]])],
  [
    38,
    new Map([
      ["CTI", 19],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 20],
      ["VAR", 47],
    ]),
  ],
  [39, new Map([["PR1", 48]])],
  [40, new Map([["AIG", 49]])],
  [
    41,
    new Map([
      ["OBX", 25],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 26],
      ["VAR", 50],
    ]),
  ],
  [
    42,
    new Map([
      ["GOL", 15],
      ["OBX", 28],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 29],
      ["VAR", 51],
    ]),
  ],
  [
    43,
    new Map([
      ["GOL", 15],
      ["OBX", 31],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 32],
      ["VAR", 52],
    ]),
  ],
  [
    44,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 53],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
    ]),
  ],
  [
    45,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 54],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
      ["RXC", 55],
      ["RXR", 45],
    ]),
  ],
  [
    46,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 56],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
      ["RXC", 57],
      ["RXE", 36],
      ["RXR", 46],
    ]),
  ],
  [
    47,
    new Map([
      ["CTI", 19],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 20],
      ["VAR", 47],
    ]),
  ],
  [48, new Map([["RF1", 58]])],
  [49, new Map([["AIL", 59]])],
  [
    50,
    new Map([
      ["OBX", 25],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 26],
      ["VAR", 50],
    ]),
  ],
  [
    51,
    new Map([
      ["GOL", 15],
      ["OBX", 28],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 29],
      ["VAR", 51],
    ]),
  ],
  [
    52,
    new Map([
      ["GOL", 15],
      ["OBX", 31],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["ROL", 32],
      ["VAR", 52],
    ]),
  ],
  [
    53,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 53],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
    ]),
  ],
  [
    54,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 54],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
    ]),
  ],
  [
    55,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 54],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
      ["RXC", 55],
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
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
      ["RXE", 36],
    ]),
  ],
  [
    57,
    new Map([
      ["CTI", 34],
      ["GOL", 15],
      ["OBX", 56],
      ["ORC", 17],
      ["PRB", 16],
      ["PTH", 14],
      ["REL", 13],
      ["RXA", 35],
      ["RXC", 57],
      ["RXE", 36],
    ]),
  ],
  [58, new Map([["AL1", 60]])],
  [59, new Map([["AIP", 61]])],
  [60, new Map([["IAM", 62]])],
  [
    61,
    new Map([
      ["AIS", 40],
      ["OBX", 63],
      ["ORC", 8],
      ["PV1", 7],
      ["RGS", 22],
      ["SCH", 9],
    ]),
  ],
  [62, new Map([["ACC", 64]])],
  [
    63,
    new Map([
      ["AIS", 40],
      ["OBX", 63],
      ["ORC", 8],
      ["PV1", 7],
      ["RGS", 22],
      ["SCH", 9],
    ]),
  ],
  [64, new Map([["RMI", 65]])],
  [65, new Map([["DB1", 66]])],
  [66, new Map([["DG1", 67]])],
  [67, new Map([["DRG", 68]])],
  [68, new Map([["PDA", 69]])],
  [
    69,
    new Map([
      ["CTI", 19],
      ["OBR", 21],
      ["OBX", 70],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 20],
    ]),
  ],
  [
    70,
    new Map([
      ["CTI", 19],
      ["OBR", 21],
      ["OBX", 70],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 20],
    ]),
  ],
]);
export const effects = {
  "5:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/INSURANCE",
    ],
  },
  "5:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: ["CCI_I22/APPOINTMENT_HISTORY", "CCI_I22/INSURANCE"],
  },
  "5:SCH": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCI_I22/INSURANCE"],
  },
  "5:IN1": {
    groupsOpened: ["CCI_I22/INSURANCE"],
    groupsClosed: [],
  },
  "7:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [],
  },
  "7:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PATHWAY",
      "CCI_I22/PATIENT_VISITS",
      "CCI_I22/PROBLEM",
    ],
  },
  "7:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PATIENT_VISITS",
      "CCI_I22/PROBLEM",
    ],
  },
  "7:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PATIENT_VISITS",
      "CCI_I22/PROBLEM",
    ],
  },
  "7:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: ["CCI_I22/MEDICATION_HISTORY", "CCI_I22/PATIENT_VISITS"],
  },
  "7:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: ["CCI_I22/PATIENT_VISITS"],
  },
  "8:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "8:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "8:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "8:ROL": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/PATIENT_VISITS",
    ],
  },
  "8:OBR": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCI_I22/PATIENT_VISITS",
    ],
  },
  "9:SCH": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
    groupsClosed: [],
  },
  "9:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/CLINICAL_HISTORY",
    ],
  },
  "9:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
    ],
  },
  "9:RGS": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "10:IN1": {
    groupsOpened: ["CCI_I22/INSURANCE"],
    groupsClosed: [],
  },
  "10:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/INSURANCE",
    ],
  },
  "10:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: ["CCI_I22/APPOINTMENT_HISTORY", "CCI_I22/INSURANCE"],
  },
  "10:SCH": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCI_I22/INSURANCE"],
  },
  "11:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/INSURANCE",
    ],
  },
  "11:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: ["CCI_I22/APPOINTMENT_HISTORY", "CCI_I22/INSURANCE"],
  },
  "11:SCH": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCI_I22/INSURANCE"],
  },
  "11:IN1": {
    groupsOpened: ["CCI_I22/INSURANCE"],
    groupsClosed: [],
  },
  "12:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/INSURANCE",
    ],
  },
  "12:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: ["CCI_I22/APPOINTMENT_HISTORY", "CCI_I22/INSURANCE"],
  },
  "12:SCH": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCI_I22/INSURANCE"],
  },
  "12:IN1": {
    groupsOpened: ["CCI_I22/INSURANCE"],
    groupsClosed: [],
  },
  "14:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [],
  },
  "14:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "14:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "14:ROL": {
    groupsOpened: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "15:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [],
  },
  "15:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
  },
  "15:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "15:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "15:ROL": {
    groupsOpened: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCI_I22/PATHWAY"],
  },
  "16:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [],
  },
  "16:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "16:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "16:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "16:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "16:ROL": {
    groupsOpened: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY"],
  },
  "17:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "17:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "17:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "17:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "17:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "17:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "17:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "17:RXE": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "17:RXO": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "18:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [],
  },
  "18:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PATHWAY",
      "CCI_I22/PATIENT_VISITS",
      "CCI_I22/PROBLEM",
    ],
  },
  "18:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PATIENT_VISITS",
      "CCI_I22/PROBLEM",
    ],
  },
  "18:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PATIENT_VISITS",
      "CCI_I22/PROBLEM",
    ],
  },
  "18:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: ["CCI_I22/MEDICATION_HISTORY", "CCI_I22/PATIENT_VISITS"],
  },
  "18:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: ["CCI_I22/PATIENT_VISITS"],
  },
  "19:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "19:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "22:RGS": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "22:SCH": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "22:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/CLINICAL_HISTORY",
    ],
  },
  "22:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "22:AIS": {
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CCI_I22/CLINICAL_HISTORY", "CCI_I22/PATIENT_VISITS"],
  },
  "23:IN1": {
    groupsOpened: ["CCI_I22/INSURANCE"],
    groupsClosed: [],
  },
  "23:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/INSURANCE",
    ],
  },
  "23:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: ["CCI_I22/APPOINTMENT_HISTORY", "CCI_I22/INSURANCE"],
  },
  "23:SCH": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCI_I22/INSURANCE"],
  },
  "24:IN1": {
    groupsOpened: ["CCI_I22/INSURANCE"],
    groupsClosed: [],
  },
  "24:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/INSURANCE",
    ],
  },
  "24:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: ["CCI_I22/APPOINTMENT_HISTORY", "CCI_I22/INSURANCE"],
  },
  "24:SCH": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCI_I22/INSURANCE"],
  },
  "25:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [],
  },
  "25:REL": {
    groupsOpened: [],
    groupsClosed: ["CCI_I22/PATHWAY"],
  },
  "27:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [],
  },
  "27:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "27:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "27:ROL": {
    groupsOpened: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "28:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [],
  },
  "28:REL": {
    groupsOpened: [],
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY"],
  },
  "28:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: ["CCI_I22/GOAL"],
  },
  "30:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [],
  },
  "30:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
  },
  "30:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "30:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "30:ROL": {
    groupsOpened: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCI_I22/PATHWAY"],
  },
  "31:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [],
  },
  "31:REL": {
    groupsOpened: [],
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY", "CCI_I22/PROBLEM"],
  },
  "31:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PROBLEM"],
  },
  "31:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: ["CCI_I22/PROBLEM"],
  },
  "33:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [],
  },
  "33:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "33:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "33:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "33:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "33:ROL": {
    groupsOpened: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY"],
  },
  "34:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "34:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "34:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/PROBLEM",
    ],
  },
  "34:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: ["CCI_I22/MEDICATION_HISTORY", "CCI_I22/PROBLEM"],
  },
  "34:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "38:ROL": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CCI_I22/PATIENT_VISITS"],
  },
  "38:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "38:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "38:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "41:ROL": {
    groupsOpened: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "41:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [],
  },
  "41:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "41:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "42:ROL": {
    groupsOpened: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCI_I22/PATHWAY"],
  },
  "42:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [],
  },
  "42:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
  },
  "42:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "42:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "43:ROL": {
    groupsOpened: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY"],
  },
  "43:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [],
  },
  "43:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "43:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "43:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "43:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "44:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY", "CCI_I22/PROBLEM"],
  },
  "44:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "44:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "44:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "44:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "44:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "44:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "45:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "45:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "45:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "45:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "45:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "45:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "45:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "46:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "46:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "46:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "46:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "46:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "46:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "46:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "46:RXE": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "47:ROL": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CCI_I22/PATIENT_VISITS"],
  },
  "47:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "47:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "47:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "50:ROL": {
    groupsOpened: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "50:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [],
  },
  "50:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "50:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "51:ROL": {
    groupsOpened: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCI_I22/PATHWAY"],
  },
  "51:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [],
  },
  "51:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
  },
  "51:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "51:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "52:ROL": {
    groupsOpened: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY"],
  },
  "52:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [],
  },
  "52:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "52:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "52:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "52:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "53:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY", "CCI_I22/PROBLEM"],
  },
  "53:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "53:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "53:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "53:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "53:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "53:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "54:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "54:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "54:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "54:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "54:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "54:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "54:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "55:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "55:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "55:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "55:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "55:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "55:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "55:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "56:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "56:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "56:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "56:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "56:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "56:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "56:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "56:RXE": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "57:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "57:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "57:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "57:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PROBLEM",
    ],
  },
  "57:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "57:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "57:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "57:RXE": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "61:AIS": {
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CCI_I22/CLINICAL_HISTORY", "CCI_I22/PATIENT_VISITS"],
  },
  "61:RGS": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "61:SCH": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "61:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/CLINICAL_HISTORY",
    ],
  },
  "61:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "63:AIS": {
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CCI_I22/CLINICAL_HISTORY", "CCI_I22/PATIENT_VISITS"],
  },
  "63:RGS": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "63:SCH": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "63:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/CLINICAL_HISTORY",
    ],
  },
  "63:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "69:OBR": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCI_I22/PATIENT_VISITS",
    ],
  },
  "69:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "69:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "69:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "69:ROL": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/PATIENT_VISITS",
    ],
  },
  "70:OBR": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCI_I22/PATIENT_VISITS",
    ],
  },
  "70:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "70:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "70:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "70:ROL": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/PATIENT_VISITS",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
