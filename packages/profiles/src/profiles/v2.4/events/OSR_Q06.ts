// Generated profile automaton for OSR_Q06 (v2.4)

export const start = 0;
export const finals = new Set<number>([3, 6, 9, 16, 17, 18]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 5],
      ["NTE", 4],
      ["QRD", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["DSC", 6],
      ["ORC", 7],
      ["PID", 8],
      ["QRF", 9],
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
    ]),
  ],
  [6, new Map([])],
  [7, new Map([["OBR", 10]])],
  [
    8,
    new Map([
      ["NTE", 11],
      ["ORC", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["DSC", 6],
      ["ORC", 7],
      ["PID", 8],
    ]),
  ],
  [10, new Map([["RQD", 12]])],
  [
    11,
    new Map([
      ["NTE", 11],
      ["ORC", 7],
    ]),
  ],
  [12, new Map([["RQ1", 13]])],
  [13, new Map([["RXO", 14]])],
  [14, new Map([["ODS", 15]])],
  [15, new Map([["ODT", 16]])],
  [
    16,
    new Map([
      ["CTI", 17],
      ["DSC", 6],
      ["NTE", 18],
      ["ORC", 7],
    ]),
  ],
  [
    17,
    new Map([
      ["CTI", 17],
      ["DSC", 6],
      ["ORC", 7],
    ]),
  ],
  [
    18,
    new Map([
      ["CTI", 17],
      ["DSC", 6],
      ["NTE", 18],
      ["ORC", 7],
    ]),
  ],
]);
export const effects = {
  "11:ORC": {
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
  },
  "16:CTI": {
    groupsClosed: ["OSR_Q06/RESPONSE/ORDER/CHOICE"],
    groupsOpened: [],
  },
  "16:DSC": {
    groupsClosed: [
      "OSR_Q06/RESPONSE",
      "OSR_Q06/RESPONSE/ORDER",
      "OSR_Q06/RESPONSE/ORDER/CHOICE",
    ],
    groupsOpened: [],
  },
  "16:NTE": {
    groupsClosed: ["OSR_Q06/RESPONSE/ORDER/CHOICE"],
    groupsOpened: [],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
  },
  "17:DSC": {
    groupsClosed: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
    groupsOpened: [],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
  },
  "18:DSC": {
    groupsClosed: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
    groupsOpened: [],
  },
  "18:ORC": {
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
  "7:OBR": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER/CHOICE"],
  },
  "8:ORC": {
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
  },
  "9:DSC": {
    groupsClosed: [
      "OSR_Q06/RESPONSE",
      "OSR_Q06/RESPONSE/ORDER",
      "OSR_Q06/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "9:ORC": {
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
  },
  "9:PID": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
