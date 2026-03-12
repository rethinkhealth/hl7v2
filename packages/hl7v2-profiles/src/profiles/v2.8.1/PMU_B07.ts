// Generated profile automaton for PMU_B07 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8, 9]);
export const alphabet = new Set<string>([
  "CER",
  "EVN",
  "MSH",
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
      ["CER", 6],
      ["PRA", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["CER", 6],
      ["PRT", 9],
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
  [
    9,
    new Map([
      ["CER", 6],
      ["PRT", 9],
      ["ROL", 8],
    ]),
  ],
]);
export const effects = {
  "5:CER": {
    groupsClosed: [],
    groupsOpened: ["PMU_B07/CERTIFICATE"],
  },
  "6:CER": {
    groupsClosed: [],
    groupsOpened: ["PMU_B07/CERTIFICATE"],
  },
  "7:CER": {
    groupsClosed: [],
    groupsOpened: ["PMU_B07/CERTIFICATE"],
  },
  "8:CER": {
    groupsClosed: [],
    groupsOpened: ["PMU_B07/CERTIFICATE"],
  },
  "9:CER": {
    groupsClosed: [],
    groupsOpened: ["PMU_B07/CERTIFICATE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
