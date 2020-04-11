//https://www.hackerrank.com/challenges/30-regex-patterns/problem

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("regex.txt");

stream.resume();
stream.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

stream.on('data', inputStdin => {
    inputString += inputStdin;
});

stream.on('end', _ => {
    inputString = inputString.trim().split(new RegExp('[ \n]+')).map(string => {
        return string.trim();
    });

    main();

});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    let arr = []
    let num = parseInt(readLine())
    for (let i = 0; i < num; i++) {
        let name = readLine()
        let email = readLine()
        if ((email.match(/@gmail/g))) {
            arr.push(name)
        }
    }
    arr.sort()

    //console.table(JSON.stringify(arr))
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }

}
