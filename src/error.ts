export interface MessageError extends Error {
  code: string;
  position: number;
  token: string;
}
