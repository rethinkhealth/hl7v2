// Generated profile automaton for DEO_O45 (v2.8)

export const start = 0;
export const finals = new Set<number>([2, 6, 7, 12]);
export const alphabet = new Set<string>([
  "ARV",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "PID",
  "PV1",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["OBR", 2],
      ["PID", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    2,
    new Map([
      ["NTE", 7],
      ["OBR", 2],
      ["OBX", 6],
    ]),
  ],
  [
    3,
    new Map([
      ["ARV", 10],
      ["NTE", 8],
      ["OBR", 2],
      ["OBX", 11],
      ["PV1", 9],
    ]),
  ],
  [
    4,
    new Map([
      ["OBR", 2],
      ["PID", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["OBR", 2],
      ["PID", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 12],
      ["OBR", 2],
      ["OBX", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 7],
      ["OBR", 2],
      ["OBX", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 8],
      ["OBR", 2],
      ["PV1", 9],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 13],
      ["OBR", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["ARV", 10],
      ["NTE", 8],
      ["OBR", 2],
      ["PV1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["ARV", 10],
      ["NTE", 8],
      ["OBR", 2],
      ["OBX", 11],
      ["PV1", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["OBR", 2],
      ["OBX", 6],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["OBR", 2],
    ]),
  ],
]);
export const effects = {
  "1:OBR": {
    groupsOpened: ["DEO_O45/DONOR_ORDER"],
    groupsClosed: ["DEO_O45/DONOR"],
  },
  "1:PID": {
    groupsOpened: ["DEO_O45/DONOR"],
    groupsClosed: [],
  },
  "2:OBR": {
    groupsOpened: ["DEO_O45/DONOR_ORDER"],
    groupsClosed: [],
  },
  "2:OBX": {
    groupsOpened: ["DEO_O45/DONOR_ORDER/DONOR_OBSERVATION"],
    groupsClosed: [],
  },
  "3:OBR": {
    groupsOpened: ["DEO_O45/DONOR_ORDER"],
    groupsClosed: ["DEO_O45/DONOR", "DEO_O45/DONOR/DONOR_REGISTRATION"],
  },
  "3:NTE": {
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "3:PV1": {
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "4:OBR": {
    groupsOpened: ["DEO_O45/DONOR_ORDER"],
    groupsClosed: ["DEO_O45/DONOR"],
  },
  "4:PID": {
    groupsOpened: ["DEO_O45/DONOR"],
    groupsClosed: [],
  },
  "5:OBR": {
    groupsOpened: ["DEO_O45/DONOR_ORDER"],
    groupsClosed: ["DEO_O45/DONOR"],
  },
  "5:PID": {
    groupsOpened: ["DEO_O45/DONOR"],
    groupsClosed: [],
  },
  "6:OBX": {
    groupsOpened: ["DEO_O45/DONOR_ORDER/DONOR_OBSERVATION"],
    groupsClosed: [],
  },
  "6:OBR": {
    groupsOpened: ["DEO_O45/DONOR_ORDER"],
    groupsClosed: [],
  },
  "7:OBR": {
    groupsOpened: ["DEO_O45/DONOR_ORDER"],
    groupsClosed: [],
  },
  "7:OBX": {
    groupsOpened: ["DEO_O45/DONOR_ORDER/DONOR_OBSERVATION"],
    groupsClosed: [],
  },
  "8:NTE": {
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["DEO_O45/DONOR_ORDER"],
    groupsClosed: ["DEO_O45/DONOR", "DEO_O45/DONOR/DONOR_REGISTRATION"],
  },
  "8:PV1": {
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["DEO_O45/DONOR_ORDER"],
    groupsClosed: ["DEO_O45/DONOR", "DEO_O45/DONOR/DONOR_REGISTRATION"],
  },
  "10:OBR": {
    groupsOpened: ["DEO_O45/DONOR_ORDER"],
    groupsClosed: ["DEO_O45/DONOR", "DEO_O45/DONOR/DONOR_REGISTRATION"],
  },
  "10:NTE": {
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "10:PV1": {
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: ["DEO_O45/DONOR_ORDER"],
    groupsClosed: ["DEO_O45/DONOR", "DEO_O45/DONOR/DONOR_REGISTRATION"],
  },
  "11:NTE": {
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "11:PV1": {
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "12:OBX": {
    groupsOpened: ["DEO_O45/DONOR_ORDER/DONOR_OBSERVATION"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["DEO_O45/DONOR_ORDER"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: ["DEO_O45/DONOR_ORDER"],
    groupsClosed: ["DEO_O45/DONOR", "DEO_O45/DONOR/DONOR_REGISTRATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
