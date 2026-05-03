// Generated profile automaton for OML_O39 (v2.7)

export const start = 0;
export const finals = new Set<number>([
  2, 7, 8, 9, 10, 11, 12, 22, 23, 24, 25, 26, 27, 28, 33, 35, 36, 37, 38, 40,
  41, 42, 43, 44,
]);
export const alphabet = new Set<string>([
  "AL1",
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
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 17],
      ["NTE", 18],
      ["ORC", 2],
      ["PD1", 20],
      ["PRT", 19],
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
      ["CTD", 24],
      ["CTI", 8],
      ["DG1", 23],
      ["FT1", 9],
      ["NTE", 26],
      ["OBX", 22],
      ["ORC", 2],
      ["PRT", 25],
      ["SHP", 21],
      ["TCD", 27],
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
      ["TQ2", 28],
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
      ["IN2", 30],
      ["IN3", 29],
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
      ["PRT", 31],
      ["PV2", 32],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 17],
      ["ORC", 2],
      ["PV1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 17],
      ["NTE", 18],
      ["ORC", 2],
      ["PV1", 16],
    ]),
  ],
  [
    19,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 17],
      ["NTE", 18],
      ["ORC", 2],
      ["PRT", 19],
      ["PV1", 16],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["NK1", 17],
      ["NTE", 18],
      ["ORC", 2],
      ["PRT", 19],
      ["PV1", 16],
    ]),
  ],
  [
    21,
    new Map([
      ["OBX", 34],
      ["PAC", 33],
    ]),
  ],
  [
    22,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 35],
      ["OBX", 22],
      ["ORC", 2],
      ["PRT", 37],
      ["SHP", 21],
      ["TCD", 36],
    ]),
  ],
  [
    23,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["DG1", 23],
      ["FT1", 9],
      ["OBX", 22],
      ["ORC", 2],
      ["SHP", 21],
    ]),
  ],
  [
    24,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["DG1", 23],
      ["FT1", 9],
      ["OBX", 22],
      ["ORC", 2],
      ["SHP", 21],
    ]),
  ],
  [
    25,
    new Map([
      ["BLG", 7],
      ["CTD", 24],
      ["CTI", 8],
      ["DG1", 23],
      ["FT1", 9],
      ["OBX", 22],
      ["ORC", 2],
      ["PRT", 25],
      ["SHP", 21],
    ]),
  ],
  [
    26,
    new Map([
      ["BLG", 7],
      ["CTD", 24],
      ["CTI", 8],
      ["DG1", 23],
      ["FT1", 9],
      ["NTE", 26],
      ["OBX", 22],
      ["ORC", 2],
      ["PRT", 25],
      ["SHP", 21],
    ]),
  ],
  [
    27,
    new Map([
      ["BLG", 7],
      ["CTD", 24],
      ["CTI", 8],
      ["DG1", 23],
      ["FT1", 9],
      ["NTE", 26],
      ["OBX", 22],
      ["ORC", 2],
      ["PRT", 25],
      ["SHP", 21],
    ]),
  ],
  [
    28,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBR", 10],
      ["ORC", 2],
      ["TQ1", 11],
      ["TQ2", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
    ]),
  ],
  [
    30,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["IN3", 29],
      ["ORC", 2],
    ]),
  ],
  [
    31,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
      ["PRT", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 13],
      ["GT1", 14],
      ["IN1", 15],
      ["ORC", 2],
      ["PRT", 31],
    ]),
  ],
  [
    33,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["ORC", 2],
      ["PAC", 33],
      ["SHP", 21],
      ["SPM", 38],
    ]),
  ],
  [
    34,
    new Map([
      ["OBX", 34],
      ["PAC", 33],
      ["PRT", 39],
    ]),
  ],
  [
    35,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 35],
      ["OBX", 22],
      ["ORC", 2],
      ["SHP", 21],
    ]),
  ],
  [
    36,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 35],
      ["OBX", 22],
      ["ORC", 2],
      ["SHP", 21],
    ]),
  ],
  [
    37,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["NTE", 35],
      ["OBX", 22],
      ["ORC", 2],
      ["PRT", 37],
      ["SHP", 21],
      ["TCD", 36],
    ]),
  ],
  [
    38,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 41],
      ["ORC", 2],
      ["PAC", 33],
      ["SAC", 40],
      ["SHP", 21],
      ["SPM", 38],
    ]),
  ],
  [
    39,
    new Map([
      ["OBX", 34],
      ["PAC", 33],
      ["PRT", 39],
    ]),
  ],
  [
    40,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 42],
      ["ORC", 2],
      ["PAC", 33],
      ["SAC", 40],
      ["SHP", 21],
      ["SPM", 38],
    ]),
  ],
  [
    41,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 41],
      ["ORC", 2],
      ["PAC", 33],
      ["PRT", 43],
      ["SAC", 40],
      ["SHP", 21],
      ["SPM", 38],
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
      ["PAC", 33],
      ["PRT", 44],
      ["SAC", 40],
      ["SHP", 21],
      ["SPM", 38],
    ]),
  ],
  [
    43,
    new Map([
      ["BLG", 7],
      ["CTI", 8],
      ["FT1", 9],
      ["OBX", 41],
      ["ORC", 2],
      ["PAC", 33],
      ["PRT", 43],
      ["SAC", 40],
      ["SHP", 21],
      ["SPM", 38],
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
      ["PAC", 33],
      ["PRT", 44],
      ["SAC", 40],
      ["SHP", 21],
      ["SPM", 38],
    ]),
  ],
]);
export const effects = {
  "10:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "10:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "10:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "10:SHP": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "11:BLG": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:CTI": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:FT1": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: ["OML_O39/ORDER/TIMING"],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER/TIMING"],
  },
  "12:BLG": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:CTI": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:FT1": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: ["OML_O39/ORDER/TIMING"],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST"],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER/TIMING"],
  },
  "13:ORC": {
    groupsClosed: ["OML_O39/PATIENT"],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "14:ORC": {
    groupsClosed: ["OML_O39/PATIENT"],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "15:AL1": {
    groupsClosed: ["OML_O39/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: ["OML_O39/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: ["OML_O39/PATIENT", "OML_O39/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "16:AL1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "17:AL1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/PATIENT/PATIENT_VISIT"],
  },
  "18:AL1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:GT1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
  },
  "18:ORC": {
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "18:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/PATIENT/PATIENT_VISIT"],
  },
  "19:AL1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "19:GT1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "19:IN1": {
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
  },
  "19:ORC": {
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "19:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/PATIENT/PATIENT_VISIT"],
  },
  "1:ORC": {
    groupsClosed: ["OML_O39/PATIENT"],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/PATIENT"],
  },
  "20:AL1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "20:GT1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
  },
  "20:ORC": {
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "20:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/PATIENT/PATIENT_VISIT"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/SHIPMENT_OBSERVATION",
    ],
  },
  "21:PAC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/SHIPMENT_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "22:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "22:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "22:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "22:SHP": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "23:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "23:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "23:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "23:SHP": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "24:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "24:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "24:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "24:SHP": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "25:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "25:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "25:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "25:SHP": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "26:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "26:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "26:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "26:SHP": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "27:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "27:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "27:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "27:SHP": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "28:BLG": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
    groupsOpened: [],
  },
  "28:CTI": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
    groupsOpened: [],
  },
  "28:FT1": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
    groupsOpened: [],
  },
  "28:OBR": {
    groupsClosed: ["OML_O39/ORDER/TIMING"],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST"],
  },
  "28:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "28:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER/TIMING"],
  },
  "29:AL1": {
    groupsClosed: ["OML_O39/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "29:GT1": {
    groupsClosed: ["OML_O39/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "29:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
  },
  "29:ORC": {
    groupsClosed: ["OML_O39/PATIENT", "OML_O39/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "2:BLG": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:CTI": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:FT1": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST", "OML_O39/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:OBR": {
    groupsClosed: ["OML_O39/ORDER/TIMING"],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST"],
  },
  "2:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER/TIMING"],
  },
  "30:AL1": {
    groupsClosed: ["OML_O39/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "30:GT1": {
    groupsClosed: ["OML_O39/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "30:IN1": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
  },
  "30:ORC": {
    groupsClosed: ["OML_O39/PATIENT", "OML_O39/PATIENT/INSURANCE"],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "31:AL1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "31:GT1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "31:IN1": {
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
  },
  "31:ORC": {
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "32:AL1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "32:GT1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "32:IN1": {
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
  },
  "32:ORC": {
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "33:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsOpened: [],
  },
  "33:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsOpened: [],
  },
  "33:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "33:PAC": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "33:SHP": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "33:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/SHIPMENT_OBSERVATION",
    ],
  },
  "34:PAC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/SHIPMENT_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "35:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "35:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "35:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "35:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "35:SHP": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "36:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "36:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "36:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "36:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "36:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "36:SHP": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "37:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "37:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "37:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: [],
  },
  "37:OBX": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
  },
  "37:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "37:SHP": {
    groupsClosed: ["OML_O39/ORDER/OBSERVATION_REQUEST/OBSERVATION"],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "38:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "38:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "38:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "38:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "38:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "38:PAC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "38:SAC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "38:SHP": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "38:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "39:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/SHIPMENT_OBSERVATION",
    ],
  },
  "39:PAC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/SHIPMENT_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "3:AL1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["OML_O39/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["OML_O39/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "OML_O39/PATIENT",
      "OML_O39/PATIENT/INSURANCE",
      "OML_O39/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/PATIENT/PATIENT_VISIT"],
  },
  "40:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "40:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "40:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "40:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "40:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "40:PAC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "40:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "40:SHP": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "40:SPM": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "41:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "41:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "41:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "41:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "41:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "41:PAC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "41:SAC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "41:SHP": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "41:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "42:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "42:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "42:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "42:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "42:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "42:PAC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "42:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "42:SHP": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "42:SPM": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "43:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "43:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "43:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "43:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
  },
  "43:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "43:PAC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "43:SAC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "43:SHP": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "43:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "44:BLG": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "44:CTI": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "44:FT1": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [],
  },
  "44:OBX": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
  },
  "44:ORC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "44:PAC": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "44:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "44:SHP": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: ["OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT"],
  },
  "44:SPM": {
    groupsClosed: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE/CONTAINER_OBSERVATION",
    ],
    groupsOpened: [
      "OML_O39/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "4:ORC": {
    groupsClosed: ["OML_O39/PATIENT"],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: ["OML_O39/PATIENT"],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["OML_O39/PATIENT"],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/PATIENT"],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["OML_O39/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
