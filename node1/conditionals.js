// https://www.hackerrank.com/challenges/30-conditional-statements/problem

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("conditionals.txt");

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
    const N = parseInt(readLine(), 10);
    let check = N % 2;
    if (check != 0) {
        console.log("Weird");
    }
    else if (check == 0 && N >= 2 && N < 5) {
        console.log("Not Weird");
    }
    else if (check == 0 && N >= 6 && N <= 20) {
        console.log("Weird");
    }
    else if (check == 0 && N >= 20) {
        console.log("Not Weird");
    }
}