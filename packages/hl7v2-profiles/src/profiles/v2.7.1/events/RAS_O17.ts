// Generated profile automaton for RAS_O17 (v2.7.1)

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
  "1:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RAS_O17/PATIENT"],
    groupsClosed: [],
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
  "2:PRT": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/ORDER/ORDER_DETAIL", "RAS_O17/ORDER/TIMING"],
  },
  "2:RXO": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: [
      "RAS_O17/PATIENT",
      "RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RAS_O17/PATIENT/PATIENT_VISIT",
    ],
  },
  "3:PV1": {
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "3:AL1": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "3:NTE": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "3:PD1": {
    groupsOpened: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsClosed: [],
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
  "9:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
  },
  "9:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION"],
  },
  "10:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "10:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "10:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "10:NTE": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION", "RAS_O17/ORDER/ENCODING"],
  },
  "11:TQ1": {
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
  "11:PRT": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/ORDER/ORDER_DETAIL", "RAS_O17/ORDER/TIMING"],
  },
  "11:RXO": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
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
    groupsClosed: [
      "RAS_O17/PATIENT",
      "RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RAS_O17/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:PV1": {
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "15:AL1": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "15:NTE": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "16:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "16:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "16:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
  },
  "16:OBX": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsClosed: [],
  },
  "18:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "18:RXR": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "19:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "20:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "22:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/TIMING"],
    groupsClosed: [],
  },
  "22:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "22:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/TIMING",
    ],
  },
  "22:PRT": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/ORDER/ORDER_DETAIL", "RAS_O17/ORDER/TIMING"],
  },
  "22:RXO": {
    groupsOpened: ["RAS_O17/ORDER/ORDER_DETAIL"],
    groupsClosed: ["RAS_O17/ORDER/TIMING"],
  },
  "23:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "24:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/PATIENT", "RAS_O17/PATIENT/PATIENT_VISIT"],
  },
  "25:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: [
      "RAS_O17/PATIENT",
      "RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RAS_O17/PATIENT/PATIENT_VISIT",
    ],
  },
  "25:PV1": {
    groupsOpened: ["RAS_O17/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "25:AL1": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "25:NTE": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "26:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsClosed: [],
  },
  "27:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "27:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "27:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
  },
  "28:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
  },
  "29:TQ1": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "29:RXR": {
    groupsOpened: [],
    groupsClosed: ["RAS_O17/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "30:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "30:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "30:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "30:RXC": {
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "31:OBX": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsClosed: [],
  },
  "31:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "31:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "31:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
  },
  "32:OBX": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
    groupsClosed: [],
  },
  "32:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "32:ORC": {
    groupsOpened: ["RAS_O17/ORDER"],
    groupsClosed: ["RAS_O17/ORDER/ADMINISTRATION/OBSERVATION"],
  },
  "32:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ADMINISTRATION/OBSERVATION",
    ],
  },
  "33:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: ["RAS_O17/ORDER/ENCODING"],
  },
  "34:RXC": {
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "34:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "34:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "34:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "35:RXC": {
    groupsOpened: [
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "35:RXA": {
    groupsOpened: ["RAS_O17/ORDER/ADMINISTRATION"],
    groupsClosed: [
      "RAS_O17/ORDER/ENCODING",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "35:RXE": {
    groupsOpened: ["RAS_O17/ORDER/ENCODING"],
    groupsClosed: [
      "RAS_O17/ORDER/ADMINISTRATION",
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "35:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "RAS_O17/ORDER/ORDER_DETAIL",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RAS_O17/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
