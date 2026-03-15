import type { Root, RootData } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { bench, describe } from "vitest";

import {
  getMessageCode,
  getMessageInfo,
  getMessageStructure,
  getTriggerEvent,
  getVersion,
} from "../src";
import type { MessageInfo } from "../src/types";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

/** Small message: MSH segment only */
function smallMessage(): Root {
  return m(
    s(
      "MSH",
      f("|"),
      f("^~\\&"),
      f("SENDER"),
      f("FACILITY"),
      f("RECEIVER"),
      f("RECV_FAC"),
      f("20241201120000"),
      f(""),
      f(c("ADT"), c("A01"), c("ADT_A01")),
      f("MSG00001"),
      f("P"),
      f("2.5")
    )
  );
}

/** Full ADT_A01 message: MSH + EVN + PID + PV1 + multiple NK1/OBX */
function fullMessage(): Root {
  return m(
    s(
      "MSH",
      f("|"),
      f("^~\\&"),
      f("SENDER"),
      f("FACILITY"),
      f("RECEIVER"),
      f("RECV_FAC"),
      f("20241201120000"),
      f(""),
      f(c("ADT"), c("A01"), c("ADT_A01")),
      f("MSG00001"),
      f("P"),
      f("2.5")
    ),
    s("EVN", f("A01"), f("20241201120000")),
    s(
      "PID",
      f("1"),
      f(""),
      f("12345"),
      f(""),
      f(c("DOE"), c("JOHN"), c("M")),
      f(""),
      f(""),
      f("M"),
      f(""),
      f("")
    ),
    s("PV1", f("1"), f("I"), f("W^389^1")),
    s("NK1", f("1"), f(c("DOE"), c("JANE")), f("SPO")),
    s("NK1", f("2"), f(c("DOE"), c("BOB")), f("FTH")),
    s("OBX", f("1"), f("NM"), f(c("8302-2")), f(""), f("185"), f("cm")),
    s("OBX", f("2"), f("NM"), f(c("3141-9")), f(""), f("80"), f("kg")),
    s("OBX", f("3"), f("NM"), f(c("8310-5")), f(""), f("36.6"), f("Cel"))
  );
}

/** Annotate a tree with messageInfo on tree.data */
function annotate(tree: Root): Root {
  // oxlint-disable-next-line typescript/no-explicit-any
  tree.data = {
    ...tree.data,
    messageInfo: {
      version: "2.5",
      messageCode: "ADT",
      triggerEvent: "A01",
      messageStructure: "ADT_A01",
    },
  } as RootData;
  return tree;
}

/** Read version from annotated tree.data.messageInfo */
function readAnnotatedVersion(tree: Root): string | undefined {
  return (tree.data as RootData & { messageInfo?: MessageInfo })?.messageInfo
    ?.version;
}

/** Read all info from annotated tree.data.messageInfo */
function readAnnotatedInfo(tree: Root): MessageInfo | undefined {
  return (tree.data as RootData & { messageInfo?: MessageInfo })?.messageInfo;
}

// ---------------------------------------------------------------------------
// Benchmarks: getVersion — MSH read vs annotated
// ---------------------------------------------------------------------------

describe("getVersion: small message", () => {
  const tree = smallMessage();
  const annotatedTree = annotate(smallMessage());

  bench("MSH-12 read (getVersion)", () => {
    getVersion(tree);
  });

  bench("annotated tree.data read", () => {
    readAnnotatedVersion(annotatedTree);
  });
});

describe("getVersion: full ADT_A01 message", () => {
  const tree = fullMessage();
  const annotatedTree = annotate(fullMessage());

  bench("MSH-12 read (getVersion)", () => {
    getVersion(tree);
  });

  bench("annotated tree.data read", () => {
    readAnnotatedVersion(annotatedTree);
  });
});

// ---------------------------------------------------------------------------
// Benchmarks: getMessageInfo (all fields) — MSH read vs annotated
// ---------------------------------------------------------------------------

describe("getMessageInfo: small message", () => {
  const tree = smallMessage();
  const annotatedTree = annotate(smallMessage());

  bench("MSH read (getMessageInfo)", () => {
    getMessageInfo(tree);
  });

  bench("annotated tree.data read", () => {
    readAnnotatedInfo(annotatedTree);
  });
});

describe("getMessageInfo: full ADT_A01 message", () => {
  const tree = fullMessage();
  const annotatedTree = annotate(fullMessage());

  bench("MSH read (getMessageInfo)", () => {
    getMessageInfo(tree);
  });

  bench("annotated tree.data read", () => {
    readAnnotatedInfo(annotatedTree);
  });
});

// ---------------------------------------------------------------------------
// Benchmarks: individual field reads on full message
// ---------------------------------------------------------------------------

describe("individual MSH field reads: full ADT_A01", () => {
  const tree = fullMessage();

  bench("getVersion (MSH-12)", () => {
    getVersion(tree);
  });

  bench("getMessageCode (MSH-9.1)", () => {
    getMessageCode(tree);
  });

  bench("getTriggerEvent (MSH-9.2)", () => {
    getTriggerEvent(tree);
  });

  bench("getMessageStructure (MSH-9.3)", () => {
    getMessageStructure(tree);
  });
});
