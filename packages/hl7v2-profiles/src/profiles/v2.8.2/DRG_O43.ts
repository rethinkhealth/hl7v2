// Generated profile automaton for DRG_O43 (v2.8.2)

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
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "10:PV1": {
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "1:PID": {
    groupsOpened: ["DRG_O43/DONOR"],
    groupsClosed: [],
  },
  "2:NTE": {
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "2:PV1": {
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "3:PID": {
    groupsOpened: ["DRG_O43/DONOR"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["DRG_O43/DONOR"],
    groupsClosed: [],
  },
  "5:NTE": {
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "5:PV1": {
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "7:NTE": {
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "7:PV1": {
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "8:NTE": {
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "8:PV1": {
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "9:NTE": {
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "9:PV1": {
    groupsOpened: ["DRG_O43/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
