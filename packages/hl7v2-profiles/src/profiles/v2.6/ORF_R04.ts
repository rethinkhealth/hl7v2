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
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "13:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "13:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "13:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "13:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "14:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "14:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "14:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "14:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "14:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "14:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "14:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "14:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "14:TQ1": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "15:CTI": {
    groupsOpened: [],
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
  "15:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "15:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
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
  "15:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "16:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "16:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "16:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "16:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "16:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "16:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "17:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "17:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "17:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "17:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "17:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "17:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "17:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "17:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "17:TQ1": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "18:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "18:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "18:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "18:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "18:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "18:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "18:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "18:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "18:TQ1": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "19:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "20:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "21:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "21:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "21:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "21:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "21:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "21:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "21:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "22:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "22:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "22:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "22:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "22:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "22:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "22:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "22:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "22:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "22:TQ1": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "5:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:CTD": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "6:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "6:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "6:ERR": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "6:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "6:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "6:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
  },
  "6:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "6:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
    ],
  },
  "6:QAK": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "6:TQ1": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "9:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "9:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
