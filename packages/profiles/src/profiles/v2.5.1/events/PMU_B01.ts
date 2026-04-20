// Generated profile automaton for PMU_B01 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([4, 5, 6, 7, 8, 9, 10]);
export const alphabet = new Set<string>([
  "AFF",
  "CER",
  "EDU",
  "EVN",
  "LAN",
  "MSH",
  "ORG",
  "PRA",
  "SFT",
  "STF",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EVN", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["STF", 4]])],
  [
    3,
    new Map([
      ["EVN", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["AFF", 8],
      ["CER", 5],
      ["EDU", 6],
      ["LAN", 7],
      ["ORG", 9],
      ["PRA", 10],
    ]),
  ],
  [5, new Map([["CER", 5]])],
  [
    6,
    new Map([
      ["CER", 5],
      ["EDU", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["CER", 5],
      ["EDU", 6],
      ["LAN", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["AFF", 8],
      ["CER", 5],
      ["EDU", 6],
      ["LAN", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["AFF", 8],
      ["CER", 5],
      ["EDU", 6],
      ["LAN", 7],
      ["ORG", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["AFF", 8],
      ["CER", 5],
      ["EDU", 6],
      ["LAN", 7],
      ["ORG", 9],
      ["PRA", 10],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
