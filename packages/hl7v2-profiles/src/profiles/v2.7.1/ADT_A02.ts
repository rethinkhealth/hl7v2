// Generated profile automaton for ADT_A02 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([6, 10, 11, 12, 13, 14, 15]);
export const alphabet = new Set<string>([
  "ARV",
  "DB1",
  "EVN",
  "MSH",
  "OBX",
  "PD1",
  "PDA",
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
      ["ARV", 14],
      ["DB1", 12],
      ["OBX", 11],
      ["PDA", 10],
      ["PV2", 15],
      ["ROL", 13],
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
  [10, new Map([])],
  [
    11,
    new Map([
      ["OBX", 11],
      ["PDA", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["DB1", 12],
      ["OBX", 11],
      ["PDA", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["DB1", 12],
      ["OBX", 11],
      ["PDA", 10],
      ["ROL", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["ARV", 14],
      ["DB1", 12],
      ["OBX", 11],
      ["PDA", 10],
      ["ROL", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["ARV", 14],
      ["DB1", 12],
      ["OBX", 11],
      ["PDA", 10],
      ["ROL", 13],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
