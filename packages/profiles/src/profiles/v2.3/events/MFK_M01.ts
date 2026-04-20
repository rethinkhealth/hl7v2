// Generated profile automaton for MFK_M01 (v2.3)

export const start = 0;
export const finals = new Set<number>([3, 4]);
export const alphabet = new Set<string>(["MFA", "MFI", "MSA", "MSH"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [2, new Map([["MFI", 3]])],
  [3, new Map([["MFA", 4]])],
  [4, new Map([["MFA", 4]])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
