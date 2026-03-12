// Generated profile automaton for RRG_O16 (v2.7)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 8, 10, 11, 14, 15, 17]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "PRT",
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
      ["PRT", 11],
      ["RXG", 9],
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
  [9, new Map([["TQ1", 13]])],
  [
    10,
    new Map([
      ["ORC", 3],
      ["RXG", 9],
      ["TQ1", 10],
      ["TQ2", 14],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 3],
      ["PRT", 11],
      ["RXG", 9],
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
      ["RXR", 15],
      ["TQ1", 13],
      ["TQ2", 16],
    ]),
  ],
  [
    14,
    new Map([
      ["ORC", 3],
      ["RXG", 9],
      ["TQ1", 10],
      ["TQ2", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["ORC", 3],
      ["RXC", 17],
      ["RXR", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["RXR", 15],
      ["TQ1", 13],
      ["TQ2", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["ORC", 3],
      ["RXC", 17],
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
    groupsClosed: [],
  },
  "11:RXG": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE"],
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/TIMING"],
  },
  "11:TQ1": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
  },
  "13:RXR": {
    groupsOpened: [],
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
  },
  "13:TQ1": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "14:RXG": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE"],
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/TIMING"],
  },
  "14:TQ1": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "16:RXR": {
    groupsOpened: [],
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
  },
  "16:TQ1": {
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
    groupsClosed: [],
  },
  "17:ORC": {
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
