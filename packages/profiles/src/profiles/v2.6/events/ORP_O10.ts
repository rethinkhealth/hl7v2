// Generated profile automaton for ORP_O10 (v2.6)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 8, 10, 12, 14, 15, 16]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "RXC",
  "RXO",
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
      ["RXO", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 11],
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
      ["NTE", 13],
      ["RXR", 12],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 3],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 14],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 11],
      ["ORC", 3],
    ]),
  ],
  [
    12,
    new Map([
      ["ORC", 3],
      ["RXC", 15],
      ["RXR", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["RXR", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["ORC", 3],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 16],
      ["ORC", 3],
      ["RXC", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 16],
      ["ORC", 3],
      ["RXC", 15],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "10:RXO": {
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "12:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "12:RXC": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "14:RXO": {
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/TIMING"],
  },
  "15:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "15:RXC": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "16:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "16:RXC": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "2:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/PATIENT"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "3:RXO": {
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "3:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/TIMING"],
  },
  "4:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/PATIENT"],
  },
  "7:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
