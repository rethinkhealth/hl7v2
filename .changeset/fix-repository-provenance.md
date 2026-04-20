---
"@glion/hl7v2": patch
"@glion/cli": patch
---

Fix npm sigstore provenance verification by normalizing the `repository` field in every publishable package.json to the object form with a full GitHub URL and a `directory` subpath:

```json
{
  "type": "git",
  "url": "git+https://github.com/rethinkhealth/glion.git",
  "directory": "packages/<name>"
}
```

Previously, most packages used the bare string shorthand `"rethinkhealth/glion.git"`, and `@glion/annotate-delimiters` had no `repository` field at all. npm's sigstore provenance check couldn't resolve either into a URL matching the OIDC claim (`https://github.com/rethinkhealth/glion`), causing CI publish to fail with:

```
E422 Unprocessable Entity - PUT https://registry.npmjs.org/@glion%2fannotate-delimiters
Error verifying sigstore provenance bundle:
"repository.url" is "", expected to match "https://github.com/rethinkhealth/glion" from provenance
```

No runtime or API changes.
