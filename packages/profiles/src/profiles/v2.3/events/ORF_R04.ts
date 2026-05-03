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
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "10:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "10:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "10:PID": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "11:CTI": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "11:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "11:PID": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "12:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "13:CTI": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "13:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
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
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "13:PID": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "3:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "3:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "4:CTI": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "4:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "4:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "4:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "4:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
  },
  "4:ORC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "4:PID": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "6:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "6:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "7:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "7:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE", "ORF_R04/QUERY_RESPONSE/PATIENT"],
  },
  "9:DSC": {
    groupsClosed: [
      "ORF_R04/QUERY_RESPONSE",
      "ORF_R04/QUERY_RESPONSE/ORDER",
      "ORF_R04/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "9:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
  },
  "9:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE/PATIENT"],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE/ORDER"],
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
