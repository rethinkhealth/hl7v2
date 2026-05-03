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
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "10:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "11:NK1": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "11:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "12:NK1": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
  },
  "12:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "13:NK1": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
  },
  "13:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "14:NK1": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
  },
  "14:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "16:DSC": {
    groupsClosed: ["OUL_R22/SPECIMEN", "OUL_R22/SPECIMEN/ORDER"],
    groupsOpened: [],
  },
  "16:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "16:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "17:CTI": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: [],
  },
  "17:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "17:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "17:SPM": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "18:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "18:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "18:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "18:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "18:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "19:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "19:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "19:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "19:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "19:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "1:NK1": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: [],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT"],
  },
  "1:SPM": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "20:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "20:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "20:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "20:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "20:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "21:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "21:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "21:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "21:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "22:OBR": {
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "22:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "23:NK1": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "23:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "24:CTI": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: [],
  },
  "24:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "24:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "24:SPM": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "25:CTI": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: [],
  },
  "25:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "25:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "25:SPM": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "26:CTI": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: [],
  },
  "26:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
    ],
    groupsOpened: [],
  },
  "26:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "26:SPM": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "27:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "27:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "27:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "27:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "27:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "27:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "2:OBR": {
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "2:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "3:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "4:NK1": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "4:PV1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT/VISIT"],
  },
  "4:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/PATIENT/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "5:NK1": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: [],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT"],
  },
  "5:SPM": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "6:NK1": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: [],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT"],
  },
  "6:SPM": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "7:NK1": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: [],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT"],
  },
  "7:SPM": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "8:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "8:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "8:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "8:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/RESULT"],
  },
  "8:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/RESULT",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "9:OBR": {
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "9:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
