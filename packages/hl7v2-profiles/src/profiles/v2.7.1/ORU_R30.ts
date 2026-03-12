// Generated profile automaton for ORU_R30 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([14, 18, 19]);
export const alphabet = new Set<string>([
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PRT",
  "PV1",
  "PV2",
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
      ["PD1", 9],
      ["PRT", 8],
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
  [5, new Map([["OBR", 10]])],
  [
    6,
    new Map([
      ["ORC", 5],
      ["PRT", 11],
      ["PV2", 12],
    ]),
  ],
  [
    7,
    new Map([
      ["OBX", 7],
      ["ORC", 5],
      ["PRT", 13],
      ["PV1", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["OBX", 7],
      ["ORC", 5],
      ["PRT", 8],
      ["PV1", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["OBX", 7],
      ["ORC", 5],
      ["PRT", 8],
      ["PV1", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 17],
      ["OBX", 14],
      ["PRT", 16],
      ["TQ1", 15],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 5],
      ["PRT", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["ORC", 5],
      ["PRT", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["OBX", 7],
      ["ORC", 5],
      ["PRT", 13],
      ["PV1", 6],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 18],
      ["OBX", 14],
      ["PRT", 19],
    ]),
  ],
  [
    15,
    new Map([
      ["OBX", 14],
      ["TQ1", 15],
      ["TQ2", 20],
    ]),
  ],
  [
    16,
    new Map([
      ["OBX", 14],
      ["PRT", 16],
      ["TQ1", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 17],
      ["OBX", 14],
      ["PRT", 16],
      ["TQ1", 15],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 18],
      ["OBX", 14],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 18],
      ["OBX", 14],
      ["PRT", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["OBX", 14],
      ["TQ1", 15],
      ["TQ2", 20],
    ]),
  ],
]);
export const effects = {
  "10:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: ["ORU_R30/TIMING_QTY"],
  },
  "10:TQ1": {
    groupsOpened: ["ORU_R30/TIMING_QTY"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/VISIT"],
  },
  "12:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/VISIT"],
  },
  "13:OBX": {
    groupsOpened: ["ORU_R30/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION", "ORU_R30/VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["ORU_R30/VISIT"],
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION"],
  },
  "14:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: ["ORU_R30/TIMING_QTY"],
  },
  "15:TQ1": {
    groupsOpened: ["ORU_R30/TIMING_QTY"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: ["ORU_R30/TIMING_QTY"],
  },
  "16:TQ1": {
    groupsOpened: ["ORU_R30/TIMING_QTY"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: ["ORU_R30/TIMING_QTY"],
  },
  "17:TQ1": {
    groupsOpened: ["ORU_R30/TIMING_QTY"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: ["ORU_R30/TIMING_QTY"],
  },
  "20:TQ1": {
    groupsOpened: ["ORU_R30/TIMING_QTY"],
    groupsClosed: [],
  },
  "2:OBX": {
    groupsOpened: ["ORU_R30/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION", "ORU_R30/VISIT"],
  },
  "2:PV1": {
    groupsOpened: ["ORU_R30/VISIT"],
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION"],
  },
  "6:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/VISIT"],
  },
  "7:OBX": {
    groupsOpened: ["ORU_R30/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION", "ORU_R30/VISIT"],
  },
  "7:PV1": {
    groupsOpened: ["ORU_R30/VISIT"],
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION"],
  },
  "8:OBX": {
    groupsOpened: ["ORU_R30/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION", "ORU_R30/VISIT"],
  },
  "8:PV1": {
    groupsOpened: ["ORU_R30/VISIT"],
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION"],
  },
  "9:OBX": {
    groupsOpened: ["ORU_R30/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION", "ORU_R30/VISIT"],
  },
  "9:PV1": {
    groupsOpened: ["ORU_R30/VISIT"],
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
