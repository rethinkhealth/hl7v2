// Generated profile automaton for RSP_Q11 (v2.6)

export const start = 0;
export const finals = new Set<number>([7, 8, 11, 14, 15]);
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
  [
    6,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["DSC", 8],
      ["MFE", 9],
    ]),
  ],
  [8, new Map([])],
  [9, new Map([["LOC", 10]])],
  [
    10,
    new Map([
      ["LCH", 13],
      ["LDP", 11],
      ["LRL", 12],
    ]),
  ],
  [
    11,
    new Map([
      ["DSC", 8],
      ["LCC", 14],
      ["LCH", 15],
      ["LDP", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["LDP", 11],
      ["LRL", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["LCH", 13],
      ["LDP", 11],
      ["LRL", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["DSC", 8],
      ["LCC", 14],
      ["LDP", 11],
    ]),
  ],
  [
    15,
    new Map([
      ["DSC", 8],
      ["LCC", 14],
      ["LCH", 15],
      ["LDP", 11],
    ]),
  ],
]);
export const effects = {
  "7:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_Q11/QUERY_RESULT_CLUSTER"],
  },
  "7:MFE": {
    groupsOpened: ["RSP_Q11/QUERY_RESULT_CLUSTER"],
    groupsClosed: [],
  },
  "10:LDP": {
    groupsOpened: ["RSP_Q11/QUERY_RESULT_CLUSTER/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "11:LDP": {
    groupsOpened: ["RSP_Q11/QUERY_RESULT_CLUSTER/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Q11/QUERY_RESULT_CLUSTER",
      "RSP_Q11/QUERY_RESULT_CLUSTER/MF_LOC_DEPT",
    ],
  },
  "12:LDP": {
    groupsOpened: ["RSP_Q11/QUERY_RESULT_CLUSTER/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "13:LDP": {
    groupsOpened: ["RSP_Q11/QUERY_RESULT_CLUSTER/MF_LOC_DEPT"],
    groupsClosed: [],
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
  "15:LDP": {
    groupsOpened: ["RSP_Q11/QUERY_RESULT_CLUSTER/MF_LOC_DEPT"],
    groupsClosed: [],
  },
  "15:DSC": {
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
