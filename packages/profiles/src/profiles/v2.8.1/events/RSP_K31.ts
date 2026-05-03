// Generated profile automaton for RSP_K31 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([21, 33, 34, 35, 36, 40, 41]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "CDO",
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PRT",
  "PV1",
  "PV2",
  "QAK",
  "QPD",
  "RCP",
  "RXC",
  "RXD",
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
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QAK", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [3, new Map([["QPD", 7]])],
  [4, new Map([["QAK", 3]])],
  [
    5,
    new Map([
      ["QAK", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["ERR", 6],
      ["QAK", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [7, new Map([["RCP", 8]])],
  [
    8,
    new Map([
      ["ORC", 9],
      ["PID", 10],
    ]),
  ],
  [
    9,
    new Map([
      ["PRT", 15],
      ["RXD", 11],
      ["RXE", 12],
      ["RXO", 13],
      ["TQ1", 14],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 17],
      ["ARV", 18],
      ["NTE", 19],
      ["ORC", 9],
      ["PD1", 20],
      ["PV1", 16],
    ]),
  ],
  [
    11,
    new Map([
      ["PRT", 22],
      ["RXR", 21],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 24],
      ["PRT", 25],
      ["TQ1", 23],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 27],
      ["RXR", 26],
    ]),
  ],
  [
    14,
    new Map([
      ["RXD", 11],
      ["RXE", 12],
      ["RXO", 13],
      ["TQ1", 14],
      ["TQ2", 28],
    ]),
  ],
  [
    15,
    new Map([
      ["PRT", 15],
      ["RXD", 11],
      ["RXE", 12],
      ["RXO", 13],
      ["TQ1", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["ARV", 29],
      ["ORC", 9],
      ["PRT", 30],
      ["PV2", 31],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 17],
      ["ORC", 9],
      ["PV1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 17],
      ["ARV", 18],
      ["ORC", 9],
      ["PV1", 16],
    ]),
  ],
  [
    19,
    new Map([
      ["AL1", 17],
      ["ARV", 18],
      ["NTE", 19],
      ["ORC", 9],
      ["PV1", 16],
    ]),
  ],
  [
    20,
    new Map([
      ["AL1", 17],
      ["ARV", 18],
      ["NTE", 19],
      ["ORC", 9],
      ["PRT", 32],
      ["PV1", 16],
    ]),
  ],
  [
    21,
    new Map([
      ["CDO", 35],
      ["DSC", 33],
      ["OBX", 34],
      ["ORC", 9],
      ["PID", 10],
      ["RXC", 36],
      ["RXR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["PRT", 22],
      ["RXR", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["RXR", 37],
      ["TQ1", 23],
      ["TQ2", 38],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 24],
      ["TQ1", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 24],
      ["PRT", 25],
      ["TQ1", 23],
    ]),
  ],
  [
    26,
    new Map([
      ["RXC", 39],
      ["RXD", 11],
      ["RXE", 12],
      ["RXR", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 27],
      ["RXR", 26],
    ]),
  ],
  [
    28,
    new Map([
      ["RXD", 11],
      ["RXE", 12],
      ["RXO", 13],
      ["TQ1", 14],
      ["TQ2", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["ARV", 29],
      ["ORC", 9],
    ]),
  ],
  [
    30,
    new Map([
      ["ARV", 29],
      ["ORC", 9],
      ["PRT", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["ARV", 29],
      ["ORC", 9],
      ["PRT", 30],
    ]),
  ],
  [
    32,
    new Map([
      ["AL1", 17],
      ["ARV", 18],
      ["NTE", 19],
      ["ORC", 9],
      ["PRT", 32],
      ["PV1", 16],
    ]),
  ],
  [33, new Map([])],
  [
    34,
    new Map([
      ["DSC", 33],
      ["NTE", 40],
      ["OBX", 34],
      ["ORC", 9],
      ["PID", 10],
      ["PRT", 41],
    ]),
  ],
  [
    35,
    new Map([
      ["CDO", 35],
      ["DSC", 33],
      ["OBX", 34],
      ["ORC", 9],
      ["PID", 10],
    ]),
  ],
  [
    36,
    new Map([
      ["CDO", 35],
      ["DSC", 33],
      ["OBX", 34],
      ["ORC", 9],
      ["PID", 10],
      ["RXC", 36],
    ]),
  ],
  [
    37,
    new Map([
      ["RXC", 42],
      ["RXD", 11],
      ["RXR", 37],
    ]),
  ],
  [
    38,
    new Map([
      ["RXR", 37],
      ["TQ1", 23],
      ["TQ2", 38],
    ]),
  ],
  [
    39,
    new Map([
      ["NTE", 43],
      ["RXC", 39],
      ["RXD", 11],
      ["RXE", 12],
    ]),
  ],
  [
    40,
    new Map([
      ["DSC", 33],
      ["NTE", 40],
      ["OBX", 34],
      ["ORC", 9],
      ["PID", 10],
    ]),
  ],
  [
    41,
    new Map([
      ["DSC", 33],
      ["NTE", 40],
      ["OBX", 34],
      ["ORC", 9],
      ["PID", 10],
      ["PRT", 41],
    ]),
  ],
  [
    42,
    new Map([
      ["RXC", 42],
      ["RXD", 11],
    ]),
  ],
  [
    43,
    new Map([
      ["NTE", 43],
      ["RXC", 39],
      ["RXD", 11],
      ["RXE", 12],
    ]),
  ],
]);
export const effects = {
  "10:AL1": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "10:ARV": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "10:NTE": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "10:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "10:PD1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "10:PV1": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "14:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "14:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "14:RXO": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
  },
  "15:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "15:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "15:RXO": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
  },
  "16:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "17:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
  },
  "18:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "18:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
  },
  "19:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "19:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
  },
  "20:AL1": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "20:ARV": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "20:NTE": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "20:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "20:PV1": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
  },
  "21:DSC": {
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "21:PID": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "23:RXR": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "23:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "24:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "25:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "26:RXC": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
  },
  "26:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "26:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "28:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "28:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "28:RXO": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "28:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
  },
  "29:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "30:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "31:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "32:AL1": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "32:ARV": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "32:NTE": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "32:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "32:PV1": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
  },
  "34:DSC": {
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "34:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "34:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "34:PID": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "35:DSC": {
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "35:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "35:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "35:PID": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "36:DSC": {
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "36:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "36:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "36:PID": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "37:RXD": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "38:RXR": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "38:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "39:RXC": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
  },
  "39:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "39:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "40:DSC": {
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "40:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "40:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "40:PID": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "41:DSC": {
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "41:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "41:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "41:PID": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "42:RXD": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "43:RXC": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
  },
  "43:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "43:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "8:ORC": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "9:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "9:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "9:RXO": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
