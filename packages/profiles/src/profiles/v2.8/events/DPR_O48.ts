// Generated profile automaton for DPR_O48 (v2.8)

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
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "10:OBR": {
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "11:NTE": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "11:OBR": {
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "12:NTE": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "12:OBR": {
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "13:NTE": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "13:OBR": {
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "14:BUI": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONATION/BLOOD_UNIT"],
  },
  "14:NTE": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONATION/BLOOD_UNIT"],
  },
  "16:BUI": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONATION/BLOOD_UNIT"],
  },
  "16:NTE": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONATION/BLOOD_UNIT"],
  },
  "17:OBR": {
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
  },
  "1:OBR": {
    groupsClosed: ["DPR_O48/DONOR"],
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONOR"],
  },
  "2:DON": {
    groupsClosed: ["DPR_O48/DONATION_ORDER"],
    groupsOpened: ["DPR_O48/DONATION"],
  },
  "2:OBR": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
  },
  "3:NTE": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "3:OBR": {
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "4:OBR": {
    groupsClosed: ["DPR_O48/DONOR"],
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONOR"],
  },
  "5:OBR": {
    groupsClosed: ["DPR_O48/DONOR"],
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONOR"],
  },
  "6:BUI": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONATION/BLOOD_UNIT"],
  },
  "6:NTE": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONATION/BLOOD_UNIT"],
  },
  "7:DON": {
    groupsClosed: ["DPR_O48/DONATION_ORDER"],
    groupsOpened: ["DPR_O48/DONATION"],
  },
  "7:OBR": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
  },
  "8:NTE": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "8:OBR": {
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
  },
  "8:PV1": {
    groupsClosed: [],
    groupsOpened: ["DPR_O48/DONOR/DONOR_REGISTRATION"],
  },
  "9:OBR": {
    groupsClosed: ["DPR_O48/DONOR", "DPR_O48/DONOR/DONOR_REGISTRATION"],
    groupsOpened: ["DPR_O48/DONATION_ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
