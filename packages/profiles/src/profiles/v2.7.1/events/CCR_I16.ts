// Generated profile automaton for CCR_I16 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  9, 17, 18, 19, 20, 21, 22, 31, 33, 34, 36, 37, 39, 40, 48, 49, 50, 51, 52, 53,
  58, 59, 60, 61, 62, 63, 64, 65,
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
      ["PTH", 18],
      ["REL", 17],
    ]),
  ],
  [32, new Map([["PRD", 48]])],
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
      ["PTH", 18],
      ["REL", 17],
    ]),
  ],
  [35, new Map([["PRD", 49]])],
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
      ["PTH", 18],
      ["REL", 17],
    ]),
  ],
  [38, new Map([["PRD", 50]])],
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
      ["RXR", 51],
    ]),
  ],
  [42, new Map([["RXR", 52]])],
  [43, new Map([["RXR", 53]])],
  [
    44,
    new Map([
      ["CTI", 23],
      ["ORC", 10],
      ["PV1", 9],
      ["ROL", 24],
      ["VAR", 54],
    ]),
  ],
  [45, new Map([["PR1", 55]])],
  [46, new Map([["AIG", 56]])],
  [47, new Map([["PR1", 57]])],
  [
    48,
    new Map([
      ["OBX", 31],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 32],
      ["VAR", 58],
    ]),
  ],
  [
    49,
    new Map([
      ["GOL", 19],
      ["OBX", 34],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 35],
      ["VAR", 59],
    ]),
  ],
  [
    50,
    new Map([
      ["GOL", 19],
      ["OBX", 37],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 38],
      ["VAR", 60],
    ]),
  ],
  [
    51,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 61],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
    ]),
  ],
  [
    52,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 62],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
      ["RXC", 63],
      ["RXR", 52],
    ]),
  ],
  [
    53,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 64],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
      ["RXC", 65],
      ["RXE", 42],
      ["RXR", 53],
    ]),
  ],
  [
    54,
    new Map([
      ["CTI", 23],
      ["ORC", 10],
      ["PV1", 9],
      ["ROL", 24],
      ["VAR", 54],
    ]),
  ],
  [55, new Map([["RF1", 66]])],
  [56, new Map([["AIL", 67]])],
  [
    57,
    new Map([
      ["CTI", 68],
      ["OBR", 15],
      ["OBX", 69],
      ["ORC", 7],
      ["PID", 6],
    ]),
  ],
  [
    58,
    new Map([
      ["OBX", 31],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 32],
      ["VAR", 58],
    ]),
  ],
  [
    59,
    new Map([
      ["GOL", 19],
      ["OBX", 34],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 35],
      ["VAR", 59],
    ]),
  ],
  [
    60,
    new Map([
      ["GOL", 19],
      ["OBX", 37],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["ROL", 38],
      ["VAR", 60],
    ]),
  ],
  [
    61,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 61],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
    ]),
  ],
  [
    62,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 62],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
    ]),
  ],
  [
    63,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 62],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
      ["RXC", 63],
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
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
      ["RXE", 42],
    ]),
  ],
  [
    65,
    new Map([
      ["CTI", 40],
      ["GOL", 19],
      ["OBX", 64],
      ["ORC", 21],
      ["PRB", 20],
      ["PTH", 18],
      ["REL", 17],
      ["RXA", 41],
      ["RXC", 65],
      ["RXE", 42],
    ]),
  ],
  [66, new Map([["AL1", 70]])],
  [67, new Map([["AIP", 71]])],
  [
    68,
    new Map([
      ["CTI", 68],
      ["ORC", 7],
      ["PID", 6],
    ]),
  ],
  [
    69,
    new Map([
      ["CTI", 68],
      ["OBR", 15],
      ["OBX", 69],
      ["ORC", 7],
      ["PID", 6],
    ]),
  ],
  [70, new Map([["IAM", 72]])],
  [
    71,
    new Map([
      ["AIS", 46],
      ["OBX", 73],
      ["ORC", 10],
      ["PV1", 9],
      ["RGS", 26],
      ["SCH", 11],
    ]),
  ],
  [72, new Map([["ACC", 74]])],
  [
    73,
    new Map([
      ["AIS", 46],
      ["OBX", 73],
      ["ORC", 10],
      ["PV1", 9],
      ["RGS", 26],
      ["SCH", 11],
    ]),
  ],
  [74, new Map([["RMI", 75]])],
  [75, new Map([["DB1", 76]])],
  [76, new Map([["DG1", 77]])],
  [77, new Map([["DRG", 78]])],
  [
    78,
    new Map([
      ["CTI", 23],
      ["OBR", 25],
      ["OBX", 79],
      ["ORC", 10],
      ["PV1", 9],
      ["ROL", 24],
    ]),
  ],
  [
    79,
    new Map([
      ["CTI", 23],
      ["OBR", 25],
      ["OBX", 79],
      ["ORC", 10],
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
    groupsOpened: [],
  },
  "18:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "18:REL": {
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "18:ROL": {
    groupsClosed: [],
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
    groupsOpened: [],
  },
  "19:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "19:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
    groupsOpened: [],
  },
  "19:ROL": {
    groupsClosed: ["CCR_I16/PATHWAY"],
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "20:GOL": {
    groupsClosed: [
      "CCR_I16/PROBLEM",
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
    groupsOpened: [],
  },
  "20:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "20:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
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
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "20:ROL": {
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY"],
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
  "31:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "31:REL": {
    groupsClosed: ["CCR_I16/PATHWAY"],
    groupsOpened: [],
  },
  "33:OBX": {
    groupsClosed: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "33:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "33:REL": {
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "33:ROL": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "34:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "34:PTH": {
    groupsClosed: ["CCR_I16/GOAL"],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "34:REL": {
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY"],
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
    groupsOpened: [],
  },
  "36:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "36:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
    groupsOpened: [],
  },
  "36:ROL": {
    groupsClosed: ["CCR_I16/PATHWAY"],
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "37:GOL": {
    groupsClosed: ["CCR_I16/PROBLEM"],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "37:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "37:PTH": {
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PROBLEM"],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "37:REL": {
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY", "CCR_I16/PROBLEM"],
    groupsOpened: [],
  },
  "39:GOL": {
    groupsClosed: [
      "CCR_I16/PROBLEM",
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
    groupsOpened: [],
  },
  "39:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "39:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
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
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "39:ROL": {
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY"],
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
    groupsClosed: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "48:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "48:REL": {
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "48:ROL": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "49:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "49:OBX": {
    groupsClosed: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: [],
  },
  "49:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "49:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
    groupsOpened: [],
  },
  "49:ROL": {
    groupsClosed: ["CCR_I16/PATHWAY"],
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "50:GOL": {
    groupsClosed: [
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "50:OBX": {
    groupsClosed: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "50:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "50:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "50:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "50:ROL": {
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY"],
    groupsOpened: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "51:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: [],
  },
  "51:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "51:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "51:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "51:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "51:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "51:RXA": {
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY", "CCR_I16/PROBLEM"],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "52:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: [],
  },
  "52:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "52:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "52:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "52:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "52:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "52:RXA": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "53:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "53:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "53:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "53:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "53:PTH": {
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
  "53:REL": {
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
  "53:RXA": {
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
  "53:RXE": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "54:CTI": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "54:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "54:PV1": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "54:ROL": {
    groupsClosed: ["CCR_I16/PATIENT_VISITS"],
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "57:CTI": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
    groupsOpened: [],
  },
  "57:OBR": {
    groupsClosed: ["CCR_I16/PATIENT"],
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
  },
  "57:ORC": {
    groupsClosed: ["CCR_I16/PATIENT"],
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
  },
  "57:PID": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATIENT"],
  },
  "58:OBX": {
    groupsClosed: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "58:PTH": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "58:REL": {
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsOpened: [],
  },
  "58:ROL": {
    groupsClosed: [],
    groupsOpened: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "59:GOL": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "59:OBX": {
    groupsClosed: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: [],
  },
  "59:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "59:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
    groupsOpened: [],
  },
  "59:ROL": {
    groupsClosed: ["CCR_I16/PATHWAY"],
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
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
  "60:GOL": {
    groupsClosed: [
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "60:OBX": {
    groupsClosed: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "60:PRB": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "60:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "60:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsOpened: [],
  },
  "60:ROL": {
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY"],
    groupsOpened: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "61:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: [],
  },
  "61:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "61:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "61:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "61:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "61:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "61:RXA": {
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY", "CCR_I16/PROBLEM"],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "62:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: [],
  },
  "62:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "62:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "62:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "62:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "62:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "62:RXA": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "63:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: [],
  },
  "63:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "63:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "63:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "63:PTH": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/PATHWAY"],
  },
  "63:REL": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [],
  },
  "63:RXA": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "64:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "64:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "64:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "64:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "64:PTH": {
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
  "64:REL": {
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
  "64:RXA": {
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
  "64:RXE": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "65:CTI": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "65:GOL": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/GOAL"],
  },
  "65:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "65:PRB": {
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
    groupsOpened: ["CCR_I16/PROBLEM"],
  },
  "65:PTH": {
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
  "65:REL": {
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
  "65:RXA": {
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
  "65:RXE": {
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
  },
  "68:ORC": {
    groupsClosed: ["CCR_I16/PATIENT"],
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
  },
  "68:PID": {
    groupsClosed: ["CCR_I16/CLINICAL_ORDER"],
    groupsOpened: ["CCR_I16/PATIENT"],
  },
  "69:CTI": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
    groupsOpened: [],
  },
  "69:OBR": {
    groupsClosed: ["CCR_I16/PATIENT"],
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
  },
  "69:ORC": {
    groupsClosed: ["CCR_I16/PATIENT"],
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
  },
  "69:PID": {
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATIENT"],
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
  "71:AIS": {
    groupsClosed: ["CCR_I16/CLINICAL_HISTORY", "CCR_I16/PATIENT_VISITS"],
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "71:ORC": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "71:PV1": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "71:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "71:SCH": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
  },
  "73:AIS": {
    groupsClosed: ["CCR_I16/CLINICAL_HISTORY", "CCR_I16/PATIENT_VISITS"],
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "73:ORC": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "73:PV1": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/CLINICAL_HISTORY",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "73:RGS": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY/RESOURCES"],
  },
  "73:SCH": {
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
  },
  "78:CTI": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "78:OBR": {
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
  "78:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "78:PV1": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "78:ROL": {
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
  "79:CTI": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: [],
  },
  "79:OBR": {
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
  "79:ORC": {
    groupsClosed: [],
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
  },
  "79:PV1": {
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
  },
  "79:ROL": {
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
