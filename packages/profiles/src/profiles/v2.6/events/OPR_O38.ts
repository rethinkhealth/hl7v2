// Generated profile automaton for OPR_O38 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16,
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
  "ROL",
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
      ["PID", 9],
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
      ["OBX", 13],
      ["ORC", 11],
      ["SAC", 12],
      ["SPM", 8],
      ["TQ1", 10],
    ]),
  ],
  [
    9,
    new Map([
      ["NK1", 3],
      ["SPM", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["NK1", 3],
      ["SPM", 8],
      ["TQ1", 10],
      ["TQ2", 14],
    ]),
  ],
  [11, new Map([["OBR", 15]])],
  [
    12,
    new Map([
      ["NK1", 3],
      ["ORC", 11],
      ["SAC", 12],
      ["SPM", 8],
      ["TQ1", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["NK1", 3],
      ["OBX", 13],
      ["ORC", 11],
      ["SAC", 12],
      ["SPM", 8],
      ["TQ1", 10],
    ]),
  ],
  [
    14,
    new Map([
      ["NK1", 3],
      ["SPM", 8],
      ["TQ1", 10],
      ["TQ2", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["NK1", 3],
      ["ORC", 11],
      ["ROL", 16],
      ["SPM", 8],
      ["TQ1", 10],
    ]),
  ],
  [
    16,
    new Map([
      ["NK1", 3],
      ["ORC", 11],
      ["ROL", 16],
      ["SPM", 8],
      ["TQ1", 10],
    ]),
  ],
]);
export const effects = {
  "10:NK1": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "10:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "12:NK1": {
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "12:ORC": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "12:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
  "12:TQ1": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
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
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "14:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
  },
  "15:NK1": {
    groupsClosed: [
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST",
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "15:ORC": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "15:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
  "15:TQ1": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
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
      "OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING",
    ],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER"],
  },
  "8:ORC": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/TIMING"],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
  },
  "8:SPM": {
    groupsClosed: [],
    groupsOpened: ["OPR_O38/RESPONSE/ORDER/SPECIMEN"],
  },
  "8:TQ1": {
    groupsClosed: ["OPR_O38/RESPONSE/ORDER/SPECIMEN/OBSERVATION_REQUEST"],
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
