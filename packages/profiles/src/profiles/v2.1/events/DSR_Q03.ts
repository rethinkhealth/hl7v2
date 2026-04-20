// Generated profile automaton for DSR_Q03 (v2.1)

export const start = 0;
export const finals = new Set<number>([5]);
export const alphabet = new Set<string>(["DSC", "DSP", "MSH", "QRD", "QRF"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["QRD", 2]])],
  [
    2,
    new Map([
      ["DSP", 3],
      ["QRF", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["DSC", 5],
      ["DSP", 3],
    ]),
  ],
  [4, new Map([["DSP", 3]])],
  [5, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
