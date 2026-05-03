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
  "10:ORC": {
    groupsClosed: ["ORM_O01/PATIENT"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "11:AL1": {
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: ["ORM_O01/PATIENT", "ORM_O01/PATIENT/INSURANCE"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "12:AL1": {
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["ORM_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: [
      "ORM_O01/PATIENT",
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "13:AL1": {
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: ["ORM_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: [
      "ORM_O01/PATIENT",
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/PATIENT/PATIENT_VISIT"],
  },
  "14:AL1": {
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["ORM_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: [
      "ORM_O01/PATIENT",
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/PATIENT/PATIENT_VISIT"],
  },
  "16:AL1": {
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "16:GT1": {
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "16:IN1": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "16:ORC": {
    groupsClosed: ["ORM_O01/PATIENT", "ORM_O01/PATIENT/INSURANCE"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "17:AL1": {
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "17:ORC": {
    groupsClosed: ["ORM_O01/PATIENT", "ORM_O01/PATIENT/INSURANCE"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "18:AL1": {
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:GT1": {
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "18:IN1": {
    groupsClosed: ["ORM_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "18:ORC": {
    groupsClosed: [
      "ORM_O01/PATIENT",
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "1:ORC": {
    groupsClosed: ["ORM_O01/PATIENT"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/PATIENT"],
  },
  "22:BLG": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "22:CTD": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP"],
    groupsOpened: [],
  },
  "22:CTI": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "22:DG1": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP"],
    groupsOpened: [],
  },
  "22:FT1": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "22:NTE": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP"],
    groupsOpened: [],
  },
  "22:OBX": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP"],
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "23:BLG": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "23:CTI": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "23:FT1": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "24:BLG": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "24:CTI": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "24:FT1": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "25:BLG": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "25:CTI": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "25:FT1": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "26:BLG": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "26:CTI": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "26:FT1": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "27:BLG": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "27:CTI": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "27:FT1": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "2:BLG": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP",
    ],
    groupsOpened: [],
  },
  "2:CTI": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP",
    ],
    groupsOpened: [],
  },
  "2:FT1": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP",
    ],
    groupsOpened: [],
  },
  "2:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBRRQDRQ1RXOODSODT_SUPPGRP",
    ],
  },
  "2:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "3:AL1": {
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["ORM_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "ORM_O01/PATIENT",
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["ORM_O01/PATIENT"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "6:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "9:ORC": {
    groupsClosed: ["ORM_O01/PATIENT"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
