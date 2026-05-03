// Generated profile automaton for RGV_O01 (v2.3)

export const start = 0;
export const finals = new Set<number>([11, 15, 16, 19]);
export const alphabet = new Set<string>([
  "AL1",
  "MSH",
  "NTE",
  "OBX",
  "ORC",
  "PID",
  "PV1",
  "PV2",
  "RXC",
  "RXE",
  "RXG",
  "RXO",
  "RXR",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["RXE", 6],
      ["RXG", 5],
      ["RXO", 7],
    ]),
  ],
  [
    3,
    new Map([
      ["AL1", 9],
      ["NTE", 10],
      ["ORC", 2],
      ["PV1", 8],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 4],
      ["ORC", 2],
      ["PID", 3],
    ]),
  ],
  [5, new Map([["RXR", 11]])],
  [6, new Map([["RXR", 12]])],
  [
    7,
    new Map([
      ["NTE", 13],
      ["RXE", 6],
      ["RXG", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["ORC", 2],
      ["PV2", 14],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 9],
      ["ORC", 2],
      ["PV1", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 9],
      ["NTE", 10],
      ["ORC", 2],
      ["PV1", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["OBX", 15],
      ["ORC", 2],
      ["RXC", 16],
      ["RXG", 5],
      ["RXR", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["RXC", 17],
      ["RXG", 5],
      ["RXR", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["RXR", 18],
    ]),
  ],
  [14, new Map([["ORC", 2]])],
  [
    15,
    new Map([
      ["NTE", 19],
      ["OBX", 15],
      ["ORC", 2],
      ["RXG", 5],
    ]),
  ],
  [
    16,
    new Map([
      ["OBX", 15],
      ["ORC", 2],
      ["RXC", 16],
      ["RXG", 5],
    ]),
  ],
  [
    17,
    new Map([
      ["RXC", 17],
      ["RXG", 5],
    ]),
  ],
  [
    18,
    new Map([
      ["RXC", 20],
      ["RXE", 6],
      ["RXG", 5],
      ["RXR", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["NTE", 19],
      ["OBX", 15],
      ["ORC", 2],
      ["RXG", 5],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 21],
      ["RXC", 20],
      ["RXE", 6],
      ["RXG", 5],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 21],
      ["RXE", 6],
      ["RXG", 5],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["RGV_O01/PATIENT", "RGV_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O01/ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O01/PATIENT/PATIENT_VISIT"],
  },
  "11:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O01/ORDER/GIVE/OBSERVATION"],
  },
  "11:ORC": {
    groupsClosed: ["RGV_O01/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O01/ORDER"],
  },
  "11:RXG": {
    groupsClosed: ["RGV_O01/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O01/ORDER/GIVE"],
  },
  "12:RXG": {
    groupsClosed: ["RGV_O01/ORDER/ENCODING"],
    groupsOpened: ["RGV_O01/ORDER/GIVE"],
  },
  "14:ORC": {
    groupsClosed: ["RGV_O01/PATIENT", "RGV_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O01/ORDER"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O01/ORDER/GIVE/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: ["RGV_O01/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O01/ORDER"],
  },
  "15:RXG": {
    groupsClosed: ["RGV_O01/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O01/ORDER/GIVE"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O01/ORDER/GIVE/OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: ["RGV_O01/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O01/ORDER"],
  },
  "16:RXG": {
    groupsClosed: ["RGV_O01/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O01/ORDER/GIVE"],
  },
  "17:RXG": {
    groupsClosed: ["RGV_O01/ORDER/ENCODING"],
    groupsOpened: ["RGV_O01/ORDER/GIVE"],
  },
  "18:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "18:RXE": {
    groupsClosed: [
      "RGV_O01/ORDER/GIVE",
      "RGV_O01/ORDER/ORDER_DETAIL",
      "RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O01/ORDER/ENCODING"],
  },
  "18:RXG": {
    groupsClosed: [
      "RGV_O01/ORDER/ENCODING",
      "RGV_O01/ORDER/ORDER_DETAIL",
      "RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O01/ORDER/GIVE"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["RGV_O01/ORDER/GIVE/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: ["RGV_O01/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O01/ORDER"],
  },
  "19:RXG": {
    groupsClosed: ["RGV_O01/ORDER/GIVE/OBSERVATION"],
    groupsOpened: ["RGV_O01/ORDER/GIVE"],
  },
  "1:ORC": {
    groupsClosed: ["RGV_O01/PATIENT"],
    groupsOpened: ["RGV_O01/ORDER"],
  },
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["RGV_O01/PATIENT"],
  },
  "20:RXE": {
    groupsClosed: [
      "RGV_O01/ORDER/GIVE",
      "RGV_O01/ORDER/ORDER_DETAIL",
      "RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O01/ORDER/ENCODING"],
  },
  "20:RXG": {
    groupsClosed: [
      "RGV_O01/ORDER/ENCODING",
      "RGV_O01/ORDER/ORDER_DETAIL",
      "RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O01/ORDER/GIVE"],
  },
  "21:RXE": {
    groupsClosed: [
      "RGV_O01/ORDER/GIVE",
      "RGV_O01/ORDER/ORDER_DETAIL",
      "RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O01/ORDER/ENCODING"],
  },
  "21:RXG": {
    groupsClosed: [
      "RGV_O01/ORDER/ENCODING",
      "RGV_O01/ORDER/ORDER_DETAIL",
      "RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsOpened: ["RGV_O01/ORDER/GIVE"],
  },
  "2:RXE": {
    groupsClosed: ["RGV_O01/ORDER/GIVE", "RGV_O01/ORDER/ORDER_DETAIL"],
    groupsOpened: ["RGV_O01/ORDER/ENCODING"],
  },
  "2:RXG": {
    groupsClosed: ["RGV_O01/ORDER/ENCODING", "RGV_O01/ORDER/ORDER_DETAIL"],
    groupsOpened: ["RGV_O01/ORDER/GIVE"],
  },
  "2:RXO": {
    groupsClosed: [],
    groupsOpened: ["RGV_O01/ORDER/ORDER_DETAIL"],
  },
  "3:ORC": {
    groupsClosed: ["RGV_O01/PATIENT", "RGV_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O01/ORDER"],
  },
  "3:PV1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O01/PATIENT/PATIENT_VISIT"],
  },
  "4:ORC": {
    groupsClosed: ["RGV_O01/PATIENT"],
    groupsOpened: ["RGV_O01/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["RGV_O01/PATIENT"],
  },
  "7:NTE": {
    groupsClosed: ["RGV_O01/ORDER/ENCODING", "RGV_O01/ORDER/GIVE"],
    groupsOpened: ["RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
  },
  "7:RXE": {
    groupsClosed: [
      "RGV_O01/ORDER/GIVE",
      "RGV_O01/ORDER/ORDER_DETAIL",
      "RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RGV_O01/ORDER/ENCODING"],
  },
  "7:RXG": {
    groupsClosed: [
      "RGV_O01/ORDER/ENCODING",
      "RGV_O01/ORDER/ORDER_DETAIL",
      "RGV_O01/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
    groupsOpened: ["RGV_O01/ORDER/GIVE"],
  },
  "8:ORC": {
    groupsClosed: ["RGV_O01/PATIENT", "RGV_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O01/ORDER"],
  },
  "9:ORC": {
    groupsClosed: ["RGV_O01/PATIENT", "RGV_O01/PATIENT/PATIENT_VISIT"],
    groupsOpened: ["RGV_O01/ORDER"],
  },
  "9:PV1": {
    groupsClosed: [],
    groupsOpened: ["RGV_O01/PATIENT/PATIENT_VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
