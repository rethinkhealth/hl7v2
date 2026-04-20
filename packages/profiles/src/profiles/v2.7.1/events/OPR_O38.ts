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
  "8:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
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
  "8:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
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
  "8:OBX": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "9:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "9:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "10:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "10:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "11:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: [],
  },
  "11:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "11:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "13:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "13:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "13:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "13:ORC": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "14:OBX": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "14:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "14:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "14:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "14:ORC": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "14:SAC": {
    groupsOpened: [],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "15:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: [],
  },
  "15:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "15:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "16:ORC": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "16:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "16:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "16:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "17:OBX": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "17:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "17:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "17:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
    ],
  },
  "17:ORC": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "17:SAC": {
    groupsOpened: [],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "18:ORC": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "18:SPM": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "18:NK1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
  },
  "18:TQ1": {
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
