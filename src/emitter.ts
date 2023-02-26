import EventEmitter from "events";

import TypedEmitter from "typed-emitter";

// Define your emitter's types like that:
// Key: Event name; Value: Listener function signature
type MessagingEvents<T> = {
  error: (error: Error) => void;
  log: (body: T, line: number, raw: string) => void;
  message: (body: T) => void;
  warning: (body: T, line: number, raw: string) => void;
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
