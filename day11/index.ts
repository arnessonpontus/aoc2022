interface Monkey {
    id: number,
    items: number[],
    performOperation: (old: number) => number,
    performTest: (worryLevel: number) => number,
    numInspections: number,
    divisionValue: number
 }

export function getSolution(monkies: Monkey[], iterations: number): number {
    const maxRequierdVal = monkies.reduce((prev: number, curr: Monkey) => prev * curr.divisionValue, 1)
    for (let i = 0; i < iterations; i++) {
        monkies.forEach(monkey => {
            while (monkey.items.length > 0) {
                const item = monkey.items.shift()!;
                let worryLevel = monkey.performOperation(item);
                worryLevel = iterations === 20 ? Math.floor(worryLevel/3) : worryLevel % maxRequierdVal;
                const reciever = monkey.performTest(worryLevel);
                monkies[reciever].items.push(worryLevel);
                monkey.numInspections++;
            }
        })
    }
    return monkies.sort((a,b) => a.numInspections > b.numInspections ? -1 : 1).slice(0,2).reduce((prev, b) => prev * b.numInspections, 1)
}

export function getInputData(file: string): Monkey[] {
    return Deno.readTextFileSync(file).split('\n\n').map((x, i) => {
        const [_, itemsString, operationString, testString, trueCase, falseCase] = x.split('\n');
        
        const startingItems = itemsString.substring(itemsString.indexOf(':') + 1).split(',').map(x => Number(x))
    
        const operationSign = operationString.charAt(operationString.indexOf('= old') + 6)
        const operationValue = operationString.substring(operationString.indexOf(operationSign) + 1)
        const operationFunc = (old: number) => eval(`old ${operationSign} ${operationValue}`)
    
        const recieverTrue = Number(trueCase.charAt(trueCase.length-1));
        const recieverFalse = Number(falseCase.charAt(falseCase.length-1));
        
        const divisionValue = Number(testString.substring(testString.lastIndexOf(' ') + 1))
        const testFunc = (worryLevel: number) => worryLevel % divisionValue == 0 ? recieverTrue : recieverFalse;
    
        const monkey: Monkey = {
            id: i,
            items: startingItems,
            performOperation: operationFunc,
            performTest: testFunc,
            numInspections: 0,
            divisionValue: divisionValue
        }
        return monkey;
    })
}

const part = Deno.env.get('part') || 'part1';
const input = getInputData('input.txt');
if (part === 'part1') console.log(getSolution(input, 20));
if (part === 'part2') console.log(getSolution(input, 10000));