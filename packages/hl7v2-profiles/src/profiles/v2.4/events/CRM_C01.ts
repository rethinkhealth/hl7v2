// Generated profile automaton for CRM_C01 (v2.4)

export const start = 0;
export const finals = new Set<number>([3, 5]);
export const alphabet = new Set<string>(["CSP", "CSR", "MSH", "PID", "PV1"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["PID", 2]])],
  [
    2,
    new Map([
      ["CSR", 3],
      ["PV1", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["CSP", 5],
      ["PID", 2],
    ]),
  ],
  [4, new Map([["CSR", 3]])],
  [
    5,
    new Map([
      ["CSP", 5],
      ["PID", 2],
    ]),
  ],
]);
export const effects = {
  "1:PID": {
    groupsOpened: ["CRM_C01/PATIENT"],
    groupsClosed: [],
  },
  "3:PID": {
    groupsOpened: ["CRM_C01/PATIENT"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["CRM_C01/PATIENT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
