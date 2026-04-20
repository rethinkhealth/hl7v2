// Generated profile automaton for ADT_A15 (v2.7)

export const start = 0;
export const finals = new Set<number>([6, 10, 11, 12, 13, 14]);
export const alphabet = new Set<string>([
  "ARV",
  "DB1",
  "EVN",
  "MSH",
  "OBX",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "ROL",
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
      ["ARV", 8],
      ["PD1", 9],
      ["PV1", 6],
      ["ROL", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["ARV", 13],
      ["DB1", 11],
      ["OBX", 10],
      ["PV2", 14],
      ["ROL", 12],
    ]),
  ],
  [
    7,
    new Map([
      ["PV1", 6],
      ["ROL", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["ARV", 8],
      ["PV1", 6],
      ["ROL", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["ARV", 8],
      ["PV1", 6],
      ["ROL", 7],
    ]),
  ],
  [10, new Map([["OBX", 10]])],
  [
    11,
    new Map([
      ["DB1", 11],
      ["OBX", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["DB1", 11],
      ["OBX", 10],
      ["ROL", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["ARV", 13],
      ["DB1", 11],
      ["OBX", 10],
      ["ROL", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["ARV", 13],
      ["DB1", 11],
      ["OBX", 10],
      ["ROL", 12],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
