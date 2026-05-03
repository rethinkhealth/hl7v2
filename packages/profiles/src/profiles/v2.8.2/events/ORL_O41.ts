// Generated profile automaton for ORL_O41 (v2.8.2)

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
  "10:OBR": {
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST"],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/TIMING"],
  },
  "11:OBR": {
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsClosed: ["ORL_O41/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
  },
  "13:ORC": {
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
  },
  "13:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "14:ORC": {
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
  },
  "14:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "15:OBR": {
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/TIMING"],
  },
  "16:ORC": {
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
  },
  "16:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
  "2:ORC": {
    groupsClosed: ["ORL_O41/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/PATIENT"],
  },
  "3:OBR": {
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
  },
  "3:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/TIMING"],
  },
  "4:ORC": {
    groupsClosed: ["ORL_O41/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["ORL_O41/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["ORL_O41/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/PATIENT"],
  },
  "7:ORC": {
    groupsClosed: ["ORL_O41/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: ["ORL_O41/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE", "ORL_O41/RESPONSE/PATIENT"],
  },
  "9:ORC": {
    groupsClosed: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER"],
  },
  "9:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O41/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
