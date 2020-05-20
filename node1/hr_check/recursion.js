// 

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("recursion.txt");

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
   
    if ((n-1)>1)
    {
       
        return n * processData(n - 1)
        
    }
    
   return n
    
}


function main() {

    
        var value = parseInt(readLine(), 10);
        console.log(processData(value))

    
}