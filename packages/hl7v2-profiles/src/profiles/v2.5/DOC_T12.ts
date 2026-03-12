// Generated profile automaton for DOC_T12 (v2.5)

export const start = 0;
export const finals = new Set<number>([9, 10, 11]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "EVN",
  "MSA",
  "MSH",
  "OBX",
  "PID",
  "PV1",
  "QAK",
  "QRD",
  "TXA",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 5],
      ["QAK", 4],
      ["QRD", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["EVN", 7],
      ["PID", 6],
    ]),
  ],
  [4, new Map([["QRD", 3]])],
  [
    5,
    new Map([
      ["QAK", 4],
      ["QRD", 3],
    ]),
  ],
  [6, new Map([["PV1", 8]])],
  [7, new Map([["PID", 6]])],
  [8, new Map([["TXA", 9]])],
  [
    9,
    new Map([
      ["DSC", 10],
      ["EVN", 7],
      ["OBX", 11],
      ["PID", 6],
    ]),
  ],
  [10, new Map([])],
  [
    11,
    new Map([
      ["DSC", 10],
      ["EVN", 7],
      ["OBX", 11],
      ["PID", 6],
    ]),
  ],
]);
export const effects = {
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: ["DOC_T12/RESULT"],
  },
  "11:EVN": {
    groupsOpened: ["DOC_T12/RESULT"],
    groupsClosed: [],
  },
  "11:PID": {
    groupsOpened: ["DOC_T12/RESULT"],
    groupsClosed: [],
  },
  "3:EVN": {
    groupsOpened: ["DOC_T12/RESULT"],
    groupsClosed: [],
  },
  "3:PID": {
    groupsOpened: ["DOC_T12/RESULT"],
    groupsClosed: [],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: ["DOC_T12/RESULT"],
  },
  "9:EVN": {
    groupsOpened: ["DOC_T12/RESULT"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: ["DOC_T12/RESULT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
