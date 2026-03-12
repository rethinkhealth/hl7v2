// Generated profile automaton for ORF_R04 (v2.3)

export const start = 0;
export const finals = new Set<number>([4, 8, 9, 10, 11, 13]);
export const alphabet = new Set<string>([
  "CTI",
  "DSC",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PID",
  "QRD",
  "QRF",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [2, new Map([["QRD", 3]])],
  [
    3,
    new Map([
      ["OBR", 4],
      ["ORC", 5],
      ["PID", 6],
      ["QRF", 7],
    ]),
  ],
  [
    4,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 10],
      ["OBR", 4],
      ["OBX", 11],
      ["ORC", 5],
      ["PID", 6],
    ]),
  ],
  [5, new Map([["OBR", 4]])],
  [
    6,
    new Map([
      ["NTE", 12],
      ["OBR", 4],
      ["ORC", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["OBR", 4],
      ["ORC", 5],
      ["PID", 6],
    ]),
  ],
  [8, new Map([])],
  [
    9,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 4],
      ["ORC", 5],
      ["PID", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 10],
      ["OBR", 4],
      ["OBX", 11],
      ["ORC", 5],
      ["PID", 6],
    ]),
  ],
  [
    11,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 13],
      ["OBR", 4],
      ["OBX", 11],
      ["ORC", 5],
      ["PID", 6],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["OBR", 4],
      ["ORC", 5],
    ]),
  ],
  [
    13,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 13],
      ["OBR", 4],
      ["OBX", 11],
      ["ORC", 5],
      ["PID", 6],
    ]),
  ],
]);
export const effects = {
  "10:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "10:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "10:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "10:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "11:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "11:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "11:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "12:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "13:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
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
  "13:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "13:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "3:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "3:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "4:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "4:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "4:NTE": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "4:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "4:OBX": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "4:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "6:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "7:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
  },
  "9:OBR": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
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
