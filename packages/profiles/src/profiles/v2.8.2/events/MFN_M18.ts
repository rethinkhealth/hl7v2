// Generated profile automaton for MFN_M18 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([7, 8]);
export const alphabet = new Set<string>([
  "DPS",
  "MCP",
  "MFE",
  "MFI",
  "MSH",
  "PM1",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MFI", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["MFE", 5]])],
  [3, new Map([["MFI", 2]])],
  [
    4,
    new Map([
      ["MFI", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["PM1", 6]])],
  [6, new Map([["MCP", 7]])],
  [
    7,
    new Map([
      ["DPS", 8],
      ["MCP", 7],
      ["MFE", 5],
      ["PM1", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["DPS", 8],
      ["MCP", 7],
      ["MFE", 5],
      ["PM1", 6],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsClosed: [],
    groupsOpened: ["MFN_M18/MF_PAYER"],
  },
  "5:PM1": {
    groupsClosed: [],
    groupsOpened: ["MFN_M18/MF_PAYER/PAYER_MF_ENTRY"],
  },
  "6:MCP": {
    groupsClosed: [],
    groupsOpened: ["MFN_M18/MF_PAYER/PAYER_MF_ENTRY/PAYER_MF_COVERAGE"],
  },
  "7:MCP": {
    groupsClosed: [],
    groupsOpened: ["MFN_M18/MF_PAYER/PAYER_MF_ENTRY/PAYER_MF_COVERAGE"],
  },
  "7:MFE": {
    groupsClosed: ["MFN_M18/MF_PAYER/PAYER_MF_ENTRY/PAYER_MF_COVERAGE"],
    groupsOpened: ["MFN_M18/MF_PAYER"],
  },
  "7:PM1": {
    groupsClosed: [],
    groupsOpened: ["MFN_M18/MF_PAYER/PAYER_MF_ENTRY"],
  },
  "8:MCP": {
    groupsClosed: [],
    groupsOpened: ["MFN_M18/MF_PAYER/PAYER_MF_ENTRY/PAYER_MF_COVERAGE"],
  },
  "8:MFE": {
    groupsClosed: ["MFN_M18/MF_PAYER/PAYER_MF_ENTRY/PAYER_MF_COVERAGE"],
    groupsOpened: ["MFN_M18/MF_PAYER"],
  },
  "8:PM1": {
    groupsClosed: [],
    groupsOpened: ["MFN_M18/MF_PAYER/PAYER_MF_ENTRY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
