// Generated profile automaton for ORM_O01 (v2.5)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 22, 23, 24, 25, 26, 27]);
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
  "NTE",
  "OBR",
  "OBX",
  "ODS",
  "ODT",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "RQ1",
  "RQD",
  "RXO",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["BLG", 5],
      ["CTI", 6],
      ["FT1", 7],
      ["OBR", 8],
      ["ORC", 2],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NTE", 13],
      ["ORC", 2],
      ["PD1", 14],
      ["PV1", 12],
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
  [5, new Map([["ORC", 2]])],
  [
    6,
    new Map([
      ["BLG", 5],
      ["CTI", 6],
      ["ORC", 2],
    ]),
  ],
  [
    7,
    new Map([
      ["BLG", 5],
      ["CTI", 6],
      ["FT1", 7],
      ["ORC", 2],
    ]),
  ],
  [8, new Map([["RQD", 15]])],
  [
    9,
    new Map([
      ["AL1", 9],
      ["ORC", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 9],
      ["ORC", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN2", 17],
      ["IN3", 16],
      ["ORC", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
      ["PV2", 18],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NTE", 13],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["NTE", 13],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [15, new Map([["RQ1", 19]])],
  [
    16,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN3", 16],
      ["ORC", 2],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [19, new Map([["RXO", 20]])],
  [20, new Map([["ODS", 21]])],
  [21, new Map([["ODT", 22]])],
  [
    22,
    new Map([
      ["BLG", 5],
      ["CTD", 25],
      ["CTI", 6],
      ["DG1", 24],
      ["FT1", 7],
      ["NTE", 26],
      ["OBX", 23],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["BLG", 5],
      ["CTI", 6],
      ["FT1", 7],
      ["NTE", 27],
      ["OBX", 23],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["BLG", 5],
      ["CTI", 6],
      ["DG1", 24],
      ["FT1", 7],
      ["OBX", 23],
      ["ORC", 2],
    ]),
  ],
  [
    25,
    new Map([
      ["BLG", 5],
      ["CTI", 6],
      ["DG1", 24],
      ["FT1", 7],
      ["OBX", 23],
      ["ORC", 2],
    ]),
  ],
  [
    26,
    new Map([
      ["BLG", 5],
      ["CTD", 25],
      ["CTI", 6],
      ["DG1", 24],
      ["FT1", 7],
      ["NTE", 26],
      ["OBX", 23],
      ["ORC", 2],
    ]),
  ],
  [
    27,
    new Map([
      ["BLG", 5],
      ["CTI", 6],
      ["FT1", 7],
      ["NTE", 27],
      ["OBX", 23],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "1:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["ORM_O01/PATIENT"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [],
  },
  "2:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP",
    ],
  },
  "2:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP",
    ],
  },
  "2:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP",
    ],
  },
  "2:OBR": {
    groupsOpened: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP",
    ],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [
      "ORM_O01/PATIENT",
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
    groupsClosed: ["ORM_O01/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["ORM_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["ORM_O01/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT"],
  },
  "10:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT"],
  },
  "11:IN1": {
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT", "ORM_O01/PATIENT/INSURANCE"],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [
      "ORM_O01/PATIENT",
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:IN1": {
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
    groupsClosed: ["ORM_O01/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [
      "ORM_O01/PATIENT",
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:IN1": {
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
    groupsClosed: ["ORM_O01/PATIENT/PATIENT_VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["ORM_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [
      "ORM_O01/PATIENT",
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:IN1": {
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
    groupsClosed: ["ORM_O01/PATIENT/PATIENT_VISIT"],
  },
  "14:PV1": {
    groupsOpened: ["ORM_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:IN1": {
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT", "ORM_O01/PATIENT/INSURANCE"],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "16:GT1": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "17:IN1": {
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT", "ORM_O01/PATIENT/INSURANCE"],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "18:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [
      "ORM_O01/PATIENT",
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:IN1": {
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
    groupsClosed: ["ORM_O01/PATIENT/PATIENT_VISIT"],
  },
  "22:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "22:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "22:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "22:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "22:OBX": {
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP"],
  },
  "22:DG1": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP"],
  },
  "22:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP"],
  },
  "22:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP"],
  },
  "23:OBX": {
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "23:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "23:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "23:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "24:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "24:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "24:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "24:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "24:OBX": {
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "25:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "25:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "25:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "25:OBX": {
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "26:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "26:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "26:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "26:OBX": {
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "27:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "27:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "27:FT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
