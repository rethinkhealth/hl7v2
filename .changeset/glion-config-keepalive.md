---
"@glion/cli": minor
---

Breaking: `glion.config.ts` no longer takes `keepAlive` or `keepAliveInitialDelay`, which `@glion/mllp`'s `serve()` dropped. A config that sets either fails validation as an unknown key. `glion start` and `glion dev` listen with Node's defaults: no TCP keep-alive, and Nagle's algorithm on.
