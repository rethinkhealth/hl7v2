// Generated profile automaton for STC_S33 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([2]);
export const alphabet = new Set<string>(["MSH", "SCP", "SFT", "UAC"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["SCP", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["SCP", 2]])],
  [3, new Map([["SCP", 2]])],
  [
    4,
    new Map([
      ["SCP", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
