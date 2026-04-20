// Generated profile automaton for ORL_O40 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19,
]);
export const alphabet = new Set<string>([
  "ARV",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "ORC",
  "PAC",
  "PID",
  "PRT",
  "SAC",
  "SFT",
  "SHP",
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
      ["SHP", 14],
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
  [14, new Map([["PAC", 17]])],
  [
    15,
    new Map([
      ["ORC", 8],
      ["PRT", 15],
      ["SHP", 14],
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
      ["PAC", 17],
      ["SHP", 14],
      ["SPM", 18],
    ]),
  ],
  [
    18,
    new Map([
      ["ORC", 8],
      ["PAC", 17],
      ["SAC", 19],
      ["SHP", 14],
      ["SPM", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["ORC", 8],
      ["PAC", 17],
      ["SAC", 19],
      ["SHP", 14],
      ["SPM", 18],
    ]),
  ],
]);
export const effects = {
  "2:PID": {
    groupsOpened: ["ORL_O40/RESPONSE", "ORL_O40/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["ORL_O40/RESPONSE", "ORL_O40/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["ORL_O40/RESPONSE", "ORL_O40/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["ORL_O40/RESPONSE", "ORL_O40/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:PID": {
    groupsOpened: ["ORL_O40/RESPONSE", "ORL_O40/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "8:TQ1": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "11:SHP": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "13:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "13:TQ1": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:PAC": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "15:SHP": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsClosed: [],
  },
  "16:TQ1": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "16:OBR": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "17:PAC": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [],
  },
  "17:SHP": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "17:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "17:SPM": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "18:SPM": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "18:PAC": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "18:SHP": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "18:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "18:SAC": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "19:SAC": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "19:SPM": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "19:PAC": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "19:SHP": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "19:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
