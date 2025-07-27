#!/usr/bin/env node
import program from './command';

// Main function that runs the CLI - only execute when file is run directly
function main() {
  program.parse(process.argv);
}

// Only run main when this file is executed directly, not when imported
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
