// Generated profile automaton for ADR_A19 (v2.1)

export const start = 0;
export const finals = new Set<number>([6, 7]);
export const alphabet = new Set<string>([
  "DSC",
  "EVN",
  "MSA",
  "MSH",
  "PID",
  "PV1",
  "QRD",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [2, new Map([["QRD", 3]])],
  [
    3,
    new Map([
      ["EVN", 5],
      ["PID", 4],
    ]),
  ],
  [4, new Map([["PV1", 6]])],
  [5, new Map([["PID", 4]])],
  [
    6,
    new Map([
      ["DSC", 7],
      ["EVN", 5],
      ["PID", 4],
    ]),
  ],
  [7, new Map([])],
]);
export const effects = {
  "3:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "6:DSC": {
    groupsClosed: ["ADR_A19/QUERY_RESPONSE"],
    groupsOpened: [],
  },
  "6:EVN": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ADR_A19/QUERY_RESPONSE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
