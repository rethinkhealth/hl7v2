# create-glion

Scaffold a new Glion app from an example in [`rethinkhealth/glion`](https://github.com/rethinkhealth/glion).

## Usage

```bash
# Interactive
pnpm create glion
npm create glion
yarn create glion
bun create glion

# Non-interactive
pnpm create glion my-app --example mllp-server
```

## Options

| Flag                   | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| `[dir]` (positional)   | Target directory. Prompts when omitted.                  |
| `-e, --example <name>` | Example to clone from `examples/`. Prompts when omitted. |
| `-h, --help`           | Print usage and exit.                                    |

## Examples

| Name              | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| `mllp-server`     | HL7v2 MLLP server with route handlers (Node.js).               |
| `mllp-server-bun` | HL7v2 MLLP server with route handlers (Bun).                   |
| `mllp-client`     | MLLP client sending sample messages — companion to the server. |

Each example is fetched from `github:rethinkhealth/glion/examples/<name>` via [`giget`](https://github.com/unjs/giget).

## License

MIT © Glion contributors
