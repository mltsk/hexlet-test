import { capitalize } from '../src/capitalize.js';
import { strict as assert } from 'assert';

assert(capitalize('') === '');
assert(capitalize('hello') === 'Hello');
  