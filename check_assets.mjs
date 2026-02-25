import fs from 'fs';
import path from 'path';

const srcDir = './src';
const assetsDir = './src/assets';

function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const allFiles = getFiles(srcDir);
const existingAssets = new Set(fs.readdirSync(assetsDir));

console.log(`Checking ${allFiles.length} files...`);

let missingCount = 0;
allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    // Look for figma:asset/xxx.png or similar
    // Using a simpler regex to catch everything after figma:asset/ until the quote
    const matches = content.matchAll(/figma:asset\/([^"']+)/g);
    for (const match of matches) {
        const assetName = match[1];
        if (!existingAssets.has(assetName)) {
            // Check if the line is commented out
            const lines = content.split('\n');
            const lineWithAsset = lines.find(l => l.includes(match[0]));
            if (lineWithAsset && !lineWithAsset.trim().startsWith('//')) {
                console.log(`MISSING: "${assetName}" in ${file}`);
                missingCount++;
            }
        }
    }
});

console.log(`\nFinished. Found ${missingCount} missing assets.`);
