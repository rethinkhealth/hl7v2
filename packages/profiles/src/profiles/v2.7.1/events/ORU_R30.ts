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
    groupsClosed: ["ORU_R30/TIMING_QTY"],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/TIMING_QTY"],
  },
  "11:ORC": {
    groupsClosed: ["ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "12:ORC": {
    groupsClosed: ["ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/PATIENT_OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION", "ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "13:PV1": {
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION"],
    groupsOpened: ["ORU_R30/VISIT"],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "15:OBX": {
    groupsClosed: ["ORU_R30/TIMING_QTY"],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/TIMING_QTY"],
  },
  "16:OBX": {
    groupsClosed: ["ORU_R30/TIMING_QTY"],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/TIMING_QTY"],
  },
  "17:OBX": {
    groupsClosed: ["ORU_R30/TIMING_QTY"],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/TIMING_QTY"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "20:OBX": {
    groupsClosed: ["ORU_R30/TIMING_QTY"],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/TIMING_QTY"],
  },
  "2:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/PATIENT_OBSERVATION"],
  },
  "2:ORC": {
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION", "ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "2:PV1": {
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION"],
    groupsOpened: ["ORU_R30/VISIT"],
  },
  "6:ORC": {
    groupsClosed: ["ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/PATIENT_OBSERVATION"],
  },
  "7:ORC": {
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION", "ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "7:PV1": {
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION"],
    groupsOpened: ["ORU_R30/VISIT"],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/PATIENT_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION", "ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "8:PV1": {
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION"],
    groupsOpened: ["ORU_R30/VISIT"],
  },
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/PATIENT_OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION", "ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "9:PV1": {
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION"],
    groupsOpened: ["ORU_R30/VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
