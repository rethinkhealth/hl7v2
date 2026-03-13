// Generated profile automaton for SUR_P09 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([9]);
export const alphabet = new Set<string>([
  "ED",
  "FAC",
  "MSH",
  "NTE",
  "PDC",
  "PSH",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["FAC", 2]])],
  [2, new Map([["PSH", 3]])],
  [3, new Map([["PDC", 4]])],
  [4, new Map([["PSH", 5]])],
  [
    5,
    new Map([
      ["FAC", 6],
      ["PDC", 4],
    ]),
  ],
  [6, new Map([["PDC", 7]])],
  [7, new Map([["NTE", 8]])],
  [
    8,
    new Map([
      ["ED", 9],
      ["FAC", 6],
    ]),
  ],
  [9, new Map([["FAC", 2]])],
]);
export const effects = {
  "1:FAC": {
    groupsOpened: ["SUR_P09/FACPSHPDCPSHFACPDCNTEED_SUPPGRP"],
    groupsClosed: [],
  },
  "2:PSH": {
    groupsOpened: ["SUR_P09/FACPSHPDCPSHFACPDCNTEED_SUPPGRP/PSHPDC_SUPPGRP"],
    groupsClosed: [],
  },
  "4:PSH": {
    groupsOpened: ["SUR_P09/FACPSHPDCPSHFACPDCNTEED_SUPPGRP/PSHPDC_SUPPGRP"],
    groupsClosed: [],
  },
  "5:FAC": {
    groupsOpened: ["SUR_P09/FACPSHPDCPSHFACPDCNTEED_SUPPGRP/FACPDCNTE_SUPPGRP"],
    groupsClosed: ["SUR_P09/FACPSHPDCPSHFACPDCNTEED_SUPPGRP/PSHPDC_SUPPGRP"],
  },
  "5:PDC": {
    groupsOpened: [],
    groupsClosed: ["SUR_P09/FACPSHPDCPSHFACPDCNTEED_SUPPGRP/FACPDCNTE_SUPPGRP"],
  },
  "8:FAC": {
    groupsOpened: ["SUR_P09/FACPSHPDCPSHFACPDCNTEED_SUPPGRP/FACPDCNTE_SUPPGRP"],
    groupsClosed: [],
  },
  "8:ED": {
    groupsOpened: [],
    groupsClosed: ["SUR_P09/FACPSHPDCPSHFACPDCNTEED_SUPPGRP/FACPDCNTE_SUPPGRP"],
  },
  "9:FAC": {
    groupsOpened: ["SUR_P09/FACPSHPDCPSHFACPDCNTEED_SUPPGRP"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
