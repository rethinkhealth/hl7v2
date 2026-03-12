// Generated profile automaton for ORL_O34 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18,
]);
export const alphabet = new Set<string>([
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
      ["PRT", 9],
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
      ["OBX", 12],
      ["ORC", 10],
      ["SAC", 11],
      ["SPM", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["PRT", 9],
      ["SPM", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["OBR", 13],
      ["ORC", 10],
      ["PRT", 15],
      ["SPM", 8],
      ["TQ1", 14],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 10],
      ["SAC", 11],
      ["SPM", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["OBX", 12],
      ["ORC", 10],
      ["PRT", 16],
      ["SAC", 11],
      ["SPM", 8],
    ]),
  ],
  [
    13,
    new Map([
      ["ORC", 10],
      ["PRT", 17],
      ["SPM", 8],
    ]),
  ],
  [
    14,
    new Map([
      ["OBR", 13],
      ["ORC", 10],
      ["SPM", 8],
      ["TQ1", 14],
      ["TQ2", 18],
    ]),
  ],
  [
    15,
    new Map([
      ["OBR", 13],
      ["ORC", 10],
      ["PRT", 15],
      ["SPM", 8],
      ["TQ1", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["OBX", 12],
      ["ORC", 10],
      ["PRT", 16],
      ["SAC", 11],
      ["SPM", 8],
    ]),
  ],
  [
    17,
    new Map([
      ["ORC", 10],
      ["PRT", 17],
      ["SPM", 8],
    ]),
  ],
  [
    18,
    new Map([
      ["OBR", 13],
      ["ORC", 10],
      ["SPM", 8],
      ["TQ1", 14],
      ["TQ2", 18],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "10:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "10:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
  },
  "10:TQ1": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "11:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "12:SAC": {
    groupsOpened: [],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "12:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "13:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "14:OBR": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "14:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
  },
  "14:TQ1": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
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
  "15:TQ1": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "16:SAC": {
    groupsOpened: [],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "16:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "17:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "18:OBR": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "18:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "18:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
  },
  "18:TQ1": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
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
  "8:OBX": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
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
  "8:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "9:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
