// Generated profile automaton for ORF_R04 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  5, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19,
]);
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
  "SFT",
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
  [2, new Map([["QRD", 4]])],
  [
    3,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["OBR", 5],
      ["ORC", 6],
      ["PID", 7],
      ["QRF", 8],
    ]),
  ],
  [
    5,
    new Map([
      ["CTD", 15],
      ["CTI", 12],
      ["DSC", 9],
      ["ERR", 11],
      ["NTE", 13],
      ["OBR", 5],
      ["OBX", 14],
      ["ORC", 6],
      ["PID", 7],
      ["QAK", 10],
      ["TQ1", 16],
    ]),
  ],
  [6, new Map([["OBR", 5]])],
  [
    7,
    new Map([
      ["NTE", 17],
      ["OBR", 5],
      ["ORC", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["OBR", 5],
      ["ORC", 6],
      ["PID", 7],
    ]),
  ],
  [9, new Map([])],
  [10, new Map([["DSC", 9]])],
  [
    11,
    new Map([
      ["DSC", 9],
      ["ERR", 11],
      ["QAK", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["CTI", 12],
      ["DSC", 9],
      ["ERR", 11],
      ["OBR", 5],
      ["ORC", 6],
      ["PID", 7],
      ["QAK", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["CTD", 15],
      ["CTI", 12],
      ["DSC", 9],
      ["ERR", 11],
      ["NTE", 13],
      ["OBR", 5],
      ["OBX", 14],
      ["ORC", 6],
      ["PID", 7],
      ["QAK", 10],
      ["TQ1", 16],
    ]),
  ],
  [
    14,
    new Map([
      ["CTI", 12],
      ["DSC", 9],
      ["ERR", 11],
      ["NTE", 18],
      ["OBR", 5],
      ["OBX", 14],
      ["ORC", 6],
      ["PID", 7],
      ["QAK", 10],
    ]),
  ],
  [
    15,
    new Map([
      ["CTI", 12],
      ["DSC", 9],
      ["ERR", 11],
      ["NTE", 18],
      ["OBR", 5],
      ["OBX", 14],
      ["ORC", 6],
      ["PID", 7],
      ["QAK", 10],
    ]),
  ],
  [
    16,
    new Map([
      ["CTD", 15],
      ["CTI", 12],
      ["DSC", 9],
      ["ERR", 11],
      ["NTE", 18],
      ["OBR", 5],
      ["OBX", 14],
      ["ORC", 6],
      ["PID", 7],
      ["QAK", 10],
      ["TQ1", 16],
      ["TQ2", 19],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 17],
      ["OBR", 5],
      ["ORC", 6],
    ]),
  ],
  [
    18,
    new Map([
      ["CTI", 12],
      ["DSC", 9],
      ["ERR", 11],
      ["NTE", 18],
      ["OBR", 5],
      ["OBX", 14],
      ["ORC", 6],
      ["PID", 7],
      ["QAK", 10],
    ]),
  ],
  [
    19,
    new Map([
      ["CTD", 15],
      ["CTI", 12],
      ["DSC", 9],
      ["ERR", 11],
      ["NTE", 18],
      ["OBR", 5],
      ["OBX", 14],
      ["ORC", 6],
      ["PID", 7],
      ["QAK", 10],
      ["TQ1", 16],
      ["TQ2", 19],
    ]),
  ],
]);
export const effects = {
  "4:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "5:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "5:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "5:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "5:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "5:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "5:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "5:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "5:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "5:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "5:TQ1": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "7:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "8:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "12:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "12:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "12:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "13:NTE": {
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
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "13:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "13:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "13:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "13:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "13:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "13:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "13:TQ1": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "14:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "14:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "14:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "14:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "14:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
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
  "15:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "16:TQ1": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "16:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "16:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "16:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "16:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "16:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "16:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "16:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "16:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "17:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "18:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "18:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "18:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "18:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "18:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "19:TQ1": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "19:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "19:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "19:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "19:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "19:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "19:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "19:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "19:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
