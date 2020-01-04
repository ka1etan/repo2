//https://www.hackerrank.com/challenges/30-sorting/problem

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("bs.txt");

stream.resume();
stream.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

stream.on('data', inputStdin => {
    inputString += inputStdin;
});

stream.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
    
});

function readLine() {
    return inputString[currentLine++];
}

function bubbleSort(a) {
    let swapCounter = 0
    for (let j = 0; j < a.length; j++) {
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                let tmp = a[i]
                a[i] = a[i + 1]
                a[i + 1] = tmp
                swapCounter++
            }
        }
        if (swapCounter == 0) {
            break
        }
    }
    console.log(a)
    console.log("Array is sorted in "+swapCounter+" swaps")
    console.log("First element: "+ a[0])
    console.log("Last element: "+ a[a.length-1])
}

function main() {
    var n = parseInt(readLine());
    let a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    bubbleSort(a)

}
