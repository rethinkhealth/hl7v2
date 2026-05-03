// Generated profile automaton for RAS_O17 (v2.7)

export const start = 0;
export const finals = new Set<number>([16, 26, 27, 31, 32]);
export const alphabet = new Set<string>([
  "AL1",
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
      ["PRT", 9],
      ["RXA", 7],
      ["RXE", 8],
      ["RXO", 10],
      ["TQ1", 11],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 13],
      ["NTE", 14],
      ["ORC", 2],
      ["PD1", 15],
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
      ["PRT", 17],
      ["RXA", 7],
      ["RXR", 16],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 19],
      ["PRT", 20],
      ["TQ1", 18],
    ]),
  ],
  [
    9,
    new Map([
      ["PRT", 9],
      ["RXA", 7],
      ["RXE", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 21],
      ["PRT", 9],
      ["RXA", 7],
      ["RXE", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["PRT", 9],
      ["RXA", 7],
      ["RXE", 8],
      ["RXO", 10],
      ["TQ1", 11],
      ["TQ2", 22],
    ]),
  ],
  [
    12,
    new Map([
      ["ORC", 2],
      ["PRT", 23],
      ["PV2", 24],
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
      ["NTE", 14],
      ["ORC", 2],
      ["PV1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 13],
      ["NTE", 14],
      ["ORC", 2],
      ["PRT", 25],
      ["PV1", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["CTI", 26],
      ["OBX", 27],
      ["ORC", 2],
      ["RXA", 7],
    ]),
  ],
  [
    17,
    new Map([
      ["PRT", 17],
      ["RXR", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["RXR", 28],
      ["TQ1", 18],
      ["TQ2", 29],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 19],
      ["TQ1", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 19],
      ["PRT", 20],
      ["TQ1", 18],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 21],
      ["RXR", 30],
    ]),
  ],
  [
    22,
    new Map([
      ["PRT", 9],
      ["RXA", 7],
      ["RXE", 8],
      ["RXO", 10],
      ["TQ1", 11],
      ["TQ2", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["ORC", 2],
      ["PRT", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["ORC", 2],
      ["PRT", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["AL1", 13],
      ["NTE", 14],
      ["ORC", 2],
      ["PRT", 25],
      ["PV1", 12],
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
      ["NTE", 31],
      ["OBX", 27],
      ["ORC", 2],
      ["PRT", 32],
      ["RXA", 7],
    ]),
  ],
  [
    28,
    new Map([
      ["RXA", 7],
      ["RXC", 33],
      ["RXR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["RXR", 28],
      ["TQ1", 18],
      ["TQ2", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["PRT", 9],
      ["RXA", 7],
      ["RXC", 34],
      ["RXE", 8],
      ["RXR", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["CTI", 26],
      ["NTE", 31],
      ["OBX", 27],
      ["ORC", 2],
      ["RXA", 7],
    ]),
  ],
  [
    32,
    new Map([
      ["CTI", 26],
      ["NTE", 31],
      ["OBX", 27],
      ["ORC", 2],
      ["PRT", 32],
      ["RXA", 7],
    ]),
  ],
  [
    33,
    new Map([
      ["RXA", 7],
      ["RXC", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["NTE", 35],
      ["PRT", 9],
      ["RXA", 7],
      ["RXC", 34],
      ["RXE", 8],
    ]),
  ],
  [
    35,
    new Map([
      ["NTE", 35],
      ["PRT", 9],
      ["RXA", 7],
      ["RXC", 34],
      ["RXE", 8],
    ]),
  ],
]);
export const effects = {
  "10:NTE": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION", "RAS_O17/ORDER/ENCODING"],
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
  },
  "10:PRT": {
    groupsClosed: [
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: [],
  },
  "10:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "10:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "11:PRT": {
    groupsClosed: ["RAS_O17/ORDER/ORDER_DETAIL", "RAS_O17/ORDER/TIMING"],
    groupsOpened: [],
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
  "15:AL1": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "15:NTE": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "15:ORC": {
    groupsClosed: [
      "RAS_O17/PATIENT",
      "RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RAS_O17/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "15:PV1": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "16:CTI": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "16:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "18:RXR": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
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
  "22:PRT": {
    groupsClosed: ["RAS_O17/ORDER/ORDER_DETAIL", "RAS_O17/ORDER/TIMING"],
    groupsOpened: [],
  },
  "22:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "22:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "22:RXO": {
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
  },
  "23:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "24:ORC": {
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "25:AL1": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "25:NTE": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "25:ORC": {
    groupsClosed: [
      "RAS_O17/PATIENT",
      "RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RAS_O17/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "25:PV1": {
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "26:ORC": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "27:CTI": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "27:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "28:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "29:RXR": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "29:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "2:PRT": {
    groupsClosed: ["RAS_O17/ORDER/ORDER_DETAIL", "RAS_O17/ORDER/TIMING"],
    groupsOpened: [],
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
  "30:PRT": {
    groupsClosed: [
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "30:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "30:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "30:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "31:CTI": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "31:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "32:CTI": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "32:ORC": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER"],
  },
  "32:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "33:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "34:PRT": {
    groupsClosed: [
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "34:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "34:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "34:RXE": {
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
  "35:PRT": {
    groupsClosed: [
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "35:RXA": {
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "35:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "35:RXE": {
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
  "9:RXA": {
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "9:RXE": {
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
