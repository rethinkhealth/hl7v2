// Generated profile automaton for VXX_V02 (v2.3)

export const start = 0;
export const finals = new Set<number>([4, 6]);
export const alphabet = new Set<string>([
  "MSA",
  "MSH",
  "NK1",
  "PID",
  "QRD",
  "QRF",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [2, new Map([["QRD", 3]])],
  [
    3,
    new Map([
      ["PID", 4],
      ["QRF", 5],
    ]),
  ],
  [
    4,
    new Map([
      ["NK1", 6],
      ["PID", 4],
    ]),
  ],
  [5, new Map([["PID", 4]])],
  [
    6,
    new Map([
      ["NK1", 6],
      ["PID", 4],
    ]),
  ],
]);
export const effects = {
  "3:PID": {
    groupsOpened: ["VXX_V02/PATIENT"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["VXX_V02/PATIENT"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["VXX_V02/PATIENT"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["VXX_V02/PATIENT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
