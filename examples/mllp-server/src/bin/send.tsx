#!/usr/bin/env node
import { render } from "ink";
import { App } from "../sender/app.js";

// Parse command line arguments
const args = process.argv.slice(2);
let port = 2575;
let host = "localhost";

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--port" || args[i] === "-p") {
    port = Number.parseInt(args[i + 1] || "2575", 10);
    i++;
  }
  if (args[i] === "--host" || args[i] === "-h") {
    host = args[i + 1] || "localhost";
    i++;
  }
  if (args[i] === "--help") {
    console.log(`
MLLP Sender - Send HL7v2 messages to an MLLP server

Usage: mllp-send [options]

Options:
  -p, --port <port>   Target port (default: 2575)
  -h, --host <host>   Target host (default: localhost)
  --help              Show this help message
`);
    process.exit(0);
  }
}

render(<App initialHost={host} initialPort={port} />);
