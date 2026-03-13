// Generated profile automaton for DBC_O41 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "MSH",
  "NTE",
  "OBX",
  "PD1",
  "PID",
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
      ["AL1", 5],
      ["ARV", 6],
      ["NTE", 7],
      ["OBX", 8],
      ["PD1", 9],
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
  [5, new Map([["AL1", 5]])],
  [
    6,
    new Map([
      ["AL1", 5],
      ["ARV", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["AL1", 5],
      ["ARV", 6],
      ["NTE", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["AL1", 5],
      ["ARV", 6],
      ["NTE", 7],
      ["OBX", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 5],
      ["ARV", 6],
      ["NTE", 7],
      ["OBX", 8],
    ]),
  ],
]);
export const effects = {
  "1:PID": {
    groupsOpened: ["DBC_O41/DONOR"],
    groupsClosed: [],
  },
  "3:PID": {
    groupsOpened: ["DBC_O41/DONOR"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["DBC_O41/DONOR"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
