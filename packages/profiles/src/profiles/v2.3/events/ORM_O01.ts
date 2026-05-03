// Generated profile automaton for ORM_O01 (v2.3)

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
  [18, new Map([["RXO", 19]])],
  [19, new Map([["ODS", 20]])],
  [20, new Map([["ODT", 21]])],
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
  "10:AL1": {
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "10:GT1": {
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "10:IN1": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "10:ORC": {
    groupsClosed: ["ORM_O01/PATIENT", "ORM_O01/PATIENT/INSURANCE"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "11:AL1": {
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: ["ORM_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: [
      "ORM_O01/PATIENT",
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
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
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/PATIENT/PATIENT_VISIT"],
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
  "15:AL1": {
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: ["ORM_O01/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: ["ORM_O01/PATIENT", "ORM_O01/PATIENT/INSURANCE"],
    groupsOpened: ["ORM_O01/ORDER"],
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
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:GT1": {
    groupsClosed: [
      "ORM_O01/PATIENT/INSURANCE",
      "ORM_O01/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "17:IN1": {
    groupsClosed: ["ORM_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["ORM_O01/PATIENT/INSURANCE"],
  },
  "17:ORC": {
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
  "21:BLG": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "21:CTI": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "21:DG1": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "21:NTE": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: [],
  },
  "21:OBX": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/CHOICE"],
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "22:BLG": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "22:CTI": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "22:OBX": {
    groupsClosed: [],
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
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: ["ORM_O01/ORDER/ORDER_DETAIL/OBSERVATION"],
    groupsOpened: ["ORM_O01/ORDER"],
  },
  "2:BLG": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: [],
  },
  "2:CTI": {
    groupsClosed: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
    ],
    groupsOpened: [],
  },
  "2:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "ORM_O01/ORDER/ORDER_DETAIL",
      "ORM_O01/ORDER/ORDER_DETAIL/CHOICE",
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
  "8:ORC": {
    groupsClosed: ["ORM_O01/PATIENT"],
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
