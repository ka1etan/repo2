// https://www.hackerrank.com/challenges/30-sorting/problem

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("bsort.txt");

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


function sort(a, n) {

    let numberOfSwaps = 0;

    for (let i = 0; i < n; i++) {
        // Track number of elements swapped during a single array traversal

        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {

                let tmp = a[j]
                a[j] = a[j + 1]
                a[j + 1] = tmp

                numberOfSwaps++;
            }
        }

        // If no elements were swapped during a traversal, array is sorted
        if (numberOfSwaps == 0) {
            break;
        }
    }

    console.log(`Array is sorted in ${numberOfSwaps} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a[a.length - 1]}`)

}

function main() {
    var n = parseInt(readLine());
    let a = readLine().split(' ');
    a = a.map(Number);

    sort(a, n)
}