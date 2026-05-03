// Generated profile automaton for OPU_R25 (v2.7)

export const start = 0;
export const finals = new Set<number>([20, 30, 31]);
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
  "PRT",
  "PV1",
  "PV2",
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
      ["NK1", 6],
      ["OBX", 7],
      ["PRT", 8],
      ["PV2", 9],
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
      ["NK1", 6],
      ["PID", 11],
      ["SPM", 10],
    ]),
  ],
  [
    7,
    new Map([
      ["NK1", 6],
      ["NTE", 13],
      ["OBX", 7],
      ["PRT", 12],
    ]),
  ],
  [
    8,
    new Map([
      ["NK1", 6],
      ["OBX", 7],
      ["PRT", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["NK1", 6],
      ["OBX", 7],
      ["PRT", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["OBR", 14],
      ["OBX", 16],
      ["SAC", 15],
    ]),
  ],
  [
    11,
    new Map([
      ["OBX", 17],
      ["PD1", 19],
      ["PRT", 18],
      ["SPM", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["NK1", 6],
      ["OBX", 7],
      ["PRT", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["NK1", 6],
      ["NTE", 13],
      ["OBX", 7],
      ["PRT", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 23],
      ["OBX", 20],
      ["ORC", 24],
      ["PRT", 22],
      ["TQ1", 21],
    ]),
  ],
  [
    15,
    new Map([
      ["INV", 25],
      ["OBR", 14],
      ["SAC", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 26],
      ["OBR", 14],
      ["OBX", 16],
      ["PRT", 27],
      ["SAC", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 28],
      ["OBX", 17],
      ["PRT", 29],
      ["SPM", 10],
    ]),
  ],
  [
    18,
    new Map([
      ["OBX", 17],
      ["PRT", 18],
      ["SPM", 10],
    ]),
  ],
  [
    19,
    new Map([
      ["OBX", 17],
      ["PRT", 18],
      ["SPM", 10],
    ]),
  ],
  [
    20,
    new Map([
      ["NK1", 6],
      ["NTE", 30],
      ["OBR", 14],
      ["OBX", 20],
      ["PRT", 31],
      ["SPM", 10],
    ]),
  ],
  [
    21,
    new Map([
      ["OBX", 20],
      ["TQ1", 21],
      ["TQ2", 32],
    ]),
  ],
  [
    22,
    new Map([
      ["OBX", 20],
      ["PRT", 22],
      ["TQ1", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["NTE", 23],
      ["OBX", 20],
      ["PRT", 22],
      ["TQ1", 21],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 23],
      ["OBX", 20],
      ["PRT", 22],
      ["TQ1", 21],
    ]),
  ],
  [
    25,
    new Map([
      ["OBR", 14],
      ["SAC", 15],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 26],
      ["OBR", 14],
      ["OBX", 16],
      ["SAC", 15],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 26],
      ["OBR", 14],
      ["OBX", 16],
      ["PRT", 27],
      ["SAC", 15],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 28],
      ["OBX", 17],
      ["SPM", 10],
    ]),
  ],
  [
    29,
    new Map([
      ["NTE", 28],
      ["OBX", 17],
      ["PRT", 29],
      ["SPM", 10],
    ]),
  ],
  [
    30,
    new Map([
      ["NK1", 6],
      ["NTE", 30],
      ["OBR", 14],
      ["OBX", 20],
      ["SPM", 10],
    ]),
  ],
  [
    31,
    new Map([
      ["NK1", 6],
      ["NTE", 30],
      ["OBR", 14],
      ["OBX", 20],
      ["PRT", 31],
      ["SPM", 10],
    ]),
  ],
  [
    32,
    new Map([
      ["OBX", 20],
      ["TQ1", 21],
      ["TQ2", 32],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "10:SAC": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
  },
  "11:SPM": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "12:NK1": {
    groupsClosed: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
  },
  "13:NK1": {
    groupsClosed: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
  },
  "14:OBX": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "15:OBR": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "15:SAC": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
  },
  "16:OBR": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "16:SAC": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
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
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
  },
  "18:SPM": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
  },
  "19:SPM": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "20:NK1": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
  },
  "20:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "20:SPM": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
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
  "23:OBX": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "23:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "24:OBX": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "24:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "25:OBR": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "25:SAC": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
  },
  "26:OBR": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "26:SAC": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
  },
  "27:OBR": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "27:SAC": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
  },
  "28:SPM": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "29:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
  },
  "29:SPM": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "2:NK1": {
    groupsClosed: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
  },
  "2:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
  },
  "30:NK1": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
  },
  "30:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "30:SPM": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "31:NK1": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
  },
  "31:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "31:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "31:SPM": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "32:OBX": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "32:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT"],
  },
  "6:SPM": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/PATIENT"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "7:NK1": {
    groupsClosed: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
  },
  "8:NK1": {
    groupsClosed: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
  },
  "9:NK1": {
    groupsClosed: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
  },
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
