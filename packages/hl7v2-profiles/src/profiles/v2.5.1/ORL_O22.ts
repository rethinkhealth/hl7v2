// Generated profile automaton for ORL_O22 (v2.5.1)

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
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [
      "ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
  },
  "10:SPM": {
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O22/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "11:TQ1": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [
      "ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
  },
  "12:SPM": {
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsClosed: [],
  },
  "2:PID": {
    groupsOpened: ["ORL_O22/RESPONSE", "ORL_O22/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["ORL_O22/RESPONSE", "ORL_O22/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["ORL_O22/RESPONSE", "ORL_O22/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["ORL_O22/RESPONSE", "ORL_O22/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:OBR": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O22/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "7:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "7:TQ1": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [
      "ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
  },
  "8:SPM": {
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN",
    ],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O22/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "9:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "9:TQ1": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
