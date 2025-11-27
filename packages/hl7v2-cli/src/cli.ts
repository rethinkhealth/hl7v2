#!/usr/bin/env node
import { parseHL7v2 } from "@rethinkhealth/hl7v2";
import { ConfigurationError, loadSettings } from "@rethinkhealth/hl7v2-config";
import { args } from "unified-args";

// Optionally: Pre-validate settings before unified-args processes config
// This provides better error messages for configuration issues
try {
  await loadSettings();
} catch (error) {
  if (error instanceof ConfigurationError) {
    console.error("Configuration error:", error.message);
    process.exit(1);
  }
  // Ignore other errors (e.g., no config file found) - unified-args will handle them
}

// unified-args handles everything else (plugin loading, severity, etc.)
args({
  description: "Command line interface to inspect and change HL7v2 messages",
  extensions: ["hl7v2", "hl7", "txt"],
  ignoreName: ".hl7v2ignore",
  name: "hl7v2",
  packageField: "hl7v2",
  pluginPrefix: "hl7v2",
  processor: parseHL7v2,
  rcName: ".hl7v2rc",
  version: "1.0.0",
});
