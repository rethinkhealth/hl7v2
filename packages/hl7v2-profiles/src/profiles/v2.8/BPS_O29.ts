// Generated profile automaton for BPS_O29 (v2.8)

export const start = 0;
export const finals = new Set<number>([7, 15, 16, 20]);
export const alphabet = new Set<string>([
  "ARV",
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
      ["PRT", 9],
      ["TQ1", 8],
    ]),
  ],
  [
    3,
    new Map([
      ["ARV", 12],
      ["NTE", 11],
      ["ORC", 2],
      ["PD1", 14],
      ["PRT", 13],
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
      ["BPX", 15],
      ["NTE", 16],
      ["ORC", 2],
    ]),
  ],
  [
    8,
    new Map([
      ["BPO", 7],
      ["TQ1", 8],
      ["TQ2", 17],
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
      ["PRT", 18],
      ["PV2", 19],
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
      ["ARV", 12],
      ["NTE", 11],
      ["ORC", 2],
      ["PV1", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["ARV", 12],
      ["NTE", 11],
      ["ORC", 2],
      ["PRT", 13],
      ["PV1", 10],
    ]),
  ],
  [
    14,
    new Map([
      ["ARV", 12],
      ["NTE", 11],
      ["ORC", 2],
      ["PRT", 13],
      ["PV1", 10],
    ]),
  ],
  [
    15,
    new Map([
      ["BPX", 15],
      ["NTE", 20],
      ["ORC", 2],
    ]),
  ],
  [
    16,
    new Map([
      ["BPX", 15],
      ["NTE", 16],
      ["ORC", 2],
    ]),
  ],
  [
    17,
    new Map([
      ["BPO", 7],
      ["TQ1", 8],
      ["TQ2", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["ORC", 2],
      ["PRT", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["ORC", 2],
      ["PRT", 18],
    ]),
  ],
  [
    20,
    new Map([
      ["BPX", 15],
      ["NTE", 20],
      ["ORC", 2],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
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
  "13:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "13:PV1": {
    groupsOpened: ["BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "14:PV1": {
    groupsOpened: ["BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "15:BPX": {
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
  },
  "16:BPX": {
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
  },
  "17:BPO": {
    groupsOpened: [],
    groupsClosed: ["BPS_O29/ORDER/TIMING"],
  },
  "17:TQ1": {
    groupsOpened: ["BPS_O29/ORDER/TIMING"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "19:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "1:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["BPS_O29/PATIENT"],
    groupsClosed: [],
  },
  "20:BPX": {
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["BPS_O29/ORDER"],
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
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
  "9:BPO": {
    groupsOpened: [],
    groupsClosed: ["BPS_O29/ORDER/TIMING"],
  },
  "9:TQ1": {
    groupsOpened: ["BPS_O29/ORDER/TIMING"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
