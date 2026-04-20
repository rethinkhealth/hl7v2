// Generated profile automaton for CSU_C09 (v2.5)

export const start = 0;
export const finals = new Set<number>([18]);
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
  "SFT",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["PID", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["CSR", 4],
      ["NTE", 6],
      ["PD1", 7],
      ["PV1", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["PID", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["CSP", 11],
      ["CSS", 10],
      ["OBR", 8],
      ["ORC", 9],
    ]),
  ],
  [
    5,
    new Map([
      ["CSR", 4],
      ["PV2", 12],
    ]),
  ],
  [
    6,
    new Map([
      ["CSR", 4],
      ["NTE", 6],
      ["PV1", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["CSR", 4],
      ["NTE", 6],
      ["PV1", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["OBX", 13],
      ["TQ1", 14],
    ]),
  ],
  [9, new Map([["OBR", 8]])],
  [
    10,
    new Map([
      ["OBR", 8],
      ["ORC", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["CSS", 10],
      ["OBR", 8],
      ["ORC", 9],
    ]),
  ],
  [12, new Map([["CSR", 4]])],
  [
    13,
    new Map([
      ["OBR", 8],
      ["OBX", 13],
      ["ORC", 15],
      ["RXA", 16],
    ]),
  ],
  [
    14,
    new Map([
      ["OBX", 13],
      ["TQ1", 14],
      ["TQ2", 17],
    ]),
  ],
  [
    15,
    new Map([
      ["OBR", 8],
      ["RXA", 16],
    ]),
  ],
  [16, new Map([["RXR", 18]])],
  [
    17,
    new Map([
      ["OBX", 13],
      ["TQ1", 14],
      ["TQ2", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["CSP", 11],
      ["CSS", 10],
      ["OBR", 8],
      ["ORC", 15],
      ["PID", 2],
      ["RXA", 16],
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
  "3:PID": {
    groupsOpened: ["CSU_C09/PATIENT"],
    groupsClosed: [],
  },
  "4:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "4:CSS": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
    ],
    groupsClosed: [],
  },
  "4:CSP": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
    groupsClosed: [],
  },
  "5:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "6:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "6:PV1": {
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "7:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "7:PV1": {
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "8:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "8:TQ1": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "11:CSS": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
    groupsClosed: [],
  },
  "12:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "13:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "13:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
    groupsClosed: [],
  },
  "13:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "14:TQ1": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
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
  "15:OBR": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "17:TQ1": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "18:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "18:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
    groupsClosed: [],
  },
  "18:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "18:CSS": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "18:CSP": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "18:PID": {
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
