// Generated profile automaton for CSU_C09 (v2.7)

export const start = 0;
export const finals = new Set<number>([24, 25]);
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
  "PRT",
  "PV1",
  "PV2",
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
      ["PD1", 9],
      ["PRT", 8],
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
      ["CSP", 13],
      ["CSS", 12],
      ["OBR", 10],
      ["ORC", 11],
    ]),
  ],
  [
    6,
    new Map([
      ["CSR", 5],
      ["PRT", 14],
      ["PV2", 15],
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
      ["PRT", 8],
      ["PV1", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["CSR", 5],
      ["NTE", 7],
      ["PRT", 8],
      ["PV1", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["OBX", 16],
      ["PRT", 18],
      ["TQ1", 17],
    ]),
  ],
  [11, new Map([["OBR", 10]])],
  [
    12,
    new Map([
      ["OBR", 10],
      ["ORC", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["CSS", 12],
      ["OBR", 10],
      ["ORC", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["CSR", 5],
      ["PRT", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["CSR", 5],
      ["PRT", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["OBR", 10],
      ["ORC", 19],
      ["PRT", 21],
      ["RXA", 20],
    ]),
  ],
  [
    17,
    new Map([
      ["OBX", 16],
      ["TQ1", 17],
      ["TQ2", 22],
    ]),
  ],
  [
    18,
    new Map([
      ["OBX", 16],
      ["PRT", 18],
      ["TQ1", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["OBR", 10],
      ["PRT", 23],
      ["RXA", 20],
    ]),
  ],
  [20, new Map([["RXR", 24]])],
  [
    21,
    new Map([
      ["OBR", 10],
      ["ORC", 19],
      ["PRT", 21],
      ["RXA", 20],
    ]),
  ],
  [
    22,
    new Map([
      ["OBX", 16],
      ["TQ1", 17],
      ["TQ2", 22],
    ]),
  ],
  [
    23,
    new Map([
      ["PRT", 23],
      ["RXA", 20],
    ]),
  ],
  [
    24,
    new Map([
      ["CSP", 13],
      ["CSS", 12],
      ["OBR", 10],
      ["ORC", 19],
      ["PID", 2],
      ["PRT", 25],
      ["RXA", 20],
    ]),
  ],
  [
    25,
    new Map([
      ["CSP", 13],
      ["CSS", 12],
      ["OBR", 10],
      ["ORC", 19],
      ["PID", 2],
      ["PRT", 25],
      ["RXA", 20],
    ]),
  ],
]);
export const effects = {
  "10:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "10:TQ1": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "13:CSS": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [],
  },
  "14:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "15:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "16:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "16:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
    groupsClosed: [],
  },
  "16:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
  },
  "17:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "17:TQ1": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "18:TQ1": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsClosed: [],
  },
  "19:OBR": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "19:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "19:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
  },
  "1:PID": {
    groupsOpened: ["CSU_C09/PATIENT"],
    groupsClosed: [],
  },
  "21:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "21:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
    groupsClosed: [],
  },
  "21:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
  },
  "22:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "22:TQ1": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsClosed: [],
  },
  "23:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
  },
  "24:CSP": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "24:CSS": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "24:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "24:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
    groupsClosed: [],
  },
  "24:PID": {
    groupsOpened: ["CSU_C09/PATIENT"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "24:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
  },
  "25:CSP": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "25:CSS": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "25:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "25:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
    groupsClosed: [],
  },
  "25:PID": {
    groupsOpened: ["CSU_C09/PATIENT"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "25:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
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
  "5:CSP": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
    groupsClosed: [],
  },
  "5:CSS": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
    ],
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
  "9:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "9:PV1": {
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
