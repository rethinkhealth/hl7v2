// Generated profile automaton for CQU_I19 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  7, 14, 15, 16, 17, 18, 19, 28, 30, 31, 33, 34, 36, 37, 44, 45, 46, 47, 48, 49,
  53, 54, 55, 56, 57, 58, 59, 60,
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
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [29, new Map([["PRD", 44]])],
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
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [32, new Map([["PRD", 45]])],
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
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [35, new Map([["PRD", 46]])],
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
      ["RXR", 47],
    ]),
  ],
  [39, new Map([["RXR", 48]])],
  [40, new Map([["RXR", 49]])],
  [
    41,
    new Map([
      ["CTI", 20],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 21],
      ["VAR", 50],
    ]),
  ],
  [42, new Map([["PR1", 51]])],
  [43, new Map([["AIG", 52]])],
  [
    44,
    new Map([
      ["OBX", 28],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 29],
      ["VAR", 53],
    ]),
  ],
  [
    45,
    new Map([
      ["GOL", 16],
      ["OBX", 31],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 32],
      ["VAR", 54],
    ]),
  ],
  [
    46,
    new Map([
      ["GOL", 16],
      ["OBX", 34],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 35],
      ["VAR", 55],
    ]),
  ],
  [
    47,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 56],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
    ]),
  ],
  [
    48,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 57],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXC", 58],
      ["RXR", 48],
    ]),
  ],
  [
    49,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 59],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXC", 60],
      ["RXE", 39],
      ["RXR", 49],
    ]),
  ],
  [
    50,
    new Map([
      ["CTI", 20],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 21],
      ["VAR", 50],
    ]),
  ],
  [51, new Map([["RF1", 61]])],
  [52, new Map([["AIL", 62]])],
  [
    53,
    new Map([
      ["OBX", 28],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 29],
      ["VAR", 53],
    ]),
  ],
  [
    54,
    new Map([
      ["GOL", 16],
      ["OBX", 31],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 32],
      ["VAR", 54],
    ]),
  ],
  [
    55,
    new Map([
      ["GOL", 16],
      ["OBX", 34],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 35],
      ["VAR", 55],
    ]),
  ],
  [
    56,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 56],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
    ]),
  ],
  [
    57,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 57],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
    ]),
  ],
  [
    58,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 57],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXC", 58],
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
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXE", 39],
    ]),
  ],
  [
    60,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 59],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXC", 60],
      ["RXE", 39],
    ]),
  ],
  [61, new Map([["AL1", 63]])],
  [62, new Map([["AIP", 64]])],
  [63, new Map([["IAM", 65]])],
  [
    64,
    new Map([
      ["AIS", 43],
      ["OBX", 66],
      ["ORC", 8],
      ["PV1", 7],
      ["RGS", 23],
      ["SCH", 9],
    ]),
  ],
  [65, new Map([["ACC", 67]])],
  [
    66,
    new Map([
      ["AIS", 43],
      ["OBX", 66],
      ["ORC", 8],
      ["PV1", 7],
      ["RGS", 23],
      ["SCH", 9],
    ]),
  ],
  [67, new Map([["RMI", 68]])],
  [68, new Map([["DB1", 69]])],
  [69, new Map([["DG1", 70]])],
  [70, new Map([["DRG", 71]])],
  [71, new Map([["PDA", 72]])],
  [
    72,
    new Map([
      ["CTI", 20],
      ["OBR", 22],
      ["OBX", 73],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 21],
    ]),
  ],
  [
    73,
    new Map([
      ["CTI", 20],
      ["OBR", 22],
      ["OBX", 73],
      ["ORC", 8],
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
    groupsOpened: [],
  },
  "15:PTH": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "15:REL": {
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "15:ROL": {
    groupsClosed: [],
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
    groupsOpened: [],
  },
  "16:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "16:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
    groupsOpened: [],
  },
  "16:ROL": {
    groupsClosed: ["CQU_I19/PATHWAY"],
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "17:GOL": {
    groupsClosed: [
      "CQU_I19/PROBLEM",
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
    groupsOpened: [],
  },
  "17:PRB": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "17:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
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
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "17:ROL": {
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY"],
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
  "28:PTH": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "28:REL": {
    groupsClosed: ["CQU_I19/PATHWAY"],
    groupsOpened: [],
  },
  "30:OBX": {
    groupsClosed: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "30:PTH": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "30:REL": {
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "30:ROL": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "31:GOL": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "31:PTH": {
    groupsClosed: ["CQU_I19/GOAL"],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "31:REL": {
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY"],
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
    groupsOpened: [],
  },
  "33:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "33:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
    groupsOpened: [],
  },
  "33:ROL": {
    groupsClosed: ["CQU_I19/PATHWAY"],
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "34:GOL": {
    groupsClosed: ["CQU_I19/PROBLEM"],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "34:PRB": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "34:PTH": {
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PROBLEM"],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "34:REL": {
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY", "CQU_I19/PROBLEM"],
    groupsOpened: [],
  },
  "36:GOL": {
    groupsClosed: [
      "CQU_I19/PROBLEM",
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
    groupsOpened: [],
  },
  "36:PRB": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "36:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
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
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "36:ROL": {
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY"],
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
    groupsClosed: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "44:PTH": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "44:REL": {
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "44:ROL": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "45:GOL": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "45:OBX": {
    groupsClosed: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: [],
  },
  "45:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "45:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
    groupsOpened: [],
  },
  "45:ROL": {
    groupsClosed: ["CQU_I19/PATHWAY"],
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "46:GOL": {
    groupsClosed: [
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "46:OBX": {
    groupsClosed: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "46:PRB": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "46:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "46:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "46:ROL": {
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY"],
    groupsOpened: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "47:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: [],
  },
  "47:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "47:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "47:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "47:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "47:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "47:RXA": {
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY", "CQU_I19/PROBLEM"],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "48:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: [],
  },
  "48:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "48:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "48:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "48:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "48:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "48:RXA": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "49:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "49:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "49:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "49:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "49:PTH": {
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
  "49:REL": {
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
  "49:RXA": {
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
  "49:RXE": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "50:CTI": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "50:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "50:PV1": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "50:ROL": {
    groupsClosed: ["CQU_I19/PATIENT_VISITS"],
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "53:OBX": {
    groupsClosed: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "53:PTH": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "53:REL": {
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "53:ROL": {
    groupsClosed: [],
    groupsOpened: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "54:GOL": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "54:OBX": {
    groupsClosed: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: [],
  },
  "54:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "54:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
    groupsOpened: [],
  },
  "54:ROL": {
    groupsClosed: ["CQU_I19/PATHWAY"],
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "55:GOL": {
    groupsClosed: [
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "55:OBX": {
    groupsClosed: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "55:PRB": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "55:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "55:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "55:ROL": {
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY"],
    groupsOpened: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "56:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: [],
  },
  "56:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "56:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "56:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "56:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "56:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "56:RXA": {
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY", "CQU_I19/PROBLEM"],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "57:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: [],
  },
  "57:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "57:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "57:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "57:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "57:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "57:RXA": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "58:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: [],
  },
  "58:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "58:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "58:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "58:PTH": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/PATHWAY"],
  },
  "58:REL": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [],
  },
  "58:RXA": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "59:CTI": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "59:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "59:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "59:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "59:PTH": {
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
  "59:REL": {
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
  "59:RXA": {
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
  "59:RXE": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
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
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "60:GOL": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/GOAL"],
  },
  "60:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "60:PRB": {
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CQU_I19/PROBLEM"],
  },
  "60:PTH": {
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
  "60:REL": {
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
  "60:RXA": {
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
  "60:RXE": {
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "64:AIS": {
    groupsClosed: ["CQU_I19/CLINICAL_HISTORY", "CQU_I19/PATIENT_VISITS"],
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "64:ORC": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "64:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "64:RGS": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "64:SCH": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
  "66:AIS": {
    groupsClosed: ["CQU_I19/CLINICAL_HISTORY", "CQU_I19/PATIENT_VISITS"],
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "66:ORC": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "66:PV1": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "66:RGS": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "66:SCH": {
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
  },
  "72:CTI": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "72:OBR": {
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
  "72:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "72:PV1": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "72:ROL": {
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
  "73:CTI": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "73:OBR": {
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
  "73:ORC": {
    groupsClosed: [],
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "73:PV1": {
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
  },
  "73:ROL": {
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
