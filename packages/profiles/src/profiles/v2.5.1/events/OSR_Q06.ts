// Generated profile automaton for OSR_Q06 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([3, 7, 10, 19, 20, 21]);
export const alphabet = new Set<string>([
  "CTI",
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "ODS",
  "ODT",
  "ORC",
  "PID",
  "QRD",
  "QRF",
  "RQ1",
  "RQD",
  "RXO",
  "SFT",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 6],
      ["NTE", 4],
      ["QRD", 3],
      ["SFT", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["DSC", 7],
      ["ORC", 8],
      ["PID", 9],
      ["QRF", 10],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 4],
      ["QRD", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 4],
      ["QRD", 3],
      ["SFT", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["ERR", 6],
      ["NTE", 4],
      ["QRD", 3],
      ["SFT", 5],
    ]),
  ],
  [7, new Map([])],
  [
    8,
    new Map([
      ["OBR", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 13],
      ["ORC", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["DSC", 7],
      ["ORC", 8],
      ["PID", 9],
    ]),
  ],
  [11, new Map([["RQD", 14]])],
  [
    12,
    new Map([
      ["OBR", 11],
      ["TQ1", 12],
      ["TQ2", 15],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["ORC", 8],
    ]),
  ],
  [14, new Map([["RQ1", 16]])],
  [
    15,
    new Map([
      ["OBR", 11],
      ["TQ1", 12],
      ["TQ2", 15],
    ]),
  ],
  [16, new Map([["RXO", 17]])],
  [17, new Map([["ODS", 18]])],
  [18, new Map([["ODT", 19]])],
  [
    19,
    new Map([
      ["CTI", 20],
      ["DSC", 7],
      ["NTE", 21],
      ["ORC", 8],
    ]),
  ],
  [
    20,
    new Map([
      ["CTI", 20],
      ["DSC", 7],
      ["ORC", 8],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 20],
      ["DSC", 7],
      ["NTE", 21],
      ["ORC", 8],
    ]),
  ],
]);
export const effects = {
  "10:DSC": {
    groupsClosed: [
      "OSR_Q06/RESPONSE",
      "OSR_Q06/RESPONSE/ORDER",
      "OSR_Q06/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "10:ORC": {
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
  },
  "10:PID": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/PATIENT"],
  },
  "12:OBR": {
    groupsClosed: ["OSR_Q06/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER/OBRRQDRQ1RXOODSODT_SUPPGRP"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER/TIMING"],
  },
  "13:ORC": {
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
  },
  "15:OBR": {
    groupsClosed: ["OSR_Q06/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER/OBRRQDRQ1RXOODSODT_SUPPGRP"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER/TIMING"],
  },
  "19:CTI": {
    groupsClosed: ["OSR_Q06/RESPONSE/ORDER/OBRRQDRQ1RXOODSODT_SUPPGRP"],
    groupsOpened: [],
  },
  "19:DSC": {
    groupsClosed: [
      "OSR_Q06/RESPONSE",
      "OSR_Q06/RESPONSE/ORDER",
      "OSR_Q06/RESPONSE/ORDER/OBRRQDRQ1RXOODSODT_SUPPGRP",
    ],
    groupsOpened: [],
  },
  "19:NTE": {
    groupsClosed: ["OSR_Q06/RESPONSE/ORDER/OBRRQDRQ1RXOODSODT_SUPPGRP"],
    groupsOpened: [],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
  },
  "20:DSC": {
    groupsClosed: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
    groupsOpened: [],
  },
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
  },
  "21:DSC": {
    groupsClosed: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
    groupsOpened: [],
  },
  "21:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
  },
  "3:DSC": {
    groupsClosed: [
      "OSR_Q06/RESPONSE",
      "OSR_Q06/RESPONSE/ORDER",
      "OSR_Q06/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "3:ORC": {
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/PATIENT"],
  },
  "8:OBR": {
    groupsClosed: ["OSR_Q06/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER/OBRRQDRQ1RXOODSODT_SUPPGRP"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER/TIMING"],
  },
  "9:ORC": {
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
