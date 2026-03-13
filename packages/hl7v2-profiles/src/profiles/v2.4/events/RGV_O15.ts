// Generated profile automaton for RGV_O15 (v2.4)

export const start = 0;
export const finals = new Set<number>([11, 15, 16, 17]);
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
      ["NTE", 15],
      ["OBX", 16],
      ["ORC", 2],
      ["RXC", 17],
      ["RXG", 5],
      ["RXR", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["RXC", 18],
      ["RXG", 5],
      ["RXR", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["RXR", 19],
    ]),
  ],
  [14, new Map([["ORC", 2]])],
  [
    15,
    new Map([
      ["NTE", 15],
      ["OBX", 16],
      ["ORC", 2],
      ["RXG", 5],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 15],
      ["OBX", 16],
      ["ORC", 2],
      ["RXG", 5],
    ]),
  ],
  [
    17,
    new Map([
      ["NTE", 15],
      ["OBX", 16],
      ["ORC", 2],
      ["RXC", 17],
      ["RXG", 5],
    ]),
  ],
  [
    18,
    new Map([
      ["RXC", 18],
      ["RXG", 5],
    ]),
  ],
  [
    19,
    new Map([
      ["RXC", 20],
      ["RXE", 6],
      ["RXG", 5],
      ["RXR", 19],
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
  "1:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT"],
  },
  "1:PID": {
    groupsOpened: ["RGV_O15/PATIENT"],
    groupsClosed: [],
  },
  "2:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING", "RGV_O15/ORDER/ORDER_DETAIL"],
  },
  "2:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: ["RGV_O15/ORDER/GIVE", "RGV_O15/ORDER/ORDER_DETAIL"],
  },
  "2:RXO": {
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "3:PV1": {
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT"],
  },
  "4:PID": {
    groupsOpened: ["RGV_O15/PATIENT"],
    groupsClosed: [],
  },
  "7:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "7:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
    ],
  },
  "7:NTE": {
    groupsOpened: ["RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING", "RGV_O15/ORDER/GIVE"],
  },
  "8:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "9:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "9:PV1": {
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "10:PV1": {
    groupsOpened: ["RGV_O15/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "11:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "11:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "11:NTE": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "12:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
  },
  "14:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/PATIENT", "RGV_O15/PATIENT/PATIENT_VISIT"],
  },
  "15:NTE": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "15:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "15:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "16:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "16:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "16:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "17:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "17:ORC": {
    groupsOpened: ["RGV_O15/ORDER"],
    groupsClosed: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
  },
  "17:NTE": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["RGV_O15/ORDER/GIVE/OBSERVATION"],
    groupsClosed: [],
  },
  "18:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: ["RGV_O15/ORDER/ENCODING"],
  },
  "19:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "19:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "19:RXC": {
    groupsOpened: [
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
    groupsClosed: [],
  },
  "20:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "20:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "21:RXG": {
    groupsOpened: ["RGV_O15/ORDER/GIVE"],
    groupsClosed: [
      "RGV_O15/ORDER/ENCODING",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
  "21:RXE": {
    groupsOpened: ["RGV_O15/ORDER/ENCODING"],
    groupsClosed: [
      "RGV_O15/ORDER/GIVE",
      "RGV_O15/ORDER/ORDER_DETAIL",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT",
      "RGV_O15/ORDER/ORDER_DETAIL/ORDER_DETAIL_SUPPLEMENT/COMPONENTS",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
