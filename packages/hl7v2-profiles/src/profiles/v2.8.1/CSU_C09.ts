// Generated profile automaton for CSU_C09 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([26, 27]);
export const alphabet = new Set<string>([
  "ARV",
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
      ["ARV", 8],
      ["CSR", 5],
      ["NTE", 7],
      ["PD1", 10],
      ["PRT", 9],
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
      ["CSP", 14],
      ["CSS", 13],
      ["OBR", 11],
      ["ORC", 12],
    ]),
  ],
  [
    6,
    new Map([
      ["CSR", 5],
      ["PRT", 15],
      ["PV2", 16],
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
      ["ARV", 8],
      ["CSR", 5],
      ["NTE", 7],
      ["PV1", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["ARV", 8],
      ["CSR", 5],
      ["NTE", 7],
      ["PRT", 9],
      ["PV1", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["ARV", 8],
      ["CSR", 5],
      ["NTE", 7],
      ["PRT", 9],
      ["PV1", 6],
    ]),
  ],
  [
    11,
    new Map([
      ["OBX", 17],
      ["PRT", 19],
      ["TQ1", 18],
    ]),
  ],
  [
    12,
    new Map([
      ["OBR", 11],
      ["PRT", 20],
    ]),
  ],
  [
    13,
    new Map([
      ["OBR", 11],
      ["ORC", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["CSS", 13],
      ["OBR", 11],
      ["ORC", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["CSR", 5],
      ["PRT", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["CSR", 5],
      ["PRT", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["OBR", 11],
      ["ORC", 21],
      ["PRT", 23],
      ["RXA", 22],
    ]),
  ],
  [
    18,
    new Map([
      ["OBX", 17],
      ["TQ1", 18],
      ["TQ2", 24],
    ]),
  ],
  [
    19,
    new Map([
      ["OBX", 17],
      ["PRT", 19],
      ["TQ1", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["OBR", 11],
      ["PRT", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["OBR", 11],
      ["PRT", 25],
      ["RXA", 22],
    ]),
  ],
  [22, new Map([["RXR", 26]])],
  [
    23,
    new Map([
      ["OBR", 11],
      ["ORC", 21],
      ["PRT", 23],
      ["RXA", 22],
    ]),
  ],
  [
    24,
    new Map([
      ["OBX", 17],
      ["TQ1", 18],
      ["TQ2", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["OBR", 11],
      ["PRT", 25],
      ["RXA", 22],
    ]),
  ],
  [
    26,
    new Map([
      ["CSP", 14],
      ["CSS", 13],
      ["OBR", 11],
      ["ORC", 21],
      ["PID", 2],
      ["PRT", 27],
      ["RXA", 22],
    ]),
  ],
  [
    27,
    new Map([
      ["CSP", 14],
      ["CSS", 13],
      ["OBR", 11],
      ["ORC", 21],
      ["PID", 2],
      ["PRT", 27],
      ["RXA", 22],
    ]),
  ],
]);
export const effects = {
  "10:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "10:PV1": {
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "11:TQ1": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
    ],
  },
  "13:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
    ],
  },
  "13:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
    ],
    groupsClosed: [],
  },
  "14:CSS": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
    groupsClosed: [],
  },
  "14:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
    ],
  },
  "14:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
    ],
    groupsClosed: [],
  },
  "15:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "16:CSR": {
    groupsOpened: [],
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
  },
  "17:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "17:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
    groupsClosed: [],
  },
  "17:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
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
  "19:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "19:TQ1": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsClosed: [],
  },
  "1:PID": {
    groupsOpened: ["CSU_C09/PATIENT"],
    groupsClosed: [],
  },
  "20:OBR": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
    ],
  },
  "21:OBR": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "21:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
  },
  "23:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "23:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
    groupsClosed: [],
  },
  "23:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
  },
  "24:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "24:TQ1": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsClosed: [],
  },
  "25:OBR": {
    groupsOpened: [],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
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
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
  },
  "26:CSP": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "26:CSS": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "26:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "26:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
    groupsClosed: [],
  },
  "26:PID": {
    groupsOpened: ["CSU_C09/PATIENT"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "26:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
  },
  "27:CSP": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "27:CSS": {
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "27:OBR": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "27:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
    groupsClosed: [],
  },
  "27:PID": {
    groupsOpened: ["CSU_C09/PATIENT"],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "27:RXA": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
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
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
    ],
  },
  "5:ORC": {
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
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
