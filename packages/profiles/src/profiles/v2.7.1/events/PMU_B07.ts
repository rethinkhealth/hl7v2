// Generated profile automaton for PMU_B07 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8]);
export const alphabet = new Set<string>([
  "CER",
  "EVN",
  "MSH",
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
      ["CER", 6],
      ["PRA", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["CER", 6],
      ["ROL", 8],
    ]),
  ],
  [7, new Map([["CER", 6]])],
  [
    8,
    new Map([
      ["CER", 6],
      ["ROL", 8],
    ]),
  ],
]);
export const effects = {
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
  "8:CER": {
    groupsOpened: ["PMU_B07/CERTIFICATE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
