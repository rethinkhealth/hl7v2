// Generated profile automaton for ORL_O42 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18,
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
      ["OBX", 11],
      ["ORC", 9],
      ["SAC", 10],
      ["SPM", 3],
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
      ["OBR", 13],
      ["ORC", 9],
      ["PRT", 15],
      ["SPM", 3],
      ["TQ1", 14],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 9],
      ["SAC", 10],
      ["SPM", 3],
    ]),
  ],
  [
    11,
    new Map([
      ["OBX", 11],
      ["ORC", 9],
      ["PRT", 16],
      ["SAC", 10],
      ["SPM", 3],
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
      ["ORC", 9],
      ["PRT", 17],
      ["SPM", 3],
    ]),
  ],
  [
    14,
    new Map([
      ["OBR", 13],
      ["ORC", 9],
      ["SPM", 3],
      ["TQ1", 14],
      ["TQ2", 18],
    ]),
  ],
  [
    15,
    new Map([
      ["OBR", 13],
      ["ORC", 9],
      ["PRT", 15],
      ["SPM", 3],
      ["TQ1", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["OBX", 11],
      ["ORC", 9],
      ["PRT", 16],
      ["SAC", 10],
      ["SPM", 3],
    ]),
  ],
  [
    17,
    new Map([
      ["ORC", 9],
      ["PRT", 17],
      ["SPM", 3],
    ]),
  ],
  [
    18,
    new Map([
      ["OBR", 13],
      ["ORC", 9],
      ["SPM", 3],
      ["TQ1", 14],
      ["TQ2", 18],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
  },
  "10:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
  },
  "11:SAC": {
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "11:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
  },
  "12:SPM": {
    groupsClosed: ["ORL_O42/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
  },
  "13:SPM": {
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
  },
  "14:OBR": {
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
  },
  "14:SPM": {
    groupsClosed: [
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "15:OBR": {
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
  },
  "15:SPM": {
    groupsClosed: [
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
  },
  "16:SAC": {
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "16:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
  },
  "17:SPM": {
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
  },
  "18:OBR": {
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
  },
  "18:SPM": {
    groupsClosed: [
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/PATIENT"],
  },
  "2:SPM": {
    groupsClosed: ["ORL_O42/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/SPECIMEN"],
  },
  "3:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "3:ORC": {
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
  },
  "3:SAC": {
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "3:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
  },
  "4:SPM": {
    groupsClosed: ["ORL_O42/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/PATIENT"],
  },
  "5:SPM": {
    groupsClosed: ["ORL_O42/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/SPECIMEN"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/PATIENT"],
  },
  "6:SPM": {
    groupsClosed: ["ORL_O42/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/SPECIMEN"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/PATIENT"],
  },
  "7:SPM": {
    groupsClosed: ["ORL_O42/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/SPECIMEN"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/PATIENT"],
  },
  "8:SPM": {
    groupsClosed: ["ORL_O42/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/SPECIMEN"],
  },
  "9:OBR": {
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
  },
  "9:SPM": {
    groupsClosed: [
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
