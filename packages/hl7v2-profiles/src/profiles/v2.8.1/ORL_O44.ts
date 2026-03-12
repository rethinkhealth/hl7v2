// Generated profile automaton for ORL_O44 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18,
]);
export const alphabet = new Set<string>([
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
      ["SHP", 13],
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
  [13, new Map([["PAC", 16]])],
  [
    14,
    new Map([
      ["ORC", 3],
      ["PRT", 14],
      ["SHP", 13],
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
      ["PAC", 16],
      ["SHP", 13],
      ["SPM", 17],
    ]),
  ],
  [
    17,
    new Map([
      ["ORC", 3],
      ["PAC", 16],
      ["SAC", 18],
      ["SHP", 13],
      ["SPM", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["ORC", 3],
      ["PAC", 16],
      ["SAC", 18],
      ["SHP", 13],
      ["SPM", 17],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O44/RESPONSE/ORDER/TIMING"],
  },
  "10:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "10:TQ1": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O44/RESPONSE/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:TQ1": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O44/RESPONSE/PATIENT"],
  },
  "13:PAC": {
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "14:SHP": {
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O44/RESPONSE/ORDER/TIMING"],
  },
  "15:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "16:PAC": {
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [],
  },
  "16:SHP": {
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "16:SPM": {
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "17:PAC": {
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "17:SAC": {
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "17:SHP": {
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "17:SPM": {
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "18:PAC": {
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "18:SAC": {
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "18:SHP": {
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "18:SPM": {
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O44/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:OBR": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O44/RESPONSE/ORDER/TIMING"],
  },
  "3:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:TQ1": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O44/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O44/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O44/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O44/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/ORDER"],
    groupsClosed: ["ORL_O44/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "9:SHP": {
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
