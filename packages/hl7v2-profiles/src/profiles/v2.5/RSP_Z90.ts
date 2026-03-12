// Generated profile automaton for RSP_Z90 (v2.5)

export const start = 0;
export const finals = new Set<number>([16]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 5],
      ["QAK", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([["QPD", 6]])],
  [5, new Map([["QAK", 4]])],
  [6, new Map([["RCP", 7]])],
  [
    7,
    new Map([
      ["ORC", 8],
      ["PID", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["OBR", 10],
      ["TQ1", 11],
    ]),
  ],
  [
    9,
    new Map([
      ["NK1", 14],
      ["NTE", 13],
      ["ORC", 8],
      ["PD1", 15],
      ["PV1", 12],
    ]),
  ],
  [
    10,
    new Map([
      ["CTD", 20],
      ["DSC", 16],
      ["NTE", 18],
      ["OBX", 19],
      ["ORC", 8],
      ["PID", 9],
      ["SPM", 17],
    ]),
  ],
  [
    11,
    new Map([
      ["OBR", 10],
      ["TQ1", 11],
      ["TQ2", 21],
    ]),
  ],
  [
    12,
    new Map([
      ["ORC", 8],
      ["PV2", 22],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["ORC", 8],
      ["PV1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["NK1", 14],
      ["NTE", 13],
      ["ORC", 8],
      ["PV1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["NK1", 14],
      ["NTE", 13],
      ["ORC", 8],
      ["PV1", 12],
    ]),
  ],
  [16, new Map([])],
  [
    17,
    new Map([
      ["DSC", 16],
      ["OBX", 23],
      ["ORC", 8],
      ["PID", 9],
      ["SPM", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["CTD", 20],
      ["DSC", 16],
      ["NTE", 18],
      ["OBX", 19],
      ["ORC", 8],
      ["PID", 9],
      ["SPM", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["DSC", 16],
      ["NTE", 24],
      ["OBX", 19],
      ["ORC", 8],
      ["PID", 9],
      ["SPM", 17],
    ]),
  ],
  [
    20,
    new Map([
      ["DSC", 16],
      ["NTE", 24],
      ["OBX", 19],
      ["ORC", 8],
      ["PID", 9],
      ["SPM", 17],
    ]),
  ],
  [
    21,
    new Map([
      ["OBR", 10],
      ["TQ1", 11],
      ["TQ2", 21],
    ]),
  ],
  [22, new Map([["ORC", 8]])],
  [
    23,
    new Map([
      ["DSC", 16],
      ["OBX", 23],
      ["ORC", 8],
      ["PID", 9],
      ["SPM", 17],
    ]),
  ],
  [
    24,
    new Map([
      ["DSC", 16],
      ["NTE", 24],
      ["OBX", 19],
      ["ORC", 8],
      ["PID", 9],
      ["SPM", 17],
    ]),
  ],
]);
export const effects = {
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "10:NTE": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBX": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "10:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "10:SPM": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "11:OBR": {
    groupsOpened: [],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "11:TQ1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "13:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "13:PV1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
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
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "17:ORC": {
    groupsOpened: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
    ],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "17:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
  },
  "17:SPM": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "18:NTE": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "18:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "18:SPM": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
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
  "19:OBX": {
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
  "19:SPM": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
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
  "20:NTE": {
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
  "20:SPM": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "21:OBR": {
    groupsOpened: [],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "21:TQ1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "23:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "23:ORC": {
    groupsOpened: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
    ],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "23:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
  },
  "23:SPM": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "24:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "24:NTE": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "24:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
  },
  "24:SPM": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "7:ORC": {
    groupsOpened: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
    ],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: [],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "8:TQ1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "9:PV1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
