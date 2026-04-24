import Asciidoctor from 'asciidoctor';
import * as fs from 'fs';
import * as path from 'path';

const asciidoctor = Asciidoctor();

const inputPath = path.join(__dirname, 'policies.adoc');
const outputPath = path.join(__dirname, 'export.html');

const source = fs.readFileSync(inputPath, 'utf-8');

// Convert without standalone wrapper, but include document title
const html = asciidoctor.convert(source, {
  safe: 'safe',
  standalone: false,
  attributes: { showtitle: true },
}) as string;

fs.writeFileSync(outputPath, html, 'utf-8');
console.log(`Exported: ${outputPath}`);
