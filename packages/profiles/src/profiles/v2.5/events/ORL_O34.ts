// Generated profile automaton for ORL_O34 (v2.5)

export const start = 0;
export const finals = new Set<number>([
  2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
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
  [3, new Map([["SPM", 7]])],
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
      ["OBX", 10],
      ["ORC", 8],
      ["SAC", 9],
      ["SPM", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["OBR", 11],
      ["ORC", 8],
      ["SPM", 7],
      ["TQ1", 12],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 8],
      ["SAC", 9],
      ["SPM", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["OBX", 10],
      ["ORC", 8],
      ["SAC", 9],
      ["SPM", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 8],
      ["SPM", 13],
    ]),
  ],
  [
    12,
    new Map([
      ["OBR", 11],
      ["ORC", 8],
      ["SPM", 7],
      ["TQ1", 12],
      ["TQ2", 14],
    ]),
  ],
  [
    13,
    new Map([
      ["OBX", 10],
      ["ORC", 8],
      ["SAC", 15],
      ["SPM", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["OBR", 11],
      ["ORC", 8],
      ["SPM", 7],
      ["TQ1", 12],
      ["TQ2", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["ORC", 8],
      ["SAC", 15],
      ["SPM", 13],
    ]),
  ],
]);
export const effects = {
  "2:PID": {
    groupsOpened: ["ORL_O34/RESPONSE", "ORL_O34/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["ORL_O34/RESPONSE", "ORL_O34/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["ORL_O34/RESPONSE", "ORL_O34/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["ORL_O34/RESPONSE", "ORL_O34/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "8:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN"],
    groupsClosed: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING",
    ],
  },
  "8:OBR": {
    groupsOpened: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING"],
  },
  "8:TQ1": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "10:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
    groupsClosed: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST/SPMSAC_SUPPGRP2",
    ],
  },
  "11:SPM": {
    groupsOpened: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN",
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST/SPMSAC_SUPPGRP2",
    ],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "12:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN"],
    groupsClosed: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING",
    ],
  },
  "12:OBR": {
    groupsOpened: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING"],
  },
  "13:SPM": {
    groupsOpened: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN",
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST/SPMSAC_SUPPGRP2",
    ],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
    groupsClosed: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST/SPMSAC_SUPPGRP2",
    ],
  },
  "13:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST/SPMSAC_SUPPGRP2",
    ],
  },
  "14:TQ1": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
    groupsClosed: [],
  },
  "14:SPM": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN"],
    groupsClosed: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING",
    ],
  },
  "14:OBR": {
    groupsOpened: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING"],
  },
  "15:SPM": {
    groupsOpened: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN",
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST/SPMSAC_SUPPGRP2",
    ],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
    groupsClosed: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST/SPMSAC_SUPPGRP2",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
