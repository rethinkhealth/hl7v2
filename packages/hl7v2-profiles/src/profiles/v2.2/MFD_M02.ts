// Generated profile automaton for MFD_M02 (v2.2)

export const start = 0;
export const finals = new Set<number>([2, 3]);
export const alphabet = new Set<string>(["MFA", "MFI", "MSH"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MFI", 2]])],
  [2, new Map([["MFA", 3]])],
  [3, new Map([["MFA", 3]])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
