// Generated profile automaton for RSP_O34 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "DON",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBX",
  "PD1",
  "PID",
  "PV1",
  "QAK",
  "QPD",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
    ]),
  ],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["QPD", 7]])],
  [6, new Map([["QAK", 5]])],
  [
    7,
    new Map([
      ["DON", 8],
      ["PID", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 10],
      ["OBX", 11],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 15],
      ["ARV", 14],
      ["DON", 8],
      ["NTE", 12],
      ["OBX", 16],
      ["PD1", 17],
      ["PV1", 13],
    ]),
  ],
  [10, new Map([["NTE", 10]])],
  [
    11,
    new Map([
      ["NTE", 10],
      ["OBX", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 15],
      ["ARV", 14],
      ["DON", 8],
      ["NTE", 12],
      ["PV1", 13],
    ]),
  ],
  [
    13,
    new Map([
      ["DON", 8],
      ["NTE", 18],
    ]),
  ],
  [
    14,
    new Map([
      ["ARV", 14],
      ["DON", 8],
      ["NTE", 18],
      ["PV1", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 15],
      ["ARV", 14],
      ["DON", 8],
      ["NTE", 18],
      ["PV1", 13],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 15],
      ["ARV", 14],
      ["DON", 8],
      ["NTE", 12],
      ["OBX", 16],
      ["PV1", 13],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 15],
      ["ARV", 14],
      ["DON", 8],
      ["NTE", 12],
      ["OBX", 16],
      ["PV1", 13],
    ]),
  ],
  [
    18,
    new Map([
      ["DON", 8],
      ["NTE", 18],
    ]),
  ],
]);
export const effects = {
  "12:DON": {
    groupsOpened: ["RSP_O34/DONATION"],
    groupsClosed: ["RSP_O34/DONOR", "RSP_O34/DONOR/DONOR_REGISTRATION"],
  },
  "12:NTE": {
    groupsOpened: ["RSP_O34/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "12:PV1": {
    groupsOpened: ["RSP_O34/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "13:DON": {
    groupsOpened: ["RSP_O34/DONATION"],
    groupsClosed: ["RSP_O34/DONOR", "RSP_O34/DONOR/DONOR_REGISTRATION"],
  },
  "14:DON": {
    groupsOpened: ["RSP_O34/DONATION"],
    groupsClosed: ["RSP_O34/DONOR", "RSP_O34/DONOR/DONOR_REGISTRATION"],
  },
  "14:NTE": {
    groupsOpened: ["RSP_O34/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "14:PV1": {
    groupsOpened: ["RSP_O34/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "15:DON": {
    groupsOpened: ["RSP_O34/DONATION"],
    groupsClosed: ["RSP_O34/DONOR", "RSP_O34/DONOR/DONOR_REGISTRATION"],
  },
  "15:NTE": {
    groupsOpened: ["RSP_O34/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "15:PV1": {
    groupsOpened: ["RSP_O34/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "16:DON": {
    groupsOpened: ["RSP_O34/DONATION"],
    groupsClosed: ["RSP_O34/DONOR", "RSP_O34/DONOR/DONOR_REGISTRATION"],
  },
  "16:NTE": {
    groupsOpened: ["RSP_O34/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "16:PV1": {
    groupsOpened: ["RSP_O34/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "17:DON": {
    groupsOpened: ["RSP_O34/DONATION"],
    groupsClosed: ["RSP_O34/DONOR", "RSP_O34/DONOR/DONOR_REGISTRATION"],
  },
  "17:NTE": {
    groupsOpened: ["RSP_O34/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "17:PV1": {
    groupsOpened: ["RSP_O34/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "18:DON": {
    groupsOpened: ["RSP_O34/DONATION"],
    groupsClosed: ["RSP_O34/DONOR", "RSP_O34/DONOR/DONOR_REGISTRATION"],
  },
  "7:DON": {
    groupsOpened: ["RSP_O34/DONATION"],
    groupsClosed: ["RSP_O34/DONOR"],
  },
  "7:PID": {
    groupsOpened: ["RSP_O34/DONOR"],
    groupsClosed: [],
  },
  "9:DON": {
    groupsOpened: ["RSP_O34/DONATION"],
    groupsClosed: ["RSP_O34/DONOR", "RSP_O34/DONOR/DONOR_REGISTRATION"],
  },
  "9:NTE": {
    groupsOpened: ["RSP_O34/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "9:PV1": {
    groupsOpened: ["RSP_O34/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
