# @rethinkhealth/cli

Command line interface to inspect and change HL7v2 files with [@rethinlhealth/hl7v2](https://github.com/rethinkhealth/hl7v2/).

---

## Intro

This package is a command line interface (CLI) that you can use in your terminal or in npm scripts and the like to inspect and change Hl7v2 files. This CLI is built around [@rethinkhealth/hl7v2](../../README.md), which is an ecosystem of plugins that work with HTML as structured data, specifically ASTs (abstract syntax trees). You can choose from the existing plugins or make your own.

See [the monorepo readme](https://github.com/rethinkhealth/hl7v2/) for info on what the `@rethinkhealth/hl7v2` ecosystem is.

---

## When should I use this?

You can use this package when you want to work with the HL7v2 files in your project from the command line. `@rethinkhealth/hl7v2-cli` has many options and you can combine it with many plugins, so it should be possible to do what you want. If not, you can always use `@rethinkhealth/hl7v2` itself manually in a script.

---

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 16+), install with [npm](https://docs.npmjs.com/cli/v11/commands/npm-install):

```bash
npm install @rethinkhealth/hl7v2-cli
```

---

## Use

Parse `siu.hl7v2` and generate JSON with [@rethinkhealth/hl7v2-jsonify](../hl7v2-jsonify/):

```bash
hl7v2 siu.hl7v2 --output
```

---

## CLI

The interface of `@rethinkhealth/hl7v2-cli` is explained as follows on its help page (hl7v2 --help):

```txt
Usage: hl7v2 [options] [path | glob ...]

  Command line interface to inspect and change HL7v2 messages

Options:

      --[no-]color                        specify color in report (on by default)
      --[no-]config                       search for configuration files (on by default)
  -e  --ext <extensions>                  specify extensions
      --file-path <path>                  specify path to process as
  -f  --frail                             exit with 1 on warnings
  -h  --help                              output usage information
      --[no-]ignore                       search for ignore files (on by default)
  -i  --ignore-path <path>                specify ignore file
      --ignore-path-resolve-from cwd|dir  resolve patterns in `ignore-path` from its directory or cwd
      --ignore-pattern <globs>            specify ignore patterns
      --inspect                           output formatted syntax tree
  -o  --output [path]                     specify output location
  -q  --quiet                             output only warnings and errors
  -r  --rc-path <path>                    specify configuration file
      --report <reporter>                 specify reporter
  -s  --setting <settings>                specify settings
  -S  --silent                            output only errors
      --silently-ignore                   do not fail when given ignored files
      --[no-]stdout                       specify writing to stdout (on by default)
  -t  --tree                              specify input and output as syntax tree
      --tree-in                           specify input as syntax tree
      --tree-out                          output syntax tree
  -u  --use <plugins>                     use plugins
      --verbose                           report extra info for messages
  -v  --version                           output version number
  -w  --watch                             watch for changes and reprocess

Examples:

  # Process `input.hl7v2`
  $ hl7v2 input.hl7v2 -o output.hl7v2

  # Pipe
  $ hl7v2 < input.hl7v2 > output.hl7v2

  # Rewrite all applicable files
  $ hl7v2 . -o
```

More info on all these options is available at [`unified-args`][unified-args]. 

`@rethinkhealth/h7l7v2-cli` is `unified-args` preconfigured to:

* load `@rethinkhealth/h7l7v2-` plugins
* search for HL7v2 extensions (`.hl7v2`, `.hl7`, `.txt`)
* ignore paths found in `.hl7v2ignore` files
* load configuration from `.hl7v2rc`, `.hl7v2rc.js`, etc files
* use configuration from `hl7v2` fields in `package.json` files

---

## Security

Use of `@rethinkhealth/hl7v2` plugins could open you up to some potential attacks. Carefully assess each plugin and the risks involved in using them.

---

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Code of Conduct

To ensure a welcoming and positive environment, we have a [Code of Conduct](CODE_OF_CONDUCT.md) that all contributors and participants are expected to adhere to.

---

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE](LICENSE) file for details.
