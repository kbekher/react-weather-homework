// Example Node.js built-in test (test/example.test.js)
import assert from 'node:assert/strict';
import { test } from 'node:test';

test('basic math works', () => {
  assert.equal(2 + 2, 4);
});
