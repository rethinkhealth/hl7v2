// Generated profile automaton for RDE_O11 (v2.5)

export const start = 0;
export const finals = new Set<number>([23, 26, 27, 28, 29, 30, 32]);
export const alphabet = new Set<string>([
  "AL1",
  "BLG",
  "CTI",
  "FT1",
  "GT1",
  "IN1",
  "IN2",
  "IN3",
  "MSH",
  "NTE",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "RXC",
  "RXE",
  "RXO",
  "RXR",
  "SFT",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["RXE", 6],
      ["RXO", 7],
      ["TQ1", 8],
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
  [
    5,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 16],
      ["TQ1", 15],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 18],
      ["RXR", 17],
    ]),
  ],
  [
    8,
    new Map([
      ["RXE", 6],
      ["RXO", 7],
      ["TQ1", 8],
      ["TQ2", 19],
    ]),
  ],
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
      ["IN2", 21],
      ["IN3", 20],
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
      ["PV2", 22],
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
  [
    15,
    new Map([
      ["RXR", 23],
      ["TQ1", 15],
      ["TQ2", 24],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 16],
      ["TQ1", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["RXC", 25],
      ["RXE", 6],
      ["RXR", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 18],
      ["RXR", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["RXE", 6],
      ["RXO", 7],
      ["TQ1", 8],
      ["TQ2", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["IN3", 20],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 9],
      ["GT1", 10],
      ["IN1", 11],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["BLG", 27],
      ["CTI", 26],
      ["FT1", 28],
      ["OBX", 29],
      ["ORC", 2],
      ["RXC", 30],
      ["RXR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["RXR", 23],
      ["TQ1", 15],
      ["TQ2", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 31],
      ["RXC", 25],
      ["RXE", 6],
    ]),
  ],
  [
    26,
    new Map([
      ["CTI", 26],
      ["ORC", 2],
    ]),
  ],
  [
    27,
    new Map([
      ["CTI", 26],
      ["ORC", 2],
    ]),
  ],
  [
    28,
    new Map([
      ["BLG", 27],
      ["CTI", 26],
      ["FT1", 28],
      ["ORC", 2],
    ]),
  ],
  [
    29,
    new Map([
      ["BLG", 27],
      ["CTI", 26],
      ["FT1", 28],
      ["NTE", 32],
      ["OBX", 29],
      ["ORC", 2],
    ]),
  ],
  [
    30,
    new Map([
      ["BLG", 27],
      ["CTI", 26],
      ["FT1", 28],
      ["OBX", 29],
      ["ORC", 2],
      ["RXC", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["NTE", 31],
      ["RXC", 25],
      ["RXE", 6],
    ]),
  ],
  [
    32,
    new Map([
      ["BLG", 27],
      ["CTI", 26],
      ["FT1", 28],
      ["NTE", 32],
      ["OBX", 29],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "1:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RDE_O11/PATIENT"],
    groupsClosed: [],
  },
  "2:RXE": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
  },
  "2:RXO": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["RDE_O11/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["RDE_O11/PATIENT"],
    groupsClosed: [],
  },
  "6:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "8:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
    groupsClosed: [],
  },
  "8:RXE": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
  },
  "8:RXO": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
  },
  "9:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "10:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "11:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
  },
  "11:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "11:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "12:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "13:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "14:PV1": {
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "15:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "16:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "17:RXE": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "17:RXC": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "19:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
    groupsClosed: [],
  },
  "19:RXE": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
  },
  "19:RXO": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
  },
  "20:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
  },
  "20:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "20:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "21:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
  },
  "21:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "21:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "22:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "22:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "23:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "23:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "23:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "23:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "23:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "24:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "24:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "25:RXC": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "25:RXE": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "26:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [],
  },
  "29:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "29:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "29:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "29:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "30:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "30:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "30:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "30:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "30:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "31:RXC": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "31:RXE": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "32:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "32:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "32:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "32:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "32:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
