// Generated profile automaton for OPR_O38 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 19, 20,
]);
export const alphabet = new Set<string>([
  "ARV",
  "ERR",
  "MSA",
  "MSH",
  "NK1",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PID",
  "PRT",
  "SAC",
  "SFT",
  "SPM",
  "TQ1",
  "TQ2",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 7],
      ["NK1", 3],
      ["NTE", 4],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["ARV", 9],
      ["NK1", 3],
      ["PID", 11],
      ["PRT", 10],
      ["SPM", 8],
    ]),
  ],
  [
    4,
    new Map([
      ["NK1", 3],
      ["NTE", 4],
    ]),
  ],
  [
    5,
    new Map([
      ["NK1", 3],
      ["NTE", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NK1", 3],
      ["NTE", 4],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["ERR", 7],
      ["NK1", 3],
      ["NTE", 4],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["NK1", 3],
      ["OBX", 15],
      ["ORC", 13],
      ["SAC", 14],
      ["SPM", 8],
      ["TQ1", 12],
    ]),
  ],
  [
    9,
    new Map([
      ["ARV", 9],
      ["NK1", 3],
      ["SPM", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["ARV", 9],
      ["NK1", 3],
      ["PRT", 10],
      ["SPM", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["ARV", 9],
      ["NK1", 3],
      ["PRT", 10],
      ["SPM", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["NK1", 3],
      ["SPM", 8],
      ["TQ1", 12],
      ["TQ2", 16],
    ]),
  ],
  [
    13,
    new Map([
      ["OBR", 17],
      ["PRT", 18],
    ]),
  ],
  [
    14,
    new Map([
      ["NK1", 3],
      ["ORC", 13],
      ["SAC", 14],
      ["SPM", 8],
      ["TQ1", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["NK1", 3],
      ["OBX", 15],
      ["ORC", 13],
      ["PRT", 19],
      ["SAC", 14],
      ["SPM", 8],
      ["TQ1", 12],
    ]),
  ],
  [
    16,
    new Map([
      ["NK1", 3],
      ["SPM", 8],
      ["TQ1", 12],
      ["TQ2", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["NK1", 3],
      ["ORC", 13],
      ["PRT", 20],
      ["SPM", 8],
      ["TQ1", 12],
    ]),
  ],
  [
    18,
    new Map([
      ["OBR", 17],
      ["PRT", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["NK1", 3],
      ["OBX", 15],
      ["ORC", 13],
      ["PRT", 19],
      ["SAC", 14],
      ["SPM", 8],
      ["TQ1", 12],
    ]),
  ],
  [
    20,
    new Map([
      ["NK1", 3],
      ["ORC", 13],
      ["PRT", 20],
      ["SPM", 8],
      ["TQ1", 12],
    ]),
  ],
]);
export const effects = {
  "10:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "10:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "11:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "12:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "12:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: [],
  },
  "14:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "14:ORC": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "14:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "14:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "15:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "15:OBX": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "15:SAC": {
    groupsOpened: [],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "15:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "16:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "16:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "16:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: [],
  },
  "17:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "17:ORC": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "17:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "17:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "19:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "19:OBX": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "19:SAC": {
    groupsOpened: [],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "19:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "19:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "20:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "20:ORC": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "20:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "20:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "2:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE", "OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "4:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE", "OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "5:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE", "OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "6:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE", "OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "7:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE", "OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "8:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "8:OBX": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "8:SAC": {
    groupsOpened: [],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "8:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "8:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "9:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "9:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
