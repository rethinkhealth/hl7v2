---
"create-glion": minor
---

`--example` takes the name of any directory in `examples/`, or the URL of a GitHub repository or a directory in one, like `create-next-app`. `--example-path` names the directory when a branch name contains a slash. A template without a `package.json` is refused before anything is downloaded, and `--example` no longer opens a picker.

The examples include `mllp-tls` and `mllp-gateway`, answer every message with an acknowledgment they build themselves, now that `@glion/mllp-ack` is gone, and use `glion send --host` in place of the removed `--local`.
