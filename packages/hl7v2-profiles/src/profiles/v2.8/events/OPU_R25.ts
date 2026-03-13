// Generated profile automaton for OPU_R25 (v2.8)

export const start = 0;
export const finals = new Set<number>([21, 31, 32]);
export const alphabet = new Set<string>([
  "ARV",
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
      ["ARV", 18],
      ["OBX", 17],
      ["PD1", 20],
      ["PRT", 19],
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
      ["OBX", 21],
      ["ORC", 24],
      ["PRT", 25],
      ["TQ1", 22],
    ]),
  ],
  [
    15,
    new Map([
      ["INV", 26],
      ["OBR", 14],
      ["SAC", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 27],
      ["OBR", 14],
      ["OBX", 16],
      ["PRT", 28],
      ["SAC", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 29],
      ["OBX", 17],
      ["PRT", 30],
      ["SPM", 10],
    ]),
  ],
  [
    18,
    new Map([
      ["ARV", 18],
      ["OBX", 17],
      ["SPM", 10],
    ]),
  ],
  [
    19,
    new Map([
      ["ARV", 18],
      ["OBX", 17],
      ["PRT", 19],
      ["SPM", 10],
    ]),
  ],
  [
    20,
    new Map([
      ["ARV", 18],
      ["OBX", 17],
      ["PRT", 19],
      ["SPM", 10],
    ]),
  ],
  [
    21,
    new Map([
      ["NK1", 6],
      ["NTE", 31],
      ["OBR", 14],
      ["OBX", 21],
      ["PRT", 32],
      ["SPM", 10],
    ]),
  ],
  [
    22,
    new Map([
      ["OBX", 21],
      ["TQ1", 22],
      ["TQ2", 33],
    ]),
  ],
  [
    23,
    new Map([
      ["NTE", 23],
      ["OBX", 21],
      ["TQ1", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["NTE", 23],
      ["OBX", 21],
      ["PRT", 34],
      ["TQ1", 22],
    ]),
  ],
  [
    25,
    new Map([
      ["NTE", 23],
      ["OBX", 21],
      ["ORC", 24],
      ["PRT", 25],
      ["TQ1", 22],
    ]),
  ],
  [
    26,
    new Map([
      ["OBR", 14],
      ["SAC", 15],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 27],
      ["OBR", 14],
      ["OBX", 16],
      ["SAC", 15],
    ]),
  ],
  [
    28,
    new Map([
      ["NTE", 27],
      ["OBR", 14],
      ["OBX", 16],
      ["PRT", 28],
      ["SAC", 15],
    ]),
  ],
  [
    29,
    new Map([
      ["NTE", 29],
      ["OBX", 17],
      ["SPM", 10],
    ]),
  ],
  [
    30,
    new Map([
      ["NTE", 29],
      ["OBX", 17],
      ["PRT", 30],
      ["SPM", 10],
    ]),
  ],
  [
    31,
    new Map([
      ["NK1", 6],
      ["NTE", 31],
      ["OBR", 14],
      ["OBX", 21],
      ["SPM", 10],
    ]),
  ],
  [
    32,
    new Map([
      ["NK1", 6],
      ["NTE", 31],
      ["OBR", 14],
      ["OBX", 21],
      ["PRT", 32],
      ["SPM", 10],
    ]),
  ],
  [
    33,
    new Map([
      ["OBX", 21],
      ["TQ1", 22],
      ["TQ2", 33],
    ]),
  ],
  [
    34,
    new Map([
      ["NTE", 23],
      ["OBX", 21],
      ["PRT", 34],
      ["TQ1", 22],
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
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "14:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
  },
  "14:NTE": {
    groupsOpened: [],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
  },
  "14:ORC": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
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
  "20:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
  },
  "20:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "21:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "21:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "21:NK1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT",
    ],
  },
  "22:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
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
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "24:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
  },
  "24:NTE": {
    groupsOpened: [],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
  },
  "25:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "25:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
  },
  "25:NTE": {
    groupsOpened: [],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
  },
  "25:ORC": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
    groupsClosed: [],
  },
  "26:SAC": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "26:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
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
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "28:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "28:SAC": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
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
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
    groupsClosed: [],
  },
  "30:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
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
  "32:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "32:OBR": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "32:SPM": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "32:NK1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT",
    ],
  },
  "33:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "33:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "34:OBX": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "34:TQ1": {
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
  },
  "34:NTE": {
    groupsOpened: [],
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
