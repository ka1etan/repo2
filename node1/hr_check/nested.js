// https://www.hackerrank.com/challenges/30-nested-logic/problem

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("nested.txt");

stream.resume();
stream.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

stream.on('data', inputStdin => {
    inputString += inputStdin;
});

stream.on('end', _ => {
    // inputString = inputString.replace(/\s*$/, '')
    //     .split('\n')
    //     .map(str => str.replace(/\s*$/, ''));

    console.log(main(inputString));

});

// function readLine() {
//     return inputString[currentLine++];
// }


function main(input) {
    
    let current = input.split('\n')[0].split(' ')
    let expected = input.split('\n')[1].split(' ')

    let currentDay = parseInt(current[0])
    let currentMonth = parseInt(current[1])
    let currentYear = parseInt(current[2])

    let expectedDay = parseInt(expected[0])
    let expectedMonth = parseInt(expected[1])
    let expectedYear = parseInt(expected[2])
    //console.log(expectedYear)

    let fine = 0

    if(currentYear<expectedYear){

        return fine
    
    }

    else if(currentYear>expectedYear){

        fine = 10000
        return fine
    } else if(currentMonth>expectedMonth) {

        fine = (currentMonth-expectedMonth)*500

        return fine
    } else if(currentDay>expectedDay){

        fine = (currentDay-expectedDay)*15
        return fine
    } else {return fine}

}