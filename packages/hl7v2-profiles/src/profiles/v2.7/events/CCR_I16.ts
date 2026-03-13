// Generated profile automaton for CCR_I16 (v2.7)

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
  "2:PRD": {
    groupsOpened: ["CCR_I16/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "5:PRD": {
    groupsOpened: ["CCR_I16/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["CCR_I16/PATIENT"],
    groupsClosed: ["CCR_I16/CLINICAL_ORDER", "CCR_I16/PROVIDER_CONTACT"],
  },
  "5:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
    groupsClosed: ["CCR_I16/PATIENT", "CCR_I16/PROVIDER_CONTACT"],
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
  "6:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/INSURANCE",
      "CCR_I16/PATIENT",
    ],
  },
  "6:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCR_I16/INSURANCE", "CCR_I16/PATIENT"],
  },
  "6:IN1": {
    groupsOpened: ["CCR_I16/INSURANCE"],
    groupsClosed: ["CCR_I16/PATIENT"],
  },
  "6:NK1": {
    groupsOpened: [],
    groupsClosed: ["CCR_I16/PATIENT"],
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
  "8:PRD": {
    groupsOpened: ["CCR_I16/PROVIDER_CONTACT"],
    groupsClosed: [],
  },
  "8:PID": {
    groupsOpened: ["CCR_I16/PATIENT"],
    groupsClosed: ["CCR_I16/CLINICAL_ORDER", "CCR_I16/PROVIDER_CONTACT"],
  },
  "8:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
    groupsClosed: ["CCR_I16/PATIENT", "CCR_I16/PROVIDER_CONTACT"],
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
  "9:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATIENT_VISITS",
      "CCR_I16/PROBLEM",
    ],
  },
  "9:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATIENT_VISITS",
      "CCR_I16/PROBLEM",
    ],
  },
  "9:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: ["CCR_I16/MEDICATION_HISTORY", "CCR_I16/PATIENT_VISITS"],
  },
  "9:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: ["CCR_I16/PATIENT_VISITS"],
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
  "10:CTI": {
    groupsOpened: [],
    groupsClosed: [
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
  "11:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: [],
  },
  "11:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/CLINICAL_HISTORY",
    ],
  },
  "11:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
    ],
  },
  "11:RGS": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "12:IN1": {
    groupsOpened: ["CCR_I16/INSURANCE"],
    groupsClosed: [],
  },
  "12:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
    ],
  },
  "12:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: ["CCR_I16/APPOINTMENT_HISTORY", "CCR_I16/INSURANCE"],
  },
  "12:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCR_I16/INSURANCE"],
  },
  "13:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
    ],
  },
  "13:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: ["CCR_I16/APPOINTMENT_HISTORY", "CCR_I16/INSURANCE"],
  },
  "13:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCR_I16/INSURANCE"],
  },
  "13:IN1": {
    groupsOpened: ["CCR_I16/INSURANCE"],
    groupsClosed: [],
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
  "14:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/INSURANCE",
      "CCR_I16/PATIENT",
    ],
  },
  "14:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCR_I16/INSURANCE", "CCR_I16/PATIENT"],
  },
  "14:IN1": {
    groupsOpened: ["CCR_I16/INSURANCE"],
    groupsClosed: ["CCR_I16/PATIENT"],
  },
  "14:NK1": {
    groupsOpened: [],
    groupsClosed: ["CCR_I16/PATIENT"],
  },
  "16:TQ1": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
    groupsClosed: [],
  },
  "16:OBR": {
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
    groupsClosed: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
  },
  "18:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [],
  },
  "18:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "18:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "18:ROL": {
    groupsOpened: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "19:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [],
  },
  "19:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
  },
  "19:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "19:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "19:ROL": {
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCR_I16/PATHWAY"],
  },
  "20:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [],
  },
  "20:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "20:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "20:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "20:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "20:ROL": {
    groupsOpened: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY"],
  },
  "21:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [],
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
  "21:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
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
  "22:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PATIENT_VISITS",
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
  "22:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: ["CCR_I16/MEDICATION_HISTORY", "CCR_I16/PATIENT_VISITS"],
  },
  "22:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: ["CCR_I16/PATIENT_VISITS"],
  },
  "23:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "23:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: ["CCR_I16/CLINICAL_HISTORY"],
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
  "26:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "26:AIS": {
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CCR_I16/CLINICAL_HISTORY", "CCR_I16/PATIENT_VISITS"],
  },
  "27:IN1": {
    groupsOpened: ["CCR_I16/INSURANCE"],
    groupsClosed: [],
  },
  "27:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
    ],
  },
  "27:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: ["CCR_I16/APPOINTMENT_HISTORY", "CCR_I16/INSURANCE"],
  },
  "27:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCR_I16/INSURANCE"],
  },
  "28:IN1": {
    groupsOpened: ["CCR_I16/INSURANCE"],
    groupsClosed: [],
  },
  "28:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/INSURANCE",
    ],
  },
  "28:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: ["CCR_I16/APPOINTMENT_HISTORY", "CCR_I16/INSURANCE"],
  },
  "28:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: ["CCR_I16/INSURANCE"],
  },
  "30:TQ1": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
    groupsClosed: [],
  },
  "30:OBR": {
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
    groupsClosed: ["CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_TIMING"],
  },
  "31:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [],
  },
  "31:REL": {
    groupsOpened: [],
    groupsClosed: ["CCR_I16/PATHWAY"],
  },
  "33:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [],
  },
  "33:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "33:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "33:ROL": {
    groupsOpened: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "34:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [],
  },
  "34:REL": {
    groupsOpened: [],
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY"],
  },
  "34:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: ["CCR_I16/GOAL"],
  },
  "36:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [],
  },
  "36:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
  },
  "36:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "36:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "36:ROL": {
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCR_I16/PATHWAY"],
  },
  "37:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [],
  },
  "37:REL": {
    groupsOpened: [],
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY", "CCR_I16/PROBLEM"],
  },
  "37:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PROBLEM"],
  },
  "37:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: ["CCR_I16/PROBLEM"],
  },
  "39:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [],
  },
  "39:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "39:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "39:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "39:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "39:ROL": {
    groupsOpened: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY"],
  },
  "40:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [],
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
  "40:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/PROBLEM",
    ],
  },
  "40:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: ["CCR_I16/MEDICATION_HISTORY", "CCR_I16/PROBLEM"],
  },
  "40:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: ["CCR_I16/MEDICATION_HISTORY"],
  },
  "44:ROL": {
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CCR_I16/PATIENT_VISITS"],
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
  "44:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "48:ROL": {
    groupsOpened: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "48:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [],
  },
  "48:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "48:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "49:ROL": {
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCR_I16/PATHWAY"],
  },
  "49:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [],
  },
  "49:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
  },
  "49:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "49:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "50:ROL": {
    groupsOpened: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY"],
  },
  "50:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [],
  },
  "50:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "50:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "50:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "50:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "51:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY", "CCR_I16/PROBLEM"],
  },
  "51:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "51:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "51:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/PROBLEM",
    ],
  },
  "51:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/PROBLEM",
    ],
  },
  "51:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "51:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "52:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "52:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "52:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PROBLEM",
    ],
  },
  "52:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PROBLEM",
    ],
  },
  "52:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "52:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "52:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "53:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "53:REL": {
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
  "53:PTH": {
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
  "53:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PROBLEM",
    ],
  },
  "53:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "53:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "53:RXA": {
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
  "53:RXE": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "54:ROL": {
    groupsOpened: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
    groupsClosed: ["CCR_I16/PATIENT_VISITS"],
  },
  "54:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "54:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "54:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "57:OBR": {
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
    groupsClosed: ["CCR_I16/PATIENT"],
  },
  "57:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
    groupsClosed: ["CCR_I16/PATIENT"],
  },
  "57:PID": {
    groupsOpened: ["CCR_I16/PATIENT"],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
  },
  "57:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
  },
  "58:ROL": {
    groupsOpened: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
    groupsClosed: [],
  },
  "58:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [],
  },
  "58:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "58:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PATHWAY/ROLE_PATHWAY",
      "CCR_I16/PATHWAY/ROLE_PATHWAY/ROLE_PATHWAY_OBJECT",
    ],
  },
  "59:ROL": {
    groupsOpened: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
    groupsClosed: ["CCR_I16/PATHWAY"],
  },
  "59:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [],
  },
  "59:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
      "CCR_I16/PATHWAY",
    ],
  },
  "59:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "59:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL/ROLE_GOAL",
      "CCR_I16/GOAL/ROLE_GOAL/ROLE_GOAL_OBJECT",
    ],
  },
  "60:ROL": {
    groupsOpened: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY"],
  },
  "60:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [],
  },
  "60:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "60:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "60:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "60:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/PROBLEM/ROLE_PROBLEM",
      "CCR_I16/PROBLEM/ROLE_PROBLEM/ROLE_PROBLEM_OBJECT",
    ],
  },
  "61:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: ["CCR_I16/GOAL", "CCR_I16/PATHWAY", "CCR_I16/PROBLEM"],
  },
  "61:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "61:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "61:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/PROBLEM",
    ],
  },
  "61:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/PROBLEM",
    ],
  },
  "61:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "61:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
  },
  "62:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "62:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "62:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PROBLEM",
    ],
  },
  "62:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PROBLEM",
    ],
  },
  "62:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "62:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "62:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "63:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "63:REL": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "63:PTH": {
    groupsOpened: ["CCR_I16/PATHWAY"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PROBLEM",
    ],
  },
  "63:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PROBLEM",
    ],
  },
  "63:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "63:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
    ],
  },
  "63:RXA": {
    groupsOpened: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
    ],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "64:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "64:REL": {
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
  "64:PTH": {
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
  "64:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PROBLEM",
    ],
  },
  "64:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "64:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "64:RXA": {
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
  "64:RXE": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "65:ORC": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY"],
    groupsClosed: [],
  },
  "65:REL": {
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
  "65:PTH": {
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
  "65:GOL": {
    groupsOpened: ["CCR_I16/GOAL"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PROBLEM",
    ],
  },
  "65:PRB": {
    groupsOpened: ["CCR_I16/PROBLEM"],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "65:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
    ],
  },
  "65:RXA": {
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
  "65:RXE": {
    groupsOpened: ["CCR_I16/MEDICATION_HISTORY/MEDICATION_ENCODING_DETAIL"],
    groupsClosed: [
      "CCR_I16/GOAL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ADMINISTRATION_DETAIL",
      "CCR_I16/MEDICATION_HISTORY/MEDICATION_ORDER_DETAIL",
      "CCR_I16/PATHWAY",
      "CCR_I16/PROBLEM",
    ],
  },
  "68:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
    groupsClosed: ["CCR_I16/PATIENT"],
  },
  "68:PID": {
    groupsOpened: ["CCR_I16/PATIENT"],
    groupsClosed: ["CCR_I16/CLINICAL_ORDER"],
  },
  "69:OBR": {
    groupsOpened: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
    groupsClosed: ["CCR_I16/PATIENT"],
  },
  "69:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_ORDER"],
    groupsClosed: ["CCR_I16/PATIENT"],
  },
  "69:PID": {
    groupsOpened: ["CCR_I16/PATIENT"],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
  },
  "69:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL",
      "CCR_I16/CLINICAL_ORDER/CLINICAL_ORDER_DETAIL/CLINICAL_ORDER_OBJECT",
    ],
  },
  "71:AIS": {
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CCR_I16/CLINICAL_HISTORY", "CCR_I16/PATIENT_VISITS"],
  },
  "71:RGS": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "71:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "71:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/CLINICAL_HISTORY",
    ],
  },
  "71:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "73:AIS": {
    groupsOpened: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
    groupsClosed: ["CCR_I16/CLINICAL_HISTORY", "CCR_I16/PATIENT_VISITS"],
  },
  "73:RGS": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY/RESOURCES"],
    groupsClosed: [],
  },
  "73:SCH": {
    groupsOpened: ["CCR_I16/APPOINTMENT_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "73:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
      "CCR_I16/CLINICAL_HISTORY",
    ],
  },
  "73:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [
      "CCR_I16/APPOINTMENT_HISTORY",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL",
      "CCR_I16/APPOINTMENT_HISTORY/RESOURCES/RESOURCE_DETAIL/RESOURCE_OBJECT",
    ],
  },
  "78:OBR": {
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
  "78:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "78:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "78:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "78:ROL": {
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
  "79:OBR": {
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
  "79:ORC": {
    groupsOpened: ["CCR_I16/CLINICAL_HISTORY"],
    groupsClosed: [],
  },
  "79:PV1": {
    groupsOpened: ["CCR_I16/PATIENT_VISITS"],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "79:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL",
      "CCR_I16/CLINICAL_HISTORY/CLINICAL_HISTORY_DETAIL/CLINICAL_HISTORY_OBJECT",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY",
      "CCR_I16/CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY/ROLE_CLINICAL_HISTORY_OBJECT",
    ],
  },
  "79:ROL": {
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
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
