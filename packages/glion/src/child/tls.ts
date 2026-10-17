import { readFile } from "node:fs/promises";

import { GlionError } from "../errors";

/**
 * Reads one of the TLS files a config names, or throws. `field` is the config
 * field that named it — `ca`, `cert`, `key`, `pfx` — so the message points at
 * what the user wrote.
 *
 * The fs error is preserved as `cause`, so the OS-level code (ENOENT, EACCES,
 * …) stays available to whoever wants it without being spliced into the
 * sentence.
 */
export async function readTlsFile(
  path: string,
  field: string
): Promise<Buffer> {
  try {
    return await readFile(path);
  } catch (error) {
    throw new GlionError(
      "tls-read-failed",
      `The TLS \`${field}\` file \`${path}\` could not be read.`,
      { field, path },
      "Check that the file exists and is readable (chmod 600 for key files).",
      error
    );
  }
}
