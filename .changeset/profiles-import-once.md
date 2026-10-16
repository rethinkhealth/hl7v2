---
"@glion/profiles": patch
---

A bundled profile is imported once per process. A later load of the same profile resolves from memory instead of importing it again, which removes most of the fixed cost the profile-aware plugins paid on every message. A load after a failed import imports again.
