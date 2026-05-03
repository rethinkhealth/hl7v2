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
    groupsClosed: ["ORF_R04/ORDER", "ORF_R04/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "10:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/ORDER/OBSERVATION"],
  },
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/ORDER/OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: ["ORF_R04/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "11:DSC": {
    groupsClosed: ["ORF_R04/ORDER", "ORF_R04/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/ORDER/OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: ["ORF_R04/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "12:DSC": {
    groupsClosed: ["ORF_R04/ORDER", "ORF_R04/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "12:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/ORDER/OBSERVATION"],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/ORDER/OBSERVATION"],
  },
  "12:ORC": {
    groupsClosed: ["ORF_R04/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "2:QRD": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE"],
  },
  "3:OBR": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "3:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "3:QRD": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE"],
  },
  "4:DSC": {
    groupsClosed: ["ORF_R04/ORDER", "ORF_R04/ORDER/OBSERVATION"],
    groupsOpened: [],
  },
  "4:NTE": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/ORDER/OBSERVATION"],
  },
  "4:OBR": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "4:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/ORDER/OBSERVATION"],
  },
  "4:ORC": {
    groupsClosed: ["ORF_R04/ORDER/OBSERVATION"],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "6:OBR": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "6:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "6:QRD": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE"],
  },
  "7:OBR": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "7:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "7:QRD": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE"],
  },
  "8:OBR": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "8:ORC": {
    groupsClosed: ["ORF_R04/QUERY_RESPONSE"],
    groupsOpened: ["ORF_R04/ORDER"],
  },
  "8:QRD": {
    groupsClosed: [],
    groupsOpened: ["ORF_R04/QUERY_RESPONSE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
