"use strict";
exports.__esModule = true;
var fs = require("fs");
var sum = function (acc, cur) { return acc + cur; };
var start = 0;
var input = fs.readFileSync('./1/a.input.txt', 'utf8');
var xs = input.split('\n').map(Number);
console.log(xs.reduce(sum, start));
