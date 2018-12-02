"use strict";
exports.__esModule = true;
var function_1 = require("fp-ts/lib/function");
var fs = require("fs");
var R = require("ramda");
var input = fs.readFileSync('./input', 'utf8');
var output = function_1.compose(R.reduce(R.add, 0), R.map(Number), R.split('\n'))(input);
console.log(output);
