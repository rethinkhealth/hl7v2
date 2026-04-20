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
  "1:PID": {
    groupsOpened: ["CSU_C09/PATIENT"],
    groupsClosed: [],
  },
  "2:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "2:PV1": {
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "3:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "3:CSS": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
    ],
    groupsClosed: [],
  },
  "3:CSP": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
    groupsClosed: [],
  },
  "4:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "5:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "5:PV1": {
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "6:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "6:PV1": {
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "10:CSS": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
    groupsClosed: [],
  },
  "11:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "12:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "12:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
    groupsClosed: [],
  },
  "12:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "13:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "13:OBR": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "15:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "15:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "15:CSS": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "15:CSP": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "15:PID": {
    groupsOpened: ["CSU_C09/PATIENT"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
