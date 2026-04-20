// Generated profile automaton for ORL_O40 (v2.7)

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
      ["SHP", 13],
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
  [13, new Map([["PAC", 16]])],
  [
    14,
    new Map([
      ["ORC", 8],
      ["PRT", 14],
      ["SHP", 13],
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
      ["PAC", 16],
      ["SHP", 13],
      ["SPM", 17],
    ]),
  ],
  [
    17,
    new Map([
      ["ORC", 8],
      ["PAC", 16],
      ["SAC", 18],
      ["SHP", 13],
      ["SPM", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["ORC", 8],
      ["PAC", 16],
      ["SAC", 18],
      ["SHP", 13],
      ["SPM", 17],
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
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "10:SHP": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsClosed: [],
  },
  "11:TQ1": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "12:TQ1": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:PAC": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "14:SHP": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
    groupsClosed: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "16:PAC": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [],
  },
  "16:SHP": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "16:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "16:SPM": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "17:SPM": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "17:PAC": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "17:SHP": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "17:ORC": {
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "17:SAC": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsClosed: [],
  },
  "18:SAC": {
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
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
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
