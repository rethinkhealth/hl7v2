// Generated profile automaton for RSP_K21 (v2.5)

export const start = 0;
export const finals = new Set<number>([6, 7, 9]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "NK1",
  "PD1",
  "PID",
  "QAK",
  "QPD",
  "QRI",
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 5],
      ["QAK", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([["QPD", 6]])],
  [5, new Map([["QAK", 4]])],
  [
    6,
    new Map([
      ["DSC", 7],
      ["PID", 8],
    ]),
  ],
  [7, new Map([])],
  [
    8,
    new Map([
      ["NK1", 10],
      ["PD1", 11],
      ["QRI", 9],
    ]),
  ],
  [
    9,
    new Map([
      ["DSC", 7],
      ["PID", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["NK1", 10],
      ["QRI", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["NK1", 10],
      ["QRI", 9],
    ]),
  ],
]);
export const effects = {
  "6:DSC": {
    groupsClosed: ["RSP_K21/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RSP_K21/QUERY_RESPONSE"],
  },
  "9:DSC": {
    groupsClosed: ["RSP_K21/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "9:PID": {
    groupsClosed: [],
    groupsOpened: ["RSP_K21/QUERY_RESPONSE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
