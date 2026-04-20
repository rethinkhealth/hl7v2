// Generated profile automaton for QRY_PC4 (v2.4)

export const start = 0;
export const finals = new Set<number>([2, 3]);
export const alphabet = new Set<string>(["MSH", "QRD", "QRF"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["QRD", 2]])],
  [2, new Map([["QRF", 3]])],
  [3, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
