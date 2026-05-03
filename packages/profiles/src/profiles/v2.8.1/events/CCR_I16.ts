// Generated profile automaton for CCR_I16 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([
  9, 17, 18, 19, 20, 21, 22, 31, 33, 34, 36, 37, 39, 40, 48, 49, 50, 51, 52, 53,
  54, 55, 56, 61, 62, 63, 64, 65, 66, 67, 68, 73, 74, 75,
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
  "TQ1",
  "TQ2",
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
      ["PRD", 5],
      ["RF1", 2],
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
      ["CTD", 8],
      ["ORC", 7],
      ["PID", 6],
      ["PRD", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["IN1", 12],
      ["NK1", 13],
      ["ORC", 10],
      ["PD1", 14],
      ["PID", 6],
      ["PV1", 9],
      ["SCH", 11],
    ]),
  ],
  [
    7,
    new Map([
      ["OBR", 15],
      ["TQ1", 16],
    ]),
  ],
  [
    8,
    new Map([
      ["CTD", 8],
      ["ORC", 7],
      ["PID", 6],
      ["PRD", 5],
    ]),
  ],
  [
    9,
    new Map([
      ["GOL", 19],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["PV1", 9],
      ["PV2", 22],
      ["REL", 17],
    ]),
  ],
  [
    10,
    new Map([
      ["CTI", 23],
      ["OBR", 25],
      ["ORC", 10],
      ["PV1", 9],
      ["ROL", 24],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 10],
      ["PV1", 9],
      ["RGS", 26],
      ["SCH", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["IN1", 12],
      ["IN2", 28],
      ["IN3", 27],
      ["ORC", 10],
      ["PV1", 9],
      ["SCH", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["IN1", 12],
      ["NK1", 13],
      ["ORC", 10],
      ["PV1", 9],
      ["SCH", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["IN1", 12],
      ["NK1", 13],
      ["ORC", 10],
      ["PID", 6],
      ["PV1", 9],
      ["SCH", 11],
    ]),
  ],
  [15, new Map([["RXO", 29]])],
  [
    16,
    new Map([
      ["OBR", 15],
      ["TQ1", 16],
      ["TQ2", 30],
    ]),
  ],
  [17, new Map([["REL", 17]])],
  [
    18,
    new Map([
      ["OBX", 31],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 32],
      ["VAR", 33],
    ]),
  ],
  [
    19,
    new Map([
      ["GOL", 19],
      ["OBX", 34],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 35],
      ["VAR", 36],
    ]),
  ],
  [
    20,
    new Map([
      ["GOL", 19],
      ["OBX", 37],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 38],
      ["VAR", 39],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
      ["RXE", 42],
      ["RXO", 43],
    ]),
  ],
  [
    22,
    new Map([
      ["GOL", 19],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["PV1", 9],
      ["REL", 17],
    ]),
  ],
  [
    23,
    new Map([
      ["CTI", 23],
      ["ORC", 10],
      ["PV1", 9],
    ]),
  ],
  [24, new Map([["PRD", 44]])],
  [25, new Map([["ODS", 45]])],
  [
    26,
    new Map([
      ["AIS", 46],
      ["ORC", 10],
      ["PV1", 9],
      ["RGS", 26],
      ["SCH", 11],
    ]),
  ],
  [
    27,
    new Map([
      ["IN1", 12],
      ["ORC", 10],
      ["PV1", 9],
      ["SCH", 11],
    ]),
  ],
  [
    28,
    new Map([
      ["IN1", 12],
      ["IN3", 27],
      ["ORC", 10],
      ["PV1", 9],
      ["SCH", 11],
    ]),
  ],
  [29, new Map([["ODS", 47]])],
  [
    30,
    new Map([
      ["OBR", 15],
      ["TQ1", 16],
      ["TQ2", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["OBX", 31],
      ["PRT", 48],
      ["PTH", 18],
      ["REL", 17],
    ]),
  ],
  [32, new Map([["PRD", 49]])],
  [
    33,
    new Map([
      ["OBX", 31],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 32],
      ["VAR", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["GOL", 19],
      ["OBX", 34],
      ["PRT", 50],
      ["PTH", 18],
      ["REL", 17],
    ]),
  ],
  [35, new Map([["PRD", 51]])],
  [
    36,
    new Map([
      ["GOL", 19],
      ["OBX", 34],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 35],
      ["VAR", 36],
    ]),
  ],
  [
    37,
    new Map([
      ["GOL", 19],
      ["OBX", 37],
      ["PRB", 20],
      ["PRT", 52],
      ["PTH", 18],
      ["REL", 17],
    ]),
  ],
  [38, new Map([["PRD", 53]])],
  [
    39,
    new Map([
      ["GOL", 19],
      ["OBX", 37],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 38],
      ["VAR", 39],
    ]),
  ],
  [
    40,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
    ]),
  ],
  [
    41,
    new Map([
      ["RXA", 41],
      ["RXR", 54],
    ]),
  ],
  [42, new Map([["RXR", 55]])],
  [43, new Map([["RXR", 56]])],
  [
    44,
    new Map([
      ["CTI", 23],
      ["ORC", 10],
      ["PV1", 9],
      ["ROL", 24],
      ["VAR", 57],
    ]),
  ],
  [45, new Map([["PR1", 58]])],
  [46, new Map([["AIG", 59]])],
  [47, new Map([["PR1", 60]])],
  [
    48,
    new Map([
      ["OBX", 31],
      ["PRT", 48],
      ["PTH", 18],
      ["REL", 17],
    ]),
  ],
  [
    49,
    new Map([
      ["OBX", 31],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 32],
      ["VAR", 61],
    ]),
  ],
  [
    50,
    new Map([
      ["GOL", 19],
      ["OBX", 34],
      ["PRT", 50],
      ["PTH", 18],
      ["REL", 17],
    ]),
  ],
  [
    51,
    new Map([
      ["GOL", 19],
      ["OBX", 34],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 35],
      ["VAR", 62],
    ]),
  ],
  [
    52,
    new Map([
      ["GOL", 19],
      ["OBX", 37],
      ["PRB", 20],
      ["PRT", 52],
      ["PTH", 18],
      ["REL", 17],
    ]),
  ],
  [
    53,
    new Map([
      ["GOL", 19],
      ["OBX", 37],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 38],
      ["VAR", 63],
    ]),
  ],
  [
    54,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 64],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
    ]),
  ],
  [
    55,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 65],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
      ["RXC", 66],
      ["RXR", 55],
    ]),
  ],
  [
    56,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 67],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
      ["RXC", 68],
      ["RXE", 42],
      ["RXR", 56],
    ]),
  ],
  [
    57,
    new Map([
      ["CTI", 23],
      ["ORC", 10],
      ["PV1", 9],
      ["ROL", 24],
      ["VAR", 57],
    ]),
  ],
  [58, new Map([["RF1", 69]])],
  [59, new Map([["AIL", 70]])],
  [
    60,
    new Map([
      ["CTI", 71],
      ["OBR", 15],
      ["OBX", 72],
      ["ORC", 7],
      ["PID", 6],
    ]),
  ],
  [
    61,
    new Map([
      ["OBX", 31],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 32],
      ["VAR", 61],
    ]),
  ],
  [
    62,
    new Map([
      ["GOL", 19],
      ["OBX", 34],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 35],
      ["VAR", 62],
    ]),
  ],
  [
    63,
    new Map([
      ["GOL", 19],
      ["OBX", 37],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 38],
      ["VAR", 63],
    ]),
  ],
  [
    64,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 64],
      ["ORC", 21],
      ["PRB", 20],
      ["PRT", 73],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
    ]),
  ],
  [
    65,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 65],
      ["ORC", 21],
      ["PRB", 20],
      ["PRT", 74],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
    ]),
  ],
  [
    66,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 65],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
      ["RXC", 66],
    ]),
  ],
  [
    67,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 67],
      ["ORC", 21],
      ["PRB", 20],
      ["PRT", 75],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
      ["RXE", 42],
    ]),
  ],
  [
    68,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 67],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
      ["RXC", 68],
      ["RXE", 42],
    ]),
  ],
  [69, new Map([["AL1", 76]])],
  [70, new Map([["AIP", 77]])],
  [
    71,
    new Map([
      ["CTI", 71],
      ["ORC", 7],
      ["PID", 6],
    ]),
  ],
  [
    72,
    new Map([
      ["CTI", 71],
      ["OBR", 15],
      ["OBX", 72],
      ["ORC", 7],
      ["PID", 6],
      ["PRT", 78],
    ]),
  ],
  [
    73,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 64],
      ["ORC", 21],
      ["PRB", 20],
      ["PRT", 73],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
    ]),
  ],
  [
    74,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 65],
      ["ORC", 21],
      ["PRB", 20],
      ["PRT", 74],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
    ]),
  ],
  [
    75,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 67],
      ["ORC", 21],
      ["PRB", 20],
      ["PRT", 75],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
      ["RXE", 42],
    ]),
  ],
  [76, new Map([["IAM", 79]])],
  [
    77,
    new Map([
      ["AIS", 46],
      ["OBX", 80],
      ["ORC", 10],
      ["PV1", 9],
      ["RGS", 26],
      ["SCH", 11],
    ]),
  ],
  [
    78,
    new Map([
      ["CTI", 71],
      ["OBR", 15],
      ["OBX", 72],
      ["ORC", 7],
      ["PID", 6],
      ["PRT", 78],
    ]),
  ],
  [79, new Map([["ACC", 81]])],
  [
    80,
    new Map([
      ["AIS", 46],
      ["OBX", 80],
      ["ORC", 10],
      ["PRT", 82],
      ["PV1", 9],
      ["RGS", 26],
      ["SCH", 11],
    ]),
  ],
  [81, new Map([["RMI", 83]])],
  [
    82,
    new Map([
      ["AIS", 46],
      ["OBX", 80],
      ["ORC", 10],
      ["PRT", 82],
      ["PV1", 9],
      ["RGS", 26],
      ["SCH", 11],
    ]),
  ],
  [83, new Map([["DB1", 84]])],
  [84, new Map([["DG1", 85]])],
  [85, new Map([["DRG", 86]])],
  [
    86,
    new Map([
      ["CTI", 23],
      ["OBR", 25],
      ["OBX", 87],
      ["ORC", 10],
      ["PV1", 9],
      ["ROL", 24],
    ]),
  ],
  [
    87,
    new Map([
      ["CTI", 23],
      ["OBR", 25],
      ["OBX", 87],
      ["ORC", 10],
      ["PRT", 88],
      ["PV1", 9],
      ["ROL", 24],
    ]),
  ],
  [
    88,
    new Map([
      ["CTI", 23],
      ["OBR", 25],
      ["OBX", 87],
      ["ORC", 10],
      ["PRT", 88],
      ["PV1", 9],
      ["ROL", 24],
    ]),
  ],
]);
export const effects = {
  "10:CTI": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "10:OBR": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCR_I16/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "10:PV1": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "10:ROL": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "11:ORC": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
    ],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "11:PV1": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "11:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "11:SCH": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
  },
  "12:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: ["CCR_I16/APPOINTMENT_HISTORY", "CCR_I16/INSURANCE"],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "12:PV1": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "12:SCH": {
    groupsClosed: ["CCR_I16/INSURANCE"],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
  },
  "13:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: ["CCR_I16/APPOINTMENT_HISTORY", "CCR_I16/INSURANCE"],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "13:PV1": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "13:SCH": {
    groupsClosed: ["CCR_I16/INSURANCE"],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
  },
  "14:IN1": {
    groupsClosed: ["CCR_I16/PATIENT"],
    groupsOpened: ["CCR_I16/INSURANCE"],
  },
  "14:NK1": {
    groupsClosed: ["CCR_I16/PATIENT"],
    groupsOpened: [],
  },
  "14:ORC": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/INSURANCE",
      "CCR_I16/PATIENT",
    ],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "14:PID": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATIENT"],
  },
  "14:PV1": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
      "CCR_I16/PATIENT",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "14:SCH": {
    groupsClosed: ["CCR_I16/INSURANCE", "CCR_I16/PATIENT"],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
  },
  "16:OBR": {
    groupsClosed: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
  },
  "18:OBX": {
    groupsClosed: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "18:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "18:REL": {
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/PATHWAY_OBSERVATION",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "18:ROL": {
    groupsClosed: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "19:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "19:OBX": {
    groupsClosed: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCR_I16/GOAL/GOAL_OBSERVATION"],
  },
  "19:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "19:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
    groupsOpened: [],
  },
  "19:ROL": {
    groupsClosed: ["CCR_I16/GOAL/GOAL_OBSERVATION", "CCR_I16/PATHWAY"],
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "20:GOL": {
    groupsClosed: [
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "20:OBX": {
    groupsClosed: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PROBLEM/ROLE_OBSERVATION"],
  },
  "20:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "20:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "20:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "20:ROL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
    groupsOpened: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "21:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "21:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "21:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "21:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "21:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "21:RXA": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "21:RXE": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "21:RXO": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL"],
  },
  "22:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATIENT_VISITS",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "22:ORC": {
    groupsClosed: ["CCR_I16/PATIENT_VISITS"],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "22:PRB": {
    groupsClosed: ["CCR_I16/MEDICATION_HISTORY", "CCR_I16/PATIENT_VISITS"],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "22:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATIENT_VISITS",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "22:PV1": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "22:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATHWAY",
      "CCR_I16/PATIENT_VISITS",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "23:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "23:PV1": {
    groupsClosed: ["CCR_I16/CLINICAL_HISTORY"],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "26:AIS": {
    groupsClosed: ["CCR_I16/CLINICAL_HISTORY", "CCR_I16/PATIENT_VISITS"],
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "26:ORC": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "26:PV1": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "26:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "26:SCH": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
  },
  "27:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/INSURANCE"],
  },
  "27:ORC": {
    groupsClosed: ["CCR_I16/APPOINTMENT_HISTORY", "CCR_I16/INSURANCE"],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "27:PV1": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "27:SCH": {
    groupsClosed: ["CCR_I16/INSURANCE"],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
  },
  "28:IN1": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/INSURANCE"],
  },
  "28:ORC": {
    groupsClosed: ["CCR_I16/APPOINTMENT_HISTORY", "CCR_I16/INSURANCE"],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "28:PV1": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "28:SCH": {
    groupsClosed: ["CCR_I16/INSURANCE"],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
  },
  "2:PRD": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROVIDER_CONTACT"],
  },
  "30:OBR": {
    groupsClosed: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
  },
  "30:TQ1": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "31:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "31:REL": {
    groupsClosed: ["CCR_I16/PATHWAY", "CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [],
  },
  "33:OBX": {
    groupsClosed: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "33:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "33:REL": {
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/PATHWAY_OBSERVATION",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "33:ROL": {
    groupsClosed: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "34:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/GOAL/GOAL_OBSERVATION"],
  },
  "34:PTH": {
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "34:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/PATHWAY",
    ],
    groupsOpened: [],
  },
  "36:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "36:OBX": {
    groupsClosed: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCR_I16/GOAL/GOAL_OBSERVATION"],
  },
  "36:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "36:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
    groupsOpened: [],
  },
  "36:ROL": {
    groupsClosed: ["CCR_I16/GOAL/GOAL_OBSERVATION", "CCR_I16/PATHWAY"],
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "37:GOL": {
    groupsClosed: ["CCR_I16/PROBLEM", "CCR_I16/PROBLEM/ROLE_OBSERVATION"],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "37:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROBLEM/ROLE_OBSERVATION"],
  },
  "37:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "37:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "37:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "39:GOL": {
    groupsClosed: [
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "39:OBX": {
    groupsClosed: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PROBLEM/ROLE_OBSERVATION"],
  },
  "39:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "39:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "39:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "39:ROL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
    groupsOpened: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "40:GOL": {
    groupsClosed: ["CCR_I16/MEDICATION_HISTORY", "CCR_I16/PROBLEM"],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "40:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "40:PRB": {
    groupsClosed: ["CCR_I16/MEDICATION_HISTORY"],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "40:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "40:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "44:CTI": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "44:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "44:PV1": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "44:ROL": {
    groupsClosed: ["CCR_I16/PATIENT_VISITS"],
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "48:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "48:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "48:REL": {
    groupsClosed: ["CCR_I16/PATHWAY", "CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [],
  },
  "49:OBX": {
    groupsClosed: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "49:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "49:REL": {
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/PATHWAY_OBSERVATION",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "49:ROL": {
    groupsClosed: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "50:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "50:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/GOAL/GOAL_OBSERVATION"],
  },
  "50:PTH": {
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/GOAL/GOAL_OBSERVATION"],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "50:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/PATHWAY",
    ],
    groupsOpened: [],
  },
  "51:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "51:OBX": {
    groupsClosed: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCR_I16/GOAL/GOAL_OBSERVATION"],
  },
  "51:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "51:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
    groupsOpened: [],
  },
  "51:ROL": {
    groupsClosed: ["CCR_I16/GOAL/GOAL_OBSERVATION", "CCR_I16/PATHWAY"],
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "52:GOL": {
    groupsClosed: ["CCR_I16/PROBLEM", "CCR_I16/PROBLEM/ROLE_OBSERVATION"],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "52:OBX": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROBLEM/ROLE_OBSERVATION"],
  },
  "52:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "52:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "52:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "53:GOL": {
    groupsClosed: [
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "53:OBX": {
    groupsClosed: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PROBLEM/ROLE_OBSERVATION"],
  },
  "53:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "53:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "53:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "53:ROL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
    groupsOpened: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "54:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "54:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "54:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "54:ORC": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "54:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "54:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "54:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "54:RXA": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "55:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "55:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "55:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "55:ORC": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "55:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "55:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "55:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "55:RXA": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "56:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "56:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "56:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "56:ORC": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "56:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "56:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "56:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "56:RXA": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "56:RXE": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "57:CTI": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "57:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "57:PV1": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "57:ROL": {
    groupsClosed: ["CCR_I16/PATIENT_VISITS"],
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "5:ORC": {
    groupsClosed: ["CCR_I16/PATIENT", "CCR_I16/PROVIDER_CONTACT"],
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
  },
  "5:PID": {
    groupsClosed: ["CCR_I16/CLINICAL_ORDER", "CCR_I16/PROVIDER_CONTACT"],
    groupsOpened: ["CCR_I16/PATIENT"],
  },
  "5:PRD": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROVIDER_CONTACT"],
  },
  "60:CTI": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "60:OBR": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
      "CCR_I16/PATIENT",
    ],
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
  },
  "60:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
  },
  "60:ORC": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
      "CCR_I16/PATIENT",
    ],
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
  },
  "60:PID": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PATIENT"],
  },
  "61:OBX": {
    groupsClosed: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "61:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "61:REL": {
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/PATHWAY_OBSERVATION",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "61:ROL": {
    groupsClosed: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
    groupsOpened: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "62:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "62:OBX": {
    groupsClosed: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCR_I16/GOAL/GOAL_OBSERVATION"],
  },
  "62:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "62:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
    groupsOpened: [],
  },
  "62:ROL": {
    groupsClosed: ["CCR_I16/GOAL/GOAL_OBSERVATION", "CCR_I16/PATHWAY"],
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "63:GOL": {
    groupsClosed: [
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "63:OBX": {
    groupsClosed: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PROBLEM/ROLE_OBSERVATION"],
  },
  "63:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "63:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "63:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "63:ROL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
    groupsOpened: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "64:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "64:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "64:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "64:ORC": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "64:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "64:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "64:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "64:RXA": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "65:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "65:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "65:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "65:ORC": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "65:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "65:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "65:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "65:RXA": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "66:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "66:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "66:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "66:ORC": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "66:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "66:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "66:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "66:RXA": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "67:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "67:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "67:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "67:ORC": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "67:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "67:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "67:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "67:RXA": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "67:RXE": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "68:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "68:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "68:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "68:ORC": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "68:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "68:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "68:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "68:RXA": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "68:RXE": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "6:IN1": {
    groupsClosed: ["CCR_I16/PATIENT"],
    groupsOpened: ["CCR_I16/INSURANCE"],
  },
  "6:NK1": {
    groupsClosed: ["CCR_I16/PATIENT"],
    groupsOpened: [],
  },
  "6:ORC": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/INSURANCE",
      "CCR_I16/PATIENT",
    ],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATIENT"],
  },
  "6:PV1": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
      "CCR_I16/PATIENT",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "6:SCH": {
    groupsClosed: ["CCR_I16/INSURANCE", "CCR_I16/PATIENT"],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
  },
  "71:ORC": {
    groupsClosed: ["CCR_I16/PATIENT"],
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
  },
  "71:PID": {
    groupsClosed: ["CCR_I16/CLINICAL_ORDER"],
    groupsOpened: ["CCR_I16/PATIENT"],
  },
  "72:CTI": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "72:OBR": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
      "CCR_I16/PATIENT",
    ],
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
  },
  "72:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
  },
  "72:ORC": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
      "CCR_I16/PATIENT",
    ],
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
  },
  "72:PID": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PATIENT"],
  },
  "73:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "73:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "73:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "73:ORC": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "73:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "73:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "73:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "73:RXA": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "74:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "74:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "74:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "74:ORC": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "74:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "74:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "74:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "74:RXA": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "75:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "75:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "75:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "75:ORC": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "75:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "75:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "75:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "75:RXA": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "75:RXE": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "77:AIS": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "77:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "77:ORC": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "77:PV1": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "77:RGS": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "77:SCH": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
  },
  "78:CTI": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "78:OBR": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
      "CCR_I16/PATIENT",
    ],
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
  },
  "78:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
  },
  "78:ORC": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
      "CCR_I16/PATIENT",
    ],
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
  },
  "78:PID": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/PATIENT"],
  },
  "7:OBR": {
    groupsClosed: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
  },
  "80:AIS": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "80:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "80:ORC": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "80:PV1": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "80:RGS": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "80:SCH": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
  },
  "82:AIS": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "82:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "82:ORC": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "82:PV1": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "82:RGS": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "82:SCH": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
  },
  "86:CTI": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "86:OBR": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCR_I16/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "86:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "86:ORC": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "86:PV1": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "86:ROL": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "87:CTI": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "87:OBR": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCR_I16/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "87:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "87:ORC": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "87:PV1": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "87:ROL": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "88:CTI": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "88:OBR": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCR_I16/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
  },
  "88:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "88:ORC": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "88:PV1": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "88:ROL": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/PATIENT_VISITS",
    ],
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "8:ORC": {
    groupsClosed: ["CCR_I16/PATIENT", "CCR_I16/PROVIDER_CONTACT"],
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
  },
  "8:PID": {
    groupsClosed: ["CCR_I16/CLINICAL_ORDER", "CCR_I16/PROVIDER_CONTACT"],
    groupsOpened: ["CCR_I16/PATIENT"],
  },
  "8:PRD": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROVIDER_CONTACT"],
  },
  "9:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATIENT_VISITS",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "9:ORC": {
    groupsClosed: ["CCR_I16/PATIENT_VISITS"],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "9:PRB": {
    groupsClosed: ["CCR_I16/MEDICATION_HISTORY", "CCR_I16/PATIENT_VISITS"],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "9:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATIENT_VISITS",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "9:PV1": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "9:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATHWAY",
      "CCR_I16/PATIENT_VISITS",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
