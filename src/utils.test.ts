import { hello } from './utils.js';
import { test, expect } from 'vitest';

test('hello', () => {
  expect(hello('world')).toBe('Hello, world!');
});
