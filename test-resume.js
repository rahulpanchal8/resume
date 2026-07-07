const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function loadResumeData() {
  const filePath = path.join(__dirname, 'src/data/resume.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  // Strip import statements
  content = content.replace(/import\s+.*?;/g, '');
  // Map icons
  content = content.replace(/HomeIcon/g, '"home"');
  content = content.replace(/NotebookIcon/g, '"notebook"');
  content = content.replace(/Icons\.(\w+)/g, '"$1"');
  content = content.replace(/icon:\s*<Icons\.globe[^>]*\/>/g, 'icon: "globe"');
  content = content.replace(/icon:\s*<Icons\.github[^>]*\/>/g, 'icon: "github"');
  // Transpile
  const jsContent = ts.transpileModule(content, {
    compilerOptions: { module: ts.ModuleKind.CommonJS }
  }).outputText;
  
  console.log('TRANSPILED JS CONTENT:\n', jsContent);
  
  const m = { exports: {} };
  const fn = new Function('module', 'exports', 'require', '__dirname', '__filename', jsContent);
  fn(m, m.exports, require, __dirname, filePath);
  return m.exports.DATA;
}

try {
  const data = loadResumeData();
  console.log('Parsed successfully! Name:', data.name);
} catch (e) {
  console.error('Failed to parse:', e);
}
