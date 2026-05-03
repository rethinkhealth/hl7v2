// Generated profile automaton for OPU_R25 (v2.8.2)

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
  "14:NTE": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
    groupsOpened: [],
  },
  "14:OBX": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
  },
  "14:TQ1": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
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
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
  },
  "20:SPM": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "21:NK1": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "21:SPM": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
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
  "24:NTE": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
    groupsOpened: [],
  },
  "24:OBX": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "24:TQ1": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "25:NTE": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
    groupsOpened: [],
  },
  "25:OBX": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "25:ORC": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
  },
  "25:TQ1": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "26:OBR": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "26:SAC": {
    groupsClosed: [],
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
  "28:OBR": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "28:SAC": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/CONTAINER"],
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
  "30:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION"],
  },
  "30:SPM": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/PATIENT",
      "OPU_R25/ACCESSION_DETAIL/PATIENT/PATIENT_OBSERVATION",
    ],
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
  "32:NK1": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL"],
  },
  "32:OBR": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER"],
  },
  "32:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "32:SPM": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN"],
  },
  "33:OBX": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "33:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "34:NTE": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
    groupsOpened: [],
  },
  "34:OBX": {
    groupsClosed: [
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER",
      "OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/RESULT"],
  },
  "34:TQ1": {
    groupsClosed: ["OPU_R25/ACCESSION_DETAIL/SPECIMEN/ORDER/COMMON_ORDER"],
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
