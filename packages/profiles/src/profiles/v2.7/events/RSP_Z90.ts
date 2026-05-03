// Generated profile automaton for RSP_Z90 (v2.7)

export const start = 0;
export const finals = new Set<number>([17]);
export const alphabet = new Set<string>([
  "CTD",
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "NK1",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "QAK",
  "QPD",
  "RCP",
  "SFT",
  "SPM",
  "TQ1",
  "TQ2",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
    ]),
  ],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["QPD", 7]])],
  [6, new Map([["QAK", 5]])],
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
      ["OBR", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    10,
    new Map([
      ["NK1", 15],
      ["NTE", 14],
      ["ORC", 9],
      ["PD1", 16],
      ["PV1", 13],
    ]),
  ],
  [
    11,
    new Map([
      ["CTD", 21],
      ["DSC", 17],
      ["NTE", 19],
      ["OBX", 20],
      ["ORC", 9],
      ["PID", 10],
      ["SPM", 18],
    ]),
  ],
  [
    12,
    new Map([
      ["OBR", 11],
      ["TQ1", 12],
      ["TQ2", 22],
    ]),
  ],
  [
    13,
    new Map([
      ["ORC", 9],
      ["PV2", 23],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["ORC", 9],
      ["PV1", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["NK1", 15],
      ["NTE", 14],
      ["ORC", 9],
      ["PV1", 13],
    ]),
  ],
  [
    16,
    new Map([
      ["NK1", 15],
      ["NTE", 14],
      ["ORC", 9],
      ["PV1", 13],
    ]),
  ],
  [17, new Map([])],
  [
    18,
    new Map([
      ["DSC", 17],
      ["OBX", 24],
      ["ORC", 9],
      ["PID", 10],
      ["SPM", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["CTD", 21],
      ["DSC", 17],
      ["NTE", 19],
      ["OBX", 20],
      ["ORC", 9],
      ["PID", 10],
      ["SPM", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["DSC", 17],
      ["NTE", 25],
      ["OBX", 20],
      ["ORC", 9],
      ["PID", 10],
      ["SPM", 18],
    ]),
  ],
  [
    21,
    new Map([
      ["DSC", 17],
      ["NTE", 25],
      ["OBX", 20],
      ["ORC", 9],
      ["PID", 10],
      ["SPM", 18],
    ]),
  ],
  [
    22,
    new Map([
      ["OBR", 11],
      ["TQ1", 12],
      ["TQ2", 22],
    ]),
  ],
  [23, new Map([["ORC", 9]])],
  [
    24,
    new Map([
      ["DSC", 17],
      ["OBX", 24],
      ["ORC", 9],
      ["PID", 10],
      ["SPM", 18],
    ]),
  ],
  [
    25,
    new Map([
      ["DSC", 17],
      ["NTE", 25],
      ["OBX", 20],
      ["ORC", 9],
      ["PID", 10],
      ["SPM", 18],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
  },
  "11:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "11:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "11:PID": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "11:SPM": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
  },
  "12:OBR": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "13:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "14:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
  },
  "15:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
  },
  "16:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "16:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
  },
  "18:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "18:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
    ],
  },
  "18:PID": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "18:SPM": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
  },
  "19:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "19:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "19:PID": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "19:SPM": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
  },
  "20:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "20:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "20:PID": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "20:SPM": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
  },
  "21:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "21:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "21:PID": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "21:SPM": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
  },
  "22:OBR": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "23:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "24:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "24:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
    ],
  },
  "24:PID": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "24:SPM": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
  },
  "25:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "25:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "25:PID": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "25:SPM": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
  },
  "8:ORC": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsOpened: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
    ],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "9:OBR": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
