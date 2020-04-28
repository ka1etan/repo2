// 

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("conds.txt");

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

function processData(n) {

    let weirdCheck = "Not Weird"
    let oddCheck = n % 2
    if (oddCheck == 0) {
        if (n >= 2 && n < 5) {
            weirdCheck = "Not Weird"
        } else if (n >= 6 && n <= 20) {
            weirdCheck = "Weird"
        }
        else if (n > 20) {
            weirdCheck = "Not Weird"
        }
    }
    else {
        weirdCheck = "Weird"
    }

    return weirdCheck

}


function main() {


    var numbers = parseInt(readLine());
    console.log(processData(numbers))

}