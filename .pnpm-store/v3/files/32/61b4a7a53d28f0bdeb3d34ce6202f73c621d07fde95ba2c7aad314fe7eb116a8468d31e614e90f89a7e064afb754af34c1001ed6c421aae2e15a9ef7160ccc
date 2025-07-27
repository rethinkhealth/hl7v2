import { Data, Effect } from 'effect';
export class NonSemverError extends Data.TaggedClass('NonSemverError') {
    static asEffect(specifier) {
        return Effect.fail(new NonSemverError({ specifier }));
    }
}
