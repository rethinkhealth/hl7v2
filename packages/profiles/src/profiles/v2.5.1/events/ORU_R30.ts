// Generated profile automaton for ORU_R30 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([9, 12]);
export const alphabet = new Set<string>([
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "SFT",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["PID", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ORC", 4],
      ["PD1", 6],
      ["PV1", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["PID", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([["OBR", 7]])],
  [
    5,
    new Map([
      ["ORC", 4],
      ["PV2", 8],
    ]),
  ],
  [
    6,
    new Map([
      ["ORC", 4],
      ["PV1", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 11],
      ["OBX", 9],
      ["TQ1", 10],
    ]),
  ],
  [8, new Map([["ORC", 4]])],
  [
    9,
    new Map([
      ["NTE", 12],
      ["OBX", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["OBX", 9],
      ["TQ1", 10],
      ["TQ2", 13],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 11],
      ["OBX", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["OBX", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["OBX", 9],
      ["TQ1", 10],
      ["TQ2", 13],
    ]),
  ],
]);
export const effects = {
  "10:OBX": {
    groupsClosed: ["ORU_R30/TIMING_QTY"],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/TIMING_QTY"],
  },
  "11:OBX": {
    groupsClosed: ["ORU_R30/TIMING_QTY"],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/TIMING_QTY"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "13:OBX": {
    groupsClosed: ["ORU_R30/TIMING_QTY"],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/TIMING_QTY"],
  },
  "2:ORC": {
    groupsClosed: ["ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "2:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/VISIT"],
  },
  "5:ORC": {
    groupsClosed: ["ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "6:ORC": {
    groupsClosed: ["ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "6:PV1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/VISIT"],
  },
  "7:OBX": {
    groupsClosed: ["ORU_R30/TIMING_QTY"],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/TIMING_QTY"],
  },
  "8:ORC": {
    groupsClosed: ["ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
