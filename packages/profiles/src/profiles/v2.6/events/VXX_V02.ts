// Generated profile automaton for VXX_V02 (v2.6)

export const start = 0;
export const finals = new Set<number>([6, 8]);
export const alphabet = new Set<string>([
  "MSA",
  "MSH",
  "NK1",
  "PID",
  "QRD",
  "QRF",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["QRD", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["PID", 6],
      ["QRF", 7],
    ]),
  ],
  [4, new Map([["QRD", 3]])],
  [
    5,
    new Map([
      ["QRD", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NK1", 8],
      ["PID", 6],
    ]),
  ],
  [7, new Map([["PID", 6]])],
  [
    8,
    new Map([
      ["NK1", 8],
      ["PID", 6],
    ]),
  ],
]);
export const effects = {
  "3:PID": {
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
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["VXX_V02/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
