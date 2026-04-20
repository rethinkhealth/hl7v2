// Generated profile automaton for ORF_R04 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([4, 8, 9, 10, 11, 12, 13, 15]);
export const alphabet = new Set<string>([
  "CTI",
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PID",
  "QAK",
  "QRD",
  "QRF",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [2, new Map([["QRD", 3]])],
  [
    3,
    new Map([
      ["OBR", 4],
      ["ORC", 5],
      ["PID", 6],
      ["QRF", 7],
    ]),
  ],
  [
    4,
    new Map([
      ["CTI", 11],
      ["DSC", 8],
      ["ERR", 10],
      ["NTE", 12],
      ["OBR", 4],
      ["OBX", 13],
      ["ORC", 5],
      ["PID", 6],
      ["QAK", 9],
    ]),
  ],
  [5, new Map([["OBR", 4]])],
  [
    6,
    new Map([
      ["NTE", 14],
      ["OBR", 4],
      ["ORC", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["OBR", 4],
      ["ORC", 5],
      ["PID", 6],
    ]),
  ],
  [8, new Map([])],
  [9, new Map([["DSC", 8]])],
  [
    10,
    new Map([
      ["DSC", 8],
      ["QAK", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["CTI", 11],
      ["DSC", 8],
      ["ERR", 10],
      ["OBR", 4],
      ["ORC", 5],
      ["PID", 6],
      ["QAK", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["CTI", 11],
      ["DSC", 8],
      ["ERR", 10],
      ["NTE", 12],
      ["OBR", 4],
      ["OBX", 13],
      ["ORC", 5],
      ["PID", 6],
      ["QAK", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["CTI", 11],
      ["DSC", 8],
      ["ERR", 10],
      ["NTE", 15],
      ["OBR", 4],
      ["OBX", 13],
      ["ORC", 5],
      ["PID", 6],
      ["QAK", 9],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["OBR", 4],
      ["ORC", 5],
    ]),
  ],
  [
    15,
    new Map([
      ["CTI", 11],
      ["DSC", 8],
      ["ERR", 10],
      ["NTE", 15],
      ["OBR", 4],
      ["OBX", 13],
      ["ORC", 5],
      ["PID", 6],
      ["QAK", 9],
    ]),
  ],
]);
export const effects = {
  "3:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "3:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "4:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "4:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "4:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "4:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "4:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "4:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "4:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "4:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "6:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "7:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "11:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "11:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "11:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "12:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "12:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "12:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "12:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "12:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "12:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "13:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "13:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "13:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "13:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "14:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "15:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "15:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "15:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "15:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "15:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
