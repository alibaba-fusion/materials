const oss = require('ali-oss');
const path = require('path');
const fs = require('fs');
// const request = require('request');
const scaffolds = require('./scaffolds');

const bucket = 'iceworks';
const accessKeyId = process.env.ACCESS_KEY_ID;
const accessKeySecret = process.env.ACCESS_KEY_SECRET;
const dirPath = 'materials/';   // / 对应 iceworks 2.x
const assetsPath = process.env.BRANCH_NAME === 'master' ? 'assets' : 'pre-assets'; // assets 正式

const ossClient = oss({
  bucket,
  endpoint: 'oss-cn-hangzhou.aliyuncs.com',
  accessKeyId,
  accessKeySecret,
  timeout: '120s',
});

const materialPath = path.resolve(__dirname, '../../build/materials.json');
const toPath = path.join(assetsPath, dirPath, 'react-materials.json');

console.log('start upload oss', materialPath, toPath);

const materialData = fs.readFileSync(materialPath, 'utf-8');
console.log('materialData', materialData);

ossClient
  .put(toPath, materialPath)
  .then(result => {
    console.log('upload success', result);
  });

/**
 * 按照下载量进行排序推荐
 */
function sortScaffoldMaterials() {
  return new Promise((resolve, reject) => {
    const materialsData = JSON.parse(fs.readFileSync(materialPath, 'utf-8'));

    const sortMaterialsData = [];
    scaffolds.forEach(scaffold => {
      materialsData.scaffolds.forEach(currentItem => {
        if (currentItem.source.npm === scaffold) {
          sortMaterialsData.push(currentItem);
        }
      });
    });

    materialsData.scaffolds = sortMaterialsData;

    return fs.writeFile(materialPath, JSON.stringify(materialsData, null, 2), 'utf-8', err => {
      if (err) reject(err);
      resolve();
    });
  });
}
