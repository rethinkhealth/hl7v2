// Generated profile automaton for QRY_R02 (v2.6)

export const start = 0;
export const finals = new Set<number>([5]);
export const alphabet = new Set<string>(["MSH", "QRD", "QRF", "SFT", "UAC"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["QRD", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["QRF", 5]])],
  [3, new Map([["QRD", 2]])],
  [
    4,
    new Map([
      ["QRD", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
