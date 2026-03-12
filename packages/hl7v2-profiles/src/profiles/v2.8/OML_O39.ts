// Generated profile automaton for OML_O39 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  2, 7, 8, 9, 10, 11, 12, 23, 24, 25, 26, 27, 28, 29, 34, 36, 37, 38, 39, 41,
  42, 43, 44, 45,
]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "BLG",
  "CTD",
  "CTI",
  "DG1",
  "FT1",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
  "MSH",
  "NK1",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PAC",
  "PD1",
  "PID",
  "PRT",
  "PV1",
  "PV2",
  "SAC",
  "SFT",
  "SHP",
  "SPM",
  "TCD",
  "TQ1",
  "TQ2",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 10],
      ["ORC", 2],
      ["PRT", 12],
      ["TQ1", 11],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 13],
      ["ARV", 17],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 18],
      ["NTE", 19],
      ["ORC", 2],
      ["PD1", 21],
      ["PRT", 20],
      ["PV1", 16],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [7, new Map([["ORC", 2]])],
  [
    8,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["ORC", 2],
    ]),
  ],
  [
    9,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["ORC", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["BLG", 7],
      ["CTD", 25],
      ["CTI", 8],
      ["DG1", 24],
      ["FT1", 9],
      ["NTE", 27],
      ["OBX", 23],
      ["ORC", 2],
      ["PRT", 26],
      ["SHP", 22],
      ["TCD", 28],
    ]),
  ],
  [
    11,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 10],
      ["ORC", 2],
      ["TQ1", 11],
      ["TQ2", 29],
    ]),
  ],
  [
    12,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 10],
      ["ORC", 2],
      ["PRT", 12],
      ["TQ1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 13],
      ["ORC", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 13],
      ["ORC", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["IN2", 31],
      ["IN3", 30],
      ["ORC", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
      ["PRT", 32],
      ["PV2", 33],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 13],
      ["ARV", 17],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
      ["PV1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 13],
      ["ARV", 17],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 18],
      ["ORC", 2],
      ["PV1", 16],
    ]),
  ],
  [
    19,
    new Map([
      ["AL1", 13],
      ["ARV", 17],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 18],
      ["NTE", 19],
      ["ORC", 2],
      ["PV1", 16],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 13],
      ["ARV", 17],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 18],
      ["NTE", 19],
      ["ORC", 2],
      ["PRT", 20],
      ["PV1", 16],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 13],
      ["ARV", 17],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 18],
      ["NTE", 19],
      ["ORC", 2],
      ["PRT", 20],
      ["PV1", 16],
    ]),
  ],
  [
    22,
    new Map([
      ["OBX", 35],
      ["PAC", 34],
    ]),
  ],
  [
    23,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 36],
      ["OBX", 23],
      ["ORC", 2],
      ["PRT", 38],
      ["SHP", 22],
      ["TCD", 37],
    ]),
  ],
  [
    24,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["DG1", 24],
      ["FT1", 9],
      ["OBX", 23],
      ["ORC", 2],
      ["SHP", 22],
    ]),
  ],
  [
    25,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["DG1", 24],
      ["FT1", 9],
      ["OBX", 23],
      ["ORC", 2],
      ["SHP", 22],
    ]),
  ],
  [
    26,
    new Map([
      ["BLG", 7],
      ["CTD", 25],
      ["CTI", 8],
      ["DG1", 24],
      ["FT1", 9],
      ["OBX", 23],
      ["ORC", 2],
      ["PRT", 26],
      ["SHP", 22],
    ]),
  ],
  [
    27,
    new Map([
      ["BLG", 7],
      ["CTD", 25],
      ["CTI", 8],
      ["DG1", 24],
      ["FT1", 9],
      ["NTE", 27],
      ["OBX", 23],
      ["ORC", 2],
      ["PRT", 26],
      ["SHP", 22],
    ]),
  ],
  [
    28,
    new Map([
      ["BLG", 7],
      ["CTD", 25],
      ["CTI", 8],
      ["DG1", 24],
      ["FT1", 9],
      ["NTE", 27],
      ["OBX", 23],
      ["ORC", 2],
      ["PRT", 26],
      ["SHP", 22],
    ]),
  ],
  [
    29,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 10],
      ["ORC", 2],
      ["TQ1", 11],
      ["TQ2", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
    ]),
  ],
  [
    31,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["IN3", 30],
      ["ORC", 2],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
      ["PRT", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
      ["PRT", 32],
    ]),
  ],
  [
    34,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["ORC", 2],
      ["PAC", 34],
      ["SHP", 22],
      ["SPM", 39],
    ]),
  ],
  [
    35,
    new Map([
      ["OBX", 35],
      ["PAC", 34],
      ["PRT", 40],
    ]),
  ],
  [
    36,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 36],
      ["OBX", 23],
      ["ORC", 2],
      ["SHP", 22],
    ]),
  ],
  [
    37,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 36],
      ["OBX", 23],
      ["ORC", 2],
      ["SHP", 22],
    ]),
  ],
  [
    38,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 36],
      ["OBX", 23],
      ["ORC", 2],
      ["PRT", 38],
      ["SHP", 22],
      ["TCD", 37],
    ]),
  ],
  [
    39,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 42],
      ["ORC", 2],
      ["PAC", 34],
      ["SAC", 41],
      ["SHP", 22],
      ["SPM", 39],
    ]),
  ],
  [
    40,
    new Map([
      ["OBX", 35],
      ["PAC", 34],
      ["PRT", 40],
    ]),
  ],
  [
    41,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 43],
      ["ORC", 2],
      ["PAC", 34],
      ["SAC", 41],
      ["SHP", 22],
      ["SPM", 39],
    ]),
  ],
  [
    42,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 42],
      ["ORC", 2],
      ["PAC", 34],
      ["PRT", 44],
      ["SAC", 41],
      ["SHP", 22],
      ["SPM", 39],
    ]),
  ],
  [
    43,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 43],
      ["ORC", 2],
      ["PAC", 34],
      ["PRT", 45],
      ["SAC", 41],
      ["SHP", 22],
      ["SPM", 39],
    ]),
  ],
  [
    44,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 42],
      ["ORC", 2],
      ["PAC", 34],
      ["PRT", 44],
      ["SAC", 41],
      ["SHP", 22],
      ["SPM", 39],
    ]),
  ],
  [
    45,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 43],
      ["ORC", 2],
      ["PAC", 34],
      ["PRT", 45],
      ["SAC", 41],
      ["SHP", 22],
      ["SPM", 39],
    ]),
  ],
]);
export const effects = {
  "10:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "10:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "10:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "10:OBX": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "10:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "11:BLG": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
  },
  "11:CTI": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
  },
  "11:FT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
  },
  "11:OBR": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["OML_O39/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [],
  },
  "11:TQ1": {
    groupsOpened: ["OML_O39/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:BLG": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
  },
  "12:CTI": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
  },
  "12:FT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
  },
  "12:OBR": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["OML_O39/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: ["OML_O39/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: ["OML_O39/PATIENT"],
  },
  "14:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: ["OML_O39/PATIENT"],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/PATIENT/INSURANCE"],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/PATIENT/INSURANCE"],
  },
  "15:IN1": {
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: ["OML_O39/PATIENT", "OML_O39/PATIENT/INSURANCE"],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:IN1": {
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
  },
  "16:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:IN1": {
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
  },
  "17:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:PV1": {
    groupsOpened: ["OML_O39/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "18:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:IN1": {
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
  },
  "18:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:PV1": {
    groupsOpened: ["OML_O39/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "19:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "19:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "19:IN1": {
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
  },
  "19:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "19:PV1": {
    groupsOpened: ["OML_O39/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "1:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: ["OML_O39/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OML_O39/PATIENT"],
    groupsClosed: [],
  },
  "20:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "20:IN1": {
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
  },
  "20:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "20:PV1": {
    groupsOpened: ["OML_O39/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "21:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "21:IN1": {
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
  },
  "21:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "21:PV1": {
    groupsOpened: ["OML_O39/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/SHIPMENT_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "22:PAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/SHIPMENT_OBSERVATION",
    ],
  },
  "23:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "23:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "23:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "23:OBX": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "23:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "24:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "24:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "24:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "24:OBX": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "24:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "25:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "25:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "25:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "25:OBX": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "25:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "26:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "26:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "26:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "26:OBX": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "26:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "27:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "27:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "27:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "27:OBX": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "27:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "28:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "28:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "28:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "28:OBX": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "28:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "29:BLG": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
  },
  "29:CTI": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
  },
  "29:FT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
  },
  "29:OBR": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["OML_O39/ORDER/TIMING"],
  },
  "29:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [],
  },
  "29:TQ1": {
    groupsOpened: ["OML_O39/ORDER/TIMING"],
    groupsClosed: [],
  },
  "2:BLG": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
  },
  "2:CTI": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
  },
  "2:FT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
  },
  "2:OBR": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["OML_O39/ORDER/TIMING"],
  },
  "2:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [],
  },
  "2:TQ1": {
    groupsOpened: ["OML_O39/ORDER/TIMING"],
    groupsClosed: [],
  },
  "30:AL1": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/PATIENT/INSURANCE"],
  },
  "30:GT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/PATIENT/INSURANCE"],
  },
  "30:IN1": {
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "30:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: ["OML_O39/PATIENT", "OML_O39/PATIENT/INSURANCE"],
  },
  "31:AL1": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/PATIENT/INSURANCE"],
  },
  "31:GT1": {
    groupsOpened: [],
    groupsClosed: ["OML_O39/PATIENT/INSURANCE"],
  },
  "31:IN1": {
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: ["OML_O39/PATIENT", "OML_O39/PATIENT/INSURANCE"],
  },
  "32:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "32:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "32:IN1": {
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
  },
  "32:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "33:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "33:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "33:IN1": {
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
  },
  "33:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "34:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "34:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "34:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "34:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "34:PAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [],
  },
  "34:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "34:SPM": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "35:OBX": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/SHIPMENT_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "35:PAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/SHIPMENT_OBSERVATION",
    ],
  },
  "36:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "36:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "36:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "36:OBX": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsClosed: [],
  },
  "36:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "36:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "37:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "37:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "37:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "37:OBX": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsClosed: [],
  },
  "37:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "37:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "38:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "38:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "38:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "38:OBX": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsClosed: [],
  },
  "38:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "38:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "39:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "39:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "39:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "39:OBX": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "39:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "39:PAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "39:SAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "39:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "39:SPM": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
  },
  "3:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:PV1": {
    groupsOpened: ["OML_O39/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "40:OBX": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/SHIPMENT_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "40:PAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/SHIPMENT_OBSERVATION",
    ],
  },
  "41:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "41:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "41:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "41:OBX": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "41:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "41:PAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "41:SAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "41:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "41:SPM": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "42:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "42:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "42:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "42:OBX": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "42:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "42:PAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "42:SAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "42:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "42:SPM": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "43:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "43:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "43:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "43:OBX": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "43:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "43:PAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "43:SAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "43:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "43:SPM": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "44:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "44:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "44:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "44:OBX": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "44:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "44:PAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "44:SAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "44:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "44:SPM": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "45:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "45:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "45:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "45:OBX": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "45:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "45:PAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "45:SAC": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "45:SHP": {
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "45:SPM": {
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "4:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: ["OML_O39/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["OML_O39/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: ["OML_O39/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OML_O39/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: ["OML_O39/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OML_O39/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["OML_O39/ORDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
