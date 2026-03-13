// Generated profile automaton for QRY_R02 (v2.2)

export const start = 0;
export const finals = new Set<number>([3, 4]);
export const alphabet = new Set<string>(["DSC", "MSH", "QRD", "QRF"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["QRD", 2]])],
  [2, new Map([["QRF", 3]])],
  [3, new Map([["DSC", 4]])],
  [4, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
