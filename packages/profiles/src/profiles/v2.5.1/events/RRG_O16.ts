// Generated profile automaton for RRG_O16 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 9, 12, 13, 15]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "RXC",
  "RXG",
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
      ["RXG", 8],
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
  [8, new Map([["TQ1", 11]])],
  [
    9,
    new Map([
      ["ORC", 3],
      ["RXG", 8],
      ["TQ1", 9],
      ["TQ2", 12],
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
      ["RXR", 13],
      ["TQ1", 11],
      ["TQ2", 14],
    ]),
  ],
  [
    12,
    new Map([
      ["ORC", 3],
      ["RXG", 8],
      ["TQ1", 9],
      ["TQ2", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["ORC", 3],
      ["RXC", 15],
      ["RXR", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["RXR", 13],
      ["TQ1", 11],
      ["TQ2", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["ORC", 3],
      ["RXC", 15],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
  },
  "11:RXR": {
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
    groupsOpened: [],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
  },
  "12:RXG": {
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/TIMING"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
  },
  "14:RXR": {
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
    groupsOpened: [],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
  },
  "2:ORC": {
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/PATIENT"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
  },
  "3:RXG": {
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE"],
  },
  "3:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/TIMING"],
  },
  "4:ORC": {
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/PATIENT"],
  },
  "7:ORC": {
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/PATIENT"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
  },
  "9:RXG": {
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
