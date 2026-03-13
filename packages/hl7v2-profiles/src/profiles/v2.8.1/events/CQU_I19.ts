// Generated profile automaton for CQU_I19 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([
  7, 14, 15, 16, 17, 18, 19, 28, 30, 31, 33, 34, 36, 37, 44, 45, 46, 47, 48, 49,
  50, 51, 52, 56, 57, 58, 59, 60, 61, 62, 63, 66, 67, 68,
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
      ["PRT", 44],
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [29, new Map([["PRD", 45]])],
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
      ["PRT", 46],
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [32, new Map([["PRD", 47]])],
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
      ["PRT", 48],
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [35, new Map([["PRD", 49]])],
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
      ["RXR", 50],
    ]),
  ],
  [39, new Map([["RXR", 51]])],
  [40, new Map([["RXR", 52]])],
  [
    41,
    new Map([
      ["CTI", 20],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 21],
      ["VAR", 53],
    ]),
  ],
  [42, new Map([["PR1", 54]])],
  [43, new Map([["AIG", 55]])],
  [
    44,
    new Map([
      ["OBX", 28],
      ["PRT", 44],
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [
    45,
    new Map([
      ["OBX", 28],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 29],
      ["VAR", 56],
    ]),
  ],
  [
    46,
    new Map([
      ["GOL", 16],
      ["OBX", 31],
      ["PRT", 46],
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [
    47,
    new Map([
      ["GOL", 16],
      ["OBX", 31],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 32],
      ["VAR", 57],
    ]),
  ],
  [
    48,
    new Map([
      ["GOL", 16],
      ["OBX", 34],
      ["PRB", 17],
      ["PRT", 48],
      ["PTH", 15],
      ["REL", 14],
    ]),
  ],
  [
    49,
    new Map([
      ["GOL", 16],
      ["OBX", 34],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 35],
      ["VAR", 58],
    ]),
  ],
  [
    50,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 59],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
    ]),
  ],
  [
    51,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 60],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXC", 61],
      ["RXR", 51],
    ]),
  ],
  [
    52,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 62],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXC", 63],
      ["RXE", 39],
      ["RXR", 52],
    ]),
  ],
  [
    53,
    new Map([
      ["CTI", 20],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 21],
      ["VAR", 53],
    ]),
  ],
  [54, new Map([["RF1", 64]])],
  [55, new Map([["AIL", 65]])],
  [
    56,
    new Map([
      ["OBX", 28],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 29],
      ["VAR", 56],
    ]),
  ],
  [
    57,
    new Map([
      ["GOL", 16],
      ["OBX", 31],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 32],
      ["VAR", 57],
    ]),
  ],
  [
    58,
    new Map([
      ["GOL", 16],
      ["OBX", 34],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["ROL", 35],
      ["VAR", 58],
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
      ["PRT", 66],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
    ]),
  ],
  [
    60,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 60],
      ["ORC", 18],
      ["PRB", 17],
      ["PRT", 67],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
    ]),
  ],
  [
    61,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 60],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXC", 61],
    ]),
  ],
  [
    62,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 62],
      ["ORC", 18],
      ["PRB", 17],
      ["PRT", 68],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXE", 39],
    ]),
  ],
  [
    63,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 62],
      ["ORC", 18],
      ["PRB", 17],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXC", 63],
      ["RXE", 39],
    ]),
  ],
  [64, new Map([["AL1", 69]])],
  [65, new Map([["AIP", 70]])],
  [
    66,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 59],
      ["ORC", 18],
      ["PRB", 17],
      ["PRT", 66],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
    ]),
  ],
  [
    67,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 60],
      ["ORC", 18],
      ["PRB", 17],
      ["PRT", 67],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
    ]),
  ],
  [
    68,
    new Map([
      ["CTI", 37],
      ["GOL", 16],
      ["OBX", 62],
      ["ORC", 18],
      ["PRB", 17],
      ["PRT", 68],
      ["PTH", 15],
      ["REL", 14],
      ["RXA", 38],
      ["RXE", 39],
    ]),
  ],
  [69, new Map([["IAM", 71]])],
  [
    70,
    new Map([
      ["AIS", 43],
      ["OBX", 72],
      ["ORC", 8],
      ["PV1", 7],
      ["RGS", 23],
      ["SCH", 9],
    ]),
  ],
  [71, new Map([["ACC", 73]])],
  [
    72,
    new Map([
      ["AIS", 43],
      ["OBX", 72],
      ["ORC", 8],
      ["PRT", 74],
      ["PV1", 7],
      ["RGS", 23],
      ["SCH", 9],
    ]),
  ],
  [73, new Map([["RMI", 75]])],
  [
    74,
    new Map([
      ["AIS", 43],
      ["OBX", 72],
      ["ORC", 8],
      ["PRT", 74],
      ["PV1", 7],
      ["RGS", 23],
      ["SCH", 9],
    ]),
  ],
  [75, new Map([["DB1", 76]])],
  [76, new Map([["DG1", 77]])],
  [77, new Map([["DRG", 78]])],
  [78, new Map([["PDA", 79]])],
  [
    79,
    new Map([
      ["CTI", 20],
      ["OBR", 22],
      ["OBX", 80],
      ["ORC", 8],
      ["PV1", 7],
      ["ROL", 21],
    ]),
  ],
  [
    80,
    new Map([
      ["CTI", 20],
      ["OBR", 22],
      ["OBX", 80],
      ["ORC", 8],
      ["PRT", 81],
      ["PV1", 7],
      ["ROL", 21],
    ]),
  ],
  [
    81,
    new Map([
      ["CTI", 20],
      ["OBR", 22],
      ["OBX", 80],
      ["ORC", 8],
      ["PRT", 81],
      ["PV1", 7],
      ["ROL", 21],
    ]),
  ],
]);
export const effects = {
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
  "5:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
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
  "5:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
  },
  "5:NK1": {
    groupsOpened: [],
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
  },
  "5:PID": {
    groupsOpened: ["CQU_I19/PATIENT"],
    groupsClosed: ["CQU_I19/PROVIDER_CONTACT"],
  },
  "5:PRD": {
    groupsOpened: ["CQU_I19/PROVIDER_CONTACT"],
    groupsClosed: [],
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
  "7:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATIENT_VISITS",
      "CQU_I19/PROBLEM",
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
  "7:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: ["CQU_I19/MEDICATION_HISTORY", "CQU_I19/PATIENT_VISITS"],
  },
  "7:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: ["CQU_I19/PATIENT_VISITS"],
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
  "8:CTI": {
    groupsOpened: [],
    groupsClosed: [
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
  "9:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: [],
  },
  "9:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/CLINICAL_HISTORY",
    ],
  },
  "9:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
    ],
  },
  "9:RGS": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "10:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: [],
  },
  "10:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
    ],
  },
  "10:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: ["CQU_I19/APPOINTMENT_HISTORY", "CQU_I19/INSURANCE"],
  },
  "10:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: ["CQU_I19/INSURANCE"],
  },
  "11:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
    ],
  },
  "11:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: ["CQU_I19/APPOINTMENT_HISTORY", "CQU_I19/INSURANCE"],
  },
  "11:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: ["CQU_I19/INSURANCE"],
  },
  "11:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: [],
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
  "12:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
    ],
  },
  "12:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: ["CQU_I19/INSURANCE", "CQU_I19/PATIENT"],
  },
  "12:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: ["CQU_I19/PATIENT"],
  },
  "12:NK1": {
    groupsOpened: [],
    groupsClosed: ["CQU_I19/PATIENT"],
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
  "13:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
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
  "13:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
  },
  "13:NK1": {
    groupsOpened: [],
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
  },
  "13:PID": {
    groupsOpened: ["CQU_I19/PATIENT"],
    groupsClosed: ["CQU_I19/PROVIDER_CONTACT"],
  },
  "15:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [],
  },
  "15:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/PATHWAY_OBSERVATION",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "15:OBX": {
    groupsOpened: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "15:ROL": {
    groupsOpened: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "16:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [],
  },
  "16:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
  },
  "16:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "16:OBX": {
    groupsOpened: ["CQU_I19/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "16:ROL": {
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CQU_I19/GOAL/GOAL_OBSERVATION", "CQU_I19/PATHWAY"],
  },
  "17:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [],
  },
  "17:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "17:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "17:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "17:OBX": {
    groupsOpened: ["CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "17:ROL": {
    groupsOpened: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "18:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [],
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
  "18:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "18:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
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
  "19:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PATIENT_VISITS",
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
  "19:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: ["CQU_I19/MEDICATION_HISTORY", "CQU_I19/PATIENT_VISITS"],
  },
  "19:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: ["CQU_I19/PATIENT_VISITS"],
  },
  "20:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "20:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: ["CQU_I19/CLINICAL_HISTORY"],
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
  "23:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "23:AIS": {
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CQU_I19/CLINICAL_HISTORY", "CQU_I19/PATIENT_VISITS"],
  },
  "24:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: [],
  },
  "24:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
    ],
  },
  "24:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: ["CQU_I19/APPOINTMENT_HISTORY", "CQU_I19/INSURANCE"],
  },
  "24:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: ["CQU_I19/INSURANCE"],
  },
  "25:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: [],
  },
  "25:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/INSURANCE",
    ],
  },
  "25:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: ["CQU_I19/APPOINTMENT_HISTORY", "CQU_I19/INSURANCE"],
  },
  "25:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: ["CQU_I19/INSURANCE"],
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
  "26:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/INSURANCE",
      "CQU_I19/PATIENT",
    ],
  },
  "26:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: ["CQU_I19/INSURANCE", "CQU_I19/PATIENT"],
  },
  "26:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: ["CQU_I19/PATIENT"],
  },
  "26:NK1": {
    groupsOpened: [],
    groupsClosed: ["CQU_I19/PATIENT"],
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
  "27:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
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
  "27:IN1": {
    groupsOpened: ["CQU_I19/INSURANCE"],
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
  },
  "27:NK1": {
    groupsOpened: [],
    groupsClosed: ["CQU_I19/PATIENT", "CQU_I19/PROVIDER_CONTACT"],
  },
  "27:PID": {
    groupsOpened: ["CQU_I19/PATIENT"],
    groupsClosed: ["CQU_I19/PROVIDER_CONTACT"],
  },
  "28:OBX": {
    groupsOpened: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [],
  },
  "28:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [],
  },
  "28:REL": {
    groupsOpened: [],
    groupsClosed: ["CQU_I19/PATHWAY", "CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "30:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [],
  },
  "30:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/PATHWAY_OBSERVATION",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "30:OBX": {
    groupsOpened: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "30:ROL": {
    groupsOpened: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "31:OBX": {
    groupsOpened: ["CQU_I19/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "31:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [],
  },
  "31:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/PATHWAY",
    ],
  },
  "31:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/GOAL/GOAL_OBSERVATION"],
  },
  "33:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [],
  },
  "33:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
  },
  "33:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "33:OBX": {
    groupsOpened: ["CQU_I19/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "33:ROL": {
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CQU_I19/GOAL/GOAL_OBSERVATION", "CQU_I19/PATHWAY"],
  },
  "34:OBX": {
    groupsOpened: ["CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "34:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [],
  },
  "34:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "34:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "34:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: ["CQU_I19/PROBLEM", "CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "36:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [],
  },
  "36:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "36:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "36:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "36:OBX": {
    groupsOpened: ["CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "36:ROL": {
    groupsOpened: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "37:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [],
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
  "37:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/PROBLEM",
    ],
  },
  "37:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: ["CQU_I19/MEDICATION_HISTORY", "CQU_I19/PROBLEM"],
  },
  "37:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: ["CQU_I19/MEDICATION_HISTORY"],
  },
  "41:ROL": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CQU_I19/PATIENT_VISITS"],
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
  "41:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "44:OBX": {
    groupsOpened: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [],
  },
  "44:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [],
  },
  "44:REL": {
    groupsOpened: [],
    groupsClosed: ["CQU_I19/PATHWAY", "CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "45:ROL": {
    groupsOpened: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "45:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [],
  },
  "45:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/PATHWAY_OBSERVATION",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "45:OBX": {
    groupsOpened: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "46:OBX": {
    groupsOpened: ["CQU_I19/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "46:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [],
  },
  "46:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/PATHWAY",
    ],
  },
  "46:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: ["CQU_I19/GOAL", "CQU_I19/GOAL/GOAL_OBSERVATION"],
  },
  "47:ROL": {
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CQU_I19/GOAL/GOAL_OBSERVATION", "CQU_I19/PATHWAY"],
  },
  "47:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [],
  },
  "47:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
  },
  "47:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "47:OBX": {
    groupsOpened: ["CQU_I19/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "48:OBX": {
    groupsOpened: ["CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [],
  },
  "48:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [],
  },
  "48:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "48:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "48:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: ["CQU_I19/PROBLEM", "CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
  },
  "49:ROL": {
    groupsOpened: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "49:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [],
  },
  "49:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "49:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "49:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "49:OBX": {
    groupsOpened: ["CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "50:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "50:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "50:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "50:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "50:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "50:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "50:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "50:OBX": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "51:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "51:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "51:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "51:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "51:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "51:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "51:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "51:OBX": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "52:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "52:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "52:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "52:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "52:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "52:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "52:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "52:RXE": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "52:OBX": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "53:ROL": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CQU_I19/PATIENT_VISITS"],
  },
  "53:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "53:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "53:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "56:ROL": {
    groupsOpened: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "56:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [],
  },
  "56:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/PATHWAY",
      "CQU_I19/PATHWAY/PATHWAY_OBSERVATION",
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "56:OBX": {
    groupsOpened: ["CQU_I19/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CQU_I19/PATHWAY/ROLE_PATHWAY",
      "CQU_I19/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "57:ROL": {
    groupsOpened: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CQU_I19/GOAL/GOAL_OBSERVATION", "CQU_I19/PATHWAY"],
  },
  "57:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [],
  },
  "57:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CQU_I19/PATHWAY",
    ],
  },
  "57:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/GOAL/GOAL_OBSERVATION",
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "57:OBX": {
    groupsOpened: ["CQU_I19/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CQU_I19/GOAL/ROLE_GOAL",
      "CQU_I19/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "58:ROL": {
    groupsOpened: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
    ],
  },
  "58:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [],
  },
  "58:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "58:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "58:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/PROBLEM",
      "CQU_I19/PROBLEM/PROBLEM_OBSERVATION",
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "58:OBX": {
    groupsOpened: ["CQU_I19/PROBLEM/PROBLEM_OBSERVATION"],
    groupsClosed: [
      "CQU_I19/PROBLEM/ROLE_PROBLEM",
      "CQU_I19/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "59:OBX": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "59:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "59:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "59:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "59:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "59:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "59:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "59:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "60:OBX": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "60:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "60:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "60:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "60:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "60:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "60:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "60:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "61:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "61:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "61:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "61:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "61:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "61:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "61:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "61:OBX": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "62:OBX": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "62:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "62:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "62:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "62:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "62:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "62:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "62:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "62:RXE": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "63:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "63:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "63:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "63:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "63:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "63:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "63:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "63:RXE": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "63:OBX": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "66:OBX": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "66:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "66:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "66:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "66:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "66:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "66:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "66:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "67:OBX": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "67:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "67:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "67:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "67:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "67:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "67:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "67:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "68:OBX": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "68:ORC": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "68:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "68:PTH": {
    groupsOpened: ["CQU_I19/PATHWAY"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "68:GOL": {
    groupsOpened: ["CQU_I19/GOAL"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PROBLEM",
    ],
  },
  "68:PRB": {
    groupsOpened: ["CQU_I19/PROBLEM"],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "68:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "68:RXA": {
    groupsOpened: [
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "68:RXE": {
    groupsOpened: ["CQU_I19/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CQU_I19/GOAL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CQU_I19/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CQU_I19/PATHWAY",
      "CQU_I19/PROBLEM",
    ],
  },
  "70:AIS": {
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/PATIENT_VISITS",
    ],
  },
  "70:RGS": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "70:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "70:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY",
    ],
  },
  "70:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "70:OBX": {
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "72:OBX": {
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "72:AIS": {
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/PATIENT_VISITS",
    ],
  },
  "72:RGS": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "72:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "72:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY",
    ],
  },
  "72:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "74:OBX": {
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "74:AIS": {
    groupsOpened: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/PATIENT_VISITS",
    ],
  },
  "74:RGS": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "74:SCH": {
    groupsOpened: ["CQU_I19/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "74:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY",
    ],
  },
  "74:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/APPOINTMENT_HISTORY",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CQU_I19/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "79:OBR": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CQU_I19/PATIENT_VISITS",
    ],
  },
  "79:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "79:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "79:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "79:ROL": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/PATIENT_VISITS",
    ],
  },
  "79:OBX": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "80:OBX": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "80:OBR": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CQU_I19/PATIENT_VISITS",
    ],
  },
  "80:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "80:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "80:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "80:ROL": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/PATIENT_VISITS",
    ],
  },
  "81:OBX": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "81:OBR": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CQU_I19/PATIENT_VISITS",
    ],
  },
  "81:ORC": {
    groupsOpened: ["CQU_I19/CLINICAL_HISTORY"],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "81:PV1": {
    groupsOpened: ["CQU_I19/PATIENT_VISITS"],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "81:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "81:ROL": {
    groupsOpened: [
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CQU_I19/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CQU_I19/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CQU_I19/PATIENT_VISITS",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
