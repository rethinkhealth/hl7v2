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
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
  },
  "11:OBX": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "12:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
    ],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
    ],
  },
  "14:CSS": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
  },
  "14:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
    ],
  },
  "15:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "16:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "17:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
  },
  "17:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "18:OBX": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
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
  "20:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
    ],
    groupsOpened: [],
  },
  "21:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [],
  },
  "21:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "23:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "23:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
  },
  "23:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "24:OBX": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
    groupsOpened: [],
  },
  "24:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/TIMING_QTY",
    ],
  },
  "25:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [],
  },
  "25:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "26:CSP": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
  },
  "26:CSS": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
  },
  "26:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "26:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
  },
  "26:PID": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT"],
  },
  "26:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
  },
  "27:CSP": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE"],
  },
  "27:CSS": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE"],
  },
  "27:OBR": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
    ],
  },
  "27:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
    ],
  },
  "27:PID": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/RX_ADMIN",
    ],
    groupsOpened: ["CSU_C09/PATIENT"],
  },
  "27:RXA": {
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_PHARM/COMMON_ORDER",
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
    groupsClosed: [
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
    ],
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
      "CSU_C09/PATIENT/STUDY_PHASE/STUDY_SCHEDULE/STUDY_OBSERVATION/STUDY_OBSERVATION_ORDER",
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
  "9:CSR": {
    groupsClosed: ["CSU_C09/PATIENT/VISIT"],
    groupsOpened: [],
  },
  "9:PV1": {
    groupsClosed: [],
    groupsOpened: ["CSU_C09/PATIENT/VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
