/**
 * @module tools/check-package-readmes.test
 * @file Integration tests for the per-package README check.
 *   Test strategy: each scenario materialises a disposable workspace under
 *   the OS temp directory via {@link setupWorkspace}, runs the real
 *   {@link runCheck} / {@link checkPackage} against the filesystem (no
 *   mocks, no stubs), asserts on the structured result, and tears the
 *   workspace down in a `finally` block so failures never leak disk state
 *   between tests.
 *   Using real filesystem calls keeps the tests honest about how the
 *   script actually behaves on disk. The script has no network, no time,
 *   and no hidden state, so an in-process temp-dir integration test is
 *   both the cheapest and the most faithful coverage possible.
 *   Runner: Node's built-in {@link https://nodejs.org/api/test.html node:test}
 *   module. Chosen over vitest so the tooling folder has zero runtime
 *   dependencies and the tests can execute the moment Node is available,
 *   without waiting for the workspace-wide `pnpm install` to complete.
 *   Invoke via `pnpm check:readmes:test`.
 */

import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";

import { checkPackage, runCheck } from "./check-package-readmes.mjs";

/**
 * Declarative description of a single package to materialise inside a
 * synthetic workspace.
 *
 * @typedef {object} PackageSpec
 * @property {object} pkgJson Object serialised verbatim as the package's `package.json`. Only
 *   fields consulted by the script (`name`, `private`) need to be set;
 *   others are ignored.
 * @property {string} [readme] Optional README.md contents. Omit the property entirely (not set it
 *   to an empty string) to simulate a package that ships **without** a
 *   README — the difference matters because an empty-string README is
 *   a file-exists-but-invalid case, while an absent property leaves
 *   the file off disk completely.
 */

/**
 * Handle returned by {@link setupWorkspace} for interacting with a
 * synthetic workspace.
 *
 * @typedef {object} WorkspaceHandle
 * @property {string} root Absolute path to the workspace root. Pass this directly to
 *   {@link runCheck}. The `packages/` subdirectory has already been
 *   created under it.
 * @property {() => void} cleanup Removes the workspace and all its contents. Call in a `finally`
 *   block so failing tests still leave a clean temp dir behind.
 */

/**
 * Materialise a synthetic workspace under the OS temp directory.
 *
 * The resulting layout mirrors what the script expects at the real
 * repository root:
 *
 *     <root>/
 *       packages/
 *         <dirName>/
 *           package.json
 *           README.md?     (only if the spec provided `readme`)
 *
 * Each test is responsible for calling `cleanup()` in a `finally` block.
 * We deliberately do not use `node:test`'s `afterEach` hook so the tests
 * remain readable top-to-bottom without hidden lifecycle magic.
 *
 * @param {Record<string, PackageSpec>} packages Map from package directory name (e.g. `"mllp"`) to its spec. The
 *   directory name does **not** need to match `pkgJson.name` — several
 *   tests deliberately put `@glion/demo` in a directory called `demo`.
 * @returns {WorkspaceHandle}
 */
function setupWorkspace(packages) {
  const root = mkdtempSync(join(tmpdir(), "glion-readme-check-"));
  const pkgsDir = join(root, "packages");
  mkdirSync(pkgsDir);
  for (const [dirName, conf] of Object.entries(packages)) {
    const dir = join(pkgsDir, dirName);
    mkdirSync(dir, { recursive: true });
    writeFileSync(
      join(dir, "package.json"),
      JSON.stringify(conf.pkgJson, null, 2)
    );
    if (conf.readme !== undefined) {
      writeFileSync(join(dir, "README.md"), conf.readme);
    }
  }
  return {
    root,
    cleanup: () => rmSync(root, { recursive: true, force: true }),
  };
}

/**
 * Build a README string that satisfies every current rule in
 * {@link REQUIRED_SECTIONS}. Individual tests derive failing variants
 * from this baseline by `.replace()`-ing out the section they want to
 * omit — keeping the rest of the content unchanged ensures the failure
 * reported by the script is attributable to the removed section and
 * nothing else.
 *
 * @param {string} name The fully-qualified package name (e.g. `"@glion/demo"`) used as the
 *   title of the generated README. Using the same value as the test's
 *   `package.json` `name` keeps the title-match check satisfied by
 *   default so every "negative" test isolates one cause of failure.
 * @returns {string} Compliant README content.
 */
function compliantReadme(name) {
  return `# ${name}

> A one-sentence description.

## What it does

Some prose.

## Install

\`\`\`bash
pnpm add ${name}
\`\`\`

## Use

\`\`\`ts
// example
\`\`\`

## Part of Glion

Footer content.
`;
}

// --------------------------------------------------------------------
// Happy path
// --------------------------------------------------------------------

test("compliant README passes check", () => {
  const ws = setupWorkspace({
    demo: {
      pkgJson: { name: "@glion/demo" },
      readme: compliantReadme("@glion/demo"),
    },
  });
  try {
    const result = runCheck(ws.root);
    assert.equal(result.ok, true);
    assert.equal(result.failed.length, 0);
    assert.equal(result.scanned, 1);
    assert.equal(result.skipped, 0);
  } finally {
    ws.cleanup();
  }
});

// --------------------------------------------------------------------
// Missing-file and missing-section failures
// --------------------------------------------------------------------

