---
"@glion/builder": minor
"@glion/parser": minor
"@glion/config": minor
"@glion/util-visit": minor
"@glion/hl7v2": minor
---

**BREAKING:** Sunset the legacy AST-shape mode. Empty fields, repetitions, and components are now always represented with `children: []`.

The `experimental.emptyMode` setting (which previously toggled between `"legacy"` — full skeleton with empty-string subcomponent — and `"empty"` — `children: []`) has been removed entirely. The "empty" representation is now the only behavior.

**Why**

The previous design routed every `f()`, `r()`, `c()` call in `@glion/builder` through `loadConfig()` from `@glion/config`, which in turn pulled `cosmiconfig` and Node-only modules (`fs`, `path`, `os`, `crypto`, `module`, `url`) into every consumer's bundle. This broke runtime portability — Workers and Deno bundles dragged in Node builtins they couldn't resolve, and even Node consumers paid the bundle-size cost. The architectural fix is to remove disk-based config discovery from leaf factory functions; sunsetting `legacy` mode is the cleanest way to do that, since it was the only thing the lookup gated.

**Migration**

If you parse HL7v2 messages or build them via `@glion/builder` and branch on placeholder leaves of empty fields, switch to checking `children.length === 0`:

```diff
- if (field.children[0]?.children[0]?.children[0]?.value === "") { ... }
+ if (field.children.length === 0) { ... }
```

`@glion/util-query`'s `value()` helper already returns `null` for empty children — most consumers using it need no change.

**Configuration**

Any `.hl7v2rc.*` configuration still carrying `experimental.emptyMode` will now be rejected by `@glion/config`'s schema validator. Remove that block:

```diff
  {
    "settings": {
-     "experimental": { "emptyMode": "empty" },
      "delimiters": { "field": "|" }
    }
  }
```

**Side effects**

- `@glion/builder` no longer depends on `@glion/config`. Consumers' bundles shrink (cosmiconfig + dependencies dropped).
- `@glion/parser` no longer accepts `settings.experimental` — only `settings.delimiters`.
- `@glion/util-visit`'s test infrastructure no longer manipulates `.hl7v2rc.json` to drive builder behavior.
- The Workers and Deno runtime adapters of `@glion/mllp-client` (PR #615, PR #616) bundle cleanly without `nodejs_compat` polyfills.
