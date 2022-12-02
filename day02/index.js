import fs from 'fs'

const part1Map = {"AX": 3 + 1, "AY": 6 + 2, "AZ": 0 + 3, "BX": 0 + 1, "BY": 3 + 2, "BZ": 6 + 3, "CX": 6 + 1, "CY": 0 + 2, "CZ": 3 + 3}
const part2Map = {"AX": 0 + 3, "AY": 3 + 1, "AZ": 6 + 2, "BX": 0 + 1, "BY": 3 + 2, "BZ": 6 + 3, "CX": 0 + 2, "CY": 3 + 3, "CZ": 6 + 1}

export function readInput(filename="input.txt") {
    return fs.readFileSync(filename).toString().trim().split("\n")
}

export function getSolutionPart1() {
    return readInput().reduce((a, b) => a + part1Map[b.replace(/\s/g, "")], 0)       
}

export function getSolutionPart2() {
    return readInput().reduce((a, b) => a + part2Map[b.replace(/\s/g, "")], 0)       
}

console.log("Javascript")
const part = process.env.part || "part1"

if (part === "part1")
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())
