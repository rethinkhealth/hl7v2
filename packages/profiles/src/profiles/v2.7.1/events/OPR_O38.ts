// Generated profile automaton for OPR_O38 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18,
]);
export const alphabet = new Set<string>([
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
      ["NK1", 3],
      ["PID", 10],
      ["PRT", 9],
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
      ["OBX", 14],
      ["ORC", 12],
      ["SAC", 13],
      ["SPM", 8],
      ["TQ1", 11],
    ]),
  ],
  [
    9,
    new Map([
      ["NK1", 3],
      ["PRT", 9],
      ["SPM", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["NK1", 3],
      ["PRT", 9],
      ["SPM", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["NK1", 3],
      ["SPM", 8],
      ["TQ1", 11],
      ["TQ2", 15],
    ]),
  ],
  [12, new Map([["OBR", 16]])],
  [
    13,
    new Map([
      ["NK1", 3],
      ["ORC", 12],
      ["SAC", 13],
      ["SPM", 8],
      ["TQ1", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["NK1", 3],
      ["OBX", 14],
      ["ORC", 12],
      ["PRT", 17],
      ["SAC", 13],
      ["SPM", 8],
      ["TQ1", 11],
    ]),
  ],
  [
    15,
    new Map([
      ["NK1", 3],
      ["SPM", 8],
      ["TQ1", 11],
      ["TQ2", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["NK1", 3],
      ["ORC", 12],
      ["PRT", 18],
      ["SPM", 8],
      ["TQ1", 11],
    ]),
  ],
  [
    17,
    new Map([
      ["NK1", 3],
      ["OBX", 14],
      ["ORC", 12],
      ["PRT", 17],
      ["SAC", 13],
      ["SPM", 8],
      ["TQ1", 11],
    ]),
  ],
  [
    18,
    new Map([
      ["NK1", 3],
      ["ORC", 12],
      ["PRT", 18],
      ["SPM", 8],
      ["TQ1", 11],
    ]),
  ],
]);
export const effects = {
  "10:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "10:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
  "11:NK1": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "11:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "13:NK1": {
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "13:ORC": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "13:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
  "13:TQ1": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "14:NK1": {
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "14:ORC": {
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "14:SAC": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "14:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
  "14:TQ1": {
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "15:NK1": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "15:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "16:NK1": {
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "16:ORC": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "16:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
  "16:TQ1": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "17:NK1": {
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "17:SAC": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "17:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
  "17:TQ1": {
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "18:NK1": {
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "18:ORC": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "18:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
  "18:TQ1": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "2:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE", "OPR_O38/RESPONSE/ORDER"],
  },
  "3:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "3:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
  "4:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE", "OPR_O38/RESPONSE/ORDER"],
  },
  "5:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE", "OPR_O38/RESPONSE/ORDER"],
  },
  "6:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE", "OPR_O38/RESPONSE/ORDER"],
  },
  "7:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE", "OPR_O38/RESPONSE/ORDER"],
  },
  "8:NK1": {
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "8:SAC": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "8:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
  "8:TQ1": {
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "9:NK1": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "9:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
