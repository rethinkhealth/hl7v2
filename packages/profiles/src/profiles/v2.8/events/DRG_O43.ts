// Generated profile automaton for DRG_O43 (v2.8)

export const start = 0;
export const finals = new Set<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "MSH",
  "NTE",
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
      ["PID", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["AL1", 8],
      ["ARV", 7],
      ["NTE", 5],
      ["OBX", 9],
      ["PD1", 10],
      ["PV1", 6],
    ]),
  ],
  [3, new Map([["PID", 2]])],
  [
    4,
    new Map([
      ["PID", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["AL1", 8],
      ["ARV", 7],
      ["NTE", 5],
      ["PV1", 6],
    ]),
  ],
  [6, new Map([["NTE", 11]])],
  [
    7,
    new Map([
      ["ARV", 7],
      ["NTE", 11],
      ["PV1", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["AL1", 8],
      ["ARV", 7],
      ["NTE", 11],
      ["PV1", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 8],
      ["ARV", 7],
      ["NTE", 5],
      ["OBX", 9],
      ["PV1", 6],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 8],
      ["ARV", 7],
      ["NTE", 5],
      ["OBX", 9],
      ["PV1", 6],
    ]),
  ],
  [11, new Map([["NTE", 11]])],
]);
export const effects = {
  "10:NTE": {
    groupsClosed: [],
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["DRG_O43/DONOR"],
  },
  "2:NTE": {
    groupsClosed: [],
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
  },
  "2:PV1": {
    groupsClosed: [],
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["DRG_O43/DONOR"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["DRG_O43/DONOR"],
  },
  "5:NTE": {
    groupsClosed: [],
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
  },
  "5:PV1": {
    groupsClosed: [],
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
  },
  "7:NTE": {
    groupsClosed: [],
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
  },
  "7:PV1": {
    groupsClosed: [],
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
  },
  "8:NTE": {
    groupsClosed: [],
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
  },
  "8:PV1": {
    groupsClosed: [],
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
  },
  "9:NTE": {
    groupsClosed: [],
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
  },
  "9:PV1": {
    groupsClosed: [],
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
