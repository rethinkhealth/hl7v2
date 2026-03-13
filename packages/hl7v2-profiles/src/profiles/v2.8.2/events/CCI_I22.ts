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
      "CCI_I22/PATHWAY/PATHWAY_OBSERVATION",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "14:OBX": {
    groupsOpened: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
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
    groupsClosed: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "15:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [],
  },
  "15:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
  },
  "15:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "15:OBX": {
    groupsOpened: ["CCI_I22/GOAL/GOAL_OBSERVATION"],
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
    groupsClosed: ["CCI_I22/GOAL/GOAL_OBSERVATION", "CCI_I22/PATHWAY"],
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
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "16:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "16:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "16:OBX": {
    groupsOpened: ["CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
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
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
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
  "25:OBX": {
    groupsOpened: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [],
  },
  "25:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [],
  },
  "25:REL": {
    groupsOpened: [],
    groupsClosed: ["CCI_I22/PATHWAY", "CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "27:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [],
  },
  "27:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/PATHWAY",
      "CCI_I22/PATHWAY/PATHWAY_OBSERVATION",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "27:OBX": {
    groupsOpened: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
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
    groupsClosed: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "28:OBX": {
    groupsOpened: ["CCI_I22/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "28:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [],
  },
  "28:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/PATHWAY",
    ],
  },
  "28:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/GOAL/GOAL_OBSERVATION"],
  },
  "30:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [],
  },
  "30:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
  },
  "30:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "30:OBX": {
    groupsOpened: ["CCI_I22/GOAL/GOAL_OBSERVATION"],
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
    groupsClosed: ["CCI_I22/GOAL/GOAL_OBSERVATION", "CCI_I22/PATHWAY"],
  },
  "31:OBX": {
    groupsOpened: ["CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "31:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [],
  },
  "31:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "31:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "31:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: ["CCI_I22/PROBLEM", "CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
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
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "33:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "33:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "33:OBX": {
    groupsOpened: ["CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
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
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
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
  "41:OBX": {
    groupsOpened: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [],
  },
  "41:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [],
  },
  "41:REL": {
    groupsOpened: [],
    groupsClosed: ["CCI_I22/PATHWAY", "CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "42:ROL": {
    groupsOpened: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "42:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [],
  },
  "42:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/PATHWAY",
      "CCI_I22/PATHWAY/PATHWAY_OBSERVATION",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "42:OBX": {
    groupsOpened: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "43:OBX": {
    groupsOpened: ["CCI_I22/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "43:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [],
  },
  "43:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/PATHWAY",
    ],
  },
  "43:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: ["CCI_I22/GOAL", "CCI_I22/GOAL/GOAL_OBSERVATION"],
  },
  "44:ROL": {
    groupsOpened: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCI_I22/GOAL/GOAL_OBSERVATION", "CCI_I22/PATHWAY"],
  },
  "44:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [],
  },
  "44:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
  },
  "44:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "44:OBX": {
    groupsOpened: ["CCI_I22/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "45:OBX": {
    groupsOpened: ["CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "45:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [],
  },
  "45:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "45:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "45:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: ["CCI_I22/PROBLEM", "CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "46:ROL": {
    groupsOpened: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "46:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [],
  },
  "46:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "46:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "46:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "46:OBX": {
    groupsOpened: ["CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "47:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "47:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "47:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "47:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "47:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "47:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "47:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "47:OBX": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "48:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "48:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "48:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "48:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "48:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "48:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "48:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "48:OBX": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "49:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "49:REL": {
    groupsOpened: [],
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
  },
  "49:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "49:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "49:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "49:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "49:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "49:RXE": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "49:OBX": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "50:ROL": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CCI_I22/PATIENT_VISITS"],
  },
  "50:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "50:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "50:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "53:ROL": {
    groupsOpened: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "53:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [],
  },
  "53:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/PATHWAY",
      "CCI_I22/PATHWAY/PATHWAY_OBSERVATION",
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "53:OBX": {
    groupsOpened: ["CCI_I22/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CCI_I22/PATHWAY/ROLE_PATHWAY",
      "CCI_I22/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "54:ROL": {
    groupsOpened: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCI_I22/GOAL/GOAL_OBSERVATION", "CCI_I22/PATHWAY"],
  },
  "54:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [],
  },
  "54:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCI_I22/PATHWAY",
    ],
  },
  "54:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/GOAL/GOAL_OBSERVATION",
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "54:OBX": {
    groupsOpened: ["CCI_I22/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CCI_I22/GOAL/ROLE_GOAL",
      "CCI_I22/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "55:ROL": {
    groupsOpened: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "55:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [],
  },
  "55:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "55:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "55:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/PROBLEM",
      "CCI_I22/PROBLEM/PROBLEM_OBSERVATION",
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "55:OBX": {
    groupsOpened: ["CCI_I22/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "CCI_I22/PROBLEM/ROLE_PROBLEM",
      "CCI_I22/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "56:OBX": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "56:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "56:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "56:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
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
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "56:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "56:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "56:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "57:OBX": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "57:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "57:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
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
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "57:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "57:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "57:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "57:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "58:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "58:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "58:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "58:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "58:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "58:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "58:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "58:OBX": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "59:OBX": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "59:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "59:REL": {
    groupsOpened: [],
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
  },
  "59:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "59:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "59:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "59:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "59:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "59:RXE": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "60:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "60:REL": {
    groupsOpened: [],
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
  },
  "60:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "60:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "60:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "60:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "60:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "60:RXE": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "60:OBX": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "63:OBX": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "63:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "63:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "63:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "63:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "63:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "63:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "63:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "64:OBX": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "64:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "64:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "64:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "64:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "64:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "64:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "64:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "65:OBX": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "65:ORC": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "65:REL": {
    groupsOpened: [],
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
  },
  "65:PTH": {
    groupsOpened: ["CCI_I22/PATHWAY"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "65:GOL": {
    groupsOpened: ["CCI_I22/GOAL"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PROBLEM",
    ],
  },
  "65:PRB": {
    groupsOpened: ["CCI_I22/PROBLEM"],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "65:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "65:RXA": {
    groupsOpened: [
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "65:RXE": {
    groupsOpened: ["CCI_I22/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCI_I22/GOAL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCI_I22/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCI_I22/PATHWAY",
      "CCI_I22/PROBLEM",
    ],
  },
  "67:AIS": {
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/PATIENT_VISITS",
    ],
  },
  "67:RGS": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "67:SCH": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "67:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY",
    ],
  },
  "67:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "67:OBX": {
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "69:OBX": {
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "69:AIS": {
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/PATIENT_VISITS",
    ],
  },
  "69:RGS": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "69:SCH": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "69:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY",
    ],
  },
  "69:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "71:OBX": {
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "71:AIS": {
    groupsOpened: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/PATIENT_VISITS",
    ],
  },
  "71:RGS": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "71:SCH": {
    groupsOpened: ["CCI_I22/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "71:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY",
    ],
  },
  "71:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCI_I22/APPOINTMENT_HISTORY",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCI_I22/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "76:OBR": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCI_I22/PATIENT_VISITS",
    ],
  },
  "76:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "76:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "76:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "76:ROL": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/PATIENT_VISITS",
    ],
  },
  "76:OBX": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "77:OBX": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "77:OBR": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCI_I22/PATIENT_VISITS",
    ],
  },
  "77:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "77:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "77:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "77:ROL": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/PATIENT_VISITS",
    ],
  },
  "78:OBX": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "78:OBR": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCI_I22/PATIENT_VISITS",
    ],
  },
  "78:ORC": {
    groupsOpened: ["CCI_I22/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "78:PV1": {
    groupsOpened: ["CCI_I22/PATIENT_VISITS"],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "78:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "78:ROL": {
    groupsOpened: [
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCI_I22/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCI_I22/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCI_I22/PATIENT_VISITS",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
