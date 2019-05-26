// https://www.hackerrank.com/challenges/30-loops/problem

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("loops.txt");

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



function main() {

    const n = parseInt(readLine(), 10);

    for (let i=1; i<=10; i++){
        console.log(n + " x " + i + " = " + n*i);
    }

}