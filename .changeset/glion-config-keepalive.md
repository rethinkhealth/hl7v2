---
"@glion/cli": minor
---

Breaking: `glion.config.ts` no longer takes `keepAlive` or `keepAliveInitialDelay`. A config that sets either fails validation as an unknown key. `glion start` and `glion dev` listen with `@glion/mllp`'s socket defaults, as before: keep-alive probes after 60 s idle, and Nagle's algorithm off.
