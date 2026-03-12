// Generated profile automaton for ORL_O22 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
]);
export const alphabet = new Set<string>([
  "ARV",
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
      ["ARV", 9],
      ["ORC", 8],
      ["PRT", 10],
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
      ["OBR", 11],
      ["ORC", 8],
      ["PRT", 13],
      ["TQ1", 12],
    ]),
  ],
  [
    9,
    new Map([
      ["ARV", 9],
      ["ORC", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["ARV", 9],
      ["ORC", 8],
      ["PRT", 10],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 8],
      ["PRT", 15],
      ["SPM", 14],
    ]),
  ],
  [
    12,
    new Map([
      ["OBR", 11],
      ["ORC", 8],
      ["TQ1", 12],
      ["TQ2", 16],
    ]),
  ],
  [
    13,
    new Map([
      ["OBR", 11],
      ["ORC", 8],
      ["PRT", 13],
      ["TQ1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["ORC", 8],
      ["SAC", 17],
      ["SPM", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["ORC", 8],
      ["PRT", 15],
      ["SPM", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["OBR", 11],
      ["ORC", 8],
      ["TQ1", 12],
      ["TQ2", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["ORC", 8],
      ["SAC", 17],
      ["SPM", 14],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "11:SPM": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "13:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "13:TQ1": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "14:SPM": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "15:SPM": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
  "16:OBR": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "16:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "16:TQ1": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "17:SPM": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
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
  "8:OBR": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "8:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "8:TQ1": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
