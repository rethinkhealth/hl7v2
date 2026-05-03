// Generated profile automaton for CCM_I21 (v2.7)

export const start = 0;
export const finals = new Set<number>([
  5, 11, 12, 13, 14, 15, 16, 23, 25, 26, 28, 29, 31, 32, 39, 40, 41, 42, 43, 44,
  48, 49, 50, 51, 52, 53, 54, 55,
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
      ["PTH", 12],
      ["REL", 11],
    ]),
  ],
  [24, new Map([["PRD", 39]])],
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
      ["PTH", 12],
      ["REL", 11],
    ]),
  ],
  [27, new Map([["PRD", 40]])],
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
      ["PTH", 12],
      ["REL", 11],
    ]),
  ],
  [30, new Map([["PRD", 41]])],
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
      ["RXR", 42],
    ]),
  ],
  [34, new Map([["RXR", 43]])],
  [35, new Map([["RXR", 44]])],
  [
    36,
    new Map([
      ["CTI", 17],
      ["ORC", 6],
      ["PV1", 5],
      ["ROL", 18],
      ["VAR", 45],
    ]),
  ],
  [37, new Map([["PR1", 46]])],
  [38, new Map([["AIG", 47]])],
  [
    39,
    new Map([
      ["OBX", 23],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 24],
      ["VAR", 48],
    ]),
  ],
  [
    40,
    new Map([
      ["GOL", 13],
      ["OBX", 26],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 27],
      ["VAR", 49],
    ]),
  ],
  [
    41,
    new Map([
      ["GOL", 13],
      ["OBX", 29],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 30],
      ["VAR", 50],
    ]),
  ],
  [
    42,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 51],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
    ]),
  ],
  [
    43,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 52],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
      ["RXC", 53],
      ["RXR", 43],
    ]),
  ],
  [
    44,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 54],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
      ["RXC", 55],
      ["RXE", 34],
      ["RXR", 44],
    ]),
  ],
  [
    45,
    new Map([
      ["CTI", 17],
      ["ORC", 6],
      ["PV1", 5],
      ["ROL", 18],
      ["VAR", 45],
    ]),
  ],
  [46, new Map([["RF1", 56]])],
  [47, new Map([["AIL", 57]])],
  [
    48,
    new Map([
      ["OBX", 23],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 24],
      ["VAR", 48],
    ]),
  ],
  [
    49,
    new Map([
      ["GOL", 13],
      ["OBX", 26],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 27],
      ["VAR", 49],
    ]),
  ],
  [
    50,
    new Map([
      ["GOL", 13],
      ["OBX", 29],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["ROL", 30],
      ["VAR", 50],
    ]),
  ],
  [
    51,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 51],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
    ]),
  ],
  [
    52,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 52],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
    ]),
  ],
  [
    53,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 52],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
      ["RXC", 53],
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
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
      ["RXE", 34],
    ]),
  ],
  [
    55,
    new Map([
      ["CTI", 32],
      ["GOL", 13],
      ["OBX", 54],
      ["ORC", 15],
      ["PRB", 14],
      ["PTH", 12],
      ["REL", 11],
      ["RXA", 33],
      ["RXC", 55],
      ["RXE", 34],
    ]),
  ],
  [56, new Map([["AL1", 58]])],
  [57, new Map([["AIP", 59]])],
  [58, new Map([["IAM", 60]])],
  [
    59,
    new Map([
      ["AIS", 38],
      ["OBX", 61],
      ["ORC", 6],
      ["PV1", 5],
      ["RGS", 20],
      ["SCH", 7],
    ]),
  ],
  [60, new Map([["ACC", 62]])],
  [
    61,
    new Map([
      ["AIS", 38],
      ["OBX", 61],
      ["ORC", 6],
      ["PV1", 5],
      ["RGS", 20],
      ["SCH", 7],
    ]),
  ],
  [62, new Map([["RMI", 63]])],
  [63, new Map([["DB1", 64]])],
  [64, new Map([["DG1", 65]])],
  [65, new Map([["DRG", 66]])],
  [66, new Map([["PDA", 67]])],
  [
    67,
    new Map([
      ["CTI", 17],
      ["OBR", 19],
      ["OBX", 68],
      ["ORC", 6],
      ["PV1", 5],
      ["ROL", 18],
    ]),
  ],
  [
    68,
    new Map([
      ["CTI", 17],
      ["OBR", 19],
      ["OBX", 68],
      ["ORC", 6],
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
    groupsOpened: [],
  },
  "12:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "12:REL": {
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "12:ROL": {
    groupsClosed: [],
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
    groupsOpened: [],
  },
  "13:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "13:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
    groupsOpened: [],
  },
  "13:ROL": {
    groupsClosed: ["CCM_I21/PATHWAY"],
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "14:GOL": {
    groupsClosed: [
      "CCM_I21/PROBLEM",
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
    groupsOpened: [],
  },
  "14:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "14:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
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
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "14:ROL": {
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY"],
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
  "23:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "23:REL": {
    groupsClosed: ["CCM_I21/PATHWAY"],
    groupsOpened: [],
  },
  "25:OBX": {
    groupsClosed: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "25:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "25:REL": {
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "25:ROL": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "26:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "26:PTH": {
    groupsClosed: ["CCM_I21/GOAL"],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "26:REL": {
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY"],
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
    groupsOpened: [],
  },
  "28:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "28:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
    groupsOpened: [],
  },
  "28:ROL": {
    groupsClosed: ["CCM_I21/PATHWAY"],
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "29:GOL": {
    groupsClosed: ["CCM_I21/PROBLEM"],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "29:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "29:PTH": {
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PROBLEM"],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "29:REL": {
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY", "CCM_I21/PROBLEM"],
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
    groupsOpened: [],
  },
  "31:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "31:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
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
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "31:ROL": {
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY"],
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
    groupsClosed: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "39:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "39:REL": {
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "39:ROL": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "40:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "40:OBX": {
    groupsClosed: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: [],
  },
  "40:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "40:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
    groupsOpened: [],
  },
  "40:ROL": {
    groupsClosed: ["CCM_I21/PATHWAY"],
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "41:GOL": {
    groupsClosed: [
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "41:OBX": {
    groupsClosed: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "41:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "41:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "41:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "41:ROL": {
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY"],
    groupsOpened: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "42:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: [],
  },
  "42:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "42:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "42:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "42:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "42:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "42:RXA": {
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY", "CCM_I21/PROBLEM"],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "43:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: [],
  },
  "43:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "43:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "43:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "43:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "43:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "43:RXA": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "44:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "44:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "44:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "44:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "44:PTH": {
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
  "44:REL": {
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
  "44:RXA": {
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
  "44:RXE": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "45:CTI": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "45:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "45:PV1": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "45:ROL": {
    groupsClosed: ["CCM_I21/PATIENT_VISITS"],
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "48:OBX": {
    groupsClosed: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "48:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "48:REL": {
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "48:ROL": {
    groupsClosed: [],
    groupsOpened: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "49:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "49:OBX": {
    groupsClosed: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: [],
  },
  "49:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "49:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
    groupsOpened: [],
  },
  "49:ROL": {
    groupsClosed: ["CCM_I21/PATHWAY"],
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "50:GOL": {
    groupsClosed: [
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "50:OBX": {
    groupsClosed: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "50:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "50:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "50:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "50:ROL": {
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY"],
    groupsOpened: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "51:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: [],
  },
  "51:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "51:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "51:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "51:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "51:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "51:RXA": {
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY", "CCM_I21/PROBLEM"],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "52:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: [],
  },
  "52:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "52:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "52:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "52:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "52:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "52:RXA": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "53:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: [],
  },
  "53:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "53:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "53:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "53:PTH": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/PATHWAY"],
  },
  "53:REL": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [],
  },
  "53:RXA": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "54:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "54:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "54:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "54:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "54:PTH": {
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
  "54:REL": {
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
  "54:RXA": {
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
  "54:RXE": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "55:CTI": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "55:GOL": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/GOAL"],
  },
  "55:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "55:PRB": {
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCM_I21/PROBLEM"],
  },
  "55:PTH": {
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
  "55:REL": {
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
  "55:RXA": {
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
  "55:RXE": {
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "59:AIS": {
    groupsClosed: ["CCM_I21/CLINICAL_HISTORY", "CCM_I21/PATIENT_VISITS"],
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "59:ORC": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "59:PV1": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "59:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "59:SCH": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
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
  "61:AIS": {
    groupsClosed: ["CCM_I21/CLINICAL_HISTORY", "CCM_I21/PATIENT_VISITS"],
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "61:ORC": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "61:PV1": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "61:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "61:SCH": {
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
  },
  "67:CTI": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "67:OBR": {
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
  "67:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "67:PV1": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "67:ROL": {
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
  "68:CTI": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "68:OBR": {
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
  "68:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "68:PV1": {
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
  },
  "68:ROL": {
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
