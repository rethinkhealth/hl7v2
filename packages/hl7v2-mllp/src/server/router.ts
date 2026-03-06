import { matchPattern, parsePattern } from "./types.js";
import type { Handler, Middleware, RoutePattern } from "./types.js";

/**
 * A route entry: pattern + handler.
 */
interface Route {
  pattern: RoutePattern;
  handler: Handler;
}

/**
 * A scoped middleware entry: pattern + middleware.
 */
interface ScopedMiddleware {
  pattern: RoutePattern;
  middleware: Middleware;
}

/**
 * Result of matching a message against registered routes and middleware.
 */
export interface MatchResult {
  /** The matched handler, or undefined if no route matches */
  handler: Handler | undefined;
  /** Middleware that applies to this message (global + scoped matches) */
  middlewares: Middleware[];
}

/**
 * Pattern-matching router for HL7v2 message types.
 *
 * Routes are matched in registration order (first match wins).
 * Supports wildcards: "*" matches everything, "ADT^*" matches
 * any ADT message, "*^A01" matches any type with A01 trigger.
 */
export class Router {
  readonly #routes: Route[] = [];
  readonly #globalMiddleware: Middleware[] = [];
  readonly #scopedMiddleware: ScopedMiddleware[] = [];

  /**
   * Register a route handler for a message type pattern.
   */
  add(pattern: string, handler: Handler): void {
    this.#routes.push({
      handler,
      pattern: parsePattern(pattern),
    });
  }

  /**
   * Register global middleware (runs for all messages).
   */
  addMiddleware(middleware: Middleware): void;
  /**
   * Register scoped middleware (runs only when pattern matches).
   */
  addMiddleware(pattern: string, middleware: Middleware): void;
  addMiddleware(
    patternOrMiddleware: string | Middleware,
    middleware?: Middleware
  ): void {
    if (typeof patternOrMiddleware === "function") {
      this.#globalMiddleware.push(patternOrMiddleware);
    } else if (middleware) {
      this.#scopedMiddleware.push({
        middleware,
        pattern: parsePattern(patternOrMiddleware),
      });
    }
  }

  /**
   * Match a message type and trigger event against registered routes.
   * Returns the first matching handler and all applicable middleware.
   */
  match(messageType: string, triggerEvent: string): MatchResult {
    // Find first matching route (registration order)
    let handler: Handler | undefined;
    for (const route of this.#routes) {
      if (matchPattern(route.pattern, messageType, triggerEvent)) {
        handler = route.handler;
        break;
      }
    }

    // Collect applicable middleware: global + matching scoped
    const middlewares: Middleware[] = [...this.#globalMiddleware];
    for (const scoped of this.#scopedMiddleware) {
      if (matchPattern(scoped.pattern, messageType, triggerEvent)) {
        middlewares.push(scoped.middleware);
      }
    }

    return { handler, middlewares };
  }
}
