// Generated profile automaton for BTS_O31 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([7, 14, 15, 19]);
export const alphabet = new Set<string>([
  "BPO",
  "BTX",
  "MSH",
  "NTE",
  "ORC",
  "PD1",
  "PID",
  "PRT",
  "PV1",
  "PV2",
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
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["BPO", 7],
      ["PRT", 9],
      ["TQ1", 8],
    ]),
  ],
  [
    3,
    new Map([
      ["NTE", 11],
      ["ORC", 2],
      ["PD1", 13],
      ["PRT", 12],
      ["PV1", 10],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["BTX", 14],
      ["NTE", 15],
      ["ORC", 2],
    ]),
  ],
  [
    8,
    new Map([
      ["BPO", 7],
      ["TQ1", 8],
      ["TQ2", 16],
    ]),
  ],
  [
    9,
    new Map([
      ["BPO", 7],
      ["PRT", 9],
      ["TQ1", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 2],
      ["PRT", 17],
      ["PV2", 18],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 11],
      ["ORC", 2],
      ["PV1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 11],
      ["ORC", 2],
      ["PRT", 12],
      ["PV1", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 11],
      ["ORC", 2],
      ["PRT", 12],
      ["PV1", 10],
    ]),
  ],
  [
    14,
    new Map([
      ["BTX", 14],
      ["NTE", 19],
      ["ORC", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["BTX", 14],
      ["NTE", 15],
      ["ORC", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["BPO", 7],
      ["TQ1", 8],
      ["TQ2", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["ORC", 2],
      ["PRT", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["ORC", 2],
      ["PRT", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["BTX", 14],
      ["NTE", 19],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "12:PV1": {
    groupsOpened: ["BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:BTX": {
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "15:BTX": {
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "16:BPO": {
    groupsOpened: [],
    groupsClosed: ["BTS_O31/ORDER/TIMING"],
  },
  "16:TQ1": {
    groupsOpened: ["BTS_O31/ORDER/TIMING"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "18:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "19:BTX": {
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "1:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["BTS_O31/PATIENT"],
    groupsClosed: [],
  },
  "2:BPO": {
    groupsOpened: [],
    groupsClosed: ["BTS_O31/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["BTS_O31/ORDER/TIMING"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["BTS_O31/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["BTS_O31/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["BTS_O31/PATIENT"],
    groupsClosed: [],
  },
  "7:BTX": {
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "8:BPO": {
    groupsOpened: [],
    groupsClosed: ["BTS_O31/ORDER/TIMING"],
  },
  "8:TQ1": {
    groupsOpened: ["BTS_O31/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:BPO": {
    groupsOpened: [],
    groupsClosed: ["BTS_O31/ORDER/TIMING"],
  },
  "9:TQ1": {
    groupsOpened: ["BTS_O31/ORDER/TIMING"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
