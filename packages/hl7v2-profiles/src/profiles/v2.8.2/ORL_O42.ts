// Generated profile automaton for ORL_O42 (v2.8.2)

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
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "10:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "11:SAC": {
    groupsOpened: [],
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "11:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "12:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O42/RESPONSE/PATIENT"],
  },
  "13:ORC": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "13:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "14:OBR": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "14:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
  },
  "14:TQ1": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "15:ORC": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "15:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
  },
  "15:TQ1": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "16:SAC": {
    groupsOpened: [],
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "16:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "17:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "18:OBR": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "18:ORC": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "18:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
  },
  "18:TQ1": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
  "2:PID": {
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "2:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O42/RESPONSE/PATIENT"],
  },
  "3:OBX": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "3:SAC": {
    groupsOpened: [],
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "3:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "4:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O42/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "5:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O42/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O42/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O42/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE", "ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O42/RESPONSE/PATIENT"],
  },
  "9:OBR": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "9:ORC": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "9:SPM": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
  },
  "9:TQ1": {
    groupsOpened: ["ORL_O42/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
