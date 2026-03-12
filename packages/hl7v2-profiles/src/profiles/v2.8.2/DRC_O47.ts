// Generated profile automaton for DRC_O47 (v2.8.2)

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
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "10:PV1": {
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "11:NTE": {
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "11:PV1": {
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "12:NTE": {
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "12:PV1": {
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "1:OBR": {
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
    groupsClosed: ["DRC_O47/DONOR"],
  },
  "1:PID": {
    groupsOpened: ["DRC_O47/DONOR"],
    groupsClosed: [],
  },
  "2:OBR": {
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
    groupsClosed: [],
  },
  "3:NTE": {
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "3:OBR": {
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "3:PV1": {
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "4:OBR": {
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
    groupsClosed: ["DRC_O47/DONOR"],
  },
  "4:PID": {
    groupsOpened: ["DRC_O47/DONOR"],
    groupsClosed: [],
  },
  "5:OBR": {
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
    groupsClosed: ["DRC_O47/DONOR"],
  },
  "5:PID": {
    groupsOpened: ["DRC_O47/DONOR"],
    groupsClosed: [],
  },
  "6:OBR": {
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
    groupsClosed: [],
  },
  "7:NTE": {
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "7:OBR": {
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "7:PV1": {
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "9:NTE": {
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["DRC_O47/DONATION_ORDER"],
    groupsClosed: ["DRC_O47/DONOR", "DRC_O47/DONOR/DONOR_REGISTRATION"],
  },
  "9:PV1": {
    groupsOpened: ["DRC_O47/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
