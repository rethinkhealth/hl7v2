// Generated profile automaton for DEO_O45 (v2.8.2)

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
  "10:NTE": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
  },
  "10:OBR": {
    groupsClosed: ["DEO_O45/DONOR", "DEO_O45/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DEO_O45/DONATION_ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
  },
  "11:NTE": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
  },
  "11:OBR": {
    groupsClosed: ["DEO_O45/DONOR", "DEO_O45/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DEO_O45/DONATION_ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONATION_ORDER"],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONATION_ORDER/DONATION_OBSERVATION"],
  },
  "13:OBR": {
    groupsClosed: ["DEO_O45/DONOR", "DEO_O45/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DEO_O45/DONATION_ORDER"],
  },
  "1:OBR": {
    groupsClosed: ["DEO_O45/DONOR"],
    groupsOpened: ["DEO_O45/DONATION_ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONOR"],
  },
  "2:OBR": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONATION_ORDER"],
  },
  "2:OBX": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONATION_ORDER/DONATION_OBSERVATION"],
  },
  "3:NTE": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
  },
  "3:OBR": {
    groupsClosed: ["DEO_O45/DONOR", "DEO_O45/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DEO_O45/DONATION_ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
  },
  "4:OBR": {
    groupsClosed: ["DEO_O45/DONOR"],
    groupsOpened: ["DEO_O45/DONATION_ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONOR"],
  },
  "5:OBR": {
    groupsClosed: ["DEO_O45/DONOR"],
    groupsOpened: ["DEO_O45/DONATION_ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONOR"],
  },
  "6:OBR": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONATION_ORDER"],
  },
  "6:OBX": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONATION_ORDER/DONATION_OBSERVATION"],
  },
  "7:OBR": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONATION_ORDER"],
  },
  "7:OBX": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONATION_ORDER/DONATION_OBSERVATION"],
  },
  "8:NTE": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
  },
  "8:OBR": {
    groupsClosed: ["DEO_O45/DONOR", "DEO_O45/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DEO_O45/DONATION_ORDER"],
  },
  "8:PV1": {
    groupsClosed: [],
    groupsOpened: ["DEO_O45/DONOR/DONOR_REGISTRATION"],
  },
  "9:OBR": {
    groupsClosed: ["DEO_O45/DONOR", "DEO_O45/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DEO_O45/DONATION_ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
