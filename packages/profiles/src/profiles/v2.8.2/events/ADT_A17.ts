// Generated profile automaton for ADT_A17 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([12, 14, 15, 16]);
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
      ["DB1", 10],
      ["OBX", 9],
      ["PID", 8],
      ["PV2", 11],
    ]),
  ],
  [7, new Map([["PV1", 6]])],
  [
    8,
    new Map([
      ["PD1", 13],
      ["PV1", 12],
    ]),
  ],
  [
    9,
    new Map([
      ["OBX", 9],
      ["PID", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["DB1", 10],
      ["OBX", 9],
      ["PID", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["DB1", 10],
      ["OBX", 9],
      ["PID", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["DB1", 15],
      ["OBX", 14],
      ["PV2", 16],
    ]),
  ],
  [13, new Map([["PV1", 12]])],
  [14, new Map([["OBX", 14]])],
  [
    15,
    new Map([
      ["DB1", 15],
      ["OBX", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["DB1", 15],
      ["OBX", 14],
    ]),
  ],
]);
export const effects = {} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
