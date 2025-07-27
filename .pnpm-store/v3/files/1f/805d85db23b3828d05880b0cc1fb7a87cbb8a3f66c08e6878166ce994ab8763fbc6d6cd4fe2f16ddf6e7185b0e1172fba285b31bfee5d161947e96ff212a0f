import { Either } from 'effect';
import { isFunction } from 'tightrope/guard/is-function.js';
import { isPrimitive } from 'tightrope/guard/is-primitive.js';
import { isReadable } from 'tightrope/guard/is-readable.js';
export function get(origin, ...props) {
    return isReadable(origin)
        ? props.reduce(getChild, origin)
        : errUnreadableOrigin(props, origin);
}
/** Used internally by get to retrieve a single child property from a parent object. */
function getChild(parent, prop) {
    // quit if any ancestor was already not found
    if (Either.isEither(parent) && Either.isLeft(parent)) {
        return parent;
    }
    // ensure we have a plain value and not an Ok
    const value = Either.isEither(parent) && Either.isRight(parent)
        ? Either.getOrThrow(parent)
        : parent;
    // quit if we can't read properties of value (eg value.likeThis)
    if (!isReadable(value)) {
        return errUnreadableChild(prop, value);
    }
    // quit if value is object/array/function etc but the child is not found
    if (!isPrimitive(value) && prop in value === false) {
        return errNotFound(prop, value);
    }
    // quit if eg true.toFixed, 12.toUpperCase
    if (isPrimitive(value) && value[prop] === undefined) {
        return errNotFound(prop, value);
    }
    // the value is present, return it
    const child = value[prop];
    return Either.right(isFunction(child) ? child.bind(value) : child);
}
function errUnreadableChild(child, value) {
    return Either.left(new Error(`Cannot read "${child}" from unreadable value: ${value}`));
}
function errNotFound(child, value) {
    return Either.left(new Error(`Property "${child}" not found on value: ${value}`));
}
function errUnreadableOrigin(props, origin) {
    return Either.left(new Error(`Cannot read "${props.join('.')}" from unreadable value: ${origin}`));
}
