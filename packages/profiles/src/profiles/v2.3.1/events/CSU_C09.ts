// Generated profile automaton for CSU_C09 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([15]);
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
      ["CSP", 10],
      ["CSS", 9],
      ["OBR", 7],
      ["ORC", 8],
    ]),
  ],
  [
    4,
    new Map([
      ["CSR", 3],
      ["PV2", 11],
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
  [7, new Map([["OBX", 12]])],
  [8, new Map([["OBR", 7]])],
  [
    9,
    new Map([
      ["OBR", 7],
      ["ORC", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["CSS", 9],
      ["OBR", 7],
      ["ORC", 8],
    ]),
  ],
  [11, new Map([["CSR", 3]])],
  [
    12,
    new Map([
      ["OBR", 7],
      ["OBX", 12],
      ["ORC", 13],
      ["RXA", 14],
    ]),
  ],
  [
    13,
    new Map([
      ["OBR", 7],
      ["RXA", 14],
    ]),
  ],
  [14, new Map([["RXR", 15]])],
  [
    15,
    new Map([
      ["CSP", 10],
      ["CSS", 9],
      ["OBR", 7],
      ["ORC", 13],
      ["PID", 2],
      ["RXA", 14],
    ]),
  ],
]);
export const effects = {
  "10:CSS": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
  },
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "11:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
  },
  "12:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "13:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [],
  },
  "13:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "15:CSP": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
  },
  "15:CSS": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
  },
  "15:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
  },
  "15:PID": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT"],
  },
  "15:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsOpened: [
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
    groupsClosed: [],
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
  "9:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
