const { execSync } = require('child_process');

const scaffolds = [
  'ice-stark-child',
  'ice-stark-layout',
  'midway-faas',
  'scaffold-simple',
  // 'scaffold-lite',
  // 'fusion-design-pro',
];

const failed = [];
for (const scaffold of scaffolds) {
  try {
    execSync(`cd scaffolds/${scaffold} && tsc -p ./tsconfig.json`, {
      stdio: 'inherit'
    });
  } catch (err) {
    failed.push(scaffold);
  } 
}

if (failed.length > 0) {
  process.exit(1);
}