// Generated profile automaton for QRY_A19 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([2, 4]);
export const alphabet = new Set<string>(["MSH", "QRD", "QRF", "SFT"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["QRD", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["QRF", 4]])],
  [
    3,
    new Map([
      ["QRD", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
