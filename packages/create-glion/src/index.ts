#!/usr/bin/env node
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { parseArgs } from "node:util";

import * as p from "@clack/prompts";
import { downloadTemplate } from "giget";

const REPO = "github:rethinkhealth/glion";
const DEFAULT_DIR = "./my-glion-app";
const DEFAULT_EXAMPLE = "starter";

const EXAMPLES = [
  {
    hint: "Starter Glion — minimal HL7v2 MLLP server (default)",
    label: "starter",
    value: "starter",
  },
  {
    hint: "HL7v2 MLLP server with route handlers (Node.js)",
    label: "mllp-server",
    value: "mllp-server",
  },
  {
    hint: "HL7v2 MLLP server with route handlers (Bun)",
    label: "mllp-server-bun",
    value: "mllp-server-bun",
  },
  {
    hint: "MLLP client sending sample messages",
    label: "mllp-client",
    value: "mllp-client",
  },
] as const;

type ExampleId = (typeof EXAMPLES)[number]["value"];

const HELP = `Usage: create-glion [dir] [--example <name>]

Options:
  -e, --example <name>  Example to clone from examples/
  -h, --help            Show this message

Examples:
${EXAMPLES.map((e) => `  ${e.value.padEnd(18)} ${e.hint}`).join("\n")}
`;

function isExampleId(value: string): value is ExampleId {
  return EXAMPLES.some((e) => e.value === value);
}

function abort(message = "Aborted."): never {
  p.cancel(message);
  process.exit(0);
}

async function run(): Promise<void> {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    args: process.argv.slice(2),
    options: {
      example: { short: "e", type: "string" },
      help: { short: "h", type: "boolean" },
    },
  });

  if (values.help) {
    process.stdout.write(`${HELP}\n`);
    return;
  }

  p.intro("create-glion");

  let dir = positionals[0];
  if (!dir) {
    const answer = await p.text({
      defaultValue: DEFAULT_DIR,
      message: "Where should we scaffold your project?",
      placeholder: DEFAULT_DIR,
    });
    if (p.isCancel(answer)) {
      abort();
    }
    dir = answer.trim().length === 0 ? DEFAULT_DIR : answer;
  }

  const target = resolve(process.cwd(), dir);

  if (existsSync(target)) {
    const proceed = await p.confirm({
      initialValue: false,
      message: `${target} already exists. Continue and overwrite?`,
    });
    if (p.isCancel(proceed) || !proceed) {
      abort();
    }
  }

  let example = values.example;
  if (example && !isExampleId(example)) {
    p.cancel(
      `Unknown example: ${example}. Available: ${EXAMPLES.map((e) => e.value).join(", ")}`
    );
    process.exit(1);
  }

  if (!example) {
    const choice = await p.select({
      initialValue: DEFAULT_EXAMPLE,
      message: "Choose an example",
      options: EXAMPLES.map((e) => ({
        hint: e.hint,
        label: e.label,
        value: e.value,
      })),
    });
    if (p.isCancel(choice)) {
      abort();
    }
    example = choice;
  }

  const spinner = p.spinner();
  spinner.start(`Downloading example: ${example}`);
  await downloadTemplate(`${REPO}/examples/${example}`, {
    dir: target,
    force: true,
  });
  spinner.stop(`Scaffolded ${example} → ${target}`);

  p.note(`cd ${dir}\npnpm install\npnpm dev`, "Next steps");
  p.outro("Happy hacking!");
}

try {
  await run();
} catch (error: unknown) {
  p.cancel(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
