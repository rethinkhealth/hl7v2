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
  "10:ORC": {
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/PATIENT/PATIENT_VISIT"],
  },
  "11:BTX": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "11:ORC": {
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "12:BTX": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "12:ORC": {
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "13:BPO": {
    groupsClosed: ["BTS_O31/ORDER/TIMING"],
    groupsOpened: [],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
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
  "6:BTX": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/PRODUCT_STATUS"],
  },
  "6:ORC": {
    groupsClosed: ["BTS_O31/ORDER/PRODUCT_STATUS"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "7:BPO": {
    groupsClosed: ["BTS_O31/ORDER/TIMING"],
    groupsOpened: [],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/ORDER/TIMING"],
  },
  "8:ORC": {
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "9:ORC": {
    groupsClosed: ["BTS_O31/PATIENT", "BTS_O31/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BTS_O31/ORDER"],
  },
  "9:PV1": {
    groupsClosed: [],
    groupsOpened: ["BTS_O31/PATIENT/PATIENT_VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
