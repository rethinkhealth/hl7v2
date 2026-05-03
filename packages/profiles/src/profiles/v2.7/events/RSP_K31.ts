// Generated profile automaton for RSP_K31 (v2.7)

export const start = 0;
export const finals = new Set<number>([19, 29, 30, 31, 35, 36]);
export const alphabet = new Set<string>([
  "AL1",
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
      ["RXD", 11],
      ["RXE", 12],
      ["RXO", 13],
      ["TQ1", 14],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 16],
      ["NTE", 17],
      ["ORC", 9],
      ["PD1", 18],
      ["PV1", 15],
    ]),
  ],
  [
    11,
    new Map([
      ["PRT", 20],
      ["RXR", 19],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 22],
      ["TQ1", 21],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 24],
      ["RXR", 23],
    ]),
  ],
  [
    14,
    new Map([
      ["RXD", 11],
      ["RXE", 12],
      ["RXO", 13],
      ["TQ1", 14],
      ["TQ2", 25],
    ]),
  ],
  [
    15,
    new Map([
      ["ORC", 9],
      ["PRT", 26],
      ["PV2", 27],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 16],
      ["ORC", 9],
      ["PV1", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 16],
      ["NTE", 17],
      ["ORC", 9],
      ["PV1", 15],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 16],
      ["NTE", 17],
      ["ORC", 9],
      ["PRT", 28],
      ["PV1", 15],
    ]),
  ],
  [
    19,
    new Map([
      ["DSC", 29],
      ["OBX", 30],
      ["ORC", 9],
      ["PID", 10],
      ["RXC", 31],
      ["RXR", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["PRT", 20],
      ["RXR", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["RXR", 32],
      ["TQ1", 21],
      ["TQ2", 33],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 22],
      ["TQ1", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["RXC", 34],
      ["RXD", 11],
      ["RXE", 12],
      ["RXR", 23],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 24],
      ["RXR", 23],
    ]),
  ],
  [
    25,
    new Map([
      ["RXD", 11],
      ["RXE", 12],
      ["RXO", 13],
      ["TQ1", 14],
      ["TQ2", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["ORC", 9],
      ["PRT", 26],
    ]),
  ],
  [
    27,
    new Map([
      ["ORC", 9],
      ["PRT", 26],
    ]),
  ],
  [
    28,
    new Map([
      ["AL1", 16],
      ["NTE", 17],
      ["ORC", 9],
      ["PRT", 28],
      ["PV1", 15],
    ]),
  ],
  [29, new Map([])],
  [
    30,
    new Map([
      ["DSC", 29],
      ["NTE", 35],
      ["OBX", 30],
      ["ORC", 9],
      ["PID", 10],
      ["PRT", 36],
    ]),
  ],
  [
    31,
    new Map([
      ["DSC", 29],
      ["OBX", 30],
      ["ORC", 9],
      ["PID", 10],
      ["RXC", 31],
    ]),
  ],
  [
    32,
    new Map([
      ["RXC", 37],
      ["RXD", 11],
      ["RXR", 32],
    ]),
  ],
  [
    33,
    new Map([
      ["RXR", 32],
      ["TQ1", 21],
      ["TQ2", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["NTE", 38],
      ["RXC", 34],
      ["RXD", 11],
      ["RXE", 12],
    ]),
  ],
  [
    35,
    new Map([
      ["DSC", 29],
      ["NTE", 35],
      ["OBX", 30],
      ["ORC", 9],
      ["PID", 10],
    ]),
  ],
  [
    36,
    new Map([
      ["DSC", 29],
      ["NTE", 35],
      ["OBX", 30],
      ["ORC", 9],
      ["PID", 10],
      ["PRT", 36],
    ]),
  ],
  [
    37,
    new Map([
      ["RXC", 37],
      ["RXD", 11],
    ]),
  ],
  [
    38,
    new Map([
      ["NTE", 38],
      ["RXC", 34],
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
  "15:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "16:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "16:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
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
  "18:AL1": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "18:NTE": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "18:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "18:PV1": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
  },
  "19:DSC": {
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "19:PID": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "21:RXR": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "23:RXC": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
  },
  "23:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "23:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "25:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "25:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "25:RXO": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "25:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
  },
  "26:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "27:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "28:AL1": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "28:NTE": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: [],
  },
  "28:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "28:PV1": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
  },
  "30:DSC": {
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "30:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "30:PID": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "31:DSC": {
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "31:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "31:PID": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "32:RXD": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "33:RXR": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "33:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "34:RXC": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
  },
  "34:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "34:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
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
  "38:RXC": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
  },
  "38:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "38:RXE": {
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
