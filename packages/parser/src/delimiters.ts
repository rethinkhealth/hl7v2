export interface IDelimiters {
  fieldSeparator: string;
  componentSeparator: string;
  repeatSeparator: string;
  escapeSeparator: string;
  subComponentSeparator: string;
  terminator: string;
}

export const DefaultDelimiters: IDelimiters = {
  fieldSeparator: "|",
  componentSeparator: "^",
  repeatSeparator: "~",
  escapeSeparator: "\\",
  subComponentSeparator: "&",
  terminator: "\r"
};
