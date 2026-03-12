// Generated profile automaton for CQU_I19 (v2.7)

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
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: ["CQU_I19/APPOINTMENT_HISTORY", "CQU_I19/INSURANCE"],
  },
  "10:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
    ],
  },
  "10:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: ["CQU_I19/INSURANCE"],
  },
  "11:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: ["CQU_I19/APPOINTMENT_HISTORY", "CQU_I19/INSURANCE"],
  },
  "11:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
    ],
  },
  "11:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: ["CQU_I19/INSURANCE"],
  },
  "12:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: ["CQU_I19/PATIENT"],
  },
  "12:NK1": {
    groupsOpened: [],
    groupsClosed: ["CQU_I19/PATIENT"],
  },
  "12:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
    ],
  },
  "12:PID": {
    groupsOpened: ["CQU_I19/PATIENT"],
    groupsClosed: [],
  },
  "12:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
    ],
  },
  "12:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: ["CQU_I19/INSURANCE", "CQU_I19/PATIENT"],
  },
  "13:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
  },
  "13:NK1": {
    groupsOpened: [],
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
  },
  "13:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
  },
  "13:PID": {
    groupsOpened: ["CQU_I19/PATIENT"],
    groupsClosed: ["CQU_I19/PROVIDER_CONTACT"],
  },
  "13:PRD": {
    groupsOpened: ["CQU_I19/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "13:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
  },
  "13:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
  },
  "15:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "15:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [],
  },
  "15:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "15:ROL": {
    groupsOpened: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "16:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "16:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "16:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
  },
  "16:ROL": {
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CQU_I19/PATHWAY"],
  },
  "17:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "17:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "17:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [],
  },
  "17:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "17:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "17:ROL": {
    groupsOpened: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY"],
  },
  "18:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "18:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "18:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "18:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "18:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "18:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "18:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "18:RXE": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "18:RXO": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "19:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATIENT_VISITS",
      "CQU_I19/PROBLEM",
    ],
  },
  "19:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: ["CQU_I19/PATIENT_VISITS"],
  },
  "19:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: ["CQU_I19/MEDICATION_HISTORY", "CQU_I19/PATIENT_VISITS"],
  },
  "19:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATIENT_VISITS",
      "CQU_I19/PROBLEM",
    ],
  },
  "19:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [],
  },
  "19:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATHWAY",
      "CQU_I19/PATIENT_VISITS",
      "CQU_I19/PROBLEM",
    ],
  },
  "20:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "20:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: ["CQU_I19/CLINICAL_HISTORY"],
  },
  "23:AIS": {
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CQU_I19/CLINICAL_HISTORY", "CQU_I19/PATIENT_VISITS"],
  },
  "23:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "23:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/CLINICAL_HISTORY",
    ],
  },
  "23:RGS": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "23:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "24:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: ["CQU_I19/APPOINTMENT_HISTORY", "CQU_I19/INSURANCE"],
  },
  "24:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
    ],
  },
  "24:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: ["CQU_I19/INSURANCE"],
  },
  "25:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: ["CQU_I19/APPOINTMENT_HISTORY", "CQU_I19/INSURANCE"],
  },
  "25:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
    ],
  },
  "25:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: ["CQU_I19/INSURANCE"],
  },
  "26:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: ["CQU_I19/PATIENT"],
  },
  "26:NK1": {
    groupsOpened: [],
    groupsClosed: ["CQU_I19/PATIENT"],
  },
  "26:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
    ],
  },
  "26:PID": {
    groupsOpened: ["CQU_I19/PATIENT"],
    groupsClosed: [],
  },
  "26:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
    ],
  },
  "26:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: ["CQU_I19/INSURANCE", "CQU_I19/PATIENT"],
  },
  "27:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
  },
  "27:NK1": {
    groupsOpened: [],
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
  },
  "27:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
  },
  "27:PID": {
    groupsOpened: ["CQU_I19/PATIENT"],
    groupsClosed: ["CQU_I19/PROVIDER_CONTACT"],
  },
  "27:PRD": {
    groupsOpened: ["CQU_I19/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "27:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
  },
  "27:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
  },
  "28:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [],
  },
  "28:REL": {
    groupsOpened: [],
    groupsClosed: ["CQU_I19/PATHWAY"],
  },
  "30:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "30:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [],
  },
  "30:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "30:ROL": {
    groupsOpened: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "31:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [],
  },
  "31:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: ["CQU_I19/GOAL"],
  },
  "31:REL": {
    groupsOpened: [],
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY"],
  },
  "33:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [],
  },
  "33:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "33:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "33:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
  },
  "33:ROL": {
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CQU_I19/PATHWAY"],
  },
  "34:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: ["CQU_I19/PROBLEM"],
  },
  "34:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [],
  },
  "34:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PROBLEM"],
  },
  "34:REL": {
    groupsOpened: [],
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY", "CQU_I19/PROBLEM"],
  },
  "36:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "36:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "36:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [],
  },
  "36:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "36:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "36:ROL": {
    groupsOpened: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY"],
  },
  "37:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: ["CQU_I19/MEDICATION_HISTORY", "CQU_I19/PROBLEM"],
  },
  "37:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "37:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "37:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PROBLEM",
    ],
  },
  "37:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "41:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "41:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "41:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "41:ROL": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CQU_I19/PATIENT_VISITS"],
  },
  "44:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "44:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [],
  },
  "44:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "44:ROL": {
    groupsOpened: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "45:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [],
  },
  "45:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "45:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "45:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
  },
  "45:ROL": {
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CQU_I19/PATHWAY"],
  },
  "46:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "46:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "46:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [],
  },
  "46:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "46:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "46:ROL": {
    groupsOpened: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY"],
  },
  "47:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "47:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "47:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "47:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "47:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "47:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "47:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY", "CQU_I19/PROBLEM"],
  },
  "48:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "48:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "48:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "48:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "48:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "48:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "48:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "49:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "49:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "49:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "49:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "49:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "49:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "49:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "49:RXE": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "50:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "50:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "50:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "50:ROL": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CQU_I19/PATIENT_VISITS"],
  },
  "53:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "53:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [],
  },
  "53:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "53:ROL": {
    groupsOpened: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "54:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [],
  },
  "54:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "54:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "54:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
  },
  "54:ROL": {
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CQU_I19/PATHWAY"],
  },
  "55:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "55:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "55:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [],
  },
  "55:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "55:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "55:ROL": {
    groupsOpened: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY"],
  },
  "56:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "56:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "56:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "56:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "56:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "56:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "56:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/PATHWAY", "CQU_I19/PROBLEM"],
  },
  "57:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "57:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "57:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "57:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "57:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "57:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "57:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "58:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "58:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "58:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "58:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "58:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "58:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "58:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "59:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "59:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "59:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "59:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "59:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "59:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "59:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "59:RXE": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "5:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
  },
  "5:NK1": {
    groupsOpened: [],
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
  },
  "5:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
  },
  "5:PID": {
    groupsOpened: ["CQU_I19/PATIENT"],
    groupsClosed: ["CQU_I19/PROVIDER_CONTACT"],
  },
  "5:PRD": {
    groupsOpened: ["CQU_I19/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "5:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
  },
  "5:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
      "CQU_I19/PROVIDER_CONTACT",
    ],
  },
  "60:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "60:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "60:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "60:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "60:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PROBLEM",
    ],
  },
  "60:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "60:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "60:RXE": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "64:AIS": {
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CQU_I19/CLINICAL_HISTORY", "CQU_I19/PATIENT_VISITS"],
  },
  "64:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "64:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/CLINICAL_HISTORY",
    ],
  },
  "64:RGS": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "64:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "66:AIS": {
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CQU_I19/CLINICAL_HISTORY", "CQU_I19/PATIENT_VISITS"],
  },
  "66:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "66:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/CLINICAL_HISTORY",
    ],
  },
  "66:RGS": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "66:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "72:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "72:OBR": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CQU_I19/PATIENT_VISITS",
    ],
  },
  "72:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "72:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "72:ROL": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/PATIENT_VISITS",
    ],
  },
  "73:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "73:OBR": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CQU_I19/PATIENT_VISITS",
    ],
  },
  "73:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "73:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "73:ROL": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/PATIENT_VISITS",
    ],
  },
  "7:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATIENT_VISITS",
      "CQU_I19/PROBLEM",
    ],
  },
  "7:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: ["CQU_I19/PATIENT_VISITS"],
  },
  "7:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: ["CQU_I19/MEDICATION_HISTORY", "CQU_I19/PATIENT_VISITS"],
  },
  "7:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATIENT_VISITS",
      "CQU_I19/PROBLEM",
    ],
  },
  "7:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [],
  },
  "7:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATHWAY",
      "CQU_I19/PATIENT_VISITS",
      "CQU_I19/PROBLEM",
    ],
  },
  "8:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "8:OBR": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CQU_I19/PATIENT_VISITS",
    ],
  },
  "8:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "8:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "8:ROL": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/PATIENT_VISITS",
    ],
  },
  "9:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
    ],
  },
  "9:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/CLINICAL_HISTORY",
    ],
  },
  "9:RGS": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "9:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
