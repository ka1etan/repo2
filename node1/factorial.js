// https://www.hackerrank.com/challenges/30-recursion/problem

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("fact.txt");

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

function factorial(a)
{
    let result = 1
    
    if (a>0)
    {
         result = a * factorial(a-1)
    }

    return result
}

// function main()
// {
//     //console.log("test")
//    let x = factorial(2)
//    console.log(x)
// }

// main()


function main() {
    
    const n = parseInt(readLine(), 10);
    let x = factorial(n);
    console.log(x)
    
}


