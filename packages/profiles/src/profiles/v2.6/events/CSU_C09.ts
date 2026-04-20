// Generated profile automaton for CSU_C09 (v2.6)

export const start = 0;
export const finals = new Set<number>([20]);
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
  "ROL",
  "RXA",
  "RXR",
  "SFT",
  "TQ1",
  "TQ2",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["PID", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["CSR", 5],
      ["NTE", 7],
      ["PD1", 8],
      ["PV1", 6],
    ]),
  ],
  [3, new Map([["PID", 2]])],
  [
    4,
    new Map([
      ["PID", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["CSP", 12],
      ["CSS", 11],
      ["OBR", 9],
      ["ORC", 10],
    ]),
  ],
  [
    6,
    new Map([
      ["CSR", 5],
      ["PV2", 13],
    ]),
  ],
  [
    7,
    new Map([
      ["CSR", 5],
      ["NTE", 7],
      ["PV1", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["CSR", 5],
      ["NTE", 7],
      ["PV1", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["OBX", 14],
      ["ROL", 16],
      ["TQ1", 15],
    ]),
  ],
  [10, new Map([["OBR", 9]])],
  [
    11,
    new Map([
      ["OBR", 9],
      ["ORC", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["CSS", 11],
      ["OBR", 9],
      ["ORC", 10],
    ]),
  ],
  [13, new Map([["CSR", 5]])],
  [
    14,
    new Map([
      ["OBR", 9],
      ["OBX", 14],
      ["ORC", 17],
      ["RXA", 18],
    ]),
  ],
  [
    15,
    new Map([
      ["OBX", 14],
      ["TQ1", 15],
      ["TQ2", 19],
    ]),
  ],
  [
    16,
    new Map([
      ["OBX", 14],
      ["ROL", 16],
      ["TQ1", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["OBR", 9],
      ["RXA", 18],
    ]),
  ],
  [18, new Map([["RXR", 20]])],
  [
    19,
    new Map([
      ["OBX", 14],
      ["TQ1", 15],
      ["TQ2", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["CSP", 12],
      ["CSS", 11],
      ["OBR", 9],
      ["ORC", 17],
      ["PID", 2],
      ["RXA", 18],
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
  "4:PID": {
    groupsOpened: ["CSU_C09/PATIENT"],
    groupsClosed: [],
  },
  "5:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "5:CSS": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
    ],
    groupsClosed: [],
  },
  "5:CSP": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
    groupsClosed: [],
  },
  "6:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "7:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "7:PV1": {
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "8:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "8:PV1": {
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "9:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "9:TQ1": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "12:CSS": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
    groupsClosed: [],
  },
  "13:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "14:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "14:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
    groupsClosed: [],
  },
  "14:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "15:TQ1": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "16:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "16:TQ1": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsClosed: [],
  },
  "17:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "17:OBR": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "19:TQ1": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "20:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "20:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
    groupsClosed: [],
  },
  "20:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "20:CSS": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "20:CSP": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "20:PID": {
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
