// Generated profile automaton for OPU_R25 (v2.6)

export const start = 0;
export const finals = new Set<number>([18, 26]);
export const alphabet = new Set<string>([
  "INV",
  "MSH",
  "NK1",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "ROL",
  "SAC",
  "SFT",
  "SPM",
  "TQ1",
  "TQ2",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 3],
      ["PV1", 2],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    2,
    new Map([
      ["NTE", 7],
      ["OBX", 8],
      ["PV2", 9],
      ["ROL", 6],
    ]),
  ],
  [3, new Map([["PV1", 2]])],
  [
    4,
    new Map([
      ["NTE", 3],
      ["PV1", 2],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 3],
      ["PV1", 2],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NK1", 10],
      ["ROL", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 7],
      ["ROL", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 7],
      ["OBX", 8],
      ["ROL", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 7],
      ["OBX", 8],
      ["ROL", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["NK1", 10],
      ["PID", 12],
      ["SPM", 11],
    ]),
  ],
  [
    11,
    new Map([
      ["OBR", 13],
      ["OBX", 15],
      ["SAC", 14],
    ]),
  ],
  [
    12,
    new Map([
      ["OBX", 16],
      ["PD1", 17],
      ["SPM", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 21],
      ["OBX", 18],
      ["ORC", 22],
      ["ROL", 20],
      ["TQ1", 19],
    ]),
  ],
  [
    14,
    new Map([
      ["INV", 23],
      ["OBR", 13],
      ["SAC", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 24],
      ["OBR", 13],
      ["OBX", 15],
      ["SAC", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 25],
      ["OBX", 16],
      ["SPM", 11],
    ]),
  ],
  [
    17,
    new Map([
      ["OBX", 16],
      ["SPM", 11],
    ]),
  ],
  [
    18,
    new Map([
      ["NK1", 10],
      ["NTE", 26],
      ["OBR", 13],
      ["OBX", 18],
      ["SPM", 11],
    ]),
  ],
  [
    19,
    new Map([
      ["OBX", 18],
      ["TQ1", 19],
      ["TQ2", 27],
    ]),
  ],
  [
    20,
    new Map([
      ["OBX", 18],
      ["ROL", 20],
      ["TQ1", 19],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 21],
      ["OBX", 18],
      ["ROL", 20],
      ["TQ1", 19],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 21],
      ["OBX", 18],
      ["ROL", 20],
      ["TQ1", 19],
    ]),
  ],
  [
    23,
    new Map([
      ["OBR", 13],
      ["SAC", 14],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 24],
      ["OBR", 13],
      ["OBX", 15],
      ["SAC", 14],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 25],
      ["OBX", 16],
      ["SPM", 11],
    ]),
  ],
  [
    26,
    new Map([
      ["NK1", 10],
      ["NTE", 26],
      ["OBR", 13],
      ["OBX", 18],
      ["SPM", 11],
    ]),
  ],
  [
    27,
    new Map([
      ["OBX", 18],
      ["TQ1", 19],
      ["TQ2", 27],
    ]),
  ],
]);
export const effects = {
  "10:PID": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT"],
    groupsClosed: [],
  },
  "10:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/PATIENT"],
  },
  "11:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "11:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "11:SAC": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "12:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "12:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
  },
  "13:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "13:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "14:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
  },
  "14:SAC": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "15:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "15:SAC": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "16:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "16:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
  },
  "17:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "17:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
  },
  "18:NK1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT",
    ],
  },
  "18:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "18:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "19:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "19:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "20:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "21:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "22:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "23:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
  },
  "23:SAC": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "24:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "24:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "24:SAC": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "25:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "25:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
  },
  "26:NK1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT",
    ],
  },
  "26:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "26:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "26:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "27:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "27:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "6:NK1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
