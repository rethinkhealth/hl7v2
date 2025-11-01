/**
 * Message metadata extracted from the MSH segment
 */
export type MessageInfo = {
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
};
