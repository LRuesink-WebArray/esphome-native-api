#!/usr/bin/env node

/**
 * ESPHome Proto Generation Script
 * 
 * This script:
 * 1. Downloads the latest proto files from ESPHome
 * 2. Generates JavaScript code using pbjs
 * 3. Fixes the 'void' keyword issue (ESPHome uses 'void' as a message name)
 * 4. Generates TypeScript definitions using pbts
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PROTO_DIR = path.join(__dirname, '..', 'proto');
const SRC_PROTO_DIR = path.join(__dirname, '..', 'src', 'proto');
const API_JS = path.join(SRC_PROTO_DIR, 'api.js');
const API_DTS = path.join(SRC_PROTO_DIR, 'api.d.ts');

const ESPHOME_REPO = 'https://raw.githubusercontent.com/esphome/esphome/dev/esphome/components/api';

console.log('ESPHome Proto Generation');
console.log('═'.repeat(60));

// Step 1: Download proto files
console.log('\nStep 1: Downloading proto files from ESPHome...');
try {
  execSync(`curl -o ${PROTO_DIR}/api.proto ${ESPHOME_REPO}/api.proto`, { stdio: 'inherit' });
  execSync(`curl -o ${PROTO_DIR}/api_options.proto ${ESPHOME_REPO}/api_options.proto`, { stdio: 'inherit' });
  console.log('[OK] Proto files downloaded');
} catch (error) {
  console.error('[ERROR] Failed to download proto files');
  process.exit(1);
}

// Step 2: Generate JavaScript code
console.log('\nStep 2: Generating JavaScript code...');
try {
  execSync(
    `pbjs -t static-module -w commonjs -o ${API_JS} ${PROTO_DIR}/api.proto ${PROTO_DIR}/api_options.proto`,
    { stdio: 'inherit' }
  );
  console.log('[OK] JavaScript code generated');
} catch (error) {
  console.log('[WARNING] Generation completed with warnings (expected due to void keyword)');
}

// Step 3: Fix the 'void' keyword issue
console.log('\nStep 3: Fixing void keyword conflicts...');
try {
  let content = fs.readFileSync(API_JS, 'utf8');
  let fixCount = 0;

  // Fix 1: function void() -> function voidFunc()
  const voidFunctionRegex = /function void\s*\(/g;
  const voidFunctionMatches = content.match(voidFunctionRegex);
  if (voidFunctionMatches) {
    content = content.replace(voidFunctionRegex, 'function voidFunc(');
    fixCount += voidFunctionMatches.length;
    console.log(`   Fixed ${voidFunctionMatches.length} void function declarations`);
  }

  // Fix 2: var void = -> var voidFunc =
  const voidVarRegex = /var void\s*=/g;
  const voidVarMatches = content.match(voidVarRegex);
  if (voidVarMatches) {
    content = content.replace(voidVarRegex, 'var voidFunc =');
    fixCount += voidVarMatches.length;
    console.log(`   Fixed ${voidVarMatches.length} void variable declarations`);
  }

  // Fix 3: Update references to the void function
  // This is a more careful replacement to avoid breaking other code
  const callSites = [
    /\.void\s*=/g,
    /\.void\s*\(/g,
    /\["void"\]/g,
  ];
  
  callSites.forEach((regex, i) => {
    const matches = content.match(regex);
    if (matches) {
      const replacements = [
        '.voidFunc =',
        '.voidFunc(',
        '["voidFunc"]',
      ];
      content = content.replace(regex, replacements[i]);
      fixCount += matches.length;
      console.log(`   Fixed ${matches.length} void references (type ${i + 1})`);
    }
  });

  if (fixCount > 0) {
    fs.writeFileSync(API_JS, content, 'utf8');
    console.log(`[OK] Fixed ${fixCount} void keyword conflicts`);
  } else {
    console.log('[OK] No void keyword conflicts found');
  }
} catch (error) {
  console.error('[ERROR] Failed to fix void keyword:', error.message);
  process.exit(1);
}

// Step 4: Generate TypeScript definitions
console.log('\nStep 4: Generating TypeScript definitions...');
try {
  execSync(`pbts -o ${API_DTS} ${API_JS}`, { stdio: 'inherit' });
  console.log('[OK] TypeScript definitions generated');
} catch (error) {
  console.error('[ERROR] Failed to generate TypeScript definitions');
  process.exit(1);
}

// Step 5: Fix TypeScript definitions
console.log('\nStep 5: Fixing TypeScript void keyword conflicts...');
try {
  let content = fs.readFileSync(API_DTS, 'utf8');
  let fixCount = 0;

  // Fix void references in TypeScript
  const tsVoidRegex = /\bvoid\s*:/g;
  const matches = content.match(tsVoidRegex);
  if (matches) {
    content = content.replace(tsVoidRegex, 'voidFunc:');
    fixCount += matches.length;
    console.log(`   Fixed ${matches.length} void type declarations`);
  }

  // Fix interface/type void
  const tsInterfaceVoid = /interface\s+void\b/g;
  const interfaceMatches = content.match(tsInterfaceVoid);
  if (interfaceMatches) {
    content = content.replace(tsInterfaceVoid, 'interface voidFunc');
    fixCount += interfaceMatches.length;
    console.log(`   Fixed ${interfaceMatches.length} void interface declarations`);
  }

  if (fixCount > 0) {
    fs.writeFileSync(API_DTS, content, 'utf8');
    console.log(`[OK] Fixed ${fixCount} TypeScript void conflicts`);
  } else {
    console.log('[OK] No TypeScript void conflicts found');
  }
} catch (error) {
  console.error('[ERROR] Failed to fix TypeScript definitions:', error.message);
  process.exit(1);
}

// Step 6: Format generated files with Prettier
console.log('\nStep 6: Formatting generated files with Prettier...');
try {
  execSync(`npx prettier --write ${API_JS} ${API_DTS}`, { stdio: 'inherit' });
  console.log('[OK] Files formatted successfully');
} catch (error) {
  console.log('[WARNING] Prettier formatting failed, but files were generated');
}

console.log('\n' + '═'.repeat(60));
console.log('[SUCCESS] Proto generation complete!');
console.log('\nGenerated files:');
console.log(`   - ${API_JS}`);
console.log(`   - ${API_DTS}`);
console.log('\n[INFO] Run "npm run build" to compile the updated proto files.\n');
