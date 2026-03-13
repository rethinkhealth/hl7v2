// Generated profile automaton for RSP_K11 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([7, 8, 9]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "QAK",
  "QPD",
  "SFT",
  "UAC",
  "anyHL7Segment",
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
      ["anyHL7Segment", 9],
      ["DSC", 8],
    ]),
  ],
  [8, new Map([])],
  [9, new Map([["DSC", 8]])],
]);
export const effects = {
  "7:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K11/ROW_DEFINITION"],
  },
  "7:anyHL7Segment": {
    groupsOpened: ["RSP_K11/ROW_DEFINITION"],
    groupsClosed: [],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_K11/ROW_DEFINITION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
