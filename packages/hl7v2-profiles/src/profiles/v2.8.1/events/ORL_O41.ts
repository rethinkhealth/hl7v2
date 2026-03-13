// Generated profile automaton for ORL_O41 (v2.8.1)

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
      ["ERR", 8],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    3,
    new Map([
      ["OBR", 9],
      ["ORC", 3],
      ["PRT", 11],
      ["TQ1", 10],
    ]),
  ],
  [
    4,
    new Map([
      ["ORC", 3],
      ["PRT", 12],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ERR", 8],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 3],
      ["PRT", 14],
      ["SPM", 13],
    ]),
  ],
  [
    10,
    new Map([
      ["OBR", 9],
      ["ORC", 3],
      ["TQ1", 10],
      ["TQ2", 15],
    ]),
  ],
  [
    11,
    new Map([
      ["OBR", 9],
      ["ORC", 3],
      ["PRT", 11],
      ["TQ1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["ORC", 3],
      ["PRT", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["ORC", 3],
      ["SAC", 16],
      ["SPM", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["ORC", 3],
      ["PRT", 14],
      ["SPM", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["OBR", 9],
      ["ORC", 3],
      ["TQ1", 10],
      ["TQ2", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["ORC", 3],
      ["SAC", 16],
      ["SPM", 13],
    ]),
  ],
]);
export const effects = {
  "2:ORC": {
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O41/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:OBR": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/TIMING"],
  },
  "3:TQ1": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O41/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O41/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O41/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O41/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O41/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "9:SPM": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
  "10:TQ1": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/TIMING"],
  },
  "11:TQ1": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O41/RESPONSE/PATIENT"],
  },
  "13:SPM": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "14:ORC": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "14:SPM": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/TIMING"],
  },
  "16:SPM": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
