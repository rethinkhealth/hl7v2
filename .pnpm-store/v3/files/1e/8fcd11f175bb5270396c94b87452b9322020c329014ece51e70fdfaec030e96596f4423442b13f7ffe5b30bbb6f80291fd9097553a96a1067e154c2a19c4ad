import type { Instance } from '../get-instances/instance.js';
import { type Delete } from '../version-group/lib/delete.js';
import { AliasSpecifier } from './alias.js';
import { DeleteSpecifier } from './delete.js';
import { ExactSpecifier } from './exact.js';
import { FileSpecifier } from './file.js';
import { HostedGitSpecifier } from './hosted-git.js';
import { LatestSpecifier } from './latest.js';
import { RangeSpecifier } from './range.js';
import { TagSpecifier } from './tag.js';
import { UnsupportedSpecifier } from './unsupported.js';
import { UrlSpecifier } from './url.js';
import { WorkspaceProtocolSpecifier } from './workspace-protocol.js';
export declare namespace Specifier {
    const Alias: typeof AliasSpecifier;
    const Delete: typeof DeleteSpecifier;
    const Exact: typeof ExactSpecifier;
    const File: typeof FileSpecifier;
    const HostedGit: typeof HostedGitSpecifier;
    const Latest: typeof LatestSpecifier;
    const Range: typeof RangeSpecifier;
    const Tag: typeof TagSpecifier;
    const Unsupported: typeof UnsupportedSpecifier;
    const Url: typeof UrlSpecifier;
    const WorkspaceProtocol: typeof WorkspaceProtocolSpecifier;
    type Any = AliasSpecifier | DeleteSpecifier | ExactSpecifier | FileSpecifier | HostedGitSpecifier | LatestSpecifier | RangeSpecifier | TagSpecifier | UnsupportedSpecifier | UrlSpecifier | WorkspaceProtocolSpecifier;
    function create(instance: Instance, raw: string | Delete): Specifier.Any;
}
