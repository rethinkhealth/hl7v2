// Generated profile automaton for RAS_O17 (v2.8)

export const start = 0;
export const finals = new Set<number>([17, 28, 29, 33, 34]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "CDO",
  "CTI",
  "MSH",
  "NTE",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PRT",
  "PV1",
  "PV2",
  "RXA",
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
      ["PRT", 11],
      ["RXA", 7],
      ["RXE", 8],
      ["RXO", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 13],
      ["ARV", 14],
      ["NTE", 15],
      ["ORC", 2],
      ["PD1", 16],
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
      ["PRT", 18],
      ["RXA", 7],
      ["RXR", 17],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 20],
      ["PRT", 21],
      ["TQ1", 19],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 22],
      ["RXA", 7],
      ["RXE", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["RXA", 7],
      ["RXE", 8],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 23],
    ]),
  ],
  [
    11,
    new Map([
      ["PRT", 11],
      ["RXA", 7],
      ["RXE", 8],
      ["RXO", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["ARV", 24],
      ["ORC", 2],
      ["PRT", 25],
      ["PV2", 26],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 13],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 13],
      ["ARV", 14],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 13],
      ["ARV", 14],
      ["NTE", 15],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 13],
      ["ARV", 14],
      ["NTE", 15],
      ["ORC", 2],
      ["PRT", 27],
      ["PV1", 12],
    ]),
  ],
  [
    17,
    new Map([
      ["CTI", 28],
      ["OBX", 29],
      ["ORC", 2],
      ["RXA", 7],
    ]),
  ],
  [
    18,
    new Map([
      ["PRT", 18],
      ["RXR", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["RXR", 30],
      ["TQ1", 19],
      ["TQ2", 31],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 20],
      ["TQ1", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 20],
      ["PRT", 21],
      ["TQ1", 19],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 22],
      ["RXR", 32],
    ]),
  ],
  [
    23,
    new Map([
      ["RXA", 7],
      ["RXE", 8],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["ARV", 24],
      ["ORC", 2],
    ]),
  ],
  [
    25,
    new Map([
      ["ARV", 24],
      ["ORC", 2],
      ["PRT", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["ARV", 24],
      ["ORC", 2],
      ["PRT", 25],
    ]),
  ],
  [
    27,
    new Map([
      ["AL1", 13],
      ["ARV", 14],
      ["NTE", 15],
      ["ORC", 2],
      ["PRT", 27],
      ["PV1", 12],
    ]),
  ],
  [
    28,
    new Map([
      ["CTI", 28],
      ["ORC", 2],
    ]),
  ],
  [
    29,
    new Map([
      ["CTI", 28],
      ["NTE", 33],
      ["OBX", 29],
      ["ORC", 2],
      ["PRT", 34],
      ["RXA", 7],
    ]),
  ],
  [
    30,
    new Map([
      ["CDO", 35],
      ["RXA", 7],
      ["RXC", 36],
      ["RXR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["RXR", 30],
      ["TQ1", 19],
      ["TQ2", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["RXA", 7],
      ["RXC", 37],
      ["RXE", 8],
      ["RXR", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["CTI", 28],
      ["NTE", 33],
      ["OBX", 29],
      ["ORC", 2],
      ["RXA", 7],
    ]),
  ],
  [
    34,
    new Map([
      ["CTI", 28],
      ["NTE", 33],
      ["OBX", 29],
      ["ORC", 2],
      ["PRT", 34],
      ["RXA", 7],
    ]),
  ],
  [
    35,
    new Map([
      ["CDO", 35],
      ["RXA", 7],
    ]),
  ],
  [
    36,
    new Map([
      ["CDO", 35],
      ["RXA", 7],
      ["RXC", 36],
    ]),
  ],
  [
    37,
    new Map([
      ["NTE", 38],
      ["RXA", 7],
      ["RXC", 37],
      ["RXE", 8],
    ]),
  ],
  [
    38,
    new Map([
      ["NTE", 38],
      ["RXA", 7],
      ["RXC", 37],
      ["RXE", 8],
    ]),
  ],
]);
export const effects = {
  "10:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "10:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "10:RXO": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
  },
  "10:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
    groupsClosed: [],
  },
  "11:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "11:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "11:RXO": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
  },
  "11:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "14:PV1": {
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "15:PV1": {
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:AL1": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "16:ARV": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "16:NTE": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "16:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: [
      "RAS_O17/PATIENT",
      "RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RAS_O17/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:PV1": {
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "17:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
  },
  "17:OBX": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "17:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "19:RXR": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "19:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "1:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RAS_O17/PATIENT"],
    groupsClosed: [],
  },
  "20:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "21:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "23:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "23:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "23:RXO": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
  },
  "23:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "25:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "26:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "27:AL1": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "27:ARV": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "27:NTE": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "27:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: [
      "RAS_O17/PATIENT",
      "RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RAS_O17/PATIENT/PATIENT_VISIT",
    ],
  },
  "27:PV1": {
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "28:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: [],
  },
  "29:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
  },
  "29:OBX": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "29:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "2:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "2:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "2:RXO": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
    groupsClosed: [],
  },
  "30:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
  },
  "31:RXR": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "31:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "32:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "32:RXC": {
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "32:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "33:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
  },
  "33:OBX": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsClosed: [],
  },
  "33:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "33:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "34:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
  },
  "34:OBX": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsClosed: [],
  },
  "34:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "34:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "35:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
  },
  "36:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
  },
  "37:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "37:RXC": {
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "37:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "38:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "38:RXC": {
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "38:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "3:ARV": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "3:NTE": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "3:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: [
      "RAS_O17/PATIENT",
      "RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RAS_O17/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:PD1": {
    groupsOpened: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsClosed: [],
  },
  "3:PV1": {
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "4:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["RAS_O17/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["RAS_O17/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["RAS_O17/PATIENT"],
    groupsClosed: [],
  },
  "8:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "9:NTE": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION", "RAS_O17/ORDER/ENCODING"],
  },
  "9:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "9:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
