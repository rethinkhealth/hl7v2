// Generated profile automaton for PMU_B01 (v2.8)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
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
  "PRT",
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
      ["AFF", 12],
      ["CER", 9],
      ["EDU", 10],
      ["LAN", 11],
      ["NK1", 8],
      ["ORG", 13],
      ["PRA", 14],
      ["PRT", 7],
      ["ROL", 6],
    ]),
  ],
  [6, new Map([["ROL", 6]])],
  [
    7,
    new Map([
      ["PRT", 7],
      ["ROL", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["NK1", 8],
      ["PRT", 7],
      ["ROL", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["CER", 9],
      ["NK1", 8],
      ["PRT", 7],
      ["ROL", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["CER", 9],
      ["EDU", 10],
      ["NK1", 8],
      ["PRT", 7],
      ["ROL", 6],
    ]),
  ],
  [
    11,
    new Map([
      ["CER", 9],
      ["EDU", 10],
      ["LAN", 11],
      ["NK1", 8],
      ["PRT", 7],
      ["ROL", 6],
    ]),
  ],
  [
    12,
    new Map([
      ["AFF", 12],
      ["CER", 9],
      ["EDU", 10],
      ["LAN", 11],
      ["NK1", 8],
      ["PRT", 7],
      ["ROL", 6],
    ]),
  ],
  [
    13,
    new Map([
      ["AFF", 12],
      ["CER", 9],
      ["EDU", 10],
      ["LAN", 11],
      ["NK1", 8],
      ["ORG", 13],
      ["PRT", 7],
      ["ROL", 6],
    ]),
  ],
  [
    14,
    new Map([
      ["AFF", 12],
      ["CER", 9],
      ["EDU", 10],
      ["LAN", 11],
      ["NK1", 8],
      ["ORG", 13],
      ["PRA", 14],
      ["PRT", 7],
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
