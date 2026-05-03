// Generated profile automaton for BPS_O29 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([6, 11, 12, 15]);
export const alphabet = new Set<string>([
  "BPO",
  "BPX",
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
      ["BPX", 11],
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
      ["BPX", 11],
      ["NTE", 15],
      ["ORC", 2],
    ]),
  ],
  [
    12,
    new Map([
      ["BPX", 11],
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
      ["BPX", 11],
      ["NTE", 15],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "11:BPX": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
  },
  "11:ORC": {
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "12:BPX": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
  },
  "12:ORC": {
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "13:BPO": {
    groupsClosed: ["BPS_O29/ORDER/TIMING"],
    groupsOpened: [],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "15:BPX": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
  },
  "15:ORC": {
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "1:ORC": {
    groupsClosed: ["BPS_O29/PATIENT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/PATIENT"],
  },
  "2:BPO": {
    groupsClosed: ["BPS_O29/ORDER/TIMING"],
    groupsOpened: [],
  },
  "2:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/ORDER/TIMING"],
  },
  "3:ORC": {
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["BPS_O29/PATIENT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/PATIENT"],
  },
  "5:ORC": {
    groupsClosed: ["BPS_O29/PATIENT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/PATIENT"],
  },
  "6:BPX": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
  },
  "6:ORC": {
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "7:BPO": {
    groupsClosed: ["BPS_O29/ORDER/TIMING"],
    groupsOpened: [],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/ORDER/TIMING"],
  },
  "8:ORC": {
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "9:ORC": {
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "9:PV1": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/PATIENT/PATIENT_VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
