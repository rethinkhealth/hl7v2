// Generated profile automaton for BTS_O31 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([6, 11, 12, 15]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [
    2,
    new Map([
      ["BPO", 6],
      ["TQ1", 7],
    ]),
  ],
  [
    3,
    new Map([
      ["NTE", 9],
      ["ORC", 2],
      ["PD1", 10],
      ["PV1", 8],
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
      ["SFT", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["BTX", 11],
      ["NTE", 12],
      ["ORC", 2],
    ]),
  ],
  [
    7,
    new Map([
      ["BPO", 6],
      ["TQ1", 7],
      ["TQ2", 13],
    ]),
  ],
  [
    8,
    new Map([
      ["ORC", 2],
      ["PV2", 14],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 9],
      ["ORC", 2],
      ["PV1", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 9],
      ["ORC", 2],
      ["PV1", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["BTX", 11],
      ["NTE", 15],
      ["ORC", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["BTX", 11],
      ["NTE", 12],
      ["ORC", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["BPO", 6],
      ["TQ1", 7],
      ["TQ2", 13],
    ]),
  ],
  [14, new Map([["ORC", 2]])],
  [
    15,
    new Map([
      ["BTX", 11],
      ["NTE", 15],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
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
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "6:BTX": {
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsClosed: [],
  },
  "7:TQ1": {
    groupsOpened: ["BTS_O31/ORDER/TIMING"],
    groupsClosed: [],
  },
  "7:BPO": {
    groupsOpened: [],
    groupsClosed: ["BTS_O31/ORDER/TIMING"],
  },
  "8:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "9:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "9:PV1": {
    groupsOpened: ["BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "10:PV1": {
    groupsOpened: ["BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "11:BTX": {
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "12:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "12:BTX": {
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsClosed: [],
  },
  "13:TQ1": {
    groupsOpened: ["BTS_O31/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:BPO": {
    groupsOpened: [],
    groupsClosed: ["BTS_O31/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "15:BTX": {
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["BTS_O31/ORDER"],
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
