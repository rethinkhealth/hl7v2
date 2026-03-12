// Generated profile automaton for RSP_K31 (v2.7.1)

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
  "15:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:PV1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
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
  "18:AL1": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "18:NTE": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "18:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:PV1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "19:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "19:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "21:RXR": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "21:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "22:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "23:RXC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
    groupsClosed: [],
  },
  "23:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "23:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "25:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "25:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "25:RXO": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "25:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "27:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:AL1": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "28:NTE": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "28:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "28:PV1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT/ADDITIONAL_DEMOGRAPHICS"],
  },
  "30:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "30:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "30:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "30:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "31:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "31:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "31:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "31:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "32:RXD": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "33:RXR": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "33:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "34:RXC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
    groupsClosed: [],
  },
  "34:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "34:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
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
  "38:RXC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
    groupsClosed: [],
  },
  "38:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "38:RXE": {
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
