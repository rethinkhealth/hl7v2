// Generated profile automaton for RSP_Z90 (v2.5.1)

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
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "10:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "10:PID": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "10:SPM": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
  },
  "11:OBR": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "12:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "13:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
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
  "17:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "17:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
    ],
  },
  "17:PID": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "17:SPM": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
  },
  "18:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "18:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "18:PID": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "18:SPM": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
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
  "20:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
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
  "21:OBR": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "22:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "23:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "23:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
    ],
  },
  "23:PID": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "23:SPM": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
  },
  "24:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "24:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "24:PID": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/SPECIMEN",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "24:SPM": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/SPECIMEN"],
  },
  "7:ORC": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsOpened: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
    ],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "8:OBR": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "9:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "9:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
