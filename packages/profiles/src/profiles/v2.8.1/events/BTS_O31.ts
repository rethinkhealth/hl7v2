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
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "11:ORC": {
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "14:BTX": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "14:ORC": {
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "15:BTX": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "15:ORC": {
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "16:BPO": {
    groupsClosed: ["BTS_O31/ORDER/TIMING"],
    groupsOpened: [],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/TIMING"],
  },
  "17:ORC": {
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "18:ORC": {
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "19:BTX": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "19:ORC": {
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "1:ORC": {
    groupsClosed: ["BTS_O31/PATIENT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/PATIENT"],
  },
  "2:BPO": {
    groupsClosed: ["BTS_O31/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/TIMING"],
  },
  "3:ORC": {
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["BTS_O31/PATIENT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: ["BTS_O31/PATIENT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["BTS_O31/PATIENT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/PATIENT"],
  },
  "7:BTX": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "7:ORC": {
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "8:BPO": {
    groupsClosed: ["BTS_O31/ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/TIMING"],
  },
  "9:BPO": {
    groupsClosed: ["BTS_O31/ORDER/TIMING"],
    groupsOpened: [],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
