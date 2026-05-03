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
  "10:DSC": {
    groupsClosed: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
    groupsOpened: [],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
  },
  "11:DSC": {
    groupsClosed: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
    groupsOpened: [],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
  },
  "12:DSC": {
    groupsClosed: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
    groupsOpened: [],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
  },
  "13:ORC": {
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
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
  "7:DSC": {
    groupsClosed: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
    groupsOpened: [],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
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
