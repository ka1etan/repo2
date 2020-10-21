// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=greedy-algorithms


'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("gree1.txt");

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

function minimumAbsoluteDifference(arr) {

    let sortedArray = arr.sort((a, b) => { return a - b })
    let minimum = 0
    let prev = sortedArray[0]

    for (let i = 1; i < sortedArray.length; i++) {
        let current = sortedArray[i]
        let diff = parseInt(current - prev)
        if (i == 1 || diff < minimum) { minimum = diff }
        prev = current
    }

    return minimum

}


function main() {

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = minimumAbsoluteDifference(arr);

    //console.log(arr);
    console.log(result + '\n');

}