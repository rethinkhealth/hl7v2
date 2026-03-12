// Generated profile automaton for ORF_R04 (v2.2)

export const start = 0;
export const finals = new Set<number>([4, 9, 10, 11, 12]);
export const alphabet = new Set<string>([
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
      ["NTE", 6],
      ["OBR", 4],
      ["ORC", 5],
      ["PID", 7],
      ["QRD", 3],
      ["QRF", 8],
    ]),
  ],
  [
    4,
    new Map([
      ["DSC", 9],
      ["NTE", 10],
      ["OBR", 4],
      ["OBX", 11],
      ["ORC", 5],
    ]),
  ],
  [5, new Map([["OBR", 4]])],
  [
    6,
    new Map([
      ["NTE", 6],
      ["OBR", 4],
      ["ORC", 5],
      ["QRD", 3],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 6],
      ["OBR", 4],
      ["ORC", 5],
      ["QRD", 3],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 6],
      ["OBR", 4],
      ["ORC", 5],
      ["PID", 7],
      ["QRD", 3],
    ]),
  ],
  [9, new Map([])],
  [
    10,
    new Map([
      ["DSC", 9],
      ["NTE", 10],
      ["OBR", 4],
      ["OBX", 11],
      ["ORC", 5],
    ]),
  ],
  [
    11,
    new Map([
      ["DSC", 9],
      ["NTE", 12],
      ["OBR", 4],
      ["OBX", 11],
      ["ORC", 5],
    ]),
  ],
  [
    12,
    new Map([
      ["DSC", 9],
      ["NTE", 12],
      ["OBR", 4],
      ["OBX", 11],
      ["ORC", 5],
    ]),
  ],
]);
export const effects = {
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/ORDER", "ORF_R04/ORDER/OBSERVATION"],
  },
  "10:NTE": {
    groupsOpened: ["ORF_R04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: [],
  },
  "10:OBX": {
    groupsOpened: ["ORF_R04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: ["ORF_R04/ORDER/OBSERVATION"],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/ORDER", "ORF_R04/ORDER/OBSERVATION"],
  },
  "11:OBR": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["ORF_R04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: ["ORF_R04/ORDER/OBSERVATION"],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/ORDER", "ORF_R04/ORDER/OBSERVATION"],
  },
  "12:NTE": {
    groupsOpened: ["ORF_R04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["ORF_R04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: ["ORF_R04/ORDER/OBSERVATION"],
  },
  "2:QRD": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "3:OBR": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
  },
  "3:ORC": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
  },
  "3:QRD": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "4:DSC": {
    groupsOpened: [],
    groupsClosed: ["ORF_R04/ORDER", "ORF_R04/ORDER/OBSERVATION"],
  },
  "4:NTE": {
    groupsOpened: ["ORF_R04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "4:OBR": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: [],
  },
  "4:OBX": {
    groupsOpened: ["ORF_R04/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: ["ORF_R04/ORDER/OBSERVATION"],
  },
  "6:OBR": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
  },
  "6:ORC": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
  },
  "6:QRD": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "7:OBR": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
  },
  "7:ORC": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
  },
  "7:QRD": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
  },
  "8:ORC": {
    groupsOpened: ["ORF_R04/ORDER"],
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
  },
  "8:QRD": {
    groupsOpened: ["ORF_R04/QUERY_RESPONSE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
