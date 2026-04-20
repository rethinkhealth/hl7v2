// Generated profile automaton for ORL_O22 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
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
      ["ERR", 7],
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 8],
      ["PRT", 9],
    ]),
  ],
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
      ["OBR", 10],
      ["ORC", 8],
      ["PRT", 12],
      ["TQ1", 11],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 8],
      ["PRT", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 8],
      ["PRT", 14],
      ["SPM", 13],
    ]),
  ],
  [
    11,
    new Map([
      ["OBR", 10],
      ["ORC", 8],
      ["TQ1", 11],
      ["TQ2", 15],
    ]),
  ],
  [
    12,
    new Map([
      ["OBR", 10],
      ["ORC", 8],
      ["PRT", 12],
      ["TQ1", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["ORC", 8],
      ["SAC", 16],
      ["SPM", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["ORC", 8],
      ["PRT", 14],
      ["SPM", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["OBR", 10],
      ["ORC", 8],
      ["TQ1", 11],
      ["TQ2", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["ORC", 8],
      ["SAC", 16],
      ["SPM", 13],
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
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "10:SPM": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
  "11:TQ1": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "12:TQ1": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:SPM": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "14:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "14:SPM": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "16:SPM": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
