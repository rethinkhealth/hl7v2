// Generated profile automaton for CRM_C01 (v2.8)

export const start = 0;
export const finals = new Set<number>([5, 9]);
export const alphabet = new Set<string>([
  "ARV",
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
      ["ARV", 7],
      ["CSR", 5],
      ["PRT", 8],
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
      ["CSP", 9],
      ["PID", 2],
    ]),
  ],
  [
    6,
    new Map([
      ["CSR", 5],
      ["PRT", 10],
    ]),
  ],
  [
    7,
    new Map([
      ["ARV", 7],
      ["CSR", 5],
      ["PV1", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ARV", 7],
      ["CSR", 5],
      ["PRT", 8],
      ["PV1", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["CSP", 9],
      ["PID", 2],
    ]),
  ],
  [
    10,
    new Map([
      ["CSR", 5],
      ["PRT", 10],
    ]),
  ],
]);
export const effects = {
  "1:PID": {
    groupsOpened: ["CRM_C01/PATIENT"],
    groupsClosed: [],
  },
  "2:CSR": {
    groupsOpened: [],
    groupsClosed: ["CRM_C01/PATIENT/PATIENT_VISIT"],
  },
  "2:PV1": {
    groupsOpened: ["CRM_C01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "3:PID": {
    groupsOpened: ["CRM_C01/PATIENT"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["CRM_C01/PATIENT"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["CRM_C01/PATIENT"],
    groupsClosed: [],
  },
  "6:CSR": {
    groupsOpened: [],
    groupsClosed: ["CRM_C01/PATIENT/PATIENT_VISIT"],
  },
  "7:CSR": {
    groupsOpened: [],
    groupsClosed: ["CRM_C01/PATIENT/PATIENT_VISIT"],
  },
  "7:PV1": {
    groupsOpened: ["CRM_C01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "8:CSR": {
    groupsOpened: [],
    groupsClosed: ["CRM_C01/PATIENT/PATIENT_VISIT"],
  },
  "8:PV1": {
    groupsOpened: ["CRM_C01/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: ["CRM_C01/PATIENT"],
    groupsClosed: [],
  },
  "10:CSR": {
    groupsOpened: [],
    groupsClosed: ["CRM_C01/PATIENT/PATIENT_VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
