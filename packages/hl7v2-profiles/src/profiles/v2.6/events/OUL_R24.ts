// Generated profile automaton for OUL_R24 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  2, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23, 24, 25, 27,
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
      ["OBR", 2],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    2,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 14],
      ["OBR", 2],
      ["OBX", 10],
      ["ORC", 15],
      ["ROL", 13],
      ["SPM", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    3,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
    ]),
  ],
  [
    4,
    new Map([
      ["NK1", 3],
      ["NTE", 18],
      ["OBR", 2],
      ["OBX", 17],
      ["PD1", 19],
      ["PV1", 16],
    ]),
  ],
  [
    5,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
      ["PID", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NK1", 3],
      ["NTE", 5],
      ["OBR", 2],
      ["PID", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["NK1", 3],
      ["NTE", 5],
      ["OBR", 2],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [8, new Map([])],
  [
    9,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 20],
      ["OBR", 2],
      ["OBX", 10],
      ["SID", 21],
      ["TCD", 22],
    ]),
  ],
  [
    11,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
      ["OBX", 23],
      ["SAC", 24],
      ["SPM", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
      ["OBX", 10],
      ["SPM", 11],
      ["TQ1", 12],
      ["TQ2", 25],
    ]),
  ],
  [
    13,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
      ["OBX", 10],
      ["ROL", 13],
      ["SPM", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 14],
      ["OBR", 2],
      ["OBX", 10],
      ["ROL", 13],
      ["SPM", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 14],
      ["OBR", 2],
      ["OBX", 10],
      ["ROL", 13],
      ["SPM", 11],
      ["TQ1", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
      ["PV2", 26],
    ]),
  ],
  [
    17,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
      ["OBX", 17],
      ["PV1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["NK1", 3],
      ["NTE", 18],
      ["OBR", 2],
      ["OBX", 17],
      ["PV1", 16],
    ]),
  ],
  [
    19,
    new Map([
      ["NK1", 3],
      ["NTE", 18],
      ["OBR", 2],
      ["OBX", 17],
      ["PV1", 16],
    ]),
  ],
  [
    20,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 20],
      ["OBR", 2],
      ["OBX", 10],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 20],
      ["OBR", 2],
      ["OBX", 10],
      ["SID", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 20],
      ["OBR", 2],
      ["OBX", 10],
      ["SID", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["NTE", 20],
      ["OBR", 2],
      ["OBX", 23],
      ["SAC", 24],
      ["SID", 21],
      ["SPM", 11],
      ["TCD", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["INV", 27],
      ["OBR", 2],
      ["OBX", 10],
      ["SAC", 24],
      ["SPM", 11],
    ]),
  ],
  [
    25,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
      ["OBX", 10],
      ["SPM", 11],
      ["TQ1", 12],
      ["TQ2", 25],
    ]),
  ],
  [
    26,
    new Map([
      ["NK1", 3],
      ["OBR", 2],
    ]),
  ],
  [
    27,
    new Map([
      ["CTI", 9],
      ["DSC", 8],
      ["OBR", 2],
      ["OBX", 10],
      ["SAC", 24],
      ["SPM", 11],
    ]),
  ],
]);
export const effects = {
  "1:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "1:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["OUL_R24/PATIENT"],
    groupsClosed: [],
  },
  "2:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "2:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "2:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "2:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "2:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "2:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "3:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "4:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "4:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "4:PV1": {
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "5:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "5:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["OUL_R24/PATIENT"],
    groupsClosed: [],
  },
  "6:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "6:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["OUL_R24/PATIENT"],
    groupsClosed: [],
  },
  "7:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "7:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["OUL_R24/PATIENT"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER"],
  },
  "10:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
  },
  "10:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
  },
  "11:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "11:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "11:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "11:SAC": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "12:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "12:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "12:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "13:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "13:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "13:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "13:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "13:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "14:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "14:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "14:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "14:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "14:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "15:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "15:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "15:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "15:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "16:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "16:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "17:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "17:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "17:PV1": {
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "18:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "18:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "18:PV1": {
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "19:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "19:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "19:PV1": {
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "20:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "20:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "20:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
  },
  "20:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
  },
  "21:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "21:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "21:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
  },
  "21:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
  },
  "22:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "22:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "22:DSC": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
  },
  "22:CTI": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
  },
  "23:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [],
  },
  "23:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "23:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "23:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "23:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "23:SAC": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "23:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "23:SID": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "23:TCD": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "24:SAC": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "24:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "24:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "24:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "24:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "24:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "25:TQ1": {
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsClosed: [],
  },
  "25:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: [],
  },
  "25:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "25:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
  },
  "25:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
  },
  "25:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "26:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "26:NK1": {
    groupsOpened: [],
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
  },
  "27:SAC": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsClosed: [],
  },
  "27:SPM": {
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "27:OBR": {
    groupsOpened: ["OUL_R24/ORDER"],
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "27:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "27:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
  "27:OBX": {
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
