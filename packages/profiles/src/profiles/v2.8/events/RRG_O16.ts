// Generated profile automaton for RRG_O16 (v2.8)

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
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
  },
  "11:RXG": {
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsClosed: ["RRG_O16/RESPONSE/PATIENT"],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
  },
  "13:RXR": {
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
    groupsOpened: [],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
  },
  "14:RXG": {
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/TIMING"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER"],
  },
  "16:RXR": {
    groupsClosed: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
    groupsOpened: [],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRG_O16/RESPONSE/ORDER/GIVE/TIMING_GIVE"],
  },
  "17:ORC": {
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
