// Generated profile automaton for ORL_O43 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  2, 5, 6, 7, 8, 9, 13, 15, 16, 17, 18, 19,
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
      ["ERR", 8],
      ["NTE", 5],
      ["PID", 4],
      ["SFT", 7],
      ["SPM", 3],
      ["UAC", 6],
    ]),
  ],
  [
    3,
    new Map([
      ["NTE", 10],
      ["OBX", 11],
      ["SAC", 9],
    ]),
  ],
  [
    4,
    new Map([
      ["PRT", 12],
      ["SPM", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 5],
      ["PID", 4],
      ["SPM", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 5],
      ["PID", 4],
      ["SPM", 3],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 5],
      ["PID", 4],
      ["SFT", 7],
      ["SPM", 3],
      ["UAC", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ERR", 8],
      ["NTE", 5],
      ["PID", 4],
      ["SFT", 7],
      ["SPM", 3],
      ["UAC", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 13],
      ["SAC", 9],
      ["SPM", 3],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 10],
      ["SAC", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 10],
      ["OBX", 11],
      ["PRT", 14],
      ["SAC", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["PRT", 12],
      ["SPM", 3],
    ]),
  ],
  [
    13,
    new Map([
      ["OBR", 15],
      ["ORC", 13],
      ["PRT", 17],
      ["SAC", 9],
      ["SPM", 3],
      ["TQ1", 16],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 10],
      ["OBX", 11],
      ["PRT", 14],
      ["SAC", 9],
    ]),
  ],
  [
    15,
    new Map([
      ["ORC", 13],
      ["PRT", 18],
      ["SAC", 9],
      ["SPM", 3],
    ]),
  ],
  [
    16,
    new Map([
      ["OBR", 15],
      ["ORC", 13],
      ["SAC", 9],
      ["SPM", 3],
      ["TQ1", 16],
      ["TQ2", 19],
    ]),
  ],
  [
    17,
    new Map([
      ["OBR", 15],
      ["ORC", 13],
      ["PRT", 17],
      ["SAC", 9],
      ["SPM", 3],
      ["TQ1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["ORC", 13],
      ["PRT", 18],
      ["SAC", 9],
      ["SPM", 3],
    ]),
  ],
  [
    19,
    new Map([
      ["OBR", 15],
      ["ORC", 13],
      ["SAC", 9],
      ["SPM", 3],
      ["TQ1", 16],
      ["TQ2", 19],
    ]),
  ],
]);
export const effects = {
  "10:SAC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "11:NTE": {
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "11:SAC": {
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "12:SPM": {
    groupsClosed: ["ORL_O43/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
  },
  "13:OBR": {
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "13:SAC": {
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "13:SPM": {
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "14:NTE": {
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "14:SAC": {
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "15:SAC": {
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "15:SPM": {
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
  },
  "16:OBR": {
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "16:SAC": {
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "16:SPM": {
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "17:OBR": {
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "17:SAC": {
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "17:SPM": {
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "18:SAC": {
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "18:SPM": {
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
  },
  "19:OBR": {
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "19:SAC": {
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "19:SPM": {
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/PATIENT"],
  },
  "2:SPM": {
    groupsClosed: ["ORL_O43/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/SPECIMEN"],
  },
  "3:NTE": {
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "3:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "3:SAC": {
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "4:SPM": {
    groupsClosed: ["ORL_O43/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/PATIENT"],
  },
  "5:SPM": {
    groupsClosed: ["ORL_O43/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/SPECIMEN"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/PATIENT"],
  },
  "6:SPM": {
    groupsClosed: ["ORL_O43/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/SPECIMEN"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/PATIENT"],
  },
  "7:SPM": {
    groupsClosed: ["ORL_O43/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/SPECIMEN"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/PATIENT"],
  },
  "8:SPM": {
    groupsClosed: ["ORL_O43/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/SPECIMEN"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "9:SAC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "9:SPM": {
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
