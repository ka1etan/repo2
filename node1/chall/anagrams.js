// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings


'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("anagram.txt");

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

function makeAnagram(a, b) {

    let counter = 0
    let numberOfDeletions = 0


    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if ((a[i] == b[j]) && (b[j] !== "0")) {
                a = a.replace(a[i], "0")
                counter++
                b = b.replace(b[j], "0")
                counter++
            }
        }
    }

    numberOfDeletions = parseInt(a.length + b.length) - counter

    return `${a} | ${b} | ${numberOfDeletions} | ${counter}`

}



function main() {

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    console.log(res)


}