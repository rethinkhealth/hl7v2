// Generated profile automaton for ORP_O10 (v2.5)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 9, 11, 13, 14, 15]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 7],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 6],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 3],
      ["RXO", 8],
      ["TQ1", 9],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 10],
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
      ["SFT", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["ERR", 7],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 12],
      ["RXR", 11],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 3],
      ["RXO", 8],
      ["TQ1", 9],
      ["TQ2", 13],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 10],
      ["ORC", 3],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 3],
      ["RXC", 14],
      ["RXR", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["RXR", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["ORC", 3],
      ["RXO", 8],
      ["TQ1", 9],
      ["TQ2", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 15],
      ["ORC", 3],
      ["RXC", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 15],
      ["ORC", 3],
      ["RXC", 14],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "11:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "11:RXC": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "13:RXO": {
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "14:RXC": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "15:ORC": {
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "15:RXC": {
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
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
  },
  "9:RXO": {
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
