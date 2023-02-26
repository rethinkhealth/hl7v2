import EventEmitter from "events";

import TypedEmitter from "typed-emitter";

// Define your emitter's types like that:
// Key: Event name; Value: Listener function signature
type MessagingEvents<T> = {
  error: (error: Error) => void;
  log: (
    body: T,
    tree: string,
    line: number,
    raw: string,
    metadata?: Record<string, any> | undefined
  ) => void;
  message: (body: T, metadata?: Record<string, any> | undefined) => void;
  warning: (
    body: T,
    tree: string,
    line: number,
    raw: string,
    metadata?: Record<string, any> | undefined
  ) => void;
};

// Use it as a generic type for EventEmitter
export class MessagingEmitter<T> extends (EventEmitter as {
  new <T>(): TypedEmitter<MessagingEvents<T>>;
})<T> {
  // constructor
  constructor() {
    super();
  }
}
