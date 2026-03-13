// Generated profile automaton for RSP_Z90 (v2.8)

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
  "8:ORC": {
    groupsOpened: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
    ],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: [],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "9:TQ1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "10:PV1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "11:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "11:SPM": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "11:NTE": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: [],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "13:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "14:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "14:PV1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "15:PV1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "16:PV1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "18:SPM": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
    ],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "18:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "19:NTE": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "19:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "19:SPM": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "19:OBX": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "20:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "20:SPM": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "21:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "21:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "21:SPM": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "21:NTE": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "22:TQ1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "22:OBR": {
    groupsOpened: [],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "23:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "24:SPM": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
    ],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "24:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
  },
  "24:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "25:NTE": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "25:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "25:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "25:SPM": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
