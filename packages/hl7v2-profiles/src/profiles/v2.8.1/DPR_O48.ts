// Generated profile automaton for DPR_O48 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([2, 6, 7, 14, 15, 16, 18]);
export const alphabet = new Set<string>([
  "AL1",
  "ARV",
  "BUI",
  "DON",
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
      ["DON", 6],
      ["NTE", 7],
      ["OBR", 2],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 11],
      ["ARV", 10],
      ["NTE", 8],
      ["OBR", 2],
      ["OBX", 12],
      ["PD1", 13],
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
      ["BUI", 15],
      ["NTE", 14],
      ["OBX", 16],
    ]),
  ],
  [
    7,
    new Map([
      ["DON", 6],
      ["NTE", 7],
      ["OBR", 2],
    ]),
  ],
  [
    8,
    new Map([
      ["AL1", 11],
      ["ARV", 10],
      ["NTE", 8],
      ["OBR", 2],
      ["PV1", 9],
    ]),
  ],
  [
    9,
    new Map([
      ["NTE", 17],
      ["OBR", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["ARV", 10],
      ["NTE", 17],
      ["OBR", 2],
      ["PV1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 11],
      ["ARV", 10],
      ["NTE", 17],
      ["OBR", 2],
      ["PV1", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 11],
      ["ARV", 10],
      ["NTE", 8],
      ["OBR", 2],
      ["OBX", 12],
      ["PV1", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 11],
      ["ARV", 10],
      ["NTE", 8],
      ["OBR", 2],
      ["OBX", 12],
      ["PV1", 9],
    ]),
  ],
  [
    14,
    new Map([
      ["BUI", 15],
      ["NTE", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["BUI", 15],
      ["NTE", 18],
    ]),
  ],
  [
    16,
    new Map([
      ["BUI", 15],
      ["NTE", 14],
      ["OBX", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 17],
      ["OBR", 2],
    ]),
  ],
  [18, new Map([["NTE", 18]])],
]);
export const effects = {
  "10:NTE": {
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "10:PV1": {
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "11:NTE": {
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "11:OBR": {
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "11:PV1": {
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "12:NTE": {
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "12:OBR": {
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "12:PV1": {
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "13:NTE": {
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "13:PV1": {
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "14:BUI": {
    groupsOpened: ["DPR_O48/DONATION/BLOOD_UNIT"],
    groupsClosed: [],
  },
  "14:NTE": {
    groupsOpened: ["DPR_O48/DONATION/BLOOD_UNIT"],
    groupsClosed: [],
  },
  "16:BUI": {
    groupsOpened: ["DPR_O48/DONATION/BLOOD_UNIT"],
    groupsClosed: [],
  },
  "16:NTE": {
    groupsOpened: ["DPR_O48/DONATION/BLOOD_UNIT"],
    groupsClosed: [],
  },
  "17:OBR": {
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "1:OBR": {
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
    groupsClosed: ["DPR_O48/DONOR"],
  },
  "1:PID": {
    groupsOpened: ["DPR_O48/DONOR"],
    groupsClosed: [],
  },
  "2:DON": {
    groupsOpened: ["DPR_O48/DONATION"],
    groupsClosed: ["DPR_O48/DONATION_ORDER"],
  },
  "2:OBR": {
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
    groupsClosed: [],
  },
  "3:NTE": {
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "3:OBR": {
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "3:PV1": {
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "4:OBR": {
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
    groupsClosed: ["DPR_O48/DONOR"],
  },
  "4:PID": {
    groupsOpened: ["DPR_O48/DONOR"],
    groupsClosed: [],
  },
  "5:OBR": {
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
    groupsClosed: ["DPR_O48/DONOR"],
  },
  "5:PID": {
    groupsOpened: ["DPR_O48/DONOR"],
    groupsClosed: [],
  },
  "6:BUI": {
    groupsOpened: ["DPR_O48/DONATION/BLOOD_UNIT"],
    groupsClosed: [],
  },
  "6:NTE": {
    groupsOpened: ["DPR_O48/DONATION/BLOOD_UNIT"],
    groupsClosed: [],
  },
  "7:DON": {
    groupsOpened: ["DPR_O48/DONATION"],
    groupsClosed: ["DPR_O48/DONATION_ORDER"],
  },
  "7:OBR": {
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
    groupsClosed: [],
  },
  "8:NTE": {
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "8:OBR": {
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "8:PV1": {
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
