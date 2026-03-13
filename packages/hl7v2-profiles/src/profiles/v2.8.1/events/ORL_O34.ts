// Generated profile automaton for ORL_O34 (v2.8.1)

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
  "2:PID": {
    groupsOpened: ["ORL_O34/RESPONSE"],
    groupsClosed: [],
  },
  "3:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["ORL_O34/RESPONSE"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["ORL_O34/RESPONSE"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["ORL_O34/RESPONSE"],
    groupsClosed: [],
  },
  "7:PID": {
    groupsOpened: ["ORL_O34/RESPONSE"],
    groupsClosed: [],
  },
  "8:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "8:SAC": {
    groupsOpened: [],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "8:OBX": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "9:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "10:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "11:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
  },
  "11:OBR": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "11:TQ1": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "13:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "13:SAC": {
    groupsOpened: [],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "14:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "14:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "15:TQ1": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "15:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
  },
  "15:OBR": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "16:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "16:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
  },
  "16:OBR": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "16:TQ1": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "17:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "17:SAC": {
    groupsOpened: [],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "18:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "18:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "19:TQ1": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "19:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
  },
  "19:OBR": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
