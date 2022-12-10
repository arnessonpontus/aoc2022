import { assertEquals } from 'https://deno.land/std@0.166.0/testing/asserts.ts';
import { getSolutionPart1, getSolutionPart2 } from './index.ts';

const input = Deno.readTextFileSync('input_test.txt').split('\n').map(i => (i.split(' ')));

// Part 1
Deno.test('Test input should be 13140', () => {
  const res = getSolutionPart1(input);
  assertEquals(res, 13140);
});

//Part 2
Deno.test('Test input should be 70', () => {
  const res = getSolutionPart2(input);
  assertEquals(res, 70);
});