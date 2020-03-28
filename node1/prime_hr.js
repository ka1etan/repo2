// https://www.hackerrank.com/challenges/30-running-time-and-complexity/problem

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("prime.txt");

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

function processData(input) {
    //Enter your code here
    let check = "prime"
    if (input !== 1) {
        for (let i = 2; i <= Math.sqrt(input); i++) {

            if (i !== input) {
                let module = input % i
                if (!module) {
                    check = "not prime"
                    break
                } else {

                }
            }
        }
    } else { check = "not prime" }
    console.log(check)
}



function main() {

    var T = parseInt(readLine());
    for (let i = 0; i < T; i++) {
        var numbers = parseInt(readLine());
        processData(numbers)
    }
}