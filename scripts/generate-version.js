const fs = require('fs');
const path = require('path');

const pkg = require('../package.json');

const version = pkg.version;
const date = new Date().toISOString().slice(0, 10);

const content = `export const APP_VERSION = '${version}';
export const BUILD_DATE = '${date}';
`;

const outputPath = path.join(__dirname, '../app/version.ts');

fs.writeFileSync(outputPath, content, 'utf8');

console.log(`✔ Version generated: v${version} (${date})`);
