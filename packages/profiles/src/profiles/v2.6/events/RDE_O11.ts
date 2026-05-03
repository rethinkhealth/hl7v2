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
    groupsClosed: ["RDE_O11/PATIENT"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "11:ORC": {
    groupsClosed: ["RDE_O11/PATIENT"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "12:AL1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "12:GT1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "12:IN1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "12:ORC": {
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
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
  "15:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "15:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "15:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/PATIENT_VISIT"],
  },
  "16:RXR": {
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "18:RXC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "18:RXE": {
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: [],
  },
  "1:ORC": {
    groupsClosed: ["RDE_O11/PATIENT"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT"],
  },
  "20:RXE": {
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
    groupsOpened: [],
  },
  "20:RXO": {
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
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
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "22:GT1": {
    groupsClosed: ["RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: [],
  },
  "22:IN1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "22:ORC": {
    groupsClosed: ["RDE_O11/PATIENT", "RDE_O11/PATIENT/INSURANCE"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "23:AL1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:GT1": {
    groupsClosed: [
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: [],
  },
  "23:IN1": {
    groupsClosed: ["RDE_O11/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RDE_O11/PATIENT/INSURANCE"],
  },
  "23:ORC": {
    groupsClosed: [
      "RDE_O11/PATIENT",
      "RDE_O11/PATIENT/INSURANCE",
      "RDE_O11/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "24:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "24:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "24:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "25:RXR": {
    groupsClosed: ["RDE_O11/ORDER/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "25:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "26:RXC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "26:RXE": {
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: [],
  },
  "27:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "28:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "29:ORC": {
    groupsClosed: [],
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
  "31:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "31:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "31:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "32:RXC": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "32:RXE": {
    groupsClosed: [
      "RDE_O11/ORDER/ORDER_DETAIL",
      "RDE_O11/ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: [],
  },
  "33:BLG": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "33:CTI": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "33:FT1": {
    groupsClosed: ["RDE_O11/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/OBSERVATION"],
  },
  "33:ORC": {
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
  "6:ORC": {
    groupsClosed: ["RDE_O11/PATIENT"],
    groupsOpened: ["RDE_O11/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/PATIENT"],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING_ENCODED"],
  },
  "9:RXE": {
    groupsClosed: ["RDE_O11/ORDER/ORDER_DETAIL", "RDE_O11/ORDER/TIMING"],
    groupsOpened: [],
  },
  "9:RXO": {
    groupsClosed: ["RDE_O11/ORDER/TIMING"],
    groupsOpened: ["RDE_O11/ORDER/ORDER_DETAIL"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDE_O11/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
