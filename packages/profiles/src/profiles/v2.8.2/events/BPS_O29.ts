// Generated profile automaton for BPS_O29 (v2.8.2)

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
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "11:ORC": {
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "12:ORC": {
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "13:ORC": {
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "14:ORC": {
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/PATIENT/PATIENT_VISIT"],
  },
  "15:BPX": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
  },
  "15:ORC": {
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "16:BPX": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
  },
  "16:ORC": {
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "17:BPO": {
    groupsClosed: ["BPS_O29/ORDER/TIMING"],
    groupsOpened: [],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/ORDER/TIMING"],
  },
  "18:ORC": {
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "19:ORC": {
    groupsClosed: ["BPS_O29/PATIENT", "BPS_O29/PATIENT/PATIENT_VISIT"],
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
  "20:BPX": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
  },
  "20:ORC": {
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
    groupsOpened: ["BPS_O29/ORDER"],
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
  "6:ORC": {
    groupsClosed: ["BPS_O29/PATIENT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/PATIENT"],
  },
  "7:BPX": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/ORDER/PRODUCT"],
  },
  "7:ORC": {
    groupsClosed: ["BPS_O29/ORDER/PRODUCT"],
    groupsOpened: ["BPS_O29/ORDER"],
  },
  "8:BPO": {
    groupsClosed: ["BPS_O29/ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/ORDER/TIMING"],
  },
  "9:BPO": {
    groupsClosed: ["BPS_O29/ORDER/TIMING"],
    groupsOpened: [],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BPS_O29/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
