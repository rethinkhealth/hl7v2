// Generated profile automaton for QRY_A19 (v2.1)

export const start = 0;
export const finals = new Set<number>([2]);
export const alphabet = new Set<string>(["MSH", "QRD"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["QRD", 2]])],
  [2, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
