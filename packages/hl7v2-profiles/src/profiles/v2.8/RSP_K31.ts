// Generated profile automaton for RSP_K31 (v2.8)

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
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "10:ARV": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "10:NTE": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "10:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "10:PD1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsClosed: [],
  },
  "10:PV1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "12:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "14:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "14:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "14:RXO": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "14:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "15:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "15:RXO": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "15:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:PV1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:PV1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "19:PV1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "20:AL1": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "20:ARV": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "20:NTE": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "20:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "20:PV1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "21:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "21:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "23:RXR": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "23:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "24:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "25:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "26:RXC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
    groupsClosed: [],
  },
  "26:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "26:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "28:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "28:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "28:RXO": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "28:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "29:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "30:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "31:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "32:AL1": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "32:ARV": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "32:NTE": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "32:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "32:PV1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "34:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "34:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "34:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "34:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "35:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "35:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "35:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "35:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "36:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "36:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "36:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "36:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "37:RXD": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "38:RXR": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "38:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "39:RXC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
    groupsClosed: [],
  },
  "39:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "39:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "40:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "40:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "40:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "40:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "41:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "41:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "41:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "41:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "42:RXD": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "43:RXC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
    groupsClosed: [],
  },
  "43:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "43:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "8:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/ORDER"],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "9:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "9:RXO": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "9:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
