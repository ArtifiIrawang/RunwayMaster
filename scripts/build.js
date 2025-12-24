#!/usr/bin/env node

/**
 * 构建脚本：将所有静态文件复制到 public 目录
 * Vercel 需要这个脚本来构建项目
 */

const fs = require('fs');
const path = require('path');

const sourceDirs = [
  'Home',
  'about-us',
  'Downloads',
  'Case center',
  'Nav'
];

const sourceFiles = [
  'README.md'
];

const outputDir = 'public';

// 清理并创建输出目录
if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}
fs.mkdirSync(outputDir, { recursive: true });

// 复制目录
function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`警告: 源目录不存在: ${src}`);
    return;
  }
  
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 复制文件
function copyFile(src, dest) {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  } else {
    console.warn(`警告: 源文件不存在: ${src}`);
  }
}

console.log('🚀 开始构建...\n');

// 复制所有目录
for (const dir of sourceDirs) {
  const srcPath = path.join(__dirname, '..', dir);
  const destPath = path.join(__dirname, '..', outputDir, dir);
  console.log(`📁 复制目录: ${dir} -> ${outputDir}/${dir}`);
  copyDir(srcPath, destPath);
}

// 复制根目录文件
for (const file of sourceFiles) {
  const srcPath = path.join(__dirname, '..', file);
  const destPath = path.join(__dirname, '..', outputDir, file);
  console.log(`📄 复制文件: ${file} -> ${outputDir}/${file}`);
  copyFile(srcPath, destPath);
}

console.log('\n✅ 构建完成！所有文件已复制到 public/ 目录');
console.log(`📦 输出目录: ${path.join(__dirname, '..', outputDir)}`);







