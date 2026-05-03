// Generated profile automaton for OUL_R22 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  7, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23,
]);
export const alphabet = new Set<string>([
  "CTI",
  "DSC",
  "INV",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "SAC",
  "SFT",
  "SID",
  "SPM",
  "TCD",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 5],
      ["PID", 4],
      ["PV1", 3],
      ["SFT", 6],
      ["SPM", 2],
    ]),
  ],
  [
    2,
    new Map([
      ["OBR", 7],
      ["OBX", 9],
      ["SAC", 8],
    ]),
  ],
  [
    3,
    new Map([
      ["PV2", 10],
      ["SPM", 2],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 11],
      ["PD1", 12],
      ["PV1", 3],
      ["SPM", 2],
    ]),
  ],
  [
    5,
    new Map([
      ["PID", 4],
      ["PV1", 3],
      ["SPM", 2],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 5],
      ["PID", 4],
      ["PV1", 3],
      ["SFT", 6],
      ["SPM", 2],
    ]),
  ],
  [
    7,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["NTE", 17],
      ["OBR", 7],
      ["OBX", 15],
      ["ORC", 18],
      ["SPM", 2],
      ["TQ1", 16],
    ]),
  ],
  [
    8,
    new Map([
      ["INV", 19],
      ["OBR", 7],
      ["SAC", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["OBR", 7],
      ["OBX", 9],
      ["SAC", 8],
    ]),
  ],
  [10, new Map([["SPM", 2]])],
  [
    11,
    new Map([
      ["NTE", 11],
      ["PV1", 3],
      ["SPM", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 11],
      ["PV1", 3],
      ["SPM", 2],
    ]),
  ],
  [13, new Map([])],
  [
    14,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["OBR", 7],
      ["SPM", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["NTE", 20],
      ["OBR", 7],
      ["OBX", 15],
      ["SID", 21],
      ["SPM", 2],
      ["TCD", 22],
    ]),
  ],
  [
    16,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["OBR", 7],
      ["OBX", 15],
      ["SPM", 2],
      ["TQ1", 16],
      ["TQ2", 23],
    ]),
  ],
  [
    17,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["NTE", 17],
      ["OBR", 7],
      ["OBX", 15],
      ["SPM", 2],
      ["TQ1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["NTE", 17],
      ["OBR", 7],
      ["OBX", 15],
      ["SPM", 2],
      ["TQ1", 16],
    ]),
  ],
  [
    19,
    new Map([
      ["OBR", 7],
      ["SAC", 8],
    ]),
  ],
  [
    20,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["NTE", 20],
      ["OBR", 7],
      ["OBX", 15],
      ["SPM", 2],
    ]),
  ],
  [
    21,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["NTE", 20],
      ["OBR", 7],
      ["OBX", 15],
      ["SID", 21],
      ["SPM", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["NTE", 20],
      ["OBR", 7],
      ["OBX", 15],
      ["SID", 21],
      ["SPM", 2],
    ]),
  ],
  [
    23,
    new Map([
      ["CTI", 14],
      ["DSC", 13],
      ["OBR", 7],
      ["OBX", 15],
      ["SPM", 2],
      ["TQ1", 16],
      ["TQ2", 23],
    ]),
  ],
]);
export const effects = {
  "10:SPM": {
    groupsClosed: ["OUL_R22/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "11:PV1": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: ["OUL_R22/VISIT"],
  },
  "11:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "12:PV1": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: ["OUL_R22/VISIT"],
  },
  "12:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "14:DSC": {
    groupsClosed: ["OUL_R22/SPECIMEN", "OUL_R22/SPECIMEN/ORDER"],
    groupsOpened: [],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "14:SPM": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "15:CTI": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
    groupsOpened: [],
  },
  "15:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
    ],
    groupsOpened: [],
  },
  "15:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
  },
  "15:SPM": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "16:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "16:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "16:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "16:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
  },
  "16:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "17:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "17:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "17:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "17:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
  },
  "17:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "18:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "18:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
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
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
  },
  "18:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "19:OBR": {
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "19:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT"],
  },
  "1:PV1": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: ["OUL_R22/VISIT"],
  },
  "1:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "20:CTI": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
    groupsOpened: [],
  },
  "20:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
    ],
    groupsOpened: [],
  },
  "20:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "20:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
  },
  "20:SPM": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "21:CTI": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
    groupsOpened: [],
  },
  "21:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
    ],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "21:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
  },
  "21:SPM": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "22:CTI": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
    groupsOpened: [],
  },
  "22:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
    ],
    groupsOpened: [],
  },
  "22:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
  },
  "22:SPM": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "23:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "23:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "23:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "23:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
  },
  "23:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "23:TQ1": {
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
    groupsClosed: ["OUL_R22/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "4:PV1": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: ["OUL_R22/VISIT"],
  },
  "4:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT"],
  },
  "5:PV1": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: ["OUL_R22/VISIT"],
  },
  "5:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/PATIENT"],
  },
  "6:PV1": {
    groupsClosed: ["OUL_R22/PATIENT"],
    groupsOpened: ["OUL_R22/VISIT"],
  },
  "6:SPM": {
    groupsClosed: ["OUL_R22/PATIENT", "OUL_R22/VISIT"],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "7:CTI": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "7:DSC": {
    groupsClosed: [
      "OUL_R22/SPECIMEN",
      "OUL_R22/SPECIMEN/ORDER",
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "7:OBR": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "7:OBX": {
    groupsClosed: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP"],
  },
  "7:SPM": {
    groupsClosed: [
      "OUL_R22/SPECIMEN/ORDER/OBXTCDSIDNTE_SUPPGRP",
      "OUL_R22/SPECIMEN/ORDER/TIMING_QTY",
    ],
    groupsOpened: ["OUL_R22/SPECIMEN"],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER/TIMING_QTY"],
  },
  "8:OBR": {
    groupsClosed: ["OUL_R22/SPECIMEN/CONTAINER"],
    groupsOpened: ["OUL_R22/SPECIMEN/ORDER"],
  },
  "8:SAC": {
    groupsClosed: [],
    groupsOpened: ["OUL_R22/SPECIMEN/CONTAINER"],
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
