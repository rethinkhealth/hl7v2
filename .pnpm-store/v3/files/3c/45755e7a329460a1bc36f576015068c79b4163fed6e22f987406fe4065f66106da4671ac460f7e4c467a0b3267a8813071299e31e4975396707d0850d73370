export var Report;
(function (Report) {
    class Excluded {
        _tagGroup = 'Excluded';
        isInvalid = false;
        instance;
        constructor(instance) {
            this.instance = instance;
        }
    }
    class Unfixable {
        _tagGroup = 'Unfixable';
        isInvalid = true;
        unfixable;
        constructor(unfixable) {
            this.unfixable = unfixable;
        }
    }
    class Fixable {
        _tagGroup = 'Fixable';
        isInvalid = true;
        fixable;
        constructor(fixable) {
            this.fixable = fixable;
        }
    }
    /** Semver Groups are disabled by default */
    class Disabled extends Excluded {
        _tag = 'Disabled';
    }
    Report.Disabled = Disabled;
    /** Has a name which does not match the `--filter` RegExp */
    class FilteredOut extends Excluded {
        _tag = 'FilteredOut';
    }
    Report.FilteredOut = FilteredOut;
    /** Is in an ignored version group */
    class Ignored extends Excluded {
        _tag = 'Ignored';
    }
    Report.Ignored = Ignored;
    /** Version satisfies the rules of its version group */
    class Valid {
        _tag = 'Valid';
        _tagGroup = 'Valid';
        isInvalid = false;
        specifier;
        constructor(specifier) {
            this.specifier = specifier;
        }
    }
    Report.Valid = Valid;
    /** Must be removed */
    class Banned extends Fixable {
        _tag = 'Banned';
    }
    Report.Banned = Banned;
    /** Version mismatches and should use a higher version found on another */
    class HighestSemverMismatch extends Fixable {
        _tag = 'HighestSemverMismatch';
    }
    Report.HighestSemverMismatch = HighestSemverMismatch;
    /** Version mismatches the `.version` of the package developed in this repo */
    class LocalPackageMismatch extends Fixable {
        _tag = 'LocalPackageMismatch';
        localInstance;
        constructor(fixable, localInstance) {
            super(fixable);
            this.localInstance = localInstance;
        }
    }
    Report.LocalPackageMismatch = LocalPackageMismatch;
    /** Version mismatches and should use a lower version found on another */
    class LowestSemverMismatch extends Fixable {
        _tag = 'LowestSemverMismatch';
    }
    Report.LowestSemverMismatch = LowestSemverMismatch;
    /** Version is not identical to the `pinVersion` of its Pinned version group */
    class PinnedMismatch extends Fixable {
        _tag = 'PinnedMismatch';
    }
    Report.PinnedMismatch = PinnedMismatch;
    /** Version is identical but the semver range does not match its semver group */
    class SemverRangeMismatch extends Fixable {
        _tag = 'SemverRangeMismatch';
    }
    Report.SemverRangeMismatch = SemverRangeMismatch;
    /** Version mismatches the version used by the packages in the `snapTo` array */
    class SnappedToMismatch extends Fixable {
        _tag = 'SnappedToMismatch';
        localInstance;
        constructor(fixable, localInstance) {
            super(fixable);
            this.localInstance = localInstance;
        }
    }
    Report.SnappedToMismatch = SnappedToMismatch;
    /** Dependency should match a local package.json which is missing a .version */
    class MissingLocalVersion extends Unfixable {
        _tag = 'MissingLocalVersion';
        localInstance;
        constructor(unfixable, localInstance) {
            super(unfixable);
            this.localInstance = localInstance;
        }
    }
    Report.MissingLocalVersion = MissingLocalVersion;
    /** Dependency is not present in any of the packages in the `snapTo` array */
    class MissingSnappedToMismatch extends Unfixable {
        _tag = 'MissingSnappedToMismatch';
    }
    Report.MissingSnappedToMismatch = MissingSnappedToMismatch;
    /** Specifier does not cover the specifiers of every other instance in this group */
    class SameRangeMismatch extends Unfixable {
        _tag = 'SameRangeMismatch';
        /** the raw specifiers which this instance's specifier did not cover */
        mismatches;
        constructor(unfixable, mismatches) {
            super(unfixable);
            this.mismatches = mismatches;
        }
    }
    Report.SameRangeMismatch = SameRangeMismatch;
    /** Version mismatches and is not semver, syncpack cannot guess what to do */
    class UnsupportedMismatch extends Unfixable {
        _tag = 'UnsupportedMismatch';
    }
    Report.UnsupportedMismatch = UnsupportedMismatch;
})(Report || (Report = {}));
