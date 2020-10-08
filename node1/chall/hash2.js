// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps


'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("hash2.txt");

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

function twoStrings(s1, s2) {

    let obj = {}
    let result = "NO"

    for (let i = 0; i < s1.length; i++) {
        if (!obj[s1[i]]) {
            obj[s1[i]] = 1
        } else { obj[s1[i]]++ }
    }

    for (let j = 0; j < s2.length; j++) {
        if (obj[s2[j]]) {
            result = "YES";
            break
        }
    }

    return result

}



function main() {

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {

        const s1 = readLine();

        const s2 = readLine();

        let result = twoStrings(s1, s2);

        console.log(result + "\n");

        //console.log(`${s1} ${s2}`)
    }
}