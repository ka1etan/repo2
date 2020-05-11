// 

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("str_loops.txt");

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
    let even = input[0]
    let odd = input[1]
    for (let i=2; i < input.length; i++)
    {
        if((i%2)!==0){

            odd = odd.concat(input[i])
        } else {
            even = even.concat(input[i])
        }
    }

    console.log(even + " "+ odd)
  
}


function main() {

    var T = parseInt(readLine());
    for (let i = 0; i < T; i++) {
        var strings = readLine();
        processData(strings)
    }
}