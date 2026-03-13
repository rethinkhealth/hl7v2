// Generated profile automaton for EHC_E20 (v2.7)

export const start = 0;
export const finals = new Set<number>([11, 15, 16, 17, 18]);
export const alphabet = new Set<string>([
  "ACC",
  "ADJ",
  "CTD",
  "DG1",
  "IN1",
  "IN2",
  "IVC",
  "LOC",
  "MSH",
  "NTE",
  "OBX",
  "PID",
  "PSL",
  "ROL",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["IVC", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["CTD", 5]])],
  [
    3,
    new Map([
      ["IVC", 2],
      ["UAC", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["IVC", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["CTD", 5],
      ["LOC", 8],
      ["PID", 6],
      ["ROL", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["ACC", 10],
      ["IN1", 9],
    ]),
  ],
  [
    7,
    new Map([
      ["PID", 6],
      ["ROL", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["LOC", 8],
      ["PID", 6],
      ["ROL", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["DG1", 13],
      ["IN1", 9],
      ["IN2", 14],
      ["OBX", 12],
      ["PID", 6],
      ["PSL", 11],
    ]),
  ],
  [
    10,
    new Map([
      ["ACC", 10],
      ["IN1", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["ADJ", 17],
      ["LOC", 16],
      ["NTE", 18],
      ["PSL", 11],
      ["ROL", 15],
    ]),
  ],
  [
    12,
    new Map([
      ["OBX", 12],
      ["PID", 6],
      ["PSL", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["DG1", 13],
      ["NTE", 19],
      ["OBX", 12],
      ["PID", 6],
      ["PSL", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["DG1", 13],
      ["IN1", 9],
      ["OBX", 12],
      ["PID", 6],
      ["PSL", 11],
    ]),
  ],
  [
    15,
    new Map([
      ["PSL", 11],
      ["ROL", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["LOC", 16],
      ["PSL", 11],
      ["ROL", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["ADJ", 17],
      ["LOC", 16],
      ["PSL", 11],
      ["ROL", 15],
    ]),
  ],
  [
    18,
    new Map([
      ["ADJ", 17],
      ["LOC", 16],
      ["NTE", 18],
      ["PSL", 11],
      ["ROL", 15],
    ]),
  ],
  [
    19,
    new Map([
      ["DG1", 13],
      ["NTE", 19],
      ["OBX", 12],
      ["PID", 6],
      ["PSL", 11],
    ]),
  ],
]);
export const effects = {
  "1:IVC": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST"],
    groupsClosed: [],
  },
  "3:IVC": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST"],
    groupsClosed: [],
  },
  "4:IVC": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO"],
    groupsClosed: [],
  },
  "6:IN1": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/INSURANCE"],
    groupsClosed: [],
  },
  "7:PID": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO"],
    groupsClosed: [],
  },
  "8:PID": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO"],
    groupsClosed: [],
  },
  "9:IN1": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/INSURANCE"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO"],
    groupsClosed: [
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS",
      "EHC_E20/AUTHORIZATION_REQUEST/PSL_ITEM_INFO",
    ],
  },
  "9:PSL": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
    groupsClosed: [
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO",
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS",
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/INSURANCE",
    ],
  },
  "9:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS",
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/INSURANCE",
    ],
  },
  "9:DG1": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS"],
    groupsClosed: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/INSURANCE"],
  },
  "10:IN1": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/INSURANCE"],
    groupsClosed: [],
  },
  "11:PSL": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
    groupsClosed: [],
  },
  "12:PID": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO"],
    groupsClosed: ["EHC_E20/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
  },
  "12:PSL": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
    groupsClosed: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO"],
  },
  "13:DG1": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS"],
    groupsClosed: [],
  },
  "13:PID": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO"],
    groupsClosed: [
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS",
      "EHC_E20/AUTHORIZATION_REQUEST/PSL_ITEM_INFO",
    ],
  },
  "13:PSL": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
    groupsClosed: [
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO",
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS",
    ],
  },
  "13:OBX": {
    groupsOpened: [],
    groupsClosed: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS"],
  },
  "14:IN1": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/INSURANCE"],
    groupsClosed: [],
  },
  "14:PID": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO"],
    groupsClosed: [
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS",
      "EHC_E20/AUTHORIZATION_REQUEST/PSL_ITEM_INFO",
    ],
  },
  "14:PSL": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
    groupsClosed: [
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO",
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS",
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/INSURANCE",
    ],
  },
  "14:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS",
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/INSURANCE",
    ],
  },
  "14:DG1": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS"],
    groupsClosed: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/INSURANCE"],
  },
  "15:PSL": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
    groupsClosed: [],
  },
  "16:PSL": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
    groupsClosed: [],
  },
  "17:PSL": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
    groupsClosed: [],
  },
  "18:PSL": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
    groupsClosed: [],
  },
  "19:DG1": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS"],
    groupsClosed: [],
  },
  "19:PID": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO"],
    groupsClosed: [
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS",
      "EHC_E20/AUTHORIZATION_REQUEST/PSL_ITEM_INFO",
    ],
  },
  "19:PSL": {
    groupsOpened: ["EHC_E20/AUTHORIZATION_REQUEST/PSL_ITEM_INFO"],
    groupsClosed: [
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO",
      "EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS",
    ],
  },
  "19:OBX": {
    groupsOpened: [],
    groupsClosed: ["EHC_E20/AUTHORIZATION_REQUEST/PAT_INFO/DIAGNOSIS"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
