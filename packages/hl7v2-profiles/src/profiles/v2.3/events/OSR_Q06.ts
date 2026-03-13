// Generated profile automaton for OSR_Q06 (v2.3)

export const start = 0;
export const finals = new Set<number>([3, 6, 7, 9, 10, 11, 12]);
export const alphabet = new Set<string>([
  "CTI",
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "ORC",
  "PID",
  "QRD",
  "QRF",
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
  [
    7,
    new Map([
      ["CTI", 10],
      ["DSC", 6],
      ["NTE", 11],
      ["OBR", 12],
      ["ORC", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 13],
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
  [
    10,
    new Map([
      ["CTI", 10],
      ["DSC", 6],
      ["ORC", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["CTI", 10],
      ["DSC", 6],
      ["NTE", 11],
      ["ORC", 7],
    ]),
  ],
  [
    12,
    new Map([
      ["CTI", 10],
      ["DSC", 6],
      ["NTE", 11],
      ["ORC", 7],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["ORC", 7],
    ]),
  ],
]);
export const effects = {
  "3:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OSR_Q06/RESPONSE",
      "OSR_Q06/RESPONSE/ORDER",
      "OSR_Q06/RESPONSE/PATIENT",
    ],
  },
  "3:ORC": {
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
  },
  "3:PID": {
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "7:DSC": {
    groupsOpened: [],
    groupsClosed: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
  },
  "8:ORC": {
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OSR_Q06/RESPONSE",
      "OSR_Q06/RESPONSE/ORDER",
      "OSR_Q06/RESPONSE/PATIENT",
    ],
  },
  "9:ORC": {
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
  },
  "9:PID": {
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
  },
  "11:ORC": {
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
  },
  "12:ORC": {
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
  },
  "13:ORC": {
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
