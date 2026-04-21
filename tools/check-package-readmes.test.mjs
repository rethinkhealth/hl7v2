import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";

import { checkPackage, runCheck } from "./check-package-readmes.mjs";

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

test("missing README fails", () => {
  const ws = setupWorkspace({
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

test("title mismatch fails with both names named", () => {
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

test("private package with no README is skipped, not failed", () => {
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

test("aggregates failures across multiple packages", () => {
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

test("checkPackage returns structured result for one package", () => {
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
