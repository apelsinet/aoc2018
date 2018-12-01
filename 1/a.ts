import * as fs from 'fs';

const sum = (acc: number, cur: number) => acc + cur;
const start: number = 0;
const input: string = fs.readFileSync('./1/a.input.txt', 'utf8');
const xs: Array<number> = input.split('\n').map(Number);

console.log(xs.reduce(sum, start));
