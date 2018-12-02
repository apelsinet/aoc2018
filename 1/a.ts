import { compose } from 'fp-ts/lib/function';
import * as fs from 'fs';
import * as R from 'ramda';
const input: string = fs.readFileSync('./input', 'utf8');

const output = compose(R.reduce(R.add, 0), R.map(Number), R.split('\n'))(input);

console.log(output);
