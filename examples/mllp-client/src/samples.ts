import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const samplesDir = join(__dirname, "..", "samples");

const SAMPLE_NAMES = ["adt-a01", "orm-o01", "oru-r01"] as const;
type SampleName = (typeof SAMPLE_NAMES)[number];

export function loadSample(name: string): string {
  if (!SAMPLE_NAMES.includes(name as SampleName)) {
    throw new Error(
      `Unknown sample "${name}". Available: ${SAMPLE_NAMES.join(", ")}`
    );
  }
  const filePath = join(samplesDir, `${name}.hl7`);
  const content = readFileSync(filePath, "utf8");
  return content.replaceAll(/\r\n|\n/g, "\r").replace(/\r$/, "");
}

export function listSamples(): readonly string[] {
  return SAMPLE_NAMES;
}
