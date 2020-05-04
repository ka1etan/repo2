// 

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

});

function readLine() {
    return inputString[currentLine++];
}

function processData(n) {
    //Enter your code here
    for (let i=1; i <= 10; i++){

        let result = i*n
        console.log(n + " x "+i+" = "+result)
    }
  
}


function main() {

    
    
        var n= parseInt(readLine());
        processData(n)
    
}