function performCycle(clockCycle: number, currRegisterVal: number): number {
    if ((clockCycle - 20) % 40 === 0) {
        return clockCycle * currRegisterVal;
    }
    return 0
}

function draw(midSpriteCol: number, registerValue: number): string {
    if (registerValue >= midSpriteCol - 1 && registerValue <= midSpriteCol + 1 ) {
        return midSpriteCol === 0 ? "\n#" : "#"
    } else {
        return midSpriteCol === 0 ? "\n." : "."
    }
}

export function getSolutionPart1(input: string[][]): number {
    let clockCycle = 0;
    let registerValue = 1;
    let totalRegisterValue = 0;

    for (const instruction of input) {
        for (let i = 0; i < instruction.length; i++) {
            totalRegisterValue += performCycle(++clockCycle, registerValue);
        }
    
        if (instruction.length === 2) {
            registerValue += parseInt(instruction[1]);
        }
    }
    return totalRegisterValue;

}

export function getSolutionPart2(input: string[][]): string {
    let output = ''
    let clockCycle = 0;
    let registerValue = 1;

    for (const instruction of input) {
        for (let i = 0; i < instruction.length; i++) {
            output += draw(clockCycle++ % 40, registerValue);
        }
    
        if (instruction.length === 2) {
            registerValue += parseInt(instruction[1]);
        }
    }

    return output
}

const part = Deno.env.get('part') || 'part1';
const input = Deno.readTextFileSync('input.txt').split('\n').map(i => (i.split(' ')));
if (part === 'part1') console.log(getSolutionPart1(input));
if (part === 'part2') console.log(getSolutionPart2(input));