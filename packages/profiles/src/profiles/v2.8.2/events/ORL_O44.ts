// Generated profile automaton for ORL_O44 (v2.8.2)

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
    groupsClosed: ["ORL_O44/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST"],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/TIMING"],
  },
  "11:OBR": {
    groupsClosed: ["ORL_O44/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsClosed: ["ORL_O44/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
  },
  "13:PAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "14:ORC": {
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
  },
  "14:SHP": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "15:OBR": {
    groupsClosed: ["ORL_O44/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/TIMING"],
  },
  "16:ORC": {
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
  },
  "16:PAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "16:SHP": {
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "16:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "17:ORC": {
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
  },
  "17:PAC": {
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "17:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "17:SHP": {
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "17:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "18:ORC": {
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
  },
  "18:PAC": {
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "18:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "18:SHP": {
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "18:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "2:ORC": {
    groupsClosed: ["ORL_O44/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/PATIENT"],
  },
  "3:OBR": {
    groupsClosed: ["ORL_O44/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
  },
  "3:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER/TIMING"],
  },
  "4:ORC": {
    groupsClosed: ["ORL_O44/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["ORL_O44/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["ORL_O44/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/PATIENT"],
  },
  "7:ORC": {
    groupsClosed: ["ORL_O44/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: ["ORL_O44/RESPONSE/PATIENT"],
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O44/RESPONSE", "ORL_O44/RESPONSE/PATIENT"],
  },
  "9:ORC": {
    groupsClosed: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["ORL_O44/RESPONSE/ORDER"],
  },
  "9:SHP": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O44/RESPONSE/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
