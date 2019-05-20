// https://www.hackerrank.com/challenges/30-data-types/problem

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("datatypes.txt");

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
    //console.log("done")
});

function readLine() {
    return inputString[currentLine++];
}

function main(){

var i = 4
var d = 4.0
var s = "HackerRank "

var a ;
var b ;
var c ;

// Read and save an integer, double, and String to your variables.

a = parseInt(readLine());
b = parseFloat(readLine());
c = readLine();
//let float = parseFloat(d);
// Print the sum of both integer variables on a new line.
console.log(i + a);
// Print the sum of the double variables on a new line.
console.log((d + b).toFixed(1));
// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
console.log(s + c);
}