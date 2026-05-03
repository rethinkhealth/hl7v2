// Generated profile automaton for ORL_O40 (v2.8.1)

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
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "11:ORC": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "11:SHP": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "12:OBR": {
    groupsClosed: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "13:OBR": {
    groupsClosed: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "14:PAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "15:ORC": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "15:SHP": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "16:OBR": {
    groupsClosed: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "17:ORC": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "17:PAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "17:SHP": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "17:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "18:ORC": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "18:PAC": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "18:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "18:SHP": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "18:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "19:ORC": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "19:PAC": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "19:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "19:SHP": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "19:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE", "ORL_O40/RESPONSE/PATIENT"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE", "ORL_O40/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE", "ORL_O40/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE", "ORL_O40/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE", "ORL_O40/RESPONSE/PATIENT"],
  },
  "8:OBR": {
    groupsClosed: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
