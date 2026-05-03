// Generated profile automaton for ORL_O22 (v2.5)

export const start = 0;
export const finals = new Set<number>([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "ORC",
  "PID",
  "SAC",
  "SFT",
  "SPM",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 6],
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [3, new Map([["ORC", 7]])],
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
      ["SFT", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["ERR", 6],
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["OBR", 8],
      ["ORC", 7],
      ["TQ1", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["ORC", 7],
      ["SPM", 10],
    ]),
  ],
  [
    9,
    new Map([
      ["OBR", 8],
      ["ORC", 7],
      ["TQ1", 9],
      ["TQ2", 11],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 7],
      ["SAC", 12],
      ["SPM", 10],
    ]),
  ],
  [
    11,
    new Map([
      ["OBR", 8],
      ["ORC", 7],
      ["TQ1", 9],
      ["TQ2", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["ORC", 7],
      ["SAC", 12],
      ["SPM", 10],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: [
      "ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER"],
  },
  "10:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
  },
  "11:OBR": {
    groupsClosed: ["ORL_O22/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsClosed: [
      "ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER"],
  },
  "12:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE", "ORL_O22/RESPONSE/PATIENT"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE", "ORL_O22/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE", "ORL_O22/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE", "ORL_O22/RESPONSE/PATIENT"],
  },
  "7:OBR": {
    groupsClosed: ["ORL_O22/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER"],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "8:ORC": {
    groupsClosed: [
      "ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER"],
  },
  "8:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
  },
  "9:OBR": {
    groupsClosed: ["ORL_O22/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
