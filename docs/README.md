# Engineering documentation

This folder is the engineering record for people and agents working on glion. It is not the user-facing site; that is `glion.dev`, whose structure and voice are defined in ADR 0017. Package READMEs are the reference documentation for each package and are rendered into the site directly.

Each folder holds one kind of document. Pick the folder by what the document is for, not by topic.

| Folder          | What lives here                                                                                                                                       | When to add one                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `adr/`          | Architecture decision records. Numbered, never edited after acceptance except the History section.                                                    | You made a decision that constrains future work and someone will ask "why" in a year.      |
| `contributing/` | How-to guides for working on this repository: run a tool, triage a result, follow a workflow. Diataxis how-to voice, frontmatter with `type: how-to`. | A task a contributor performs more than once and would otherwise ask about in a PR thread. |

Plans, explorations, and working notes stay in issues and PR descriptions; nothing here records work in progress.

Two rules keep this useful:

1. **One document, one job.** A how-to that starts explaining why becomes an ADR plus a shorter how-to. Split rather than blend.
2. **Reference facts live in package READMEs.** If a fact about a package is wrong, fix the README, not a document here.

Where each kind of document ends up on the site, and which stay internal, is in ADR 0017 §8.
