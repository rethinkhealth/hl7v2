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
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "11:CSS": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
  },
  "11:OBR": {
    groupsClosed: [],
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
    ],
  },
  "12:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
  },
  "13:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "14:OBX": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "15:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [],
  },
  "15:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "17:OBX": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "18:CSP": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
  },
  "18:CSS": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
  },
  "18:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
  },
  "18:PID": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT"],
  },
  "18:RXA": {
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
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT"],
  },
  "4:CSP": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
  },
  "4:CSS": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
    ],
  },
  "4:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "4:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "5:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "6:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "6:PV1": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
  },
  "7:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "7:PV1": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
  },
  "8:OBX": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
