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
  "10:ORC": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "10:SHP": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "11:OBR": {
    groupsClosed: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
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
  "13:PAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "14:ORC": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "14:SHP": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "15:OBR": {
    groupsClosed: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "16:ORC": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "16:PAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "16:SHP": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
    ],
  },
  "16:SPM": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
    ],
  },
  "17:ORC": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsOpened: ["ORL_O40/RESPONSE/PATIENT/ORDER"],
  },
  "17:PAC": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE",
    ],
  },
  "17:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
    ],
  },
  "17:SHP": {
    groupsClosed: [
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE",
      "ORL_O40/RESPONSE/PATIENT/ORDER/OBSERVATION_REQUEST/SPECIMEN_SHIPMENT/PACKAGE/SPECIMEN_IN_PACKAGE/SPECIMEN_CONTAINER_IN_PACKAGE",
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
