// Generated profile automaton for DRC_O47 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([2, 6]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "PD1",
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
      ["NTE", 6],
      ["OBR", 2],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 10],
      ["ARV", 9],
      ["NTE", 7],
      ["OBR", 2],
      ["OBX", 11],
      ["PD1", 12],
      ["PV1", 8],
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
      ["NTE", 6],
      ["OBR", 2],
    ]),
  ],
  [
    7,
    new Map([
      ["AL1", 10],
      ["ARV", 9],
      ["NTE", 7],
      ["OBR", 2],
      ["PV1", 8],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 13],
      ["OBR", 2],
    ]),
  ],
  [
    9,
    new Map([
      ["ARV", 9],
      ["NTE", 13],
      ["OBR", 2],
      ["PV1", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 10],
      ["ARV", 9],
      ["NTE", 13],
      ["OBR", 2],
      ["PV1", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 10],
      ["ARV", 9],
      ["NTE", 7],
      ["OBR", 2],
      ["OBX", 11],
      ["PV1", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 10],
      ["ARV", 9],
      ["NTE", 7],
      ["OBR", 2],
      ["OBX", 11],
      ["PV1", 8],
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
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "10:OBR": {
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "11:NTE": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "11:OBR": {
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "12:NTE": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "12:OBR": {
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "13:OBR": {
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
  },
  "1:OBR": {
    groupsClosed: ["DRC_O47/DONOR"],
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONOR"],
  },
  "2:OBR": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
  },
  "3:NTE": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "3:OBR": {
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "4:OBR": {
    groupsClosed: ["DRC_O47/DONOR"],
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONOR"],
  },
  "5:OBR": {
    groupsClosed: ["DRC_O47/DONOR"],
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONOR"],
  },
  "6:OBR": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
  },
  "7:NTE": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "7:OBR": {
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
  },
  "7:PV1": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "8:OBR": {
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
  },
  "9:NTE": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "9:OBR": {
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
  },
  "9:PV1": {
    groupsClosed: [],
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
