const path = require('path');
const ts = require('typescript');
const fse = require('fs-extra');
const globby = require('globby');
const { execSync } = require('child_process');

// compile options
const options = {
  esModuleInterop: true,
  jsx: 'react',
  noEmitOnError: true,
  allowJs: true,
  declaration: true,
  emitDeclarationOnly: true,
  skipLibCheck: true,
};

function dtsCompiler(targetFolder) {
  const needCompileList = globby.sync(['**/*.ts?(x)'], {
    cwd: targetFolder,
    ignore: ['node_modules'],
    absolute: true,
  });
  if (needCompileList.length === 0) {
    return;
  }
  console.log('check ts declaration ...');
  // Create a Program with an in-memory emit
  const host = ts.createCompilerHost(options);

  // Prepare and emit the d.ts files
  const program = ts.createProgram([...needCompileList, path.join(__dirname, '../types/typings.d.ts')], options, host);
  const emitResult = program.emit();
  if (emitResult.diagnostics && emitResult.diagnostics.length > 0) {
    emitResult.diagnostics.forEach(diagnostic => {
      const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
      if (diagnostic.file) {
        const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
        console.error(`${diagnostic.file.fileName} (${line + 1}, ${character + 1}): ${message}`);
      } else {
        console.error(message);
      }
      throw new Error('ts checker failed');
    });
  }
  try {
    needCompileList.forEach((filePath) => {
      fse.unlinkSync(filePath.replace(/\.ts(x)?$/, '.d.ts'));
    });
  } catch(err) {
    console.log(err);
  }
};

const blocks = fse.readdirSync(path.join(__dirname, '../blocks'));

for (const block of blocks) {
  const blockFolder = path.join(__dirname, `../blocks/${block}`);
  try {
    execSync(`cd blocks/${block} && npm i`, {
      stdio: 'inherit'
    });
    dtsCompiler(blockFolder);
  } catch (err) {
    throw err;
  }
}
