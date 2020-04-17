//https://www.hackerrank.com/challenges/30-bitwise-and/problem

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("bitwiseTest.txt");

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



function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const a = parseInt(nk[0], 10);

        const b = parseInt(nk[1], 10);

        if (a !== b){
            console.log("incorrect result: "+ a + ". Should be: "+ b)
        }
        
    }
}