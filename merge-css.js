const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const cssnano = require('cssnano');

const inputDir = path.join(__dirname, 'src', 'styles', 'input');
const outputFile = path.join(__dirname, 'src', 'styles', 'merged.css');

async function mergeCSS() {
    try {
        let mergedCSS = '';
        const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.css'));

        for (const file of files) {
            const css = fs.readFileSync(path.join(inputDir, file), 'utf8');
            mergedCSS += css + '\n';
        }
        const result = await postcss([cssnano({ preset: 'default' })]).process(mergedCSS, { from: undefined });
        fs.writeFileSync(outputFile, result.css);

        console.log('✅ Merged and optimized CSS saved to:', outputFile);
    } catch (error) {
        console.error('❌ Error merging CSS:', error);
    }
}

mergeCSS();
