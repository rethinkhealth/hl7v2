// Generated profile automaton for DOC_T12 (v2.3)

export const start = 0;
export const finals = new Set<number>([8, 9, 10]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "EVN",
  "MSA",
  "MSH",
  "OBX",
  "PID",
  "PV1",
  "QRD",
  "TXA",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 4],
      ["QRD", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["EVN", 6],
      ["PID", 5],
    ]),
  ],
  [4, new Map([["QRD", 3]])],
  [5, new Map([["PV1", 7]])],
  [6, new Map([["PID", 5]])],
  [7, new Map([["TXA", 8]])],
  [
    8,
    new Map([
      ["DSC", 9],
      ["EVN", 6],
      ["OBX", 10],
      ["PID", 5],
    ]),
  ],
  [9, new Map([])],
  [
    10,
    new Map([
      ["DSC", 9],
      ["EVN", 6],
      ["OBX", 10],
      ["PID", 5],
    ]),
  ],
]);
export const effects = {
  "3:PID": {
    groupsOpened: ["DOC_T12/RESULT"],
    groupsClosed: [],
  },
  "3:EVN": {
    groupsOpened: ["DOC_T12/RESULT"],
    groupsClosed: [],
  },
  "8:PID": {
    groupsOpened: ["DOC_T12/RESULT"],
    groupsClosed: [],
  },
  "8:EVN": {
    groupsOpened: ["DOC_T12/RESULT"],
    groupsClosed: [],
  },
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: ["DOC_T12/RESULT"],
  },
  "10:PID": {
    groupsOpened: ["DOC_T12/RESULT"],
    groupsClosed: [],
  },
  "10:EVN": {
    groupsOpened: ["DOC_T12/RESULT"],
    groupsClosed: [],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: ["DOC_T12/RESULT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
