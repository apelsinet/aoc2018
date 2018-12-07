import { compose } from 'fp-ts/lib/function';
import * as fs from 'fs';
import * as R from 'ramda';
import { trace } from '../trace';
const input: string = fs.readFileSync('./input', 'utf8');

const isUnique = (acc: number[], cur: number): boolean => {
    const last = R.takeLast(1)(acc)[0];
    const index = R.findIndex(el => el === last)(acc);
    return index === -1 || index === acc.length - 1;
};

const iterator = (acc: number[], cur: number): number[] =>
    R.concat(acc, [(R.last(acc) || 0) + cur]);

const output = compose(
    R.reduceWhile(isUnique, iterator, [0]),
    R.flatten,
    R.repeat(R.__, 500),
    R.filter(el => el !== 0),
    R.map(Number),
    R.split('\n'),
)(input);

console.log('output: ', R.last(output));
