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
  "2:NK1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
    groupsClosed: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
  },
  "2:OBX": {
    groupsOpened: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
    groupsClosed: [],
  },
  "6:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT"],
    groupsClosed: [],
  },
  "7:OBX": {
    groupsOpened: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
    groupsClosed: [],
  },
  "7:NK1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
    groupsClosed: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
  },
  "8:NK1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
    groupsClosed: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
  },
  "8:OBX": {
    groupsOpened: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
    groupsClosed: [],
  },
  "9:NK1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
    groupsClosed: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
  },
  "9:OBX": {
    groupsOpened: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "10:SAC": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "10:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "11:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
  },
  "11:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
    groupsClosed: [],
  },
  "12:NK1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
    groupsClosed: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
  },
  "13:OBX": {
    groupsOpened: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
    groupsClosed: [],
  },
  "13:NK1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
    groupsClosed: ["OPU_R25/PATIENT_VISIT_OBSERVATION"],
  },
  "14:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "14:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "15:SAC": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
  },
  "16:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "16:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "16:SAC": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
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
  "18:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
  },
  "18:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "19:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
  },
  "19:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "20:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "20:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "20:NK1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT",
    ],
  },
  "21:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "22:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "22:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "23:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "23:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "24:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "25:SAC": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "25:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
  },
  "26:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "26:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "26:SAC": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "27:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "27:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "27:SAC": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "28:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "28:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
  },
  "29:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "29:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
  },
  "30:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "30:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "30:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "30:NK1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT",
    ],
  },
  "31:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "31:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "31:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "31:NK1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT",
    ],
  },
  "32:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "32:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
