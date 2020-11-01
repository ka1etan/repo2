// https://www.hackerrank.com/challenges/js10-regexp-2/problem


'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("regex1.txt");

stream.resume();
stream.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

stream.on('data', inputStdin => {
    inputString += inputStdin;
});

stream.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();

});

function readLine() {
    return inputString[currentLine++];
}

function regexVar() {

    let re = new RegExp(/^((Mrs|Mr|Dr|Ms|Er)[.])[^\W]+$/g)

    return re

}


function main() {

    const re = regexVar();
    const s = readLine();

    let z = "Mr.zzzz"
    //console.log(z.search(/l/g))
    //console.log(!!z.match(/[.]/g))
    console.log(!!s.match(re));
    console.log(z.match(re));
    console.log(!!z.match(re));
    //console.log(s)

}