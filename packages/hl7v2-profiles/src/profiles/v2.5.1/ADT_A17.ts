// Generated profile automaton for ADT_A17 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([11, 13, 14, 15]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EVN", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["PID", 4]])],
  [
    3,
    new Map([
      ["EVN", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["PD1", 6],
      ["PV1", 5],
    ]),
  ],
  [
    5,
    new Map([
      ["DB1", 9],
      ["OBX", 8],
      ["PID", 7],
      ["PV2", 10],
    ]),
  ],
  [6, new Map([["PV1", 5]])],
  [
    7,
    new Map([
      ["PD1", 12],
      ["PV1", 11],
    ]),
  ],
  [
    8,
    new Map([
      ["OBX", 8],
      ["PID", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["DB1", 9],
      ["OBX", 8],
      ["PID", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["DB1", 9],
      ["OBX", 8],
      ["PID", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["DB1", 14],
      ["OBX", 13],
      ["PV2", 15],
    ]),
  ],
  [12, new Map([["PV1", 11]])],
  [13, new Map([["OBX", 13]])],
  [
    14,
    new Map([
      ["DB1", 14],
      ["OBX", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["DB1", 14],
      ["OBX", 13],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
