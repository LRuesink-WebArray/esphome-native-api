# ESPHome Proto Files

This directory contains the Protocol Buffer definitions for ESPHome's Native API.

## Files

- `api.proto` - Main ESPHome API protocol definitions
- `api_options.proto` - ESPHome-specific proto options

## Generated Files Location

The JavaScript/TypeScript files generated from these protos are located at:
- `src/proto/api.js`
- `src/proto/api.d.ts`

## Regenerating Proto Files

To update to the latest ESPHome proto definitions and regenerate the JavaScript/TypeScript files:

```bash
npm run proto:generate
```

This single command will:
1. ✅ Download the latest proto files from ESPHome
2. ✅ Generate JavaScript code using `pbjs`
3. ✅ Automatically fix the `void` keyword issue
4. ✅ Generate TypeScript definitions using `pbts`
5. ✅ Fix TypeScript void conflicts

### The `void` Keyword Issue

ESPHome uses `void` as a message type name in their proto files, which conflicts with JavaScript's reserved keyword. 

Our generation script (`scripts/generate-proto.js`) automatically handles this by:
- Renaming `function void()` to `function voidFunc()`
- Updating all references to maintain compatibility
- Fixing both JavaScript and TypeScript files

## When to Regenerate

You typically only need to regenerate proto files when:
- 📦 ESPHome releases a new version with protocol changes
- 🔄 You want to update to the latest ESPHome API definitions
- 🐛 There's a bug fix in the proto definitions

The generated files are committed to the repository, so you **don't need to regenerate** them for normal development or usage.

## Manual Generation (Advanced)

If you need to manually control the generation process, the script is located at:
```
scripts/generate-proto.js
```

You can modify the script to adjust the post-processing logic if needed.
