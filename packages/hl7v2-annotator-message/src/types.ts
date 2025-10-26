export type MessageAnnotatorOptions = Readonly<{
  /**
   * When true, requires explicit MSH-9.3 and does not derive from MSH-9.1 and MSH-9.2.
   * When false (default), derives missing MSH-9.3 as {messageCode}_{triggerEvent}.
   * @default false
   */
  strict?: boolean;
}>;

export type MessageDetails = {
  /** HL7 version from MSH-12. */
  version?: string;
  /** Message code from MSH-9.1 (e.g., ADT). */
  code?: string;
  /** Trigger event from MSH-9.2 (e.g., A01). */
  event?: string;
  /** Message structure from MSH-9.3 (e.g., ADT_A01). */
  structure?: string;
};

export type MessageMetadata = Readonly<{
  message: Readonly<MessageDetails>;
}>;
