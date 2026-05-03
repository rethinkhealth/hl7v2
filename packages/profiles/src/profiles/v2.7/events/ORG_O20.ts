// Generated profile automaton for ORG_O20 (v2.7)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18,
]);
export const alphabet = new Set<string>([
  "CTI",
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
      ["CTI", 10],
      ["NTE", 11],
      ["OBR", 13],
      ["ORC", 3],
      ["PRT", 12],
      ["SPM", 9],
      ["TQ1", 14],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 16],
      ["ORC", 3],
      ["PRT", 15],
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
      ["SAC", 17],
      ["SPM", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["CTI", 10],
      ["ORC", 3],
      ["SPM", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["ORC", 3],
      ["SPM", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["ORC", 3],
      ["PRT", 12],
      ["SPM", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["ORC", 3],
      ["PRT", 12],
      ["SPM", 9],
    ]),
  ],
  [
    14,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["OBR", 13],
      ["ORC", 3],
      ["PRT", 12],
      ["SPM", 9],
      ["TQ1", 14],
      ["TQ2", 18],
    ]),
  ],
  [
    15,
    new Map([
      ["ORC", 3],
      ["PRT", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 16],
      ["ORC", 3],
      ["PRT", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["ORC", 3],
      ["SAC", 17],
      ["SPM", 9],
    ]),
  ],
  [
    18,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["OBR", 13],
      ["ORC", 3],
      ["PRT", 12],
      ["SPM", 9],
      ["TQ1", 14],
      ["TQ2", 18],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "10:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "11:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "12:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
  "13:CTI": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
    groupsOpened: [],
  },
  "13:NTE": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
    groupsOpened: [],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "13:PRT": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
    groupsOpened: [],
  },
  "13:SPM": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
  "14:CTI": {
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "14:NTE": {
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "14:OBR": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "14:PRT": {
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "14:SPM": {
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "15:ORC": {
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "16:ORC": {
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "17:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
  "18:CTI": {
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "18:NTE": {
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "18:OBR": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "18:PRT": {
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "18:SPM": {
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "2:ORC": {
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
  },
  "3:CTI": {
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "3:NTE": {
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "3:OBR": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "3:PRT": {
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "3:SPM": {
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
  "3:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "4:ORC": {
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
  },
  "7:ORC": {
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "9:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
