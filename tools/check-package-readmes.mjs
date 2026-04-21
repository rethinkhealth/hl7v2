#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

export const REQUIRED_SECTIONS = ["## Install", "## Use", "## Part of Glion"];

export function checkPackage(pkgDir) {
  const pkgJsonPath = join(pkgDir, "package.json");
  let pkgJson;
  try {
    pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf8"));
  } catch (error) {
    return {
      name: pkgDir,
      skipped: false,
      failures: [`failed to read package.json: ${error.message}`],
    };
  }

  const name = pkgJson.name ?? pkgDir;

  if (pkgJson.private === true) {
    return { name, skipped: true, failures: [] };
  }

  const failures = [];
  const readmePath = join(pkgDir, "README.md");
  let readme;
  try {
    readme = readFileSync(readmePath, "utf8");
  } catch {
    return { name, skipped: false, failures: ["missing README.md"] };
  }

  const titleMatch = readme.match(/^#\s+(.+?)\s*$/m);
  const firstTitle = titleMatch?.[1]?.trim();
  if (firstTitle !== pkgJson.name) {
    failures.push(
      `title mismatch: README first heading is ${
        firstTitle ? `"${firstTitle}"` : "(no # heading found)"
      }, expected "${pkgJson.name}"`
    );
  }

  for (const section of REQUIRED_SECTIONS) {
    const pattern = new RegExp(
      `^${section.replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`,
      "m"
    );
    if (!pattern.test(readme)) {
      failures.push(`missing required section: \`${section}\``);
    }
  }

  return { name, skipped: false, failures };
}

export function runCheck(workspaceRoot) {
  const packagesDir = join(workspaceRoot, "packages");
  let entries;
  try {
    entries = readdirSync(packagesDir);
  } catch (error) {
    return {
      ok: false,
      failed: [
        {
          name: packagesDir,
          skipped: false,
          failures: [`cannot read packages directory: ${error.message}`],
        },
      ],
      scanned: 0,
      skipped: 0,
      total: 0,
    };
  }

  const results = [];
  for (const entry of entries) {
    const pkgDir = join(packagesDir, entry);
    try {
      if (!statSync(pkgDir).isDirectory()) {
        continue;
      }
    } catch {
      continue;
    }
    results.push(checkPackage(pkgDir));
  }

  const failed = results.filter((r) => !r.skipped && r.failures.length > 0);
  const scanned = results.filter((r) => !r.skipped).length;
  const skipped = results.filter((r) => r.skipped).length;

  return {
    ok: failed.length === 0,
    failed,
    scanned,
    skipped,
    total: results.length,
  };
}

function formatReport(result) {
  if (result.ok) {
    return `✓ All ${result.scanned} public package README(s) are compliant (${result.skipped} private skipped).`;
  }
  const lines = [
    `✗ ${result.failed.length} package(s) failed README checks:`,
    "",
  ];
  for (const failure of result.failed) {
    lines.push(`  ${failure.name}`);
    for (const reason of failure.failures) {
      lines.push(`    - ${reason}`);
    }
    lines.push("");
  }
  lines.push(
    `${result.scanned} scanned · ${result.failed.length} failed · ${result.skipped} private skipped.`
  );
  return lines.join("\n");
}

const invokedAsMain =
  import.meta.url === `file://${process.argv[1]}` ||
  import.meta.url.endsWith(process.argv[1]);

if (invokedAsMain) {
  const result = runCheck(process.cwd());
  const report = formatReport(result);
  if (result.ok) {
    console.log(report);
    process.exit(0);
  } else {
    console.error(report);
    process.exit(1);
  }
}
