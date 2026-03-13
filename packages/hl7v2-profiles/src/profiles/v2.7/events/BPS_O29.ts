// Generated profile automaton for BPS_O29 (v2.7)

export const start = 0;
export const finals = new Set<number>([7, 13, 14, 17]);
export const alphabet = new Set<string>([
  "BPO",
  "BPX",
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
      ["TQ1", 8],
    ]),
  ],
  [
    3,
    new Map([
      ["NTE", 10],
      ["ORC", 2],
      ["PD1", 12],
      ["PRT", 11],
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
      ["BPX", 13],
      ["NTE", 14],
      ["ORC", 2],
    ]),
  ],
  [
    8,
    new Map([
      ["BPO", 7],
      ["TQ1", 8],
      ["TQ2", 15],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 2],
      ["PV2", 16],
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
      ["PRT", 11],
      ["PV1", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 10],
      ["ORC", 2],
      ["PRT", 11],
      ["PV1", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["BPX", 13],
      ["NTE", 17],
      ["ORC", 2],
    ]),
  ],
  [
    14,
    new Map([
      ["BPX", 13],
      ["NTE", 14],
      ["ORC", 2],
    ]),
  ],
  [
    15,
    new Map([
      ["BPO", 7],
      ["TQ1", 8],
      ["TQ2", 15],
    ]),
  ],
  [16, new Map([["ORC", 2]])],
  [
    17,
    new Map([
      ["BPX", 13],
      ["NTE", 17],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
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
  "7:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
  },
  "7:BPX": {
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
    groupsClosed: [],
  },
  "8:TQ1": {
    groupsOpened: ["BPS_O29/ORDER/TIMING"],
    groupsClosed: [],
  },
  "8:BPO": {
    groupsOpened: [],
    groupsClosed: ["BPS_O29/ORDER/TIMING"],
  },
  "9:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
  },
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
  "12:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "12:PV1": {
    groupsOpened: ["BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "13:BPX": {
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
  },
  "14:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
  },
  "14:BPX": {
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: ["BPS_O29/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:BPO": {
    groupsOpened: [],
    groupsClosed: ["BPS_O29/ORDER/TIMING"],
  },
  "16:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "17:BPX": {
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
