// Generated profile automaton for ADT_A21 (v2.7)

export const start = 0;
export const finals = new Set<number>([6, 8, 9, 10]);
export const alphabet = new Set<string>([
  "DB1",
  "EVN",
  "MSH",
  "OBX",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["PID", 5]])],
  [3, new Map([["EVN", 2]])],
  [
    4,
    new Map([
      ["EVN", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["PD1", 7],
      ["PV1", 6],
    ]),
  ],
  [
    6,
    new Map([
      ["DB1", 9],
      ["OBX", 8],
      ["PV2", 10],
    ]),
  ],
  [7, new Map([["PV1", 6]])],
  [8, new Map([["OBX", 8]])],
  [
    9,
    new Map([
      ["DB1", 9],
      ["OBX", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["DB1", 9],
      ["OBX", 8],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
