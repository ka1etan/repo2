// https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("valleys.txt");

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


function countingValleys(n, s) {

    let level = 0
    //let tmp = null
    let counter = 0

    for (let i = 0; i < n; i++) {
        if (s[i] == "U") {
            level += 1
        } else { level -= 1 }

        if (level == 0) {
            if (s[i] !== "D") {
                counter++
            }
        }
        // tmp = s[i]
    }

    return counter
}



function main() {
    const t = parseInt(readLine(), 10);
    const input = readLine()
    let result = countingValleys(t, input)
    console.log(result)

}