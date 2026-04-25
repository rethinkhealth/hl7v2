# Lint rule anatomy

This file is the deeper reference behind the lint-rule template in `SKILL.md`. Read it when:

- The lint rule's `src/` does not match the standard shape and you cannot read off the report shape, severity, or visited node from the canonical pattern.
- The tests are large or messy and you cannot pick a clean Valid/Invalid pair without guidance.
- A pill cannot be derived from sources and you need the tie-breaking rules.

The skill's value on lint rules is precision. Every fact in a lint rule README is part of the rule's contract; a single fabricated diagnostic message corrupts that contract.

## How to read a glion lint rule's source

A typical glion lint rule is a single `unified` plugin with this shape:

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";
import { visit } from "@glion/util-visit";

const hl7v2LintExample: Plugin<[Options?], Root> = (options) => (tree, file) => {
  visit(tree, "segment", (node, ancestors) => {
    if (/* condition */) {
      file.message("…", node);
    }
  });
};

export default hl7v2LintExample;
```

Read the source in this order:

1. **Default export** — the plugin name. Confirm the README's `## API` heading and TypeScript declaration match.
2. **Plugin signature `Plugin<[…], Root>`** — the bracket contents reveal whether the rule takes options.
3. **`Options` interface** — when present, this drives the `## Options` table. Every property becomes a row; defaults come from where the option is read with `options.x ?? default`.
4. **`visit(tree, "<type>", …)`** — the node type visited drives the `## What it checks` paragraph. Common types: `segment`, `field`, `component`, `subcomponent`, `repetition`, `group`, `root`.
5. **Report calls** — every `file.message(...)` is a possible diagnostic; every `file.fail(...)` is fatal. Capture each unique message string. These end up under the `### Invalid` block verbatim.
6. **Profile context reads** — calls like `file.data.profile?.…` indicate the rule is profile-aware. The `Profile-aware` pill should be `✅` and `Requires` should include `@glion/annotate-profile-context`.
7. **Early returns** — branches that exit silently (for example, no profile context, no `MSH`, Z-segments) belong in `## What it does` as one-sentence facts ("Segments without a known profile are silently skipped.").

If the source uses helpers from `@glion/util-visit` other than `visit` (such as `visitParents`), document the visited node type plain — the README does not need to mention the helper.

## Deriving the diagnostic message exactly

Diagnostic strings sometimes use template literals with interpolation:

```ts
file.message(
  `Required field ${segmentId}-${seq} (${name}) is missing or empty`,
  node
);
```

The README must reproduce both the **template** and a **concrete instance** that matches the `### Invalid` example.

- The template (with placeholders) goes in the prose surrounding the example.
- The concrete instance (interpolated for the chosen example) goes in the fenced code block under "Reported message:".

When pluralisation is involved (`1 trailing empty field` vs `2 trailing empty fields`), state the pluralisation rule in one short sentence after the example block.

## Picking a Valid/Invalid pair

Tests usually contain many cases. Pick the pair that most directly demonstrates the rule, by these tiebreakers in order:

1. **Smallest fixture** that still includes `MSH` and the relevant segment.
2. **Most common real-world structure** — `MSH + PID` for ADT-flavoured rules, `MSH + ORC + OBR + OBX` for orders/observations.
3. **Single failure cause.** An `### Invalid` example that triggers two diagnostics is harder to read than one that triggers exactly one.
4. **Realistic field values.** `DOE^JANE` reads better than `XXX^YYY`. Lift values from existing test fixtures across the repo if the rule's own tests use placeholders.
5. **Parallel structure between Valid and Invalid.** The two examples should differ in exactly the field the rule cares about, so the diff is visible at a glance.

If no test case meets the criteria, you may need a synthetic fixture. When you do:

- Verify it by running the rule mentally against the source.
- Surface to the user that you have introduced a synthetic example so it can be added to tests.
- Prefer minimally modifying an existing test fixture over inventing one from scratch.

## Pill tie-breakers

