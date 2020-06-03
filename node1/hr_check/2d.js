//https://www.hackerrank.com/challenges/30-2d-arrays/problem

//git test2

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("arrays2d.txt");

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


function glassHour(arr) {

    let sum = 0
    let max = 0
    let x = 0
    let y = 0

    while (y <= 3) {
        while (x <= 3) {
            for (let i = y; i < (3 + y); i++) {

                for (let j = x; j < (3 + x); j++) {

                    if(((i == (1 + y)) && (j == (0 + x))) || ((i == (1 + y)) && (j == (2 + x))))
                    {} else 

                    {sum += arr[i][j]}
                }

            }
            if (sum > max || x==0&&y==0) {
                max = sum
            }
            //console.log(sum)
            sum = 0
            x++
        }
        y++
        x = 0
    }

    console.log(max)
}



function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    }
    console.table(arr)
    //console.log(arr[5][4])

    glassHour(arr)
}