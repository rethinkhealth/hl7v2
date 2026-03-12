// Generated profile automaton for SDR_S32 (v2.7)

export const start = 0;
export const finals = new Set<number>([2, 5]);
export const alphabet = new Set<string>(["MSH", "SCD", "SDD", "SFT", "UAC"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["SDD", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["SCD", 5]])],
  [3, new Map([["SDD", 2]])],
  [
    4,
    new Map([
      ["SDD", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["SCD", 5]])],
]);
export const effects = {
  "1:SDD": {
    groupsClosed: [],
    groupsOpened: ["SDR_S32/ANTI-MICROBIAL_DEVICE_CYCLE_DATA"],
  },
  "3:SDD": {
    groupsClosed: [],
    groupsOpened: ["SDR_S32/ANTI-MICROBIAL_DEVICE_CYCLE_DATA"],
  },
  "4:SDD": {
    groupsClosed: [],
    groupsOpened: ["SDR_S32/ANTI-MICROBIAL_DEVICE_CYCLE_DATA"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