When pill values cannot be unambiguously derived:

- **Recommended / Profile-aware** — read the preset's `package.json` `dependencies`. If the rule is referenced from the preset's source but not its `dependencies`, the pill is still `✅`. If it is the inverse (in deps but not in source), the pill is `❌` and surface the inconsistency to the user.
- **Default severity** — if the rule has both `file.message` and `file.fail` calls, the pill is `error` (the worst severity the rule can emit by default) but the prose should clarify the conditions for each. If the rule has neither (only emits via a custom helper), trace the helper to the underlying call.
- **Requires** — drop the rule's own implicit dependencies (`unified`, `vfile`, the parser when not needed at lint time). Include only packages that must run earlier in the same `unified` pipeline. Ordering: `@glion/parser` first, profile-context next, profile-segments / profile-fields next, then anything else alphabetically.
- **Since** — when the rule was renamed (the `@rethinkhealth/hl7v2-*` to `@glion/*` move), the `Since` value tracks the rule's _first publish under any name_ unless the user explicitly says otherwise. Document the rename in the prose under `## What it does` if it affects upgrade paths.

## When the rule has options

Options sections expand to:

```markdown
## Options

| Option   | Type     | Default     | Description            |
| -------- | -------- | ----------- | ---------------------- |
| `<name>` | `<type>` | `<default>` | <one-line description> |

\`\`\`ts
import { unified } from "unified";
import { hl7v2Parser } from "@glion/parser";
import hl7v2Lint<RuleName> from "@glion/lint-<rule-name>";

const file = await unified()
.use(hl7v2Parser)
.use(hl7v2Lint<RuleName>, { <option>: <non-default-value> })
.process(message);
\`\`\`
```

Rules:

- The Default column shows the literal default, including quotes for strings.
- The Description column is one line. If a description needs more than one line, the option may be too coarse — surface that to the user.
- The example uses a non-default value to motivate the option's existence. If you cannot show a meaningful non-default, the option may be unused — flag it.

## Multi-rule packages

A few packages may export more than one rule (rare in glion today). When this happens:

- Repeat the entire lint-rule template per rule under H2s (`## <rule-name>`).
- The metadata table for each rule sits directly under its H2.
- The package-level `## What it does` describes the bundle; the per-rule sections describe each rule.

If you encounter a package that looks like this, surface to the user — splitting into one rule per package is the established convention and may be the better fix.

## Rules that depend on other glion plugins

Profile-aware rules (and similar) require an annotator earlier in the pipeline:

- The `## Use` example must include the prerequisite plugins in order.
- The `Requires` pill must list them.
- The `## What it does` paragraph must state the dependency in one sentence ("Reads `file.data.profile` populated by `@glion/annotate-profile-context`.").

If a rule silently skips when its prerequisite is missing (for example, no profile context → no diagnostics), state this fact in `## What it does`. Silent skip is a behaviour, not an absence of behaviour.

## Common audit findings on existing rule READMEs

These come up often when bringing existing rule docs into line with the template:

| Finding                                                                               | Fix                                                                                                     |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| No metadata table                                                                     | Add it under the description, with all five pills filled                                                |
| `Valid`/`Invalid` examples are missing or invented                                    | Replace with test-sourced fixtures and verbatim diagnostic messages                                     |
| Template literal interpolation in diagnostic message is not flagged in prose          | Add one sentence after the message: "The values `…` are interpolated from the offending segment/field." |
| `## API` includes recommendations like "We recommend enabling this in CI"             | Move to a how-to in `/docs/guides/` and link from `## See also`                                         |
| Multiple alternative phrasings of the rule appear ("Also known as", "Some call this") | Pick one. Reference does not enumerate folk taxonomies                                                  |
| `## When not to use it` is missing                                                    | Add when a legitimate opt-out case exists; omit silently when none does                                 |

When applying these in audit mode, group fixes in the summary by category (voice / structural / metadata / examples / external) so the user can review them in batches.
