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
  "10:ORC": {
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
  "10:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "11:OBR": {
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "12:OBR": {
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "13:ORC": {
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
  "13:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "14:ORC": {
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
  "14:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "15:OBR": {
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER/TIMING"],
  },
  "16:ORC": {
    groupsClosed: ["ORL_O22/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
  "16:SPM": {
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
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
