// Generated profile automaton for CRM_C01 (v2.7)

export const start = 0;
export const finals = new Set<number>([5, 8]);
export const alphabet = new Set<string>([
  "CSP",
  "CSR",
  "MSH",
  "PID",
  "PRT",
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
      ["CSR", 5],
      ["PRT", 7],
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
      ["CSP", 8],
      ["PID", 2],
    ]),
  ],
  [
    6,
    new Map([
      ["CSR", 5],
      ["PRT", 9],
    ]),
  ],
  [
    7,
    new Map([
      ["CSR", 5],
      ["PRT", 7],
      ["PV1", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["CSP", 8],
      ["PID", 2],
    ]),
  ],
  [
    9,
    new Map([
      ["CSR", 5],
      ["PRT", 9],
    ]),
  ],
]);
export const effects = {
  "1:PID": {
    groupsClosed: [],
    groupsOpened: ["CRM_C01/PATIENT"],
  },
  "2:CSR": {
    groupsClosed: ["CRM_C01/PATIENT/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "2:PV1": {
    groupsClosed: [],
    groupsOpened: ["CRM_C01/PATIENT/PATIENT_VISIT"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["CRM_C01/PATIENT"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["CRM_C01/PATIENT"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["CRM_C01/PATIENT"],
  },
  "6:CSR": {
    groupsClosed: ["CRM_C01/PATIENT/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "7:CSR": {
    groupsClosed: ["CRM_C01/PATIENT/PATIENT_VISIT"],
    groupsOpened: [],
  },
  "7:PV1": {
    groupsClosed: [],
    groupsOpened: ["CRM_C01/PATIENT/PATIENT_VISIT"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["CRM_C01/PATIENT"],
  },
  "9:CSR": {
    groupsClosed: ["CRM_C01/PATIENT/PATIENT_VISIT"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
