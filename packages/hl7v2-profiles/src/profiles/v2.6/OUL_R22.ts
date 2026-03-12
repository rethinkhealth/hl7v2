// Generated profile automaton for OUL_R22 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  8, 15, 16, 17, 18, 19, 20, 21, 24, 25, 26, 27,
]);
export const alphabet = new Set<string>([
  "CTI",
  "DSC",
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
  "SID",
  "SPM",
  "TCD",
  "TQ1",
  "TQ2",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NK1", 3],
      ["NTE", 5],
      ["PID", 4],
      ["SFT", 7],
      ["SPM", 2],
      ["UAC", 6],
    ]),
  ],
  [
    2,
    new Map([
      ["OBR", 8],
      ["OBX", 10],
      ["SAC", 9],
    ]),
  ],
  [
    3,
    new Map([
      ["NK1", 3],
      ["SPM", 2],
    ]),
  ],
  [
    4,
    new Map([
      ["NK1", 3],
      ["NTE", 13],
      ["OBX", 12],
      ["PD1", 14],
      ["PV1", 11],
      ["SPM", 2],
    ]),
  ],
  [
    5,
    new Map([
      ["NK1", 3],
      ["PID", 4],
      ["SPM", 2],
    ]),
  ],
  [
    6,
    new Map([
      ["NK1", 3],
      ["NTE", 5],
      ["PID", 4],
      ["SPM", 2],
    ]),
  ],
  [
    7,
    new Map([
      ["NK1", 3],
      ["NTE", 5],
      ["PID", 4],
      ["SFT", 7],
      ["SPM", 2],
      ["UAC", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["CTI", 16],
      ["DSC", 15],
      ["NTE", 20],
      ["OBR", 8],
      ["OBX", 17],
      ["ORC", 21],
      ["ROL", 19],
      ["SPM", 2],
      ["TQ1", 18],
    ]),
  ],
  [
    9,
    new Map([
      ["INV", 22],
      ["OBR", 8],
      ["SAC", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["OBR", 8],
      ["OBX", 10],
      ["SAC", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["NK1", 3],
      ["PV2", 23],
      ["SPM", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["NK1", 3],
      ["OBX", 12],
      ["PV1", 11],
      ["SPM", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["NK1", 3],
      ["NTE", 13],
      ["OBX", 12],
      ["PV1", 11],
      ["SPM", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["NK1", 3],
      ["NTE", 13],
      ["OBX", 12],
      ["PV1", 11],
      ["SPM", 2],
    ]),
  ],
  [15, new Map([])],
  [
    16,
    new Map([
      ["CTI", 16],
      ["DSC", 15],
      ["OBR", 8],
      ["SPM", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["CTI", 16],
      ["DSC", 15],
      ["NTE", 24],
      ["OBR", 8],
      ["OBX", 17],
      ["SID", 25],
      ["SPM", 2],
      ["TCD", 26],
    ]),
  ],
  [
    18,
    new Map([
      ["CTI", 16],
      ["DSC", 15],
      ["OBR", 8],
      ["OBX", 17],
      ["SPM", 2],
      ["TQ1", 18],
      ["TQ2", 27],
    ]),
  ],
  [
    19,
    new Map([
      ["CTI", 16],
      ["DSC", 15],
      ["OBR", 8],
      ["OBX", 17],
      ["ROL", 19],
      ["SPM", 2],
      ["TQ1", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["CTI", 16],
      ["DSC", 15],
      ["NTE", 20],
      ["OBR", 8],
      ["OBX", 17],
      ["ROL", 19],
      ["SPM", 2],
      ["TQ1", 18],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 16],
      ["DSC", 15],
      ["NTE", 20],
      ["OBR", 8],
      ["OBX", 17],
      ["ROL", 19],
      ["SPM", 2],
      ["TQ1", 18],
    ]),
  ],
  [
    22,
    new Map([
      ["OBR", 8],
      ["SAC", 9],
    ]),
  ],
  [
    23,
    new Map([
      ["NK1", 3],
      ["SPM", 2],
    ]),
  ],
  [
    24,
    new Map([
      ["CTI", 16],
      ["DSC", 15],
      ["NTE", 24],
      ["OBR", 8],
      ["OBX", 17],
      ["SPM", 2],
    ]),
  ],
  [
    25,
    new Map([
      ["CTI", 16],
      ["DSC", 15],
      ["NTE", 24],
      ["OBR", 8],
      ["OBX", 17],
      ["SID", 25],
      ["SPM", 2],
    ]),
  ],
  [
    26,
    new Map([
      ["CTI", 16],
      ["DSC", 15],
      ["NTE", 24],
      ["OBR", 8],
      ["OBX", 17],
      ["SID", 25],
      ["SPM", 2],
    ]),
  ],
  [
    27,
    new Map([
      ["CTI", 16],
      ["DSC", 15],
      ["OBR", 8],
      ["OBX", 17],
      ["SPM", 2],
      ["TQ1", 18],
      ["TQ2", 27],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "10:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "11:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "11:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "12:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "12:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "12:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "13:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "13:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "14:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "14:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "14:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN", "OUL_R22/SPECIMEN/ORDER"],
  },
  "16:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "16:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [],
  },
  "17:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "17:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "17:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "18:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "18:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "18:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "18:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "19:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "19:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "19:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "19:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "1:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OUL_R22/PATIENT"],
    groupsClosed: [],
  },
  "1:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "20:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "20:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "20:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "20:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "21:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "21:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "21:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "21:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "21:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "22:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "22:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "23:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "23:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "24:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "24:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "24:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "24:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "25:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "25:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "25:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "25:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "26:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "26:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
  },
  "26:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "26:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: [],
  },
  "26:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "27:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "27:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "27:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "27:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "27:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "2:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "2:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "3:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [],
  },
  "4:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "4:PV1": {
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "4:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
  },
  "5:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OUL_R22/PATIENT"],
    groupsClosed: [],
  },
  "5:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "6:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OUL_R22/PATIENT"],
    groupsClosed: [],
  },
  "6:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "7:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["OUL_R22/PATIENT"],
    groupsClosed: [],
  },
  "7:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: ["OUL_R22/PATIENT"],
  },
  "8:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "8:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "8:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "8:OBX": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "8:SPM": {
    groupsOpened: ["OUL_R22/SPECIMEN"],
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
  },
  "8:TQ1": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "9:SAC": {
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
