// Generated profile automaton for RAS_O17 (v2.8.2)

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
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "10:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "10:RXO": {
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
  },
  "11:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "11:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "11:RXO": {
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "13:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "14:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "15:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "16:AL1": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "16:ARV": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "16:NTE": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "16:ORC": {
    groupsClosed: [
      "RAS_O17/PATIENT",
      "RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RAS_O17/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "16:PV1": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "17:CTI": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "17:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "19:RXR": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "1:ORC": {
    groupsClosed: ["RAS_O17/PATIENT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "23:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "23:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "23:RXO": {
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
  },
  "23:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
  },
  "24:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "25:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "26:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "27:AL1": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "27:ARV": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "27:NTE": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "27:ORC": {
    groupsClosed: [
      "RAS_O17/PATIENT",
      "RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RAS_O17/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "27:PV1": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "28:ORC": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "29:CTI": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "29:ORC": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "29:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "2:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "2:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "2:RXO": {
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
  },
  "30:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "31:RXR": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "31:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "32:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "32:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "32:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "33:CTI": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "33:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "33:ORC": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "33:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "34:CTI": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "34:ORC": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "34:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "35:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "36:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "37:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "37:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "37:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "38:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "38:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "38:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "3:AL1": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "3:ARV": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "3:NTE": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "3:ORC": {
    groupsClosed: [
      "RAS_O17/PATIENT",
      "RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RAS_O17/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "3:PD1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "3:PV1": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["RAS_O17/PATIENT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: ["RAS_O17/PATIENT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["RAS_O17/PATIENT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/PATIENT"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "9:NTE": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION", "RAS_O17/ORDER/ENCODING"],
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
  },
  "9:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "9:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
