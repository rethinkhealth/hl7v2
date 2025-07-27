import npa from 'npm-package-arg';
export function parseSpecifier(name, specifier, packageJsonFile) {
    if (specifier === 'workspace:*' ||
        specifier === 'workspace:~' ||
        specifier === 'workspace:^') {
        const parsed = npa.resolve(name, packageJsonFile.jsonFile.dirPath, specifier.replace('workspace:', 'file:'));
        return {
            escapedName: parsed.escapedName,
            name: parsed.name,
            raw: parsed.raw.replace('file:', 'workspace:'),
            rawSpec: parsed.rawSpec.replace('file:', 'workspace:'),
            saveSpec: parsed.saveSpec.replace('file:', 'workspace:'),
            scope: parsed.scope,
            type: 'workspaceProtocol',
        };
    }
    return npa.resolve(name, specifier, packageJsonFile.jsonFile.dirPath);
}
