// Generated profile automaton for DEL_O46 (v2.8)

export const start = 0;
export const finals = new Set<number>([2, 6]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "DON",
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
      ["DON", 2],
      ["PID", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [2, new Map([["NTE", 6]])],
  [
    3,
    new Map([
      ["AL1", 10],
      ["ARV", 9],
      ["DON", 2],
      ["NTE", 7],
      ["OBX", 11],
      ["PD1", 12],
      ["PV1", 8],
    ]),
  ],
  [
    4,
    new Map([
      ["DON", 2],
      ["PID", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["DON", 2],
      ["PID", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [6, new Map([["NTE", 6]])],
  [
    7,
    new Map([
      ["AL1", 10],
      ["ARV", 9],
      ["DON", 2],
      ["NTE", 7],
      ["PV1", 8],
    ]),
  ],
  [
    8,
    new Map([
      ["DON", 2],
      ["NTE", 13],
    ]),
  ],
  [
    9,
    new Map([
      ["ARV", 9],
      ["DON", 2],
      ["NTE", 13],
      ["PV1", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 10],
      ["ARV", 9],
      ["DON", 2],
      ["NTE", 13],
      ["PV1", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 10],
      ["ARV", 9],
      ["DON", 2],
      ["NTE", 7],
      ["OBX", 11],
      ["PV1", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 10],
      ["ARV", 9],
      ["DON", 2],
      ["NTE", 7],
      ["OBX", 11],
      ["PV1", 8],
    ]),
  ],
  [
    13,
    new Map([
      ["DON", 2],
      ["NTE", 13],
    ]),
  ],
]);
export const effects = {
  "1:DON": {
    groupsOpened: [],
    groupsClosed: ["DEL_O46/DONOR"],
  },
  "1:PID": {
    groupsOpened: ["DEL_O46/DONOR"],
    groupsClosed: [],
  },
  "3:DON": {
    groupsOpened: [],
    groupsClosed: ["DEL_O46/DONOR", "DEL_O46/DONOR/DONOR_REGISTRATION"],
  },
  "3:NTE": {
    groupsOpened: ["DEL_O46/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "3:PV1": {
    groupsOpened: ["DEL_O46/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "4:DON": {
    groupsOpened: [],
    groupsClosed: ["DEL_O46/DONOR"],
  },
  "4:PID": {
    groupsOpened: ["DEL_O46/DONOR"],
    groupsClosed: [],
  },
  "5:DON": {
    groupsOpened: [],
    groupsClosed: ["DEL_O46/DONOR"],
  },
  "5:PID": {
    groupsOpened: ["DEL_O46/DONOR"],
    groupsClosed: [],
  },
  "7:NTE": {
    groupsOpened: ["DEL_O46/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "7:DON": {
    groupsOpened: [],
    groupsClosed: ["DEL_O46/DONOR", "DEL_O46/DONOR/DONOR_REGISTRATION"],
  },
  "7:PV1": {
    groupsOpened: ["DEL_O46/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "8:DON": {
    groupsOpened: [],
    groupsClosed: ["DEL_O46/DONOR", "DEL_O46/DONOR/DONOR_REGISTRATION"],
  },
  "9:DON": {
    groupsOpened: [],
    groupsClosed: ["DEL_O46/DONOR", "DEL_O46/DONOR/DONOR_REGISTRATION"],
  },
  "9:NTE": {
    groupsOpened: ["DEL_O46/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "9:PV1": {
    groupsOpened: ["DEL_O46/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "10:DON": {
    groupsOpened: [],
    groupsClosed: ["DEL_O46/DONOR", "DEL_O46/DONOR/DONOR_REGISTRATION"],
  },
  "10:NTE": {
    groupsOpened: ["DEL_O46/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "10:PV1": {
    groupsOpened: ["DEL_O46/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "11:DON": {
    groupsOpened: [],
    groupsClosed: ["DEL_O46/DONOR", "DEL_O46/DONOR/DONOR_REGISTRATION"],
  },
  "11:NTE": {
    groupsOpened: ["DEL_O46/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "11:PV1": {
    groupsOpened: ["DEL_O46/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "12:DON": {
    groupsOpened: [],
    groupsClosed: ["DEL_O46/DONOR", "DEL_O46/DONOR/DONOR_REGISTRATION"],
  },
  "12:NTE": {
    groupsOpened: ["DEL_O46/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "12:PV1": {
    groupsOpened: ["DEL_O46/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "13:DON": {
    groupsOpened: [],
    groupsClosed: ["DEL_O46/DONOR", "DEL_O46/DONOR/DONOR_REGISTRATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
