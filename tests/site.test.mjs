import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('the install page loads no executable or third-party style content', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const css = readFileSync(new URL('../styles.css', import.meta.url), 'utf8');
  assert.doesNotMatch(html, /<script\b|\son\w+\s*=|javascript:/i);
  assert.match(html, /http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self'; img-src 'self' data:; script-src 'none'; base-uri 'none'; form-action 'none'"/);
  assert.deepEqual([...html.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*href="([^"]+)"/g)].map(match => match[1]), ['styles.css']);
  assert.doesNotMatch(css, /@import|url\s*\(/i);
  assert(css.length > 1000);
});
