// Generated profile automaton for BPS_O29 (v2.5)

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
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "10:PV1": {
    groupsOpened: ["BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "11:BPX": {
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
  },
  "12:BPX": {
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
  },
  "13:BPO": {
    groupsOpened: [],
    groupsClosed: ["BPS_O29/ORDER/TIMING"],
  },
  "13:TQ1": {
    groupsOpened: ["BPS_O29/ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "15:BPX": {
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
  },
  "1:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["BPS_O29/PATIENT"],
    groupsClosed: [],
  },
  "2:BPO": {
    groupsOpened: [],
    groupsClosed: ["BPS_O29/ORDER/TIMING"],
  },
  "2:TQ1": {
    groupsOpened: ["BPS_O29/ORDER/TIMING"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["BPS_O29/PATIENT"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["BPS_O29/PATIENT"],
    groupsClosed: [],
  },
  "6:BPX": {
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
  },
  "7:BPO": {
    groupsOpened: [],
    groupsClosed: ["BPS_O29/ORDER/TIMING"],
  },
  "7:TQ1": {
    groupsOpened: ["BPS_O29/ORDER/TIMING"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "9:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "9:PV1": {
    groupsOpened: ["BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
