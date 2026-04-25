# Reference voice and anti-pattern catalogue

This file is the long-form companion to the voice section in `SKILL.md`. Read it when:

- The user pushes back on a voice change you made.
- Auditing a README that has heavy editorial drift.
- A passage feels off but the rule it breaks is not obvious.

The rules below are not preferences. Each one exists because mixing voices makes a reference page slower to use, and a slow reference page is a defective one.

## The single test

> Could a reader use this sentence to look up a fact while in the middle of writing code?

If yes, it belongs in reference. If no, it belongs in a how-to or an explanation, and the link to it lives in `## See also`.

When in doubt, apply this test sentence-by-sentence. Most voice violations are individual sentences, not whole sections.

## Forbidden moves in reference prose

### 1. Recommending

A reference page does not recommend. It states.

| Don't                                                  | Do                                                                           |
| ------------------------------------------------------ | ---------------------------------------------------------------------------- |
| "Use `select` when you only need the first match."     | "Returns the first node matching the path, or `null`."                       |
| "It is recommended to enable this rule in production." | (delete; recommendations belong in a how-to)                                 |
| "Great for performance-sensitive code paths."          | (delete; if it is performance-relevant, state the asymptotic cost as a fact) |

### 2. Editorialising

Words that signal an opinion: _easy_, _simple_, _powerful_, _robust_, _elegant_, _intuitive_, _blazing_, _smart_, _clever_, _flexible_, _seamless_, _effortless_, _just works_, _out of the box_. Strip them.

If a piece of behaviour really is non-obvious, name the constraint instead. "The parser is robust to malformed delimiters" → "When `MSH-2` contains fewer than four characters, the parser falls back to default delimiters and emits a warning."

### 3. Instructing

A reference page describes the system; a how-to tells the reader what to do. Imperative verbs are a smell:

| Don't                                                         | Do                                                                                |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| "Pass `{ strict: true }` to enforce strict mode."             | "`options.strict` (default `false`) — when `true`, …"                             |
| "Wrap the call in `try` to catch parse errors."               | "Throws `ParseError` when the input is not valid HL7v2."                          |
| "Make sure to call `.freeze()` before sharing the processor." | "After `.freeze()`, the processor is immutable; subsequent `.use()` calls throw." |

The line is fine. Imperatives in **code comments inside an example** are fine; imperatives in the surrounding prose are not.

### 4. Selling

Marketing language inside a README erodes trust because the reader knows the document is signed by the author. Telling them the thing is good is a signal that they should be sceptical.

The shape to watch for is "X is a Y that Z" where Z is a value claim:

> "`@glion/parser` is a fast, robust parser that handles even the gnarliest HL7v2 in production."

The fix is to drop the value claim and let the facts speak:

> "`@glion/parser` is a `unified`-compatible parser that converts HL7v2 text into a structured AST."

### 5. Narrative

Reference is non-linear. Readers enter at any heading and read for thirty seconds. Sentences like "First we will…", "Now that we have…", "As we saw earlier…" assume linearity. Cut them. Each section stands on its own.

### 6. Hedging

Hedging makes a reference page slower because the reader has to figure out what the author actually believes. _Probably_, _usually_, _often_, _typically_, _in most cases_, _generally_. If the behaviour is conditional, name the condition. If it is uniform, drop the hedge.

| Don't                                                            | Do                                                       |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| "The parser usually emits one diagnostic per malformed segment." | "The parser emits one diagnostic per malformed segment." |
| "This typically returns `null` when the path is invalid."        | "Returns `null` when the path does not match a node."    |

### 7. Tutorialising

A reference page does not teach. The give-aways are:

- Numbered "Step 1 / Step 2" within a code example.
- "First", "Next", "Finally" framing.
- A whole worked program inside `## API`.

If a worked program is genuinely useful, move it to a how-to and link from `## See also`.

## Acceptable voice in `## What it does`

