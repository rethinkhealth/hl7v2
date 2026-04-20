// Generated profile automaton for ORM_O01 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 21, 22, 23, 24, 25]);
export const alphabet = new Set<string>([
  "AL1",
  "BLG",
  "CTI",
  "DG1",
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
      ["OBR", 7],
      ["ORC", 2],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["NTE", 12],
      ["ORC", 2],
      ["PD1", 13],
      ["PV1", 11],
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
  [7, new Map([["RQD", 14]])],
  [
    8,
    new Map([
      ["AL1", 8],
      ["ORC", 2],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 8],
      ["ORC", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["IN2", 16],
      ["IN3", 15],
      ["ORC", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["ORC", 2],
      ["PV2", 17],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["NTE", 12],
      ["ORC", 2],
      ["PV1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["NTE", 12],
      ["ORC", 2],
      ["PV1", 11],
    ]),
  ],
  [14, new Map([["RQ1", 18]])],
  [
    15,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["IN3", 15],
      ["ORC", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["IN3", 15],
      ["ORC", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 8],
      ["GT1", 9],
      ["IN1", 10],
      ["ORC", 2],
    ]),
  ],
  [18, new Map([["ODS", 19]])],
  [19, new Map([["ODT", 20]])],
  [20, new Map([["RXO", 21]])],
  [
    21,
    new Map([
      ["BLG", 5],
      ["CTI", 6],
      ["DG1", 23],
      ["NTE", 24],
      ["OBX", 22],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["BLG", 5],
      ["CTI", 6],
      ["NTE", 25],
      ["OBX", 22],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["BLG", 5],
      ["CTI", 6],
      ["DG1", 23],
      ["OBX", 22],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["BLG", 5],
      ["CTI", 6],
      ["DG1", 23],
      ["NTE", 24],
      ["OBX", 22],
      ["ORC", 2],
    ]),
  ],
  [
    25,
    new Map([
      ["BLG", 5],
      ["CTI", 6],
      ["NTE", 25],
      ["OBX", 22],
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
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "2:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
    ],
  },
  "2:OBR": {
    groupsOpened: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
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
  "8:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT"],
  },
  "9:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT"],
  },
  "10:IN1": {
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT", "ORM_O01/PATIENT/INSURANCE"],
  },
  "10:AL1": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "10:GT1": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [
      "ORM_O01/PATIENT",
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "11:IN1": {
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
    groupsClosed: ["ORM_O01/PATIENT/PATIENT_VISIT"],
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
  "12:PV1": {
    groupsOpened: ["ORM_O01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
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
  "15:IN1": {
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/PATIENT", "ORM_O01/PATIENT/INSURANCE"],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
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
  "17:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: [
      "ORM_O01/PATIENT",
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:IN1": {
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
    groupsClosed: ["ORM_O01/PATIENT/PATIENT_VISIT"],
  },
  "21:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "21:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "21:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "21:OBX": {
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "21:DG1": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "21:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/CHOICE"],
  },
  "22:OBX": {
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["ORM_O01/ORDER"],
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "22:BLG": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
  },
  "22:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
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
  "23:OBX": {
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: [],
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
  "24:OBX": {
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsClosed: [],
  },
  "25:OBX": {
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
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
