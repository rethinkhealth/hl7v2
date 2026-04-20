// Generated profile automaton for ORF_R04 (v2.4)

export const start = 0;
export const finals = new Set<number>([4, 8, 9, 10, 11, 12, 13, 14, 16]);
export const alphabet = new Set<string>([
  "CTD",
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
      ["CTD", 14],
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
      ["NTE", 15],
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
      ["CTD", 14],
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
      ["NTE", 16],
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
      ["CTI", 11],
      ["DSC", 8],
      ["ERR", 10],
      ["NTE", 16],
      ["OBR", 4],
      ["OBX", 13],
      ["ORC", 5],
      ["PID", 6],
      ["QAK", 9],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 15],
      ["OBR", 4],
      ["ORC", 5],
    ]),
  ],
  [
    16,
    new Map([
      ["CTI", 11],
      ["DSC", 8],
      ["ERR", 10],
      ["NTE", 16],
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
    groupsOpened: ["ORF_R04/RESPONSE", "ORF_R04/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["ORF_R04/RESPONSE", "ORF_R04/RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/RESPONSE/PATIENT"],
  },
  "3:PID": {
    groupsOpened: ["ORF_R04/RESPONSE", "ORF_R04/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "4:OBR": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "4:PID": {
    groupsOpened: ["ORF_R04/RESPONSE", "ORF_R04/RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
  },
  "4:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "4:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "4:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "4:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
  },
  "4:NTE": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "4:OBX": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "6:OBR": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/RESPONSE/PATIENT"],
  },
  "7:OBR": {
    groupsOpened: ["ORF_R04/RESPONSE", "ORF_R04/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORF_R04/RESPONSE", "ORF_R04/RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["ORF_R04/RESPONSE", "ORF_R04/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/RESPONSE/PATIENT"],
  },
  "11:PID": {
    groupsOpened: ["ORF_R04/RESPONSE", "ORF_R04/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "11:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "11:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "12:NTE": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "12:PID": {
    groupsOpened: ["ORF_R04/RESPONSE", "ORF_R04/RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "12:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "12:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "12:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
  },
  "12:OBX": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "13:PID": {
    groupsOpened: ["ORF_R04/RESPONSE", "ORF_R04/RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "13:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "13:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "13:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
  },
  "14:OBR": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "14:PID": {
    groupsOpened: ["ORF_R04/RESPONSE", "ORF_R04/RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "14:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "14:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "14:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
  },
  "14:NTE": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/RESPONSE/PATIENT"],
  },
  "16:NTE": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "16:OBR": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["ORF_R04/RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "16:PID": {
    groupsOpened: ["ORF_R04/RESPONSE", "ORF_R04/RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "16:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "16:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/RESPONSE",
      "ORF_R04/RESPONSE/ORDER",
      "ORF_R04/RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/RESPONSE/PATIENT",
    ],
  },
  "16:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/RESPONSE/ORDER/OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
