// Generated profile automaton for ORL_O34 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  2, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]);
export const alphabet = new Set<string>([
  "ARV",
  "ERR",
  "MSA",
  "MSH",
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
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["ARV", 9],
      ["PRT", 10],
      ["SPM", 8],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 4],
      ["PID", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 4],
      ["PID", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["ERR", 7],
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["OBX", 13],
      ["ORC", 11],
      ["SAC", 12],
      ["SPM", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["ARV", 9],
      ["SPM", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["ARV", 9],
      ["PRT", 10],
      ["SPM", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["OBR", 14],
      ["ORC", 11],
      ["PRT", 16],
      ["SPM", 8],
      ["TQ1", 15],
    ]),
  ],
  [
    12,
    new Map([
      ["ORC", 11],
      ["SAC", 12],
      ["SPM", 8],
    ]),
  ],
  [
    13,
    new Map([
      ["OBX", 13],
      ["ORC", 11],
      ["PRT", 17],
      ["SAC", 12],
      ["SPM", 8],
    ]),
  ],
  [
    14,
    new Map([
      ["ORC", 11],
      ["PRT", 18],
      ["SPM", 8],
    ]),
  ],
  [
    15,
    new Map([
      ["OBR", 14],
      ["ORC", 11],
      ["SPM", 8],
      ["TQ1", 15],
      ["TQ2", 19],
    ]),
  ],
  [
    16,
    new Map([
      ["OBR", 14],
      ["ORC", 11],
      ["PRT", 16],
      ["SPM", 8],
      ["TQ1", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["OBX", 13],
      ["ORC", 11],
      ["PRT", 17],
      ["SAC", 12],
      ["SPM", 8],
    ]),
  ],
  [
    18,
    new Map([
      ["ORC", 11],
      ["PRT", 18],
      ["SPM", 8],
    ]),
  ],
  [
    19,
    new Map([
      ["OBR", 14],
      ["ORC", 11],
      ["SPM", 8],
      ["TQ1", 15],
      ["TQ2", 19],
    ]),
  ],
]);
export const effects = {
  "10:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "11:OBR": {
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "11:SPM": {
    groupsClosed: [
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "12:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "13:ORC": {
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "13:SAC": {
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "13:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "14:SPM": {
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "15:OBR": {
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "15:SPM": {
    groupsClosed: [
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "16:OBR": {
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "16:SPM": {
    groupsClosed: [
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "17:SAC": {
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "17:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "18:SPM": {
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "19:OBR": {
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "19:SPM": {
    groupsClosed: [
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE"],
  },
  "3:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE"],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "8:ORC": {
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "8:SAC": {
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "8:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "9:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
