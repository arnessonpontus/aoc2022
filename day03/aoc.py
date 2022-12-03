from functools import reduce
from operator import add
from os import environ
import string
import math

def get_letter_to_value():
    alphabet = list(string.ascii_lowercase)
    alphabet.extend([x.upper() for x in alphabet])
    return dict([(y,x+1) for x,y in enumerate(alphabet)])

letter_to_value = get_letter_to_value()

def get_same(lists):
    return set(lists[0]).intersection(*lists[1:])

def getSolutionPart1(input_list):
    rucksacks = [[x[:len(x)//2], x[len(x)//2:]] for x in input_list]
    return reduce(add, [letter_to_value[letter[0]] for letter in [list(get_same(comp)) for comp in rucksacks]])

def getSolutionPart2(input_list):
    rucksacks = [x for x in input_list]
    batch = [rucksacks[i*3:i*3+3] for i in range(0, math.floor(len(rucksacks)/3))]
    return reduce(add, [letter_to_value[x[0]] for x in [list(get_same(r)) for r in batch]])

with open('input.txt') as f:
    file_input = [x for x in f.read().splitlines()]

print('Python')
part = environ.get('part')
if part == 'part2':
    print(getSolutionPart2(file_input))
else:
    print(getSolutionPart1(file_input))