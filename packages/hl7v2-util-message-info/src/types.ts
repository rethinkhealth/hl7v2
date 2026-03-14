/**
 * Options for message info extraction.
 */
export interface MessageInfoOptions {
  /**
   * Look up the message structure from an event map when MSH-9.3 is absent.
   *
   * - `true` — use the built-in profile event maps to look up
   *   `messageCode_triggerEvent` into a canonical structure ID.
   * - A custom map (`Record<version, Record<candidate, structure>>`) —
   *   use the provided map instead of the built-in one.
   * - `false` / `undefined` — no lookup; only return MSH-9.3 if present.
   */
  lookup?: boolean | Record<string, Record<string, string>>;
}

/**
 * Message metadata extracted from the MSH segment
 */
export interface MessageInfo {
  /**
   * Message version from MSH-12 (Version ID)
   * @example "2.5"
   * @example "2.3.1"
   */
  version?: string;

  /**
   * Message code from MSH-9.1 (Message Type)
   * @example "ADT"
   * @example "ORU"
   */
  messageCode?: string;

  /**
   * Trigger event from MSH-9.2 (Trigger Event)
   * @example "A01"
   * @example "R01"
   */
  triggerEvent?: string;

  /**
   * Message structure from MSH-9.3 (Message Structure)
   * @example "ADT_A01"
   * @example "ORU_R01"
   */
  messageStructure?: string;
}
