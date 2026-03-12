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
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "10:RXG": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE"],
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/TIMING"],
  },
  "10:TQ1": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
  },
  "12:RXR": {
    groupsOpened: [],
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
  },
  "12:TQ1": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "13:RXG": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE"],
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/TIMING"],
  },
  "13:TQ1": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:RXR": {
    groupsOpened: [],
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
  },
  "15:TQ1": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/ORDER"],
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:RXG": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE"],
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/TIMING"],
  },
  "3:TQ1": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/ORDER"],
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/ORDER"],
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/ORDER"],
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/ORDER"],
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["RRG_O16/RESPONSE", "RRG_O16/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:TQ1": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
