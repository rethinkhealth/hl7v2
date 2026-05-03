// Generated profile automaton for OSR_Q06 (v2.6)

export const start = 0;
export const finals = new Set<number>([3, 8, 11, 20, 21, 22]);
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 7],
      ["NTE", 4],
      ["QRD", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["DSC", 8],
      ["ORC", 9],
      ["PID", 10],
      ["QRF", 11],
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
  [
    6,
    new Map([
      ["NTE", 4],
      ["QRD", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["ERR", 7],
      ["NTE", 4],
      ["QRD", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [8, new Map([])],
  [
    9,
    new Map([
      ["OBR", 12],
      ["TQ1", 13],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 14],
      ["ORC", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["DSC", 8],
      ["ORC", 9],
      ["PID", 10],
    ]),
  ],
  [12, new Map([["RQD", 15]])],
  [
    13,
    new Map([
      ["OBR", 12],
      ["TQ1", 13],
      ["TQ2", 16],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["ORC", 9],
    ]),
  ],
  [15, new Map([["RQ1", 17]])],
  [
    16,
    new Map([
      ["OBR", 12],
      ["TQ1", 13],
      ["TQ2", 16],
    ]),
  ],
  [17, new Map([["RXO", 18]])],
  [18, new Map([["ODS", 19]])],
  [19, new Map([["ODT", 20]])],
  [
    20,
    new Map([
      ["CTI", 21],
      ["DSC", 8],
      ["NTE", 22],
      ["ORC", 9],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 21],
      ["DSC", 8],
      ["ORC", 9],
    ]),
  ],
  [
    22,
    new Map([
      ["CTI", 21],
      ["DSC", 8],
      ["NTE", 22],
      ["ORC", 9],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
  },
  "11:DSC": {
    groupsClosed: [
      "OSR_Q06/RESPONSE",
      "OSR_Q06/RESPONSE/ORDER",
      "OSR_Q06/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "11:ORC": {
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
  },
  "11:PID": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/PATIENT"],
  },
  "13:OBR": {
    groupsClosed: ["OSR_Q06/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER/CHOICE"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsClosed: ["OSR_Q06/RESPONSE/PATIENT"],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER"],
  },
  "16:OBR": {
    groupsClosed: ["OSR_Q06/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER/CHOICE"],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER/TIMING"],
  },
  "20:CTI": {
    groupsClosed: ["OSR_Q06/RESPONSE/ORDER/CHOICE"],
    groupsOpened: [],
  },
  "20:DSC": {
    groupsClosed: [
      "OSR_Q06/RESPONSE",
      "OSR_Q06/RESPONSE/ORDER",
      "OSR_Q06/RESPONSE/ORDER/CHOICE",
    ],
    groupsOpened: [],
  },
  "20:NTE": {
    groupsClosed: ["OSR_Q06/RESPONSE/ORDER/CHOICE"],
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
  "22:DSC": {
    groupsClosed: ["OSR_Q06/RESPONSE", "OSR_Q06/RESPONSE/ORDER"],
    groupsOpened: [],
  },
  "22:ORC": {
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
  "9:OBR": {
    groupsClosed: ["OSR_Q06/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER/CHOICE"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OSR_Q06/RESPONSE/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
