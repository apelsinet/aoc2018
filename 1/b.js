"use strict";
exports.__esModule = true;
var function_1 = require("fp-ts/lib/function");
var fs = require("fs");
var R = require("ramda");
var input = fs.readFileSync('./input', 'utf8');
var isUnique = function (acc, cur) {
    var last = R.takeLast(1)(acc)[0];
    var index = R.findIndex(function (el) { return el === last; })(acc);
    return index === -1 || index === acc.length - 1;
};
var iterator = function (acc, cur) {
    return R.concat(acc, [(R.last(acc) || 0) + cur]);
};
var output = function_1.compose(R.reduceWhile(isUnique, iterator, [0]), R.flatten, R.repeat(R.__, 500), R.filter(function (el) { return el !== 0; }), R.map(Number), R.split('\n'))(input);
console.log('output: ', R.last(output));
