// Generated profile automaton for CCU_I20 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  5, 12, 13, 14, 15, 16, 17, 26, 28, 29, 31, 32, 34, 35, 42, 43, 44, 45, 46, 47,
  51, 52, 53, 54, 55, 56, 57, 58,
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
      ["PTH", 13],
      ["REL", 12],
    ]),
  ],
  [27, new Map([["PRD", 42]])],
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
      ["PTH", 13],
      ["REL", 12],
    ]),
  ],
  [30, new Map([["PRD", 43]])],
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
      ["PTH", 13],
      ["REL", 12],
    ]),
  ],
  [33, new Map([["PRD", 44]])],
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
      ["RXR", 45],
    ]),
  ],
  [37, new Map([["RXR", 46]])],
  [38, new Map([["RXR", 47]])],
  [
    39,
    new Map([
      ["CTI", 18],
      ["ORC", 6],
      ["PV1", 5],
      ["ROL", 19],
      ["VAR", 48],
    ]),
  ],
  [40, new Map([["PR1", 49]])],
  [41, new Map([["AIG", 50]])],
  [
    42,
    new Map([
      ["OBX", 26],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 27],
      ["VAR", 51],
    ]),
  ],
  [
    43,
    new Map([
      ["GOL", 14],
      ["OBX", 29],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 30],
      ["VAR", 52],
    ]),
  ],
  [
    44,
    new Map([
      ["GOL", 14],
      ["OBX", 32],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 33],
      ["VAR", 53],
    ]),
  ],
  [
    45,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 54],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
    ]),
  ],
  [
    46,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 55],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
      ["RXC", 56],
      ["RXR", 46],
    ]),
  ],
  [
    47,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 57],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
      ["RXC", 58],
      ["RXE", 37],
      ["RXR", 47],
    ]),
  ],
  [
    48,
    new Map([
      ["CTI", 18],
      ["ORC", 6],
      ["PV1", 5],
      ["ROL", 19],
      ["VAR", 48],
    ]),
  ],
  [49, new Map([["RF1", 59]])],
  [50, new Map([["AIL", 60]])],
  [
    51,
    new Map([
      ["OBX", 26],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 27],
      ["VAR", 51],
    ]),
  ],
  [
    52,
    new Map([
      ["GOL", 14],
      ["OBX", 29],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 30],
      ["VAR", 52],
    ]),
  ],
  [
    53,
    new Map([
      ["GOL", 14],
      ["OBX", 32],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["ROL", 33],
      ["VAR", 53],
    ]),
  ],
  [
    54,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 54],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
    ]),
  ],
  [
    55,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 55],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
    ]),
  ],
  [
    56,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 55],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
      ["RXC", 56],
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
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
      ["RXE", 37],
    ]),
  ],
  [
    58,
    new Map([
      ["CTI", 35],
      ["GOL", 14],
      ["OBX", 57],
      ["ORC", 16],
      ["PRB", 15],
      ["PTH", 13],
      ["REL", 12],
      ["RXA", 36],
      ["RXC", 58],
      ["RXE", 37],
    ]),
  ],
  [59, new Map([["AL1", 61]])],
  [60, new Map([["AIP", 62]])],
  [61, new Map([["IAM", 63]])],
  [
    62,
    new Map([
      ["AIS", 41],
      ["OBX", 64],
      ["ORC", 6],
      ["PV1", 5],
      ["RGS", 21],
      ["SCH", 7],
    ]),
  ],
  [63, new Map([["ACC", 65]])],
  [
    64,
    new Map([
      ["AIS", 41],
      ["OBX", 64],
      ["ORC", 6],
      ["PV1", 5],
      ["RGS", 21],
      ["SCH", 7],
    ]),
  ],
  [65, new Map([["RMI", 66]])],
  [66, new Map([["DB1", 67]])],
  [67, new Map([["DG1", 68]])],
  [68, new Map([["DRG", 69]])],
  [69, new Map([["PDA", 70]])],
  [
    70,
    new Map([
      ["CTI", 18],
      ["OBR", 20],
      ["OBX", 71],
      ["ORC", 6],
      ["PV1", 5],
      ["ROL", 19],
    ]),
  ],
  [
    71,
    new Map([
      ["CTI", 18],
      ["OBR", 20],
      ["OBX", 71],
      ["ORC", 6],
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
    groupsOpened: [],
  },
  "13:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "13:REL": {
    groupsClosed: [
      "CCU_I20/PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "13:ROL": {
    groupsClosed: [],
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
    groupsOpened: [],
  },
  "14:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "14:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCU_I20/PATHWAY",
    ],
    groupsOpened: [],
  },
  "14:ROL": {
    groupsClosed: ["CCU_I20/PATHWAY"],
    groupsOpened: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "15:GOL": {
    groupsClosed: [
      "CCU_I20/PROBLEM",
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
    groupsOpened: [],
  },
  "15:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "15:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
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
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "15:ROL": {
    groupsClosed: ["CCU_I20/GOAL", "CCU_I20/PATHWAY"],
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
  "26:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "26:REL": {
    groupsClosed: ["CCU_I20/PATHWAY"],
    groupsOpened: [],
  },
  "28:OBX": {
    groupsClosed: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "28:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "28:REL": {
    groupsClosed: [
      "CCU_I20/PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "28:ROL": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "29:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "29:PTH": {
    groupsClosed: ["CCU_I20/GOAL"],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "29:REL": {
    groupsClosed: ["CCU_I20/GOAL", "CCU_I20/PATHWAY"],
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
    groupsOpened: [],
  },
  "31:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "31:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCU_I20/PATHWAY",
    ],
    groupsOpened: [],
  },
  "31:ROL": {
    groupsClosed: ["CCU_I20/PATHWAY"],
    groupsOpened: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "32:GOL": {
    groupsClosed: ["CCU_I20/PROBLEM"],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "32:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "32:PTH": {
    groupsClosed: ["CCU_I20/GOAL", "CCU_I20/PROBLEM"],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "32:REL": {
    groupsClosed: ["CCU_I20/GOAL", "CCU_I20/PATHWAY", "CCU_I20/PROBLEM"],
    groupsOpened: [],
  },
  "34:GOL": {
    groupsClosed: [
      "CCU_I20/PROBLEM",
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
    groupsOpened: [],
  },
  "34:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "34:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
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
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "34:ROL": {
    groupsClosed: ["CCU_I20/GOAL", "CCU_I20/PATHWAY"],
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
    groupsClosed: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "42:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "42:REL": {
    groupsClosed: [
      "CCU_I20/PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "42:ROL": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "43:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "43:OBX": {
    groupsClosed: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: [],
  },
  "43:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "43:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCU_I20/PATHWAY",
    ],
    groupsOpened: [],
  },
  "43:ROL": {
    groupsClosed: ["CCU_I20/PATHWAY"],
    groupsOpened: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "44:GOL": {
    groupsClosed: [
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "44:OBX": {
    groupsClosed: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "44:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "44:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "44:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "44:ROL": {
    groupsClosed: ["CCU_I20/GOAL", "CCU_I20/PATHWAY"],
    groupsOpened: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "45:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: [],
  },
  "45:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "45:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "45:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "45:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "45:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "45:RXA": {
    groupsClosed: ["CCU_I20/GOAL", "CCU_I20/PATHWAY", "CCU_I20/PROBLEM"],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "46:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: [],
  },
  "46:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "46:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "46:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "46:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "46:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "46:RXA": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "47:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "47:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "47:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "47:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "47:PTH": {
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
  "47:REL": {
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
  "47:RXA": {
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
  "47:RXE": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "48:CTI": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "48:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "48:PV1": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "48:ROL": {
    groupsClosed: ["CCU_I20/PATIENT_VISITS"],
    groupsOpened: [
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "51:OBX": {
    groupsClosed: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "51:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "51:REL": {
    groupsClosed: [
      "CCU_I20/PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "51:ROL": {
    groupsClosed: [],
    groupsOpened: [
      "CCU_I20/PATHWAY/ROLE_PATHWAY",
      "CCU_I20/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "52:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "52:OBX": {
    groupsClosed: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: [],
  },
  "52:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "52:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCU_I20/PATHWAY",
    ],
    groupsOpened: [],
  },
  "52:ROL": {
    groupsClosed: ["CCU_I20/PATHWAY"],
    groupsOpened: [
      "CCU_I20/GOAL/ROLE_GOAL",
      "CCU_I20/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "53:GOL": {
    groupsClosed: [
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "53:OBX": {
    groupsClosed: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "53:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "53:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "53:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "53:ROL": {
    groupsClosed: ["CCU_I20/GOAL", "CCU_I20/PATHWAY"],
    groupsOpened: [
      "CCU_I20/PROBLEM/ROLE_PROBLEM",
      "CCU_I20/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "54:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: [],
  },
  "54:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "54:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "54:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "54:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "54:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "54:RXA": {
    groupsClosed: ["CCU_I20/GOAL", "CCU_I20/PATHWAY", "CCU_I20/PROBLEM"],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "55:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: [],
  },
  "55:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "55:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "55:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "55:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "55:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "55:RXA": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "56:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: [],
  },
  "56:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "56:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "56:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "56:PTH": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/PATHWAY"],
  },
  "56:REL": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [],
  },
  "56:RXA": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "57:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "57:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "57:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "57:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "57:PTH": {
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
  "57:REL": {
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
  "57:RXA": {
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
  "57:RXE": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "58:CTI": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "58:GOL": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/GOAL"],
  },
  "58:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY"],
  },
  "58:PRB": {
    groupsClosed: [
      "CCU_I20/MEDICATION_HISTORY",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCU_I20/PROBLEM"],
  },
  "58:PTH": {
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
  "58:REL": {
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
  "58:RXA": {
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
  "58:RXE": {
    groupsClosed: [
      "CCU_I20/GOAL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCU_I20/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCU_I20/PATHWAY",
      "CCU_I20/PROBLEM",
    ],
    groupsOpened: ["CCU_I20/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
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
  "62:AIS": {
    groupsClosed: ["CCU_I20/CLINICAL_HISTORY", "CCU_I20/PATIENT_VISITS"],
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "62:ORC": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "62:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "62:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "62:SCH": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY"],
  },
  "64:AIS": {
    groupsClosed: ["CCU_I20/CLINICAL_HISTORY", "CCU_I20/PATIENT_VISITS"],
    groupsOpened: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "64:ORC": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "64:PV1": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCU_I20/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "64:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "64:SCH": {
    groupsClosed: [
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCU_I20/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
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
  "70:CTI": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "70:OBR": {
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
  "70:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "70:PV1": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "70:ROL": {
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
  "71:CTI": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "71:OBR": {
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
  "71:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCU_I20/CLINICAL_HISTORY"],
  },
  "71:PV1": {
    groupsClosed: [
      "CCU_I20/CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCU_I20/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCU_I20/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCU_I20/PATIENT_VISITS"],
  },
  "71:ROL": {
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
