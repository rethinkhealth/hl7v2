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
  "11:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "11:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "11:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "11:PID": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "11:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "12:CTI": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "12:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "12:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "12:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "12:PID": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "12:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "13:CTI": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "13:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "13:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "13:PID": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "13:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "14:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "15:CTI": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "15:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "15:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "15:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "15:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "15:PID": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "15:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "3:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "3:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "4:CTI": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "4:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "4:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "4:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "4:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "4:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "4:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "4:PID": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "4:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "6:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "6:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "7:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "7:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
