const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'components');

const replacements = [
  { pattern: /(?<!dark:)text-white/g, replacement: 'text-gray-900 dark:text-white' },
  { pattern: /(?<!dark:)text-gray-400/g, replacement: 'text-gray-600 dark:text-gray-400' },
  { pattern: /(?<!dark:)text-gray-300/g, replacement: 'text-gray-700 dark:text-gray-300' },
  { pattern: /(?<!dark:)bg-white\/5(?!0)/g, replacement: 'bg-gray-200/50 dark:bg-white/5' },
  { pattern: /(?<!dark:)bg-white\/10/g, replacement: 'bg-gray-200 dark:bg-white/10' },
  { pattern: /(?<!dark:)bg-white\/20/g, replacement: 'bg-gray-300 dark:bg-white/20' },
  { pattern: /(?<!dark:)border-white\/10/g, replacement: 'border-gray-300 dark:border-white/10' },
  { pattern: /(?<!dark:)border-white\/5(?!0)/g, replacement: 'border-gray-200 dark:border-white/5' },
  { pattern: /(?<!dark:)bg-dark-900/g, replacement: 'bg-white dark:bg-dark-900' },
  { pattern: /(?<!dark:)bg-dark-800/g, replacement: 'bg-gray-50 dark:bg-dark-800' },
  { pattern: /(?<!dark:)bg-dark-700/g, replacement: 'bg-gray-100 dark:bg-dark-700' },
  // specific fix to avoid duplicate 'text-gray-900 dark:text-gray-900 dark:text-white'
  { pattern: /text-gray-900 dark:text-gray-900 dark:text-white/g, replacement: 'text-gray-900 dark:text-white' }
];

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walkDir(directoryPath);
files.push(path.join(__dirname, 'src', 'App.tsx'));
files.push(path.join(__dirname, 'src', 'pages', 'Home.tsx'));

let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  
  replacements.forEach(({ pattern, replacement }) => {
    newContent = newContent.replace(pattern, replacement);
  });
  
  if (content !== newContent) {
    // some manual cleanup for places where there might be duplicate dark: classes
    newContent = newContent.replace(/text-gray-600 dark:text-gray-400 dark:hover:text-white/g, 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white');
    newContent = newContent.replace(/text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:text-white/g, 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white');

    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
    changedCount++;
  }
});

console.log(`Finished processing. Changed ${changedCount} files.`);
