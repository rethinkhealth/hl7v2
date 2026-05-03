// Generated profile automaton for BTS_O31 (v2.6)

export const start = 0;
export const finals = new Set<number>([7, 12, 13, 16]);
export const alphabet = new Set<string>([
  "BPO",
  "BTX",
  "MSH",
  "NTE",
  "ORC",
  "PD1",
  "PID",
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
      ["TQ1", 8],
    ]),
  ],
  [
    3,
    new Map([
      ["NTE", 10],
      ["ORC", 2],
      ["PD1", 11],
      ["PV1", 9],
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
      ["BTX", 12],
      ["NTE", 13],
      ["ORC", 2],
    ]),
  ],
  [
    8,
    new Map([
      ["BPO", 7],
      ["TQ1", 8],
      ["TQ2", 14],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 2],
      ["PV2", 15],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 10],
      ["ORC", 2],
      ["PV1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 10],
      ["ORC", 2],
      ["PV1", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["BTX", 12],
      ["NTE", 16],
      ["ORC", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["BTX", 12],
      ["NTE", 13],
      ["ORC", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["BPO", 7],
      ["TQ1", 8],
      ["TQ2", 14],
    ]),
  ],
  [15, new Map([["ORC", 2]])],
  [
    16,
    new Map([
      ["BTX", 12],
      ["NTE", 16],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "11:ORC": {
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "12:BTX": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "12:ORC": {
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "13:BTX": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "13:ORC": {
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "14:BPO": {
    groupsClosed: ["BTS_O31/ORDER/TIMING"],
    groupsOpened: [],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/TIMING"],
  },
  "15:ORC": {
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "16:BTX": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "16:ORC": {
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
  "9:ORC": {
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
