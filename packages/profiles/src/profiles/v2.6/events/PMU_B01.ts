// Generated profile automaton for PMU_B01 (v2.6)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8, 9, 10, 11]);
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["STF", 5]])],
  [3, new Map([["EVN", 2]])],
  [
    4,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["AFF", 9],
      ["CER", 6],
      ["EDU", 7],
      ["LAN", 8],
      ["ORG", 10],
      ["PRA", 11],
    ]),
  ],
  [6, new Map([["CER", 6]])],
  [
    7,
    new Map([
      ["CER", 6],
      ["EDU", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["CER", 6],
      ["EDU", 7],
      ["LAN", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["AFF", 9],
      ["CER", 6],
      ["EDU", 7],
      ["LAN", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["AFF", 9],
      ["CER", 6],
      ["EDU", 7],
      ["LAN", 8],
      ["ORG", 10],
    ]),
  ],
  [
    11,
    new Map([
      ["AFF", 9],
      ["CER", 6],
      ["EDU", 7],
      ["LAN", 8],
      ["ORG", 10],
      ["PRA", 11],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
