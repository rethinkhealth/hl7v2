// Generated profile automaton for MFN_M12 (v2.8)

export const start = 0;
export const finals = new Set<number>([6, 7, 8, 9]);
export const alphabet = new Set<string>([
  "MFE",
  "MFI",
  "MSH",
  "OM1",
  "OM7",
  "PRT",
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
  [5, new Map([["OM1", 6]])],
  [
    6,
    new Map([
      ["MFE", 5],
      ["OM7", 7],
      ["PRT", 8],
    ]),
  ],
  [
    7,
    new Map([
      ["MFE", 5],
      ["PRT", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["MFE", 5],
      ["OM7", 7],
      ["PRT", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["MFE", 5],
      ["PRT", 9],
    ]),
  ],
]);
export const effects = {
  "2:MFE": {
    groupsOpened: ["MFN_M12/MF_OBS_ATTRIBUTES"],
    groupsClosed: [],
  },
  "6:MFE": {
    groupsOpened: ["MFN_M12/MF_OBS_ATTRIBUTES"],
    groupsClosed: ["MFN_M12/MF_OBS_ATTRIBUTES/MF_OBS_OTHER_ATTRIBUTES"],
  },
  "6:OM7": {
    groupsOpened: ["MFN_M12/MF_OBS_ATTRIBUTES/MF_OBS_OTHER_ATTRIBUTES"],
    groupsClosed: [],
  },
  "7:MFE": {
    groupsOpened: ["MFN_M12/MF_OBS_ATTRIBUTES"],
    groupsClosed: ["MFN_M12/MF_OBS_ATTRIBUTES/MF_OBS_OTHER_ATTRIBUTES"],
  },
  "8:MFE": {
    groupsOpened: ["MFN_M12/MF_OBS_ATTRIBUTES"],
    groupsClosed: ["MFN_M12/MF_OBS_ATTRIBUTES/MF_OBS_OTHER_ATTRIBUTES"],
  },
  "8:OM7": {
    groupsOpened: ["MFN_M12/MF_OBS_ATTRIBUTES/MF_OBS_OTHER_ATTRIBUTES"],
    groupsClosed: [],
  },
  "9:MFE": {
    groupsOpened: ["MFN_M12/MF_OBS_ATTRIBUTES"],
    groupsClosed: ["MFN_M12/MF_OBS_ATTRIBUTES/MF_OBS_OTHER_ATTRIBUTES"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
