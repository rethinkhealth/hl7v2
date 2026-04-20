// Generated profile automaton for ORP_O10 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 5, 6, 7, 8, 10, 11, 13, 16, 17, 18,
]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "PRT",
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
      ["PRT", 11],
      ["RXO", 9],
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
      ["PRT", 15],
      ["RXR", 13],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 3],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 16],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 3],
      ["PRT", 11],
      ["RXO", 9],
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
      ["RXC", 17],
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
      ["NTE", 14],
      ["PRT", 15],
      ["RXR", 13],
    ]),
  ],
  [
    16,
    new Map([
      ["ORC", 3],
      ["RXO", 9],
      ["TQ1", 10],
      ["TQ2", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 18],
      ["ORC", 3],
      ["RXC", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["NTE", 18],
      ["ORC", 3],
      ["RXC", 17],
    ]),
  ],
]);
export const effects = {
  "2:ORC": {
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/ORDER"],
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:RXO": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/TIMING"],
  },
  "3:TQ1": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/ORDER"],
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/ORDER"],
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/ORDER"],
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/ORDER"],
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["ORP_O10/RESPONSE", "ORP_O10/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "10:TQ1": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "10:RXO": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:RXO": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/TIMING"],
  },
  "11:TQ1": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
    groupsClosed: ["ORP_O10/RESPONSE/PATIENT"],
  },
  "13:ORC": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "13:RXC": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "16:TQ1": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "16:RXO": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/TIMING"],
  },
  "17:RXC": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
  },
  "18:RXC": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["ORP_O10/RESPONSE/ORDER"],
    groupsClosed: ["ORP_O10/RESPONSE/ORDER/ORDER_DETAIL/COMPONENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
