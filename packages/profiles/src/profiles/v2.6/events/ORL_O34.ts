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
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "10:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "11:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "12:SPM": {
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "13:OBR": {
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "13:SPM": {
    groupsClosed: [
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
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
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "8:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "9:OBR": {
    groupsClosed: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER"],
  },
  "9:SPM": {
    groupsClosed: [
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/SPECIMEN/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
