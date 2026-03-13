// Generated profile automaton for OSQ_Q06 (v2.6)

export const start = 0;
export const finals = new Set<number>([2, 5, 6]);
export const alphabet = new Set<string>([
  "DSC",
  "MSH",
  "QRD",
  "QRF",
  "SFT",
  "UAC",
]);
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
  [
    2,
    new Map([
      ["DSC", 5],
      ["QRF", 6],
    ]),
  ],
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
  [6, new Map([["DSC", 5]])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
