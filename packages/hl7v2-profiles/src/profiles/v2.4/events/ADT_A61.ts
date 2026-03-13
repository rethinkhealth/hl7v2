// Generated profile automaton for ADT_A61 (v2.4)

export const start = 0;
export const finals = new Set<number>([4, 6, 7]);
export const alphabet = new Set<string>([
  "EVN",
  "MSH",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "ROL",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EVN", 2]])],
  [2, new Map([["PID", 3]])],
  [
    3,
    new Map([
      ["PD1", 5],
      ["PV1", 4],
    ]),
  ],
  [
    4,
    new Map([
      ["PV2", 6],
      ["ROL", 7],
    ]),
  ],
  [5, new Map([["PV1", 4]])],
  [6, new Map([])],
  [
    7,
    new Map([
      ["PV2", 6],
      ["ROL", 7],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
