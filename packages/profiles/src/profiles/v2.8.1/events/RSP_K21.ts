// Generated profile automaton for RSP_K21 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([7, 8, 10]);
export const alphabet = new Set<string>([
  "ARV",
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
    ]),
  ],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["QPD", 7]])],
  [6, new Map([["QAK", 5]])],
  [
    7,
    new Map([
      ["DSC", 8],
      ["PID", 9],
    ]),
  ],
  [8, new Map([])],
  [
    9,
    new Map([
      ["ARV", 12],
      ["NK1", 11],
      ["PD1", 13],
      ["QRI", 10],
    ]),
  ],
  [10, new Map([["DSC", 8]])],
  [
    11,
    new Map([
      ["NK1", 11],
      ["QRI", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["ARV", 12],
      ["NK1", 11],
      ["QRI", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["ARV", 12],
      ["NK1", 11],
      ["QRI", 10],
    ]),
  ],
]);
export const effects = {
  "10:DSC": {
    groupsClosed: ["RSP_K21/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "7:DSC": {
    groupsClosed: ["RSP_K21/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["RSP_K21/QUERY_RESPONSE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
