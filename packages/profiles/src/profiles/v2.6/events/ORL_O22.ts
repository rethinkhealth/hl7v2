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
  "2:PID": {
    groupsOpened: ["ORL_O22/RESPONSE"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["ORL_O22/RESPONSE"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["ORL_O22/RESPONSE"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["ORL_O22/RESPONSE"],
    groupsClosed: [],
  },
  "7:PID": {
    groupsOpened: ["ORL_O22/RESPONSE"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "8:TQ1": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "9:SPM": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
  "10:TQ1": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "11:SPM": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "12:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "12:SPM": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
  "13:TQ1": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "14:SPM": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
