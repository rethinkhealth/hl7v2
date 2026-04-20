// Generated profile automaton for RRD_O14 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 8, 10, 11, 13, 15, 16]);
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
      ["PRT", 11],
      ["RXD", 9],
      ["TQ1", 10],
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
      ["NTE", 14],
      ["RXR", 13],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 3],
      ["RXD", 9],
      ["TQ1", 10],
      ["TQ2", 15],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 3],
      ["PRT", 11],
      ["RXD", 9],
      ["TQ1", 10],
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
      ["RXD", 9],
      ["TQ1", 10],
      ["TQ2", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["ORC", 3],
      ["RXC", 16],
    ]),
  ],
]);
export const effects = {
  "2:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:RXD": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/DISPENSE"],
    groupsClosed: ["RRD_O14/RESPONSE/ORDER/TIMING"],
  },
  "3:TQ1": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "10:TQ1": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "10:RXD": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/DISPENSE"],
    groupsClosed: ["RRD_O14/RESPONSE/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:RXD": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/DISPENSE"],
    groupsClosed: ["RRD_O14/RESPONSE/ORDER/TIMING"],
  },
  "11:TQ1": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
  },
  "13:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:RXD": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/DISPENSE"],
    groupsClosed: ["RRD_O14/RESPONSE/ORDER/TIMING"],
  },
  "16:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
