// https://www.hackerrank.com/challenges/flipping-bits/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=miscellaneous


'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("fbits.txt");

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

function flippingBits(N) {

    let binary = []
    let sum = 0

    for (let i = 0; i < 32; i++) {

        if (N < 1) {
            binary.push(0)
        } else {
            let y = N % 2
            binary.push(y)
            N = Math.floor(N / 2)
        }
    }


    for (let j = binary.length - 1; j >= 0; j--) {
        if (binary[j] == 1) {

        } else { sum += Math.pow(2, j) }
    }

    return sum

}


function main() {

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {

        const n = parseInt(readLine(), 10);

        const result = flippingBits(n);

        console.log(result + '\n');
        //console.log(n);
    }
}