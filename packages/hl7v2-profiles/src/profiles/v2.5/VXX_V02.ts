// Generated profile automaton for VXX_V02 (v2.5)

export const start = 0;
export const finals = new Set<number>([5, 7]);
export const alphabet = new Set<string>([
  "MSA",
  "MSH",
  "NK1",
  "PID",
  "QRD",
  "QRF",
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["QRD", 3],
      ["SFT", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["PID", 5],
      ["QRF", 6],
    ]),
  ],
  [
    4,
    new Map([
      ["QRD", 3],
      ["SFT", 4],
    ]),
  ],
  [
    5,
    new Map([
      ["NK1", 7],
      ["PID", 5],
    ]),
  ],
  [6, new Map([["PID", 5]])],
  [
    7,
    new Map([
      ["NK1", 7],
      ["PID", 5],
    ]),
  ],
]);
export const effects = {
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["VXX_V02/PATIENT"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["VXX_V02/PATIENT"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["VXX_V02/PATIENT"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["VXX_V02/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
