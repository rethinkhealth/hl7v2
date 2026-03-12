// Generated profile automaton for OSR_Q06 (v2.3.1)

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
  [10, new Map([["RXO", 12]])],
  [
    11,
    new Map([
      ["NTE", 11],
      ["ORC", 7],
    ]),
  ],
  [12, new Map([["RQD", 13]])],
  [13, new Map([["RQ1", 14]])],
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
    groupsOpened: ["OSR_Q06/RESPONSE/OBSERVATION"],
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
  },
  "16:CTI": {
    groupsOpened: [],
    groupsClosed: ["OSR_Q06/RESPONSE/OBSERVATION/CHOICE"],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OSR_Q06/RESPONSE",
      "OSR_Q06/RESPONSE/OBSERVATION",
      "OSR_Q06/RESPONSE/OBSERVATION/CHOICE",
    ],
  },
  "16:NTE": {
    groupsOpened: [],
    groupsClosed: ["OSR_Q06/RESPONSE/OBSERVATION/CHOICE"],
  },
  "16:ORC": {
    groupsOpened: ["OSR_Q06/RESPONSE/OBSERVATION"],
    groupsClosed: [],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/OBSERVATION"],
  },
  "17:ORC": {
    groupsOpened: ["OSR_Q06/RESPONSE/OBSERVATION"],
    groupsClosed: [],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/OBSERVATION"],
  },
  "18:ORC": {
    groupsOpened: ["OSR_Q06/RESPONSE/OBSERVATION"],
    groupsClosed: [],
  },
  "3:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OSR_Q06/RESPONSE",
      "OSR_Q06/RESPONSE/OBSERVATION",
      "OSR_Q06/RESPONSE/PATIENT",
    ],
  },
  "3:ORC": {
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/OBSERVATION"],
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
  },
  "3:PID": {
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:OBR": {
    groupsOpened: ["OSR_Q06/RESPONSE/OBSERVATION/CHOICE"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["OSR_Q06/RESPONSE/OBSERVATION"],
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OSR_Q06/RESPONSE",
      "OSR_Q06/RESPONSE/OBSERVATION",
      "OSR_Q06/RESPONSE/PATIENT",
    ],
  },
  "9:ORC": {
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/OBSERVATION"],
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
  },
  "9:PID": {
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
