#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const entriesToCopy = [
  'index.html',
  'about.html',
  'book.html',
  'contact.html',
  'assets'
];

function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

function cleanDist() {
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
}

function build() {
  cleanDist();
  fs.mkdirSync(distDir, { recursive: true });
  for (const entry of entriesToCopy) {
    const srcPath = path.join(projectRoot, entry);
    if (!fs.existsSync(srcPath)) {
      console.warn(`Skipping missing entry: ${entry}`);
      continue;
    }
    const destPath = path.join(distDir, entry);
    copyRecursive(srcPath, destPath);
  }
  console.log('Static site copied to dist/.');
}

build();
