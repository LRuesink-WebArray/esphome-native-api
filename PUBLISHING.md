# Publishing Guide for @webarray/esphome-native-api

## Pre-Publishing Checklist

Before publishing to npm, ensure:

- ✅ **Package name**: `@webarray/esphome-native-api`
- ✅ **Version**: `1.0.0` (update as needed)
- ✅ **Tests passing**: All 162 tests pass
- ✅ **Build successful**: TypeScript compiles without errors
- ✅ **README updated**: Installation instructions use correct package name
- ✅ **LICENSE**: MIT license with your name
- ✅ **Repository**: GitHub URLs updated

## Publishing Steps

### 1. Verify Your npm Account

Make sure you're logged into npm with an account that has access to the `@webarray` scope:

```bash
npm whoami
```

If not logged in:

```bash
npm login
```

### 2. Verify Package Contents

Preview what will be published:

```bash
npm pack --dry-run
```

This shows all files that will be included in the package. Should include:
- `dist/` directory (compiled JavaScript)
- `README.md`
- `LICENSE`
- `package.json`

### 3. Run Final Tests

```bash
# Run all tests
npm test

# Check test coverage
npm run test:coverage

# Verify build works
npm run build

# Note: Linting has warnings due to third-party libraries without TypeScript definitions
# This doesn't affect the published package functionality
```

### 4. Publish to npm

For first-time publish (version 1.0.0):

```bash
npm publish --access public
```

**Note**: The `--access public` flag is required for scoped packages (@webarray/*) to be publicly accessible.

### 5. Verify Publication

Check that the package is live:

```bash
# View package info
npm info @webarray/esphome-native-api

# Or visit
# https://www.npmjs.com/package/@webarray/esphome-native-api
```

### 6. Test Installation

In a separate directory, test installing the package:

```bash
mkdir test-install
cd test-install
npm init -y
npm install @webarray/esphome-native-api

# Test import
node -e "const { ESPHomeClient } = require('@webarray/esphome-native-api'); console.log('✅ Package works!');"
```

## Publishing Updates

For subsequent releases:

### 1. Update Version

Use npm's version command:

```bash
# Patch release (1.0.0 -> 1.0.1) - bug fixes
npm version patch

# Minor release (1.0.0 -> 1.1.0) - new features
npm version minor

# Major release (1.0.0 -> 2.0.0) - breaking changes
npm version major
```

This automatically:
- Updates version in package.json
- Creates a git commit
- Creates a git tag

### 2. Push Changes

```bash
git push
git push --tags
```

### 3. Publish

```bash
npm publish
```

## Troubleshooting

### Error: "You must be logged in to publish packages"

**Solution**: Run `npm login` and authenticate

### Error: "You do not have permission to publish"

**Solution**: Make sure:
1. You're logged in as the correct user: `npm whoami`
2. Your account has access to the `@webarray` scope
3. The package name is available

### Error: "Package already exists"

**Solution**: 
- If you own it, update the version and republish
- If someone else owns it, choose a different name

### Build Errors

**Solution**: 
```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build
```

## npm Scripts Reference

```bash
# Build the package
npm run build

# Run tests
npm test
npm run test:watch
npm run test:coverage

# Linting and formatting
npm run lint
npm run format

# Generate protobuf definitions (if needed)
npm run proto:generate
```

## Package Structure

```
@webarray/esphome-native-api/
├── dist/               # Compiled JavaScript (published)
│   ├── client/
│   ├── connection/
│   ├── discovery/
│   ├── proto/
│   ├── types/
│   ├── utils/
│   └── index.js
├── src/                # Source TypeScript (not published)
├── test/               # Tests (not published)
├── README.md           # Published
├── LICENSE             # Published
└── package.json        # Published
```

## What Gets Published

Defined in `package.json` under `files`:

```json
"files": [
  "dist/**/*",
  "README.md",
  "LICENSE"
]
```

## What Doesn't Get Published

Automatically excluded:
- `node_modules/`
- `test/`
- `src/` (source TypeScript)
- `.git/`
- Development files (`.eslintrc.js`, `jest.config.js`, etc.)

## Version Strategy

Follow Semantic Versioning (SemVer):

- **Major (X.0.0)**: Breaking changes
  - API changes that require code modifications
  - Removing features
  - Changing default behaviors

- **Minor (1.X.0)**: New features (backward compatible)
  - Adding new methods
  - New optional parameters
  - Performance improvements

- **Patch (1.0.X)**: Bug fixes (backward compatible)
  - Fixing bugs
  - Documentation updates
  - Internal refactoring

## GitHub Release

After publishing, create a GitHub release:

1. Go to https://github.com/lruesink/esphomeapi/releases
2. Click "Draft a new release"
3. Tag: `v1.0.0` (matches npm version)
4. Title: `v1.0.0 - Initial Release`
5. Description:
   ```markdown
   ## Features
   - Full ESPHome Native API support
   - Noise protocol encryption
   - Deep sleep device support
   - Device discovery via mDNS
   - Comprehensive TypeScript types
   - 162 passing tests
   
   ## Installation
   ```
   npm install @webarray/esphome-native-api
   ```
   
   See README.md for usage examples.
   ```

## Unpublishing (Emergency Only)

If you need to unpublish within 72 hours:

```bash
# Unpublish a specific version
npm unpublish @webarray/esphome-native-api@1.0.0

# Unpublish entire package (use with extreme caution!)
npm unpublish @webarray/esphome-native-api --force
```

**Warning**: Unpublishing is permanent and should only be done for critical security issues or if you published by mistake.

## CI/CD Integration (Optional)

For automated publishing, you can use GitHub Actions:

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '16'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm test
      - run: npm run build
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Then add `NPM_TOKEN` to your GitHub repository secrets.

## Support

After publishing:

1. Monitor GitHub issues: https://github.com/lruesink/esphomeapi/issues
2. Check npm downloads: https://www.npmjs.com/package/@webarray/esphome-native-api
3. Respond to questions and bug reports
4. Keep dependencies updated

## Resources

- npm documentation: https://docs.npmjs.com/
- Semantic Versioning: https://semver.org/
- npm scoped packages: https://docs.npmjs.com/about-scopes

---

Ready to publish? Run:

```bash
npm test && npm run build && npm publish --access public
```
