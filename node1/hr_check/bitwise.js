// https://www.hackerrank.com/challenges/30-bitwise-and/problem

'use strict';

//var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("bitwise.txt");

stream.resume();
stream.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

stream.on('data', inputStdin => {
    inputString += inputStdin;
});

stream.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();

});

function readLine() {
    return inputString[currentLine++];
}


function bitwise(a, b) {

  let max = 0

  for (let i=1; i<=a; i++){
        
        for (let j=1;j<=a;j++){
            if(j>i){
                let result = i & j
                if(max<result && result < b){
                    max = result
                }
            }
        }
  }

  console.log(max)
  return max
      
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

       bitwise(n, k)
    }
}