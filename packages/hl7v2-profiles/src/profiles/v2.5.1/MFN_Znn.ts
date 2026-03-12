// Generated profile automaton for MFN_Znn (v2.5.1)

export const start = 0;
export const finals = new Set<number>([5]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "SFT",
  "anyHL7Segment",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MFI", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["MFE", 4]])],
  [
    3,
    new Map([
      ["MFI", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([["anyHL7Segment", 5]])],
  [5, new Map([["MFE", 4]])],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_Znn/MF_SITE_DEFINED"],
  },
  "5:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_Znn/MF_SITE_DEFINED"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
