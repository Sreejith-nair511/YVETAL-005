/**
 * Simple health check script for Tadashi AI
 * This script verifies that the essential components are working
 */

console.log('Tadashi AI Health Check');
console.log('======================');

// Check if required environment variables are present
const requiredEnvVars = [
  'MISTRAL_API_KEY',
  'EMAIL_HOST',
  'EMAIL_PORT',
  'EMAIL_USER',
  'EMAIL_PASS'
];

console.log('\nChecking environment variables...');
let allEnvVarsPresent = true;

for (const envVar of requiredEnvVars) {
  if (process.env[envVar]) {
    console.log(`✓ ${envVar}: Present`);
  } else {
    console.log(`✗ ${envVar}: Missing`);
    allEnvVarsPresent = false;
  }
}

console.log('\nChecking Node.js version...');
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.split('.')[0].replace('v', ''));
if (majorVersion >= 18) {
  console.log(`✓ Node.js version: ${nodeVersion} (supported)`);
} else {
  console.log(`✗ Node.js version: ${nodeVersion} (minimum required: 18)`);
}

console.log('\nHealth Check Summary:');
if (allEnvVarsPresent && majorVersion >= 18) {
  console.log('✓ All checks passed! Tadashi AI is ready to run.');
  process.exit(0);
} else {
  console.log('✗ Some checks failed. Please review the output above.');
  process.exit(1);
}