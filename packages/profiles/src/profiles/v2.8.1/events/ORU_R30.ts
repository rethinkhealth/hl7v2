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
    groupsClosed: [],
    groupsOpened: ["ORU_R30/PATIENT_OBSERVATION"],
  },
  "10:ORC": {
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION", "ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "10:PV1": {
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION"],
    groupsOpened: ["ORU_R30/VISIT"],
  },
  "11:OBX": {
    groupsClosed: ["ORU_R30/TIMING_QTY"],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/TIMING_QTY"],
  },
  "13:ORC": {
    groupsClosed: ["ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "14:ORC": {
    groupsClosed: ["ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/PATIENT_OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION", "ORU_R30/VISIT"],
    groupsOpened: [],
  },
  "15:PV1": {
    groupsClosed: ["ORU_R30/PATIENT_OBSERVATION"],
    groupsOpened: ["ORU_R30/VISIT"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/OBSERVATION"],
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
    groupsClosed: ["ORU_R30/TIMING_QTY"],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/TIMING_QTY"],
  },
  "19:OBX": {
    groupsClosed: ["ORU_R30/TIMING_QTY"],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/TIMING_QTY"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "22:OBX": {
    groupsClosed: ["ORU_R30/TIMING_QTY"],
    groupsOpened: ["ORU_R30/OBSERVATION"],
  },
  "22:TQ1": {
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
