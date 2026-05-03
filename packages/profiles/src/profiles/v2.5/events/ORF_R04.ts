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
  "12:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "12:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "12:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "12:PID": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "12:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "13:CTD": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: [],
  },
  "13:CTI": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "13:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "13:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "13:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "13:OBX": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "13:PID": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "13:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "14:CTI": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "14:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "14:ERR": {
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
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "14:PID": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "14:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
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
  "16:CTD": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: [],
  },
  "16:CTI": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "16:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "16:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "16:NTE": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "16:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "16:OBX": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "16:PID": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "16:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "17:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "17:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "18:CTI": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "18:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "18:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "18:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "18:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "18:PID": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "18:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "19:CTD": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: [],
  },
  "19:CTI": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "19:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "19:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "19:NTE": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "19:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "19:OBX": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "19:PID": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "19:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "4:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "4:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "5:CTD": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: [],
  },
  "5:CTI": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "5:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "5:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "5:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "5:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "5:OBX": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "5:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "5:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "5:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "7:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "7:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "8:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "8:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
