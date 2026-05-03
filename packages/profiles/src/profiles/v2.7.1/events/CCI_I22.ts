// Generated profile automaton for CCI_I22 (v2.7.1)

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
    groupsOpened: [],
  },
  "14:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "14:REL": {
    groupsClosed: [
      "CCI_I22/PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "14:ROL": {
    groupsClosed: [],
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
    groupsOpened: [],
  },
  "15:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "15:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
    groupsOpened: [],
  },
  "15:ROL": {
    groupsClosed: ["CCI_I22/PATHWAY"],
    groupsOpened: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "16:GOL": {
    groupsClosed: [
      "CCI_I22/PROBLEM",
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
    groupsOpened: [],
  },
  "16:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "16:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
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
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "16:ROL": {
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY"],
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
  "25:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "25:REL": {
    groupsClosed: ["CCI_I22/PATHWAY"],
    groupsOpened: [],
  },
  "27:OBX": {
    groupsClosed: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "27:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "27:REL": {
    groupsClosed: [
      "CCI_I22/PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "27:ROL": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "28:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "28:PTH": {
    groupsClosed: ["CCI_I22/GOAL"],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "28:REL": {
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY"],
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
    groupsOpened: [],
  },
  "30:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "30:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
    groupsOpened: [],
  },
  "30:ROL": {
    groupsClosed: ["CCI_I22/PATHWAY"],
    groupsOpened: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "31:GOL": {
    groupsClosed: ["CCI_I22/PROBLEM"],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "31:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "31:PTH": {
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PROBLEM"],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "31:REL": {
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY", "CCI_I22/PROBLEM"],
    groupsOpened: [],
  },
  "33:GOL": {
    groupsClosed: [
      "CCI_I22/PROBLEM",
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
    groupsOpened: [],
  },
  "33:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "33:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
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
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "33:ROL": {
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY"],
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
    groupsClosed: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "41:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "41:REL": {
    groupsClosed: [
      "CCI_I22/PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "41:ROL": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "42:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "42:OBX": {
    groupsClosed: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: [],
  },
  "42:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "42:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
    groupsOpened: [],
  },
  "42:ROL": {
    groupsClosed: ["CCI_I22/PATHWAY"],
    groupsOpened: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "43:GOL": {
    groupsClosed: [
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "43:OBX": {
    groupsClosed: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "43:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "43:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "43:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "43:ROL": {
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY"],
    groupsOpened: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "44:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: [],
  },
  "44:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "44:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "44:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "44:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "44:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "44:RXA": {
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY", "CCI_I22/PROBLEM"],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "45:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: [],
  },
  "45:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "45:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "45:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "45:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "45:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "45:RXA": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "46:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "46:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "46:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "46:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "46:PTH": {
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
  "46:REL": {
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
  "46:RXA": {
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
  "46:RXE": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "47:CTI": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "47:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "47:PV1": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "47:ROL": {
    groupsClosed: ["CCI_I22/PATIENT_VISITS"],
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "50:OBX": {
    groupsClosed: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "50:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "50:REL": {
    groupsClosed: [
      "CCI_I22/PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "50:ROL": {
    groupsClosed: [],
    groupsOpened: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "51:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "51:OBX": {
    groupsClosed: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: [],
  },
  "51:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "51:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
    groupsOpened: [],
  },
  "51:ROL": {
    groupsClosed: ["CCI_I22/PATHWAY"],
    groupsOpened: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "52:GOL": {
    groupsClosed: [
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "52:OBX": {
    groupsClosed: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "52:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "52:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "52:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "52:ROL": {
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY"],
    groupsOpened: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "53:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: [],
  },
  "53:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "53:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "53:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "53:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "53:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "53:RXA": {
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/PATHWAY", "CCI_I22/PROBLEM"],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "54:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: [],
  },
  "54:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "54:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "54:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "54:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "54:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "54:RXA": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "55:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: [],
  },
  "55:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "55:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "55:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "55:PTH": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/PATHWAY"],
  },
  "55:REL": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [],
  },
  "55:RXA": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "56:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "56:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "56:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "56:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "56:PTH": {
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
  "56:REL": {
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
  "56:RXA": {
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
  "56:RXE": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "57:CTI": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "57:GOL": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/PROBLEM",
    ],
    groupsOpened: ["CCI_I22/GOAL"],
  },
  "57:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
  },
  "57:PRB": {
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCI_I22/PROBLEM"],
  },
  "57:PTH": {
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
  "57:REL": {
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
  "57:RXA": {
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
  "57:RXE": {
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
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
  "61:AIS": {
    groupsClosed: ["CCI_I22/CLINICAL_HISTORY", "CCI_I22/PATIENT_VISITS"],
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "61:ORC": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "61:PV1": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "61:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "61:SCH": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
  },
  "63:AIS": {
    groupsClosed: ["CCI_I22/CLINICAL_HISTORY", "CCI_I22/PATIENT_VISITS"],
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "63:ORC": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "63:PV1": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "63:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "63:SCH": {
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
  },
  "69:CTI": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "69:OBR": {
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
  "69:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "69:PV1": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "69:ROL": {
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
  "70:CTI": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "70:OBR": {
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
  "70:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
  },
  "70:PV1": {
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
  },
  "70:ROL": {
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
