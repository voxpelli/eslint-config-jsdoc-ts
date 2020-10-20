# @voxpelli/eslint-config-jsdoc-ts

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat)](https://github.com/standard/semistandard)

TypeScript-validated JSDoc related rule subset of [my personal ESLint config](https://github.com/voxpelli/eslint-config) that.

Includes the semistandard rules directly rather than relying on [eslint-config-semistandard](https://github.com/standard/eslint-config-semistandard), as that package isn't always trailing the main [eslint-config-standard](https://github.com/standard/eslint-config-standard) package.

This package follows [semantic versioning](https://semver.org/). Tightening of any checks is a breaking change, therefore that will only happen in major releases. Minor and patch releases will only include relaxation of rules or fixing of minor obvious oversights.

Want to use my linting rules? Go ahead! Would love feedback and a comment about you doing so, then I'll be extra careful with eg. following the semantic versioning rules.

## Installation

Be sure to install versions of peer dependencies that are valid according to the peer dependency specification of this module.

As ESLint configs and dependencies can and will change their rules with major releases you will likely get an incorrect ruleset otherwise.

To easily install all correct peer dependencies, you can use [`install-peerdeps`](https://www.npmjs.com/package/install-peerdeps):

```bash
install-peerdeps --dev @voxpelli/eslint-config-jsdoc-ts
```

Then add a `.eslintrc` with the following:

```
{
  "extends": "@voxpelli/eslint-config-jsdoc-ts",
  "root": true
}
```
