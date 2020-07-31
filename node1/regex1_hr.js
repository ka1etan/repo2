// https://www.hackerrank.com/challenges/js10-regexp-1/problem

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("regex1.txt");

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

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let checkFirst = new RegExp(/^[aeiou]/g)
    let checkLast = new RegExp(/[aeiou]$/g)

    //let re = new RegExp(/^([aeiou]).*\1$/g)
    let re = new RegExp(/^([aeiou]).*\1$/g)

    
    /*
     * Do not remove the return statement
     */
    
    return re;
}


function main() {

    var input = readLine()
    let regex = regexVar()

    console.log(regex.test(input))
   
}