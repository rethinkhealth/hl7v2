import { readFile } from "node:fs/promises";

import { GlionError } from "./errors";

/**
 * Reads one of the TLS files a config or an invocation names, or throws.
 *
 * `field` is what named it — `tls.ca`, `the TLS cert file`. The fs error is
 * the `cause`.
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
      `Failed to read ${field} at ${path}`,
      { field, path },
      "Check that the file exists and is readable (chmod 600 for key files).",
      error
    );
  }
}
