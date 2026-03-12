// Generated profile automaton for PMU_B01 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8, 9, 10, 11, 12, 13]);
export const alphabet = new Set<string>([
  "AFF",
  "CER",
  "EDU",
  "EVN",
  "LAN",
  "MSH",
  "NK1",
  "ORG",
  "PRA",
  "ROL",
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
      ["AFF", 11],
      ["CER", 8],
      ["EDU", 9],
      ["LAN", 10],
      ["NK1", 7],
      ["ORG", 12],
      ["PRA", 13],
      ["ROL", 6],
    ]),
  ],
  [6, new Map([["ROL", 6]])],
  [
    7,
    new Map([
      ["NK1", 7],
      ["ROL", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["CER", 8],
      ["NK1", 7],
      ["ROL", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["CER", 8],
      ["EDU", 9],
      ["NK1", 7],
      ["ROL", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["CER", 8],
      ["EDU", 9],
      ["LAN", 10],
      ["NK1", 7],
      ["ROL", 6],
    ]),
  ],
  [
    11,
    new Map([
      ["AFF", 11],
      ["CER", 8],
      ["EDU", 9],
      ["LAN", 10],
      ["NK1", 7],
      ["ROL", 6],
    ]),
  ],
  [
    12,
    new Map([
      ["AFF", 11],
      ["CER", 8],
      ["EDU", 9],
      ["LAN", 10],
      ["NK1", 7],
      ["ORG", 12],
      ["ROL", 6],
    ]),
  ],
  [
    13,
    new Map([
      ["AFF", 11],
      ["CER", 8],
      ["EDU", 9],
      ["LAN", 10],
      ["NK1", 7],
      ["ORG", 12],
      ["PRA", 13],
      ["ROL", 6],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
