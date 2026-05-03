// Generated profile automaton for RRG_O16 (v2.6)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 8, 10, 13, 14, 16]);
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
      ["RXG", 9],
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
  [9, new Map([["TQ1", 12]])],
  [
    10,
    new Map([
      ["ORC", 3],
      ["RXG", 9],
      ["TQ1", 10],
      ["TQ2", 13],
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
      ["RXR", 14],
      ["TQ1", 12],
      ["TQ2", 15],
    ]),
  ],
  [
    13,
    new Map([
      ["ORC", 3],
      ["RXG", 9],
      ["TQ1", 10],
      ["TQ2", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["ORC", 3],
      ["RXC", 16],
      ["RXR", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["RXR", 14],
      ["TQ1", 12],
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
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
  },
  "10:RXG": {
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
  },
  "12:RXR": {
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
    groupsOpened: [],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
  },
  "13:RXG": {
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
  },
  "15:RXR": {
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
    groupsOpened: [],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
  },
  "16:ORC": {
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
  "8:ORC": {
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/PATIENT"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
