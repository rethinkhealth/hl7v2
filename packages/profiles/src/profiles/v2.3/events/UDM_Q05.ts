// Generated profile automaton for UDM_Q05 (v2.3)

export const start = 0;
export const finals = new Set<number>([3, 5]);
export const alphabet = new Set<string>(["DSC", "DSP", "MSH", "URD", "URS"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["URD", 2]])],
  [
    2,
    new Map([
      ["DSP", 3],
      ["URS", 4],
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
