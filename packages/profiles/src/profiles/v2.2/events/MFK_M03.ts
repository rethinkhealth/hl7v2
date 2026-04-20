// Generated profile automaton for MFK_M03 (v2.2)

export const start = 0;
export const finals = new Set<number>([3, 5]);
export const alphabet = new Set<string>(["ERR", "MFA", "MFI", "MSA", "MSH"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 4],
      ["MFI", 3],
    ]),
  ],
  [3, new Map([["MFA", 5]])],
  [4, new Map([["MFI", 3]])],
  [5, new Map([["MFA", 5]])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
