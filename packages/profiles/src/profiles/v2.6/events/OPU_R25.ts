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
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT"],
  },
  "10:SPM": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/PATIENT"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "11:OBR": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "11:SAC": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
  },
  "12:SPM": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "13:OBX": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "14:OBR": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "14:SAC": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
  },
  "15:OBR": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "15:SAC": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
  },
  "16:SPM": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
  },
  "17:SPM": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "18:NK1": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
  },
  "18:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "18:SPM": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "19:OBX": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "20:OBX": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "21:OBX": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "22:OBX": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "23:OBR": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "23:SAC": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
  },
  "24:OBR": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "24:SAC": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
  },
  "25:SPM": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "26:NK1": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
  },
  "26:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "26:SPM": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "27:OBX": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "27:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "6:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
