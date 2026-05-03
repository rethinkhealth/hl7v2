// Generated profile automaton for RDE_O11 (v2.5.1)

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
  "10:ORC": {
    groupsClosed: ["RDE_O11/PATIENT"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "11:AL1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:GT1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "11:IN1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "11:ORC": {
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "12:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "13:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "13:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "13:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "14:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "14:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "14:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "15:RXR": {
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "17:RXC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "17:RXE": {
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: [],
  },
  "19:RXE": {
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
    groupsOpened: [],
  },
  "19:RXO": {
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
  },
  "1:ORC": {
    groupsClosed: ["RDE_O11/PATIENT"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT"],
  },
  "20:AL1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "20:GT1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "20:IN1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "20:ORC": {
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "21:AL1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:GT1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "21:IN1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "21:ORC": {
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "22:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "22:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "23:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "23:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "23:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "24:RXR": {
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "24:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "25:RXC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "25:RXE": {
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: [],
  },
  "26:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "27:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "28:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "29:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "29:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "29:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "2:RXE": {
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:RXO": {
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
  },
  "30:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "30:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "30:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "31:RXC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "31:RXE": {
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: [],
  },
  "32:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "32:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "32:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "3:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "3:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "3:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["RDE_O11/PATIENT"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: ["RDE_O11/PATIENT"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT"],
  },
  "6:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "8:RXE": {
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:RXO": {
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
  },
  "9:ORC": {
    groupsClosed: ["RDE_O11/PATIENT"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
