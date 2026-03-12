// Generated profile automaton for RDE_O11 (v2.6)

export const start = 0;
export const finals = new Set<number>([24, 27, 28, 29, 30, 31, 33]);
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
      ["RXE", 7],
      ["RXO", 8],
      ["TQ1", 9],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["NTE", 14],
      ["ORC", 2],
      ["PD1", 15],
      ["PV1", 13],
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
  [
    7,
    new Map([
      ["NTE", 17],
      ["TQ1", 16],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 19],
      ["RXR", 18],
    ]),
  ],
  [
    9,
    new Map([
      ["RXE", 7],
      ["RXO", 8],
      ["TQ1", 9],
      ["TQ2", 20],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 10],
      ["ORC", 2],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 10],
      ["ORC", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["IN2", 22],
      ["IN3", 21],
      ["ORC", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
      ["PV2", 23],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["NTE", 14],
      ["ORC", 2],
      ["PV1", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["NTE", 14],
      ["ORC", 2],
      ["PV1", 13],
    ]),
  ],
  [
    16,
    new Map([
      ["RXR", 24],
      ["TQ1", 16],
      ["TQ2", 25],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 17],
      ["TQ1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["RXC", 26],
      ["RXE", 7],
      ["RXR", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 19],
      ["RXR", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["RXE", 7],
      ["RXO", 8],
      ["TQ1", 9],
      ["TQ2", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["IN3", 21],
      ["ORC", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["AL1", 10],
      ["GT1", 11],
      ["IN1", 12],
      ["ORC", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["BLG", 28],
      ["CTI", 27],
      ["FT1", 29],
      ["OBX", 30],
      ["ORC", 2],
      ["RXC", 31],
      ["RXR", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["RXR", 24],
      ["TQ1", 16],
      ["TQ2", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 32],
      ["RXC", 26],
      ["RXE", 7],
    ]),
  ],
  [
    27,
    new Map([
      ["CTI", 27],
      ["ORC", 2],
    ]),
  ],
  [
    28,
    new Map([
      ["CTI", 27],
      ["ORC", 2],
    ]),
  ],
  [
    29,
    new Map([
      ["BLG", 28],
      ["CTI", 27],
      ["FT1", 29],
      ["ORC", 2],
    ]),
  ],
  [
    30,
    new Map([
      ["BLG", 28],
      ["CTI", 27],
      ["FT1", 29],
      ["NTE", 33],
      ["OBX", 30],
      ["ORC", 2],
    ]),
  ],
  [
    31,
    new Map([
      ["BLG", 28],
      ["CTI", 27],
      ["FT1", 29],
      ["OBX", 30],
      ["ORC", 2],
      ["RXC", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["NTE", 32],
      ["RXC", 26],
      ["RXE", 7],
    ]),
  ],
  [
    33,
    new Map([
      ["BLG", 28],
      ["CTI", 27],
      ["FT1", 29],
      ["NTE", 33],
      ["OBX", 30],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "11:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "12:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "12:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "12:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
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
  "13:ORC": {
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
  "14:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "14:PV1": {
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "15:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:PV1": {
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "16:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "17:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "18:RXC": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "18:RXE": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "1:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RDE_O11/PATIENT"],
    groupsClosed: [],
  },
  "20:RXE": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
  },
  "20:RXO": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
  },
  "20:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
    groupsClosed: [],
  },
  "21:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "21:GT1": {
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
  "22:AL1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "22:GT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "22:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
  },
  "23:AL1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:GT1": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "23:IN1": {
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "23:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
  },
  "24:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "24:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "24:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "24:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "25:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "25:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "26:RXC": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "26:RXE": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "27:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [],
  },
  "28:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
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
  "30:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "30:CTI": {
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
  "30:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "31:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "31:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "31:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "31:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "32:RXC": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "32:RXE": {
    groupsOpened: [],
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "33:BLG": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "33:CTI": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "33:FT1": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "33:OBX": {
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
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
  "3:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
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
  "6:ORC": {
    groupsOpened: ["RDE_O11/ORDER"],
    groupsClosed: ["RDE_O11/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["RDE_O11/PATIENT"],
    groupsClosed: [],
  },
  "7:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "9:RXE": {
    groupsOpened: [],
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
  },
  "9:RXO": {
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
  },
  "9:TQ1": {
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
