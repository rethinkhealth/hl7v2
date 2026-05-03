// Generated profile automaton for RRD_O14 (v2.7)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 8, 9, 11, 13, 15, 16]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "PRT",
  "RXC",
  "RXD",
  "RXR",
  "SFT",
  "TQ1",
  "TQ2",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 8],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 3],
      ["PRT", 9],
      ["RXD", 10],
      ["TQ1", 11],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 12],
      ["ORC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ERR", 8],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 3],
      ["PRT", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 14],
      ["RXR", 13],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 3],
      ["PRT", 9],
      ["RXD", 10],
      ["TQ1", 11],
      ["TQ2", 15],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["ORC", 3],
    ]),
  ],
  [
    13,
    new Map([
      ["ORC", 3],
      ["PRT", 9],
      ["RXC", 16],
      ["RXR", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["RXR", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["ORC", 3],
      ["PRT", 9],
      ["RXD", 10],
      ["TQ1", 11],
      ["TQ2", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["ORC", 3],
      ["PRT", 9],
      ["RXC", 16],
    ]),
  ],
]);
export const effects = {
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
  },
  "11:PRT": {
    groupsClosed: [
      "RRD_O14/RESPONSE/ORDER/DISPENSE",
      "RRD_O14/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "11:RXD": {
    groupsClosed: ["RRD_O14/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/DISPENSE"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
  },
  "13:PRT": {
    groupsClosed: ["RRD_O14/RESPONSE/ORDER/DISPENSE"],
    groupsOpened: [],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
  },
  "15:PRT": {
    groupsClosed: [
      "RRD_O14/RESPONSE/ORDER/DISPENSE",
      "RRD_O14/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "15:RXD": {
    groupsClosed: ["RRD_O14/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/DISPENSE"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/TIMING"],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
  },
  "16:PRT": {
    groupsClosed: ["RRD_O14/RESPONSE/ORDER/DISPENSE"],
    groupsOpened: [],
  },
  "2:ORC": {
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
  },
  "3:PRT": {
    groupsClosed: [
      "RRD_O14/RESPONSE/ORDER/DISPENSE",
      "RRD_O14/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "3:RXD": {
    groupsClosed: ["RRD_O14/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/DISPENSE"],
  },
  "3:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/TIMING"],
  },
  "4:ORC": {
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
  },
  "7:ORC": {
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
