---
name: glion-messages
description: Write or audit user-facing message strings in the glion monorepo — lint findings reported through `file.message` and the `message` of thrown errors. Use whenever adding, editing, or reviewing such a string, including when the change is incidental to other work, and when a test asserts one.
---

# glion-messages

A message is **one complete sentence per cause**, written out in full, with its values also carried in structured fields. A lint finding **describes the node it is placed on and does not name it**, and **no text ever contains content from the message**. ADR 0026 (`docs/adr/0026-message-strings.md`) and ADR 0030 (`docs/adr/0030-findings-describe-their-node.md`) are the decisions; this skill is the checklist.

## The rules

1. **One cause, one complete message.** If the wording differs between two situations, they are two causes with two messages. Never build a message from parts.
2. **Lint rules keep a catalog.** A `messages` constant at the top of the rule module, one entry per cause, named for the cause. A fixed message is a string; a message with values is an arrow function whose parameters name the values. The report site passes the entry to `file.message` and adds nothing to the text.
3. **Thrown errors** hold their message in their own class: one class (or one `code`) per cause, a fixed sentence, values on typed properties. ADR 0018 §6 decides what the sentence says (context, domain terms, a next step, no secrets).
4. **Form.** Sentence case, present tense, closing period. What was found first, then what HL7v2 requires, joined by a semicolon when they share a sentence. A fix or a reason goes in a second sentence or in `note`.
5. **Describe the node; do not name it.** A finding is placed on a node with `place` and `ancestors`, which say where it is. The text says what is wrong with that node or its value (`The value is 300 characters long; the field allows at most 250.`), never which one it is: no `PID-5`, no Segment ID, no segment group path that only locates it. Only an element the message does not contain is named, from the profile or event schema, because no node locates it: ``Field `PID-5` (Patient Name) is not present; it is required.``
6. **HL7v2 vocabulary.** segment, Segment ID, field, field repetition, component, data element, datatype, table, event schema. Never node, tree, token, array, index.
7. **Never the content.** No value, no part of a value, and no Segment ID read from the message appears in the text, whatever the field holds: findings reach logs and CI, and a field may hold a Social Security number or a date of birth. Describe the content instead: its length, a count, which part is out of range, whether it is empty (`The value is 28 characters long`, `The day is past the end of its month`). The content goes in `actual` only. Names from the profile or event schema are not content and stay: ``Field `PID-5` (Patient Name)``, table `HL70003`. Backticks go around what the text may contain: an option, a name from the profile, a format such as `YYYY[MM[DD]]`. An empty value is described in words: `an empty Segment ID`, `no segments` — never `''`.
8. **Fields.** For a lint finding that compares found against acceptable values, set `actual` (found) and `expected` (acceptable list) on the returned message. `note` for a longer explanation or a reference to the standard. `url` comes from `lintRule`'s `url` and points to the rule's README. Keep `place` and `ancestors`.
9. **Counts** go through `pluralize` inside the catalog entry.

## Banned

| Pattern                                                  | Example caught in review                                           |
| -------------------------------------------------------- | ------------------------------------------------------------------ |
| Shared prefix or suffix constant joined to a clause      | `` `${REQUIRED} — received ${x} instead` ``                        |
| A clause chosen by a ternary and spliced into a sentence | `const received = name === "" ? "a segment with…" : \`'${name}'\`` |
| Fragments joined with `—`                                | `"Connecting failed — check that the host is reachable"`           |
| Values in a trailing parenthetical                       | `exceeds max length of 20 (actual: 25)`                            |
| An empty value printed as quotes                         | `received '' instead`                                              |
| Implementation vocabulary                                | `Root node type must be 'root'`                                    |
| Blame or vague verdicts                                  | `bad value`, `illegal segment`, `invalid input` with no specifics  |
| The code restated in the prose                           | `SEGMENT_ORDER: …`                                                 |
| Naming the node the finding is placed on                 | ``Field `PID-5` (Patient Name) is 300 characters long``            |
| A message per name of the node                           | `unexpectedSegment(id)` beside `unexpectedEmptySegmentId`          |
| Content from the message in the text                     | ``The value `123-45-6789` is withdrawn``, ``has the day `29` ``    |

## Shape

```ts
const messages = {
  emptyMessage:
    "The message has no segments; it must start with the message header segment (`MSH`).",
  notMessageHeader:
    "The first segment is not the message header segment; a message must start with the message header segment (`MSH`).",
} as const;

// at the report site: the Segment ID goes in `actual`, not in the text
const message = file.message(messages.notMessageHeader, {
  ancestors: [first],
  place: first.position,
});
message.actual = first.name;
message.expected = ["MSH"];
```

## Before / after

```ts
// ✗ assembled
`${REQUIRED} — received '${first.name}' instead``Field ${segment.name}-${sequence} exceeds max length of ${max} (actual: ${length})`;
// ✓ one sentence per cause, the content in fields only, the node not named
"The first segment is not the message header segment; a message must start with the message header segment (`MSH`)."`The value is ${pluralize("character", length, true)} long; the field allows at most ${pluralize("character", max, true)}.`;
```

## Tests

Assert the full message with `toBe`, never `toContain`, and assert `actual` and `expected` where the rule sets them. A wording change updates the catalog and its tests in the same commit.

## Self-check

- [ ] Every cause has its own complete message; no message is built from parts.
- [ ] A lint rule's messages are all in its `messages` catalog; the report site adds no text.
- [ ] Sentence case, present tense, closing period; found first, then the requirement.
- [ ] The node the finding is placed on is described, not named; only an absent element is named.
- [ ] No content from the message in the text; it is in `actual` only.
- [ ] HL7v2 terms only; empty values described in words.
- [ ] `actual` and `expected` are set where the finding compares values; `url` points to the README.
- [ ] Tests assert the whole string.
