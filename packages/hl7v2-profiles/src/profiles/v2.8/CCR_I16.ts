// Generated profile automaton for CCR_I16 (v2.8)

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
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "10:OBR": {
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCR_I16/PATIENT_VISITS",
    ],
  },
  "10:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "10:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "10:ROL": {
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/PATIENT_VISITS",
    ],
  },
  "11:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
    ],
  },
  "11:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/CLINICAL_HISTORY",
    ],
  },
  "11:RGS": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "11:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: [],
  },
  "12:IN1": {
    groupsOpened: ["CCR_I16/INSURANCE"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: ["CCR_I16/APPOINTMENT_HISTORY", "CCR_I16/INSURANCE"],
  },
  "12:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
    ],
  },
  "12:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCR_I16/INSURANCE"],
  },
  "13:IN1": {
    groupsOpened: ["CCR_I16/INSURANCE"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: ["CCR_I16/APPOINTMENT_HISTORY", "CCR_I16/INSURANCE"],
  },
  "13:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
    ],
  },
  "13:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCR_I16/INSURANCE"],
  },
  "14:IN1": {
    groupsOpened: ["CCR_I16/INSURANCE"],
    groupsClosed: ["CCR_I16/PATIENT"],
  },
  "14:NK1": {
    groupsOpened: [],
    groupsClosed: ["CCR_I16/PATIENT"],
  },
  "14:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/INSURANCE",
      "CCR_I16/PATIENT",
    ],
  },
  "14:PID": {
    groupsOpened: ["CCR_I16/PATIENT"],
    groupsClosed: [],
  },
  "14:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
      "CCR_I16/PATIENT",
    ],
  },
  "14:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCR_I16/INSURANCE", "CCR_I16/PATIENT"],
  },
  "16:OBR": {
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
    groupsClosed: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
  },
  "16:TQ1": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "18:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [],
  },
  "18:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/PATHWAY_OBSERVATION",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "18:ROL": {
    groupsOpened: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "19:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["CCR_I16/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "19:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "19:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
  },
  "19:ROL": {
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCR_I16/GOAL/GOAL_OBSERVATION", "CCR_I16/PATHWAY"],
  },
  "20:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "20:OBX": {
    groupsOpened: ["CCR_I16/PROBLEM/ROLE_OBSERVATION"],
    groupsClosed: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "20:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [],
  },
  "20:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "20:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "20:ROL": {
    groupsOpened: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
  },
  "21:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "21:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PROBLEM",
    ],
  },
  "21:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "21:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "21:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PROBLEM",
    ],
  },
  "21:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "21:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "21:RXE": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "21:RXO": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "22:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATIENT_VISITS",
      "CCR_I16/PROBLEM",
    ],
  },
  "22:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: ["CCR_I16/PATIENT_VISITS"],
  },
  "22:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: ["CCR_I16/MEDICATION_HISTORY", "CCR_I16/PATIENT_VISITS"],
  },
  "22:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATIENT_VISITS",
      "CCR_I16/PROBLEM",
    ],
  },
  "22:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [],
  },
  "22:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATHWAY",
      "CCR_I16/PATIENT_VISITS",
      "CCR_I16/PROBLEM",
    ],
  },
  "23:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "23:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "26:AIS": {
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CCR_I16/CLINICAL_HISTORY", "CCR_I16/PATIENT_VISITS"],
  },
  "26:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "26:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/CLINICAL_HISTORY",
    ],
  },
  "26:RGS": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "26:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "27:IN1": {
    groupsOpened: ["CCR_I16/INSURANCE"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: ["CCR_I16/APPOINTMENT_HISTORY", "CCR_I16/INSURANCE"],
  },
  "27:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
    ],
  },
  "27:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCR_I16/INSURANCE"],
  },
  "28:IN1": {
    groupsOpened: ["CCR_I16/INSURANCE"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: ["CCR_I16/APPOINTMENT_HISTORY", "CCR_I16/INSURANCE"],
  },
  "28:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
    ],
  },
  "28:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCR_I16/INSURANCE"],
  },
  "2:PRD": {
    groupsOpened: ["CCR_I16/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "30:OBR": {
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
    groupsClosed: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
  },
  "30:TQ1": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
    groupsClosed: [],
  },
  "31:OBX": {
    groupsOpened: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [],
  },
  "31:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [],
  },
  "31:REL": {
    groupsOpened: [],
    groupsClosed: ["CCR_I16/PATHWAY", "CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "33:OBX": {
    groupsOpened: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "33:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [],
  },
  "33:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/PATHWAY_OBSERVATION",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "33:ROL": {
    groupsOpened: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "34:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [],
  },
  "34:OBX": {
    groupsOpened: ["CCR_I16/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "34:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/GOAL/GOAL_OBSERVATION"],
  },
  "34:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/PATHWAY",
    ],
  },
  "36:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [],
  },
  "36:OBX": {
    groupsOpened: ["CCR_I16/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "36:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "36:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
  },
  "36:ROL": {
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCR_I16/GOAL/GOAL_OBSERVATION", "CCR_I16/PATHWAY"],
  },
  "37:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: ["CCR_I16/PROBLEM", "CCR_I16/PROBLEM/ROLE_OBSERVATION"],
  },
  "37:OBX": {
    groupsOpened: ["CCR_I16/PROBLEM/ROLE_OBSERVATION"],
    groupsClosed: [],
  },
  "37:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [],
  },
  "37:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
  },
  "37:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
  },
  "39:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "39:OBX": {
    groupsOpened: ["CCR_I16/PROBLEM/ROLE_OBSERVATION"],
    groupsClosed: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "39:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [],
  },
  "39:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "39:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "39:ROL": {
    groupsOpened: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
  },
  "40:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: ["CCR_I16/MEDICATION_HISTORY", "CCR_I16/PROBLEM"],
  },
  "40:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "40:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "40:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PROBLEM",
    ],
  },
  "40:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "44:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "44:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "44:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "44:ROL": {
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CCR_I16/PATIENT_VISITS"],
  },
  "48:OBX": {
    groupsOpened: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [],
  },
  "48:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [],
  },
  "48:REL": {
    groupsOpened: [],
    groupsClosed: ["CCR_I16/PATHWAY", "CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "49:OBX": {
    groupsOpened: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "49:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [],
  },
  "49:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/PATHWAY_OBSERVATION",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "49:ROL": {
    groupsOpened: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "50:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [],
  },
  "50:OBX": {
    groupsOpened: ["CCR_I16/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [],
  },
  "50:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/GOAL/GOAL_OBSERVATION"],
  },
  "50:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/PATHWAY",
    ],
  },
  "51:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [],
  },
  "51:OBX": {
    groupsOpened: ["CCR_I16/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "51:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "51:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
  },
  "51:ROL": {
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCR_I16/GOAL/GOAL_OBSERVATION", "CCR_I16/PATHWAY"],
  },
  "52:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: ["CCR_I16/PROBLEM", "CCR_I16/PROBLEM/ROLE_OBSERVATION"],
  },
  "52:OBX": {
    groupsOpened: ["CCR_I16/PROBLEM/ROLE_OBSERVATION"],
    groupsClosed: [],
  },
  "52:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [],
  },
  "52:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
  },
  "52:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
  },
  "53:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "53:OBX": {
    groupsOpened: ["CCR_I16/PROBLEM/ROLE_OBSERVATION"],
    groupsClosed: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "53:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [],
  },
  "53:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "53:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "53:ROL": {
    groupsOpened: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
  },
  "54:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "54:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "54:OBX": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "54:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "54:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "54:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "54:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "54:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "55:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "55:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "55:OBX": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "55:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "55:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "55:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "55:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "55:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "56:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "56:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "56:OBX": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "56:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "56:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "56:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "56:REL": {
    groupsOpened: [],
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
  },
  "56:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "56:RXE": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "57:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "57:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "57:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "57:ROL": {
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CCR_I16/PATIENT_VISITS"],
  },
  "5:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
    groupsClosed: ["CCR_I16/PATIENT", "CCR_I16/PROVIDER_CONTACT"],
  },
  "5:PID": {
    groupsOpened: ["CCR_I16/PATIENT"],
    groupsClosed: ["CCR_I16/CLINICAL_ORDER", "CCR_I16/PROVIDER_CONTACT"],
  },
  "5:PRD": {
    groupsOpened: ["CCR_I16/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "60:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
  },
  "60:OBR": {
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
      "CCR_I16/PATIENT",
    ],
  },
  "60:OBX": {
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "60:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
      "CCR_I16/PATIENT",
    ],
  },
  "60:PID": {
    groupsOpened: ["CCR_I16/PATIENT"],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
  },
  "61:OBX": {
    groupsOpened: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
    groupsClosed: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "61:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [],
  },
  "61:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/PATHWAY_OBSERVATION",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "61:ROL": {
    groupsOpened: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: ["CCR_I16/PATHWAY/PATHWAY_OBSERVATION"],
  },
  "62:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [],
  },
  "62:OBX": {
    groupsOpened: ["CCR_I16/GOAL/GOAL_OBSERVATION"],
    groupsClosed: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "62:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "62:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/GOAL_OBSERVATION",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
  },
  "62:ROL": {
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCR_I16/GOAL/GOAL_OBSERVATION", "CCR_I16/PATHWAY"],
  },
  "63:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "63:OBX": {
    groupsOpened: ["CCR_I16/PROBLEM/ROLE_OBSERVATION"],
    groupsClosed: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "63:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [],
  },
  "63:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "63:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "63:ROL": {
    groupsOpened: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM/ROLE_OBSERVATION",
    ],
  },
  "64:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "64:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "64:OBX": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "64:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "64:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "64:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "64:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "64:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "65:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "65:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "65:OBX": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "65:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "65:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "65:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "65:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "65:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "66:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "66:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "66:OBX": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "66:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "66:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "66:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "66:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "66:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "67:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "67:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "67:OBX": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "67:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "67:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "67:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "67:REL": {
    groupsOpened: [],
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
  },
  "67:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "67:RXE": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "68:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "68:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "68:OBX": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "68:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "68:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "68:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "68:REL": {
    groupsOpened: [],
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
  },
  "68:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "68:RXE": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "6:IN1": {
    groupsOpened: ["CCR_I16/INSURANCE"],
    groupsClosed: ["CCR_I16/PATIENT"],
  },
  "6:NK1": {
    groupsOpened: [],
    groupsClosed: ["CCR_I16/PATIENT"],
  },
  "6:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/INSURANCE",
      "CCR_I16/PATIENT",
    ],
  },
  "6:PID": {
    groupsOpened: ["CCR_I16/PATIENT"],
    groupsClosed: [],
  },
  "6:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
      "CCR_I16/PATIENT",
    ],
  },
  "6:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCR_I16/INSURANCE", "CCR_I16/PATIENT"],
  },
  "71:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
    groupsClosed: ["CCR_I16/PATIENT"],
  },
  "71:PID": {
    groupsOpened: ["CCR_I16/PATIENT"],
    groupsClosed: ["CCR_I16/CLINICAL_ORDER"],
  },
  "72:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
  },
  "72:OBR": {
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
      "CCR_I16/PATIENT",
    ],
  },
  "72:OBX": {
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "72:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
      "CCR_I16/PATIENT",
    ],
  },
  "72:PID": {
    groupsOpened: ["CCR_I16/PATIENT"],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
  },
  "73:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "73:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "73:OBX": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "73:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "73:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
    ],
  },
  "73:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "73:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "73:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL/MEDICATION_ADMINISTRATION_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "74:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "74:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "74:OBX": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "74:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "74:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
    ],
  },
  "74:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "74:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "74:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL/MEDICATION_ENCODING_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "75:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "75:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "75:OBX": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "75:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "75:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
    ],
  },
  "75:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PROBLEM",
    ],
  },
  "75:REL": {
    groupsOpened: [],
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
  },
  "75:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "75:RXE": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL/MEDICATION_ORDER_OBSERVATION",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "77:AIS": {
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/PATIENT_VISITS",
    ],
  },
  "77:OBX": {
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "77:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "77:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY",
    ],
  },
  "77:RGS": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "77:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "78:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
  },
  "78:OBR": {
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
      "CCR_I16/PATIENT",
    ],
  },
  "78:OBX": {
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "78:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
      "CCR_I16/PATIENT",
    ],
  },
  "78:PID": {
    groupsOpened: ["CCR_I16/PATIENT"],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBSERVATION",
    ],
  },
  "7:OBR": {
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
    groupsClosed: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
  },
  "7:TQ1": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
    groupsClosed: [],
  },
  "80:AIS": {
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/PATIENT_VISITS",
    ],
  },
  "80:OBX": {
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "80:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "80:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY",
    ],
  },
  "80:RGS": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "80:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "82:AIS": {
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/PATIENT_VISITS",
    ],
  },
  "82:OBX": {
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "82:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "82:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY",
    ],
  },
  "82:RGS": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "82:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBSERVATION",
    ],
  },
  "86:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "86:OBR": {
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCR_I16/PATIENT_VISITS",
    ],
  },
  "86:OBX": {
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "86:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "86:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "86:ROL": {
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/PATIENT_VISITS",
    ],
  },
  "87:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "87:OBR": {
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCR_I16/PATIENT_VISITS",
    ],
  },
  "87:OBX": {
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "87:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "87:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "87:ROL": {
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/PATIENT_VISITS",
    ],
  },
  "88:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "88:OBR": {
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
      "CCR_I16/PATIENT_VISITS",
    ],
  },
  "88:OBX": {
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "88:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
    ],
  },
  "88:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "88:ROL": {
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBSERVATION",
      "CCR_I16/PATIENT_VISITS",
    ],
  },
  "8:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
    groupsClosed: ["CCR_I16/PATIENT", "CCR_I16/PROVIDER_CONTACT"],
  },
  "8:PID": {
    groupsOpened: ["CCR_I16/PATIENT"],
    groupsClosed: ["CCR_I16/CLINICAL_ORDER", "CCR_I16/PROVIDER_CONTACT"],
  },
  "8:PRD": {
    groupsOpened: ["CCR_I16/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "9:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATIENT_VISITS",
      "CCR_I16/PROBLEM",
    ],
  },
  "9:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: ["CCR_I16/PATIENT_VISITS"],
  },
  "9:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: ["CCR_I16/MEDICATION_HISTORY", "CCR_I16/PATIENT_VISITS"],
  },
  "9:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATIENT_VISITS",
      "CCR_I16/PROBLEM",
    ],
  },
  "9:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [],
  },
  "9:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATHWAY",
      "CCR_I16/PATIENT_VISITS",
      "CCR_I16/PROBLEM",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
