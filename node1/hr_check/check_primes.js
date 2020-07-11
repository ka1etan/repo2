// 

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("checkprime.txt");

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
    //console.log(input)
    let sqrtLimit = Math.floor(Math.sqrt(input))

    if (input !== 1) {

        if (sqrtLimit < 2) {
            console.log("Prime")
        } else {

            for (let i = 2; i <= sqrtLimit; i++) {
                if (input % i == 0) {
                    console.log("Not prime")
                    break
                }
                if (i == sqrtLimit) {
                    console.log("Prime")
                }
            }
        }
    } else {console.log("Not prime")}

}


function main() {

    var T = parseInt(readLine());
    for (let i = 0; i < T; i++) {
        var numbers = parseInt(readLine());
        processData(numbers)
    }
}