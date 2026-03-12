// Generated profile automaton for RSP_K22 (v2.4)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8, 9]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "PD1",
  "PID",
  "QAK",
  "QPD",
  "QRI",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 4],
      ["QAK", 3],
    ]),
  ],
  [3, new Map([["QPD", 5]])],
  [4, new Map([["QAK", 3]])],
  [
    5,
    new Map([
      ["DSC", 6],
      ["PID", 7],
    ]),
  ],
  [6, new Map([])],
  [
    7,
    new Map([
      ["DSC", 6],
      ["PD1", 9],
      ["PID", 7],
      ["QRI", 8],
    ]),
  ],
  [
    8,
    new Map([
      ["DSC", 6],
      ["PID", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["DSC", 6],
      ["PID", 7],
      ["QRI", 8],
    ]),
  ],
]);
export const effects = {
  "5:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K22/QUERY_RESPONSE"],
  },
  "5:PID": {
    groupsOpened: ["RSP_K22/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "7:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K22/QUERY_RESPONSE"],
  },
  "7:PID": {
    groupsOpened: ["RSP_K22/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K22/QUERY_RESPONSE"],
  },
  "8:PID": {
    groupsOpened: ["RSP_K22/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K22/QUERY_RESPONSE"],
  },
  "9:PID": {
    groupsOpened: ["RSP_K22/QUERY_RESPONSE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
