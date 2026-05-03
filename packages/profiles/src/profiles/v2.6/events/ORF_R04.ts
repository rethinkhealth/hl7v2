// Generated profile automaton for ORF_R04 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  6, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21, 22,
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
  "ROL",
  "SFT",
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
  [2, new Map([["QRD", 5]])],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["OBR", 6],
      ["ORC", 7],
      ["PID", 8],
      ["QRF", 9],
    ]),
  ],
  [
    6,
    new Map([
      ["CTD", 16],
      ["CTI", 13],
      ["DSC", 10],
      ["ERR", 12],
      ["NTE", 14],
      ["OBR", 6],
      ["OBX", 15],
      ["ORC", 7],
      ["PID", 8],
      ["QAK", 11],
      ["ROL", 18],
      ["TQ1", 17],
    ]),
  ],
  [7, new Map([["OBR", 6]])],
  [
    8,
    new Map([
      ["NTE", 20],
      ["OBR", 6],
      ["OBX", 19],
      ["ORC", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["OBR", 6],
      ["ORC", 7],
      ["PID", 8],
    ]),
  ],
  [10, new Map([])],
  [11, new Map([["DSC", 10]])],
  [
    12,
    new Map([
      ["DSC", 10],
      ["ERR", 12],
      ["QAK", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["CTI", 13],
      ["DSC", 10],
      ["ERR", 12],
      ["OBR", 6],
      ["ORC", 7],
      ["PID", 8],
      ["QAK", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["CTD", 16],
      ["CTI", 13],
      ["DSC", 10],
      ["ERR", 12],
      ["NTE", 14],
      ["OBR", 6],
      ["OBX", 15],
      ["ORC", 7],
      ["PID", 8],
      ["QAK", 11],
      ["ROL", 18],
      ["TQ1", 17],
    ]),
  ],
  [
    15,
    new Map([
      ["CTI", 13],
      ["DSC", 10],
      ["ERR", 12],
      ["NTE", 21],
      ["OBR", 6],
      ["OBX", 15],
      ["ORC", 7],
      ["PID", 8],
      ["QAK", 11],
    ]),
  ],
  [
    16,
    new Map([
      ["CTI", 13],
      ["DSC", 10],
      ["ERR", 12],
      ["NTE", 21],
      ["OBR", 6],
      ["OBX", 15],
      ["ORC", 7],
      ["PID", 8],
      ["QAK", 11],
    ]),
  ],
  [
    17,
    new Map([
      ["CTD", 16],
      ["CTI", 13],
      ["DSC", 10],
      ["ERR", 12],
      ["NTE", 21],
      ["OBR", 6],
      ["OBX", 15],
      ["ORC", 7],
      ["PID", 8],
      ["QAK", 11],
      ["TQ1", 17],
      ["TQ2", 22],
    ]),
  ],
  [
    18,
    new Map([
      ["CTD", 16],
      ["CTI", 13],
      ["DSC", 10],
      ["ERR", 12],
      ["NTE", 21],
      ["OBR", 6],
      ["OBX", 15],
      ["ORC", 7],
      ["PID", 8],
      ["QAK", 11],
      ["ROL", 18],
      ["TQ1", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["OBR", 6],
      ["OBX", 19],
      ["ORC", 7],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 20],
      ["OBR", 6],
      ["OBX", 19],
      ["ORC", 7],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 13],
      ["DSC", 10],
      ["ERR", 12],
      ["NTE", 21],
      ["OBR", 6],
      ["OBX", 15],
      ["ORC", 7],
      ["PID", 8],
      ["QAK", 11],
    ]),
  ],
  [
    22,
    new Map([
      ["CTD", 16],
      ["CTI", 13],
      ["DSC", 10],
      ["ERR", 12],
      ["NTE", 21],
      ["OBR", 6],
      ["OBX", 15],
      ["ORC", 7],
      ["PID", 8],
      ["QAK", 11],
      ["TQ1", 17],
      ["TQ2", 22],
    ]),
  ],
]);
export const effects = {
  "13:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "13:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "13:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "13:PID": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "13:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "14:CTD": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: [],
  },
  "14:CTI": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "14:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "14:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "14:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "14:OBX": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "14:PID": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "14:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
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
  "16:CTI": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "16:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "16:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "16:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "16:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "16:PID": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "16:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "17:CTD": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: [],
  },
  "17:CTI": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "17:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "17:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "17:NTE": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "17:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "17:OBX": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "17:PID": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "17:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "18:CTD": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: [],
  },
  "18:CTI": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "18:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "18:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "18:NTE": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "18:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "18:OBX": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "18:PID": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "18:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "19:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "19:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "20:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "20:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "21:CTI": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "21:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "21:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "21:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "21:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "21:PID": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "21:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "22:CTD": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: [],
  },
  "22:CTI": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "22:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "22:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "22:NTE": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "22:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "22:OBX": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "22:PID": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "22:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "5:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "6:CTD": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: [],
  },
  "6:CTI": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "6:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "6:ERR": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "6:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "6:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "6:OBX": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "6:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "6:QAK": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "6:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "8:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "8:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "9:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "9:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "9:PID": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
