// Generated profile automaton for MFN_M01 (v2.5)

export const start = 0;
export const finals = new Set<number>([4, 5]);
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
  [
    4,
    new Map([
      ["anyHL7Segment", 5],
      ["MFE", 4],
    ]),
  ],
  [5, new Map([["MFE", 4]])],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M01/MF"],
    groupsClosed: [],
  },
  "4:MFE": {
    groupsOpened: ["MFN_M01/MF"],
    groupsClosed: [],
  },
  "5:MFE": {
    groupsOpened: ["MFN_M01/MF"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
