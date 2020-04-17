//https://www.hackerrank.com/challenges/30-bitwise-and/problem

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("bitwise_in.txt");

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



function bitwise(a, b) {
    let result = a & b
    //console.log(result)
    return result
}


function prepareNumbers(n, k) {

    let max = 0
    for (let i = 1; i < n; i++) {
        let b = i + 1

        while (b <= n) {
            if (i < b) {
                let result = bitwise(i, b)
                if (result < k && result > max)
                    max = result
            }
            b++
        }

    }
    console.log(max)
    return max
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        //console.log(n, k)
        prepareNumbers(n, k)
    }
}