test("missing README fails", () => {
  const ws = setupWorkspace({
    // `readme` deliberately omitted — simulates a package that ships
    // with no README.md on disk at all.
    demo: {
      pkgJson: { name: "@glion/demo" },
    },
  });
  try {
    const result = runCheck(ws.root);
    assert.equal(result.ok, false);
    assert.equal(result.failed.length, 1);
    assert.match(result.failed[0].failures.join(" | "), /missing README\.md/);
  } finally {
    ws.cleanup();
  }
});

test("README missing ## Install fails", () => {
  // Remove the Install section while preserving the Use and Part of
  // Glion sections so the failure can only be attributed to Install.
  const readme = compliantReadme("@glion/demo").replace(
    /## Install[\s\S]+?## Use/,
    "## Use"
  );
  const ws = setupWorkspace({
    demo: { pkgJson: { name: "@glion/demo" }, readme },
  });
  try {
    const result = runCheck(ws.root);
    assert.equal(result.ok, false);
    assert.match(result.failed[0].failures.join(" | "), /## Install/);
  } finally {
    ws.cleanup();
  }
});

test("README missing ## Use fails", () => {
  const readme = compliantReadme("@glion/demo").replace(
    /## Use[\s\S]+?## Part of Glion/,
    "## Part of Glion"
  );
  const ws = setupWorkspace({
    demo: { pkgJson: { name: "@glion/demo" }, readme },
  });
  try {
    const result = runCheck(ws.root);
    assert.equal(result.ok, false);
    assert.match(result.failed[0].failures.join(" | "), /## Use/);
  } finally {
    ws.cleanup();
  }
});

test("README missing ## Part of Glion fails", () => {
  // Drop the Part of Glion section and everything after it — the
  // footer is the last section in the template so this is the natural
  // shape of "forgot to add it".
  const readme = compliantReadme("@glion/demo").replace(
    /## Part of Glion[\s\S]+$/,
    ""
  );
  const ws = setupWorkspace({
    demo: { pkgJson: { name: "@glion/demo" }, readme },
  });
  try {
    const result = runCheck(ws.root);
    assert.equal(result.ok, false);
    assert.match(result.failed[0].failures.join(" | "), /## Part of Glion/);
  } finally {
    ws.cleanup();
  }
});

// --------------------------------------------------------------------
// Title match
// --------------------------------------------------------------------

test("title mismatch fails with both names named", () => {
  // The failure message must name both the actual title found in the
  // README and the expected package.json name, so a contributor can
  // fix it without having to look up the source of each side.
  const ws = setupWorkspace({
    demo: {
      pkgJson: { name: "@glion/demo" },
      readme: compliantReadme("@glion/wrong-name"),
    },
  });
  try {
    const result = runCheck(ws.root);
    assert.equal(result.ok, false);
    const joined = result.failed[0].failures.join(" | ");
    assert.match(joined, /@glion\/wrong-name/);
    assert.match(joined, /@glion\/demo/);
  } finally {
    ws.cleanup();
  }
});

// --------------------------------------------------------------------
// Private-package opt-out
// --------------------------------------------------------------------

test("private package with no README is skipped, not failed", () => {
  // Regression lock: private packages must not block the check, even
  // when they entirely lack a README. The `scanned` counter also must
  // not include them — skipped is a distinct state from passed.
  const ws = setupWorkspace({
    internal: {
      pkgJson: { name: "@glion/internal", private: true },
    },
  });
  try {
    const result = runCheck(ws.root);
    assert.equal(result.ok, true);
    assert.equal(result.failed.length, 0);
    assert.equal(result.scanned, 0);
    assert.equal(result.skipped, 1);
  } finally {
    ws.cleanup();
  }
});

// --------------------------------------------------------------------
// Multi-package aggregation
// --------------------------------------------------------------------

test("aggregates failures across multiple packages", () => {
  // Mixed cohort: one clean, one missing README, one missing a section.
  // The aggregate result must list only the failing two, preserve
  // ordering that lets the caller identify each, and count the clean
  // one toward `scanned` without adding it to `failed`.
  const ws = setupWorkspace({
    alpha: {
      pkgJson: { name: "@glion/alpha" },
      readme: compliantReadme("@glion/alpha"),
    },
    beta: {
      pkgJson: { name: "@glion/beta" },
    },
    gamma: {
      pkgJson: { name: "@glion/gamma" },
      readme: compliantReadme("@glion/gamma").replace(
        /## Install[\s\S]+?## Use/,
        "## Use"
      ),
    },
  });
  try {
    const result = runCheck(ws.root);
    assert.equal(result.ok, false);
    assert.equal(result.failed.length, 2);
    const names = result.failed.map((f) => f.name).toSorted();
    assert.deepEqual(names, ["@glion/beta", "@glion/gamma"]);
    assert.equal(result.scanned, 3);
  } finally {
    ws.cleanup();
  }
});

// --------------------------------------------------------------------
// Direct helper smoke test
// --------------------------------------------------------------------

test("checkPackage returns structured result for one package", () => {
  // Exercised in addition to runCheck because checkPackage is exported
  // and callable on its own; a consumer scripting against the module
  // should get a stable structured result without having to scan a
  // whole workspace.
  const ws = setupWorkspace({
    demo: {
      pkgJson: { name: "@glion/demo" },
      readme: compliantReadme("@glion/demo"),
    },
  });
  try {
    const result = checkPackage(join(ws.root, "packages", "demo"));
    assert.equal(result.name, "@glion/demo");
    assert.equal(result.failures.length, 0);
  } finally {
    ws.cleanup();
  }
});
