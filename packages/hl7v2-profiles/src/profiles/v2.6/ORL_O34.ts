// Generated profile automaton for ORL_O34 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
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
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [3, new Map([["SPM", 8]])],
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
      ["OBX", 11],
      ["ORC", 9],
      ["SAC", 10],
      ["SPM", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["OBR", 12],
      ["ORC", 9],
      ["SPM", 8],
      ["TQ1", 13],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 9],
      ["SAC", 10],
      ["SPM", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["OBX", 11],
      ["ORC", 9],
      ["SAC", 10],
      ["SPM", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["ORC", 9],
      ["ROL", 14],
      ["SPM", 8],
    ]),
  ],
  [
    13,
    new Map([
      ["OBR", 12],
      ["ORC", 9],
      ["SPM", 8],
      ["TQ1", 13],
      ["TQ2", 15],
    ]),
  ],
  [
    14,
    new Map([
      ["ORC", 9],
      ["ROL", 14],
      ["SPM", 8],
    ]),
  ],
  [
    15,
    new Map([
      ["OBR", 12],
      ["ORC", 9],
      ["SPM", 8],
      ["TQ1", 13],
      ["TQ2", 15],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
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
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "12:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "13:OBR": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "13:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "13:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
  },
  "13:TQ1": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "14:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
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
  "8:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "8:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
  "9:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "9:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
  },
  "9:TQ1": {
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
