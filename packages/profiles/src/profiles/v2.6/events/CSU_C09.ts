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
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "12:CSS": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "13:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
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
  "15:OBX": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "16:OBX": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "17:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [],
  },
  "17:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "19:OBX": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT"],
  },
  "20:CSP": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
  },
  "20:CSS": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
  },
  "20:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
    ],
  },
  "20:PID": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT"],
  },
  "20:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
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
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT"],
  },
  "5:CSP": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
  },
  "5:CSS": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
    ],
  },
  "5:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "5:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "6:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "7:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "7:PV1": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
  },
  "8:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "8:PV1": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
  },
  "9:OBX": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "9:TQ1": {
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
