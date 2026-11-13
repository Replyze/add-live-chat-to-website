// Syntax-checks the README's JavaScript: every ```js block, and every inline
// <script> in ```html, ```erb, ```blade and ```django blocks (template tags
// like {{ ... }} only appear in attributes, never inside a script body).
// JSX and TypeScript blocks are left to their frameworks.
//   node scripts/check-snippets.mjs
import { readFileSync } from 'node:fs';

const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8').replace(/\r\n/g, '\n');
const blocks = [...readme.matchAll(/```(\w*)\n([\s\S]*?)```/g)].map((m) => ({
  lang: m[1],
  code: m[2],
  line: readme.slice(0, m.index).split('\n').length,
}));

let checked = 0;
const failures = [];
const parse = (code, where) => {
  try {
    new Function(code); // parses without running
    checked++;
  } catch (e) {
    failures.push(`${where}: ${e.message}`);
  }
};

for (const b of blocks) {
  if (b.lang === 'js') parse(b.code, `README.md:${b.line} (js)`);
  if (['html', 'erb', 'blade', 'django'].includes(b.lang)) {
    for (const m of b.code.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
      parse(m[1], `README.md:${b.line} (${b.lang} inline script)`);
    }
    for (const m of b.code.matchAll(/<script[^>]*\bsrc="([^"]+)"/g)) {
      if (m[1].includes('replyze') && m[1] !== 'https://cdn.replyze.chat/widget.js') {
        failures.push(`README.md:${b.line}: unexpected widget URL ${m[1]}`);
      }
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Parsed ${checked} JavaScript snippets from ${blocks.length} code blocks.`);
