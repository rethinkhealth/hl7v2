// Generated profile automaton for BPS_O29 (v2.6)

export const start = 0;
export const finals = new Set<number>([7, 12, 13, 16]);
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
      ["BPX", 12],
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
      ["BPX", 12],
      ["NTE", 16],
      ["ORC", 2],
    ]),
  ],
  [
    13,
    new Map([
      ["BPX", 12],
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
      ["BPX", 12],
      ["NTE", 16],
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
  "11:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "11:PV1": {
    groupsOpened: ["BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:BPX": {
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
  },
  "13:BPX": {
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
  },
  "14:BPO": {
    groupsOpened: [],
    groupsClosed: ["BPS_O29/ORDER/TIMING"],
  },
  "14:TQ1": {
    groupsOpened: ["BPS_O29/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "16:BPX": {
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
    groupsClosed: [],
  },
  "16:ORC": {
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
  "6:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["BPS_O29/PATIENT"],
    groupsClosed: [],
  },
  "7:BPX": {
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
  },
  "8:BPO": {
    groupsOpened: [],
    groupsClosed: ["BPS_O29/ORDER/TIMING"],
  },
  "8:TQ1": {
    groupsOpened: ["BPS_O29/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
