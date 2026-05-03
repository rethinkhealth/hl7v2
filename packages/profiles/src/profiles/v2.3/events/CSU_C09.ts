// Generated profile automaton for CSU_C09 (v2.3)

export const start = 0;
export const finals = new Set<number>([13]);
export const alphabet = new Set<string>([
  "CSP",
  "CSR",
  "CSS",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "RXA",
  "RXR",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["PID", 2]])],
  [
    2,
    new Map([
      ["CSR", 3],
      ["NTE", 5],
      ["PD1", 6],
      ["PV1", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["CSP", 11],
      ["CSS", 10],
      ["OBR", 9],
      ["ORC", 8],
      ["RXA", 7],
    ]),
  ],
  [
    4,
    new Map([
      ["CSR", 3],
      ["PV2", 12],
    ]),
  ],
  [
    5,
    new Map([
      ["CSR", 3],
      ["NTE", 5],
      ["PV1", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["CSR", 3],
      ["NTE", 5],
      ["PV1", 4],
    ]),
  ],
  [7, new Map([["RXR", 13]])],
  [
    8,
    new Map([
      ["OBR", 9],
      ["RXA", 7],
    ]),
  ],
  [9, new Map([["OBX", 14]])],
  [
    10,
    new Map([
      ["OBR", 9],
      ["ORC", 8],
      ["RXA", 7],
    ]),
  ],
  [
    11,
    new Map([
      ["CSS", 10],
      ["OBR", 9],
      ["ORC", 8],
      ["RXA", 7],
    ]),
  ],
  [12, new Map([["CSR", 3]])],
  [
    13,
    new Map([
      ["CSP", 11],
      ["CSS", 10],
      ["OBR", 9],
      ["ORC", 8],
      ["PID", 2],
      ["RXA", 7],
    ]),
  ],
  [
    14,
    new Map([
      ["OBR", 9],
      ["OBX", 14],
      ["ORC", 8],
      ["RXA", 7],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
  },
  "10:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "11:CSS": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
  },
  "11:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
  },
  "11:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "12:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "13:CSP": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
  },
  "13:CSS": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
  },
  "13:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
  },
  "13:PID": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT"],
  },
  "13:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "14:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
  },
  "14:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT"],
  },
  "2:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "2:PV1": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
  },
  "3:CSP": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
  },
  "3:CSS": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
    ],
  },
  "3:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
  },
  "3:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "4:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "5:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "5:PV1": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
  },
  "6:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "6:PV1": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
  },
  "8:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [],
  },
  "8:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
