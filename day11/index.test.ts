import { assertEquals } from 'https://deno.land/std@0.166.0/testing/asserts.ts';
import { getSolution, getInputData } from './index.ts';

const input = getInputData('input_test.txt')

// Part 1
Deno.test('Test input should be 10605', () => {
  const res = getSolution(input, 20);
  assertEquals(res, 10605);
});

//Part 2
Deno.test('Test input should be 2713310158', () => {
  const res = getSolution(input, 10000);
  assertEquals(res, 2713310158);
});