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
};

function dtsCompiler(targetFolder) {
  const needCompileList = globby.sync(['**/*.ts?(x)'], {
    cwd: targetFolder,
    ignore: ['node_modules', '*.d.ts'],
    absolute: true,
  });
  if (needCompileList.length === 0) {
    return;
  }
  console.log('check ts declaration ...');
  // Create a Program with an in-memory emit
  const host = ts.createCompilerHost(options);

  // Prepare and emit the d.ts files
  const program = ts.createProgram(needCompileList, options, host);
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
};

// const blocks = fse.readdirSync(path.join(__dirname, '../blocks'));
// 修改一个区块添加一个检测
const blocks = ['ActionTable','AdvancedDetail','BasicDetail','BasicForm','BasicList','CardList','FlowForm', 'Forbidden', 'FourColumnForm','ExpandTable','FailDetail','FilterTable','FusionCardAreaChart','FusionCardBarChart','FusionCardGroupBarChart'];

for (const block of blocks) {
  const blockFolder = path.join(__dirname, `../blocks/${block}`);
  const dtsFile = path.join(blockFolder, 'src', 'typings.d.ts');
  try {
    execSync(`cd blocks/${block} && npm i`, {
      stdio: 'inherit'
    });
    fse.copyFileSync(path.join(__dirname, '../types/typings.d.ts'), dtsFile);
    dtsCompiler(blockFolder);
    fse.removeSync(dtsFile)
  } catch (err) {
    fse.removeSync(dtsFile)
    throw err;
  }
}