// Generated profile automaton for CRM_C01 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([4, 6]);
export const alphabet = new Set<string>([
  "CSP",
  "CSR",
  "MSH",
  "PID",
  "PV1",
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["PID", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["CSR", 4],
      ["PV1", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["PID", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["CSP", 6],
      ["PID", 2],
    ]),
  ],
  [5, new Map([["CSR", 4]])],
  [
    6,
    new Map([
      ["CSP", 6],
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
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["CRM_C01/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
