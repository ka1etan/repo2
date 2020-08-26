// https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("achars.txt");

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


function alternatingCharacters(s) {

    let count = 0
    let first = s[0]

    if(s.length>1){
    for (let i = 1; i < s.length; i++) {
        let next = s[i]
        if (first == next) {
            count++
        }
        first = next
    }}

    return count
   
}



function main() {

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = alternatingCharacters(s);

        //console.log(s)
        console.log(result + "\n");
    }

}