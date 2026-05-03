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
  "10:CTI": {
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "10:DSC": {
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "11:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "11:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "11:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "11:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "12:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "12:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "12:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "12:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "13:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "13:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "13:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "13:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "14:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "14:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "14:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "14:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "15:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "15:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "15:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "15:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "15:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "16:NK1": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "16:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "17:NK1": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "17:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
  },
  "18:NK1": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "18:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "18:PV1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
  },
  "19:NK1": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "19:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "19:PV1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
  },
  "1:NK1": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: [],
  },
  "1:OBR": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT"],
  },
  "20:CTI": {
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "20:DSC": {
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "20:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "21:CTI": {
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "21:DSC": {
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "22:CTI": {
    groupsClosed: ["OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "22:DSC": {
    groupsClosed: ["OUL_R24/ORDER", "OUL_R24/ORDER/RESULT"],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "23:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "23:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "23:NTE": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "23:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "23:SID": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "23:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "23:TCD": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "24:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "24:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "24:OBR": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "24:OBX": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "24:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "24:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "25:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "25:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "25:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "25:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "25:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "25:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "26:NK1": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "26:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "27:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "27:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: [],
  },
  "27:OBR": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "27:OBX": {
    groupsClosed: [
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/SPECIMEN/CONTAINER",
    ],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "27:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN/CONTAINER"],
  },
  "27:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "2:CTI": {
    groupsClosed: [
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "2:DSC": {
    groupsClosed: [
      "OUL_R24/ORDER",
      "OUL_R24/ORDER/RESULT",
      "OUL_R24/ORDER/SPECIMEN",
      "OUL_R24/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "2:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "2:OBX": {
    groupsClosed: ["OUL_R24/ORDER/SPECIMEN", "OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/RESULT"],
  },
  "2:SPM": {
    groupsClosed: ["OUL_R24/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R24/ORDER/SPECIMEN"],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER/TIMING_QTY"],
  },
  "3:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "4:NK1": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "4:OBR": {
    groupsClosed: ["OUL_R24/PATIENT", "OUL_R24/PATIENT/VISIT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "4:PV1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT/VISIT"],
  },
  "5:NK1": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: [],
  },
  "5:OBR": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT"],
  },
  "6:NK1": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: [],
  },
  "6:OBR": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT"],
  },
  "7:NK1": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: [],
  },
  "7:OBR": {
    groupsClosed: ["OUL_R24/PATIENT"],
    groupsOpened: ["OUL_R24/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/PATIENT"],
  },
  "9:DSC": {
    groupsClosed: ["OUL_R24/ORDER"],
    groupsOpened: [],
  },
  "9:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R24/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
