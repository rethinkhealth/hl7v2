// Generated profile automaton for ORL_O34 (v2.5.1)

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
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
  },
  "10:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN"],
  },
  "11:ORC": {
    groupsClosed: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST/SPMSAC_SUPPGRP2",
    ],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
  },
  "11:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN",
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST/SPMSAC_SUPPGRP2",
    ],
  },
  "12:OBR": {
    groupsClosed: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING"],
    groupsOpened: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
  },
  "12:SPM": {
    groupsClosed: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING"],
  },
  "13:OBX": {
    groupsClosed: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST/SPMSAC_SUPPGRP2",
    ],
    groupsOpened: [],
  },
  "13:ORC": {
    groupsClosed: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST/SPMSAC_SUPPGRP2",
    ],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
  },
  "13:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN",
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST/SPMSAC_SUPPGRP2",
    ],
  },
  "14:OBR": {
    groupsClosed: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING"],
    groupsOpened: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
  },
  "14:SPM": {
    groupsClosed: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING"],
  },
  "15:ORC": {
    groupsClosed: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST/SPMSAC_SUPPGRP2",
    ],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
  },
  "15:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN",
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST/SPMSAC_SUPPGRP2",
    ],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE", "ORL_O34/RESPONSE/PATIENT"],
  },
  "3:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE", "ORL_O34/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE", "ORL_O34/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE", "ORL_O34/RESPONSE/PATIENT"],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
  },
  "7:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN"],
  },
  "8:OBR": {
    groupsClosed: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING"],
    groupsOpened: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
  },
  "8:SPM": {
    groupsClosed: [
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/OBSERVATION_REQUEST",
      "ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER/TIMING"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN/ORDER"],
  },
  "9:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O34/RESPONSE/PATIENT/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
