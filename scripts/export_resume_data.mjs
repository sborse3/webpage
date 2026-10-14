import ts from 'typescript';
import { readFileSync } from 'node:fs';

// Use the website's typed content as the source for the downloadable résumé.
const source = readFileSync(new URL('../constants.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
});
const { RESUME_DATA } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
process.stdout.write(JSON.stringify(RESUME_DATA, null, 2));
