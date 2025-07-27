import { Data, Effect } from 'effect';
class ReadYamlFileError extends Data.TaggedClass('ReadYamlFileError') {
}
export function readYamlFileSync(io, filePath) {
    return Effect.try({
        try: () => io.readYamlFile.sync(filePath),
        catch: err => new ReadYamlFileError({ filePath, error: String(err) }),
    });
}
