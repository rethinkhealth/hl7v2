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
    groupsOpened: ["CCM_I21/INSURANCE"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
  },
  "10:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
  },
  "10:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCM_I21/INSURANCE"],
  },
  "12:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "12:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [],
  },
  "12:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "12:ROL": {
    groupsOpened: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "13:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "13:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "13:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
  },
  "13:ROL": {
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCM_I21/PATHWAY"],
  },
  "14:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "14:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "14:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [],
  },
  "14:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "14:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "14:ROL": {
    groupsOpened: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY"],
  },
  "15:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
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
  "15:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [],
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
  "16:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PATIENT_VISITS",
      "CCM_I21/PROBLEM",
    ],
  },
  "16:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: ["CCM_I21/PATIENT_VISITS"],
  },
  "16:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: ["CCM_I21/MEDICATION_HISTORY", "CCM_I21/PATIENT_VISITS"],
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
  "17:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "17:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: ["CCM_I21/CLINICAL_HISTORY"],
  },
  "20:AIS": {
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CCM_I21/CLINICAL_HISTORY", "CCM_I21/PATIENT_VISITS"],
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
  "21:IN1": {
    groupsOpened: ["CCM_I21/INSURANCE"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
  },
  "21:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
  },
  "21:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCM_I21/INSURANCE"],
  },
  "22:IN1": {
    groupsOpened: ["CCM_I21/INSURANCE"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
  },
  "22:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
  },
  "22:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCM_I21/INSURANCE"],
  },
  "23:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [],
  },
  "23:REL": {
    groupsOpened: [],
    groupsClosed: ["CCM_I21/PATHWAY"],
  },
  "25:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "25:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [],
  },
  "25:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "25:ROL": {
    groupsOpened: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "26:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [],
  },
  "26:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: ["CCM_I21/GOAL"],
  },
  "26:REL": {
    groupsOpened: [],
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY"],
  },
  "28:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "28:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "28:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
  },
  "28:ROL": {
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCM_I21/PATHWAY"],
  },
  "29:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: ["CCM_I21/PROBLEM"],
  },
  "29:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [],
  },
  "29:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PROBLEM"],
  },
  "29:REL": {
    groupsOpened: [],
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY", "CCM_I21/PROBLEM"],
  },
  "2:IN1": {
    groupsOpened: ["CCM_I21/INSURANCE"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
  },
  "2:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
  },
  "2:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCM_I21/INSURANCE"],
  },
  "31:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "31:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "31:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [],
  },
  "31:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "31:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "31:ROL": {
    groupsOpened: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY"],
  },
  "32:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: ["CCM_I21/MEDICATION_HISTORY", "CCM_I21/PROBLEM"],
  },
  "32:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "32:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: ["CCM_I21/MEDICATION_HISTORY"],
  },
  "32:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/PROBLEM",
    ],
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
  "36:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
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
  "36:ROL": {
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CCM_I21/PATIENT_VISITS"],
  },
  "39:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "39:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [],
  },
  "39:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "39:ROL": {
    groupsOpened: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "40:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [],
  },
  "40:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "40:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "40:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
  },
  "40:ROL": {
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCM_I21/PATHWAY"],
  },
  "41:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "41:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "41:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [],
  },
  "41:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "41:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "41:ROL": {
    groupsOpened: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY"],
  },
  "42:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "42:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/PROBLEM",
    ],
  },
  "42:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "42:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "42:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/PROBLEM",
    ],
  },
  "42:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "42:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY", "CCM_I21/PROBLEM"],
  },
  "43:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "43:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PROBLEM",
    ],
  },
  "43:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "43:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "43:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PROBLEM",
    ],
  },
  "43:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "43:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "44:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "44:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PROBLEM",
    ],
  },
  "44:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "44:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "44:PTH": {
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
  "44:REL": {
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
  "44:RXA": {
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
  "44:RXE": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "45:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "45:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "45:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "45:ROL": {
    groupsOpened: [
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CCM_I21/PATIENT_VISITS"],
  },
  "48:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "48:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [],
  },
  "48:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "48:ROL": {
    groupsOpened: [
      "CCM_I21/PATHWAY/ROLE_PATHWAY",
      "CCM_I21/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "49:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [],
  },
  "49:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "49:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "49:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCM_I21/PATHWAY",
    ],
  },
  "49:ROL": {
    groupsOpened: [
      "CCM_I21/GOAL/ROLE_GOAL",
      "CCM_I21/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCM_I21/PATHWAY"],
  },
  "50:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "50:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "50:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [],
  },
  "50:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "50:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "50:ROL": {
    groupsOpened: [
      "CCM_I21/PROBLEM/ROLE_PROBLEM",
      "CCM_I21/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY"],
  },
  "51:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "51:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/PROBLEM",
    ],
  },
  "51:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "51:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "51:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/PROBLEM",
    ],
  },
  "51:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "51:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: ["CCM_I21/GOAL", "CCM_I21/PATHWAY", "CCM_I21/PROBLEM"],
  },
  "52:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "52:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PROBLEM",
    ],
  },
  "52:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "52:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "52:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PROBLEM",
    ],
  },
  "52:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "52:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "53:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "53:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PROBLEM",
    ],
  },
  "53:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "53:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "53:PTH": {
    groupsOpened: ["CCM_I21/PATHWAY"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PROBLEM",
    ],
  },
  "53:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "53:RXA": {
    groupsOpened: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "54:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "54:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PROBLEM",
    ],
  },
  "54:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "54:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "54:PTH": {
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
  "54:REL": {
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
  "54:RXA": {
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
  "54:RXE": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "55:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "55:GOL": {
    groupsOpened: ["CCM_I21/GOAL"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PROBLEM",
    ],
  },
  "55:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "55:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: [
      "CCM_I21/MEDICATION_HISTORY",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "55:PTH": {
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
  "55:REL": {
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
  "55:RXA": {
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
  "55:RXE": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCM_I21/GOAL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCM_I21/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCM_I21/PATHWAY",
      "CCM_I21/PROBLEM",
    ],
  },
  "59:AIS": {
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CCM_I21/CLINICAL_HISTORY", "CCM_I21/PATIENT_VISITS"],
  },
  "59:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "59:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/CLINICAL_HISTORY",
    ],
  },
  "59:RGS": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "59:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
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
  "5:ORC": {
    groupsOpened: ["CCM_I21/MEDICATION_HISTORY"],
    groupsClosed: ["CCM_I21/PATIENT_VISITS"],
  },
  "5:PRB": {
    groupsOpened: ["CCM_I21/PROBLEM"],
    groupsClosed: ["CCM_I21/MEDICATION_HISTORY", "CCM_I21/PATIENT_VISITS"],
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
  "61:AIS": {
    groupsOpened: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CCM_I21/CLINICAL_HISTORY", "CCM_I21/PATIENT_VISITS"],
  },
  "61:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "61:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCM_I21/CLINICAL_HISTORY",
    ],
  },
  "61:RGS": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "61:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "67:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "67:OBR": {
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
  "67:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "67:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "67:ROL": {
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
  "68:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "68:OBR": {
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
  "68:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "68:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "68:ROL": {
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
  "6:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCM_I21/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCM_I21/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
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
  "7:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
    ],
  },
  "7:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/APPOINTMENT_HISTORY/RESOURCES",
      "CCM_I21/CLINICAL_HISTORY",
    ],
  },
  "7:RGS": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "7:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: [],
  },
  "8:IN1": {
    groupsOpened: ["CCM_I21/INSURANCE"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
  },
  "8:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
  },
  "8:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCM_I21/INSURANCE"],
  },
  "9:IN1": {
    groupsOpened: ["CCM_I21/INSURANCE"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["CCM_I21/CLINICAL_HISTORY"],
    groupsClosed: ["CCM_I21/APPOINTMENT_HISTORY", "CCM_I21/INSURANCE"],
  },
  "9:PV1": {
    groupsOpened: ["CCM_I21/PATIENT_VISITS"],
    groupsClosed: [
      "CCM_I21/APPOINTMENT_HISTORY",
      "CCM_I21/CLINICAL_HISTORY",
      "CCM_I21/INSURANCE",
    ],
  },
  "9:SCH": {
    groupsOpened: ["CCM_I21/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCM_I21/INSURANCE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