The `## What it does` section is the one place in the README where prose can be slightly more contextual. It is allowed to:

- Use one or two sentences of motivation ("Trailing empty fields can cause some receivers to reject messages — this rule flags them.").
- Reference adjacent packages briefly to place the package in the ecosystem.
- Mention a default behaviour with its rationale in a single short sentence.

It is not allowed to:

- Recommend a workflow.
- Tell the reader when to enable, disable, or configure the package.
- Run longer than two short paragraphs.

If the section is creeping past two paragraphs, the overflow belongs in `## API`, in `## What it checks` (lint rules), or in a how-to.

## Code example rules

Reference examples are different from how-to examples. They are minimum-load demonstrations of one fact, not finished programs.

- **Imports are explicit.** Every symbol used in the example is imported in the example. No `…` placeholders unless what was elided is genuinely irrelevant.
- **One fact per example.** If two examples differ only in one option, keep both — that is reference. If two examples differ in plot, you are writing a how-to.
- **Avoid `console.log`** unless the output of the call is the fact being demonstrated. For lint rules, `reporter([file])` is the canonical sink.
- **Lift fixtures from tests** rather than invent them. An invented HL7v2 fixture that looks plausible but contradicts the rule's actual fixtures is worse than no fixture at all.

## Audit triggers — when a section is in the wrong document type

When auditing, watch for these patterns. Each one signals that content has migrated into the wrong quadrant.

| Pattern in README                                         | What it actually is | Where it should go                   |
| --------------------------------------------------------- | ------------------- | ------------------------------------ |
| "Step 1: install. Step 2: import. Step 3: …"              | Tutorial            | `/docs/start/` (link from README)    |
| "If your application uses Bun instead of Node, do …"      | How-to              | `/docs/guides/` (link from README)   |
| "We chose to use `unified` because…"                      | Explanation         | `/docs/concepts/` (link from README) |
| "When you should use this rule in CI vs. dev"             | How-to              | `/docs/guides/` (link from README)   |
| Long discussion of trade-offs between approaches          | Explanation         | `/docs/concepts/`                    |
| Worked program, ~30+ lines, that solves a real-world goal | How-to              | `/docs/guides/`                      |

When you spot one of these in an existing README, propose a move with the suggested destination. Do not delete the content — its prose may be salvageable in the new home.

## Edge cases

### Packages whose value really is "ergonomics"

`@glion/hl7v2` is a pre-configured pipeline. Its value to the reader is convenience. The temptation is to say so. Resist:

> Don't: "`@glion/hl7v2` makes parsing easy by bundling everything you need."
>
> Do: "`@glion/hl7v2` exports `parseHL7v2`, a frozen `unified` processor assembled from the Glion plugin set."

The factual statement is more informative than the value claim, and the reader can decide for themselves whether convenience is what they want.

### Packages with strong opinions baked in

Some packages encode a position (for example, `decode-escapes` decodes by default). The README states what the package does; it does not defend the position. Defence belongs in `/docs/concepts/`. The README may include one sentence pointing there:

> "For the rationale behind decoding by default, see [Why glion decodes escapes by default](/docs/concepts/escape-handling)."

### Behavioural quirks worth flagging

When a package has a behaviour that is unusual but correct (for example, "returns `null` instead of throwing"), the right place to flag it is in the API entry for the affected symbol, with a single sentence and no editorial framing.

| Don't                                                                                  | Do                                                                     |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| "Note: unlike most parsers, this one returns `null` instead of throwing — be careful!" | "Returns `null` when the input is empty; never throws on empty input." |

## Final pass

Before reporting an audit done:

1. Read every paragraph aloud (or in your head, slowly).
2. For each sentence, ask: is this a fact, an instruction, or an opinion?
3. Facts stay. Instructions move to a how-to or a code comment. Opinions delete or move to explanation.

The README that survives this pass will read as boring. That is the goal.
