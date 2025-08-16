import assert from 'node:assert/strict';
import { test } from 'node:test';
import { celsiusToFahrenheit } from '../src/utils/convert.js';

test('celsiusToFahrenheit converts correctly', () => {
  assert.equal(celsiusToFahrenheit(0), 32);
  assert.equal(celsiusToFahrenheit(100), 212);
  assert.equal(celsiusToFahrenheit(-40), -40);
});
