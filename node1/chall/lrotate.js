// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays


'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("lrotate.txt");

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

function rotLeft(a, d) {

    if (a.length > 1) {

        for (let i = 0; i < d; i++) {
            for (let j = 1; j < a.length; j++) {
                let tmp = a[j]
                a[j] = a[j - 1]
                a[j - 1] = tmp
            }
        }
    }

    return a

}



function main() {

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    //console.log(`${n} ${d} ${a}`)

    console.log(result.join(' ') + '\n');


}