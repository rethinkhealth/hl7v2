export interface IDelimiters {
  componentSeparator: string;
  escapeSeparator: string;
  fieldSeparator: string;
  repeatSeparator: string;
  subComponentSeparator: string;
  terminator: string;
}

export const DefaultDelimiters: IDelimiters = {
  terminator: "\r",
  fieldSeparator: String.fromCharCode(124), // |
  componentSeparator: String.fromCharCode(94), // ^
  repeatSeparator: String.fromCharCode(126), // ~
  escapeSeparator: String.fromCharCode(92), // \
  subComponentSeparator: String.fromCharCode(38), // &
};
