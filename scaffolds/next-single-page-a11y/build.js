'use strict';

const fs = require('fs-extra');
const path = require('path');
const globby = require('globby');

// 复制 demos 到 build 目录，并替换相对地址
const buildPath = path.resolve('./build');

globby('demos/*.html').then((files) => {
  fs.mkdirsSync('build');
  files.forEach((item) => {
    const filepath = `${buildPath}/${path.basename(item)}`;

    fs.copySync(item, filepath);
    const content = fs.readFileSync(filepath, 'utf8').replace('/build/', './');
    fs.writeFileSync(filepath, content.replace(/\/build\//g, './'));
  });
});

console.log('copy files to build/lib done !');
