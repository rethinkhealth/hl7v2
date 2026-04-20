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
  "2:SPM": {
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O43/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:SAC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "3:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "3:OBX": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "4:SPM": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O43/RESPONSE/PATIENT"],
  },
  "5:SPM": {
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O43/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:SPM": {
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O43/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:SPM": {
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O43/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:SPM": {
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O43/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["ORL_O43/RESPONSE", "ORL_O43/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:SAC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "9:SPM": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "9:ORC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "10:SAC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "11:SAC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "11:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "12:SPM": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O43/RESPONSE/PATIENT"],
  },
  "13:ORC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "13:SAC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "13:SPM": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "13:OBR": {
    groupsOpened: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "13:TQ1": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "14:SAC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "14:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "15:ORC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "15:SAC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "15:SPM": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "16:TQ1": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "16:SAC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "16:SPM": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "16:OBR": {
    groupsOpened: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "17:ORC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "17:SAC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "17:SPM": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "17:OBR": {
    groupsOpened: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "17:TQ1": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "18:SAC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "18:SPM": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "19:TQ1": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "19:SAC": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "19:SPM": {
    groupsOpened: ["ORL_O43/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "19:OBR": {
    groupsOpened: [
      "ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["ORL_O43/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
