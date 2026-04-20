// Generated profile automaton for RSP_Q11 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([6, 7, 10, 13, 14]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "LCC",
  "LCH",
  "LDP",
  "LOC",
  "LRL",
  "MFE",
  "MSA",
  "MSH",
  "QAK",
  "QPD",
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
  [
    5,
    new Map([
      ["ERR", 5],
      ["QAK", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["DSC", 7],
      ["MFE", 8],
    ]),
  ],
  [7, new Map([])],
  [8, new Map([["LOC", 9]])],
  [
    9,
    new Map([
      ["LCH", 12],
      ["LDP", 10],
      ["LRL", 11],
    ]),
  ],
  [
    10,
    new Map([
      ["DSC", 7],
      ["LCC", 13],
      ["LCH", 14],
      ["LDP", 10],
    ]),
  ],
  [
    11,
    new Map([
      ["LDP", 10],
      ["LRL", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["LCH", 12],
      ["LDP", 10],
      ["LRL", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["DSC", 7],
      ["LCC", 13],
      ["LDP", 10],
    ]),
  ],
  [
    14,
    new Map([
      ["DSC", 7],
      ["LCC", 13],
      ["LCH", 14],
      ["LDP", 10],
    ]),
  ],
]);
export const effects = {
  "6:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_Q11/QUERY_RESULT_CLUSTER"],
  },
  "6:MFE": {
    groupsOpened: ["RSP_Q11/QUERY_RESULT_CLUSTER"],
    groupsClosed: [],
  },
  "9:LDP": {
    groupsOpened: ["RSP_Q11/QUERY_RESULT_CLUSTER/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "10:LDP": {
    groupsOpened: ["RSP_Q11/QUERY_RESULT_CLUSTER/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Q11/QUERY_RESULT_CLUSTER",
      "RSP_Q11/QUERY_RESULT_CLUSTER/MF_LOC_DEPT",
    ],
  },
  "11:LDP": {
    groupsOpened: ["RSP_Q11/QUERY_RESULT_CLUSTER/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "12:LDP": {
    groupsOpened: ["RSP_Q11/QUERY_RESULT_CLUSTER/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "13:LDP": {
    groupsOpened: ["RSP_Q11/QUERY_RESULT_CLUSTER/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Q11/QUERY_RESULT_CLUSTER",
      "RSP_Q11/QUERY_RESULT_CLUSTER/MF_LOC_DEPT",
    ],
  },
  "14:LDP": {
    groupsOpened: ["RSP_Q11/QUERY_RESULT_CLUSTER/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Q11/QUERY_RESULT_CLUSTER",
      "RSP_Q11/QUERY_RESULT_CLUSTER/MF_LOC_DEPT",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
