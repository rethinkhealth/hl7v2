// Generated profile automaton for PMU_B07 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([4, 5, 6, 7]);
export const alphabet = new Set<string>([
  "CER",
  "EVN",
  "MSH",
  "PRA",
  "ROL",
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
      ["CER", 5],
      ["PRA", 6],
    ]),
  ],
  [
    5,
    new Map([
      ["CER", 5],
      ["ROL", 7],
    ]),
  ],
  [6, new Map([["CER", 5]])],
  [
    7,
    new Map([
      ["CER", 5],
      ["ROL", 7],
    ]),
  ],
]);
export const effects = {
  "4:CER": {
    groupsOpened: ["PMU_B07/CERTIFICATE"],
    groupsClosed: [],
  },
  "5:CER": {
    groupsOpened: ["PMU_B07/CERTIFICATE"],
    groupsClosed: [],
  },
  "6:CER": {
    groupsOpened: ["PMU_B07/CERTIFICATE"],
    groupsClosed: [],
  },
  "7:CER": {
    groupsOpened: ["PMU_B07/CERTIFICATE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
