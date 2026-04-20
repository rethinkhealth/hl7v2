// Generated profile automaton for RSP_K32 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([6, 7, 9, 12, 13]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "NK1",
  "PD1",
  "PID",
  "PV1",
  "PV2",
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
      ["PV1", 9],
    ]),
  ],
  [
    9,
    new Map([
      ["DSC", 7],
      ["PID", 8],
      ["PV2", 13],
      ["QRI", 12],
    ]),
  ],
  [
    10,
    new Map([
      ["NK1", 10],
      ["PV1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["NK1", 10],
      ["PV1", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["DSC", 7],
      ["PID", 8],
    ]),
  ],
  [
    13,
    new Map([
      ["DSC", 7],
      ["PID", 8],
      ["QRI", 12],
    ]),
  ],
]);
export const effects = {
  "6:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K32/QUERY_RESPONSE"],
  },
  "6:PID": {
    groupsOpened: ["RSP_K32/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: ["RSP_K32/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K32/QUERY_RESPONSE"],
  },
  "12:PID": {
    groupsOpened: ["RSP_K32/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K32/QUERY_RESPONSE"],
  },
  "13:PID": {
    groupsOpened: ["RSP_K32/QUERY_RESPONSE"],
    groupsClosed: [],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K32/QUERY_RESPONSE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
