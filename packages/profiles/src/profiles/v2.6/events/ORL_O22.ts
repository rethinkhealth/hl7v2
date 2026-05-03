// Generated profile automaton for ORL_O22 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
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
  [3, new Map([["ORC", 8]])],
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
      ["OBR", 9],
      ["ORC", 8],
      ["TQ1", 10],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 8],
      ["ROL", 12],
      ["SPM", 11],
    ]),
  ],
  [
    10,
    new Map([
      ["OBR", 9],
      ["ORC", 8],
      ["TQ1", 10],
      ["TQ2", 13],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 8],
      ["SAC", 14],
      ["SPM", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["ORC", 8],
      ["ROL", 12],
      ["SPM", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["OBR", 9],
      ["ORC", 8],
      ["TQ1", 10],
      ["TQ2", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["ORC", 8],
      ["SAC", 14],
      ["SPM", 11],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
  "11:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "12:ORC": {
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
  "12:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "13:OBR": {
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
  "14:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE"],
  },
  "8:OBR": {
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "9:ORC": {
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
  "9:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
