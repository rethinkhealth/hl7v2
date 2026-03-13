// Generated profile automaton for PMU_B01 (v2.4)

export const start = 0;
export const finals = new Set<number>([3, 4, 5, 6, 7, 8]);
export const alphabet = new Set<string>([
  "AFF",
  "EDU",
  "EVN",
  "LAN",
  "MSH",
  "ORG",
  "PRA",
  "STF",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["STF", 3]])],
  [
    3,
    new Map([
      ["AFF", 6],
      ["EDU", 4],
      ["LAN", 5],
      ["ORG", 7],
      ["PRA", 8],
    ]),
  ],
  [4, new Map([["EDU", 4]])],
  [
    5,
    new Map([
      ["EDU", 4],
      ["LAN", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["AFF", 6],
      ["EDU", 4],
      ["LAN", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["AFF", 6],
      ["EDU", 4],
      ["LAN", 5],
      ["ORG", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["AFF", 6],
      ["EDU", 4],
      ["LAN", 5],
      ["ORG", 7],
      ["PRA", 8],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
