// Generated profile automaton for ORU_R30 (v2.6)

export const start = 0;
export const finals = new Set<number>([11, 15]);
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
  "ROL",
  "SFT",
  "TQ1",
  "TQ2",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["PID", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["OBX", 7],
      ["ORC", 5],
      ["PD1", 8],
      ["PV1", 6],
    ]),
  ],
  [3, new Map([["PID", 2]])],
  [
    4,
    new Map([
      ["PID", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["OBR", 9]])],
  [
    6,
    new Map([
      ["ORC", 5],
      ["PV2", 10],
    ]),
  ],
  [
    7,
    new Map([
      ["OBX", 7],
      ["ORC", 5],
      ["PV1", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["OBX", 7],
      ["ORC", 5],
      ["PV1", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 14],
      ["OBX", 11],
      ["ROL", 13],
      ["TQ1", 12],
    ]),
  ],
  [10, new Map([["ORC", 5]])],
  [
    11,
    new Map([
      ["NTE", 15],
      ["OBX", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["OBX", 11],
      ["TQ1", 12],
      ["TQ2", 16],
    ]),
  ],
  [
    13,
    new Map([
      ["OBX", 11],
      ["ROL", 13],
      ["TQ1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["OBX", 11],
      ["ROL", 13],
      ["TQ1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 15],
      ["OBX", 11],
    ]),
  ],
  [
    16,
    new Map([
      ["OBX", 11],
      ["TQ1", 12],
      ["TQ2", 16],
    ]),
  ],
]);
export const effects = {
  "2:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/VISIT"],
  },
  "2:PV1": {
    groupsOpened: ["ORU_R30/VISIT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/VISIT"],
  },
  "7:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/VISIT"],
  },
  "7:PV1": {
    groupsOpened: ["ORU_R30/VISIT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/VISIT"],
  },
  "8:PV1": {
    groupsOpened: ["ORU_R30/VISIT"],
    groupsClosed: [],
  },
  "9:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: ["ORU_R30/TIMING_QTY"],
  },
  "9:TQ1": {
    groupsOpened: ["ORU_R30/TIMING_QTY"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/VISIT"],
  },
  "11:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: ["ORU_R30/TIMING_QTY"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: ["ORU_R30/TIMING_QTY"],
  },
  "13:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: ["ORU_R30/TIMING_QTY"],
  },
  "13:TQ1": {
    groupsOpened: ["ORU_R30/TIMING_QTY"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: ["ORU_R30/TIMING_QTY"],
  },
  "14:TQ1": {
    groupsOpened: ["ORU_R30/TIMING_QTY"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: [],
  },
  "16:TQ1": {
    groupsOpened: ["ORU_R30/TIMING_QTY"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: ["ORU_R30/TIMING_QTY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
