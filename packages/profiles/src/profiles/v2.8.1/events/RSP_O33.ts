// Generated profile automaton for RSP_O33 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([7, 8, 9]);
export const alphabet = new Set<string>([
  "ARV",
  "ERR",
  "MSA",
  "MSH",
  "PID",
  "QAK",
  "QPD",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
    ]),
  ],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["QPD", 7]])],
  [6, new Map([["QAK", 5]])],
  [7, new Map([["PID", 8]])],
  [8, new Map([["ARV", 9]])],
  [9, new Map([["ARV", 9]])],
]);
export const effects = {
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["RSP_O33/DONOR"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
