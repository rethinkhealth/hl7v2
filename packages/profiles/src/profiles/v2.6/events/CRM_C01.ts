// Generated profile automaton for CRM_C01 (v2.6)

export const start = 0;
export const finals = new Set<number>([5, 7]);
export const alphabet = new Set<string>([
  "CSP",
  "CSR",
  "MSH",
  "PID",
  "PV1",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["PID", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["CSR", 5],
      ["PV1", 6],
    ]),
  ],
  [3, new Map([["PID", 2]])],
  [
    4,
    new Map([
      ["PID", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["CSP", 7],
      ["PID", 2],
    ]),
  ],
  [6, new Map([["CSR", 5]])],
  [
    7,
    new Map([
      ["CSP", 7],
      ["PID", 2],
    ]),
  ],
]);
export const effects = {
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["CRM_C01/PATIENT"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["CRM_C01/PATIENT"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["CRM_C01/PATIENT"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["CRM_C01/PATIENT"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["CRM_C01/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
