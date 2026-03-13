// Generated profile automaton for UDM_Q05 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([5, 7]);
export const alphabet = new Set<string>([
  "DSC",
  "DSP",
  "MSH",
  "SFT",
  "UAC",
  "URD",
  "URS",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["SFT", 4],
      ["UAC", 3],
      ["URD", 2],
    ]),
  ],
  [
    2,
    new Map([
      ["DSP", 5],
      ["URS", 6],
    ]),
  ],
  [3, new Map([["URD", 2]])],
  [
    4,
    new Map([
      ["SFT", 4],
      ["UAC", 3],
      ["URD", 2],
    ]),
  ],
  [
    5,
    new Map([
      ["DSC", 7],
      ["DSP", 5],
    ]),
  ],
  [6, new Map([["DSP", 5]])],
  [7, new Map([])],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
