// Generated profile automaton for ORU_R30 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([16, 20, 21]);
export const alphabet = new Set<string>([
  "ARV",
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
      ["ARV", 8],
      ["OBX", 7],
      ["ORC", 5],
      ["PD1", 10],
      ["PRT", 9],
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
  [
    5,
    new Map([
      ["OBR", 11],
      ["PRT", 12],
    ]),
  ],
  [
    6,
    new Map([
      ["ORC", 5],
      ["PRT", 13],
      ["PV2", 14],
    ]),
  ],
  [
    7,
    new Map([
      ["OBX", 7],
      ["ORC", 5],
      ["PRT", 15],
      ["PV1", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ARV", 8],
      ["OBX", 7],
      ["ORC", 5],
      ["PV1", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["ARV", 8],
      ["OBX", 7],
      ["ORC", 5],
      ["PRT", 9],
      ["PV1", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["ARV", 8],
      ["OBX", 7],
      ["ORC", 5],
      ["PRT", 9],
      ["PV1", 6],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 19],
      ["OBX", 16],
      ["PRT", 18],
      ["TQ1", 17],
    ]),
  ],
  [
    12,
    new Map([
      ["OBR", 11],
      ["PRT", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["ORC", 5],
      ["PRT", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["ORC", 5],
      ["PRT", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["OBX", 7],
      ["ORC", 5],
      ["PRT", 15],
      ["PV1", 6],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 20],
      ["OBX", 16],
      ["PRT", 21],
    ]),
  ],
  [
    17,
    new Map([
      ["OBX", 16],
      ["TQ1", 17],
      ["TQ2", 22],
    ]),
  ],
  [
    18,
    new Map([
      ["OBX", 16],
      ["PRT", 18],
      ["TQ1", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 19],
      ["OBX", 16],
      ["PRT", 18],
      ["TQ1", 17],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 20],
      ["OBX", 16],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 20],
      ["OBX", 16],
      ["PRT", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["OBX", 16],
      ["TQ1", 17],
      ["TQ2", 22],
    ]),
  ],
]);
export const effects = {
  "10:OBX": {
    groupsOpened: ["ORU_R30/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION", "ORU_R30/VISIT"],
  },
  "10:PV1": {
    groupsOpened: ["ORU_R30/VISIT"],
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION"],
  },
  "11:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: ["ORU_R30/TIMING_QTY"],
  },
  "11:TQ1": {
    groupsOpened: ["ORU_R30/TIMING_QTY"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/VISIT"],
  },
  "14:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/VISIT"],
  },
  "15:OBX": {
    groupsOpened: ["ORU_R30/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: [],
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION", "ORU_R30/VISIT"],
  },
  "15:PV1": {
    groupsOpened: ["ORU_R30/VISIT"],
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION"],
  },
  "16:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
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
    groupsClosed: ["ORU_R30/TIMING_QTY"],
  },
  "18:TQ1": {
    groupsOpened: ["ORU_R30/TIMING_QTY"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: ["ORU_R30/TIMING_QTY"],
  },
  "19:TQ1": {
    groupsOpened: ["ORU_R30/TIMING_QTY"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["ORU_R30/OBSERVATION"],
    groupsClosed: ["ORU_R30/TIMING_QTY"],
  },
  "22:TQ1": {
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
