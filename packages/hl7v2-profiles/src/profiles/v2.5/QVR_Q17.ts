// Generated profile automaton for QVR_Q17 (v2.5)

export const start = 0;
export const finals = new Set<number>([4, 6]);
export const alphabet = new Set<string>([
  "DSC",
  "MSH",
  "QPD",
  "RCP",
  "SFT",
  "anyHL7Segment",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["QPD", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["anyHL7Segment", 5],
      ["RCP", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["QPD", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([["DSC", 6]])],
  [5, new Map([["RCP", 4]])],
  [6, new Map([])],
]);
export const effects = {
  "2:RCP": {
    groupsClosed: ["QVR_Q17/QBP"],
    groupsOpened: [],
  },
  "2:anyHL7Segment": {
    groupsClosed: [],
    groupsOpened: ["QVR_Q17/QBP"],
  },
  "5:RCP": {
    groupsClosed: ["QVR_Q17/QBP"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
